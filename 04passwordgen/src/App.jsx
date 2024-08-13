import { useState, useEffect, useCallback, useRef} from "react";

function App() {
  const [length, setLength] = useState(8);
  const [includeNumber, setIncludesNumber] = useState(true);
  const [includeSpecialChar, setIncludeSpecialChar] = useState(true);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNumber) string += "0123456789";
    if (includeSpecialChar) string += "!@#$%^&*-_+= []{}~`";
    for (let i = 0; i < length; i++) {
      pass += string.charAt(Math.floor(Math.random() * string.length));
    }
    setPassword(pass);
  }, [length, includeNumber, includeSpecialChar, setPassword]);

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);

  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, includeNumber, includeSpecialChar, passwordGenerator]); // Only re-run when passwordGenerator changes

  return (
    <div className="w-full min-h-screen bg-slate-400">
      <h1 className="text-white text-3xl text-center">Password Generator</h1>
      <div className="flex justify-center items-center mt-2 p-2 bg-slate-700">
        <input
          className="px-4 py-2 rounded-s-md outline-none"
          type="text"
          value={password}
          readOnly
          ref={passwordRef}
        />
        <button
          className="bg-blue-400 text-white px-4 py-2 rounded-e-md"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>
      <div className="flex justify-center items-center mt-4">
        <input
          type="range"
          value={length}
          min={8}
          max={50}
          onChange={(e) => {
            setLength(Number(e.target.value));
          }}
        />
        <label className=" text-white ml-2">length : {length}</label>
      </div>
      <div className="flex justify-center items-center mt-4">
        <input
          className="ml-2"
          type="checkbox"
          defaultChecked={includeNumber}
          onChange={() => {
            setIncludesNumber((prev) => !prev);
          }}
        />
        <label className="text-white ml-2">Include Numbers</label>

        <input
          className="ml-2"
          type="checkbox"
          defaultChecked={includeSpecialChar}
          onChange={() => {
            setIncludeSpecialChar((prev) => !prev);
          }}
        />
        <label className="text-white ml-2">Include Special Char</label>
      </div>
    </div>
  );
}

export default App;
