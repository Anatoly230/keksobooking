const slider = document.querySelector('.ad-form__slider');


noUiSlider.create(slider, {
  start: [0],
  connect: [true, false],
  range: {
    'min': 0,
    'max': 100
  },
  step: 10,
});

function changeRange(max = 1, min = 0) {
  slider.noUiSlider.updateOptions({
    range: {
      'min': Number(min),
      'max': Number(max),
    }
  });
}

function changeStep(sliderStep = 0.1) {
  slider.noUiSlider.updateOptions({
    step: Number(sliderStep),
  });
}

function changeStart(sliderStart = 0) {
  slider.noUiSlider.updateOptions({
    start: [Number(sliderStart)],
  });
}

function changeEnd(sliderEnd = 100) {
  slider.noUiSlider.updateOptions({
    start: [Number(sliderEnd)],
  });
}

function resetSlider(value) {
  changeRange(value);
  changeStart(value);
  changeStep(Number(value) / 10)
}

function slideStatus(filterInfo) {
  if (filterInfo !== null) {
    let { value } = filterInfo;
    slider.removeAttribute('disabled');
    resetSlider(value);
  } else {
    slider.setAttribute('disabled', true)
    changeStart(0);
  }
}

export { slider, resetSlider, changeStart, slideStatus, changeEnd, changeRange };