
const urban = document.querySelector("#urban")
const landscape = document.querySelector("#landscape")
const portrait = document.querySelector("#portrait")
const architecture = document.querySelector("#architecture")
const astro = document.querySelector("#astro")
const bw = document.querySelector("#bw")
const aerial = document.querySelector("#aerial")
const pet = document.querySelector("#pet")
const msg = document.querySelector("#Filtermsg")
const submit = document.querySelector("#submit")

// maak alle variable aan voor de checkboxes

let checkedStyles = 0;

urban.addEventListener('click', () => {
    if(urban.checked == true){ // als de checkbox is aangeklikt
        checkedStyles++; // stijl ++
    }
    else{
        checkedStyles--; // anders stijl naar beneden
    }
    if(checkedStyles < 0){ // als de stijl voor een reden onder de 0 komt zet deze dan terug naar 0
        checkedStyles = 0;
    }
    check(); // voor de check funtie uit

}) // deze funtie herhaald zich ook steeds voor elke checkbox.

landscape.addEventListener('click', () => {
    if(landscape.checked == true){
        checkedStyles++;
    }
    else{
        checkedStyles--;
    }
    if(checkedStyles < 0){
        checkedStyles = 0;
    }
    check();
})

portrait.addEventListener('click', () => {
    if(portrait.checked == true){
        checkedStyles++;
    }
    else{
        checkedStyles--;
    }
    if(checkedStyles < 0){
        checkedStyles = 0;
    }
    check();

})

architecture.addEventListener('click', () => {
    if(architecture.checked == true){
        checkedStyles++;
    }
    else{
        checkedStyles--;
    }
    if(checkedStyles < 0){
        checkedStyles = 0;
    }
    check();
})

astro.addEventListener('click', () => {
    if(astro.checked == true){
        checkedStyles++;
    }
    else{
        checkedStyles--;
    }
    if(checkedStyles < 0){
        checkedStyles = 0;
    }
    check();

})

bw.addEventListener('click', () => {
    if(bw.checked == true){
        checkedStyles++;
    }
    else{
        checkedStyles--;
    }
    if(checkedStyles < 0){
        checkedStyles = 0;
    }
    check();
})

aerial.addEventListener('click', () => {
    if(aerial.checked == true){
        checkedStyles++;
    }
    else{
        checkedStyles--;
    }
    if(checkedStyles < 0){
        checkedStyles = 0;
    }
    check();

})

pet.addEventListener('click', () => {
    if(pet.checked == true){
        checkedStyles++;
    }
    else{
        checkedStyles--;
    }  
    if(checkedStyles < 0){
        checkedStyles = 0;
    }
    check();
})

function check (){ // check funtie
    console.log(checkedStyles)
    if(checkedStyles == 0){ // als er geen stijl is geselecteerd. Haal dan de classlist hidden weg
        msg.classList.remove("hidden")
    } 
    else{
        msg.classList.add("hidden")  // als er wel een stijl is geselecteerd voeg dan de classlist hidden toe
    }   
}   

submit.addEventListener('click', () => {
    if(checkedStyles == 0){
        window.alert("Please select a style") // als er geen stijl is geselecteerd en toch op de submit knop wordt gedrukt geef een alert.
    }
})
