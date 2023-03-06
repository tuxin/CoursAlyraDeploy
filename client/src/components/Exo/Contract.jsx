import { useRef, useEffect } from "react";

function Contract({ value }) {
  const spanEle = useRef(null);

  useEffect(() => {
    spanEle.current.classList.add("flash");
    const flash = setTimeout(() => {
      spanEle.current.classList.remove("flash");
    }, 300);
    return () => {
      clearTimeout(flash);
    };
  }, [value]);

  return (
    <code>
      {`contract SimpleStorage {
  string value = `}

      <span className="secondary-color" ref={spanEle}>
        <strong>{value}</strong>
      </span>

      {`;

  function getGreeter() public view returns (string memory) {
    return greeter;
  }

  function setGreeter(string memory _greeter) public {
    greeter = _greeter;
  }
}`}
    </code>
  );
}

export default Contract;
