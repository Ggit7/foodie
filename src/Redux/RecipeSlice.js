import React from 'react'
import{createAsyncThunk,createSlice}from '@reduxjs/toolkit'
import { axiosInstance } from './Helper'
import { product_create_end_point, product_get_end_point,delete_end_point ,product_update_end_point} from '../Api/Endpoint/ApiEndpoints'
const initialState={
    upload_status:'idle',
    product:[],
    list:[{}],
    totalPages:'',
    Editlist:[{}],
    redirectProduct:null,
     delete_status: 'idle'

}
export const product_create = createAsyncThunk("Pcreate", async (formData) => {
    const res = await axiosInstance.post(product_create_end_point.PCreate, formData);
    const resData = await res?.data;
    return resData;
  });
  export const product_get=createAsyncThunk('Pget',async(fromData)=>{
    const res=await axiosInstance.post(product_get_end_point.Pget,fromData);
    const resData=await res?.data;
    return resData;
  })
  export const product_delete=createAsyncThunk('remove',async(formdata)=>{
    const res=await axiosInstance.post(delete_end_point.pdelete,formdata);
    const resData=await res?.data;
    return resData;
  })
  export const product_edit=createAsyncThunk('edit',async(id)=>{
    const res=await axiosInstance.get(`/product/detail/${id}`);
    const resData=await res?.data;
    return resData;
  })
  export const product_update=createAsyncThunk('update',async(formData)=>{
    const res=await axiosInstance.post(product_update_end_point.Pupdate,formData);
    let resData=res?.data
    return resData
  })
  export const product_show=createAsyncThunk('show',async(id)=>{
    const res=await axiosInstance.get(`/product/detail/${id}`);
    const resData=await res?.data;
    return resData;
  })
export const RecipeSlice=createSlice({
    name:'Reacipe_submit',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(product_create.pending, (state,{payload}) => {
            state.upload_status = 'loading';
          })
          .addCase(product_create.fulfilled, (state, {payload}) => {
            state.upload_status = 'succeeded';
          })
          .addCase(product_create.rejected, (state, {payload}) => {
            state.upload_status = 'failed';
          })
          .addCase(product_get.pending,(state,{payload})=>{
            state.upload_status='loading'
          })
          .addCase(product_get.fulfilled,(state,{payload})=>{
            state.upload_status='succed';
            state.list=payload?.data;
            state.totalPages=payload?.totalPages;
          })
          .addCase(product_get.rejected,(state,{payload})=>{
            state.upload_status='failed'
          })
          .addCase(product_delete.pending,(state,{payload})=>{
            state.delete_status='idel';
          })
          .addCase(product_delete.fulfilled,(state,{payload})=>{
            state.delete_status='idel';
          })
          .addCase(product_delete.rejected,(state,{payload})=>{
            state.delete_status='idel';
          })
          .addCase(product_edit.pending,(state,{payload})=>{
              state.upload_status='idel'
          })
          .addCase(product_edit.fulfilled,(state,{payload})=>{
            state.upload_status='idel';
            state.product=payload?.data
        })
        .addCase(product_edit.rejected,(state,{payload})=>{
          state.upload_status='idel'
      })
      .addCase(product_update.pending,(state,{payload})=>{
        state.upload_status='idel'
    })
    .addCase(product_update.fulfilled,(state,{payload})=>{
      state.upload_status='idel'
  })
  .addCase(product_update.rejected,(state,{payload})=>{
    state.upload_status='idel'
})
.addCase(product_show.pending,(state,{payload})=>{
  state.upload_status='idel'
})
.addCase(product_show.fulfilled,(state,{payload})=>{
state.upload_status='idel';
state.product=payload?.data
})
.addCase(product_show.rejected,(state,{payload})=>{
state.upload_status='idel'
})
    }
})
export default RecipeSlice;

