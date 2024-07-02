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
          <Route path="/login" element={<></>} />
          <Route path="/register" element={<></>} />
        </Routes>
        {/* </ErrorBoundary> */}
      </ContextProvider>
    </Router>
  )
}

export default App
