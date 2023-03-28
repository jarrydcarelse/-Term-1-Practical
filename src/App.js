import './App.css';
import BarChart from './Components/ChartOne';
import LineChart from './Components/ChartTwo';
import PieChart from './Components/ChartThree';
import RadarChart from './Components/ChartFour';
import BubbleChart from './Components/ChartFive';
import { useState } from 'react';
import { UserData } from './Data';

function App() {
  const [users, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [{
      label: 'users gained',
      data: UserData.map((data) => data.userGain),
      tension: 0.5,
      backgroundColor: ['red', 'orange', 'darkblue', 'green', 'purple']

    }]
  })
  return (
    <div className="App">
      <div style={{ width: 400 }}>Bar Chart
        <BarChart chartData={users} />
      </div>
      <div style={{ width: 700 }}>Line Chart
        <LineChart chartData={users} />
      </div>
      <div style={{ width: 400 }}>Pie Chart
        <PieChart chartData={users} />
      </div>
      <div style={{ width: 400 }}>Radar Chart
        <RadarChart chartData={users} />
      </div>
      <div style={{ width: 700 }}>Bubble Chart
        <BubbleChart chartData={users} />
      </div>
    </div>
  );
}

export default App;
