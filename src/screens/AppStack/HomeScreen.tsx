import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { MainNavigationProp } from '../../routing/types'
import { MainRoutes } from '../../routing/routes'
import { useReduxDispatch } from '../../redux'
import { setLogout } from '../../redux/ducks/user'

type HomeScreenProps = {
  navigation: MainNavigationProp<MainRoutes.Home>
}
function HomeScreen({ navigation }: HomeScreenProps): React.ReactElement {
  const dispatch = useReduxDispatch()
  const logoutHandler = () => dispatch(setLogout())

  return (
    <View style={styles.page}>
      <Text>HOME</Text>
      <Button title="logout" onPress={() => logoutHandler()} />
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

export default HomeScreen
