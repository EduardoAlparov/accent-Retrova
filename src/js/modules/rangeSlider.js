export default () => {
  for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
    e.style.setProperty('--value', e.value);
    e.style.setProperty('--min', e.min == '' ? '0' : e.min);
    e.style.setProperty('--max', e.max == '' ? '100' : e.max);
    e.addEventListener('input', () => e.style.setProperty('--value', e.value));
  }

  const ranges = Array.from(document.querySelectorAll('.range-certificates'));

  if(ranges.length < 1) return;

  ranges.forEach( range => {
    range.querySelector('input[type=range]').addEventListener('input', (e) => {

      range.querySelectorAll('.range-certificates__number').forEach(number => {
        number.classList.remove('range-certificates__number--active');
      })

      range.querySelectorAll("[data-select]").forEach( number => {
        if(Number(number.dataset.select) === Number(e.target.value)) {
          number.classList.add('range-certificates__number--active');
        }
      })
    });

    range.querySelectorAll('.range-certificates__number').forEach(btn => {
      btn.addEventListener('click', () => {
        range.querySelectorAll('.range-certificates__number').forEach(number => {
          number.classList.remove('range-certificates__number--active');
        })

        btn.classList.add('range-certificates__number--active');
        range.querySelector('input[type=range]').value = Number(btn.dataset.select);
        range.querySelector('input[type=range]').style.setProperty('--value', Number(btn.dataset.select));
      })
    })
  })
}
