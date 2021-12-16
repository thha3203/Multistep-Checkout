

const CheckOut = (props) => {
  return (
    <button className="checkout" onClick={props.task}>Check Out</button>
  );
};

const Info = (props) => {
  return (
    <form className="infoForm">
      <h1 className="infoText">Account Creation</h1>
      <div className="username">
        <label htmlFor="username">Name</label>
        <input type="text" name="username" required></input>
      </div>
      <div className="password">
        <label htmlFor="pass">Password</label>
        <input type="password" name="pass" minLength="8" required></input>
      </div>
      <div className="email">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="@gmail.com"></input>
      </div>
      <div className="submit">
        <input type="submit" value="Create"></input>
      </div>
    </form>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 'checkout'
    };

    this.handleCheckOut = this.handleCheckOut.bind(this);
  }

  handleCheckOut(event) {
    this.setState( (curState) => {
      return {current: 'info'};
    });
  }

  render() {
    return (
      <div>
        {this.state.current === 'info' ?
        <Info /> :
        <CheckOut task={this.handleCheckOut} />
        }
      </div>
    );
  }
};

export default App;