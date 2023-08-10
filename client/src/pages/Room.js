import { useEffect, useState } from "react";

function Room() {
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      fetch("/:id")
        .then((res) => res.json())
        .then((data) => setItems(data));
    }, []);

    function renderItems() {
      return items.map((item, i) => {
        return (
          <div key={i}>
            <h3>RoomID:{item.roomId}</h3>
            <p>UserID: {item.userId}</p>
          </div>
        );
      });
    }

    return (
      <div>
        <h1>{renderItems()}</h1>
      </div>
    );
  }
  
  export default Room;
  