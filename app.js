(function () {
  const btn = document.querySelector(".container__link");
  const colors = [
   "#EDF67D",
   "#F896D8",
   "#CA7DF9",
   "#724CF9",
   "#564592",
   "#D782BA",
   "#EEB1D5",
   "#CA7DF9",
   "#EFC7E5",
   "#E0EFDA",
   "#92DCE5",
   "#EEE5E9",
   "#7C7C7C",
   "#D64933",
  ];
  btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * colors.length);
    //console.log(colors[random]);
    document.body.style.backgroundColor = colors[random]
  });
})();
