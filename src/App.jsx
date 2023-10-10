import {useState} from 'react'
import './App.css'
import Modal from './components/Modal/Modal'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleButtonClick = (value) => {
    setModalOpen( !modalOpen )
    setMessage( value )
  }


  return (
    <div className='App'>
    
      {message}
    
      <button className='btn btn-open' onClick={() => { setModalOpen(modalOpen =>{ return !modalOpen}) }}>Abrir</button>
    
      <Modal onSubmit={handleButtonClick} onCancel={handleButtonClick} onClose={handleButtonClick} isOpen={modalOpen}>
      <h1>Deseja realmente excluir esse registro ?</h1>
      </Modal>
            
    </div>
  )
}

export default App