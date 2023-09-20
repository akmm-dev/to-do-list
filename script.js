let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
console.log(itemsArray);

document.querySelector('#addbtn').addEventListener('click', () => {
    let item = document.querySelector('#textAdd');
    addItem(item);
}    
)
function addItem(item) { 

    itemsArray.push(item.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    location.reload();
}
function readItem() {

    let items = "";
    for (var i = 0; i < itemsArray.length; i++){
        items += `<div id="item">
        
            
            <textarea disabled id='ta'>${itemsArray[i]}</textarea>
            <div class="es">  
            <button type="button" id="checkBtn">finish</button>  
            <button type="button" id="editbtn">edit</button>
            <button type="button" id="savebtn">save</button>
            </div>
            
    </div>`;
        
    }

    document.querySelector("#displayItem").innerHTML = items
    checkItems()
    editItems()
    saveItems()

}

function checkItems() {
    let check = document.querySelectorAll('#checkBtn');
    check.forEach((checked, i) => {
        checked.addEventListener("click", () => {deleteItems(i);})
    })    
}
function deleteItems(i) { 

    itemsArray.splice(i, 1);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    location.reload();

}
function editItems() { 
    let edititem = document.querySelectorAll("#editbtn");
    let textarea = document.querySelectorAll("#ta");
    // let saveitem = document.querySelectorAll("#savebtn");
    edititem.forEach((edited, i) => {

        
        edited.addEventListener("click", () =>
        { 
            // saveitem[i].style.display = "block";
            textarea[i].disabled = false;
            }
        )
    })
}
function saveItems() {
        let savebtn = document.querySelectorAll("#savebtn");
        let textarea = document.querySelectorAll("#ta");
        savebtn.forEach((edit, i) => {
            
            edit.addEventListener("click", () => {
                updateItems(textarea[i].value , i);//recall updateItems() with new arguments
            })
        })
}
   

function updateItems(text,i) {
    itemsArray[i] = text;    
    localStorage.setItem("items", JSON.stringify(itemsArray))
    location.reload();

}
function date() {
    let date = new Date()
    date = date.toString().split(' ');
    document.querySelector('.date').innerHTML = date[1] + ' '+date[2]+ " ("+ date[0] +")" ;
    console.log(date);
}

window.onload = function(){
    date();
    console.log('loaded');
    readItem();
}

