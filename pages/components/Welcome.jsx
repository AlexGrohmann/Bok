function Welcome(props) {
    const {onClick} = props;
    return ( <div>
        <h1>
            Willkommen
        </h1>
        <button onClick={onClick}>
            Start
        </button>
    </div> );
}

export default Welcome;