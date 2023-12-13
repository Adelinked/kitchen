import { useState, Children, useEffect, useRef } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

interface menuInerface {
  children: JSX.Element | JSX.Element[];
  footer?: boolean;
}
const Menu = ({ children, footer }: menuInerface): JSX.Element => {
  const arrayChildren = Children.toArray(children);
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const menuElement = menuRef.current as HTMLDivElement | null;
    if (menuElement == null) return;
    if (show) {
      menuElement.classList.add("animateMenu");
      setTimeout(() => {
        menuElement.classList.remove("animateMenu");
      }, 100);
    }
  }, [show]);

  return (
    <div className={`${footer ? "verticalNavBar" : "mb-1"}`}>
      <span className="flex  justify-start">
        <span>{arrayChildren[0]}</span>
        <span
          className=" cursor-pointer hover:text-primary-500 text-2xl"
          onClick={() => {
            setShow((current) => !current);
          }}
        >
          {show ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </span>
      </span>

      {show ? (
        <div
          className={`ml-1 pl-1 border-l-2 border-gray-950 dark:border-white transition-all ease-in-out duration-400`}
          ref={menuRef}
        >
          {arrayChildren.slice(1).map((i, index) => (
            <span key={index}>{i}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Menu;
