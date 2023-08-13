import React, { useState, useContext, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import VideoPlayer from "./VideoPlayer";
import AuthContext from "../context/AuthContext";
import ProfileContext from "../context/ProfileContext";
import { useNavigate } from "react-router-dom";

//this page contains the list of all the video and is used in the Index page
function AllVideos({ users }) {
  const [newUser, setNewUser] = useState(null);
  const { uri, auth } = useContext(AuthContext);
  const { user, setVote, vote, search } = useContext(ProfileContext);
  const [videoName, setVideoName] = useState(null);
  const navigate = useNavigate();

  //this use effect filter all the users that has their video upladed
  useEffect(() => {
    const i = users?.filter((value) => {
      return value?.video;
    });
    setNewUser(i);
  }, [users]);

  //this useEffect update the state whenever a user search for anything
  useEffect(() => {
    setNewUser(search);
  }, [search]);

  //voting function
  const handleVote = (e, value) => {
    //checking if the user is logedin
    if (auth) {
      e.target.innerText = "Loading...";
      fetch(`${uri}/vote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          voterId: user?._id,
          userName: value?.userName,
          userId: value?._id,
          videoTitle: value?.video.title,
          videoName: value?.video.filename,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          setVote((i) => [...i, data]);
          alert("your vote has been sent");
        })
        .catch((err) => {
          console.log(err);
          alert("something went wrong");
        })
        .finally(() => {
          e.target.innerText = "Vote";
          e.target.style.backroundColor = "#fafafa";
        });
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {/*checking if videos */}
      {search.length ? (
        <div className="all-video">
          {/*video popUp */}
          <VideoPlayer videoName={videoName} setVideoName={setVideoName} />
          {/*mapping through all the video */}
          {newUser?.map((value) => {
            {
              /*filtering the videos vote for the video */
            }
            const videoVote = vote.filter((i) => i.userId === value?._id);
            return (
              <div key={value?._id} className="video">
                <div className="video-con">
                  <video onClick={() => setVideoName(value?.video?.filename)}>
                    <source src={`${uri}/video/${value?.video?.filename}`} />
                  </video>
                </div>
                <span onClick={() => navigate(`profile/${value?._id}`)}>
                  {/*checking if the user has a profile image */}
                  {value.profileImage ? (
                    <img
                      src={`${uri}/image/${value?.profileImage}`}
                      alt="profile"
                    />
                  ) : (
                    <CgProfile size={"50px"} />
                  )}
                  <div>
                    <h2>{value?.fullName}</h2>
                    <p style={{ fontSize: "smaller", color: "#0e1424" }}>
                      {value?.email}
                    </p>
                  </div>
                </span>
                <div>
                  {/*checking and slicing the length of the description*/}
                  <p>
                    {`${
                      value?.video?.title
                    } | ${value?.video?.description.slice(0, 50)}`}
                    {value?.video?.description.length >= 50 && "..."}
                  </p>
                  <p style={{ alignSelf: "flex-end" }}>
                    <b>{videoVote?.length}V</b>
                  </p>
                </div>
                <button onClick={(e) => handleVote(e, value)}>Vote</button>
              </div>
            );
          })}
        </div>
      ) : (
        <h2 style={{ color: "black", textAlign: "center" }}>No result...</h2>
      )}
    </>
  );
}

export default AllVideos;