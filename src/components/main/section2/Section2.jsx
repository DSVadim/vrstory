import './section2.scss'
import Shape from '../../../assets/3D.png'
import Video from '../../../assets/video.png'
import  Logo1 from '../../../assets/logo1.png'
import  Logo2 from '../../../assets/logo2.png'
import  Logo3 from '../../../assets/logo3.png'
import  Logo4 from '../../../assets/logo4.png'
import  Logo5 from '../../../assets/logo5.png'
function Section2() {
    return (
        <section className={'section2'}>
            <div className={'section2-container'}>
                <p className={'section2-container__title'}>We Take Storytelling Seriously</p>
                <div className={'section2-container__video'}>
                <img className={'section2-container__video-img'} src={Video}/>
                </div>
                <div className={'section2-container-block'}>
                    <img className={'section2-container-block__img'} src={Shape}/>
                    <div className={'section2-container-block-texts'}>
                        <p className={'section2-container-block-texts__txt'}>Mixed Reality</p>
                        <p className={'section2-container-block-texts__txt'}>Storytelling</p>
                        <p className={'section2-container-block-texts__txt'}>360º Content</p>
                        <p className={'section2-container-block-texts__txt'}>Immersive Marketing</p>
                        <p className={'section2-container-block-texts__txt'}>Virtual Tours</p>
                        <p className={'section2-container-block-texts__txt'}>Augmented Reality<span className={'section2-container-block-texts__txt-span'}>(COMING SOON!)</span> </p>
                        <p className={'section2-container-block-texts__txt'}>Virtual Reality<span className={'section2-container-block-texts__txt-span'}>(COMING SOON!)</span></p>
                    </div>
                </div>
            </div>
            <div className={'section2-container2'}>
                 <img className={'section2-container2__logo'} src={Logo1}/>
                <img className={'section2-container2__logo'} src={Logo2}/>
                <img className={'section2-container2__logo'} src={Logo3}/>
                <img className={'section2-container2__logo'} src={Logo4}/>
                <img className={'section2-container2__logo'} src={Logo5}/>
            </div>
        </section>
    )
}

export default Section2
