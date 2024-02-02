const buttons = document.querySelectorAll('.select-button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    alert('You da best!')
  });
});
