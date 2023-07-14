import throttle from 'lodash.throttle';

const KEY_STOREGE = 'feedback-form-state';
const saveData = {
  email: '',
  message: '',
};

const refs = {
  form: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('input[name="email"]'),
  messageArea: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

refs.emailInput.value = readStorage().email;
refs.messageArea.value = readStorage().message;
saveData.email = readStorage().email;
saveData.message = readStorage().message;

function onFormSubmit(evt) {
  evt.preventDefault();
  if (!refs.emailInput.value || !refs.messageArea.value) {
    alert('You must fill all fields!');
    return;
  }
  console.log(saveData);
  refs.emailInput.value = '';
  refs.messageArea.value = '';
  saveData.email = '';
  saveData.message = '';
  localStorage.removeItem(KEY_STOREGE);
}

function onInput(evt) {
  const inputName = evt.target.name;
  const inputeValue = evt.target.value;
  saveData[inputName] = inputeValue;
  localStorage.setItem(KEY_STOREGE, JSON.stringify(saveData));
}

function readStorage() {
  const savedSettings = localStorage.getItem(KEY_STOREGE);
  if (!savedSettings) {
    const parsedSettings = {
      email: '',
      message: '',
    };
    return parsedSettings;
  }

  try {
    const parsedSettings = JSON.parse(savedSettings);
    return parsedSettings;
  } catch {
    const parsedSettings = {
      email: '',
      message: '',
    };
    return parsedSettings;
  }
}
