import React, {useContext, useEffect, useState} from "react";
import axios from "axios";




// 
export default function Converter() {

  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null)

  // const convertCurrency = () => {
  //   axios
  //     .get ('http://data.fixer.io/api/latest ? access_key = 03b7f86d0eca5005de6c7bc3fb72b32d')
  //     .then((response) => {
  //       const resultText = response.data
  //         .split('<span className=bld>')[1]
  //         .split('</span>')[0];
  //       setResult(resultText);

  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       setResult('Error');
  //     });
  // };
  // const convertCurrency =  () => {
  //   console.log("effect ran")
  //   fetch ('http://data.fixer.io/api/latest ? access_key = 03b7f86d0eca5005de6c7bc3fb72b32d')
  //   .then(res => res.json())
  //   .then (data =>setResult(data))

  //   .catch((error) => {
  //     // Handle errors
  //     console.error(error);
  //     setResult ('Error')
  //   });
  // }

  // useEffect (()=> {
  //   convertCurrency();
  // }, []);

  const handleListItemClick = () => {
 const options = {
      method: 'GET',
      url: 'https://exchangerate-api.p.rapidapi.com/rapid/latest/USD',
      headers: {
        'X-RapidAPI-Key': 'c0d2e70417msh3bde3b7dbe9e25ap12748ejsncd1fe394742c',
        'X-RapidAPI-Host': 'exchangerate-api.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
      {JSON.stringify(response.data)}
    }).catch(function (error) {
      console.error(error);
      
    });
}
  

    return (
      <div className="converter">
        
        <div className="container-converter">
          
          <div className="row">
            <label for="exampleDataList" className="form-label">
              Datalist example
            </label>
            <input
              className="form-control"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Type to search..."
            />
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {/* Add currency options */}
              <option value='USD'>US dollars</option>
            </select>
          </div>
          <div className="row">
            <p className="neutral"> TO</p>
          </div>
          <div className="row">
            <label for="exampleDataList" className="form-label">
              Datalist example
            </label>
            <input
              className="form-control"
              type="number"
              value={amount}
              placeholder="Type to search..."
            />
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {/* Add currency options */}
            
              <option value='EUR'>Euros</option>
            </select>
          </div>
        </div>
        <div class="d-grid gap-2">
          <button onClick={handleListItemClick}  className="btn btn-dark" type="button">
            Convert
          </button>
        </div>
        {result && <p>Result: {result}</p>}
          </div>
    );
}

