// const idTopNav = {
//     background: '#2E3132',
//     height: '5%'
//   };
  
//   const idBottomNav = idTopNav;
  
//   const classNavLinks= {
//      listSstyleType: 'none',
//       display: 'inline-block',
//       width: '20%',
//       marginleft: '4%',
//       margintop: '1em'
//     };
  
//   const liGTa = {
//       textDecoration: 'none',
//       background: 'grey',
//       color: 'white',
//       border: 'solid 1px',
//       borderRadius: '0.15em'	
//   }
  
const navLinks = ['About Codemus','Talk to Codemus','Link-Up with Codemus','Contact Codemus'];
const linkName = ['About_Codemus','Talk_to_Codemus','Link-Up_with_Codemus','Contact_Codemus'];
const links = navLinks.map((link, i) => {
    return	<li key={i.toString()}  className='navLinks'>
                <a href={'#'+linkName[i-1]}>{link}</a>
            </li>;
    });
    
export class Nav extends React.Component {

    render() {
        return (
                <div id={this.props.id}>
                    <ul>{links}</ul>
                </div>
            );
    }
}


