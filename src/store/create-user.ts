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
    handleSignup: () => Promise<{ token?: string, error?: string } | undefined>
    loading: boolean
    token: string
}

const UserStore: StateCreator<UserStoreTypes> = (set, get) => ({
    dob: new Date(
        new Date().getFullYear() - 18,
        new Date().getMonth(),
        new Date().getDate()
    ),
    email: "",
    firstname: "",
    lastname: "",
    lat: 0.00,
    lng: 0.00,
    password: "",
    loading: false,
    token: "",
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
            set({ loading: true })
            const response = await axios.post(`${BACKEND_URL}/api/auth/create`, {
                dob,
                email,
                firstname,
                lastname,
                lat,
                lng,
                password
            })

            set({ 
                loading: false,
                token: response.data.token
             })
            return { token: response.data.token }
        } catch (error) {
            set({ loading: false })
            console.error("Error while creating user", error)
            if (isAxiosError(error)) {
                return { error: (error as AxiosError).message }
            }
        }
    }
});

export const useUserStore = create(UserStore);