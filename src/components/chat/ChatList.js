import { useEffect, useState } from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const ChatList = ({ chatRoom, selectedRoom, setSelectedRoom }) => {
  return (
    <>
      {chatRoom.map((room, i) => {
        return (
          <div
            key={`chatRoom-${i}`}
            onClick={() => {
              setSelectedRoom(room);
            }}
            className={selectedRoom == room ? "selected-room" : ""}
          >
            <div className="room-title disabled-icon">
              <StarOutlineIcon
                sx={{
                  width: 35,
                  height: 35,
                  cursor: "pointer",
                  color: "#8f8f8f",
                }}
              />
              <h4>{room.chatTitle}</h4>
              <p style={{ color: "red" }}>{room.notRead}</p>
            </div>
            <p>({room.groupSize})</p>
          </div>
        );
      })}
    </>
  );
};
export default ChatList;
