// src/features/userSlice/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Définir l'état initial basé sur les nouveaux attributs
interface UserState {
  isLoggedIn: boolean;
  pseudo: string | null;
  role: number | null;
  token: string | null;
}

let initialState: UserState = {
  isLoggedIn: false,
  pseudo: null,
  role: null,
  token :null
};



// Si un jeton est stocké dans le stockage local, on le récupère
if (localStorage.getItem('token')) {
  // Si un jeton est stocké dans le stockage local, on le récupère
  initialState.token = localStorage.getItem('token');
}



export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action pour se connecter qui met à jour l'état avec les infos de l'utilisateur
    login: (state, action: PayloadAction<{ pseudo: string; role: number; token: string }>) => {
      state.isLoggedIn = true;
      state.pseudo = action.payload.pseudo;
      state.role = action.payload.role;
      state.token = action.payload.token;
      // Stocker le jeton dans le stockage local pour le garder après un rafraîchissement de la page
      localStorage.setItem('token', action.payload.token);
    },
    // Action pour se déconnecter qui réinitialise l'état
    logout: (state) => {
      state.isLoggedIn = false;
      localStorage.removeItem('token');
      state.pseudo = null;
      state.role = null;
      state.token = null;
    },
  },
});

// Exporter les actions du slice
export const { login, logout } = userSlice.actions;

// Exporter le reducer
export default userSlice.reducer;
