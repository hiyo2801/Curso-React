import { NavLink } from "react-router-dom"

const Footer = ({ menuLinks }) => {
    return (
        <footer className="footer section">
            <div className="footer__container bd-grid">
                <div className="footer__box">
                    <h3 className="footer__title">MayDays</h3>
                    <p className="footer__description">MayDays Collection</p>
                </div>

                <div className="footer__box">
                    <h3 className="footer__title">EXPLORAR</h3>
                    <ul>
                        {
                            menuLinks.map((element, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink to={element.url} className="footer__link">{element.name}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="footer__box">
                    <h3 className="footer__title">SOPORTE</h3>
                    <ul>
                        <li><a href="/" className="footer__link">Consulta por productos</a></li>
                        <li><a href="/" className="footer__link">Ayuda en la compra</a></li>
                        <li><a href="/" className="footer__link">Devoluciones y Reclamos</a></li>
                    </ul>
                </div>

                <div className="footer__box ">
                    <a href="https://instagram.com/maydays.ink?igshid=YmMyMTA2M2Y=" className="footer__social"><i className='bx bxl-facebook'></i></a>
                    <a href="https://instagram.com/maydays.ink?igshid=YmMyMTA2M2Y=" className="footer__social"><i className='bx bxl-instagram'></i></a>
                </div>
            </div>

            <p className="footer__copy">2022 &#169; <a href="https://www.linkedin.com/in/cacevedo/" target="_blank" rel="noreferrer">Cristian Acevedo</a>. All right reserved.</p>
        </footer>
    )
}

export default Footer