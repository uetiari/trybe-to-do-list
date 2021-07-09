const button = document.getElementById('criar-tarefa');
const inputTarefa = document.getElementById('texto-tarefa');
const listTarefa = document.getElementById('lista-tarefas');

button.addEventListener('click', addTarefa);

function addTarefa() {
  const listItens = document.createElement('li');
  listTarefa.appendChild(listItens);
  listItens.innerHTML = inputTarefa.value;
  inputTarefa.value = '';
}