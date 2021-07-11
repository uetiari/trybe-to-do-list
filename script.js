window.onload = function () {
  const button = document.getElementById('criar-tarefa');
  const inputTarefa = document.getElementById('texto-tarefa');
  const listTarefa = document.getElementById('lista-tarefas');

  button.addEventListener('click', function () {
    const listItens = document.createElement('li');
    listTarefa.appendChild(listItens);
    listItens.innerHTML = inputTarefa.value;
    inputTarefa.value = '';

    listItens.addEventListener('click', checked);
    
  });

  function checked(event) {
    const lis = document.querySelectorAll('li');
    const background = 'rgb(128, 128, 128)';
    for (let index = 0; index < lis.length; index += 1) {
      if (lis[index].style.backgroundColor === background) {
        lis[index].style.backgroundColor = 'white';
      } else {
        event.target.style.backgroundColor = background;
      }
    }
  }
}


