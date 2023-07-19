function cesdscore(questions) {
  var total = 0;
  for (var i = 0; i < questions.elements.length; i++) {
      if (questions.elements[i].type == 'radio' && questions.elements[i].checked) {
          total += parseFloat(questions.elements[i].value)
      }
  }
  if (total < 17) {
    alert("You are fine!! Stay Happy!!")
}
if (total >= 17 && total < 28) {
    alert('Subthreshold depression symptoms')
}
if (total >= 28 && total < 30) {
  alert('Possible major depressive episode')
}
if (total >= 30 && total < 45) {
  alert('Probable major depressive episode')
}
if (total >= 45) {
  alert('Meets criteria for Major depressive episode')
}
  return total
}

