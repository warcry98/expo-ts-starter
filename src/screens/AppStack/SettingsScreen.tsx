import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { MainNavigationProp } from '../../routing/types'
import { MainRoutes } from '../../routing/routes'
import Settings from '../../components/demo/Settings'

type SettingsScreenProps = {
  navigation: MainNavigationProp<MainRoutes.Settings>
}

function SettingsScreen({ navigation }: SettingsScreenProps): React.ReactElement {
  return (
    <View style={styles.page}>
      <Text>SETTINGS</Text>
      <Settings />
      <Button title="back" onPress={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default SettingsScreen
