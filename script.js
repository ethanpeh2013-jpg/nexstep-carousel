const track = document.getElementById("track");
const slides = document.querySelectorAll(".slide");
const dots = document.getElementById("dots");

let current = 0;

slides.forEach((slide, i) => {

  const dot = document.createElement("span");

  dot.classList.add("dot");

  dot.onclick = () => {
    current = i;
    update();
  };

  dots.appendChild(dot);

});

function update() {

  track.style.transform =
    `translateX(-${current * 100}%)`;

  document.querySelectorAll(".dot").forEach((dot, i) => {

    dot.classList.toggle(
      "active",
      i === current
    );

  });

}

function move(direction) {

  current += direction;

  if (current >= slides.length) {
    current = 0;
  }

  if (current < 0) {
    current = slides.length - 1;
  }

  update();

}

update();
