function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let listaDias = document.getElementById('days')
  for (index = 0; index < dezDaysList.length; index +=1) {
    listaDias.appendChild(document.createElement('li'));
    listaDias.getElementsByTagName('li')[index].innerText = dezDaysList[index];
    listaDias.getElementsByTagName('li')[index].className = 'day';
     if (index === 24+1 || index === 25+1 || index === 31+1) {
        listaDias.getElementsByTagName('li')[index].className += ' holiday';
     }
     if (index === 4+1 || index === 11+1 || index === 18+1 || index === 25+1) {
        listaDias.getElementsByTagName('li')[index].className += ' friday';
        listaDias.getElementsByTagName('li')[index].id += 'friday';
     }

  }

  function criaBotaoFeriados (nomeBotao) {
     let botao = document.createElement('button')
     botao.innerText = nomeBotao;
     botao.id = 'btn-holiday';
     document.getElementsByClassName('buttons-container')[0].appendChild(botao);
  }

criaBotaoFeriados('Feriados');

function trocaCorFeriados() {
   let todosFeriados = document.querySelectorAll('.holiday');
   for (let index = 0; index < todosFeriados.length ; index += 1) {
      if (todosFeriados[index].style.backgroundColor === 'skyblue'){
         todosFeriados[index].style.backgroundColor = 'rgba(238,238,238)'
      } else {
      todosFeriados[index].style.backgroundColor = 'skyblue';
      }
   }
}


function adicionaClickFeriados () {
   let botao = document.getElementById('btn-holiday');
   botao.addEventListener('click', trocaCorFeriados);
}

adicionaClickFeriados();

function criaBotaoSextas (nomeBotao) {
   let botao = document.createElement('button')
   botao.innerText = nomeBotao;
   botao.id = 'btn-friday';
   document.getElementsByClassName('buttons-container')[0].appendChild(botao);
}

criaBotaoSextas('Sexta-Feira');

function trocaTextoSextas() {
   for (let index = 0; index < dezDaysList.length ; index += 1) {
      if (listaDias.getElementsByTagName('li')[index].innerText === 'SEXTA!'){
         listaDias.getElementsByTagName('li')[index].innerText = dezDaysList[index];
      } else if (listaDias.getElementsByTagName('li')[index].id === 'friday') {
         listaDias.getElementsByTagName('li')[index].innerText = 'SEXTA!';
      }
      }
   }


function adicionaClickSextas () {
   let botao = document.getElementById('btn-friday');
   botao.addEventListener('click', trocaTextoSextas);
}

adicionaClickSextas();

function zoomIn() {
   let dias = document.querySelector('#days');
 
   dias.addEventListener('mouseover', function(event) {
     event.target.style.fontSize = '40px';
     })
 };
 
 function zoomOut() {
   let dias = document.querySelector('#days');
 
   dias.addEventListener('mouseout', function(event) {
     event.target.style.fontSize = '20px';
   })
 };
 
 zoomIn();
 zoomOut();


 function novaTarefa(tarefa) {

   let minhasTarefas = document.querySelector('.my-tasks');
   let nomeTarefa = document.createElement('span');
 
   minhasTarefas.appendChild(nomeTarefa);
   minhasTarefas.getElementsByTagName('span')[0].innerHTML = tarefa;
   // nomeTarefa.innerHTML = tarefa;
   
 };
 
 novaTarefa('Tarefa');