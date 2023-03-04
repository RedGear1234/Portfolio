const Blob = document.getElementById("blob");
const logo = document.getElementById("logo");
const logo2 = document.getElementById("logo2");

document.body.onpointermove = (e) => {
  const { clientX, clientY } = e;
  Blob.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interations = 0;

logo.onmouseover = (e) => {
  const interval = setInterval(() => {
    e.target.innerText = e.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < interations) {
          return e.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (interations >= e.target.dataset.value.length) {
      clearInterval(interval);
    }
    interations += 1 / 4;
  }, 30);
};

const letters2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interations2 = 0;

logo2.onmouseover = (e) => {
  const interval2 = setInterval(() => {
    e.target.innerText = e.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < interations2) {
          return e.target.dataset.value[index];
        }
        return letters2[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (interations2 >= e.target.dataset.value.length) {
      clearInterval(interval2);
    }
    interations2 += 1 / 4;
  }, 30);
};

const randome = (min, max) => Math.floor(Math.random() * (min - max + 1)) + min;

const enchance = (id) => {
  const el = document.getElementById(id);
  Text = el.innerText.split("");

  el.innerText = "";

  Text.forEach((value, index) => {
    let outer = document.createElement("span");
    outer.className = "outer";

    let inner = document.createElement("span");
    inner.className = "inner";

    inner.style.animationDelay = `${randome(-5000)}ms`;

    const letter = document.createElement("span");
    letter.className = "letter";
    letter.innerText = value;
    letter.style.animationDelay = `${index * 1000}ms`;

    inner.appendChild(letter);
    outer.appendChild(inner);
    el.appendChild(outer);
  });
};

enchance("link");

// main section

const track = document.getElementById("image-track");

window.onmousedown = (e) => {
  track.dataset.mouseDownAt = e.clientX;
};

window.onmousemove = (e) => {
  if (track.dataset.mouseDownAt === "0") return;
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentage = parseFloat(track.dataset.perPercentage) + percentage;

  track.dataset.percentage = nextPercentage;
  track.style.transform = `translate(${percentage}%, -50%)`;

  track.animate({
    transform: `translate(${nextPercentage})%, -50%`
  }, { duration: 1200, fill: "forwards" });

  Math.min(nextPercentage, 10);
  Math.max(nextPercentage, -100);

  // Images Parllex
  for (const image of track.getElementsByClassName("image")) {
    image.style.objectPosition = `${percentage + 100}% 50%`;
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
};

window.onmouseup = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.perPercentage = track.dataset.percentage;
};
