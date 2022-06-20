let navItems = document.getElementsByClassName("nav-items");
let ham = document.getElementById("ham");

let descs = [
  {
    text: "Find The Next Mark Zuckerburg Inside Your Child !",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
  },
  {
    text: "Learn Problem-Identifying and Solving skills Like Rithesh Agarwal",
    src: "https://businessconnectindia.in/wp-content/uploads/2020/08/ritesh-agarwal.jpg",
  },
  {
    text: "Develop Technical skills and ability to innovate Like Tilak Mehta",
    src: "https://businessconnectindia.in/wp-content/uploads/2020/08/Tilak-Mehta.jpeg",
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

let globalCount = 1;

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
