import React, { useState } from "react";
import "./PopUp.css";
import {useCopyToClipboard} from 'usehooks-ts';
import { Link } from "react-router-dom";

export default function PopUp() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);

  const toggleModal1 = () => {
    if(modal){
        setModal(false);
    }else{
        setModal(true);
    }
  };


  const toggleModal2 = () => {
    if(modal2){
        setModal2(false);
    }else{
        setModal2(true);
    }
  };

  const [value,copy] = useCopyToClipboard();


  let roomID=0;
  const roomId=()=>{
    roomID= crypto.randomUUID();
    return roomID;
  }

  return (
    <>
      <button onClick={toggleModal1} className="btn-modal">
        Create Meet
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal1} className="overlay"></div>
          <div className="modal-content">
            <h2>Create Meeting</h2>
            {roomId()}
            <form action={`/:${roomID}`} method="POST">
                
                <input placeholder={`${roomID}`} type="text" name="roomId"></input>
                <button onClick={()=>{
                    copy(roomID);
                }}>Copy</button>
                 <input placeholder="Your Name" type="text" name="name" required></input>
                 <button type="submit" >Enter the meet</button>
            </form>
            <button className="close-modal" onClick={toggleModal1}>
              CLOSE
            </button>
          </div>
        </div>
      )}

      <button onClick={toggleModal2} className="btn-modal">
        Join Meet
      </button>

      {modal2 && (
        <div className="modal">
          <div onClick={toggleModal2} className="overlay"></div>
          <div className="modal-content">
            <h2>Join Meeting</h2>
            <form action={`/joinRoom`} method="POST">
               <input type='text' placeholder="Enter meeting code" name="meeting"></input>
                 <input placeholder="Your Name" type="text" name="name"></input>
                 <button type="submit" >Enter the meet</button>
            </form>
            <button className="close-modal" onClick={toggleModal2}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}