import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { User } from '../types/User';

interface AuthState {
  user: User | null
  token: string | null;
  isAuthenticated: boolean;
}

interface AuthActions {
  setAuth: (user: User, token: string) => void
  logout: () => void

}

export const useAuthStore = create(persist<AuthState & AuthActions>((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  setAuth: (user: User, token: string) => set({ user, token, isAuthenticated: true }),
  logout: () => set({user: null, token: null, isAuthenticated: false})

}), {name: "auth"}))