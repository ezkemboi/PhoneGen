import React from 'react';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numbersGenerated: [],
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
    let number;
    const { numbersGenerated, amount } = this.state;
    for (let i = 0; i <= amount; i++) {
      number = `0${Math.floor(Math.random() * 1000000000)}`;
      // Check already created numbers
      if (!numbersGenerated.includes(number)) {
        numbersGenerated.push(number);
        // Set the current generated numbers(Add 0 at the beginning)
        this.setState({
          generatedPhoneNumber: number
        });
      }
    }
  }

  render() {
    const { generatedPhoneNumber, amount } = this.state;
    return (
      <div>
        <h3 id="app-title">PhoneGen - Phone Generator App</h3>
        <div className="App">
          <div className="App__left">
            <h3>PhoneGen</h3>
            <p id="app-description">
              Welcome to new phone number generator app.
              Generate and store your phone numbers for retrival
            </p>
            <input name="phone" placeholder="Generate 1 to 10000" />
            <button
              id="generate-numbers"
              onClick={() => this.generateNewPhoneNumber()}
            >
              Generate
            </button>
          </div>
          <div className="App__right">
            <div className="download-pdf-file">
              <button>Download As Pdf</button>
            </div>
            <div className="headers-for-phones">
              <div className="headers-for-phones__index">
                <h3>Index</h3>
              </div>
              <div className="headers-for-phones__number">
                <h3>Phone Number</h3>
              </div>
            </div>
            <div className="phone-list-table">
              <div className="phone-list-table__left">
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </div>
              <div className="phone-list-table__right">
                <p>072509354</p>
                <p>072509354</p>
                <p>072509354</p>
                <p>072509354</p>
                <p>072509354</p>
                <p>072509354</p>
                <p>072509354</p>
                <p>072509354</p>
                <p>072509354</p>
                <p>072509354</p>
                <p>072509354</p>
                <p>072509354</p>
                <p>072509354</p>
                <p>072509354</p>
                <p>072509354</p>
                <p>072509354</p>
                <p>072509354</p>
                <p>072509354</p>
                <p>072509354</p>
                <p>072509354</p>
                <p>072509354</p>
                <p>072509354</p>
                <p>072509354</p>
                <p>072509354</p>
              </div>
              {/* <table>
                <thead>
                  <tr>
                    <td>Index</td>
                    <td>Phone Numbers</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>{generatedPhoneNumber}</td>
                  </tr>
                </tbody>
              </table> */}
            </div>

            {/* <div className="Download-pdf-file">
            <button>Download As PDF</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Index</th>
                <th>Phone Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>{generatedPhoneNumber}</td>
              </tr>
            </tbody>
          </table> */}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
