const ButtonOutline = ({ style = "text-gray-800 ", text }) => {
  return (
    <button
      className={`uppercase text-sm border-2 px-6 py-2 h-fit rounded ${style} hover:scale-105 transition-all delay-75 duration-200 `}
    >
      {text}
    </button>
  );
};

export default ButtonOutline;
