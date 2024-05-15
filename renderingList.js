const products = [
    { name: 'Carbage', id: 1 },
    { name: 'Coffee', id: 2 },
    { name: 'Tea', id: 3 },
    { name: 'Milk', id: 4 },
    { name: 'Bread', id: 5 },
    { name: 'Butter', id: 6 },
    { name: 'Cheese', id: 7 },
];


const listItems = products.map(product => 
    <li key={product.id}>
        {product.name}
    </li>
)