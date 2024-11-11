const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Rak na 😘 ";
  gif.src = "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzBjZzRsanlmd2xvZjU3and1ZGh5NHp2dGh4c2FzcG9veXY2ZGw1ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/S9oNGC1E42VT2JRysv/giphy.gif";
});
// Function to move the No button randomly
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();
  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
// ตรวจสอบว่าเป็นมือถือหรือไม่
if (/Mobi|Android/i.test(navigator.userAgent)) {
  // สำหรับมือถือ ใช้การแตะ
  noBtn.addEventListener("touchstart", moveNoButton);
} else {
  // สำหรับคอมพิวเตอร์ ใช้การ hover
  noBtn.addEventListener("mouseover", moveNoButton);

}

