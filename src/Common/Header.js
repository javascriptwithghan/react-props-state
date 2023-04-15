import './Header.css';

function Header({name, age}) {
    
    // const {name, age} = props;
    // console.log(props);
    return (
        <>
          <div className="header">
            <h3>Header component </h3>
            <h4>{name}</h4>
            {/* <h5>{props.data.lname}</h5> */}
            <h6>{age}</h6>
          </div>
        </>
    )
}

export default Header;
