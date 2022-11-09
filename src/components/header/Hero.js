const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__container bd-grid">
                <div className="hero__mayday">
                    <img src="/img/img-main.png" alt="mayday" className="hero__img" />
                </div>
                <div className="hero__data">
                    <span className="hero__new">Catálogo 2022</span>
                    <h1 className="hero__title">
                        MAQUINAS E INSUMOS <br />
                        POR MAYOR Y MENOR
                    </h1>
                    <p className="hero__description">Explora nuestras mejores ofertas.</p>
                    <a href="#products-container" className="button">Explorar</a>
                </div>
            </div>
        </section>
    )
}

export default Hero