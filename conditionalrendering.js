// if statements
// ternary operators
// logical and operator

// only render the subtitle (and p tag) if subtitle exist - logical && operator
// render new p tag - if options.length > 0 "Here are your options" < "No options"

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};



var template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        {app.options.length > 0 ? 'Here are your options' : 'No options'}
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);


let appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);