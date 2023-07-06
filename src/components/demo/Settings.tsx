import React from 'react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator()

function TabOne() {
  return (
    <View>
      <Text>Tab One</Text>
    </View>
  )
}
function TabTwo() {
  return (
    <ScrollView>
      <Text />
      {Array(42)
        .fill('Tab Two')
        .map((text: string, index) => {
          const tabContent = `${text} (${index})`
          return <Text key={tabContent}>{tabContent}</Text>
        })}
    </ScrollView>
  )
}
function TabThree() {
  return (
    <View>
      <Text>Tab Three</Text>
    </View>
  )
}

function SettingTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="SettingsOne" component={TabOne} />
      <Tab.Screen name="SettingsTwo" component={TabTwo} />
      <Tab.Screen name="SettingsThree" component={TabThree} />
    </Tab.Navigator>
  )
}

function Settings(): React.ReactElement {
  return (
    <View style={styles.settingsBox}>
      <SettingTabs />
    </View>
  )
}

const styles = StyleSheet.create({
  settingsBox: {
    backgroundColor: '#ccc',
    width: 300,
    height: 500,
    borderWidth: 4,
    borderColor: '#000',
    borderRadius: 5,
  },
})

export default Settings
