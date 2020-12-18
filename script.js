const inputElement = document.getElementById("myfile");
inputElement.addEventListener("change", handleFiles, false);
function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
  let file = fileList[0];
  let src = URL.createObjectURL(file);
  document.getElementById("data").src = src;
}