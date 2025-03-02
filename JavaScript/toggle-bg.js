const bgChangeBtn = document.getElementById('toggle-bg-btn');
const body = document.body;
let colors = ['#ade8f4', '#b7b7a4', '#adb5bd', '#95d5b2', '#b5e48c','#edc4b3', '#c77dff', '#fff0f3', '#d7e3fc', '#99e2b4'];


bgChangeBtn.addEventListener('click', function(){
    let randomColor = colors[Math.floor(Math.random() * colors.length + 1)]
    body.style.backgroundColor = randomColor;
    body.style.transition = '.5s'
})