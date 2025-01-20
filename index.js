// INPUT
// Declarando variáveis inicias
let nameHero = "Dragonborn"
let experience = 1500
let level
let message = "O Herói de nome " + nameHero + " está no nível de "

// PROCESS
if (experience < 1000) {
    level = "Ferro"
    // OUTPUT
    console.log(message + level)

} else if (experience < 2000) {
    level = "Bronze"
    // OUTPUT
    console.log(message + level)

} else if (experience < 5000) {
    level = "Prata"
    // OUTPUT
    console.log(message + level)

} else if (experience < 7000) {
    level = "Ouro"
    // OUTPUT
    console.log(message + level)

} else if (experience < 8000) {
    level = "Platina"
    // OUTPUT
    console.log(message + level)

} else if (experience < 9000) {
    level = "Ascendente"
    // OUTPUT
    console.log(message + level)

} else if (experience < 10000) {
    level = "Imortal"
    // OUTPUT
    console.log(message + level)

} else {
    level = "Radiante"
    // OUTPUT
    console.log(message + level)
}