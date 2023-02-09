const IconButton = (props) => {
  return (
    <button
      className={`w-full p-2 text-2xl text-gray-50 text-center ${
        props.active ? "border-l-2 border-gray-50" : ""
      }`}
    >
      {props.icon}
    </button>
  );
};

export default IconButton;
