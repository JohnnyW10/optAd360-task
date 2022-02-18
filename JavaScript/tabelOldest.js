async function loadingToTableHeader() {
  let url = "http://localhost:3000/headers"
  let tableHead =  document.getElementById('theadOld');
  let tabelHolder = document.getElementById('tabelHolder');

  const response = await fetch(url)
  const data = await response.json()
  let Content = "" 
  tabelHolder.remove()
  data.forEach(element => { 
    Content += `<th>${element}</th>`
  });
  tableHead.innerHTML = Content;
  loadingToTableBody("http://localhost:3000/rows")
}

async function loadingToTableBody(url) {
  let tableBody = document.getElementById('tbodyOld')
  const response = await fetch(url)
  const data = await response.json()
  let Content = ""

  data.forEach(element => {
    Content += "<tr>" 
    element.forEach(elem => {
      Content += `<td>${elem}</td>`
    })
    Content += "</tr>"
  });
  tableBody.innerHTML = Content;
}

document.getElementById("BtnChart").addEventListener('click', loadingToTableHeader)

function loading() {
  let loader = document.getElementById('tabelHolder').innerHTML = `<img width="200px" height="200px" id="loader" src="loader.gif"/>`
}

document.getElementById("BtnChart").addEventListener('click', loading)
