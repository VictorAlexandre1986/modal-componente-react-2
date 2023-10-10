import React from 'react'
import "./Modal.css"


const Modal = (props) => {
  if(props.isOpen){
  return (
    <div className='modal-container' onClick={(event) => { if(event.target.className === "modal-container") { props.onClose('O model foi fechado')}}}>
        <div className='modal'>
            <div className='modal-header'>
                <p className='close' onClick={()=>{ props.onClose('O model foi fechado')}}>X</p>
            </div>
            <div className='modal-content'>
                {props.children}
            </div>
            <div className='modal-footer'>
                <button className='btn btn-submit' onClick={() => { props.onSubmit('Excluido com sucesso')}}>Sim</button>
                <button className='btn btn-cancel' onClick={() => { props.onCancel('Cancelado')}}>Não</button>
            </div>
        </div>
    </div>
  )
}
}

export default Modal
// import React from 'react'
// import "./Modal.css"


// const Modal = (props) => {
//   return (
//     <div className='-container' onClick={(event) => { if(event.target.className === "modal-container") { props.onClose('O model foi fechado')}}}>
//         <div className='modal'>
//             <div className='modal-header'>
//                 <p className='close' onClick={()=>{ props.onClose('O model foi fechado')}}>X</p>
//             </div>
//             <div className='modal-content'>
//                 <h1>Deseja realmente excluir esse registro ?</h1>
//             </div>
//             <div className='modal-footer'>
//                 <button className='btn btn-submit' onClick={() => { props.onSubmit('Excluido com sucesso')}}>Sim</button>
//                 <button className='btn btn-cancel' onClick={() => { props.onCancel('Cancelado')}}>Não</button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Modal