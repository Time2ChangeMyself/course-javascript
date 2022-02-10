/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер

 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

document.addEventListener('mousedown', (e) => {
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
  });

  function moveAt(pageX, pageY) {
    e.target.style.left = pageX - e.offsetX + 'px';
    e.target.style.top = pageY - e.offsetY + 'px';
  }

  moveAt(e.pageX, e.pageY);

  function onMouseMove(e) {
    moveAt(e.pageX, e.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  function mouseUp(e) {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mousup', mouseUp);
  }

  document.addEventListener('mouseup', mouseUp);
});

export function createDiv() {
  const newDiv = document.createElement('div');
  newDiv.classList.add('draggable-div');
  newDiv.draggable = true;
  newDiv.style.cssText = `
  width: ${Math.random() * 100}px; 
  background-color: #${(Math.random().toString(16) + '000000')
    .substring(2, 8)
    .toUpperCase()};
  height:${Math.random() * 100}px;
  top:${Math.random() * 1000}px;
  left:${Math.random() * 1000}px;
  `;
  return newDiv;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const div = createDiv();
  homeworkContainer.appendChild(div);
});
