import { StyleSheet } from "react-native";

export const locationStyles = StyleSheet.create({
    mapContainer: {
        width: "90%",
        height: "50%",
        marginHorizontal: "auto"
    },
    map: {
        width: '100%',
        height: '100%',
    },
    desc: {
        opacity: 0.6
    },
    input: {
        width: "95%",
        marginHorizontal: "auto",
        borderBottomColor: "#111",
        borderBottomWidth: 1,
        fontFamily: "PoppinsMedium",
        fontSize: 12
    }
});