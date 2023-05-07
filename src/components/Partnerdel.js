import "./Partnerdel.css"

const DeliveryaPart = (props) => {

    const {show}  = props;
  return (
    <div className="center" >
      <h1 className="kh1">Please wait.... </h1>
      <h2 className="kh2">{!show?'we are assigning the rider...':'we are assigning dinesh rathod as your delivey partner'}</h2>
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
