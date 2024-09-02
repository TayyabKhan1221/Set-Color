function Button({ content, bgcolor, fontcolor, onClick, className }) {
  return (
    <button
      className={`bg-slate-200 border rounded-lg ml-5 my-2 ${className}`}
      onClick={onClick}
      style={{
        backgroundColor: bgcolor || "red",
        color: fontcolor || "black",
        margin: "10px",
        padding: "1px",
        width: "75px",
        height: "30px",
        borderRadius: "5px",
      }}
    >
      {content}
    </button>
  );
}

export default Button;
