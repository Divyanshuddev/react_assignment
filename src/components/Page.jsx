// Importing the CSS file for styling
import './style.css';

// Importing the ClassicComponent and FunctionComponent
import ClassicComponent from './Classcomponent';
import FunctionComponent from './Functioncomponent';

// Defining the Page component
export default function Page() {
    // Rendering the main page component
    return (
        <div className='page'>
            {/* Rendering the ClassicComponent */}
            <ClassicComponent />  

            {/* Rendering the FunctionComponent */}
            <FunctionComponent />
        </div>
    );
}
