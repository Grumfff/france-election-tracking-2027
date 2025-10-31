import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLatestSurveyData } from "../../services/MjServices";

const mjInitialState = {
    jmData: {},
};

const mjReducers = {
};

const mjSlice = createSlice({
    name: 'majority-judgment',
    initialState: mjInitialState,
    reducers: mjReducers,
    extraReducers: (builder) => {
        handleLoadJmData(builder);
    }
});

function handleLoadJmData(builder: any) {
    builder.addCase(loadMajorityJugmentData.fulfilled, (state: { jmData: any; }, action: { payload: any; }) => {
        state.jmData = action.payload;
    });
}

export const loadMajorityJugmentData = createAsyncThunk<Record<string, unknown>, void>('majority-jugment/load',
    async () => {
        return await getLatestSurveyData();
    }
);

export const mjSliceReducer = mjSlice.reducer;
