import React, { useState, useEffect } from "react";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
function UserListaxios() {
  const [listOfUser, setListOfUser] = useState();
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data)
      .then((res) =>
        setListOfUser(
          res.map((item, index) => (
            <ListGroup.Item key={index}>{item.username}</ListGroup.Item>
          ))
        )
      )
      .catch((err) => setError(err));
  }, []);
  console.log(error);
  return (
    <div>
      <ListGroup as="ol" numbered className="list1">
        {listOfUser}
      </ListGroup>
    </div>
  );
}

export default UserListaxios;
