let React = {
    createElement: (tag, props, ...children) => {
        var element = {tag, props: {...props, children}}
        console.log(element);
        return element;
    }
}

let Welcome = (
    <div className="card">
        <h1 className="card-header">
            React Welcome
        </h1>
        <p>Good Day!!!</p>
    </div>
);

export default Welcome;