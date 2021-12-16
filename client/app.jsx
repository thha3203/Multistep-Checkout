
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
    <div className="CVV">
      <label htmlFor="CVV">CVV </label>
      <input type="text" name="CVV" placeholder="3 digits on back" required></input>
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
      current: 'checkout'
    };

    this.handleBilling = this.handleBilling.bind(this);
    this.handleCheckOut = this.handleCheckOut.bind(this);
    this.handleShipping = this.handleShipping.bind(this);
    this.handleAccountCreation = this.handleAccountCreation.bind(this);
  }

  handleCheckOut(event) {
    this.setState( (curState) => {
      return {current: 'info'};
    });
  }

  handleAccountCreation(event) {
    event.preventDefault();
    let info = {
      username: event.target.username.value,
      pass: event.target.pass.value,
      email: event.target.email.value
    }
    axios.post('/', info);
    // this.setState( (curState) => {
    //   return {current: 'shipping'};
    // });
  };

  handleShipping(event) {
    event.preventDefault();
    this.setState( (curState) => {
      return {current: 'billing'};
    });
  }

  handleBilling(event) {
    event.preventDefault();
    console.log('purchase');
  }

  render() {
    return (
      <div>
        {this.state.current === 'info' ?
        <Info task={this.handleAccountCreation} /> :
        this.state.current === 'shipping' ?
        <ShippingInfo task={this.handleShipping} /> :
        this.state.current === 'billing' ?
        <BillingInfo task={this.handleBilling} /> :
        <CheckOut task={this.handleCheckOut} />
        }
      </div>
    );
  }
};

export default App;