function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var person = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${person}.`;
  } else {
    return `There is nobody waiting to be served!`;
  }
}
function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    for (var i = 1, i < katzDeliLine.length, i++)
    return `+ i +
    
  } else {
    return `The line is currently empty.`;
  }
}
}