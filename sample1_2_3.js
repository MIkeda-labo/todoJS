function clickHandler(){
            const p = document.createElement("p");
            p.textContent = "ボタンが押されました";
            document.body.appendChild(p);
}

const button = document.getElementById("button");
button.addEventListener("click", clickHandler);