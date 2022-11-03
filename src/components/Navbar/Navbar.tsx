import React from 'react'
import '../../../src/App.css'
import Modal from 'react-modal';

import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import Card from '../Card/Card';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
//Modal.setAppElement('#yourAppElement');
function Navbar() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

 

  function closeModal() {
    setIsOpen(false);
  }
const ordersArray= useAppSelector((state) => state.orders.orders)

const sum = ordersArray.reduce((accumulator, curr) => {
  return accumulator + curr.amount;
}, 0);


  return (
    <div className='navbar'>
        <h1>LOGO</h1>
        <div className='cardbtn' onClick={openModal}>Your Card <span>{sum}</span></div>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
     <Card />
      </Modal>
    </div>
  )
}

export default Navbar