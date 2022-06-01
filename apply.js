const h2Headers = document.getElementsByClassName('h2-header');
for (const h2Header of h2Headers) {
    h2Header.style.color = 'lightblue';
}

const backpacks = document.getElementById('backpack');
backpacks.style.backgroundColor = 'tomato';

const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.style.borderRadius = '30px';
}

function show() {
    const btn = document.getElementById('btn-n');
    console.log('Successfully onClick implemented!');
}

const btnBuyNow = document.getElementsByClassName('buy-now');
for (const btn of btnBuyNow) {
    btn.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target);
    });
}

document.getElementById('email-confirm').addEventListener('keyup', function (event) {
    const emailBtn = document.getElementById('email-btn');
    if (event.target.value == 'email') {
        emailBtn.removeAttribute('disabled');
    }
    else {
        emailBtn.setAttribute('disabled', true);
    }
});

document.getElementById('img-1').addEventListener('mouseenter', function () {
    console.log('mouse enter');
});

