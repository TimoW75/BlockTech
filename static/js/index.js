const urbanBox = document.querySelector("#urbanBox")
const landscapeBox = document.querySelector("#landscapeBox")
const portraitBox = document.querySelector("#portraitBox")
const architectureBox = document.querySelector("#architectureBox")
const astroBox = document.querySelector("#astroBox")
const bwBox = document.querySelector("#bwBox")
const aerialBox = document.querySelector("#aerialBox")
const petBox = document.querySelector("#petBox")
const msg = document.querySelector("#Filtermsg")
const submit = document.querySelector("#submit")

const urban = document.querySelector("#urban")
const landscape = document.querySelector("#landscape")
const portrait = document.querySelector("#portrait")
const architecture = document.querySelector("#architecture")
const astro = document.querySelector("#astro")
const bw = document.querySelector("#bw")
const aerial = document.querySelector("#aerial")
const pet = document.querySelector("#pet")



let options = {
    threshold: 1
}
const observer = new IntersectionObserver(imageObserver, options);

// maak alle variable aan voor de checkboxes
let checkedStyles = 0;



urban.addEventListener('click', () => {
    if(urbanBox.checked == true){ // als de checkbox is aangeklikt
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
    if(landscapeBox.checked == true){
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
    if(portraitBox.checked == true){
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
    if(architectureBox.checked == true){
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
    if(astroBox.checked == true){
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
    if(bwBox.checked == true){
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
    if(aerialBox.checked == true){
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
    if(petBox.checked == true){
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


function imageObserver(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const img = entry.target;
            if(img.htmlFor == 'urban'){
                urban.classList.remove("notLoaded")
            }
            if(img.htmlFor == 'landscape'){
                landscape.classList.remove("notLoaded")

            }
            if(img.htmlFor == 'portrait'){
                portrait.classList.remove("notLoaded")

            }
            if(img.htmlFor == 'architecture'){
                architecture.classList.remove("notLoaded")

            }
            if(img.htmlFor == 'astro'){
                astro.classList.remove("notLoaded")

            }
            if(img.htmlFor == 'bw'){
                bw.classList.remove("notLoaded")

            }
            if(img.htmlFor == 'aerial'){
                aerial.classList.remove("notLoaded")

            }
            if(img.htmlFor == 'pet'){
                pet.classList.remove("notLoaded")

            }
        }
    } )
}

let imgs = document.querySelectorAll('label.lazy')

imgs.forEach( img =>{
    observer.observe(img);
})