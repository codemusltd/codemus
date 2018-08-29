import {LogIn} from './LogIn.jsx';
import {Nav} from './Nav.jsx';
import {SectionContainer} from './SectionContainer.jsx'
    
class Container extends React.Component {
  render() {
    return (
    	    <div id={container}>
                <LogIn />
                <Nav id='topNav' />
                <SectionContainer />
                <Nav id='bottomNav' />
           </div>
    );
  }
}

ReactDOM.render(
                     <Container />, document.getElementById('container')
 );