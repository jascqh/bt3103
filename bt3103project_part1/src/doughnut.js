import {Doughnut} from 'vue-chartjs'
export default{
    extends:Doughnut,
    data: () => ({
        chartdata: {
          labels: ['Like','Dislike'],
          datasets: [
            {
              label: 'Sales',
              data: ['62', '34'],
              backgroundColor:['#50C878','#708238'],
              borderWidth:0.5,
              borderColor:"#000"
            },
            
          ]
          
        },
        options: {
            title:{
                display:true,
                text:'Do Users Prefer Registering?',
                fontColor:'Black',
                fontSize:15

            },
            legend:{
                position:'bottom'
            },
            scales:{
                yAxes:[{
                    ticks:{
                        min:0
                    }

                }]
            },
            layout:{
              padding:{
                  left: 5,
                  right: 0,
                  top: 0,
                  bottom: 10
              }
            },
            maintainAspectRatio: false
          
        }
      }),
    mounted(){
        this.renderChart(this.chartdata,this.options)
    }
}
