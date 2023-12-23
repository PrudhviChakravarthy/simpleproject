function DisplayProps(props) {
    return <p>Received prop: {props.message}</p>;
}

function PropsExample() {
    return <DisplayProps message="This is a prop value" />;
}
