import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EmployeesList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('https://dummy.restapiexample.com/api/v1/employees')
      .then((response) => {
        setList(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Employees List</h1>
      <table border="1px">
        <thead>
          <tr>
            <th>Name</th>
            <th>Salary</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.employee_name}</td>
              <td>{item.employee_salary}</td>
              <td>{item.employee_age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeesList;
