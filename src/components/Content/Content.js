import React, {useState, useEffect} from "react";
import SmallHex from '../SmallHex/SmallHex';
import './content.scss';
import useCurrentWidth from '../useCurrentWidth';


export default function Content({initialList, changeDisplay}) {
    // list -> list we got to display
    const [list, setList] = useState(initialList);
    // content - list changed into array in useEffect so I can map it.
    const [content, setContent] = useState([]);
    // single rows -> if all hex are in single rows its gonna be true
    const [singleRows, setSingleRows] = useState(false);

    let width = useCurrentWidth();

    useEffect(() => {
        setList(initialList);
        changeDisplay(initialList[0])
    }, [initialList]);


    // logic of making content array according to window.width - so hex's gonna be look like honeycomb in any resolution
    useEffect(() => {
    let x = 0;
    let initialState = [];
    if(width > 1050){
      for (let i = 0; i < list.length; i++){
        if(i%5===2 || i%5===0){
            x++;
            initialState.push([list[i]]);
        }else{
            initialState[x-1].push(list[i]);
        }
        setSingleRows(false);
    }
    }else if(width > 875){
        for (let i = 0; i < list.length; i++){
            if(i%2===0){
                x++;
                initialState.push([list[i]]);
            }else{
                initialState[x-1].push(list[i]);
            }
            setSingleRows(false);
        }
    }else if(width > 700){
        for (let i = 0; i < list.length; i++){
            if(i%3===0 || i%3===1){
                x++;
                initialState.push([list[i]]);
            }else{
                initialState[x-1].push(list[i]);
            }
            setSingleRows(false);
        }
    }else{
        for (let i = 0; i < list.length; i++){
                x++;
                initialState.push([list[i]]);
                setSingleRows(true);
        }
    }
    setContent(initialState);
    }, [list, width]);

    //rewrite hover atribute in list we display due to mouseenter/mouseout or if its clicked
    const handleBorderChange = (ind) => {
        setList(list.map((el,i) => i!==ind ? ({...el, hover: false}) : ({...el, hover:true})));
        changeDisplay(list[ind]);
    }

    // addding class due to how our content array looks like
    const handleClass = (group,i) => {
        if(group.length > 1 || singleRows){
        if(i%2===0){
            return "row-content margin-left d-flex  flex-wrap"
        }else{
            return  "row-content d-flex flex-wrap"
        }
        }else {
        if(i%2===0){
            return "row-content d-flex margin-left"
        }else{
            return "row-content d-flex margin-3-left"
        }
    }
    }


  return (
    <div className="d-flex flex-column justify-content-center main-content">
    {content.map((group,ind) =>
        <div className={handleClass(group,ind)}>
        {group.map((el) =>
            <SmallHex el={el} i={el.index} key={el.index} handleBorderChange={handleBorderChange}/>
            )}
        </div>
        )}

    </div>
  );
}
