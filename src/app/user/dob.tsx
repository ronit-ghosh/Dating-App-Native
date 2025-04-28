import { Modal, StyleSheet, View } from 'react-native'
import CustomText from '@/components/ui/CustomText'
import CustomButton from '@/components/ui/CustomButton'
import { useRouter } from 'expo-router'
import { Colors } from '@/utils/Constants'
import AntDesign from '@expo/vector-icons/AntDesign';
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker"
import { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function Dob() {
    const router = useRouter()
    const [date, setDate] = useState(new Date())
    const [showPicker, setShowPicker] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const toggleShowPicker = () => setShowPicker(!showPicker)

    const openConfirmModal = () => {
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

    const confirmAndContinue = () => {
        closeModal()
        router.push('/user/location')
    }

    const handleDateChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
        if (!selectedDate) return
        if (event.type === "set") {
            const currentDate = selectedDate
            setDate(currentDate)
            setShowPicker(false)
        } else {
            toggleShowPicker()
        }
    }

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    const calculateAge = (birthDate: Date) => {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }

    return (
        <View style={styles.container}>
            <Modal
                visible={showModal}
                transparent={true}
                animationType="fade"
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <CustomText
                            variant='h1'
                            fontFamily='PoppinsSemiBold'
                            style={styles.modalText}>
                            You're {calculateAge(date)}
                        </CustomText>

                        <CustomText
                            variant='h5'
                            fontFamily='PoppinsRegular'
                            style={styles.modalText}>
                            Born on {formatDate(date)}
                        </CustomText>

                        <CustomText
                            variant='h6'
                            fontFamily='PoppinsRegular'
                            style={[styles.modalText, styles.modalDetailText]}>
                            Confirm your age is correct. Let's keep our community authentic.
                        </CustomText>

                        <View style={styles.modalButtons}>
                            <CustomButton
                                style={styles.cancelButton}
                                onpress={closeModal}>
                                <CustomText style={[styles.buttonText, {
                                    color: "#111"
                                }]}>
                                    Edit
                                </CustomText>
                            </CustomButton>

                            <CustomButton
                                style={styles.confirmButton}
                                onpress={confirmAndContinue}>
                                <CustomText style={styles.buttonText}>Confirm</CustomText>
                            </CustomButton>
                        </View>
                    </View>
                </View>
            </Modal>

            <View style={styles.upper}>
                <CustomText
                    variant='h0'
                    style={styles.title}
                    fontFamily='ManropeBold'>
                    What's your date of birth?
                </CustomText>

                <View style={styles.dateContainer}>
                    <CustomText
                        variant='h4'
                        fontFamily='PoppinsSemiBold'
                        style={styles.dateText}>
                        {formatDate(date)}
                    </CustomText>
                    <CustomButton
                        isCircle
                        onpress={toggleShowPicker}
                        style={styles.dateBtn}>
                        <MaterialIcons
                            name="date-range"
                            size={18}
                            color="#eee"
                        />
                    </CustomButton>
                    {
                        showPicker &&
                        <DateTimePicker
                            onChange={handleDateChange}
                            value={date}
                            display='spinner'
                            maximumDate={new Date()}
                        />
                    }
                </View>
            </View>

            <View style={styles.helperContainer}>
                <CustomText
                    variant='h8'
                    fontFamily='PoppinsLight'
                    style={styles.helper}>
                    We use this to calculate the age on your profile.
                </CustomText>
                <CustomButton
                    isCircle
                    onpress={openConfirmModal}
                    style={styles.btn}>
                    <AntDesign name="arrowright" size={24} color="#eee" />
                </CustomButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        paddingVertical: 40,
        marginHorizontal: 10,
        margin: "auto",
        position: "relative"
    },
    upper: {
        alignSelf: "auto",
        marginTop: 40
    },
    title: {
        color: Colors.text,
        marginBottom: 20
    },
    desc: {
        color: Colors.text,
        opacity: 0.5
    },
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
})