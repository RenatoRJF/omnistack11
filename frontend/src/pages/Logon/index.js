import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import heroesImage from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

function Logon() {
  const [id, setId] = useState('');
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault();

    api.post('sessions', { id }).then(({ data: { name } }) => {

      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', name);

      history.push('/profile');
    })
    .catch(error => console.log(error))
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logo} alt="be the hero" />

        <form onSubmit={handleSubmit}>
          <h1>Login</h1>

          <input
            type="text"
            placeholder="Your ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />

          <button className="button" type="submit">Enter</button>

          <Link className="link-to" to="/register">
            <FiLogIn size={16} color="#E02041" />

            I am not registered yet.
          </Link>
        </form>
      </section>

      <img src={heroesImage} alt="heroes" />
    </div>
  );
}

export default Logon;
