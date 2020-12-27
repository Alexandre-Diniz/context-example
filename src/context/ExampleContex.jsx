import React, { useState } from 'react'

// cria um contexto com um objeto e uma funcao, ambos vazios

const AnyContext = React.createContext([{}, () => {}])
// cria um componente para manipular o estado do contexto, enviando para os ramos da arvore
const AnyProvider = (props) => {
  const [state, setState] = useState({name:'alexandre'})
  return (// qualquer children pode acessar o state e setState
    <AnyContext.Provider value={[state, setState]}>
      {props.children}
    </AnyContext.Provider>
  );
}

export { AnyContext, AnyProvider }