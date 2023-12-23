function RenderList() {
    const items = ["Item 1", "Item 2", "Item 3"];
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}
