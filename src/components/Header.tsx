import { View, Text } from 'react-native'
import React, { type FC } from 'react'

const Header: FC = () => {
  return (
    <View className="items-center justify-center gap-8 px-4 py-8">
      <Text className="text-5xl tracking-wide">РосМорПорт</Text>
      <Text className="uppercase text-2xl tracking-wide">СЗ-503</Text>
    </View>
  )
}

export default Header;