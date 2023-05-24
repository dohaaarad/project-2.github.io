const codeEditor = document.getElementById("code-editor");
const codeEditorTwo = document.getElementById("code-editor-2");
const buttonStart = document.getElementById("start-code");
const buttonRemove = document.getElementById("remove-code");
const displayCode = document.getElementById("display-code");

buttonStart.onclick = () => {
    displayCode.innerHTML = codeEditor.value + codeEditorTwo.value;
    
    localStorage.setItem("data-code", codeEditor.value);
    localStorage.setItem("data-code-2", codeEditorTwo.value);

    
}

buttonRemove.onclick = () => {
    codeEditor.value = "";
}

onload = () => {
    codeEditor.value = localStorage.getItem("data-code");
    codeEditorTwo.value = localStorage.getItem("data-code-2");
}