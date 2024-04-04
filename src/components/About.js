import React from 'react';
// import { useContext, useEffect } from 'react';

// import noteContext from '../context/notes/NoteContext';

export default function About() {

  // const a = useContext(noteContext);

  // useEffect(() => {
  //   a.update() 
  // }, [])

  return (
    // <div>This is About {a.state.name} and {a.state.tag} is in {a.state.class}.</div>

    <div className='container'>
      <h2>Key features of iNotebook</h2>
      <div className='my-4'>
        <ul className='d-flex flex-column gap-3'>
          <li className='fs-5'>
            <span className='fw-bold'>Ease of Use: </span> The best note taking apps have an intuitive and user-friendly interface. You should be able to quickly jot down ideas, create lists, or record voice memos without navigating through complex menus or instructions.</li>
          <li className='fs-5'>
          <span className='fw-bold'>Sync Across Devices: </span>If you're using multiple devices (like a smartphone, tablet, and laptop), ensure the app can sync your notes across all of them. This way, you can access and update your notes from anywhere, at any time.
          </li>

          <li className='fs-5'> 
            <span className='fw-bold'>Security and Privacy: </span>Your notes may contain sensitive information. Ensure the app offers strong security features like end-to-end encryption and two-factor authentication.</li>
        </ul>
      </div>

      <h3 className='mt-5'>About me</h3>
      <div className='fs-6 pe-5'>
        I am Bindu Vekariya and i am created this iNotebook application to learn react functionality and boost my knowledge about MERN projects.
      </div>
    </div>
  )
}
