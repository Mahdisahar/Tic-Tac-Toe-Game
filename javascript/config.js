//to add function after doing event listener to edit bottons step-3-a
function openPlayerConfig(event){
    editedPlayerName =  +event.target.dataset.playerid;// step 10-b
    overlay.style.display = 'block';
    backDrop.style.display = 'block';
}


// to add event listener to cancel button step-5-a
function cancelation() {
    overlay.style.display = 'none';
    backDrop.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');// to remove the error step - 9-a
    confirmError.textContent = '';// to remove the textcontent
    formElement.firstElementChild.lastElementChild.value = ''; // step 11 - c to clear the name in input field after adding it
}

//to add function after doing event listener to the form step -7-a
function savePlayerConfig(event) {
 event.preventDefault(); // this step to not make the browser from loading- to stop loading when press confirm

 const formData = new FormData(event.target);
 
 const enteredPlayerName = formData.get('playername').trim(); //to add the name in input form

 if (!enteredPlayerName) {  // to  add class error with red color step - 9 
    confirmError.textContent = 'Please enter valid name';
    event.target.firstElementChild.classList.add('error');
    return;
 }
const updatedPlayerName = document.getElementById('player-' + editedPlayerName + '-data'); //step -11 to add the name of player

updatedPlayerName.children[1].textContent =  enteredPlayerName; //step 11 - b

players[editedPlayerName - 1].name = enteredPlayerName; // step 12-a
cancelation();
};





