// script.js

// 버튼 요소와 이미지 요소를 가져옵니다.
const button = document.getElementById("img_btn");
const image = document.getElementById("btn_image");

// 입력 값이 변경될 때마다 이벤트를 처리하는 함수를 정의합니다.
function handleInputChange() {
    const inputText = document.getElementById("input-text").value;

    // 입력 값이 존재할 경우 버튼을 활성화하고 이미지를 변경합니다.
    if (inputText.trim() !== "") {
        button.disabled = false;
        image.src = "submit_O.svg";
    } else {
        button.disabled = true;
        image.src = "submit_X.svg";
    }
}

// 입력 값이 변경될 때마다 handleInputChange 함수를 호출합니다.
document.getElementById("input-text").addEventListener("input", handleInputChange);
