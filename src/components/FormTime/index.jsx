export default function FormTime(){
  const handleSubmit = (event) =>{
    event.preventDefault()
  }
  return (
    <>
      <h2>set Time</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" />
        <button>establecer</button>
      </form>
    </>
  )
}