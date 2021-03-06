import {Bar} from 'vue-chartjs'
export default{
    extends:Bar,
    data: () => ({
        chartdata: {
            labels: ['Family', 'Friends', 'Advertisements', 'Social Media'],
            datasets: [
                {
                    label: 'Various Ways',
                    data: [4, 28, 12, 9],
                    backgroundColor:['#C7EA46','#29AB87','#D0F0C0', '#8A9A5B'],
                    borderWidth:0.5,
                    borderColor:"#000",
                    fill:true
                },
            ]
        },
        options: {
            title:{
                display:true,
                text:'How Users Discovered TextCruncher',
                fontColor:'Black',
                fontSize:15

            },
            legend:{
                position:'bottom'
            },
            layout:{
                padding:{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0
                }
            },
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            },
            maintainAspectRatio: false
        }
      }),
    mounted(){
        this.renderChart(this.chartdata,this.options)
    }
}
