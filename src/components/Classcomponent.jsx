import React from 'react';
import './style.css';

// Class component representing a section with information about learning to code
class ClassComponent extends React.Component {
    // Render method to define the component's UI
    render() {
        return (
            <div className='class-container'>
                {/* Heading section */}
                <div className='heading'>
                    <p>Learn to Code by watching others</p>
                </div>

                {/* Paragraph section */}
                <div className='para'>
                    <p>
                        See how experienced developers solve problems in real-time. 
                        Watching scripted tutorials is great, but understanding 
                        how developers think is invaluable.
                    </p>
                </div>
            </div>
        );
    }
}

// Exporting the ClassComponent for use in other parts of the application
export default ClassComponent;
