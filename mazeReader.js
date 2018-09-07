var canvas = document.getElementById("someCanvas");
var ctx = canvas.getContext("2d");

// an array of objects
let oddRowCtx = [];
let evenRowCtx = [];

function storeMaze() {
  let mazeText = [];
  mazeText = document.getElementById("out").innerHTML;
  localStorage.setItem("mazeTextCookie", mazeText);
}

function mazeReader() {
  // organize giant array into rows of arrays
  let mazeText = localStorage.getItem("mazeTextCookie");
  let mazeArray = mazeText.split("");
  let x = 0;
  let y = 0;

  let organizedMazeArray = [];

  let row0 = [];
  let row1 = [];
  let row2 = [];
  let row3 = [];
  let row4 = [];
  let row5 = [];
  let row6 = [];
  let row7 = [];
  let row8 = [];
  let row9 = [];
  let row10 = [];
  let row11 = [];
  let row12 = [];
  let row13 = [];
  let row14 = [];
  let row15 = [];
  let row16 = [];
  let row17 = [];
  let row18 = [];
  let row19 = [];
  let row20 = [];

  // let rowTwo = [];
  // for each element partition rows into objects
  mazeArray.forEach(function(element, index) {
    // each row is 45 characters in length
    //get row 0
    if (index < 45) {
      row0.push(element);
    }
    if (index === 45) {
      organizedMazeArray.push(row0);
    }
    // get row 1 and skip the enter
    if (index > 45 && index < 91) {
      row1.push(element);
    }
    if (index === 91) {
      organizedMazeArray.push(row1);
    }
    if (index > 91 && index < 137) {
      row2.push(element);
    }
    if (index === 137) {
      organizedMazeArray.push(row2);
    }
    if (index > 137 && index < 183) {
      row3.push(element);
    }
    if (index === 183) {
      organizedMazeArray.push(row3);
    }
    if (index > 183 && index < 229) {
      row4.push(element);
    }
    if (index === 229) {
      organizedMazeArray.push(row4);
    }
    if (index > 229 && index < 275) {
      row5.push(element);
    }
    if (index === 275) {
      organizedMazeArray.push(row5);
    }
    if (index > 275 && index < 321) {
      row6.push(element);
    }
    if (index === 321) {
      organizedMazeArray.push(row6);
    }
    if (index > 321 && index < 367) {
      row7.push(element);
    }
    if (index === 367) {
      organizedMazeArray.push(row7);
    }
    if (index > 367 && index < 413) {
      row8.push(element);
    }
    if (index === 413) {
      organizedMazeArray.push(row8);
    }
    if (index > 413 && index < 459) {
      row9.push(element);
    }
    if (index === 459) {
      organizedMazeArray.push(row9);
    }
    if (index > 459 && index < 505) {
      row10.push(element);
    }
    if (index === 505) {
      organizedMazeArray.push(row10);
    }
    if (index > 505 && index < 551) {
      row11.push(element);
    }
    if (index === 551) {
      organizedMazeArray.push(row11);
    }
    if (index > 551 && index < 597) {
      row12.push(element);
    }
    if (index === 597) {
      organizedMazeArray.push(row12);
    }
    if (index > 597 && index < 643) {
      row13.push(element);
    }
    if (index === 643) {
      organizedMazeArray.push(row13);
    }
    if (index > 643 && index < 689) {
      row14.push(element);
    }
    if (index === 689) {
      organizedMazeArray.push(row14);
    }
    if (index > 689 && index < 735) {
      row15.push(element);
    }
    if (index === 735) {
      organizedMazeArray.push(row15);
    }
    if (index > 735 && index < 781) {
      row16.push(element);
    }
    if (index === 781) {
      organizedMazeArray.push(row16);
    }
    if (index > 781 && index < 827) {
      row17.push(element);
    }
    if (index === 827) {
      organizedMazeArray.push(row17);
    }
    if (index > 827 && index < 873) {
      row18.push(element);
    }
    if (index === 873) {
      organizedMazeArray.push(row18);
    }
    if (index > 873 && index < 919) {
      row19.push(element);
    }
    if (index === 919) {
      organizedMazeArray.push(row19);
    }
    if (index > 919 && index < 965) {
      row20.push(element);
    }
    if (index === 965) {
      organizedMazeArray.push(row20);
    }
  });
  // console.log(organizedMazeArray);

  // redraw rows with ctx
  function drawOddRow(rowArray) {
    ctx.beginPath();
    rowArray.forEach(function(element, index) {
      // draw square
      // ctx.fillRect(x,y,color,width, height)
      if (element === "◾") {
        oddRowCtx.push([x, y, 5, 3.478]);
        ctx.fillStyle = "#A66D3F";
        ctx.fillRect(x, y, 5, 3.478);
        x += 5;
      }
      if (element === " ") {
        x += 5;
      }
      if (element === "—") {
        oddRowCtx.push([x, y, 5, 3.478]);
        ctx.fillStyle = "#ffccff";
        ctx.fillRect(x, y, 5, 3.478);
        x += 5;
      }
    });
  }
  function drawEvenRow(rowArray) {
    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.strokeStyle = "black";
    rowArray.forEach(function(element, index) {
      if (element === " ") {
        //evenRowCtx.push(["air"]);
        x += 5;
      }
      if (element === "|") {
        evenRowCtx.push([x, y, 5, 10.434]);
        ctx.fillStyle = "#ffccff";
        // ctx.fillRect(x,y,width, height)
        ctx.fillRect(x, y, 5, 10.434);
        x += 5;
      }
    });
  }

  // store arrays without ↵  character
  // draw first row
  drawOddRow(organizedMazeArray[0]);
  x = 0;
  y += 3.478;
  drawEvenRow(organizedMazeArray[1]);
  x = 0;
  y += 10.434;
  drawOddRow(organizedMazeArray[2]);
  x = 0;
  y += 3.478;
  drawEvenRow(organizedMazeArray[3]);
  x = 0;
  y += 10.434;
  drawOddRow(organizedMazeArray[4]);
  x = 0;
  y += 3.478;
  drawEvenRow(organizedMazeArray[5]);
  x = 0;
  y += 10.434;
  drawOddRow(organizedMazeArray[6]);
  x = 0;
  y += 3.478;
  drawEvenRow(organizedMazeArray[7]);
  x = 0;
  y += 10.434;
  drawOddRow(organizedMazeArray[8]);
  x = 0;
  y += 3.478;
  drawEvenRow(organizedMazeArray[9]);
  x = 0;
  y += 10.434;
  drawOddRow(organizedMazeArray[10]);
  x = 0;
  y += 3.478;
  drawEvenRow(organizedMazeArray[11]);
  x = 0;
  y += 10.434;
  drawOddRow(organizedMazeArray[12]);
  x = 0;
  y += 3.478;
  drawEvenRow(organizedMazeArray[13]);
  x = 0;
  y += 10.434;
  drawOddRow(organizedMazeArray[14]);
  x = 0;
  y += 3.478;
  drawEvenRow(organizedMazeArray[15]);
  x = 0;
  y += 10.434;
  drawOddRow(organizedMazeArray[16]);
  x = 0;
  y += 3.478;
  drawEvenRow(organizedMazeArray[17]);
  x = 0;
  y += 10.434;
  drawOddRow(organizedMazeArray[18]);
  x = 0;
  y += 3.478;
  drawEvenRow(organizedMazeArray[19]);
  x = 0;
  y += 10.434;
  drawOddRow(organizedMazeArray[20]);
}

// setTimeout(function() {
//   storeMaze();
// }, 2000);
