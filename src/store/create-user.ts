import { create, type StateCreator } from "zustand";
import axios, { AxiosError, isAxiosError } from "axios";
import { BACKEND_URL } from "../utils/env";
import { CreateUserTypes } from "@ronit-ghosh/lume-validation";

interface UserStoreTypes extends CreateUserTypes {
    setDob: (value: Date) => void
    setEmail: (value: string) => void
    setPassword: (value: string) => void
    setFirstname: (value: string) => void
    setLastname: (value: string) => void
    setLat: (value: number) => void
    setLng: (value: number) => void
    handleSignup: () => void
    token: string
    error: string
}

const UserStore: StateCreator<UserStoreTypes> = (set, get) => ({
    dob: new Date(),
    email: "",
    firstname: "",
    lastname: "",
    lat: 0.00,
    lng: 0.00,
    password: "",
    token: "",
    error: "",
    setDob: (value) => {
        set({ dob: value })
    },
    setEmail: (value) => {
        set({ email: value })
    },
    setPassword: (value) => {
        set({ password: value })
    },
    setFirstname: (value) => {
        set({ firstname: value })
    },
    setLastname: (value) => {
        set({ lastname: value })
    },
    setLat: (value) => {
        set({ lat: value })
    },
    setLng: (value) => {
        set({ lng: value })
    },
    handleSignup: async () => {
        const { dob, email, firstname, lastname, lat, lng, password } = get()
        if (!dob || !email || !firstname || !lastname || !lat || !lng || !password) {
            return
        }

        try {
            const response = await axios.post(`${BACKEND_URL}/api/auth/create`, { dob, email, firstname, lastname, lat, lng, password })
            set({ token: response.data.token })
        } catch (error) {
            console.error("Error while creating user", error)
            if (isAxiosError(error)) {
                set({ error: (error as AxiosError).message })
            }
        }
    }
});

export const useUserStore = create(UserStore);