import React from "react";
import {Bar} from "react-chartjs-2";
import './chart.css';

const Chart = ({numberOfGoogle, numberOfFacebook, numberOfGitHub}) => {
    return (
        <div>
            <Bar
                data = {{
                    labels: ['Facebook', 'Google', 'GitHub'],
                    borderWidth: 1,
                    datasets: [
                        {
                            label: 'Number of users',
                            data: [numberOfFacebook, numberOfGoogle, numberOfGitHub],
                            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                        }
                    ],

                }}
                height={200}
                width={300}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    )
}

export default Chart;
