const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD',
    '#D4A5A5', '#9B59B6', '#3498DB', '#E74C3C', '#2ECC71',
    '#F1C40F', '#1ABC9C', '#E67E22', '#E84393', '#6C5CE7',
    '#00B894', '#00CEC9', '#FF7675', '#6C5CE7', '#FD79A8',
    '#8E44AD', '#2980B9', '#F39C12', '#D35400', '#C0392B',
    '#BDC3C7', '#7F8C8D', '#16A085', '#27AE60', '#2C3E50',
    '#E84393', '#74B9FF', '#A8E6CF', '#FFB6B9', '#957DAD',
    '#2D3436', '#636E72', '#B2BEC3', '#DFE6E9', '#6D214F',
    '#182C61', '#FC427B', '#BDC581', '#82589F', '#3B3B98',
    '#FD7272', '#9AECDB', '#D6A2E8', '#6AB04C', '#F8C291'
];
const circlesContainer = document.querySelector(".circles__container")

function randomColor(){
    const number = Math.floor(Math.random() * 50) + 1;
    return colors[number];
}

const randomSize = () => Math.floor(Math.random() * (50 - 15 + 1) ) + 15;
const randomXposition = () => Math.floor(Math.random() * (window.innerWidth- 50 ))  ;
const randomYposition = () => Math.floor(Math.random() * (window.innerHeight- 50)) ;

function ganeraiteCircle() {
    const newCircle = document.createElement("div");
    const size = randomSize();
    newCircle.classList.add("circles__item");
    newCircle.style.backgroundColor = randomColor();
    newCircle.style.width = size + 'px';
    newCircle.style.height = size + 'px';
    newCircle.style.top = randomYposition() + 'px';
    newCircle.style.left = randomXposition() + 'px';
    circlesContainer.appendChild(newCircle);

}


document.querySelector(".circles__btn").addEventListener("click",function(){
    for (let index = 1; index <= 50; index++) {
        ganeraiteCircle();
    }
})


