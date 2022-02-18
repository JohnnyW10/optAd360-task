document.getElementById("BtnChart").addEventListener('click', getData)

function getData() {
  let allCompartment = [];
  let counterUnder29 = 0;
  let counterUnder39 = 0;
  let counterUnder49 = 0;
  let counterUnder59 = 0;
  let counterUnder69 = 0;
  let counterUnder79 = 0;
  let chartHolder = document.getElementById('myChart');

  fetch('https://randomuser.me/api/?results=1000&nat=FR')
    .then(res => res.json())
    .then(data => {
       data.results.forEach(person => {
        if(person.dob.age >= 20 && person.dob.age <=29){
          counterUnder29++;
        } else if(person.dob.age >= 30 && person.dob.age <= 39) {
          counterUnder39++;
        } else if(person.dob.age >= 40 && person.dob.age <= 49) {
          counterUnder49++;
        } else if(person.dob.age >= 50 && person.dob.age <= 59) {
          counterUnder59++;
        } else if(person.dob.age >= 60 && person.dob.age <= 69) {
          counterUnder69++;
        } else if(person.dob.age >= 70 && person.dob.age <= 80) {
          counterUnder79++;
        }
      });
      allCompartment.push(counterUnder29, counterUnder39, counterUnder49, counterUnder59, counterUnder69, counterUnder79)
      chartHolder.style.backgroundColor = "white"
      chartt(allCompartment)
    })
    
}

function chartt(dataCompartment) {
  let myChart = document.getElementById('myChart').getContext('2d');

  let massPopChart = new Chart(myChart, {
    type: 'bar',
    data: {
      labels: ['Compartment [20-29]', 'Compartment [30-39]', 'Compartment [40-49]', 'Compartment [50-59]', 'Compartment [60-69]', 'Compartment [70-79]'],
      datasets: [{
        label: 'French population',
        data: dataCompartment
      }
      ]
    },
  })
}

