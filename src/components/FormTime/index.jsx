export default function FormTime ({ setTimerCreated }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    // setTimerCreated(true)
    console.log(event.target.value)
  }
  const handleChange = (event) => {
    console.log(event.target.value)
  }
  return (
    <>
      <h2>set Time</h2>
      <form onSubmit={handleSubmit}>
        <input type='date' onChange={handleChange} required />
        <button>establecer</button>
      </form>
    </>
  )
}
