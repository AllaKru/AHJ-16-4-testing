export default function checkCard(value) {
  // const str = String(value);
  // const reg = new RegExp(str);
  if (document.querySelector('.active')) {
    document.querySelector('.active').classList.remove('active');
  }
  if (/^4026|4508|4844|4913|4917[0-9]{12}/.test(value)) {
    document.querySelector('.visa-electron').classList.add('active');
    return 'visa-electron';
  }
  if (/^4[0-9]{12}|^4[0-9]{18}|^4[0-9]{15}/.test(value)) {
    document.querySelector('.visa').classList.add('active');
    return 'visa';
  }
  if (/^2202[0-9]{12}/.test(value)) {
    document.querySelector('.mir').classList.add('active');
    return 'mir';
  }
  if (/^[352-3589][0-9]{15}/.test(value)) {
    document.querySelector('.jcb').classList.add('active');
    return 'jcb';
  }
  if (/^[34|37][0-9]{13}/.test(value)) {
    document.querySelector('.amex').classList.add('active');
    return 'amex';
  }
  if (/^[51-55][0-9]{14}/.test(value)) {
    document.querySelector('.mastercard').classList.add('active');
    return 'mastercard';
  }
  if (
    /^6011[0-9]{12}|^6011[0-9]{13}|^6011[0-9]{14}|^6011[0-9]{15}/.test(value)
  ) {
    document.querySelector('.discover').classList.add('active');
    return 'discover';
  }
  if (/^[300-305][0-9]{11}/.test(value)) {
    document.querySelector('.diners').classList.add('active');
    return 'diners';
  }
  document
    .querySelector('[data-id=card-input]')
    .insertAdjacentText(
      'afterend',
      'Проверьте количество цифр в номере карты',
    );
  setTimeout(() => {
    document.querySelector('[data-id=card-input]').remove();
  }, 2000);
  return 'wrang';
}
