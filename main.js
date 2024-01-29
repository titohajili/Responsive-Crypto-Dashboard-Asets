const chart = document.querySelector('#chart').getContext('2d');

//crate a new chart instance

new Chart(chart,{
    type:'line',
    data:{
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov',],

        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537,49631,59095,57828,36684,33572,39974,48847,48116,61004],
                borderColor: 'red',
                borderWidth: 2
            },

            {
                label: 'ETH',
                data: [31500, 41000,88048,26000,32668,45875,45697,56218,44552,26314,42175],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    options:{
        responsive: true
    }
})