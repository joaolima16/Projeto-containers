export default function GetIndex(State={value:''},action){
    switch(action.type){
        case "ADD_INDEX":
            return {value: action.data};
            
        default: return State;
    }
    
}