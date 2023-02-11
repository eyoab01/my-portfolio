
/*form validation*/

const form = document.forms[0];
const email = form.elements[1];
const submit = document.querySelector('button[type=submit]');
const msg = document.querySelector('form > span');
submit.addEventListener('click', (event) => {
  const { value } = email;
  const lowercase = value.toLowerCase();
  if (value !== lowercase) {
    event.preventDefault();
    msg.style.color = '#d8000c';
    msg.innerHTML = 'Please write your email in Lowercase.';
  }
});