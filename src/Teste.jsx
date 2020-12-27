import React, { useContext } from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'

import { AnyContext, AnyProvider } from './context/ExampleContex'

export default function({}){
  const [state, setState] = useContext(AnyContext)
  return(
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
      <Text>
        {state.name}
      </Text>
      <Button title='Press me' onPress={(state)=>{setState({...state,name:'Alexandre Diniz Dias'})}} />
    </View>
  )
}