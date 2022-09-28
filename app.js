const personInfo = [
  {
    id: 1,
    src: "./images/image-tanya.jpg",
    message: `“I’ve been interested in coding for a while but never taken the jump,until now. I couldn’t recommend this course enough.I’m now in the job of my dreams and so excited about the future.”`,
    name: "Tanya Sinclair ",
    jobTile: "UX Engineer",
  },
  {
    id: 2,
    src: "./images/image-john.jpg",
    message: `“If you want to lay the best foundation possible I’d recommend taking this course.The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”`,
    name: "John Tarkpor Junior",
    jobTile: "Front-end Developer",
  },
];
let currentItemIndex = 0;
// === selectors===
const personImg = document.querySelector(".testimonial__img");
const testimonial = document.querySelector(".text");
const name = document.querySelector(".name");
const jobTile = document.querySelector(".job-title");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
personImg.src = personInfo[currentItemIndex].src;
testimonial.innerText = personInfo[currentItemIndex].message;
name.innerText = personInfo[currentItemIndex].name;
jobTile.innerText = personInfo[currentItemIndex].jobTile;

//===event listeners===
prevBtn.addEventListener("click", prevItem);
nextBtn.addEventListener("click", nextItem);

function prevItem() {
  currentItemIndex--;
  if (currentItemIndex < 0) {
    currentItemIndex = personInfo.length - 1;
  }
  personImg.src = personInfo[currentItemIndex].src;
  testimonial.innerText = personInfo[currentItemIndex].message;
  name.innerText = personInfo[currentItemIndex].name;
  jobTile.innerText = personInfo[currentItemIndex].jobTile;
}
function nextItem() {
  currentItemIndex++;
  if (currentItemIndex > personInfo.length - 1) {
    currentItemIndex = 0;
  }
  personImg.src = personInfo[currentItemIndex].src;
  testimonial.innerText = personInfo[currentItemIndex].message;
  name.innerText = personInfo[currentItemIndex].name;
  jobTile.innerText = personInfo[currentItemIndex].jobTile;
}
