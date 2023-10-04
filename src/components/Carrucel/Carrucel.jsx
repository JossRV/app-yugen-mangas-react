import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import "swiper/css/navigation";


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Carrucel() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                // centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false
                }}
                pagination={{
                    clickable: true
                }}
                // navigation={true}
                modules={[Autoplay, Pagination]}
                className="mySwiper rounded-4"
                style={{ height: "270px" }}
            >
                <SwiperSlide>
                {/* carrucel 1, se incluira cualquier contenido */}
                    <div style={{ position: 'absolute', width: "100%" }}>
                        <img src="/mujerMalvada.jpg" alt="" />
                    </div>
                    <div style={{ height: "100%", width: "100%", zIndex: 1, background:"linear-gradient(to top, #2E1437, #0000)" }} className='position-relative'>
                        <div style={{ height: "100%" }} className='position-absolute top-50 end-0 translate-middle-y'>
                            <img src="/mujerMalvada2.webp" alt="" />
                        </div>
                    </div>
                    <div className='container-fluid text-start mt-5' style={{ zIndex: 1, position: "absolute", height: "100%", marginTop:"150px"}}>
                        <div className="row mt-4">
                            <div className="col-lg-9">
                                <h3>
                                    <b>¿No Es Mucho Mejor Ser Una Mujer Malvada?</b>
                                </h3>
                                <button className='btn btn-dark mb-2'><b>18.9M</b></button>
                                <p className='text-center'>
                                    Poseia una villana que es conocida y odiada por sus actos malvados en una novela impopular.
                                    Pero debido a su personalidad, fue extremadamente dificil para ella interpretar el papel de villana.
                                    Pero no...
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* carrucel 2 */}
                    <div style={{ position: 'absolute', width: "100%" }}>
                        <img src="/protagonistaMasculino.jpg" alt="" />
                    </div>
                    <div style={{ height: "100%", width: "100%", zIndex: 1, background:"linear-gradient(to top, #00223E, #0000)" }} className='position-relative'>
                        <div style={{ height: "100%" }} className='position-absolute top-50 end-0 translate-middle-y'>
                            <img src="/protagonistaMasculino2.webp" alt="" />
                        </div>
                    </div>
                    <div className='container-fluid text-start mt-5' style={{ zIndex: 1, position: "absolute", height: "100%"}}>
                        <div className="row mt-4">
                            <div className="col-lg-9">
                                <h3>
                                    <b>Me Converti En La Esposa Del Protagonista Masculino </b>
                                </h3>
                                <button className='btn btn-dark mb-2'><b>29.3M</b></button>
                                <p className='text-center'>
                                    Posei el cuerpo de Fiona, la ultima villana cuya alma fue condenada 
                                    al sufrimiento eterno despues de su espantosa muerte a manos del
                                    heroe del mundo...
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {/* carrucel 3 */}
                    <div style={{ position: 'absolute', width: "100%" }}>
                        <img src="/soloLeveling2.jpg" alt="" />
                    </div>
                    <div style={{ height: "100%", width: "100%", zIndex: 1, background:"linear-gradient(to top, #161616,#161616, #0000)" }} className='position-relative'>
                        <div style={{ height: "100%" }} className='position-absolute top-50 end-0 translate-middle-y'>
                            <img src="/soloLeveling.png" alt="" />
                        </div>
                    </div>
                    <div className='container-fluid text-start mt-5' style={{ zIndex: 1, position: "absolute", height: "100%", marginTop:"150px" }}>
                        <div className="row mt-4">
                            <div className="col-lg-9">
                                <h3>
                                    <b>Nivelacion En Solitario</b>
                                </h3>
                                <button className='btn btn-dark mb-2'><b>8.8M</b></button>
                                <p className='text-center'>
                                    Hace 10 años, después de que &lt;&lt;La Puerta&gt;&gt; que conectaba el mundo real con el
                                    mundo de los monstruos se abriera, algunas de las personas recibieron el poder de cazar
                                    los monstruos que vivían al otro lado de esta...
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper >
        </>
    );
}
