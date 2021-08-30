const initialValue = [];

export default function favoriteListreducer(state = initialValue, action){
   if(action.type === 'INITIAL'){
      return [action.houses];
      // return [...state, action.houses];
   }
   // if(action.type === 'REMOVE'){
   //    return state.filter(item => item.id !== action.song);
   // }

   return state;
};
