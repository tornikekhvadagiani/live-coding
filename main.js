function toggleModal() {
  const modalConteiner = document.getElementById("modalContainer");
  modalConteiner.classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
    for (let i = 1; i <= 3; i++) {
    
      const div = document.createElement("div");
      div.classList.add("footer");
  
      const img = document.createElement("img");
      img.setAttribute("src", "./img/Rectangle 5.png");
      img.classList.add("footer-img");
  
      const h = document.createElement("h4");
      h.textContent = "Space tourism takes giant leap forward";

      const paragrap = document.createElement("p");
      paragrap.textContent =
        "Commercial space travel inches closer to reality as industry leaders announce successful test flights and expedited timelines for space tourism ventures. With innovative spacecraft designs and robust s...";
      const card = document.createElement("div");
      card.className = "card";

      const leftText = document.createElement("span");
      leftText.className = "left-text";
      let countdown = 15;
      leftText.textContent = `This card will disappear in ${countdown} seconds`
      
      const rightText = document.createElement("span");
      rightText.className = "right-text";
      rightText.textContent = "See more >";
      card.appendChild(leftText);
      card.appendChild(rightText);
      div.append(img, h, paragrap, card);
      document.body.appendChild(div);
      const intervalId = setInterval(() => {
        countdown--;
        if (countdown > 0) {
          leftText.textContent = `This card will disappear in ${countdown} seconds`;
        } else {
          clearInterval(intervalId);
          leftText.textContent = "This card has timed out";
        }
      }, 1000);
    }
  });
  

// const footerConteiner = document.createComment("div");
// img.classList.add("footerConteiner");

// footerConteiner.append(div);
