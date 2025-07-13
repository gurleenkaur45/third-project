const Address = ( {city,country}) => {
    if (country === "nepal") {
        return (
            <div>
                {/* <h1>Address Detail.</h1> */}
                <p>My address is {city} and my country is {country}. </p>
            </div>
        );
    }
    return (
        <div>
            <p>Condition not satisfied but my city is {city} and my country is {country}.</p>
        </div>

    )
};


export default Address;

// conditional rendering if statement above example
// h/w ternary use and && use in this address. 