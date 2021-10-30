let funct = [quadratic, Math.sin, parbola];
// let func = prompt("input function");
// let from = prompt("input from");
// let to = prompt("input to");
// let step = prompt("input step");
function printTable(from, to, step, func) {
  if (func === undefined) {
    return;
  }
  from = from;
  to = to;
  step = step || 1;
  document.write("<table border='1' cellspacing='0'>");
  for (var x = from; x <= to; x += step) {
    document.write("<tr>");
    document.write("<td>" + x + "</td>");
    document.write("<td>" + func(x) + "</td>");
    document.write("</tr>");
  }
  document.write("</table>");
}
function quadratic(x) {
  return x * x;
}

function parbola(x) {
  return x / 2;
}
