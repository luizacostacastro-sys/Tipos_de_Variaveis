let alunos = [
  { nome: "Mariana Silva", idade: 16, turma: "1º Ano A", notaMat: 9.0, notaProg: 9.5, matriculado: true },
  { nome: "Carlos Eduardo", idade: 17, turma: "2º Ano B", notaMat: 8.5, notaProg: 10.0, matriculado: true }
];

let inputNome, inputIdade, inputTurma, inputNotaMat, inputNotaProg, checkMatricula, btnCadastrar;

function setup() {
  // Conecta o canvas ao container HTML
  let canvas = createCanvas(540, 280);
  canvas.parent("p5-app");

  // Div para a primeira linha do formulário
  let linha1 = createDiv().parent("p5-app");
  linha1.style("margin-bottom", "12px");

  inputNome = createInput('').attribute('placeholder', 'Nome do Aluno').parent(linha1);
  inputNome.style('width', '200px');
  inputNome.style('margin-right', '8px');

  inputIdade = createInput('', 'number').attribute('placeholder', 'Idade').parent(linha1);
  inputIdade.style('width', '70px');
  inputIdade.style('margin-right', '8px');

  inputTurma = createInput('').attribute('placeholder', 'Turma').parent(linha1);
  inputTurma.style('width', '100px');

  // Div para a segunda linha do formulário
  let linha2 = createDiv().parent("p5-app");
  linha2.style("margin-bottom", "20px");

  inputNotaMat = createInput('', 'number').attribute('placeholder', 'Nota Mat.').parent(linha2);
  inputNotaMat.style('width', '90px');
  inputNotaMat.style('margin-right', '8px');

  inputNotaProg = createInput('', 'number').attribute('placeholder', 'Nota Prog.').parent(linha2);
  inputNotaProg.style('width', '90px');
  inputNotaProg.style('margin-right', '12px');

  checkMatricula = createCheckbox(' Matriculado', true).parent(linha2);
  checkMatricula.style('display', 'inline-block');
  checkMatricula.style('margin-right', '15px');

  btnCadastrar = createButton('Cadastrar').parent(linha2);
  btnCadastrar.mousePressed(adicionarAluno);
}

function draw() {
  background(255);

  let posCardY = 10;
  textSize(13);

  for (let i = 0; i < alunos.length; i++) {
    let a = alunos[i];

    // Card background
    fill(248, 250, 252);
    stroke(226, 232, 240);
    strokeWeight(1);
    rect(0, posCardY, width, 58, 8);
    noStroke();

    // Nome do aluno
    fill(30, 41, 59);
    textStyle(BOLD);
    text((i + 1) + ". " + a.nome, 15, posCardY + 23);

    // Detalhes do aluno
    textStyle(NORMAL);
    fill(100, 116, 139);
    text("Idade: " + a.idade + " anos | Turma: " + a.turma + " | Mat: " + a.notaMat + " | Prog: " + a.notaProg, 15, posCardY + 43);

    // Indicador de status
    if (a.matriculado) {
      fill(16, 185, 129);
      text("● Ativo", width - 75, posCardY + 33);
    } else {
      fill(239, 68, 68);
      text("● Inativo", width - 75, posCardY + 33);
    }

    posCardY += 68;
  }
}

function adicionarAluno() {
  let nome = inputNome.value();
  let idade = Number(inputIdade.value());
  let turma = inputTurma.value();
  let notaMat = Number(inputNotaMat.value());
  let notaProg = Number(inputNotaProg.value());
  let status = checkMatricula.checked();

  if (nome === "" || turma === "") {
    alert("Preencha pelo menos o Nome e a Turma!");
    return;
  }

  alunos.push({
    nome: nome,
    idade: idade,
    turma: turma,
    notaMat: notaMat,
    notaProg: notaProg,
    matriculado: status
  });

  inputNome.value('');
  inputIdade.value('');
  inputTurma.value('');
  inputNotaMat.value('');
  inputNotaProg.value('');
}
