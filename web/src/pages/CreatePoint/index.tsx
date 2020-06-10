import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Logo from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi'

const CreatPoint = () =>{
    return (
      <div id="page-create-point">
          <header>
              <img src={Logo} alt="Ecoleta"/>

              <Link to="/">
                  <FiArrowLeft/>
                  Voltar para o Inicio
              </Link>
          </header>

          <form action="">
              <h1>Cadastro do <br /> ponto de coleta</h1>

              <fieldset>
                  <legend>
                      <h2>Dados</h2>
                  </legend>

                  <div className="field">
                      <label htmlFor="name">Nome da entidade</label>
                      <input 
                      type="text"
                      name = "name"
                      id="name"
                      
                      />
                  </div>

                  <div className="field-group">
                    <div className="field">
                        <label htmlFor="email">E-mail</label>
                        <input 
                        type="email"
                        name = "email"
                        id="email"
                        />

                    </div>

                    <div className="field">
                        <label htmlFor="whatsapp">Whatsapp</label>
                        <input 
                        type="text"
                        name = "whatsapp"
                        id="whatsapp"
                        />
                    </div>
                  </div>
              </fieldset>

              <fieldset>
                  <legend>
                      <h2>Endereço</h2>
                      <span>Selecione o endereço no mapa</span>
                  </legend>
                  <div className="field-group">
                      <div className="field">
                          <label htmlFor="uf">Selecione seu estado</label>
                          <select name="uf" id="uf">
                              <option value="0">UF</option>
                          </select>
                      </div>
                  </div>
                  <div className="field-group">
                      <div className="field">
                          <label htmlFor="city">Selecione sua cidade</label>
                          <select name="city" id="city">
                              <option value="0">Cidades</option>
                          </select>
                      </div>
                  </div>
              </fieldset>

              <fieldset>
                  <legend>
                      <h2>Ítens de coleta</h2>
                      <span>Selecione um ou mais ítens abaixo</span>
                  </legend>
                  <ul className="items-grid">
                      <li className="selected">
                          <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
                          <span>Óleo de cozinha</span>
                      </li>
                      <li>
                          <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
                          <span>Óleo de cozinha</span>
                      </li>
                      <li>
                          <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
                          <span>Óleo de cozinha</span>
                      </li>
                      <li>
                          <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
                          <span>Óleo de cozinha</span>
                      </li>
                      <li>
                          <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
                          <span>Óleo de cozinha</span>
                      </li>
                      <li>
                          <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
                          <span>Óleo de cozinha</span>
                      </li> 
                  </ul>
              </fieldset>
              <button type="submit">Cadastrar ponto de coleta</button>
          </form>
      </div>  
    );
};

export default CreatPoint;