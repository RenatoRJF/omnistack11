import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.svg';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const ongId = localStorage.getItem('ongId');
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    api.post('incidents', data, {
      headers: {
        Authorization: ongId
      }
    })
    .then(() => history.push('/profile'))
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="be the hero" />

          <h1>Register new incident</h1>
          <p>Describe the incident in details to find a hero to solve it.</p>

          <Link className="link-to" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />

            Back to home
          </Link>
        </section>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Incident title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={e => setDescription(e.target.value)}
          >
          </textarea>

          <input
            type="text"
            placeholder="Price in real"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
