import React from 'react';

// Sample data representing a nested list
const data = [
  {
    id: 1,
    name: 'Item 1',
    children: [
      {
        id: 2,
        name: 'Item 1.1',
        children: [
          {
            id: 3,
            name: 'Item 1.1.1'
          }
        ]
      },
      {
        id: 4,
        name: 'Item 1.2'
      }
    ]
  },
  {
    id: 5,
    name: 'Item 2',
    children: [
      {
        id: 6,
        name: 'Item 2.1'
      }
    ]
  }
];

// Recursive component to render nested list
const RecursiveList = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name}
          {item.children && <RecursiveList items={item.children} />}
        </li>
      ))}
    </ul>
  );
};

// Main component
const App = () => {
  return (
    <div>
      <h1>Recursive List</h1>
      <RecursiveList items={data} />
    </div>
  );
};

export default App;
