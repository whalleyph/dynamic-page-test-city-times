function App() {
  const date = new Date()
  let hours = date.getHours()
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return (
    <>
      <p>The time in London is: {hours}:{minutes}</p>
    </>
  )
}

export default App
