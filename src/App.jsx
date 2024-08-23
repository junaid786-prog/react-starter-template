import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Page from "./pages/Page";

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
          <Route path="/" element={<>Hello</>} />
          <Route path="/page" element={<Page />} />
        </Routes>
        {/* </ErrorBoundary> */}
      </ContextProvider>
    </Router>
  )
}

export default App
