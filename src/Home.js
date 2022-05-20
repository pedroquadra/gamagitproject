import React, {useState} from 'react';
import axios from 'axios';

 function Home(props){
  const [usuario, setUsuario] = useState('');

  function handlePesquisa(){
   axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
     const repositories = response.data;
     const repositoriesName = [];
     repositories.map((repository) => {
      repositoriesName.push(repository.name);
     });
   localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
   });
  }
  return (  
    <>
    <input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)} />
    <button type='button' onClick={handlePesquisa}>Click</button>
   </>
    );
}
export default Home;


