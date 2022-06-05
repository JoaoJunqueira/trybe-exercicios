import './App.css';

function App() {
  const items = ['Lavar as louças', 'Lavar as roupas', 'Ajudar o irmão mais novo'];
  const Task = (value) => {
    return (
      <li>{value}</li>
    );
  }
  return (items.map((item) => Task(item)));
}

export default App;
