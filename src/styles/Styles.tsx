import { StyleSheet } from "react-native";
import { Colors } from "../utils/constants";

export const UniStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        paddingVertical: 40,
        marginHorizontal: 10
    },
    upper: {
        alignSelf: "auto",
        marginTop: 40
    },
    title: {
        color: Colors.text
    },
    desc: {
        color: Colors.text,
        opacity: 0.5
    },
    input: {
        width: "100%",
        height: 65,
        fontSize: 18,
        fontFamily: "PoppinsSemiBold",
        paddingTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.text
    },
    helperContainer: {
        alignSelf: "auto",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    helper: {
        color: Colors.text,
        opacity: 0.5,
        width: "70%"
    },
    showOnProfile: {
        fontFamily: "PoppinsLight"
    },
    card: {
        width: "98%",
        height: 300,
        marginHorizontal: "auto",
        borderWidth: 1,
        borderRadius: 12,
        borderColor: "#ccc",
        overflow: "hidden",
        marginVertical: 15
    },
});


