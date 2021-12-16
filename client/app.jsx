
const CheckOut = (props) => {
  return (
    <button className="checkout" onClick={props.task}>Check Out</button>
  );
};

const Info = (props) => {
  return (
    <form className="infoForm" onSubmit={props.task}>
      <h1 className="infoText">Account Creation</h1>
      <div className="username">
        <label htmlFor="username">Name </label>
        <input type="text" name="username" required></input>
      </div>
      <div className="password">
        <label htmlFor="pass">Password </label>
        <input type="password" name="pass" minLength="8" required></input>
      </div>
      <div className="email">
        <label htmlFor="email">Email </label>
        <input type="email" name="email" placeholder="@gmail.com"></input>
      </div>
      <div className="submit">
        <input type="submit" value="Next"></input>
      </div>
    </form>
  );
};

const ShippingInfo = (props) => {
  return (
    <form className="shippingForm" onSubmit={props.task}>
      <h1 className="shippingText">Shipping Address</h1>
      <div className="address1">
        <label htmlFor="address1">Address 1 </label>
        <input type="text" name="address1" required></input>
      </div>
      <div className="address2">
        <label htmlFor="address2">Address 2 </label>
        <input type="text" name="address2"></input>
      </div>
      <div className="city">
        <label htmlFor="city">City </label>
        <input type="text" name="city" required></input>
      </div>
      <div className="state">
        <label htmlFor="state">State </label>
        <input type="text" name="state" required></input>
      </div>
      <div className="zip">
        <label htmlFor="zip">Zip Code </label>
        <input type="text" name="zip" required></input>
      </div>
      <div className="submit">
        <input type="submit" value="Next"></input>
      </div>
    </form>
  );
};

const BillingInfo = (props) => {
  return (
    <form className="billingForm" onSubmit={props.task}>
    <h1 className="billingText">Billing Information</h1>
    <div className="cardNumber">
      <label htmlFor="cardNumber">Credit Card # </label>
      <input type="text" name="cardNumber" required></input>
    </div>
    <div className="expDate">
      <label htmlFor="expDate">Expiry Date </label>
      <input type="text" name="expDate" placeholder="month/year" required></input>
    </div>
    <div className="cvv">
      <label htmlFor="cvv">CVV </label>
      <input type="text" name="cvv" placeholder="3 digits on back" required></input>
    </div>
    <div className="billingZip">
      <label htmlFor="billingZip">Zip Code </label>
      <input type="text" name="billingZip" required></input>
    </div>
    <div className="submit">
      <input type="submit" value="Purchase"></input>
    </div>
  </form>
  )
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'checkout',
      currentUser: 0
    };

    this.handleBilling = this.handleBilling.bind(this);
    this.handleCheckOut = this.handleCheckOut.bind(this);
    this.handleShipping = this.handleShipping.bind(this);
    this.handleAccountCreation = this.handleAccountCreation.bind(this);
  }

  handleCheckOut(event) {
    this.setState( (curState) => {
      return {currentPage: 'info'};
    });
  }

  handleAccountCreation(event) {
    event.preventDefault();
    let user = {
      username: event.target.username.value,
      pass: event.target.pass.value,
      email: event.target.email.value
    };
    axios.post('/users', user)
      .then( (result) => {
        return this.setState( (curState) => {
          return {currentPage: 'shipping', currentUser: result.data.insertId};
        });
      })
      .catch( (error) => {
        console.error('USER ERROR', error);
      });
  };

  handleShipping(event) {
    event.preventDefault();
    let shipInfo = {
      address1: event.target.address1.value,
      address2: event.target.address2.value,
      city: event.target.city.value,
      state: event.target.state.value,
      zip: parseInt(event.target.zip.value),
      user_id: this.state.currentUser
    };
    axios.post('/shipping', shipInfo)
      .then( (result) => {
        return this.setState( (curState) => {
          return {currentPage: 'billing'};
        });
      })
      .catch( (error) => {
        console.error('SHIPPING ERROR', error)
      });
  }

  handleBilling(event) {
    event.preventDefault();
    let cardInfo = {
      cardNumber: parseInt(event.target.cardNumber.value),
      expDate: event.target.expDate.value,
      cvv: parseInt(event.target.cvv.value),
      zip: parseInt(event.target.billingZip.value),
      user_id: this.state.currentUser
    };
    axios.post('/billing', cardInfo)
      .then( (result) => {
        return this.setState( (curState) => {
          return {currentPage: 'checkout', currentUser: 0};
        });
      })
      .catch( (error) => {
        console.error('BILLING ERROR', error);
      });
  }

  render() {
    return (
      <div>
        {this.state.currentPage === 'info' ?
        <Info task={this.handleAccountCreation} /> :
        this.state.currentPage === 'shipping' ?
        <ShippingInfo task={this.handleShipping} /> :
        this.state.currentPage === 'billing' ?
        <BillingInfo task={this.handleBilling} /> :
        <CheckOut task={this.handleCheckOut} />
        }
      </div>
    );
  }
};

export default App;