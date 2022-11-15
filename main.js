/*
  Destructuring
  - Destructuring Array Advanced Examples
*/

let myFriends = ["Andrew", "Jens", "Tom", ["Anitha", "Amr", ["Kevin", "Farideh"]]];

// console.log(myFriends[3][2][1]);

// let [, , , [a, , [, b]]] = myFriends;

let [, , , [a, , [, b]]] = myFriends;

console.log(a); 
console.log(b); 


/*
  Destructuring
  - Destructuring Array => swapping Variables
*/

let book = "video";
let video = "book";

[book, video] = [Video, Book];

console.log(book);
console.log(video);


/*
  Destructuring
  - Destructuring Object
*/

const user = {
    theName: "Adnan",
    theAge: "25",
    theTitle: "Developer",
    theConuntry: "Nederlands",
    skills: {
        html:70,
        css:80,
    }
};


// ({ theName, theAge, theTitle, theCountry } = user)


/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/
const { theName : n, theAge, theTitle, theCountry, skills:{html} } = user;

console.log(n)
console.log(theAge)
console.log(theTitle)
console.log(theCountry)
console.log(`My HTML Skill Progress Is ${html}`)

/*
  Destructuring
  - Destructuring Function Parameters
*/

const developer = {
    theName: "James",
    theAge: 39,
    skills: {
      html: 70,
      css: 80,
    },
  };

    showDetails(user);

    // function showDetails(obj){

    //     console.log(`Your Name Is ${obj.theName}`)
    //     console.log(`Your Age Is ${obj.theAge}`)
    //     console.log(`Your Age Is ${obj.skills.css}`)
    // }

    function showDetails({theName, theAge, skills:{css: c}} = user){

        console.log(`Your Name Is ${theName}`)
        console.log(`Your Age Is ${theAge}`)
        console.log(`Your Age Is ${c}`)
    }


    /*
    Destructuring
    Destructuring Mixed Content
*/