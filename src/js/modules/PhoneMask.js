import Inputmask from 'inputmask/dist/inputmask.es6.js';

const PhoneMask = () => {
  const phoneInput = document.querySelectorAll('.js-phone-mask');

  if (phoneInput.length) {
    phoneInput.forEach(input => {
      const handleInput = (event) => {
        const value = event.target.value.replace(/\D/g, '');
        if (value.startsWith('7')) {
          new Inputmask({
            mask: '+7 (999) 999-99-99',
            placeholder: '+7 (___) ___-__-__',
            showMaskOnHover: false,
            clearIncomplete: true,
          }).mask(event.target);
        } else if (value.startsWith('8')) {
          new Inputmask({
            mask: '8 (999) 999-99-99',
            placeholder: '8 (___) ___-__-__',
            showMaskOnHover: false,
            clearIncomplete: true,
          }).mask(event.target);
        } else if (value.length > 0) {
          input.value = '+7 ' + value;
          new Inputmask({
            mask: '+7 (999) 999-99-99',
            placeholder: '+7 (___) ___-__-__',
            showMaskOnHover: false,
            clearIncomplete: true,
          }).mask(event.target);
        }
      };

      input.addEventListener('input', handleInput);

      input.addEventListener('focus', () => {
        if (!input.value) {
          input.placeholder = '+7 (___) ___-__-__';
        }
      });

      input.addEventListener('blur', () => {
        if (input.value === '+7 ') {
          input.value = '';
        }
      });
    });
  }
};

export { PhoneMask };