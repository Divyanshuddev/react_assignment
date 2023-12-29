import './style.css';

// Functional component representing a subscription form
export default function Functioncomponent(){
    return(
        <div className='function-container'>
            <div className='try'>
                <h2>Try it free 7 days then $20/mo. thereafter</h2>
            </div>
            <div className='form'>
                <div className='item'>
                    <input type='text' placeholder='First Name' className='in'></input>
                </div>
                <div className='item'>
                <input type='text' placeholder='Last Name' className='in'></input>
                </div>
                <div className='item'>
                <input type='email' placeholder='Email Address' className='in'></input>
                </div>
                <div className='item'>
                <input type='password' placeholder='Password' className='in'></input>
                </div>
                <div>
                    <button className='button'>CLAIM YOUR FREE TRAIL</button>
                </div>
                <div>
                    <p style={{color:'gray'}}>By clicking the button you are argreeing to our <b style={{color:"red"}}>Terms and Services</b></p>
                </div>
            </div>
        </div>
    );
}