import React from "react";
import AddTeamForm from "../components/AddTeamForm";
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
  padding: "20px",
  fontSize: "20px",
  fontFamily: "Lucida Console, Monaco, monospace",
  height: "100vh"

}
const AddTeam = () => {
  return (
    <div className="container" style={myStyle}>
      <AddTeamForm />
    </div>
  );
};

export default AddTeam;
