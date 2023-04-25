import React, { useEffect, useState } from 'react'
import "./DisplayList.css"
import axios from "axios"

function DisplayList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    async function getPlayerList() {
      const response = await axios.get('https://players-g7ef.onrender.com/get/v1/get_player_details');
      setList(response.data['data']);
      console.log(list)
    }
    getPlayerList();
  }, []);
  return (
    <div className='PlayerList'>
      <p>Syncing Data Every 1 Minute from Excel to SQL Database & Displaying on frontend</p>
      <br></br>
      <p>Syncing Data is not possible on Render Backend, it requires paid version, but on local server if you run, it will schedule job every 1 minute properly</p>
      <h1 className='header'>Player's List</h1>
      <table className="my-table">
        <thead>
          <tr>
            <th>Player Name</th>
            <th>id</th>
            <th>Match 1</th>
            <th>Match 2</th>
            <th>Match 3</th>
            <th>Match 4</th>
            <th>Match 5</th>
            <th>Match 6</th>
            <th>Match 7</th>
            <th>Match 8</th>
            <th>Match 9</th>
            <th>Data Synced On</th>
          </tr>
        </thead>
        <tbody>
          {
            list && list?.map((row)=>(
              <tr>
                  <td>{row['PlayerName']}</td>
                  <td>{row['id']}</td>
                  <td>{row['Match1']}</td>
                  <td>{row['Match2']}</td>
                  <td>{row['Match3']}</td>
                  <td>{row['Match4']}</td>
                  <td>{row['Match5']}</td>
                  <td>{row['Match6']}</td>
                  <td>{row['Match7']}</td>
                  <td>{row['Match8']}</td>
                  <td>{row['Match9']}</td>
                  <td>{row['timestamp']}</td>
                </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default DisplayList