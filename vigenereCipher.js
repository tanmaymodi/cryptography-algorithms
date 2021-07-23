function vce_encode(input_letter, shift_value) {
  var input_n = input_letter.charCodeAt(0);
  var shift_n = shift_value.charCodeAt(0);
  if (input_n < 32 || input_n > 126 || shift_n < 32 || shift_n > 126) {
    return String.fromCharCode(input_n);
  }
  var new_letter = input_n + shift_n - 32;
  if (new_letter > 126) {
    new_letter -= 94;
  }

  return String.fromCharCode(new_letter);
}
function vce_decode(input_letter, shift_value) {
  var input_n = input_letter.charCodeAt(0);
  var shift_n = shift_value.charCodeAt(0);
  if (input_n < 32 || input_n > 126 || shift_n < 32 || shift_n > 126) {
    return String.fromCharCode(input_n);
  }
  var new_letter = input_n - shift_n + 32;
  if (new_letter < 32) {
    new_letter += 94;
  }
  return String.fromCharCode(new_letter);
}
function encrypt_vce() {
  var input = document.getElementById("vce_text").value;
  var key = document.getElementById("vce_key").value;
  var n = input.length;
  var k = key.length;
  var i = 0;
  var encypted_text = "";
  for (var j = 0; j < n; j++) {
    encypted_text += vce_encode(input.charAt(j), key.charAt(i));
    i++;
    i %= k;
  }
  document.getElementById("vce_output").value = encypted_text;
}

function decrypt_vce() {
  var input = document.getElementById("vce_text_d").value;
  var key = document.getElementById("vce_key_d").value;
  var n = input.length;
  var k = key.length;
  var i = 0;
  var encypted_text = "";
  for (var j = 0; j < n; j++) {
    encypted_text += vce_decode(input.charAt(j), key.charAt(i));
    i++;
    i %= k;
  }
  document.getElementById("vce_output_d").value = encypted_text;
}

function crackTimePrediction() {
  var key = document.getElementById("vce_key").value;
  var n = key.length;
  var output = "Time to crack key: ";
  if (n <= 4) {
    output += "Instant";
  } else if (n >= 5 && n <= 6) {
    output += "3 hours";
  } else if (n == 7) {
    output += "9 hours";
  } else if (n == 8) {
    output += "3 days";
  } else {
    output += "centuries";
  }
  document.getElementById("crackTime").innerHTML = output;
}
