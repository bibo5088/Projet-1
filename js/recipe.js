let recipePeople = document.getElementById("recipePeople");
const quantities = document.getElementsByClassName("quantities");
const quantitiesArray = [...quantities];
recipePeople.addEventListener("change", function(){
    quantitiesArray.forEach(quantity => {
        if (quantity.classList.contains("eggs")){
            quantity.innerText = Math.ceil((parseInt(quantity.dataset.quantity) * recipePeople.value)/parseInt(recipePeople.dataset.base));
        } else{
            quantity.innerText = (parseInt(quantity.dataset.quantity) * recipePeople.value)/parseInt(recipePeople.dataset.base);}
    });
})