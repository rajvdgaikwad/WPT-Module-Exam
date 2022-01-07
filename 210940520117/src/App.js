import { useState } from "react";

export default function App() {
  return (
    <div className="container-fluid">
      <MyChat />
    </div>
  );
}

function MyChat() {
  const headerApp = "MyChatApp";
  const studentName = "Vishal Gaikwad";
  const studentId = "117";
  const inputcss = "form-control w-100 p-3";
  const inputcsserror = "form-control w-100 p-3 border-success";
  const [inputChat, setInputChat] = useState("");
  const [validationError, setvalidationError] = useState(false);
  const [list, setList] = useState([]);

  const handleInput = (e) => {
    const newValue = e.target.value;
    setInputChat(newValue);
  };

  const sendMessage = () => {
    if (inputChat === "") {
      setvalidationError(true);
      alert("empty field!!");
      return;
    }
    const newList = [...list, inputChat];

    setList(newList);

    setInputChat("");
    setvalidationError(false);
  };

  return (
    <div>
      <div className="row bg-secondary p-3"></div>
      <div className="col fs-1">{headerApp}</div>
      <div className="col fs-4">
        {studentId} {studentName}
      </div>
      <div className="row">
        <div className="col-10 p-1">
          <input
            type="text"
            name=""
            id=""
            value={inputChat}
            placeholder="Lets chat here ..."
            className={
              inputChat === "" && validationError ? inputcsserror : inputcss
            }
            onChange={handleInput}
          />
        </div>
        <div className="col-2 p-1">
          <input
            type="button"
            value="Send"
            className="form-control"
            onClick={sendMessage}
          />
        </div>
      </div>

      <div id="parent">
        {list.map((item) => (
          <div className="alert alert-danger">{item}</div>
        ))}
      </div>
    </div>
  );
}
