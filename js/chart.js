
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Html', 'Css', 'Bootstrap', 'Javascript', 'Angularjs', 'Reactjs'],
        datasets: [{
            label: 'Level skill',
            data: [75, 60, 70, 50, 30, 40],
            backgroundColor: [
                '#E54C21',
                '#264DE4',
                '#60408C',
                '#D6BA32',
                '#DD0031', 
                '#639BFF',
                'opacity: 0.3'
            ],
            borderColor: [
                '#E54C21',
                '#264DE4',
                '#60408C',
                '#D6BA32',
                '#DD0031',
                '#639BFF',
            ],
            borderWidth: 1
        }]
        
    },
    options: { 
        legend: {
            labels: {
                fontColor: "#dfe6e9"
                
            },
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "#dfe6e9",
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "#dfe6e9",
                    fontSize: 15,
                    beginAtZero: true
                }
            }]
        }
    }
});

/*
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = new google.visualization.arrayToDataTable([
        ['Element', 'Level Skill', { role: 'style' }],
         ['Html', 76, 'color:#E54C21; opacity: 0.7; stroke-color:#E54C21'],            // RGB value
         ['Css', 55, 'color:#264DE4 ; opacity: 0.7; stroke-color:#264DE4'],            // English color name
         ['Bootstrap', 65, 'color:#60408C; opacity: 0.7; stroke-color:#60408C'],
         ['Javascript', 55, 'color:#D6BA32; opacity: 0.7; stroke-color:#D6BA32' ],
         ['Angularjs', 30, 'color:#DD0031; opacity: 0.7; stroke-color:#DD0031'],
         ['Reactjs', 45, 'color:#639BFF; opacity: 0.7; stroke-color:#639BFF']   

      ]);
      

      var options = {
        title: 'Motivation Level Throughout the Day',
        backgroundColor: '#273C75',
        is3D: true,
        titleTextStyle:{
            color:'#dfe6e9'
        },
        hAxis: {
            title: 'Technology',
            textStyle:{
              color:'#dfe6e9'
            },
            titleTextStyle:{
                color:'#dfe6e9'
            }
        },
        vAxis: {
          title: 'Rating (scale of 1-10)',
          textStyle:{
            color:'#dfe6e9'
            },
        titleTextStyle:{
            color:'#dfe6e9'
          }
        }, 
        legend: {
            textStyle: {
                color:'#dfe6e9'
            },
        }
      };

      var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

      chart.draw(data, options);
    }*/