const Button = () => {
  return (
    <a
      className="px-15 shadow-lg py-3 min-w-[120px] text-center text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring"
      href="/download"
    >
      Problem Solving
    </a>
  );
};

export default Button;

// function Button() {
//   const shoot = () => {
//     alert("Great Shot!");
//   };

//   return (
//     <button
//       onClick={shoot}
//       className="bg-[#983FFD] text-white font-bold py-3 px-10 rounded"
//     >
//       Problem Solving
//     </button>
//   );
// }

// export default Button;

// function Button({props}) {
//   const shoot = () => {
//     alert("Great Shot!");
//   };

//   return (
//     if (props.selected === true) {
//         <button
//           onClick={shoot}
//           className="bg-[#983FFD] text-white font-bold py-3 px-10 rounded"
//         >
//           Problem Solving
//         </button>
//     } else {
//       <button
//       onClick={shoot}
//       className="bg-[#ffffff] text-purple font-bold py-3 px-10 rounded"
//     >
//       Problem Solving
//     </button>
//     }

//   );
// }

// export default Button;
