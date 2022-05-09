
let button = document.querySelector("#liveToastBtn");
let input = document.querySelector("#task");
let liste = document.querySelector("#list");

let itemsArray = [];
//JSON.parse(localStorage.getItem('items'))
localStorage.setItem('items', JSON.stringify(itemsArray));    
const data = JSON.parse(localStorage.getItem('items'));

function newElement() {
    //<li>3 Litre Su İç<span class="close">×</span></li>
    itemsArray=JSON.parse(localStorage.getItem('items'));

    let newItem = document.createElement(`li`);
    newItem.innerHTML = input.value ;
    let closeItem = document.createElement(`span`);
    var closeIcon = document.createTextNode("\u00D7");
    closeItem.className = "close";

    itemsArray.push(input.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    
    closeItem.onclick = ()=>
    {
        var div = closeItem.parentElement;
        div.style.display = "none";
        let liInnerHTML=div.innerHTML.split("<");
        for(i = 0; i < itemsArray; i++) 
        {
            if(itemsArray[i]==liInnerHTML[0])
            {
               delete itemsArray[i];
            }
        }
        itemsArray.remove(liInnerHTML); 
        localStorage.setItem('items', JSON.stringify(itemsArray));
    };
    closeItem.appendChild(closeIcon);
    newItem.appendChild(closeItem);
    if (input.value == "") 
    { 
      $('.error').toast('show'); 
    } 
    else 
    {
      $('.success').toast('show'); 
      liste.appendChild(newItem);  
      input.value = ""; 
     }
     
}
liste.addEventListener('click', function(event) {
    event.target.classList.toggle('checked');
}, false);