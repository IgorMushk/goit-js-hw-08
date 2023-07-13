import throttle from 'lodash.throttle';

const KEY_STOREGE = 'feedback-form-state';
const saveData = {
  email: '',
  text: '',
};

const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('input[name="email"]'),
  textArea: document.querySelector('textarea[name="message"]'),
};
// console.dir(refs.form);
// console.log(refs.emailInput);
// console.log(refs.textArea);

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onInput);

readStorege();
refs.emailInput.value;
//console.log(readStorege());

refs.emailInput.value = readStorege().email;
refs.textArea.value = readStorege().text;

function onFormSubmit(evt) {
  event.preventDefault();
  console.log(refs.emailInput.value);
  console.log(refs.textArea.value);
  refs.emailInput.value = '';
  refs.textArea.value = '';
}

function onInput(evt) {
  //   const valueEmail = evt.currentTarget.elements.email.value;
  //   console.log(valueEmail);
  //   const valueTextAr = evt.currentTarget.elements.message.value;
  //   console.log(valueTextAr);
  const {
    elements: { email, message },
  } = evt.currentTarget;
  //console.dir(email);
  //console.log(email.value, message.value);

  saveData.email = email.value;
  saveData.text = message.value;
  localStorage.setItem(KEY_STOREGE, JSON.stringify(saveData));
}

function readStorege() {
  const savedSettings = localStorage.getItem(KEY_STOREGE);
  const parsedSettings = JSON.parse(savedSettings);
  console.log(parsedSettings);
  return parsedSettings;
}
