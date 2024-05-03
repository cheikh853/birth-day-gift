let myLeads = []
 
 const inputEl = document.getElementById('input-el')
 const inputBtn = document.getElementById('input-btn')
 const ulEl = document.getElementById('ul-el');
 const deleteBtn = document.getElementById('input-dlt')

 const reception = JSON.parse(localStorage.getItem("myLeads"))

function renderLoad(){
    let listItems = ""
    for (let i =0; i < myLeads.length; i++){
        listItems += `
        <li>
        <a href="${myLeads[i]}" >${myLeads[i]}</a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}
if (reception){
    myLeads = reception
    renderLoad()
}

deleteBtn.addEventListener("dblclick", function(){
    if(reception){
        alert("hello")
        localStorage.clear()
        myLeads=[]
        renderLoad()
    }
    
})
 

 inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLoad()
    
})




/*function changerimage(x,image)
{
if (x==1)
{
    image.src = "img/resro.jpg";

}
if (x==2)
{
image.src = "img/hamburger.jpg";
}
}

function afficherMessage() {
        var nom = document.getElementById("nom").value;
        var prenom = document.getElementById("prenom").value;
        var letexte = document.getElementById("letexte");

        if(nom !="" && prenom!=""){
            document.write("Bienvenue "+prenom+" "+nom +" chez votre restaurant DAROU KHOUDOSS TRAITEUR");
        }
        else 
        document.write("y a une erreur")
     }    
afficherMessage();
console.log("comment allez vous les gars")




let saveEl =document.getElementById('save-el')
count1= 0
comptage = document.getElementById('count')
console.log(comptage)
function increment (){
    count1= count1 + 1
    comptage.innerText = count1
    if(count1==30){
        alert('vous avez atteint le nombre maximum d\'article possible')
    }

}
 function save(){
    let savedEl =count1+" - "
    saveEl.textContent+=savedEl
    comptage.textContent=0
    count1=0

    

}
let prenom = 'cheikh '
let message1 = 'vous avez trois nouveaux messages'
console.log(message)
let messageToUser= message +", "+ prenom + "!"
console.log(messageToUser)

let myName = 'cheikh diop '
let Greetings = 'hello comment allez vous '
let myGreetings = Greetings+" "+myName
document.write(myGreetings)
salut = document.getElementById('welcomeEl')
salut.innerText=myGreetings

//saveEl =document.getElementById('save-el')
// FONCTIONS INCREMENTEES 
let Point = 3
function addThreePoints(){
    Point +=3
    console.log(Point)

}
addThreePoints()
addThreePoints()

function removePoint(){
    Point-=1
    console.log(Point)
}
removePoint()
console.log(Point)
// CALCULATEUR 
let num1= 8
let num2= 2
let result
document.getElementById('num1').innerText=num1
document.getElementById('num2').innerText=num2
//add
 function addFunction (){
   result=num1+num2
   document.getElementById('result').innerText='le resultat de votre calcul est ' + result

 }
 //minus
 function minusFunction (){
    result=num1-num2
    document.getElementById('result').innerText='le resultat de votre calcul est ' + result

 }
 //mutiply
 function multiplyFunction (){
    result=num1*num2
    document.getElementById('result').innerText='le resultat de votre calcul est ' + result

 }
 //divide
 function divideFunction(){
    result=num1/num2
    document.getElementById('result').innerText='le resultat de votre calcul est ' + result

 }*/
 

 /*

 let buy = document.getElementById('Buy')
buy.innerHTML="<button onclick='buyer()'> buy </button>"

function buyer(){
buy.innerHTML+="<p> thank you <p>"
}




 //blackjack game 
    let player = {
        name : "Cheikh Khoudia : ",
        chips : 2000
    }
    let message3El =document.getElementById('msage3')
    let message2El =document.getElementById('msage2')
    let isAlive = false
    let hasAblackjack = false
    let cards=[]
    let message1El=document.getElementById('msage1')
    let playerEl = document.getElementById('player-el')

    
    sum = 0
    let message = ""
function startgame(){
    isAlive =true
    let fistCard = getRandomCard()
    let secondCard=getRandomCard()
    cards=[fistCard,secondCard]
    sum = fistCard+secondCard
 rendergame()
 playerEl.innerText= player.name+player.chips+" "+" fcfa"
}

 function rendergame(){
    

 if (sum===21){
    message='YOU WIN CAUSE YOU HAVE A BLACKJACK CARD '
    hasAblackjack=true
 }
 else if(sum<=20){
    message="DO YOU WANT A NEW CARD "
    //message1El.innerText=message

 }
 else{
    message='vous etes hors jeu '
    //message1El.innerText=message
    isAlive=false
 }
 message1El.innerText=message
 message3El.innerText="sum : "+sum
 message2El.innerText="Cards : "
 for(let i =0;i<cards.length;i++){
    message2El.textContent+=cards[i]+ " "

 }

}
function newCard(){
    if (isAlive===true && hasAblackjack===false){
    let newCard=getRandomCard()
    sum=sum+newCard
    cards.push(newCard)
    rendergame()
}
}
function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13)+1
    return randomNumber
    
}
 //logical operators  -----------------------------------------------------------------------------------------------------------
 let hasSolvedSolution= false
 let hasHIntsLeft= false
    if (hasSolvedSolution===false && hasHIntsLeft ===false){
        showTheSolution()
    }
 function showTheSolution(){
    document.write('showing the solution........... ')
 }

 let likeDocumentaries = true
 let likheStartups = false
    if (likeDocumentaries===true || likheStartups===true ){
        suggestion()
    }

 function suggestion (){
    document.write('hey check out this new movie we think you will like it ')
 }
 //random-----------------------------------------------------------------------------------------------------------
//let randomNumber= Math.random()*6
//document.write(randomNumber)


function rollDice(){
    let randomNumber = Math.floor(Math.random()*6)+1
    return randomNumber
    if (randomNumber===1){
        return 11
    }
    else if(randomNumber===11||randomNumber===12||randomNumber===13){
            return 10
        }
    else{
        return randomNumber
    }
    
}
console.log('hello comment allez vous ')
const recipient = 'khoudia leye '
const sender = 'Bill gates '
const email = `hey ${recipient}comment allez vous , cher ${sender} `
document.writeln(email)

 //for object -----------------------------------------------------------------------------------------------------------
let airbnb = {
    hotel : 'Marhabane ',
    disponible : true ,
    chambre : 20 ,
    sponsors : ["orange ", 'acis cabinet ', 'TQG']
    
}
document.write(airbnb.hotel)
document.write(airbnb.sponsors)

let person = {
    name : "Cheikh Khoudia Leye Diop ",
    age : 21,
    country : " senegal ",
    logData : function (){
        document.write(person.name+" is "+person.age+" old and live in "+person.country+"<br>" )
    }
}
person.logData()
 //for lops-----------------------------------------------------------------------------------------------------------
 
 let age = 15
 if (age <6){
    document.writeln("free")
 }
 else if (age <18){
    document.writeln("child discount ")

 }
 else if (age <= 26){
    document.writeln('student discount ')
 }
 else if (age <= 66){
    document.writeln('full price ')
 }
else if (age > 66){
    document.write('full price ')
}
else {
    document.write("l'age saisi n'est pas correct ")

}

let dayOfMonth = 13
let weekDay = 'Friday'
if (dayOfMonth===13 && weekDay=== 'Friday'){
    document.write('oh , a very honey day for muslims ')
}
else {
    document.write('normal day ')
}

 //ARRAY-----------------------------------------------------------------------------------------------------------
 let largeCountries = [ "tuvalu ", " india ", "usa ", "indonesia ", "monaco " ]
 largeCountries.pop()
 document.writeln(largeCountries)
 largeCountries.push("pakistan")
 document.writeln(largeCountries)
 largeCountries.shift()
 document.writeln(largeCountries)
 largeCountries.unshift('chine ')
 document.writeln(largeCountries)

 let hand = ["pierre ", "feuille ", "scisseau "]

 function getHand(){
    let randomIndex=Math.floor(Math.random()*3)+1
    document.writeln(hand[randomIndex])
 }
getHand( )
let aboutMe = [
    "experience ", "education ", 
    "family ", 
    "licence ", 
    "skills "
]
 let experience = [ "developpeur chez acis cabinet ", ]
 let education =["darra moderne ","tokorba ", "centre serigne mbacke bousso ", "ucad"]
 document.write(aboutMe[4])
 document.write(aboutMe[3])
 document.write(aboutMe[2])
 document.write(aboutMe[1])
 document.write(aboutMe[0])

 let Me = [
    "Cheikh koudia leye diop ",
    21,
    true
 ]

 let newEducation ="university of harvard "
 education.push(newEducation)
 document.write(education)
 education.pop()
 document.write(education)
 education.shift()
 document.write(education)*/
