import "./main.scss";

console.log('dansiofnasoi');
console.log('dsadasd');
console.log('xsss');

class userTasks{
    constructor(){
        this.input = document.querySelector("#quick_add");
        this.addInput = document.querySelector(".add-btn");
        this.taskList = document.querySelector(".list-items");
    }
    addInputValue(){
        this.addInput.addEventListener("click",  () =>{
            let newLi = document.createElement("li");
            let newSpan = document.createElement("span");
            let newDiv = document.createElement("div");
            let btnEdit = document.createElement("button");
            let btnImportant = document.createElement("button");
            let btnDone = document.createElement("button");
            let btnMoveUp = document.createElement("button");
            newSpan.innerText = this.input.value;
            btnEdit.innerText = "Edytuj";
            btnImportant.innerText = "Ważne";
            btnDone.innerText = "Wykonano";
            btnMoveUp.innerText = "Przesuń do góry";
            newDiv.appendChild(btnEdit);
            newDiv.appendChild(btnImportant);
            newDiv.appendChild(btnDone);
            newDiv.appendChild(btnMoveUp);
            newLi.appendChild(newSpan);
            newLi.appendChild(newDiv);
            this.taskList.appendChild(newLi);
            console.log(newLi)
            this.taskEdit();
        });
        this.taskEdit();
    }
    taskEdit(){
        let allTasks = [...this.taskList.children];
        allTasks.forEach( e =>{
            let edit = e.lastElementChild.firstElementChild;
            edit.addEventListener("click",function () {
                const currentLi = this.parentElement.previousElementSibling;
                this.parentElement.previousElementSibling.setAttribute("contenteditable" , "true")
            })
        })
    }
    taskImportant(){

    }
}

const user = new userTasks()

console.log(user.addInput)
console.log(user.taskList)
user.addInputValue()
user.taskEdit()