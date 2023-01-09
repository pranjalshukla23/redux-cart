import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading'
})


//define initial state
const initialState = {
  data: [],
  status: STATUSES.IDLE,

}

//thunks are middleware to do an async operation
//thunks automatically call extra reducers after execution
//thunk function
export const fetchProducts = createAsyncThunk('product/fetch', async(_,thunkAPI) => {

  try{

    const res = await fetch('https://fakestoreapi.com/products')
    const data  = await res.json()
    return data
  }catch(error){

    console.log(error);

    const message = (error.response && error.response.data &&
            error.response.data.message)
        || error.message || error.toString();

    return thunkAPI.rejectWithValue(message);
  }

})

//define slice
const productSlice = createSlice({

  //slice name
  name: 'product',

  //initial state
  initialState,

  //reducers
  //reducers contains actions to modify state
  reducers: {

    //action
    setProducts: (state,action) => {

      //do not call apis from actions

      state.data = action.payload

    },

    //action
    setStatus: (state,action) => {

      //do not call apis from actions

      state.status = action.payload

    },
  },

  //extra reducers functions are automatically called by thunk functions
  // these functions get executed based on the status of thunk function
  extraReducers: (builder) =>{

    builder

        //case 1
        //if status of thunk function is pending
        .addCase(fetchProducts.pending, (state, action) =>{

          state.status = STATUSES.LOADING

        })

        //case 2
        //if status of thunk function is fulfilled
        .addCase(fetchProducts.fulfilled,(state,action)=>{
          state.data = action.payload
          state.status = STATUSES.IDLE
        })

        //case 3
        //if status of thunk function is rejected
        .addCase(fetchProducts.rejected, (state, action) =>{
          state.status = STATUSES.ERROR
        })


  }

})

//export actions
export const {setProducts, setStatus} = productSlice.actions;
//export reducers
export default productSlice.reducer;