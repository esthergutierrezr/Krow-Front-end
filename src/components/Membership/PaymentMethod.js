import React from "react";

const PaymentMethod = () => {
    const [creditCard, setCreditCard] = React.useState({
        cardNumber: '',
        cardExpiry: '',
        cvv: ''
    });
    const handleChange = (e) => {
        const name = e.target.name;
        const value= e.target.value;
        setCreditCard({...creditCard, [name]: value})
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div>
        <div>Total Payable: </div>
      <form onSubmit={handleSubmit}>
        <label>
          Card Number
        <br/>
          <input type="text" name='cardNumber' value={creditCard.cardNumber} placeholder='1234 1234 1234 1234' onChange={handleChange}/>
        </label>
        <br/>
        <label>
          Card Expiry
        <br/>
          <input type="text" name='cardExpiry' value={creditCard.cardExpiry} placeholder='MM/YY' onChange={handleChange}/>
        </label>
        <br/>
        <label>
          CVV
        <br/>
          <input type="text" name='cvv' value={creditCard.cvv} placeholder='123' onChange={handleChange}/>
        </label>
        <br/>
        <label>
            Save Card
          <input type="checkbox" />
        </label>
        <br/>
        <input type="submit" value="Pay Now" />
      </form>
    </div>
  );
};

export default PaymentMethod;
