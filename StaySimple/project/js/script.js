let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () =>{
   menu.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
   inputNumber.oninput = () =>{
      if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
   };
});

document.querySelectorAll('.faq .box-container .box h3').forEach(headings =>{
   headings.onclick = () =>{
      headings.parentElement.classList.toggle('active');
   }
});

//myjs

document.getElementById('showFormButton').addEventListener('click', function() {
   var form = document.getElementById('findForm');
   var button = document.getElementById('showFormButton');
   
   // Toggle visibility of form
   if (form.classList.contains('hidden')) {
     form.classList.remove('hidden');
     button.classList.add ('hidden'); // Hide the button
   } else {
     form.classList.add('hidden');
     button.style.display = 'block'; // Show the button
   }
 });
 
 // JavaScript code to handle closing the form
 document.getElementById('closeFormButton').addEventListener('click', function(event) {
   event.preventDefault(); // Prevent the default behavior (submitting the form)
   document.getElementById('findForm').classList.add('hidden'); // Hide the form
   document.getElementById('showFormButton').classList.remove('hidden'); // Show the showFormButton
});