let recipePeople = document.getElementById("recipePeople");
const quantities = document.getElementsByClassName("quantities");
const quantitiesArray = [...quantities];
recipePeople.addEventListener("change", function(){
    quantitiesArray.forEach(quantity => {
        quantity.innerHTML = ((parseInt(quantity.dataset.quantity) * recipePeople.value)/parseInt(recipePeople.dataset.base));
    });
})