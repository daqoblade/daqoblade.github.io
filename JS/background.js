const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
]

function chooseBackground() {
    const chosenImage = images[Math.floor(Math.random() * images.length)]
    bgImage.src = `images/${chosenImage}`
    prevChild = bgImage;
}

const bgImage = document.createElement("img");
document.body.appendChild(bgImage)
chooseBackground()
setInterval(chooseBackground, 5000);