import PrimarySlide from "@/app/ui/main/content/primary-slide";
import TopVideos from "@/app/ui/main/content/top-videos";
import FrontEnd from "@/app/ui/main/content/front-end";
import BackEnd from "@/app/ui/main/content/back-end";
import NetworkStructure from "@/app/ui/main/content/network-structure";
import CloudSlide from "@/app/ui/main/content/cloud-slide";
import CloudSection from "@/app/ui/main/content/cloud-section";

import Script from 'next/script';

export default function Main() {
    return (
        <>
            <PrimarySlide />
            <TopVideos />
            <FrontEnd />
            <BackEnd />
            <NetworkStructure />
            <CloudSlide />
            <CloudSection />

            {/* OWL CAROUSEL */}
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
                integrity="sha512-bPs7Ae6pVvhOSiIcyUClR7/q2OAsRiovw4vAkX+zJbw3ShAeeqezq50RIIcIURq7Oa20rW2n2q+fyXBNcU9lrw=="
                crossOrigin="anonymous"
                strategy="beforeInteractive"
            />
            <Script src="/js/main.js"/>
            <Script src="/js/owl-init.js" strategy="afterInteractive"/>
        </>
    )
}