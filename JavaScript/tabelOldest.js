async function loadingToTableHeader() {
  let url = "http://localhost:3000/headers"
  let tableHead =  document.getElementById('theadOld');
  const response = await fetch(url)
  const data = await response.json()
  let Content = "" 

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
