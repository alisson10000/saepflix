import Link from "next/link";
import NavFooter from "@/app/components/footer/nav-footer";
import SocialFooter from "@/app/components/footer/social-footer";

export default function Footer() {
    return (
        <footer className="py-20 relative bg-box-bg">
            <div className="px-4 md:container">
                <div className="row">
                    <div className="col-4 col-md-6 col-sm-12">
                        <div className="mt-5">
                            <div className="w-full max-w-150px">
                                <Link href="#" className="mt-footer-logo flex justify-start items-center text-logo-footer font-black" id="link_footer">
                                    <i className='bx bx-movie-play bx-tada text-main-color text-3xl'></i><span className="text-text-color">SAEP</span><span className="text-main-color">FLIX</span>
                                </Link>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut veniam ex quos hic id nobis beatae earum sapiente!
                                Quod ipsa exercitationem officiis non error illum minima iusto et. Dolores, quibusdam?
                            </p>
                            <SocialFooter />
                        </div>
                    </div>
                    <div className="col-8 col-md-6 col-sm-12">
                    <NavFooter />
                    </div>
                </div>
            </div>
        </footer>
    )
}