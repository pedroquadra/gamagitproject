import React, {useEffect, useState}from 'react';

export default function Repositories(){
    const [repositories, setRepositories] = useState([]);
    useEffect(()=>{
let repositoriesName = localStorage.getItem('repositoriesName');
repositoriesName = JSON.parse(repositoriesName);
setRepositories(repositoriesName);
//localStorage.clear();
    }, []);
    return (
    <div>
   <h1>Repositories</h1>
        <li>
            {repositories.map(repository =>{
                    return(
                        <ul>Repositório: {repository}</ul>
                    )                        
                })}
                   </li>
        </div>    
            
                    )
                }
