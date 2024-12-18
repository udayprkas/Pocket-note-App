import React from "react";
import "./mainpage.css";
import Notebook from "../../assets/images/notebook.png";
import LockIcon from "../../assets/images/lockIcon.png";

export default function MainPage() {
  return (
    <div className="container">
      <div className="innerelement">
        <div className="innerimage">
          <img src={Notebook} alt="notebookimage" />
        </div>

        <div className="innercontent">
          <h1>Pocket Notes</h1>
          <p className="p_text">
            Send and receive messages without keeping your phone online.
            <br />
            Use Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
        </div>

        <div className="bottomdiv">
          <img src={LockIcon} alt="Lockicon" />
          <p className="p_text">end-to-end encrypted</p>
        </div>
      </div>
    </div>
  );
}
