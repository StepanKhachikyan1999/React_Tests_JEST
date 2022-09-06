import { useState } from 'react';
import List from '../List';
import Search from '../Search';
import './App.css';

function App() {
  const data = [
    'html',
    'css',
    'js',
    'TS',
    "React"
  ]

  const [search,setSearch] = useState('')

  return (
    <div className="App">
      <div>
        <Search value={search} onChange={e => setSearch(e.target.value)}>
        text
        </Search>
      <List items={data} />
      </div>
    </div>
  );
}

export default App;
