import { Link } from "react-router-dom"

const Item = ({product}) => {
    return (
        <article className="mayday">
            {
                product.discount ? <div className="mayday__sale"> -{product.discount}% </div> : null
            }
            <img src={product.image} alt="imagen de producto" className="mayday__img" />
            <span className="mayday__name">{ product.name }</span>
            <span className="mayday__price">${ product.price.toFixed(2) }</span>
            <Link to={ `/product/${product.id}` } className="button-light">Comprar <i className='bx bx-right-arrow-alt button-icon'></i></Link>
        </article>
    )
}

export default Item