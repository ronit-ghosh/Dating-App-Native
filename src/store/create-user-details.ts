import { create, type StateCreator } from "zustand";
import axios, { AxiosError, isAxiosError } from "axios";
import { BACKEND_URL } from "../utils/env";
import { UserDetailsTypes } from "@ronit-ghosh/lume-validation";

interface UserDetailsStoreTypes extends UserDetailsTypes {
    
}

const UserDetailsStore: StateCreator<UserDetailsStoreTypes> = (set, get) => ({
    
});

export const useUserDetailsStore = create(UserDetailsStore);