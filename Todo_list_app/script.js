const inputBox = document.querySelector('#input-txt');
const listContainer = document.querySelector('#list-container');
const addNotes = document.querySelector('.input-btn');


addNotes.addEventListener('click',function() {
    if(inputBox.value === '') {
        alert("Please Enter Valid details");
    }else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveDataToBrowser();
    }
    inputBox.value = "";
});

listContainer.addEventListener('click',function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle('checked');
        saveDataToBrowser();
    }else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveDataToBrowser();
    }
});


window.addEventListener('keydown',function(e) {
    if(e.key=="Enter") {
        if(inputBox.value === '') {
            alert("Please Enter Valid details");
        }else {
            let li = document.createElement('li');
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            li.appendChild(span);
            saveDataToBrowser();
        }
        inputBox.value = "";
    }
    
});

// Saving Data to local Browser Data
function saveDataToBrowser() {
    localStorage.setItem("data",listContainer.innerHTML);
}

function getDataFromBrowser() {
    listContainer.innerHTML = localStorage.getItem("data");
}

getDataFromBrowser();