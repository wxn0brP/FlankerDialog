import { promptDiv } from "../vars.js";
export function timePrompt(text, inputType = "datetime-local", min, max) {
    return new Promise(resolve => {
        function end() {
            resolve(input.value);
            div.fadeOut();
            setTimeout(() => {
                div.remove();
            }, 2000);
        }
        const div = document.createElement("div");
        div.style.opacity = "0";
        div.classList.add("prompt");
        div.innerHTML = "<p>" + text + "<p><br />";
        const input = document.createElement("input");
        input.type = inputType;
        input.value = "00:00";
        if (min)
            input.min = new Date(min).toISOString();
        if (max)
            input.max = new Date(max).toISOString();
        input.addEventListener("keydown", e => {
            if (e.key === "Enter")
                end();
        });
        div.appendChild(input);
        setTimeout(() => {
            input.focus();
        }, 100);
        div.appendChild(document.createElement("br"));
        const btn = document.createElement("button");
        btn.innerHTML = "OK";
        div.appendChild(btn);
        btn.addEventListener("click", end);
        promptDiv.appendChild(div);
        div.fadeIn();
    });
}
