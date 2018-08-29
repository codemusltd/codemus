// const idlogIn = {
//   background: '#2E3132',
//   height: '20%'
// };

// const classlogIn = {
//   height: '60%',
//   border: 'solid silver',
//   fontFamily:'' ,
//   fontSize: '1.5em',
//   fontVariant: 'small-caps',
//   color: 'white'
  
// };

// const idcodemus = {
//   width: '20%',
//   float: 'left'
  
// };

// const idvisitor = {
//   width: '10%',
//   float: 'right'
// };

// const idclient = {
//   width: '10%',
//   float: 'right'
// };

// const inputTypeButton = {
//     background: '#4CAF50',
//     border: 'solid 2px silver',
//     color: 'white',
//     width: '80%',
//     textDecoration: 'none',
//     margin: '4px 2px',
//     cursor: 'pointer'
// };

// const inputTypeSubmit = inputTypeButton;



export class LogIn extends React.Component {
  render() {
    return (
    	    <div id='logIn'>
            <div id='codemus' className='logIn'>
                <p id='compName'>
                  <img id='compLogo' src='' alt='logo'/>codemus ltd&reg;
                </p>
            </div>
        <div id='visitor' className='logIn'>
                <p id='visitor'>
                visitor<br/>
                <a href="#inquire"><input type='button'value='log in'/></a>
                </p>
        </div>
            <div id='client' className='logIn'>
                <p id='client'>
                  client<br/><input type='button'value='log in'/>
                </p>
            </div>
        </div>
    );
  }
}

