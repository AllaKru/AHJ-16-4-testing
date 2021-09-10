import { isValidInn } from './validators';

export default class InnOgrnFormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `
    <form data-widget="form-widget">
    <div class = 'cards'>
    <div class = 'card_item visa'></div>
    <div class = 'card_item visa-electron'></div>
    <div class = 'card_item jcb'></div>    
    <div class = 'card_item mastercard'></div>
    <div class = 'card_item discover'></div>
    <div class = 'card_item diners'></div>
    <div class = 'card_item amex'></div>
    <div class = 'card_item mir'></div>
    </div>
      <div class="form-control">
          <label for="card-input">Введите номер карты</label>
          <input id="card-input" class = 'input' data-id="card-input" type="text">
      </div>
      <button data-id="card-submit" class = 'btn' >Проверка</button>
    </form>
    `;
  }

  static get inputSelector() {
    return '[data-id=card-input]'; // форма
  }

  static get submitSelector() {
    return '[data-id=card-submit]'; // кнопка
  }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const submit = this.parentEl.querySelector(this.constructor.submitSelector);
    submit.addEventListener('click', (evt) => this.onSubmit(evt));
  }

  onSubmit(evt) {
    // add event listeners here
    evt.preventDefault();
    const inputEl = this.parentEl.querySelector(this.constructor.inputSelector);
    if (isValidInn(inputEl.value)) {
      if (inputEl.value.length === 16 || 19) {
        this.parentEl.querySelector('.visa').classList.add('active')
        inputEl.classList.add('valid');
        console.log('ok');
      } else {
        inputEl.insertAdjacentText('afterend', 'Проверьте количество цифр в номере карты');
      }
    } else {
      inputEl.classList.add('invalid');
      console.log('ne ok');
      // return `<span>Неправильный номер карты</span>`
      inputEl.insertAdjacentText('afterend', 'Неправильный номер карты');
    }
  }
}
