const statistics = {
    gamesNumber: 0,
    wins: 0,
    draws: 0,
    lost: 0
};

const chooses = {
    your: "",
    AI: "",
    result: ""
};

const hands = [...document.querySelectorAll('.images img')];
const startButton = document.querySelector('button');

const chosenImage = (e) => {
    console.log(`[data-name="${chooses.your}"]`);
    endGame();
    hands.forEach(hands => hands.style.boxShadow = '');
    e.target.style.boxShadow = "10px 20px 30px blue";
    chooses.your = e.target.dataset.name;
};

const computerChoose = () => {
    chooses.AI = '';
    let i = Math.floor(Math.random() * hands.length);
    chooses.AI = hands[i].dataset.name;
};

const result = () => {
    if (chooses.your === 'rock' || chooses.your === 'scissors' || chooses.your === 'paper') {
        statistics.gamesNumber++;
        if ((chooses.your === 'rock' && chooses.AI === 'scissors')
            || (chooses.your === 'paper' && chooses.AI === 'rock')
            || (chooses.your === 'scissors' && chooses.AI === 'paper')) {
            statistics.wins++;
            return chooses.result = 'YOU WIN!!!';
        } else if ((chooses.your === chooses.AI)) {
            statistics.draws++;
            return chooses.result = 'DRAW :}';
        } else {
            statistics.lost++;
            return chooses.result = 'YOU LOOSE :(';
        }
    } else {
        chooses.your = '';
        chooses.AI = '';
        chooses.result = '';
    }
};
const endGame = () => {
    document.querySelector('.yourChooseResult').textContent = '';

    document.querySelector('.AIchooseResult').textContent = '';

    document.querySelector('.endResult').textContent = '';
};
const beginGame = () => {
    computerChoose();
    result();
    if (chooses.your === '') {
        alert('Choose hand');
    }

    document.querySelector('.yourChooseResult').textContent = ` ${chooses.your}`;

    document.querySelector('.AIchooseResult').textContent = ` ${chooses.AI}`;

    document.querySelector('.endResult').textContent = `${chooses.result}`;

    document.querySelector('.winsResult').textContent = statistics.wins;

    document.querySelector('.gamesNumber').textContent = statistics.gamesNumber;

    document.querySelector('.drawsResult').textContent = statistics.draws;

    document.querySelector('.lostResult').textContent = statistics.lost;

    document.querySelector(`[data-name="${chooses.your}"]`).style.boxShadow = "";

    chooses.your = "";
};

hands.forEach(hand => hand.addEventListener('click', chosenImage));

startButton.addEventListener('click', beginGame);