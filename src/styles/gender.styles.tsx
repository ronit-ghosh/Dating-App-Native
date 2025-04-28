import { StyleSheet } from "react-native";
import { UniStyles } from "./Styles";

export const genderStyles = StyleSheet.create({
    upper: UniStyles.upper,
    title: UniStyles.title,
    desc: UniStyles.desc,
    input: UniStyles.input,
    helperContainer: UniStyles.helperContainer,
    helper: UniStyles.helper,
    selectGenderContainer: {
        marginTop: 20
    },
    genderBlock: {
        borderBottomWidth: 1,
        borderBottomColor: "#999",
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: "PoppinsRegular"
    },
    genderLabel: {
        fontFamily: "PoppinsMedium",
        textTransform: "capitalize"
    }
});