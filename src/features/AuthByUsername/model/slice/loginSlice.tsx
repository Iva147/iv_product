import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { LoginSchema } from 'features/AuthByUsername/model/types/LoginSchema';
import { loginByUserName } from '../../services/loginByUserName/loginByUserName';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
  error: ''
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
      state.error = ''
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
      state.error = ''
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loginByUserName.pending, (state) => {
        state.isLoading = true
        state.error = ''
      })
      .addCase(loginByUserName.fulfilled, (state, action) => {
        state.isLoading = false
        state.username = action.payload.username
        state.error = ''
      })
      .addCase(loginByUserName.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: loginActions } = loginSlice
export const { reducer: loginReducer } = loginSlice