const products = [
    { name: 'Carbage', isDrink: false, id: 1 },
    { name: 'Coffee', isDrink: true, id: 2 },
    { name: 'Tea', isDrink: true, id: 3 },
    { name: 'Milk', isDrink: true, id: 4 },
    { name: 'Bread', isDrink: false, id: 5 },
    { name: 'Butter', isDrink:false, id: 6 },
    { name: 'Cheese', isDrink: false, id: 7 },
];


export default function shoppingList() {
    const listItems = products.map(product =>
        <li key={product.id}>
            {product.name}
            {product.id}
        </li>
    );
    
    return (
        <ul>
            {listItems}
        </ul>
    )
}