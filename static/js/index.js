
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

let checkedStyles = 0;

urban.addEventListener('click', () => {
    if(urban.checked == true){
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

function check (){
    console.log(checkedStyles)
    if(checkedStyles == 0){
        msg.classList.remove("hidden")
    } 
    else{
        msg.classList.add("hidden") 
    }   
}   

submit.addEventListener('click', () => {
    if(checkedStyles == 0){
        window.alert("Please select a style")
    }
})
