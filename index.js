new Twitch.Embed("twitch-embed", {
  width: "100%",
  layout: "video",
  muted: true,
  channel: "puschkin_bmb",
  // Only needed if this page is going to be embedded on other websites
  //parent: ["embed.example.com", "othersite.example.com"],
});

window.addEventListener("resize", function () {
  document.body.style.backgroundSize = window.innerWidth + "px " + window.innerHeight + "px";
});
