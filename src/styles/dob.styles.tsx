import { Colors } from "@/utils/Constants";
import { UniStyles } from "./Styles";
import { StyleSheet } from "react-native";

export const dobStyles = StyleSheet.create({
    container: {
        position: "relative"
    },
    upper: UniStyles.upper,
    title: {
        ...UniStyles.title,
        marginBottom: 20
    },
    desc: UniStyles.desc,
    inputContainer: {
        width: "100%",
        overflow: "hidden"
    },
    dateContainer: {
        marginVertical: 15,
        borderBottomColor: Colors.text,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    dateBtn: {
        width: 40,
        height: 40
    },
    dateText: {
        color: Colors.text,
        paddingVertical: 10,
        borderBottomWidth: 1,
        width: "80%"
    },
    input: {
        width: "10%",
        height: 45,
        margin: "auto",
        fontSize: 18,
        fontFamily: "PoppinsSemiBold",
        textAlign: "center"
    },
    underline: {
        width: "10%",
        margin: "auto",
        borderWidth: 1,
        borderColor: "#111",
        textDecorationLine: "underline"
    },
    helperContainer: UniStyles.helperContainer,
    helper: UniStyles.helper,
    btn: {
        width: 50,
        height: 50
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84
    },
    modalTitle: {
        color: Colors.text
    },
    modalText: {
        color: Colors.text
    },
    modalDetailText: {
        marginBottom: 10,
        opacity: 0.7
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10
    },
    cancelButton: {
        padding: 12,
        borderRadius: 10,
        width: '45%',
        alignItems: 'center',
        backgroundColor: '#f2f2f2'
    },
    confirmButton: {
        padding: 12,
        borderRadius: 10,
        width: '45%',
        alignItems: 'center',
        backgroundColor: Colors.primary
    },
    buttonText: {
        fontFamily: 'PoppinsMedium',
        color: '#fff'
    }
});
