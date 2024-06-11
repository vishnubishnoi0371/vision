const CommonBtn = (props) => {
  return (
    <>
      <button
        aria-label="main_button"
        className={`text-base font-normal font-Poppins leading-lg  ${
          props.padding ? "" : "py-4 px-7"
        } ${props.className}`}
      >
        {props.btnName}
      </button>
    </>
  );
};

export default CommonBtn;
