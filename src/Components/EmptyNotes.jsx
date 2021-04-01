import React from "react";
import dog from "../assets/dog.svg";

function EmptyNotes() {
  return (
    <div className="empty__notes__ilusttration">
      <div className="empty__note__wrapper">
        <img src={dog} alt="empty__notes" />
        <span>No task</span>
      </div>
    </div>
  );
}

export default EmptyNotes;
