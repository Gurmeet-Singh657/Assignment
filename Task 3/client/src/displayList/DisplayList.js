import React, { useEffect, useState } from 'react'
import "./DisplayList.css";
import axios from "axios";

function DisplayList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function getPlayerList() {
      const response = await axios.get('https://players-g7ef.onrender.com/get/v1/get_player_average/');
      setList(response.data['data']);
    }
    getPlayerList();
  }, []);
  return (
    <div className='PlayerList'>
      <h1 className='header'>Player's Last 5 Matches Average</h1>
      <table className="my-table">
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Last 5 Matches Average Score</th>
          </tr>
        </thead>
        <tbody>
          {
            list && list?.map((row) => (
              <tr>
                <td>{row['PlayerName']}</td>
                <td>{row['AVGSCORE']}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default DisplayList