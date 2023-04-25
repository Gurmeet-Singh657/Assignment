import React, { useEffect, useState } from 'react'
import "./DisplayList.css"

function DisplayList() {
  const [list, setList] = useState([]);
  async function getPlayerList() {
    const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/1KsjUgH8XtOzNmTvlwHs78B0TV-VBrcUWgx_uQdSTPx0/values/Sheet1?key=AIzaSyARf7Xk9E_Pp6zwdD1kJu5x_mC3HAxGPgE');
    const data = await response.json();
    setList(data.values);
  }
  useEffect(() => {
    getPlayerList();
  }, []);
  return (
    <div className='PlayerList'>
      <h1 className='header'>Player List</h1>
      <table className="my-table">
        <thead>
          <tr>
            {list.length > 0 && list[0].map((row, index) => (
              <th key={index}>{row}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            list.length>0 && list?.map((row,index)=>(
                <tr>
                {list.length > 0 && index!==0 && list[index].map((row, index) => (
                  <td key={index}>{row}</td>
                ))}
                </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default DisplayList