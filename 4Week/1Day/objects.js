var footballPlayer = {
    firstName: "Russell",
    lastName: "Wilson",
    age: 28,
    team: "Seattle Seahawks",
    number: 3,
    greeting: function() {
        console.log("GO HAWKS!")
    },
    teammates: ["Bobby Wagner", "D.K. Metcalf"]
};

function buildAPlayer(first, last, team) {
    return {
        firstName: first,
        lastName: last,
        teamName: team,
        greeting: function() {
            console.log(`Hey its ${this.firstName} ${this.lastName} from your ${this.teamName}`)
        }
    }
}

footballPlayer.greeting();
// print first and last name!

// "dot notation"
console.log(footballPlayer.firstName)
console.log(footballPlayer.lastName)

// print team!
// "bracket notation"
// console.log(footballPlayer["team"])

// loop through all of keys in football player
// cool output for the console
// firstName - Russell...
for(var keyVariable in footballPlayer) {
    // console.log(keyVariable + " - " + footballPlayer[keyVariable]);
    // console.log(`${keyVariable} - ${footballPlayer[keyVariable]}`);
}

var webmasters = [
    {firstName: "Heeran", lastName: "Thyalan", location: "San Jose"},
    {firstName: "Matt", lastName: "Shirvan", location: "Olympia"},
    {firstName: "Selvin", lastName: "Palma", location: "D.C."},
    {firstName: "Devon", lastName: "Newsom", location: "Tacoma"}
];

// loop webmasters array, outputing info contained in objects
for(var i=0; i<webmasters.length; i++) {
    // each object will be
    // print each key/value pair of each object
    // if location is "Tacoma", change firstName to "Tacoman"
    for(var key in webmasters[i]) {
        if(webmasters[i][key] === "Tacoma") {
            webmasters[i].firstName = "Tacoman";
        }
        console.log(`${key} - ${webmasters[i][key]}`);
    }
}

