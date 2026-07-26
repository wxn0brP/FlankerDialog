import { promptDiv } from "../vars";

export function prompt(text: string, defaultValue = ""): Promise<string> {
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
		input.type = "text";
		input.value = defaultValue;
		input.addEventListener("keydown", e => {
			if (e.key === "Enter") end();
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
