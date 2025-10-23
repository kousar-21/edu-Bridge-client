import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Load user's favorites from backend
export const fetchFavorites = createAsyncThunk(
    "favorites/fetchFavorites",
    async (email) => {
        const res = await axios.get(
            `https://language-club-orcin.vercel.app/favorites?email=${email}`
        );
        return res.data;
    }
);

// Add a tutor to favorites
export const addFavorite = createAsyncThunk(
    "favorites/addFavorite",
    async ({ userEmail, tutorId }) => {
        const res = await axios.post(
            `https://language-club-orcin.vercel.app/favorites`,
            { userEmail, tutorId }
        );
        return { userEmail, tutorId, insertedId: res.data.insertedId };
    }
);

// Remove a tutor from favorites
export const removeFavorite = createAsyncThunk(
    "favorites/removeFavorite",
    async (favoriteId) => {
        await axios.delete(
            `https://language-club-orcin.vercel.app/favorites/${favoriteId}`
        );
        return favoriteId;
    }
);

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        items: [], // array of favorite tutors
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFavorites.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchFavorites.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(addFavorite.fulfilled, (state, action) => {
                state.items.push({
                    ...action.payload,
                    _id: action.payload.insertedId,
                });
            })
            .addCase(removeFavorite.fulfilled, (state, action) => {
                state.items = state.items.filter(
                    (fav) => fav._id !== action.payload
                );
            });
    },
});

export default favoritesSlice.reducer;
