document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("runtimeErrorButton");
  const hiddenContentSections = document.querySelectorAll(".hiddenContent");

  const errorMessages = [
    `sol: runtime error: ... EVIL 4 BIOHAZARD
  RE4\\reframework\\autorun\\IKTesting.lua:53: field 'atan2' is not callable (a nil value)
  stack traceback:
      ... EVIL 4 BIOHAZARD
      RE4\\reframework\\autorun\\IKTesting.lua:53: in upvalue 'calculate_yaw_pitch'
      ... EVIL 4 BIOHAZARD
      RE4\\reframework\\autorun\\IKTesting.lua:175: in upvalue 'update_ik_targets'
      ... EVIL 4 BIOHAZARD
      RE4\\reframework\\autorun\\IKTesting.lua:222: in function ...`,

    `sol: runtime error: ...\nDragons Dogma 2\\reframework\\autorun\\Weight Manager.lua:28: attempt to concatenate a nil value (upvalue 'selected_weight_multiplier_preset')
  stack traceback:
      ...\nDragons Dogma 2\\reframework\\autorun\\Weight Manager.lua:28: in function <...\nDragons Dogma 2\\reframework\\autorun\\Weight Manager.lua:26>`,

    `sol: runtime error: ...\nmon\\Dragons Dogma 2\\reframework\\autorun\\teleporter2.lua:68: field 'begin' is not callable (a nil value)
  stack traceback:
      ...\nmon\\Dragons Dogma 2\\reframework\\autorun\\teleporter2.lua:68: in function <...\nmon\\Dragons Dogma 2\\reframework\\autorun\\teleporter2.lua:61>`,
  ];

  let lastErrorMessageIndex = null;

  button.addEventListener("click", function () {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * errorMessages.length);
    } while (randomIndex === lastErrorMessageIndex);

    const randomErrorMessage = errorMessages[randomIndex];
    lastErrorMessageIndex = randomIndex;

    alert(randomErrorMessage);
    alert(`Now you have to close the game, fix the error, and restart the game to see if it worked! Try again to see if the error is fixed.`);

    hiddenContentSections.forEach((section) => {
      if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";
      }
    });
  });

  const applyFirstLetterStyle = (element) => {
    const words = element.textContent.trim().split(/\s+/);
    element.innerHTML = "";

    words.forEach((word) => {
      const firstLetter = word.charAt(0);
      const remainingLetters = word.slice(1);
      element.innerHTML += `<span class="first-letter">${firstLetter}</span><span class="remaining-letters">${remainingLetters}</span> `;
    });
  };

  const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const buttons = document.querySelectorAll("button");

  headings.forEach((heading) => applyFirstLetterStyle(heading));
  if (header) applyFirstLetterStyle(header);
  if (footer) applyFirstLetterStyle(footer);
  buttons.forEach((button) => applyFirstLetterStyle(button));
});
