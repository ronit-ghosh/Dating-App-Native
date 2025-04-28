import { StyleSheet } from "react-native";
import { UniStyles } from "./Styles";

export const emailStyles = StyleSheet.create({
    upper: UniStyles.upper,
    title: UniStyles.title,
    desc: UniStyles.desc,
    input: {
        ...UniStyles.input,
        fontFamily: "PoppinsRegular"
    },
    helperContainer: UniStyles.helperContainer,
    helper: UniStyles.helper
});
