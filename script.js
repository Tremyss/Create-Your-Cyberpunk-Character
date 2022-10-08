// ? Az innerHTML-el is lehetne operálni, de nem biztonságos és törli a szülő div tartalmát, ahelyére tesz valamit
// document.getElementById('nameReciever').innerHTML = '<label for="">Karakter Neve1</label><p id="charname">Lucy</p>'

// ! Add text to the div (id: #bottomText) from JS

// ? elmentjük egy változóba azt az elemet amiben dolgozni fogunk: 
let botText = document.querySelector('#bottomText')
// ? create element (div) - létrehozzuk azt az elemet amibe a tényleges szöveg kerül majd. elmenti egy változóba
const textDiv1 = document.createElement('div')
// ? bekerül a szöveg az elembe
textDiv1.innerText = 'The game is set in the dystopian metropolis of Night City. It is set in the Free State of Northern California. Night City is located south of San Francisco around the area of Morro Bay, CA. During Cyberpunk 2020, Night City was said to have a population of more than five million inhabitants. However, this number is suspected to be considerably larger in 2077.'
// ? append element - be"appendáljuk" :) az oldalra az elemet (a bottomText indexű divbe)
botText.append(textDiv1)

const textDiv2 = document.createElement('div')
textDiv2.innerText = 'Following an economic collapse sometime during the early 21st century, the United States is forced to rely on large corporations to survive. These corporations deal in a wide range of areas, such as weapons, robotics, cybernetics, pharmaceuticals, communications, and biotechnology; many of these companies operate above the law.'
botText.append(textDiv2)

const textDiv3 = document.createElement('div')
textDiv3.textContent = `The game follows the story of a hired gun on the rise in Night City, the most violent and dangerous metropolis of the corporate-ruled future. This character creator will allow players to choose the main character's name, gender, class, as well as cultural background — all of which may influence the shape of the game.`
botText.append(textDiv3)

// ! READ THE #nameInput AND COPY IT'S CONTENT INTO THE #nameReciever

var charNameInput = document.querySelector("#nameInput");
var charNameOutput = document.querySelector("#nameReciever");
const readName = () => {
    let nameTyped = ""
    nameTyped = charNameInput.value    
    charNameOutput.innerText = `${nameTyped}`
    // ? This works too: charNameOutput.innerText = nameTyped
}
charNameInput.addEventListener("input", readName);

// ! HANDLE GENDER SELECTOR, READ SELECTED VALUE, ADD MATCHING IMG TO CHARSHEET

const genderSelector = document.getElementById('genderDrop')
const handleGender = (event) => {
    /* console.log(event.target.value); // 👉️ get selected VALUE
    console.log(genderDrop.value);  // same
    console.log(genderDrop.options); // get an array of items (with all options)
    console.log(genderDrop.selectedIndex); // get INDEX of selected item
    console.log(genderDrop.options[genderDrop.selectedIndex].value); // NOTWORKING? 👉️ get selected VALUE even outside event handler
    console.log(genderDrop.options[genderDrop.selectedIndex].text);  // NOTWORKING? 👉️ get selected TEXT in or outside event handler */
    
    let genderOutput = document.querySelector('#genderReciever');
    let genderIcon = document.createElement("img");  
    genderIcon.setAttribute("id", "genderIcon");
    var selectedGender = ""      
    if (genderDrop.selectedIndex===1) {
        // ? selectedGender = female
        genderIcon.src = './pic/icon/icons8-female-80.png';        
    }
    if (genderDrop.selectedIndex===2) {
        // ? selectedGender = male
        genderIcon.src = './pic/icon/icons8-male-80.png';        
    }
    if (genderDrop.selectedIndex===3) {
        // ? selectedGender = nonbinary
        genderIcon.src = './pic/icon/icons8-nonbinary-flag-96.png';
    } 
    // ? This will do both: remove all existing children, and append all of the given new children, in one operation.
    genderOutput.replaceChildren(genderIcon);    
}
genderSelector.addEventListener('change', handleGender);

// ! HANDLE CLASS SELECTOR, READ SELECTED VALUE, ADD TEXT TO CHARSHEET 

const classSelector = document.getElementById('classDrop')
const handleClass = (event) => {
    let classTextOutput = document.querySelector('#classReciever');
    classTextOutput.innerText = classDrop.value
}
classSelector.addEventListener('change', handleClass);

// ! HANDLE GENDER & CLASS SELECTOR, READ SELECTED VALUES, ADD MATCHING IMG TO MIDDLE

const addImg = (e) => {
    let classImgOutput = document.querySelector('#classImgReciever');
    let classImg = document.createElement("img"); 
    classImg.setAttribute("id", "classImg");
    // ? If only gender or class are selected, the src is broken, we don't wan't to see the broken img icon:
    classImg.setAttribute("onerror", "this.style.display='none';"); 
    classImg.src = `./pic/${genderDrop.value}_${classDrop.value}.png`;    
    classImgOutput.replaceChildren(classImg);    
}
classSelector.addEventListener('change', addImg);
genderSelector.addEventListener('change', addImg);

// ! HANDLE ORIGIN SELECTOR, READ SELECTOR VALUES, ADD MATCHING IMG TO ORIGIN RECIEVER

const originSelector = document.querySelector('#originDrop')
const handleOrigin = (event) => {
    let originOutput = document.querySelector('#originReciever');
    let originImg = document.createElement("img");
    originImg.setAttribute("id", "originImg");
    originImg.setAttribute("onerror", "this.style.display='none';");
    originImg.src = `./pic/regions/Region${originDrop.selectedIndex}.png`;
    originOutput.replaceChildren(originImg);
}
originSelector.addEventListener('change', handleOrigin);


// ! UNUSED CODES
// * prevent button click to refresh page >>>> not needed cause we don't use buttons and dropdowns, may come handy in a future project.
/* 
document.querySelector('#genderInput').addEventListener('click', function(event) {
    event.preventDefault();
  });
document.querySelector('#classInput').addEventListener('click', function(event) {
    event.preventDefault();
});
document.querySelector('#backgroundInput').addEventListener('click', function(event) {
    event.preventDefault();
}); */

/* let classImgOutput = document.querySelector('#classImgReciever');
    let classImg = document.createElement("img"); 
    if (classDrop.selectedIndex===1 && genderDrop.selectedIndex===1) {
        classImg.src = './pic/female_rockeryboy.png';
    }
    if (classDrop.selectedIndex===1 && genderDrop.selectedIndex===2) {
        classImg.src = './pic/male_rockerboy.jpg';
    }
    classImgOutput.replaceChildren(classImg);     */


