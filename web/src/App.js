import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();
    const response = await api.post("/devs", {
      github_username,
      techs,
      latitude,
      longitude
    });

    setGithubUsername("");
    setTechs("");
  }
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://i.pinimg.com/474x/4c/4e/ab/4c4eab8ba315496964f885b55f4e16e1.jpg"
                alt="Xablau"
              />
              <div className="user-info">
                <strong>Xablau</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Fluffy dev at the end of the world</p>
            <a href="https://i.pinimg.com/474x/4c/4e/ab/4c4eab8ba315496964f885b55f4e16e1.jpg">
              Acessar perfil no Github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://i.pinimg.com/474x/4c/4e/ab/4c4eab8ba315496964f885b55f4e16e1.jpg"
                alt="Xablau"
              />
              <div className="user-info">
                <strong>Xablau</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Fluffy dev at the end of the world</p>
            <a href="https://i.pinimg.com/474x/4c/4e/ab/4c4eab8ba315496964f885b55f4e16e1.jpg">
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://i.pinimg.com/474x/4c/4e/ab/4c4eab8ba315496964f885b55f4e16e1.jpg"
                alt="Xablau"
              />
              <div className="user-info">
                <strong>Xablau</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Fluffy dev at the end of the world</p>
            <a href="https://i.pinimg.com/474x/4c/4e/ab/4c4eab8ba315496964f885b55f4e16e1.jpg">
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://i.pinimg.com/474x/4c/4e/ab/4c4eab8ba315496964f885b55f4e16e1.jpg"
                alt="Xablau"
              />
              <div className="user-info">
                <strong>Xablau</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>Fluffy dev at the end of the world</p>
            <a href="https://i.pinimg.com/474x/4c/4e/ab/4c4eab8ba315496964f885b55f4e16e1.jpg">
              Acessar perfil no Github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
