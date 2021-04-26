var result = document.getElementById("result");
var play = document.getElementById("play");
var remove = document.getElementById("remove");
var editor = document.getElementById("editor");

play.onclick = ()=>{
    result.innerHTML = editor.value;
        localStorage.setItem("Codes" , editor.value);

}

remove.onclick = ()=>{
    result.innerHTML = "";
}
onload = ()=>{
    editor.value = localStorage.getItem("Codes");
}
