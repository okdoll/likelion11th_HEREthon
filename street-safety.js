let stars1 = document.querySelectorAll('input[name="rating_1"]');
let showValue1 = document.querySelector('#rating-value_1');

for (let i = 0; i < stars1.length; i++) {
  stars1[i].addEventListener('click', function() {
    let rating = this.value;
    let formattedRating = Number(rating).toFixed(1);

    showValue1.innerHTML = formattedRating;
  });
}

let stars2 = document.querySelectorAll('input[name="rating_2"]');
let showValue2 = document.querySelector('#rating-value_2');

for (let i = 0; i < stars2.length; i++) {
  stars2[i].addEventListener('click', function() {
    let rating = this.value;
    let formattedRating = Number(rating).toFixed(1);

    showValue2.innerHTML = formattedRating;
  });
}

let stars3 = document.querySelectorAll('input[name="rating_3"]');
let showValue3 = document.querySelector('#rating-value_3');

for (let i = 0; i < stars3.length; i++) {
  stars3[i].addEventListener('click', function() {
    let rating = this.value;
    let formattedRating = Number(rating).toFixed(1);

    showValue3.innerHTML = formattedRating;
  });
}
