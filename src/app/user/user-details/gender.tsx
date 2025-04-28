import { View } from 'react-native'
import CustomText from '@/components/ui/CustomText'
import { RelativePathString } from 'expo-router'
import { Colors } from '@/utils/Constants'
import { useState } from 'react'
import NextButton from '@/components/NextButton'
import { RadioButton } from 'react-native-paper';
import { UniStyles } from '@/styles/Styles'
import { genderStyles as styles } from '@/styles/gender.styles'

export default function Gender() {
  const [gender, setGender] = useState<string>('');

  const GENDERS = ['man', 'woman', 'non-binary'];

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
            onValueChange={value => setGender(value)}
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
        <NextButton path={"/user/user-details/sexuality" as RelativePathString} />
      </View>
    </View>
  )
}