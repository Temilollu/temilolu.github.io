

const toggleButton = document.querySelector('button')
const toggleBar = document.getElementById('toggle-bar');
const removeT = document.getElementById('close-toggle')
function addToggle (){
toggleBar.style.display = 'block';

}
 function removeToggle (){
     toggleBar.style.display = 'none';
 }

toggleButton.addEventListener('click', addToggle);
removeT.addEventListener('click', removeToggle);
