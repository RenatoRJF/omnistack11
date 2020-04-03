import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logo from '../../assets/logo.svg';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    };

    api.post('ongs', data)
      .then(() => history.push('/'))
      .catch(error => console.log(error))
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logo} alt="be the hero" />

          <h1>Register</h1>
          <p>Create your account, enter into the platform and help people to find your ONG's incidents.</p>

          <Link className="link-to" to="/">
            <FiArrowLeft size={16} color="#E02041" />

            I am not registered yet.
          </Link>
        </section>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="ONG name"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              type="text"
              placeholder="City"
              value={city}
              onChange={e => setCity(e.target.value)}
            />

            <input
              type="text"
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
