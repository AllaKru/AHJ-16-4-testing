export default function checkCard(value) {
  // const str = String(value);
  // const reg = new RegExp(str);
  if (document.querySelector('.active')) {
    document.querySelector('.active').classList.remove('active');
  }
  if (/\b(^(4026|4508|4844|4913|4917)[0-9]{12}|^417500{10})\b/.test(value)) {
    document.querySelector('.visa-electron').classList.add('active');
    return 'visa-electron';
  } if (/\b(^4[0-9]{12}|^4[0-9]{18}|^4[0-9]{15})\b/.test(value)) {
    document.querySelector('.visa').classList.add('active');
    return 'visa';
  } if (/\b^2202[0-9]{12}\b/.test(value)) {
    document.querySelector('.mir').classList.add('active');
    return 'mir';
  } if (
    /\b(^(5018|5020|5038|5893|6304|6759|6761|6762|6763)[0-9]{12}|^(5018|5020|5038|5893|6304|6759|6761|6762|6763)[0-9]{15})\b/.test(
      value,
    )
  ) {
    document.querySelector('.maestro').classList.add('active');
    return 'maestro';
  } if (/\b(^6011[0-9]{12}|^6011[0-9]{15})\b/.test(value)) {
    document.querySelector('.discover').classList.add('active');
    return 'discover';
  } if (/^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/.test(value)) {
    document.querySelector('.mastercard').classList.add('active');
    return 'mastercard';
  } if (/\b(^[300-305]+[0-9]{11}|^36[0-9]{12}|^54[0-9]{14})\b/.test(value)) {
    document.querySelector('.diners').classList.add('active');
    return 'diners';
  } if (/^3[47][0-9]{13}$/.test(value)) {
    document.querySelector('.amex').classList.add('active');
    return 'amex';
  } if (/^(?:2131|1800|35\d{3})\d{11,17}$/.test(value)) {
    document.querySelector('.jcb').classList.add('active');
    return 'jcb';
  } if (/^63[7-9][0-9]{13}$/.test(value)) {
    document.querySelector('.insta').classList.add('active');
    return 'insta';
  }
  // document
  //   .querySelector('[data-id=card-input]')
  //   .insertAdjacentText(
  //     'afterend',
  //     'Проверьте количество цифр в номере карты',
  //   );
  // setTimeout(() => {
  //   document.querySelector('[data-id=card-input]').remove();
  // }, 2000);
  return 'wrang';
}
