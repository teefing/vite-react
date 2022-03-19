function App() {
  const [count, setCount] = useState(0)

  return (
    <div onClick={() => setCount(count + 1)} className="w-screen h-screen text-20 text-red-300 flex justify-center items-center">
      <text className="text-[50px] select-none" >Day {count}</text>
    </div>
  )
}

export default App
