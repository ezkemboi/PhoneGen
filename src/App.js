import React from 'react';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numbersGenerated: [1, 2, 3],
      generatedPhoneNumber: '',
      amount: 0
    }
  }

  componentDidMount() {
    // Fetch stored phone numbers from local storage

  }

  // handleChange = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     amount: amount
  //   })
  // }

  // Generate new phone number function
  generateNewPhoneNumber = () => {
    // Generate 9 random numbers
    const { numbersGenerated, amount } = this.state;
    // for(i = 0; i <= amount; i++) {
    //   const number = `0${Math.floor(Math.random() * 1000000000)}`;
    // }
    let number;
    number = `0${Math.floor(Math.random() * 1000000000)}`;
    // Check whether the number already exist
    if (!numbersGenerated.includes(number)) {
      numbersGenerated.push(number);
      // Set the current generated numbers(Add 0 at the beginning)
      this.setState({
        generatedPhoneNumber: number
      });
    }
  }

  render() {
    const { generatedPhoneNumber, amount } = this.state;
    return (
      <div className="App">
        <h3>New Generator APP</h3>
        <p>
          Welcome to new phone number generator app.
          Genrate and store your phone numbers for retrival
        </p>
        <div>
          <form >
            <input name="phonenumber" name={amount} />
            <button id="generate-numbers" onClick={() => this.generateNewPhoneNumber()}>Generate</button>
          </form>
        </div>
        <p>Current Phone Number: <b>{generatedPhoneNumber}</b></p>
        <h3>Check New Phone Number</h3>
        <div className="Download-pdf-file">
          <button>Download As PDF</button>
        </div>
        <div className="Phone-Number-table">
          <table>
            <thead>
              <tr>
                <th>Phone Numbers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>07893637838</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App;
