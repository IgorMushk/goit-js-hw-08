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

//readStorege();
//console.log(readStorege());

refs.emailInput.value = readStorege().email;
refs.textArea.value = readStorege().text;

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log('email: ', refs.emailInput.value);
  console.log('message: ', refs.textArea.value);
  refs.emailInput.value = '';
  refs.textArea.value = '';
  localStorage.removeItem(KEY_STOREGE);
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
  console.log('Read storage', savedSettings);

  if (!savedSettings) {
    const parsedSettings = {
      email: '',
      text: '',
    };
    return parsedSettings;
  }

  try {
    const parsedSettings = JSON.parse(savedSettings);
    return parsedSettings;
  } catch {
    const parsedSettings = {
      email: '',
      text: '',
    };
    return parsedSettings;
  }

  //console.log(parsedSettings);
  //return parsedSettings;
}
