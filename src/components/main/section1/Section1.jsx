import  Img from '../../../assets/section1.png'
import './section1.scss'
function Section1() {
    return (
        <section className={'section1'}>
            <div className={'section1-container'}>
                <div className={'section1-container-block'}>
                    <h1 className={'section1-container-block__title'}>Let’s Create Your Story Together!</h1>
                    <p className={'section1-container-block__text'}>Vr story is an interactive tool that makes it easy for
                        anyone to produce engaging digital experiences</p>
                    <div className={'section1-container-block-buttons'}>
                        <button className={'section1-container-block-buttons__btn1'}>Learn More</button>
                        <button className={'section1-container-block-buttons__btn2'}>Watch Demo</button>
                    </div>
                </div>
                <img className={'section1-container__img'} src={Img}/>
            </div>
        </section>
    )
}

export default Section1
