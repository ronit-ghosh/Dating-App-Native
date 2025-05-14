import { create, type StateCreator } from "zustand";
import { AxiosError, isAxiosError } from "axios";
import { BACKEND_URL } from "../utils/env";
import { UserDetailsTypes } from "@ronit-ghosh/lume-validation";
import Api from "@/utils/api";

interface UserDetailsStoreTypes extends UserDetailsTypes {
    setGender: (value: "MALE" | "FEMALE") => void
    setDatingGender: (value: "MALE" | "FEMALE") => void
    setDatingIntention: (value: string) => void
    setRelationshipType: (value: string) => void
    setHighestDegree: (value: string) => void
    setCollege: (value: string) => void
    setJobTitle: (value: string) => void
    setWork: (value: string) => void
    setSexuality: (value: string) => void
    setDrink: (value: boolean) => void
    setDrugs: (value: boolean) => void
    setTobacco: (value: boolean) => void
    setWeed: (value: boolean) => void
    handleUserDetails: () => void
    loading: boolean
    token: string
}

const UserDetailsStore: StateCreator<UserDetailsStoreTypes> = (set, get) => ({
    gender: "MALE",
    datingGender: "MALE",
    datingIntention: "",
    relationshipType: "",
    highestDegree: "",
    college: "",
    jobTitle: "",
    work: "",
    sexuality: "",
    drink: false,
    drugs: false,
    tobacco: false,
    weed: false,
    loading: false,
    token: "",
    setGender: (value) => {
        set({ gender: value })
    },
    setDatingGender: (value) => {
        set({ datingGender: value })
    },
    setDatingIntention: (value) => {
        set({ datingIntention: value })
    },
    setRelationshipType: (value) => {
        set({ relationshipType: value })
    },
    setHighestDegree: (value) => {
        set({ highestDegree: value })
    },
    setCollege: (value) => {
        set({ college: value })
    },
    setJobTitle: (value) => {
        set({ jobTitle: value })
    },
    setWork: (value) => {
        set({ work: value })
    },
    setSexuality: (value) => {
        set({ sexuality: value })
    },
    setDrink: (value) => {
        set({ drink: value })
    },
    setDrugs: (value) => {
        set({ drugs: value })
    },
    setTobacco: (value) => {
        set({ tobacco: value })
    },
    setWeed: (value) => {
        set({ weed: value })
    },
    handleUserDetails: async () => {
        const {
            college,
            datingGender,
            datingIntention,
            drink,
            drugs,
            gender,
            highestDegree,
            jobTitle,
            relationshipType,
            sexuality,
            work,
            tobacco,
            weed
        } = get()

        if (!college ||
            !datingGender ||
            !datingIntention ||
            !drink ||
            !drugs ||
            !gender ||
            !highestDegree ||
            !jobTitle ||
            !relationshipType ||
            !sexuality ||
            !work ||
            !tobacco ||
            !weed) return

        try {
            set({ loading: true })
            const response = await Api.post(`${BACKEND_URL}/api/user/create-details`, {
                college,
                datingGender,
                datingIntention,
                drink,
                drugs,
                gender,
                highestDegree,
                jobTitle,
                relationshipType,
                sexuality,
                work,
                tobacco,
                weed
            })

            set({
                loading: false,
                token: response.data.token
            })
        } catch (error) {
            set({ loading: false })
            console.error("Error while creating user", error)
            if (isAxiosError(error)) {
                return { error: (error as AxiosError).message }
            }
        }
    }
});

export const useUserDetailsStore = create(UserDetailsStore);