const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) { // safari transitionend === 'flex', but other browsers end w/ flex-grow. just check for both
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
