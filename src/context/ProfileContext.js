import React, { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const ProfileContext = createContext();
export function ProfileProvider({ children }) {
  const { uri } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);
  const [vote, setVote] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3500/user", {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3500/users", {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`${uri}/allvote`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setVote(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ProfileContext.Provider value={{ user, setUser, users, vote, setVote }}>
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileContext;
