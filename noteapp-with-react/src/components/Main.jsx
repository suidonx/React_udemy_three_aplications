import "./Main.css";
import ReactMarkdown from "react-markdown";

export const Main = ({ activeNote, onUpdateNote }) => {
  const onEditNote = (key, value) => {
    onUpdateNote({ ...activeNote, [key]: value, modDate: new Date() });
  };

  if (!activeNote) {
    return <div className="no-active-note">ノートが選択されていません</div>;
  }

  return (
    <div className="main">
      <div className="main-note-edit">
        <input
          id="title"
          type="text"
          value={activeNote.title}
          onChange={(e) => onEditNote("title", e.target.value)}
        />
        <textarea
          id="content"
          value={activeNote.content}
          placeholder="ノート内容を記入"
          onChange={(e) => {
            onEditNote("content", e.target.value);
          }}
        ></textarea>
      </div>
      <div className="main-note-preview">
        <h1>{activeNote.title}</h1>
        <div className="markdown-preview">
          <ReactMarkdown>{activeNote.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
