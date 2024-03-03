new Twitch.Embed("twitch-embed", {
	width: "100%",
	layout: "video",
	muted: true,
	channel: "puschkin_bmb",
	// Only needed if this page is going to be embedded on other websites
	//parent: ["embed.example.com", "othersite.example.com"],
});

// Logic for horizontal accordion
const accordion = document.querySelector(".horizontal-accordion");
const accordionElements = accordion.querySelectorAll(".accordion-element");
accordion.addEventListener("click", (clickedElement) => {
	const element = clickedElement.target.closest(".accordion-element");
	if (element.classList.contains("active")) return;
	else {
		accordionElements.forEach((elem) => {
			elem.classList.remove("active");
			elem.querySelector(".element-container").classList.add("no-show");
			elem.querySelector("h3").classList.remove("no-show");
		});
		element.classList.add("active");
		element.querySelector(".element-container").classList.remove("no-show");
		element.querySelector("h3").classList.add("no-show");
	}
});
