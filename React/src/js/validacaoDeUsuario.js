import clearInput from './clearInput'
import cadastrarUsuario from '../services/cadastrarUsuario'

async function validacaoDeUsuario(data) {
  const { nome, sobrenome, apelido, email, senha, escolaridade } = data
  const escola = validacaoDeEscolaridade(escolaridade)
  const password = validacaoDeSenha(senha)

  if (nome === '' && sobrenome === '' && apelido === '' && email === '') {
    alert("Ops! Parece que você não preencheu tudo corretamente")
  } else {
    if(escola && password){
      await cadastrarUsuario(data)
    }
  }
}

function validacaoDeEscolaridade(escolaridade) {
  if (escolaridade === 'default') {
    alert('Por favor selecione um nível de escolaridade')
  } else {
    return true
  }
}

function validacaoDeSenha(senha) {
  if (senha.length < 8) {
    alert('Sua senha deve ter mais de 8 caracteres')
  } else {
    switch (senha) {
      case '12345678':
        alert('Sua senha não pode ser uma sequência')
        clearInput('senha')
        break
      case '':
        alert('Sua senha não pode ser vazia')
        break
      default:
        //
        break
    }
    return true
  }
}

export default validacaoDeUsuario
