// import React from "react";
import React, { useContext, useState, useEffect } from "react";
// import CreateGroup from "../createGroup/CreateGroup";
import UserContext from "../Context/UserContext";

import "./sidebar.css";

function Sidebar({ open }) {
  // const { user } = useContext(UserContext)
  
  const { setCurrentGroup, hiddennotes } = useContext(UserContext);
  const [active, Setactive] = useState("");

  const extractusernamelogo = (name) => {
    let take = name.substring(0, 1);

    const spacePos = name.indexOf(" ");
    if (spacePos !== -1) {
      take += name[spacePos + 1];
    }

    return take.toUpperCase();
  };

  const extractusername = (name) => {
    let take = name[0].toUpperCase();
    for (let i = 1; i < name.length; i++) {
      if (name[i - 1] === " ") {
        take += name[i].toUpperCase();
      } else {
        take += name[i];
      }
    }
    return take;
  };
  const handleclick = (e, group) => {
    hiddennotes(false);
    Setactive(group.name);
    setCurrentGroup(allGroup.find((item) => item.name === group.name));
  };

  const allGroup = JSON.parse(localStorage.getItem("groups"));
  return (
    <div className="leftcontainer">
      <h1 className="pocket_notes" style={{ marginTop: "35px" }}>
        Pocket Notes
      </h1>
      {/* <CreateGroup /> */}
      <div className="container1">
      <div className="left">
        {allGroup &&
          allGroup.map((group) => (
            <div
              key={group.name}
              onClick={(e) => handleclick(e, group)}
              className={`profile-container ${
                group.name === active ? "group active" : "group"
              }`}
            >
              <div
                className="profile-icon"
                style={{ backgroundColor: group.color }}
              >
                <span>{extractusernamelogo(group.name)}</span>
              </div>
              <p>{extractusername(group.name)}</p>
            </div>
          ))}
      </div>
    </div>
      <div className="circlebutton" onClick={open}>
        +
      </div>
    </div>
  );
}

export default Sidebar;
