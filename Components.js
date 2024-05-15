// A React component is a piece of the UI (user interface) that has its own logic and appearance,
// actually it is a function that returns a markup

function MyButton() {
    return <button>Click me</button>;
}


export default function MyApp() { 
    
    return (
        <div>
            <h1>
                Welcome to my App
            </h1>
            <MyButton />
        </div>
    );
}