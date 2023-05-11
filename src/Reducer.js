const Reducer=(state=0,action)=>{
if(action.type==='Increment'){
    return state + action.payload
}else if(action.type==='Decrement'){
    if(state<=0){
      return state =0
    }else{

        return state - action.payload
    }
}else{
    return state;
}
}
export default Reducer;