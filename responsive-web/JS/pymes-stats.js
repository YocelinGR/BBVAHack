let ctx = document.getElementById("myChart").getContext('2d');
let myPieChart = new Chart(ctx,{
    type: 'pie',
    data: {
        labels: ["Crédito", "Débito", "Paypal"],
        datasets: [{
            label: 'Ventas',
            data: [12, 19, 3],
            backgroundColor: [
                'rgba(0, 158, 229, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(202, 208, 210, 1)', 
            ],
            borderColor: [
                'rgba(0, 158, 229, 1)',
                'rgba(255, 255, 255, 1)',
                'rgba(202, 208, 210, 1)',
            ],
            borderWidth: 1
        }],
},
options: {
    legend: {
        labels: {
            fontColor: 'white'
        }
    }
}
}); 

