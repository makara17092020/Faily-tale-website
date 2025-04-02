function Button() {
  const shoot = () => {
    alert("Great Shot!");
  };

  return (
    <button
      onClick={shoot}
      className="bg-[#983FFD] text-white font-bold py-3 px-10 rounded"
    >
      Problem Solving
    </button>
  );
}

export default Button;
