const content =['About_Codemus','Talk_to_Codemus','Link-Up_with_Codemus','Contact_Codemus', 'Inquire']; //each element reps content for each section

const sectionName = ['About_Codemus','Talk_to_Codemus','Link-Up_with_Codemus','Contact_Codemus', 'Inquire'];
const sections = sectionName.map((sexion, i) => {
                                            return	(
                                                        <section key={i.toString()}  className='section' id={sexion} name ={sexion}>
                                                            <article>
                                                                <h3>{content[i]}</h3>
                                                                <p>{content[i]}</p>
                                                                <p>{content[i]}</p>
                                                                <p>{content[i]}</p>
                                                            </article>
                                                        </section>
                                                 )
                                            });
                                            
class SectionContainer extends React.Component {
  render() {
    return (
        <div id='sectionContainer'>{sections}</div>

    );
  }
}





