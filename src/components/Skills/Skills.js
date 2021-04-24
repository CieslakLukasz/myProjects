import React, {useState} from "react";
import SmallHex from '../SmallHex/SmallHex';


const skillList = [
    {
        text: '1',
        img: 'https://picsum.photos/200/200',
    },
  {
        text: '2',
        img: '',
    },
 {
        text: '3',
        img: '',
    },
  {
        text: '4',
        img: '',
    },
 {
        text: '5',
        img: '',
    },
  {
        text: '6',
        img: '',
    },
 {
        text: '7',
        img: '',
    },
  {
        text: '8',
        img: '',
    },

]

let x = 0;
let initialState = []
for (let i = 0; i < skillList.length; i++){
    if(i%3===0){
        x++
        console.log(x);
        initialState.push([skillList[i]])
    }else{
        console.log(initialState[x-1]);
        initialState[x-1].push(skillList[i])
    }
}
console.log(initialState);

export default function Skills() {
    const [skills, setSkills] = useState(initialState);

    console.log(skills);





  return (
    <div className="d-flex align-items-center justify-content-center main-content flex-wrap">
    {skills.map(group =>
        <div className="d-flex align-items-center justify-content-center flex-wrap">
        {group.map(el =>
            <SmallHex el={el} />
            )}
        </div>
        )}

    </div>
  );
}
