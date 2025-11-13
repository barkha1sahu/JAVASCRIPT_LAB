let result;

function calculateResult() {
  var eng = Number(document.getElementById("eng").value);
  var math = Number(document.getElementById("math").value);
  var phy = Number(document.getElementById("phy").value);
  var chem = Number(document.getElementById("chem").value);
  var bio = Number(document.getElementById("bio").value);

  result = (eng + math + phy + chem + bio) / 5;
  document.getElementById("result").textContent = result + "%";
}

function calculateGrade() {
  var eng = Number(document.getElementById("eng").value);
  var math = Number(document.getElementById("math").value);
  var phy = Number(document.getElementById("phy").value);
  var chem = Number(document.getElementById("chem").value);
  var bio = Number(document.getElementById("bio").value);

  result = (eng + math + phy + chem + bio) / 5;
  let grade;
  if (result >= 50 && result < 65) {
    grade = "C";
  } else if (result >= 65 && result < 80) {
    grade = "B";
  } else if (result >= 80 && result < 90) {
    grade = "A";
  } else if (result >= 90 && result < 100) {
    grade = "A+";
  }

  document.getElementById("grade").textContent = "Grade: " + grade;
}
