const wakeUp = () => {
    return `Acordando!!`;
}

const drinkCoffee = () => {
    return `Bora tomar café!!`;
}

const goToBed = () => {
    return `Partiu dormir!!`;
}

const doingThings = (func) => func();

console.log(doingThings(goToBed));