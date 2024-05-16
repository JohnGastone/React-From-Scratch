//1. If condition
// let content;
// if (isLogedIn) {
//     content = <AdminPanel />;
// } else {
//     content = <LoginForm />;
// }

// return (
//     <div>
//         {content}
//     </div>
// )

// 2. Conditional ? Operator {Ternary operator}

//     < div >
//         {
//     isLogedIn ? (
//     <AdminPanel />
//     ) : (
//         <LoginForm />
// )}
//     </div>

// 3. Logical && Operator

// function Greeting(props) {
//     return (
//         <div>
//             {props.isLoggedIn && <h1>Welcome back mate</h1>}
//         </div>
//     );
// }
//function App() {
    // return (
    //     <div>
    //       <Greeting isLoggedIn={true} />
    //     </div>
    //   );
    // }

// 4. Switch-Case
function Greeting(props) {
    switch (props.userRole) {
        case 'admin':
            return <h1>Welcome Admin!</h1>
        case 'user':
            return <h1>Welcome User!</h1>
        default:
            return <h1>Please sign up</h1>
    }
}

function App() {
    return (
        <div>
            <Greeting userRole="admin" />
        </div>
    );
}

// 5. Immediately Invoked Function Expression

// function Greeting(props) {
//     return (
//         <div>
//             {(() => {
//                 if (props.isLoggedIn) {
//                     return <h1>Welcome back!</h1>
//                 } else {
//                     return <h1>Please sign up</h1>}
//             })}
//         </div>
//     )
// }

// function App() { 
//     return (
//         <div>
//             <Greeting isLoggedIn={true} />
//         </div>
//     );
//  }