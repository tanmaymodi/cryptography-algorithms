// encryption section of julia ALgorith

function validator(c) {
  var n = c.charCodeAt(0);
  var difference = parseInt(document.getElementById("letter-difference").value);
  //document.getElementById("difference").innerHTML = difference;
  if (c == " ") {
    return " ";
  } else {
    if (n > 96 && n < 123) {
      if (difference == NaN) {
        difference = parseInt(1);
      } else if (difference > 25) {
        difference = 25;
        document.getElementById("letter-difference").value = difference;
      } else if (difference < 1) {
        difference = 1;
        document.getElementById("letter-difference").value = difference;
      }
      n = n + difference;
      if (n > 122) {
        n = n - 26;
      }
    }
    return String.fromCharCode(n);
  }
}
function Print() {
  var text = document.getElementById("input-text").value;
  text = text.toLowerCase();
  var ans = text.length;
  var t = "";
  for (var i = 0; i < ans; i++) {
    t += validator(text.charAt(i));
    //t+=" ";
  }

  var difference = document.getElementById("letter-difference").value;
  //document.getElementById("length").innerHTML = ans;
  document.getElementById("output-section").value = t;
}

//decryption section of julia ALgorith

function validatorDecryption(c) {
  var n = c.charCodeAt(0);
  var difference = parseInt(
    document.getElementById("letter-difference-d").value
  );
  //document.getElementById("difference").innerHTML = difference;
  if (c == " ") {
    return " ";
  } else {
    if (n > 96 && n < 123) {
      if (difference == NaN) {
        difference = parseInt(1);
      } else if (difference > 25) {
        difference = 25;
        document.getElementById("letter-difference-d").value = difference;
      } else if (difference < 1) {
        difference = 1;
        document.getElementById("letter-difference-d").value = difference;
      }
      n = n - difference;
      if (n < 97) {
        n = n + 26;
      }
    }
    return String.fromCharCode(n);
  }
}
function PrintDecryption() {
  var text = document.getElementById("input-text-d").value;
  text = text.toLowerCase();
  var ans = text.length;
  var t = "";
  for (var i = 0; i < ans; i++) {
    t += validatorDecryption(text.charAt(i));
    //t+=" ";
  }

  var difference = document.getElementById("letter-difference-d").value;
  //document.getElementById("length").innerHTML = ans;
  document.getElementById("output-section-d").value = t;
}

//copy text area button function
function copyText(textAreaName) {
  var copyText = document.getElementById(textAreaName);
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Text Copied");
}
