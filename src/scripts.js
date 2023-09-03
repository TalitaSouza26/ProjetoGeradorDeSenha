
const _password = {
  value: '',
  length: 20,
  characters: {
    numbers: '0123456789',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    special: '?/~^{}[]!@#$%&*()_-+=.,:;'
  },

  generate(chars) {
    let pwd = '';

    this.length = this.length < 5 || this.length > 50 ? 15 : this.length;

    chars = chars || Object.values(this.characters).join();

    for (let i = 0; i < this.length; i++) {
      pwd += chars[Math.floor(Math.random() * chars.length)]
    }
    this.value = pwd;
    return pwd;
  }
}

const pwdPassword = document.getElementById('pwdPassword');
const btnGenerate = document.querySelector('.onbutton');

const pwdSlider = document.getElementById('pwdSlider');
const pwdValor = document.getElementById('pwdValor');
const pwdInputsChars = document.querySelectorAll('input');

function pwdGenerator() {
  let chars = '';

  for (let i = 0; i < pwdInputsChars.length; i++) {
    if (pwdInputsChars[i].checked) {
      chars += _password.characters[pwdInputsChars[i].name];
    }
  }
  _password.length = pwdSlider.value;
  pwdPassword.textContent = _password.generate(chars);

}
pwdGenerator();

pwdSlider.addEventListener('input', (evt) => {
  pwdValor.textContent = evt.currentTarget.value;

})

btnGenerate.addEventListener('click', pwdGenerator);

pwdSlider.addEventListener('change', pwdGenerator)

for (let i = 0; i < pwdInputsChars.lengi; i++) {
  pwdInputsChars.addEventListener('change', pwdGenerator);

}

const btnCopy = document.querySelector('#btnCopy');

btnCopy.addEventListener('click', () => {
  navigator.clipboard.writeText(_password.value);
  btnCopy.textContent = 'copiado';
  setTimeout(() => {
    btnCopy.textContent = 'copiar';
  }, 2000);
})