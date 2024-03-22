
let JohnsTeamScore = [89, 120, 103];
let MikesTeamScore = [116, 94, 123];

function calculateAvg() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}

var JohnsTeamAvg =  calculateAvg(...JohnsTeamScore);
var MikesTeamAvg =  calculateAvg(...MikesTeamScore);
//console.log(JohnsTeamAvg + " " + MikesTeamAvg);

//John's team vs mike's team
if (JohnsTeamAvg > MikesTeamAvg  ) {   
    console.log(`John\'s team won the game with an average score of ${JohnsTeamAvg}`); 
}else if (MikesTeamAvg > JohnsTeamAvg ) {
     console.log(`Mike\'s team won the game with an average score of ${MikesTeamAvg}`); 
}else { 
    console.log(`The game ended in a draw between all teams with an average score of ${JohnsTeamAvg}`);
}


let MarysTeamScore = [97, 134, 105];
var MarysTeamAvg =  calculateAvg(...MarysTeamScore)

//console.log(JohnsTeamAvg + " " + MikesTeamAvg + " " + MarysTeamAvg);

// John's Team vs Mike's Team vs Mary's Team
if (JohnsTeamAvg > MikesTeamAvg  && JohnsTeamAvg > MarysTeamAvg) {   
    console.log(`John\'s team won the game with an average score of ${JohnsTeamAvg}`); 
}else if (MikesTeamAvg > JohnsTeamAvg && MikesTeamAvg > MarysTeamAvg) {
     console.log(`Mike\'s team won the game with an average score of ${MikesTeamAvg}`); 
}else if ( MarysTeamAvg > JohnsTeamAvg &&  MarysTeamAvg > MikesTeamAvg) { 
    console.log(`Mary\'s team won the game with an average score of ${MarysTeamAvg}`);  
}else if (JohnsTeamAvg === MikesTeamAvg  && JohnsTeamAvg > MarysTeamAvg) {   
    console.log(`The game ended in a draw between John\'s team and Mike\'s team with an average score of ${JohnsTeamAvg}`);
 }else if (JohnsTeamAvg === MarysTeamAvg && JohnsTeamAvg > MikesTeamAvg ) {  
    console.log(`The game ended in a draw between John\'s team and Mary\'s team with an average score of ${JohnsTeamAvg}`); 
}else if (MikesTeamAvg === MarysTeamAvg && MarysTeamAvg > JohnsTeamAvg ) { 
    console.log(`The game ended in a draw between Mike\'s team and Mary\'s team with an average score of ${MikesTeamAvg}`);
}else { 
    console.log(`The game ended in a draw between all teams with an average score of ${JohnsTeamAvg}`);
}
