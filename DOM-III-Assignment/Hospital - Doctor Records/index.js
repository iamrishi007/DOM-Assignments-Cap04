// fill in javascript code here

let name = document.getElementById('name')
let email = document.getElementById('email')
let docID = document.getElementById('docID')
let dept = document.getElementById('dept')
let exp = document.getElementById('exp')
let mbl = document.getElementById('mbl')
let form = document.querySelector('form')
let tbody = document.querySelector('tbody')

let arr = []

form.addEventListener('submit', function (e) {
          e.preventDefault()
          let obj = {}
          obj.name = name.value
          obj.docID = docID.value
          obj.dept = dept.value
          obj.exp = exp.value
          obj.mbl = mbl.value
          tbody.innerText = ""
          arr.push(obj)

          arr.forEach(elm => {

                    let row = document.createElement('tr')
                    let td1 = document.createElement('td')
                    let td2 = document.createElement('td')
                    let td3 = document.createElement('td')
                    let td4 = document.createElement('td')
                    let td5 = document.createElement('td')
                    let td6 = document.createElement('td')
                    let td7 = document.createElement('td')

                    td1.innerText = elm.name
                    td2.innerText = elm.email
                    td3.innerText = elm.docID
                    td4.innerText = elm.dept
                    td5.innerText = elm.exp
                    td6.innerText = elm.mbl

                    row.append(td1, td2, td3, td4, td5, td6)
                    tbody.append(row)

                    if (Number(elm.exp) > 5) {
                              td7.innerText = "Senior"
                    }
                    else if (Number(elm.exp) >= 2 && Number(elm.exp) <= 5) {
                              td7.innerText = "Junior"
                    }
                    else {
                              td7.innerText = "Trainee"
                    }

                    let delBtn = document.createElement("td")
                    delBtn.textContent = "Delete"
                    delBtn.style.backgroundColor = "red"

                    td8.addEventListener('click', function () {
                              row.textContent = " "
                    })

                    row.append(td1, td2, td3, td4, td5, td6, td7, delBtn);
                    tbody.append(row)


          })



})