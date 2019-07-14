import React from 'react';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numbersGenerated: [],
      amount: 0
    }
  }

  componentDidMount() {
    // Fetch stored phone numbers from local storage
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts && contacts.length >= 1) {
      this.setState({
        numbersGenerated: contacts
      });
    }
  }

  handleChange = (value) => {
    this.setState({
      amount: value
    })
  }

  // generatePdf = () => {
  //   console.log('I am clicked')
  //   const docItems = document.getElementsByName('contacts-table-list')
  //   window.onbeforeprint = (event) => {
  //     console.log('------>>>>>', event)
  //     document.write(docItems);
  //     document.close();
  //   }
  //   window.print()
  // }

  // Generate new phone number function
  generateNewPhoneNumber = () => {
    // Generate 9 random numbers
    let number;
    const { numbersGenerated, amount } = this.state;
    for (let i = 0; i < amount; i++) {
      number = `0${Math.floor(Math.random() * 1000000000)}`;
      // Check already created numbers and its length (MAX = 10,000)
      if (!numbersGenerated.includes(number) && numbersGenerated.length <= 10000) {
        numbersGenerated.push(number);
      }
    }
    // Add generated numbers to state and save local storage
    localStorage.setItem("contacts", JSON.stringify(numbersGenerated));
    this.setState({
      numbersGenerated
    });
  }

  render() {
    const { amount, numbersGenerated } = this.state;
    let phoneNumbers;
    let disabledButton;
    // Edge cases for catching when to disable button
    const itemsInLocalStorage = localStorage.getItem("contacts");
    if (amount < 1 || amount >= 10000 || (itemsInLocalStorage && itemsInLocalStorage.length >= 10000)) {
      disabledButton = "disabled"
    }
    if (numbersGenerated && numbersGenerated.length >= 1) {
      phoneNumbers = numbersGenerated.map((number, index) => {
        return (
          <div className="phone-list-table" key={index}>
            <div className="phone-list-table__left">
              <p>{index + 1}</p>
            </div>
            <div className="phone-list-table__right">
              <p>{number}</p>
            </div>
          </div>
        )
      });
    }

    return (
      <div>
        <h3 id="app-title">PhoneGen - Phone Generator App</h3>
        <div className="App">
          <div className="App__left">
            <h3>PhoneGen</h3>
            <p id="app-description">
              Welcome to new phone number generator app.
              Generate and store upto 10,000 phone numbers.
            </p>
            <input
              type="number"
              value={amount}
              onChange={e => this.handleChange(e.target.value)}
              name="phone"
            />
            <button
              id="generate-numbers"
              onClick={() => this.generateNewPhoneNumber()}
              disabled={disabledButton}
            >
              Generate
            </button>
          </div>
          <div className="App__right">
            <div className="download-pdf-file">
              {/* <button onClick={this.generatePdf}>Download As Pdf</button> */}
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
            <div className="contacts-table-list">
              {phoneNumbers ? phoneNumbers : <div>No contacts. Please generate contacts.</div>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
