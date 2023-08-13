import React, { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const ProfileContext = createContext();
export function ProfileProvider({ children }) {
  const { uri, auth } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [vote, setVote] = useState([]);
  const [search, setSearch] = useState();

  useEffect(() => {
    const i = users.filter((value) => value.video);
    setSearch(i);
  }, [users]);

  //function to get user and set state
  useEffect(() => {
    fetch(`${uri}/user`, {
      method: "POST",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      })
      .catch((err) => console.log(err));
  }, [auth]);

  //function to get all users and set state
  useEffect(() => {
    fetch(`${uri}/users`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  //function to get all vote and set state
  useEffect(() => {
    fetch(`${uri}/allvote`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => setVote(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ProfileContext.Provider
      value={{
        user,
        setUser,
        setUsers,
        users,
        vote,
        setVote,
        toggle,
        setToggle,
        search,
        setSearch,
      }}>
      {children}
    </ProfileContext.Provider>
  );
}

export default ProfileContext;
