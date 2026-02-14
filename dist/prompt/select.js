import { promptDiv } from "../vars.js";
export function selectPrompt(text, options, optionsValues = [], categories = []) {
    return new Promise((resolve) => {
        function end() {
            resolve(select.value);
            div.fadeOut();
            setTimeout(() => {
                div.remove();
            }, 2000);
        }
        const div = document.createElement("div");
        div.style.opacity = "0";
        div.classList.add("prompt");
        div.innerHTML = "<p>" + text + "<p><br />";
        const select = document.createElement("select");
        for (let i = 0; i < categories.length; i++) {
            const category = categories[i];
            const selectElement = document.createElement("optgroup");
            selectElement.label = category.name;
            for (let j = 0; j < category.options.length; j++) {
                const optionElement = document.createElement("option");
                optionElement.value = category.options[j] || category.options[j];
                optionElement.innerHTML = category.options[j];
                selectElement.appendChild(optionElement);
            }
            select.appendChild(selectElement);
        }
        for (let i = 0; i < options.length; i++) {
            const optionElement = document.createElement("option");
            optionElement.value = optionsValues[i] || options[i];
            optionElement.innerHTML = options[i];
            select.appendChild(optionElement);
        }
        select.querySelector("option").selected = true;
        div.appendChild(select);
        div.appendChild(document.createElement("br"));
        const btn = document.createElement("button");
        btn.innerHTML = "OK";
        div.appendChild(btn);
        btn.addEventListener("click", end);
        promptDiv.appendChild(div);
        div.fadeIn();
    });
}
