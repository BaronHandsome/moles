import { MoleContainer } from "../containers";

// Rerender all app

let rerender = () => {
    console.log('State was updated');
};

export const subscribe = (observer) => {
    rerender = observer;
}

export const store = {
    gameDifficult: 0,
    currentScore: 0,
    quantityFailes: 0,
    attemptTime: 0
};

export const increaseScore = () => {
    store.currentScore += 1
    if(store.currentScore === 100) {
        alert('You won');
    };
    calculationOfDifficult();
    console.log(store);
    rerender();
};

export const increaseFailes = () => {
    store.quantityFailes += 1
    if (store.quantityFailes === 3) {
        alert('The game is over');
    };
};

function calculationOfDifficult() {
    store.gameDifficult = Math.ceil(store.currentScore / 10)
}
