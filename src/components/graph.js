import React from "react";
import { Line } from "react-chartjs-2";

function Graph({data,ideal,mean,median}) {
   const labels=Object.keys(data);
   labels.shift();
   const cData=Object.values(data);
   cData.shift();
   const iData=Object.values(ideal);
   iData.shift();
   const mData=Object.values(mean);
   const MData=Object.values(median);

    const chartData={
        labels: labels,
        datasets: [
            {
              label: 'your result',
              data: cData,
              borderColor: "orange",
              backgroundColor:'orange',
              tension:0.1,
            },
            {
              label:'Ideal',
              data:iData,
              borderColor:'yellow',
              backgroundColor:'yellow',
              tension:0.1,
            },
            {
                label:'Mean',
                data:mData,
                borderColor:'green',
                backgroundColor:'green',
                tension:0.1,
            },
            {
                label:'Median',
                data:MData,
                borderColor:'blue',
                backgroundColor:'blue',
                tension:0.1,
            }
        ],
    }

    return(
        <div className="graph" style={{height:"500px",width:"1000px"}}>
            <Line 
                data={chartData}
                options={{
                    responsive:true,
                    maintainAspectRatio:false,
                    plugins: {
                        title: {
                        display: true,
                        text: "Psychometric test result"
                        },
                        legend: {
                        display: true,
                        position: "top" 
                        }
                    },
                    scales:{
                        y:{
                            max:5,
                            min:0,
                        },
                        ticks:{
                            beginAtZero:true,
                            stepSize:0.5,
                        }
                    }
                }}
            />
        </div>
    )
}

export default Graph;