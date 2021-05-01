import React from 'react';
import DadosProfissionais from './DadosProfissionais'
import Consolidacao from './Consolidacao'

const states = [
  'AC - Acre',
  'AL - Alagoas',
  'AP - Amapá',
  'AM - Amazonas',
  'BA - Bahia',
  'CE - Ceará',
  'DF - Distrito Federal',
  'ES - Espírito Santo',
  'GO - Goías',
  'MA - Maranhão',
  'MT - Mato Grosso',
  'MS - Mato Grosso do Sul',
  'MG - Minas Gerais',
  'PA - Pará',
  'PB - Paraíba',
  'PR - Paraná',
  'PE - Pernambuco',
  'PI - Piauí',
  'RJ - Rio de Janeiro',
  'RN - Rio Grande do Norte',
  'RS - Rio Grande do Sul',
  'RO - Rondônia',
  'RR - Roraíma',
  'SC - Santa Catarina',
  'SP - São Paulo',
  'SE - Sergipe',
  'TO - Tocantins'
  ];

class DadosPessoais extends React.Component {
  constructor () {
    super();
    this.handleChange = this.handleChange.bind(this);
    
    this.state = {
      nome: '',
      email:'',
      cpf: '',
      endereço: '',
      cidade: '',
      estado:'',
      tipo: '',
      resumo:'',
      cargo: '',
      descricaoDoCargo:'',
    }
  }
handleChange({ target }) {
      let { name , type, checked, value } = target;
      let entry = type === 'checkbox' ? checked : value;

      if (name === 'endereço') {
        entry = value.replace(/[^a-zA-Z0-9\s]/,'');
        document.getElementById('endereço').value = entry;
      }
    
      this.setState({
        [name]: entry,
      });


    }
    nomeCidade = ({ target }) => {
      let { name, value } = target;
      if ((value[0] <= '9') && (value[0] >= '0')) {
        value = '';        
        document.getElementById('cidade').value='';
        this.setState({
          [name]: '',
        });
      }
    }

    limparFormulario = () =>{
      window.location.reload();
    }
  render() {
    return (
      <div>
      <fieldset>
        <label for="nome">Nome
          <input type="text" style={{textTransform: 'uppercase'}} name="nome" onChange={this.handleChange} maxLength='40' required/>
        </label>
        <label for="email">Email
          <input type="email"name="email" onChange={this.handleChange} maxLength='50' required/>
        </label>
        <label for="cpf">CPF
          <input type="text" name="cpf" onChange={this.handleChange} maxLength='11' required/>
        </label>
        <label for="endereço">Endereço
          <input id="endereço" type="text" name="endereço" onChange={this.handleChange}  maxLength='200' required/>
        </label>
        <label for="cidade">Cidade
          <input id="cidade" type="text" name="cidade" onChange={this.handleChange} onBlur={this.nomeCidade} maxLength='28' required/>
        </label>
        <label for="estado">Estado
          <select name="estado" onChange={this.handleChange}>
            <option>
              selecione
            </option>
            {
              states.map((estado, index) => (
                <option key={index}> {estado} </option> 
              ))
            }
          </select>
        </label>
        <label for="casa" >Casa
          <input type="radio" name="tipo" value="casa" onChange={this.handleChange} required/> 
        </label>
        <label for="apartamento" >Apartamento
          <input type="radio" name="tipo" value="apartamento" onChange={this.handleChange}/>
        </label>
      </fieldset>
      <DadosProfissionais handleChange={this.handleChange}/>
      <Consolidacao dados={this.state}/>
      <button onClick={this.limparFormulario}> Limpar Formulário </button>
      </div>
    );
  }
}

export default DadosPessoais;