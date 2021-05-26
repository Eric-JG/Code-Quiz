// var dummyScores = [
//     {
//         name: "Player 1",
//         score: 3    
//     },
//     {
//         name: "Player 2",
//         score: 1  
//     },
//     {
//         name: "Player 3",
//         score: 5   
//     }
// ]

var localStorageData = JSON.parse(localStorage.getItem("scores")) || []

// console.log(dummyScores[1].name)

for (let index = 0; index < localStorageData.length; index++) {
    var myTableEl = document.querySelector("#table")

    var tableRowEl = document.createElement("tr")
    var tableDataEl1 = document.createElement("td")
    var tableDataEl2 = document.createElement("td")

    tableDataEl1.textContent = localStorageData[index].name
    tableDataEl2.textContent = localStorageData[index].score

    tableRowEl.appendChild(tableDataEl1)
    tableRowEl.appendChild(tableDataEl2)
    myTableEl.appendChild(tableRowEl)
}