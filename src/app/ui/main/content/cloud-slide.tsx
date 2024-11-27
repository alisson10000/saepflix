import Image from "next/image"

export default function CloudSlide() {
    return (
        <>
            {/* CLOUD SLIDE SECTION */}
            <div className="section">
                <div className="hero-slide-item">
                    <Image src="/slides/cloud.webp" alt="Lógica de Nuvem" width={1920} height={1080}/>
                        <div className="overlay"></div>
                        <div className="hero-slide-item-content">
                            <div className="item-content-wraper">
                                <div className="item-content-title">
                                    Nuvem
                                </div>
                                <div className="movie-infos">
                                    <div className="movie-info">
                                        <i className="bx bxs-star"></i>
                                        <span>9.5</span>
                                    </div>
                                    <div className="movie-info">
                                        <i className="bx bxs-time"></i>
                                        <span>120 mins</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>HD</span>
                                    </div>
                                    <div className="movie-info">
                                        <span>Lógica</span>
                                    </div>
                                </div>
                                <div className="item-content-description">
                                    A computação em nuvem oferece servidores virtuais para armazenamento e processamento de dados, eliminando a necessidade de infraestrutura física.
                                    Isso proporciona escalabilidade, segurança e alta disponibilidade, impulsionando a inovação em diversas áreas tecnológicas.
                                </div>
                                <div className="item-action">
                                    <a href="#" className="btn btn-hover">
                                        <i className="bx bxs-right-arrow"></i>
                                        <span>Assistir Agora</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            {/* END CLOUD SLIDE SECTION */}
        </>
    )
}