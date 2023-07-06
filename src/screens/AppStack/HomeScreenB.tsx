import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { MainNavigationProp } from '../../routing/types'
import { MainRoutes } from '../../routing/routes'

type HomeScreenProps = {
  navigation: MainNavigationProp<MainRoutes.Home>
}
function HomeScreenB({ navigation }: HomeScreenProps): React.ReactElement {
  return (
    <View style={styles.page}>
      <Text>Seection B</Text>
      <Button title="settings" onPress={() => navigation.navigate(MainRoutes.Settings)} />
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

export default HomeScreenB
