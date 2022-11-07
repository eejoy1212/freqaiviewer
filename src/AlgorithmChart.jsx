import React from 'react';
import styles from "./Chart.module.css";
import Chart from "react-apexcharts";
export default function AlgorithmChart({menuOpen,setMenu}) {
    
   const state = {
          
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        options: {
          chart: {
            // id:'onezzang',//이거 주석 풀면 에러남
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Product Trends by Month',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          }
        },
      
      
      };
    
    

    return (
        <div className={menuOpen?styles.open:styles.AlgorithmChart}>
            <div className={styles.title}>
                <div className={styles.titleName}>
                Algorithm Chart
                </div>
                <div className={styles.chip}>30</div>

                </div>
            <div className={styles.chartArea}>
            <Chart
             options={state.options} 
             series={state.series} 
             type="line"
              width='100%'
              height='100%'
            />
            </div>
            



            
   
        </div>
    );
}
