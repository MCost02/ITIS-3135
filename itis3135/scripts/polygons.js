function polygon(){
let sides = prompt("Please tell the Masterly Adaptive Cheetah how many sides your polygon has!");
alert(getShape(validateEntry(sides)));
}

function validateEntry(sides) {
    while (isNaN(parseInt(sides)) == true || sides == "0" || parseInt(sides) > 10) {
        sides = prompt("Please enter a number between 1 and 10");
    }    
    if (!(sides % 1 === 0)) {
        sides = Math.round(parseFloat(entry))
    } 
    else {
        sides = parseInt(sides);
    }
    return sides;
}


function getShape(numSides) {
    switch(numSides) {
        case 1:
            return 'A polygon that has 1 side is called a "monogon".';
        case 2:
            return 'A polygon that has 2 sides is called a "digon".';
        case 3:
            return 'A polygon that has 3 sides is called a "triangle".';
        case 4:
            return 'A polygon that has 4 sides is called a "quadrilateral".';
        case 5:
            return 'A polygon that has 5 sides is called a "pentagon".';
        case 6: 
            return 'A polygon that has 6 sides is called a "hexagon".';
        case 7:
            return 'A polygon that has 7 sides is called a "septagon".';
        case 8:
            return 'A polygon that has 8 sides is called a "octagon".';
        case 9:
            return 'A polygon that has 9 sides is called a "nonagon".';
        case 10:
            return 'A polygon that has 10 sides is called a "decagon".';
    }
}