import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'

const Context = React.createContext({
  name: 'Default',
});
export const ContextProvider = Context.Provider

function App() {

  return (
    <Router>
      <ContextProvider value={{ name: 'App' }}>
        {/* <ErrorBoundary> */}
        <Routes>
          <Route path="/login" element={<>Hello</>} />
          <Route path="/register" element={<></>} />
        </Routes>
        {/* </ErrorBoundary> */}
      </ContextProvider>
    </Router>
  )
}

export default App
