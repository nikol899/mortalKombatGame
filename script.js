"use strict";
const cards = document.querySelectorAll('.card');

function flipCard() {
    this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));










































// const cardArry = [
//     {
//         Name: "Sonya",
//         img: "MK-headShots/SONIYAMK1.gif"
//     },
//     {
//         Name: "Sonya",
//         img: "MK-headShots/Sonya_MK_11.png"
//     },

//     {
//         Name: "Jade",
//         img: "MK-headShots/MK3-Jade-r1.gif"
//     },
//     {
//         Name: "Jade",
//         img: "MK-headShots/Jade_MK11.png"
//     },
//     {
//         Name: "Kitana",
//         img: "MK-headShots/Kitana_mk11.octet-stream.png"
//     },
//     {
//         Name: "Kitana",
//         img: "MK-headShots/Kitana_UMK3.gif"
//     },
//     {
//         Name: "Sindel",
//         img: "MK- headShots / Sindelrenderbywildboyz4.png"
//     },
//     {
//         Name: "Sindel",
//         img: "MK-headShots/Sindel-r.gif"
//     },
//     {
//         Name: "Mileena",
//         img: "MK-headShots/Millena-mk2-fix.gif"
//     },
//     {
//         Name: "Mileena",
//         img: "MK-headShots/Mileena_Render_PNG_3.png"
//     },
//     {
//         Name: "Chun-li",
//         img: "MK-headShots/Chun_Li.png"
//     },
//     {
//         Name: "Chun-li",
//         img: "MK-headShots/Chun_Li_1.gif"
//     },



// ]




// const create = document.createElement("div");
// // const card = document.createElement('div')

// create.classList.add("card");
// //     card.classList.add('card')
// create.dataset.name = item.name;

// //     card.dataset.name = item.name

// create.style.backgeoundImage = `url(${item.img})`;
//     card.style.backgroundImage = `url(${item.img})`

//     // Append the div to the grid section
//     grid.appendChild(card)


// const game = document.getElementById('MK_Memory')

// cardsArray.forEach(item => {

//     const card = document.createElement('div')


//     card.classList.add('card')

//     card.dataset.name = item.name


//     card.style.backgroundImage = `url(${item.img})`


//     grid.appendChild(card)
// })