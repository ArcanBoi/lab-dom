let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

window.onload = function(event) {

    // Random quote of the day generator
    const randomQuote = function() {
        document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
    };
    randomQuote();

    // Do all of your work inside the window.onload function (in other words, here!)

    // Part 1
    document.getElementById('main-title').innerText = "I'm DOM, yo bestest friend";

    // Part 2
    document.body.style.backgroundColor = 'steelblue';

    // Part 3
    let favs = document.querySelector(`#favorite-things`);
    favs.removeChild(favs.lastElementChild);

    // Part 4
    for (let x of document.querySelectorAll('.special-title')) {
        x.style.fontSize = '2rem';
    }

    // Part 5
    let pastRaceList = document.querySelector('#past-races');
    let pastRaces = pastRaceList.children;

    for (let x of pastRaces) {
        if (x.innerText === 'Chicago') {
            pastRaceList.removeChild(x)
        }
    }

    // Part 6

    let newCity = document.createElement('li');
    let newCityName = "John's Creek";
    newCity.innerText = newCityName;
    pastRaceList.appendChild(newCity);

    // Part 7
    let main = document.querySelector('.main');
    let newStuff = `<div class="blog-post purple">
      <h1>${newCityName}</h1>
      <p>I raced an Amish man's coked out horse!</p>
    </div>`

    main.innerHTML += newStuff;

    // let newBlog = document.createElement('div');
    // let newTitle = document.createElement('h1');
    // let newPara = document.createElement('p');

    // newBlog.classList.add('blog-post', 'purple');
    // newTitle.innerText = newCityName;
    // newPara.innerText = "I raced an Amish man's coked out horse!"

    // newBlog.appendChild(newTitle);
    // newBlog.appendChild(newPara);
    // main.appendChild(newBlog);





}