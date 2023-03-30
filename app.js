const dragArea = document.querySelector(".appbody"),
  dragText = dragArea.querySelector("h3"),
  btn = dragArea.querySelector("button"),
  input = dragArea.querySelector("input");

let myFile;

btn.onclick = () => {
  input.click();
};

input.addEventListener("change", function () {
  myFile = this.files[0];
  dragArea.classList.add("active");
  showMe();
});

dragArea.addEventListener("dragover", (event) => {
  event.preventDefault();
  dragArea.classList.add("active");
  dragText.textContent = "Realse To Upload File";
});

dragArea.addEventListener("dragleave", () => {
  dragArea.classList.remove("active");
  dragText.textContent = "Darag & Drop";
});

dragArea.addEventListener("drop", (event) => {
  event.preventDefault();
  myFile = event.dataTransfer.files[0];
  showMe();
});

function showMe() {
  let fileType = myFile.type;
  let validEx = ["image/jpeg", "image/jpg", "image/png"];
  if (validEx.includes(fileType)) {
    let fileReader = new FileReader();
    fileReader.onload = () => {
      let imgUrl = fileReader.result;
      let img = `<img src="${imgUrl}" alt=""></img>`;
      dragArea.innerHTML = img;
    };
    fileReader.readAsDataURL(myFile);
  } else {
    alert("this file is not valid");
    dragArea.classList.remove("active");
    dragText.textContent = "Darag & Drop";
  }
}
