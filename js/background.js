// const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);

document.body.style = `background-image: url("img/${Math.floor(
  Math.random() * 5
)}.jpeg");`;
