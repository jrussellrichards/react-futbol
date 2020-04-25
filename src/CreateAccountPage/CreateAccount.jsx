import React, { useState, useEffect } from "react";
const axios = require("axios").default;
import { userService, authenticationService } from '@/_services';
import {Menu} from "@/_components/Menu";
import config from 'config';

export function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [currentUser, setcurrentUser] = useState(authenticationService.currentUserValue);


  const handleChangeEmail = event => {
    const target = event.target;
    const value = target.value;
    setEmail(value);
  };
  const handleChangeName = event => {
    const target = event.target;
    const value = target.value;
    setName(value);
  };
  const handleChangePassword = event => {
    const target = event.target;
    const value = target.value;
    setPassword(value);
  };


  // const handleSubmit = (event) => {
  //     alert('Torneo creado');
  //     event.preventDefault();
  // };

  const handleSubmit = event => {
    alert(
      "A name was submitted: " +
      name +
        email +
        password 
    );
    axios
      .post(`${config.apiUrl}/CreateAccount`, {
        email: email,
        password: password,
        name: name,
      
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .then(function() {
        // always executed
      });
    event.preventDefault();
  };
  //   )

  return (
    <div className="principalWrapper">
      <Menu 
                currentUser = {currentUser}/>

      <form onSubmit={handleSubmit}>
        <div class="field">
          <label class="label">Name</label>

          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={handleChangeName}
            />
          </div>
        </div>        
        <div class="field">
          <label class="label">Email</label>

          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChangeEmail}
            />
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>

          <div class="control">
            <input
              class="input"
              type="password"
              placeholder="Text input"
              name="password"
              value={password}
              onChange={handleChangePassword}
            />
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button
              class="button is-link is-light"
              type="submit"
              value="Subsmit"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
