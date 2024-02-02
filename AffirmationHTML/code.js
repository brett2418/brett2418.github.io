const affirmationImage = document.createElement('img');
affirmationImage.src = 'cat.png'; 
affirmationImage.alt = 'Affirmation Image';
affirmationImage.style.display = 'none';
affirmationImage.style.position = 'fixed';
affirmationImage.style.top = '50%';
affirmationImage.style.left = '50%';
affirmationImage.style.transform = 'translate(-50%, -50%)';
affirmationImage.style.maxWidth = '80%';
affirmationImage.style.maxHeight = '80%';

document.body.appendChild(affirmationImage);

const buttons = document.querySelectorAll('.select-button');

buttons.forEach(button => {
  button.addEventListener('click', function() {
    
    affirmationImage.style.display = 'block';

    setTimeout(function() {
      affirmationImage.style.display = 'none';
    }, 5000);
  });
});

