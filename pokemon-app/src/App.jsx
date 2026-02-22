import { useEffect, useState } from "react";
import "./App.css";
import { getAllPokemon, getPokemon } from "./utils/pokemon";
import { Card } from "./components/Card/Card";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [nextURL, setNextURL] = useState("");
  const [prevURL, setPrevURL] = useState("");

  const loadPokemon = async (data) => {
    // 20匹のポケモンのデータをfetchするまで時間がかかるのでall
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      }),
    );
    // awaitにより上のPromiseがFulfilledになったら（データ取得したら）
    // 実行
    // awaitがなかった場合、先にsetされる。
    // thenでも同じことができる
    setPokemonData(_pokemonData);
  };

  useEffect(() => {
    const fetchPokemonData = async () => {
      // 全てのポケモンを取得
      let res = await getAllPokemon(BASE_URL);
      // 各ポケモンの詳細を取得
      loadPokemon(res.results);

      setPrevURL(res.previous); // null
      setNextURL(res.next);

      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const handleNextPage = async () => {
    setLoading(true);
    let res = await getAllPokemon(nextURL);
    await loadPokemon(res.results);
    setNextURL(res.next);
    setPrevURL(res.previous);
    setLoading(false);
  };

  const handlePrevPage = async () => {
    if (!prevURL) return;

    setLoading(true);
    let res = await getAllPokemon(prevURL);
    await loadPokemon(res.results);
    setNextURL(res.next);
    setPrevURL(res.previous);

    setLoading(false);
  };

  return (
    <>
      <Navbar />
      <div className="App">
        {loading ? (
          <h1>Now Loading</h1>
        ) : (
          <>
            <div className="pokemonCardContainer">
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />;
              })}
            </div>
            <div className="btn">
              <button onClick={handlePrevPage}>前へ</button>
              <button onClick={handleNextPage}>次へ</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
