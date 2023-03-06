import { useState } from "react";
import useEth from "../../contexts/EthContext/useEth";

function ContractBtns({ setValue }) {
  const { state: { contract, accounts } } = useEth();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = e => {
    if (/^\d+$|^$/.test(e.target.value)) {
      setInputValue(e.target.value);
    }
  };

  const getGreeter = async () => {
    const value = await contract.methods.getGreeter().call({ from: accounts[0] });
    setValue(value);
  };

  const setGreeter = async e => {
    if (e.target.tagName === "INPUT") {
      return;
    }
    if (inputValue === "") {
      alert("Please enter a value to write.");
      return;
    }
    const newValue = inputValue;
    await contract.methods.setGreeter(newValue).send({ from: accounts[0] });
  };

  return (
    <div className="btns">

      <button onClick={getGreeter}>
      getGreeter()
      </button>

      <div onClick={setGreeter} className="input-btn">
      setGreeter(<input
          type="text"
          placeholder="string"
          value={inputValue}
          onChange={handleInputChange}
        />)
      </div>

    </div>
  );
}

export default ContractBtns;
