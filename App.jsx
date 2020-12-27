import React, { createContext, useContext, useState, useEffect } from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'
import Teste from './src/Teste'

import { AnyProvider } from './src/context/ExampleContex'

export default function App(){
  return (
    <AnyProvider>
      <Teste/>
    </AnyProvider>
  )
}