
import "./main.scss";

const particle = () => {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 6,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#1b1e34"
            },
            "shape": {
                "type": "polygon",
                "stroke": {
                    "width": 0,
                    "color": "#000"
                },
                "polygon": {
                    "nb_sides": 6
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 160,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 10,
                    "size_min": 40,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 200,
                "color": "#ffffff",
                "opacity": 1,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 8,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
}
particle();

let tasks = localStorage.getItem('todo_list') ? JSON.parse(localStorage.getItem('todo_list')) : [];
console.log(tasks);

const addInput = $(".add-btn");
const input = $("#quick_add");
const done = $('.doneBtn');
const important = $('.importantBtn');
const edit = $('.editBtn');
const delBtn = $('.delBtn');
const elements = $('.list-items li');
const taskList = $(".list-items");


elements.on('mouseenter', (event) => {
    let that = $(event.currentTarget);
    that.find('.buttons').slideToggle();
});
elements.on('mouseleave', (event) => {
    let that = $(event.currentTarget);
    that.find('.buttons').slideUp();
});

done.on('click', (event) => {
    let that = $(event.currentTarget).parent().prev();
    that.removeClass("important");
    that.toggleClass("done");
})

important.on('click', (event) => {
    let that = $(event.currentTarget).parent().prev();
    let text = that.text();
    that.toggleClass("important");
    if (that.hasClass("important")) {
        that.text(text + "!!!!!");
    } else {
        text = text.replace("!!!!!", "");
        that.text(text);
    }

})

delBtn.on('click', (event) => {
    let that = $(event.currentTarget);
    that.parent().parent().remove();
})

edit.on('click', (event) => {
    let that = $(event.currentTarget);
    if (that.text() === "edytuj") {
        that.parent().prev().attr("contenteditable", "true");
        that.parent().prev().trigger("focus");
        that.parent().prev().css("outline", "none");
        that.text("zatwierdź");
    } else {
        that.parent().prev().attr("contenteditable", "false");
        that.text("edytuj");
    }
})
class userTask {
    constructor(id, title, date, description, priority, done) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.description = description;
        this.priority = priority;
        this.done = done;
    }
}

localStorage.setItem('todo_list', JSON.stringify(tasks) );
const task = (JSON.parse(localStorage.getItem('todo_list') ));

let id = 0;


const doTask = (text) => {
    id++;
    let newLi = $('<li>');
    let newSpan = $("<span>");
    //console.log(text);
    newSpan.text(text);
    let newDiv = $("<div>", {class: "buttons"});
    let btnEdit = $("<button>", {class: "editBtn"});
    btnEdit.text("edytuj");
    let btnImportant = $("<button>", {class: "importantBtn"});
    btnImportant.text("ważne");
    let btnDone = $("<button>", {class: "doneBtn"});
    btnDone.text("wykonane");
    let btnDel = $("<button>", {class: "delBtn"});
    btnDel.text("usuń");

    newDiv.append(btnEdit);
    newDiv.append(btnImportant);
    newDiv.append(btnDone);
    newDiv.append(btnDel);
    newLi.append(newSpan);
    newLi.append(newDiv);
    taskList.append(newLi);

    newLi.on('mouseenter', (event) => {
        let that = $(event.currentTarget);
        that.find('.buttons').slideToggle();
    });
    newLi.on('mouseleave', (event) => {
        let that = $(event.currentTarget);
        that.find('.buttons').slideUp();
    });

    btnDone.on('click', (event) => {
        let that = $(event.currentTarget).parent().prev();
        that.removeClass("important");
        that.toggleClass("done");
    })

    btnImportant.on('click', (event) => {
        let that = $(event.currentTarget).parent().prev();
        let text = that.text();
        that.toggleClass("important");
        if (that.hasClass("important")) {
            that.text(text + "!!!!!");
        } else {
            text = text.replace("!!!!!", "");
            that.text(text);
        }
    })

    btnDel.on('click', (event) => {
        let that = $(event.currentTarget);
        that.parent().parent().remove();
    })

    btnEdit.on('click', (event) => {
        let that = $(event.currentTarget);
        if (that.text() === "edytuj") {
            that.parent().prev().attr("contenteditable", "true");
            that.parent().prev().trigger("focus");
            that.parent().prev().css("outline", "none");
            that.text("zatwierdź");
        } else {
            that.parent().prev().attr("contenteditable", "false");
            that.text("edytuj");
        }
    })

}


addInput.on('click', (val)=>{
    tasks.push(input.val());
    localStorage.setItem('todo_list', JSON.stringify(tasks));

    doTask(input.val());

})

task.forEach( (e) =>{
    doTask(e);
})

