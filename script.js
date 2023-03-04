const Blob = document.getElementById('blob');
const logo = document.getElementById('logo');
const logo2 = document.getElementById('logo2');

document.body.onpointermove = (e) => {
  const { clientX, clientY } = e;
  Blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: 'forwards' }
  );
};

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let interations = 0;

logo.onmouseover = (e) => {
  const interval = setInterval(() => {
    e.target.innerText = e.target.innerText
      .split('')
      .map((letter, index) => {
        if (index < interations) {
          return e.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join('');

    if (interations >= e.target.dataset.value.length) {
      clearInterval(interval);
    }
    interations += 1 / 4;
  }, 30);
};

const letters2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let interations2 = 0;

logo2.onmouseover = (e) => {
  const interval2 = setInterval(() => {
    e.target.innerText = e.target.innerText
      .split('')
      .map((letter, index) => {
        if (index < interations2) {
          return e.target.dataset.value[index];
        }
        return letters2[Math.floor(Math.random() * 26)];
      })
      .join('');

    if (interations2 >= e.target.dataset.value.length) {
      clearInterval(interval2);
    }
    interations2 += 1 / 4;
  }, 30);
};

const randome = (min, max) => Math.floor(Math.random() * (min - max + 1)) + min;

const enchance = (id) => {
  const el = document.getElementById(id);
  Text = el.innerText.split('');

  el.innerText = '';

  Text.forEach((value, index) => {
    let outer = document.createElement('span');
    outer.className = 'outer';

    let inner = document.createElement('span');
    inner.className = 'inner';

    inner.style.animationDelay = `${randome(-5000)}ms`;

    const letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerText = value;
    letter.style.animationDelay = `${index * 1000}ms`;

    inner.appendChild(letter);
    outer.appendChild(inner);
    el.appendChild(outer);
  });
};

enchance('link');
