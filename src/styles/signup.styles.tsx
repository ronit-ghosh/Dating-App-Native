import { Colors } from "@/utils/constants";
import { StyleSheet } from "react-native";

export const signupStyles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        justifyContent: "flex-end",
        alignItems: "center",
        paddingVertical: 26
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        zIndex: 1,
    },
    text: {
        fontSize: 48,
        color: 'white',
        fontFamily: "Giarek"
    },
    contentContainer: {
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        height: "80%"
    },
    btnContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    btn: {
        width: "90%",
        zIndex: 10
    },
    btn2: {
        width: "90%",
        zIndex: 10,
        backgroundColor: "transparent",
    },
    imgContainer: {
        width: "100%",
        height: 170,
        zIndex: 10,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        width: "50%",
        height: "50%",
        objectFit: "contain",
    },
    imgText: {
        marginTop: 5,
        color: "#eee"
    },
    terms: {
        color: Colors.background,
        zIndex: 10,
        marginHorizontal: 18,
        textAlign: "center",
        marginBottom: 10
    }
});