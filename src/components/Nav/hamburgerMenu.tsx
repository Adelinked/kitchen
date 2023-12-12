const HumburgerMenu = ({ displayListMenu, setDisplayListMenu }) => {
  const toggle = () => {
    setDisplayListMenu(!displayListMenu);
  };
  return (
    <button
      className="md:hidden z-50 cursor-pointer"
      onClick={toggle}
      aria-label="Hamburger Menu"
    >
      <div className="w-6 ml-[-10px]  transition-all ease duration-300">
        <div className="relative ">
          <span
            className="absolute top-0 inline-block w-full h-[0.2rem] bg-dark dark:bg-light rounded transition-all ease duration-200"
            style={{
              transform: displayListMenu
                ? "rotate(-45deg) translateY(0)"
                : "rotate(0deg) translateY(6px)",
            }}
          >
            &nbsp;
          </span>
          <span
            className="absolute top-0 inline-block w-full h-[0.2rem] bg-dark dark:bg-light rounded transition-all ease duration-200"
            style={{
              opacity: displayListMenu ? 0 : 1,
            }}
          >
            &nbsp;
          </span>
          <span
            className="absolute top-0 inline-block w-full h-[0.2rem] bg-dark dark:bg-light rounded transition-all ease duration-200"
            style={{
              transform: displayListMenu
                ? "rotate(45deg) translateY(0)"
                : "rotate(0deg) translateY(-6px)",
            }}
          >
            &nbsp;
          </span>
        </div>
      </div>
    </button>
  );
};

export default HumburgerMenu;
