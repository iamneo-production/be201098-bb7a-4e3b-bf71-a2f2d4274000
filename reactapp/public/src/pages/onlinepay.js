import React from 'react';
import '../styles/bill.css'; 
import SideBar from './sidebar';

function OnlinePayments() {
  return (
    <div className="billwithside">
    <SideBar/>
    
      <div className="bill-payments">
      <br></br>
        <h2>Online Payments</h2>
        <form>
        <div className="form-group">
            <label htmlFor="sid">Your Account_id:</label>
            <input type="number" id="sid" name="sid" />
          </div>
        <div className="form-group">
          <label htmlFor="rid">Receiver Account_id:</label>
          <input type="number" id="rid" name="rid" />
        </div>
          <div className="form-group">
            <label htmlFor="desc">Description:</label>
            <input type="text" id="desc" name="desc" />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input type="number" id="amount" name="amount" />
          </div>
          <div className="form-group">
            <label htmlFor="dueDate">Date:</label>
            <input type="date" id="dueDate" name="dueDate" />
          </div>
          <button className={'billbutton'} type="submit">Pay</button>
        </form>
      </div>
      </div>
    );
  }
  
  export default OnlinePayments;