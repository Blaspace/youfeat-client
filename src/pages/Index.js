import React, { useContext, useEffect, useState } from "react";
import AllVideos from "../component/AllVideos";
import VideoCatigory from "../component/VideoCatigory";
import ProfileContext from "../context/ProfileContext";
import AuthContext from "../context/AuthContext";

function Index() {
  const [users, setIUsers] = useState();
  const { uri } = useContext(AuthContext);
  const { vote, comment, setVote, setComment, setUsers } =
    useContext(ProfileContext);
  useEffect(() => {
    if (!vote?.length) {
      fetch(`${uri}/allvote`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => setVote(data))
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    if (!comment?.length) {
      fetch(`${uri}/allcomment`, {
        method: "POST",
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => setComment(data))
        .catch((err) => console.log(err));
    }
  }, []);

  useEffect(() => {
    if (!users?.length) {
      fetch(`${uri}/users`, {
        method: "POST",
      })
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <div className="index">
      <VideoCatigory setUsers={setIUsers} />
      <AllVideos users={users} videoUri={"video"} />
    </div>
  );
}

export default Index;
