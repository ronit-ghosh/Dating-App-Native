import { StyleSheet } from "react-native";

export const matchStyles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        justifyContent: "flex-start"
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    card: {
        height: 360
    },
    cardTitle:{
        paddingHorizontal: 10,
        height: "10%",
        paddingTop: 5
    },
    img: {
        width: "100%",
        height: "90%",
        objectFit: "contain",
        // borderWidth: 1
    }
})
