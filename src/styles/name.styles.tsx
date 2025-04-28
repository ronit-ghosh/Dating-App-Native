import { StyleSheet } from "react-native";
import { UniStyles } from "./Styles";
import { Colors } from "@/utils/Constants";

export const nameStyles = StyleSheet.create({
    upper: UniStyles.upper,
    title: UniStyles.title,
    nameContainer: {
        flexDirection: "row",
        gap: "1%"
    },
    input: {
        width: "49%",
        height: 65,
        margin: "auto",
        fontSize: 18,
        fontFamily: "PoppinsRegular",
        paddingTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.text
    },
    helperContainer: UniStyles.helperContainer,
    helper: UniStyles.helper
});