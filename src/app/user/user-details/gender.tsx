import { View } from 'react-native'
import CustomText from '@/components/ui/CustomText'
import { RelativePathString } from 'expo-router'
import { Colors } from '@/utils/constants'
import { useState } from 'react'
import NextButton from '@/components/ui/NextButton'
import { RadioButton } from 'react-native-paper';
import { UniStyles } from '@/styles/Styles'
import { genderStyles as styles } from '@/styles/gender.styles'
import { useUserDetailsStore } from '@/store/create-user-details'

export default function Gender() {
  const { gender, setGender } = useUserDetailsStore()

  const GENDERS = ['MALE', 'FEMALE'];

  return (
    <View style={UniStyles.container}>
      <View style={styles.upper}>
        <CustomText
          variant='h0'
          style={styles.title}
          fontFamily='ManropeBold'>
          Which gender best describes you?
        </CustomText>
        <CustomText
          variant='h7'
          fontFamily='PoppinsLight'
          style={styles.desc}>
          We match daters using three broad gender groups.
        </CustomText>
        <View style={styles.selectGenderContainer}>
          <RadioButton.Group
            onValueChange={(value) => setGender(value as 'MALE' | 'FEMALE')}
            value={gender}>
            {
              GENDERS.map((gender, i) => {
                return (
                  <RadioButton.Item
                    key={i}
                    labelVariant='bodyMedium'
                    labelStyle={styles.genderLabel}
                    color={Colors.primary}
                    style={styles.genderBlock}
                    label={gender}
                    value={gender}
                  />
                );
              })
            }
          </RadioButton.Group>
        </View>
      </View>
      <View style={styles.helperContainer}>
        <CustomText
          variant='h6'
          fontFamily='PoppinsLight'
          style={styles.helper}>
          Visible on your profile.
        </CustomText>
        <NextButton
          disabled={!gender}
          path={"/user/user-details/sexuality" as RelativePathString}
        />
      </View>
    </View>
  )
}