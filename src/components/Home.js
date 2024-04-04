import React from 'react';
import AddNote from './AddNotes';
import Notes from './Notes';

const Home = (props) => {
  
    const {showAlert} = props;

    return (
        <div style={{"backgroundColor": "#292929", "width" : "80%", "marginTop": "20px"}}>
        <AddNote showAlert={showAlert}/>

            <div className="container" style={{ "width": "80%", "color" : "whitesmoke" }}>
                <Notes showAlert={showAlert}/>   
            </div>
        </div>
    )
}

export default Home;
