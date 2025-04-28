import { StyleSheet } from "react-native";
import { UniStyles } from "./Styles";

export const sexualityStyles = StyleSheet.create({
    upper: UniStyles.upper,
    title: UniStyles.title,
    desc: UniStyles.desc,
    input: UniStyles.input,
    selectSexContainer: {
        marginTop: 20,
        height: "65%",
        position: "relative"
    },
    sexBlock: {
        borderBottomWidth: 1,
        borderBottomColor: "#999",
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: "PoppinsRegular"
    },
    sexLabel: {
        fontFamily: "PoppinsMedium",
        textTransform: "capitalize"
    },
    helperContainer: UniStyles.helperContainer,
    helper: UniStyles.helper,
    showOnProfile: UniStyles.showOnProfile,
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 60,
        zIndex: 1,
        pointerEvents: 'none',
    }
});