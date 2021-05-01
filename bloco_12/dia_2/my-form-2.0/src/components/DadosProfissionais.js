import React from 'react';

class DadosProfissionais extends React.Component {
  constructor() {
    super();
    this.state = {
      contagem:0
    }
  }

  alertMessage = () =>{
    const { contagem } = this.state;
    if (contagem === 0) { alert('Preencha com cuidado esta informação.') };
    this.setState((prev)=> ({contagem: prev.contagem +1}));
  }

  render(){    
    const { handleChange } = this.props;
    return (
    <fieldset>
      <label for="resumo">Resumo do Currículo
        <textarea type="text" name="resumo" onChange={handleChange} maxLength='1000' required/>
      </label>
      <label for="cargo">Cargo
        <textarea type="text" name="cargo" onChange={handleChange} onMouseEnter={this.alertMessage} maxLength='40' required/>
      </label>
      <label for="descricaoDoCargo">Descrição do Cargo
        <input type="text" name="descricaoDoCargo" onChange={handleChange} maxLength='500' required/>
      </label>
    </fieldset>
      );
  }
}

export default DadosProfissionais;