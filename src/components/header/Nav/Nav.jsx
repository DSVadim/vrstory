import "./nav.scss"
function Nav(){
    return(
        <div className={'nav'}>
            <ul className={'nav__list'}>
                <li className={'nav__item'}><a className={'nav__link'}>Explore</a></li>
                <li className={'nav__item'}><a className={'nav__link'}>Resources</a></li>
                <li className={'nav__item'}><a className={'nav__link'}>Pricing</a></li>
            </ul>
        </div>
    )
}
export default Nav