import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
    container: {
        paddingVertical: 0,
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        width: "99%",
        height: "100%",
        objectFit: "contain"
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
        width: "100%",
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
