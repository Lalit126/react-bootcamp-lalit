import React , {useState} from 'react';
import Toast from './Toast'
import { Button} from 'reactstrap';
import { useHistory } from "react-router-dom";

// ES6

const availableTeamNames= ['Einstein', 'Newton', 'Tesla']
const availableCandidates= ["Venkat",
"Kevin",
"Kinjal",
"Eric",
"Ronish",
"Prakash",
"Lalit"]

function Lottery({}) {

const [team,setTeam] =useState([])

let hist = useHistory()

//passing arguments normally
function handleLottery(e,Employer1) {

    let count = []
    while(true) {
        let randomNumber = Math.floor(Math.random()*availableCandidates.length)
        console.log(count.includes(randomNumber),'count.includes(randomNumber)');
            if(!count.includes(randomNumber)){
                count.push(randomNumber)
            }
        if (count.length ===7) break;
    }

let teamed = count.map(i=>availableCandidates[i])
setTeam(teamed)
   
}




 return (
    <div className='Lottery-container'>
    {team.length ===7 && 
    <div>
     <Toast
    header="Team Einsten"
    body={team.slice(0,2).join(",")}
    />
     <Toast
    header="Team Newton"
    body={team.slice(2,4).join(",")}
    />
     <Toast
    header="Team Tesla"
    body={team.slice(4).join(",")}
    />

     </div>   
    }    
    
<div style={{margin:'200px'}}>
<Button onClick={()=>handleLottery()} color="primary">Start Lottery</Button>{' '}


</div>
  
    </div>)
}

export default Lottery