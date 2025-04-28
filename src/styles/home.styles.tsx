import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    container: {
        paddingVertical: 0
    },
    img: {
        width: "100%",
        height: "100%",
        objectFit: "contain"
    },
    card: {
        width: "98%",
        height: 300,
        borderWidth: 1,
        marginHorizontal: "auto",
        borderRadius: 12,
        borderColor: "#ccc",
        overflow: "hidden",
        marginVertical: 15
    },
    promptCard: {
        height: 200,
        padding: 20,
        justifyContent: "center",
        gap: 20
    },
    infoCard: {
        padding: 20,
        height: "auto"
    },
    infoCardItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },
    infoText: {
        marginLeft: 10
    },
    topbarContainer: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        paddingBottom: 10,
        overflowX: "scroll"
    },
    topbarItems: {
        flexDirection: "row",
        alignItems: "center",
        borderRightColor: "#ccc",
        paddingHorizontal: 8
    },
    topbarText: {
        marginLeft: 5
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10
    },
    headerIcons: {
        flexDirection: "row",
        gap: 10
    }
})
