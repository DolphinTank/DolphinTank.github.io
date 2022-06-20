let navItems = document.getElementsByClassName("nav-items");
let ham = document.getElementById("ham");

let descs = [
  {
    text: "Find The Next Mark Zuckerburg Inside Your Child !",
    src: "images/zuckerburg.jpg",
  },
  {
    text: "Learn Problem-Identifying and Solving skills Like Rithesh Agarwal",
    src: "images/ritesh-agarwal.jpg",
  },
  {
    text: "Develop Technical skills and ability to innovate Like Tilak Mehta",
    src: "images/Tilak-Mehta.jpeg",
  },
  {
    text: "This Decade belongs to Indian Entrepreneurs.",
    src: "https://www.pinkvilla.com/imageresize/anupam_mittal_main.jpg?width=752&format=webp&t=pvorg",
  },
  {
    text: "Learn from successful children Entrepreneurs, product managers from MNCs, IIT ,IIM graduates",
    src: "https://ychef.files.bbci.co.uk/976x549/p0202jwh.jpg",
  },
];

ham.addEventListener("click", () => {
  if (navItems[0].style.display === "flex") {
    navItems[0].style.display = "none";
  } else {
    navItems[0].style.display = "flex";
  }
});

let desc = document.getElementById("desc");
let img = document.getElementById("desc-img");

let globalCount = 3;

setInterval(() => {
  let { text, src } = descs[globalCount];
  desc.innerText = text;
  img.src = src;
  if (globalCount === descs.length - 1) {
    globalCount = 0;
  } else {
    globalCount++;
  }
}, 5000);
