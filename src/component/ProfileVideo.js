import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import ProfileContext from "../context/ProfileContext";

//this is the section that shows the user video in the profile page
//imported in the userVideoStatistics component
function ProfileVideo({ foundUser }) {
  const { uri } = useContext(AuthContext);
  const { vote } = useContext(ProfileContext);
  const videoVote = vote.filter((i) => i.userId === foundUser[0]?._id);

  return (
    <div className="user-video">
      <span>
        <video controls>
          <source src={`${uri}/video/${foundUser[0]?.video?.filename}`} />
        </video>
      </span>
      <div>
        <table>
          <tr>
            <th>video Title</th>
            <th>description</th>
            <th>Votes</th>
            <th>View</th>
          </tr>
          <tr>
            <td>{foundUser[0]?.video?.title}</td>
            <td>{foundUser[0]?.video?.description}</td>
            <td>{videoVote?.length}</td>
            <td>0</td>
          </tr>
        </table>
        <br />
      </div>
    </div>
  );
}

export default ProfileVideo;