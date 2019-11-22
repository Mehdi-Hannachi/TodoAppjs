function addElement() {



    mylist = document.createElement("div");
    mylist.classList.toggle("list");


    var complete = document.createElement("BUTTON");
    complete.classList.toggle("btn");

    var btnClose = document.createElement("BUTTON");
    btnClose.classList.toggle("btn");

    var element = document.createElement("span");
    element.classList.toggle("txt");


    var comp = document.createTextNode("Complete")
    var undo = document.createTextNode("undo")
    var close = document.createTextNode("Delete")


    complete.appendChild(comp)
    btnClose.appendChild(close)

    var inputTask = document.querySelector(".newtask").value
    var task = document.createTextNode(inputTask)
    element.appendChild(task)

    if (inputTask === '') {
        alert("You must enter a task");
    } else {

        mylist.appendChild(complete).addEventListener('click', function(e) {

            element.classList.toggle("mystyle");
            complete.replaceChild(undo, comp)

        })

        mylist.appendChild(btnClose).addEventListener('click', function(ee) {
            btnClose.remove()
            complete.remove()
            element.remove()
        })

        mylist.appendChild(element)


        document.getElementById("list").appendChild(mylist)

    }
    document.querySelector(".newtask").value = "";





}