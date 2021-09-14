import FormWidget from '../widget.complete';

test('should render self', () => {
  document.body.innerHTML = '<div id="container"></div>';

  const container = document.querySelector('#container');
  const widget = new FormWidget(container);

  widget.bindToDOM();

  expect(container.innerHTML).toEqual(FormWidget.markup);
});

test('should validate input', () => {
  document.body.innerHTML = '<div id="container"></div>';

  const container = document.querySelector('#container');
  const widget = new FormWidget(container);

  widget.bindToDOM();

  const input = container.querySelector(FormWidget.inputSelector);
  input.value = '3538350034265573';

  const submit = container.querySelector(FormWidget.submitSelector);
  submit.click();

  expect(document.querySelector('.jcb').classList.contains('active')).toBeTruthy();
});
