function dlConfirmation() {
  var dl1 = document.getElementById("dl1");
  var confirmed = window.confirm("Click 'OK' to confirm downloading");
  if(confirmed) {
    dl1.click();
  }else{
    console.log("Cancelled");
  }
}