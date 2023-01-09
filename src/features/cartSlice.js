import {createSlice} from '@reduxjs/toolkit';
//define initial state
const initialState = []


//define slice
const cartSlice = createSlice({

  //slice name
  name: 'cart',
  //initial state
  initialState,
  //reducers
  //reducers contains actions to modify state
  reducers: {

    //action
    add: (state,action) => {

      state.push(action.payload)
    },
    //action
    remove: (state, action) => {

      return state.filter(item => item.id !== action.payload)
    }
  }

})

//export actions
export const {add, remove} = cartSlice.actions;
//export reducers
export default cartSlice.reducer;

