function ClickEventHandler() {
    const handleClick = () => {
        alert("Button clicked!");
    };
    return <button onClick={handleClick}>Click Me</button>;
}
