import Image from "next/image";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function PrimarySlide() {
    return (
        <>
            {/* HERO SECTION */}
            <div className="hero-section">
                {/* HERO SLIDE */}
                <div className="hero-slide">
                    <div className="owl-carousel carousel-nav-center" id="hero-carousel">
                        {/* SLIDE ITEM */}
                        <div className="hero-slide-item">
                            <Image src="/slides/programming-code-backend.jpg" alt="Black Panther" width={1920} height={1080} />
                            <div className="overlay"></div>
                            <div className="hero-slide-item-content">
                                <div className="item-content-wraper">
                                    <div className="item-content-title top-down">
                                        Back-End
                                    </div>
                                    <div className="movie-infos top-down delay-2">
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
                                            <span>Desenvolvimento</span>
                                        </div>
                                    </div>
                                    <div className="item-content-description top-down delay-4">
                                        O desenvolvimento Back End se concentra na parte não visível de sites e aplicativos, gerenciando servidores, bancos de dados e lógica de negócios.
                                        Usando linguagens como Python, Java ou Node.js, os desenvolvedores constroem sistemas robustos que suportam a funcionalidade dos Front Ends.
                                    </div>
                                    <div className="item-action top-down delay-6">
                                        <a href="#" className="btn btn-hover">
                                            <i className="bx bxs-right-arrow"></i>
                                            <span>Assistir Agora</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END SLIDE ITEM */}
                        {/* SLIDE ITEM */}
                        <div className="hero-slide-item">
                            <Image src="/slides/programming-code-frontend.jpg" alt="Supergirl" width={1600} height={900} />
                            <div className="overlay"></div>
                            <div className="hero-slide-item-content">
                                <div className="item-content-wraper">
                                    <div className="item-content-title top-down">
                                        Front-End
                                    </div>
                                    <div className="movie-infos top-down delay-2">
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
                                            <span>Desenvolvimento</span>
                                        </div>
                                    </div>
                                    <div className="item-content-description top-down delay-4">
                                        O desenvolvimento Front End trata da criação de interfaces de usuário para sites e aplicativos da web.
                                        Utilizando tecnologias como HTML, CSS e JavaScript, os desenvolvedores criam layouts e interatividade visíveis aos usuários.
                                    </div>
                                    <div className="item-action top-down delay-6">
                                        <a href="#" className="btn btn-hover">
                                            <i className="bx bxs-right-arrow"></i>
                                            <span>Watch now</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END SLIDE ITEM */}
                        {/* SLIDE ITEM */}
                        <div className="hero-slide-item">
                            <Image src="/slides/network.jpg" alt="Wanda Vision" width={1920} height={1080} />
                            <div className="overlay"></div>
                            <div className="hero-slide-item-content">
                                <div className="item-content-wraper">
                                    <div className="item-content-title top-down">
                                        Rede
                                    </div>
                                    <div className="movie-infos top-down delay-2">
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
                                    <div className="item-content-description top-down delay-4">
                                        A lógica de redes engloba os princípios de comunicação entre dispositivos em uma rede. Isso inclui compreender protocolos como TCP/IP, HTTP e conceitos
                                        como roteamento, comutação e segurança para projetar e manter redes eficientes.
                                    </div>
                                    <div className="item-action top-down delay-6">
                                        <a href="#" className="btn btn-hover">
                                            <i className="bx bxs-right-arrow"></i>
                                            <span>Watch now</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* END SLIDE ITEM */}
                    </div>
                </div>
                {/* END HERO SLIDE */}
            </div>
            {/* END HERO SECTION */}
        </>
    );
}
