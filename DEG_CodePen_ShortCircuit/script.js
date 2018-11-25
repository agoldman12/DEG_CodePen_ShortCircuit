/*
  INSTRUCTIONS
  The closeModal function below contains a bug. If no "options" 
  parameter is passed to it, a runtime error occurs. 
  Use short circuiting to fix the closeModal function. 
  Hint: you should only change code within the closeModal function.
*/

function closeModal(options) {
  options && requireConfirmation 
    if(confirm('Are you sure?') === false) {
      return;
    }
  
  const modalEl = document.querySelector('.modal');
  modalEl.parentNode.removeChild(modalEl);
}

function onCloseButtonClick(e) {
  e.preventDefault();
  closeModal();
}

const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', onCloseButtonClick);

