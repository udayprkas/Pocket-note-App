import React from "react";
import "./CreatePopup.css";
import { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function CreatePopup({ close }) {
  const { setbgColor } = useContext(UserContext);
  const [group, setGroup] = useState({ name: "", color: "", notes: "" });
  const [error, setError] = useState(" ");

  const handleColorSelection = (color) => {
    setbgColor(color);
    setGroup({ ...group, color: color });
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setGroup({ ...group, name: value });
  };
  const handlesubmit = () => {
    if (!group.name.trim()) {
      setError("Enter Group Name");

      return;
    }
    //name and color to existing lists
    if (!group.color.trim()) {
      setError("Choose Your Colour");
      return;
    } else {
    }

    group.name = group.name.trim();
    const existingGroups = JSON.parse(localStorage.getItem("groups")) || [];
    const check = existingGroups.find(
      (item) => item.name.toLowerCase() === group.name.toLowerCase()
    );
    // console.log(group.name.trim().split(" ").length);
    if (!check) {
      const updatedGroups = [...existingGroups, group];
      localStorage.setItem("groups", JSON.stringify(updatedGroups));
    } else {
      setError(" Group name Already Exist");
      // alert("the user is already exist");
      return;
    }
    if (group.name.trim().split(" ").length < 2) {
      setError(" Enter Group name of two words");
      return;
    }
    close();
  };

  return (
    <div className="main" onClick={close}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <div className="popup__title">Create New Group</div>
        <div className="popup__input">
          <span>Group Name</span>

          <input
            type="text"
            placeholder="Enter Group Name..."
            value={group.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="popup__color__input">
          <span>Group Color</span>
          <div className="popup__color__input__color">
            <div
              className="popup__color__input__color__1 "
              onClick={() => handleColorSelection("#b38bfa")}
            ></div>
            <div
              className="popup__color__input__color__2 "
              onClick={() => handleColorSelection("#ff79f2")}
            ></div>
            <div
              className="popup__color__input__color__3 "
              onClick={() => handleColorSelection("#43e6fc")}
            ></div>
            <div
              className="popup__color__input__color__4 "
              onClick={() => handleColorSelection("#f19576")}
            ></div>
            <div
              className="popup__color__input__color__5 "
              onClick={() => handleColorSelection("#0047ff")}
            ></div>
            <div
              className="popup__color__input__color__6"
              onClick={() => handleColorSelection("#6691ff")}
            ></div>
          </div>
        </div>

        {/* <div className="popup__closeicon" onClick={close}></div> */}
        <div >
          {error && <h2 style={{ color: "red" }}>{error}</h2>}<br/>
          
        </div>
        <div className="popup__close">
        <button
            onClick={() => {
              handlesubmit();
            }}
          >
            Create
          </button>
          </div>
      </div>
    </div>
  );
}

export default CreatePopup;
