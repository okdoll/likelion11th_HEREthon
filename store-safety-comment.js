const button = document.getElementById("img_btn");
const image = document.getElementById("btn_image");


function handleInputChange() {
    const inputText = document.getElementById("input-text").value;

    if (inputText.trim() !== "") {
        button.disabled = false;
        image.src = "submit_O.svg";
    } else {
        button.disabled = true;
        image.src = "submit_X.svg";
    }
}

document.getElementById("input-text").addEventListener("input", handleInputChange);
