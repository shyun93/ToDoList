var deleteButton = document.getElementsByClassName("delete")

function addListeners(){
    for(var i = 0; i < deleteButton.length; i++){
        (function(i){
            var deleteElement = deleteButton[i].parentNode        
            deleteButton[i].addEventListener("click", function(){
                deleteElement.parentNode.removeChild(deleteElement)
            })
        }(i));  
    }    
}


var add = document.getElementById("new");
add.addEventListener("keyup", function(enter){
    if(enter.keyCode === 13){
        var text = document.getElementById("new").value
        console.log(text);
        var li = document.createElement("li");
        var removeButton = document.createElement("span")
        removeButton.classList = "delete"
        removeButton.innerHTML = "X"
        li.appendChild(removeButton);
        li.innerHTML += text;
        document.getElementsByClassName("list")[0].appendChild(li);
        addListeners();
    }
});

addListeners();