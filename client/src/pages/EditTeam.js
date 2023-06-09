import React from "react";
import { Link, useParams } from 'react-router-dom';
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
  padding: "20px",
  fontSize: "20px",
  fontFamily: "Lucida Console, Monaco, monospace",
  minHeight: "100vh"

}

const EditTeam = () => {
  const { teamId } = useParams();

  return (
    <div className="container" style={myStyle}>
        This is the Edit Team Page for the team {teamId}!<br /><br />

        <Link to="/">← Back to Feed!</Link>
    </div>
  );
};

export default EditTeam;
