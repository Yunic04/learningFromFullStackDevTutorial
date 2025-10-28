const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
let myLeads = leadsFromLocalStorage ? leadsFromLocalStorage : []

renderLeads(myLeads)

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLead(inputEl.value)
    inputEl.value = ""
})

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLead(tabs[0].url)
    })
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    ulEl.innerHTML = ''
})

function renderLead(lead){
    ulEl.innerHTML += `<li> <a href="${lead}" target="_blank"> ${lead}</a> </li>`
}

function renderLeads(leads) {
    let listItems = ""
    for (let i = 0; i<leads.length; i++){
        listItems += `<li> <a href="${leads[i]}" target="_blank"> ${leads[i]}</a> </li>`
    }
    ulEl.innerHTML = listItems
}