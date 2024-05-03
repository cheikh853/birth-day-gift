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


let students =[
    { name : "modou", city: "dakar" },
    { name : "cheikh", city: "touba" }

]
for (const student of students){
    document.write(student.name + ' lives in ' + student.city )
}
document.write("yeeeeeeeeeeeeeeeeeeeeeeeeeees")
alert('heloo')