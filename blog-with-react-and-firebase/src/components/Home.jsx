import { useEffect, useState } from "react";
import { db } from "../firebase";
import "./Home.css";
import { collection, getDocs } from "firebase/firestore";

export const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPostList(
        data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        }),
      );
    };
    getPosts();
  }, []);
  return (
    <div className="homePage">
      {postList.map((post) => {
        return (
          <div className="homePageContainer" key={post.id}>
            <div className="postHeader">
              <h1>{post.title}</h1>
            </div>
            <div className="postTextContainer">{post.post}</div>
            <div className="postFooter">
              <h3>@{post.author.username}</h3>
              <button>削除</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
