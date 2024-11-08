import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_lncsmd_list = createAsyncThunk(
  "lncsmds/api_v1_lncsmd_list",
  async payload => {
    const response = await apiService.api_v1_lncsmd_list(payload)
    return response.data
  }
)
export const api_v1_lncsmd_create = createAsyncThunk(
  "lncsmds/api_v1_lncsmd_create",
  async payload => {
    const response = await apiService.api_v1_lncsmd_create(payload)
    return response.data
  }
)
export const api_v1_lncsmd_retrieve = createAsyncThunk(
  "lncsmds/api_v1_lncsmd_retrieve",
  async payload => {
    const response = await apiService.api_v1_lncsmd_retrieve(payload)
    return response.data
  }
)
export const api_v1_lncsmd_update = createAsyncThunk(
  "lncsmds/api_v1_lncsmd_update",
  async payload => {
    const response = await apiService.api_v1_lncsmd_update(payload)
    return response.data
  }
)
export const api_v1_lncsmd_partial_update = createAsyncThunk(
  "lncsmds/api_v1_lncsmd_partial_update",
  async payload => {
    const response = await apiService.api_v1_lncsmd_partial_update(payload)
    return response.data
  }
)
export const api_v1_lncsmd_destroy = createAsyncThunk(
  "lncsmds/api_v1_lncsmd_destroy",
  async payload => {
    const response = await apiService.api_v1_lncsmd_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const lncsmdsSlice = createSlice({
  name: "lncsmds",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_lncsmd_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_lncsmd_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lncsmd_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lncsmd_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_lncsmd_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lncsmd_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lncsmd_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_lncsmd_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lncsmd_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lncsmd_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_lncsmd_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lncsmd_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lncsmd_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_lncsmd_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lncsmd_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lncsmd_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_lncsmd_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_lncsmd_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_lncsmd_list,
  api_v1_lncsmd_create,
  api_v1_lncsmd_retrieve,
  api_v1_lncsmd_update,
  api_v1_lncsmd_partial_update,
  api_v1_lncsmd_destroy,
  slice: lncsmdsSlice
}
