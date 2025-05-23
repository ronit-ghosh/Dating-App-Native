import { Modal, View } from 'react-native'
import CustomText from '@/components/ui/CustomText'
import CustomButton from '@/components/ui/CustomButton'
import { useRouter } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker"
import { useState } from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { UniStyles } from '@/styles/Styles'
import { dobStyles as styles } from '@/styles/dob.styles';
import { useUserStore } from '@/store/create-user';

export default function Dob() {
    const router = useRouter()
    const { dob, setDob } = useUserStore()
    const [showPicker, setShowPicker] = useState(false)
    const [showModal, setShowModal] = useState(false)
    
    const toggleShowPicker = () => setShowPicker(!showPicker)
    const openConfirmModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)
    const confirmAndContinue = () => {
        closeModal()
        router.push('/user/location')
    }

    const handleDateChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
        if (!selectedDate) return
        if (event.type === "set") {
            const currentDate = selectedDate
            setDob(currentDate)
            setShowPicker(false)
        } else {
            toggleShowPicker()
        }
    }

    const formatDate = (dob: Date) => {
        return dob.toLocaleDateString('en-US', {
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

    const today = new Date();
    const eighteenYearsAgo = new Date(
        today.getFullYear() - 18,
        today.getMonth(),
        today.getDate()
    );

    return (
        <View style={[UniStyles.container, styles.container]}>
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
                            You're {calculateAge(dob)}
                        </CustomText>

                        <CustomText
                            variant='h5'
                            fontFamily='PoppinsRegular'
                            style={styles.modalText}>
                            Born on {formatDate(dob)}
                        </CustomText>

                        <CustomText
                            variant='h8'
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
                    What's your dob of birth? {dob.toLocaleDateString()}
                </CustomText>

                <View style={styles.dateContainer}>
                    <CustomText
                        variant='h4'
                        fontFamily='PoppinsRegular'
                        style={styles.dateText}>
                        {formatDate(eighteenYearsAgo)}
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
                            value={dob}
                            display='spinner'
                            maximumDate={eighteenYearsAgo}
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