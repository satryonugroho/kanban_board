import React, { useState } from "react"
import {AppContext} from './contexts'
import Routers from "./routers"

function App() {
  const [appContext, setAppContext] = useState(null)
  return (
    <AppContext.Provider value={{ appContext, setAppContext }} >
      <div className="h-screen">
        <Routers />
      </div>
    </AppContext.Provider>
  )
}

export default App
