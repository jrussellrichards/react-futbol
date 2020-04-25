import React, { useState, useEffect } from "react";
const axios = require("axios").default;
import { userService, authenticationService } from '@/_services';
import {Menu} from "@/_components/Menu";
import config from 'config';

export function CreateTournament() {
  const [title, setTitle] = useState("");
  const [currentUser, setcurrentUser] = useState(authenticationService.currentUserValue);
  const [sport, setSport] = useState("futbol5");
  const [date, setDate] = useState("");
  const [requierements, setRequierements] = useState("");
  const [description, setDescription] = useState("");

            // const handleChange = (event) => {
  //     const target = event.target;
  //     const value = target.value
  //     const name = target.name
  //     setTitle(
  //         {[name]: value}

  //         );
  // };
  const handleChangeTitle = event => {
    const target = event.target;
    const value = target.value;
    setTitle(value);
  };
  const handleChangeSport = event => {
    const target = event.target;
    const value = target.value;
    setSport(value);
  };
  const handleChangeDate = event => {
    const target = event.target;
    const value = target.value;
    setDate(value);
  };
  const handleChangeRequierements = event => {
    const target = event.target;
    const value = target.value;
    setRequierements(value);
  };
  const handleChangeDescription = event => {
    const target = event.target;
    const value = target.value;
    setDescription(value);
  };

  // const handleSubmit = (event) => {
  //     alert('Torneo creado');
  //     event.preventDefault();
  // };

  const handleSubmit = event => {
    alert(
      "A name was submitted: " +
        title +
        sport +
        description +
        date +
        requierements
    );
    axios
      .post(`${config.apiUrl}/createTournament`, {
        title: title,
        sport: sport,
        description: description,
        date: date,
        requierements: requierements,
        img:
          "https://elpais.com/deportes/imagenes/2019/12/20/actualidad/1576859348_980228_1576861112_noticia_grande.jpg"
      })
      .then(function(response) {
        // handle success
        console.log(tournament);
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
          <label class="label">Title</label>

          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Text input"
              name="title"
              value={title}
              onChange={handleChangeTitle}
            />
          </div>
        </div>
        <div class="field">
          <label class="label"></label>
          <div class="control">
            <input
              type="date"
              name="date"
              value={date}
              onChange={handleChangeDate}
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Sport</label>
          <div class="control">
            <div class="select">
              <select onChange={handleChangeSport} name="sport">
                <option value="futbol5">Futbol 5</option>
                <option value="futbol7">Futbol 7</option>
                <option value="futbol11">Futbol 11</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Rules</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Textarea"
              onChange={handleChangeRequierements}
              value={requierements}
              name="requierements"
            ></textarea>
          </div>
        </div>
        <div class="field">
          <label class="label">Description</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Textarea"
              onChange={handleChangeDescription}
              value={description}
              name="description"
            ></textarea>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input type="checkbox" />I agree to the{" "}
              <a href="#">terms and conditions</a>
            </label>
          </div>
        </div>

        <div class="field">
          <div class="control">
            <label class="radio">
              <input type="radio" name="question" />
              Yes
            </label>
            <label class="radio">
              <input type="radio" name="question" />
              No
            </label>
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
