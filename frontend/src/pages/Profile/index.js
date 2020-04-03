import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logo from '../../assets/logo.svg';

function Profile() {
  const [incidents, setIncidents] = useState([]);
  const ongName = localStorage.getItem('ongName');
  const ongId = localStorage.getItem('ongId');
  const history = useHistory();

  useEffect(() => {

    api.get('profile', {
      headers: {
        Authorization: ongId
      }
    })
    .then(({ data }) => setIncidents(data))

  }, [ongId]);

  function handleDelete(id) {
    api.delete(`incidents/${id}`, {
      headers: {
        Authorization: ongId
      }
    })
    .then(setIncidents(
      incidents.filter(incident => incident.id !== id)
    ))
  }

  function handleLogout() {
    localStorage.clear();

    history.push('/');
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logo} alt="be the hero" />

        <span>Welcome, {ongName}</span>

        <Link className="button" to="/incidents/new">Register new incident</Link>

        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Incidents registered</h1>

      <ul className="incidents">
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong>Incident:</strong>
            <p>{incident.title}</p>

            <strong>Description:</strong>
            <p>{incident.description}</p>

            <strong>Value:</strong>
            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

            <button type="button" onClick={() => handleDelete(incident.id)}>
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Profile;
