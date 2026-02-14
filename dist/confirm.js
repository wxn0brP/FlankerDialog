import { promptDiv } from "./vars.js";
export function confirm(text, yesText = "OK", noText = "Cancel") {
    return new Promise((resolve) => {
        function end(accept) {
            return () => {
                resolve(accept);
                div.fadeOut();
                setTimeout(() => {
                    div.remove();
                }, 2000);
            };
        }
        const div = document.createElement("div");
        div.style.opacity = "0";
        div.classList.add("prompt");
        div.innerHTML = "<p>" + text + "<p><br />";
        const flex = document.createElement("div");
        flex.style.display = "flex";
        flex.style.justifyContent = "space-evenly";
        const reject = document.createElement("button");
        reject.innerHTML = noText || "Cancel";
        reject.addEventListener("click", end(false));
        flex.appendChild(reject);
        const accept = document.createElement("button");
        accept.innerHTML = yesText || "OK";
        accept.addEventListener("click", end(true));
        flex.appendChild(accept);
        function btn(e) {
            if (e.key == "Enter")
                end(true)();
            else if (e.key == "Escape")
                end(false)();
            document.removeEventListener("keydown", btn);
        }
        document.addEventListener("keydown", btn);
        setTimeout(() => {
            accept.focus();
        }, 100);
        div.appendChild(flex);
        promptDiv.appendChild(div);
        div.fadeIn();
    });
}
