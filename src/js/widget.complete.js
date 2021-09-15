import checkCard from './checkCard';
import { isValid } from './validators';

export default class FormWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `
    <form data-widget="form-widget">
    <div class="cards">
    <div class="card_item visa"></div>
    <div class="card_item visa-electron"></div>
    <div class="card_item jcb"></div>    
    <div class="card_item mastercard"></div>
    <div class="card_item discover"></div>
    <div class="card_item diners"></div>
    <div class="card_item amex"></div>
    <div class="card_item mir"></div>
    <div class="card_item maestro"></div>
    <div class="card_item insta">InstaPayment</div>
    </div>
      <div class="form-control">
          <label for="card-input">Введите номер карты</label>
          <input id="card-input" class="input" data-id="card-input" type="text">
      </div>
      <button data-id="card-submit" class="btn">Проверка</button>
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
    if (isValid(inputEl.value)) {
      checkCard(inputEl.value);
    } else {
      inputEl.insertAdjacentHTML(
        'afterend',
        '<span class = \'warning\'>Неправильный номер карты</span>',
      );
      setTimeout(() => {
        this.parentEl.querySelector('.warning').remove();
        inputEl.value = '';
      }, 500);
    }
  }
}
