import "./Sidebar.css";

export const Sidebar = ({
  onAddNote,
  notes,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) => {
  const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1>ノート</h1>
        <button onClick={onAddNote}>追加</button>
      </div>
      <div className="sidebar-notes">
        {sortedNotes.map((note) => (
          <div
            className={`sidebar-note ${activeNote === note.id && "active"}`}
            key={note.id}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
              <button onClick={() => onDeleteNote(note.id)}>削除</button>
            </div>
            <p>{note.content}</p>
            <small>{note.modDate.toLocaleString("ja-JP")}</small>
          </div>
        ))}
      </div>
    </div>
  );
};
