const text = document.querySelector('input[name="in-box"]');

const textOut = document.getElementById('out-box');

text.addEventListener('input', () => {
    if(text.value === ""){
        textOut.textContent="Esperando entrada de texto...";
    }else{
        textOut.textContent=text.value;
    }
    //textOut.textContent = text.value === "" ? "Esperando entrada de texto..." : text.value;
    //textOut.textContent=text.value || "Esperando entrada de texto...";
});