// Aluno para sistema de gestão escolar
class Aluno{
  constructor(){
    this.nome = '',
    this.sobrenome = '',
    this.periodo = 0 // 3rd ano, 5th ano, etc...
    this.turma = ''
    this.dataDeNascimento = ''
    this.pais = {pai: nomeDoPai, mae: nomeDaMae}
    this.notasBimestrais = [ {
      materia1: nota,
      materia2: nota,
      materia3: nota,
      materia4: nota,
      materia5: nota,
      materia6: nota
    }],
    this.notasSemestrais = [{
      materia1: nota,
      materia2: nota,
      materia3: nota,
      materia4: nota,
      materia5: nota,
      materia6: nota
    }]
    this.notasSomadas = [{
      materia1: nota,
      materia2: nota,
      materia3: nota,
      materia4: nota,
      materia5: nota,
      materia6: nota
    }]
  }

  VerAula(){
    console.log('vai para a proxima aula que o aluno tem de assistir')
  }

  VerNota(){
    console.log('mostra tabela com atuais notas do aluno')
  }

  ContatarProfessor(){
    console.log('dialogar e tirar duvidas com professor')
  }
}