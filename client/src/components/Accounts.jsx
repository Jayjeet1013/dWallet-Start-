import "./Main.css";

function Accounts({web3,setAddress}) {
  async function allAccounts(){
    const select=domain.querySelector("#selectNumber")
    const options=await web3.eth.getAccounts();
    for(let i=0;i<options.length;i++){
      
    }
  }
  return (
    <>
      <form className="label1" id="myForm">
        <label htmlFor="selectNumber">Select an account</label>
        <select className="innerBox" id="selectNumber">
          <option></option>
        </select>
      </form>
      <span className="conAc">Connected Account: None</span>
      <br></br>
      <span className="acBal">Account Balance:0 ether</span>
      <br></br>
      <span className="provider">Provider : None</span>
    </>
  );
}

export default Accounts;
