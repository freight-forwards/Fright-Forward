import "./Partnerdel.css"

const DeliveryaPart = (props) => {

    const {show}  = props;
  return (
    <div className="center" >
      <h1 className="kh1">Please wait.... </h1>
      <h2 className="kh2">{!show?'we are assigning the rider...':'Delivery Boy Dinesh has accepted for delivery...'}</h2>
      <img
       className="king"
        src="https://media.tenor.com/C7KormPGIwQAAAAi/epic-loading.gif"
        alt="this slowpoke moves"
        width="250"
      />
    </div>
  );
}

export default DeliveryaPart;
