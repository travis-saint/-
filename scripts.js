function about() {
  document.getElementById("email-field").style.visibility = "hidden";
  document.getElementById("content").innerHTML = "I'm a minimalist";
  
 
}

function contact() {
  document.getElementById("content").innerHTML = "";
  document.getElementById("email-field").style.visibility = "visible";
  
}

function copy() {
  navigator.clipboard.writeText("inbound@travissaint.com")
  document.getElementById("email-field").innerHTML = "Copied";

} 