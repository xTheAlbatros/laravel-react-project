import { useState } from 'react';
import './bootstrap.min.css'
import './dashboard.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


function Dashboard() {
    // Przykład użycia useState, jeśli potrzebujesz lokalnego stanu
    const [count, setCount] = useState(0);

    var splide = new Splide( '.splide', {
        type   : 'loop',
        perPage: 3,
        focus  : 'center',
    } );

    //splide.mount();

    return (
        <div>
            {/* dahsboard */}
            <div class="weekly-offers">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 offset-lg-3">
                            <div class="section-heading text-center">
                                <h2>Świat Filmu i Seriali w Twoim Zasięgu!</h2>
                                <p>Witaj w FanBase - Twoim centrum filmowych i serialowych doznań! Przygotuj się na niezwykłą podróż przez fascynujący świat kinematografii, gdzie magia ekranu ożywa. CineMania to miejsce, gdzie pasja i emocje spotykają się w jednym miejscu. Nasza strona internetowa oferuje niezliczone możliwości dla fanów filmów i seriali. Od najnowszych premier po klasyki kina, od epickich sag po krótkometrażowe arcydzieła - tutaj znajdziesz wszystko, czego dusza kinomaniaka zapragnie.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects */}
            <section class="projects-section bg-light" id="projects">
                <div class="container px-4 px-lg-5">

                    <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                        <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="/src/assets/images/Oscary.jpg" alt="..." /></div>
                        <div class="col-xl-4 col-lg-5">
                            <div class="featured-text text-center text-lg-left">
                                <h4>Oscary 2023 - 95. gala</h4>
                                <p>95. ceremonia wręczenia Oscarów za rok 2022 odbyła się 12 marca 2023 w Dolby Theatre w Los Angeles. Najwięcej nominacji otrzymał film Wszystko wszędzie naraz (11 nominacji), a na drugim miejscu pod względem liczby nominacji uplasowały się filmy Na Zachodzie bez zmian i Duchy Inisherin (po 9 nominacji)</p>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div class="col-lg-6"><img class="img-fluid" src="/src/assets/images/na_zachodzie.jpg" alt="..." /></div>
                        <div class="col-lg-6">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 class="text-white">Na zachodzie bez zmian</h4>
                                        <p class="mb-0 text-white-50">to porywająca opowieść o młodym niemieckim żołnierzu na froncie zachodnim podczas I wojny światowej. Paul i jego towarzysze na własnej skórze doświadczają, jak początkowa euforia wojny przemienia się w desperację i strach, gdy walczą w okopach o swoje życie. Film w reżyserii Edwarda Bergera jest oparty na znanej na całym świecie powieści Ericha Marii Remarque’a pod tym samym tytułem.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 justify-content-center">
                        <div class="col-lg-6"><img class="img-fluid" src="/src/assets/images/joker.jpg" alt="..." /></div>
                        <div class="col-lg-6 order-lg-first">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 class="text-white">Joker</h4>
                                        <p class="mb-0 text-white-50">historia jednego z cieszących się najgorszą sławą superprzestępców uniwersum DC — Jokera. Przedstawiony przez Phillipsa obraz śledzi losy kultowego czarnego charakteru, człowieka zepchniętego na margines. To nie tylko kontrowersyjne studium postaci, ale także opowieść ku przestrodze w szerszym kontekście.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div class="col-lg-6"><img class="img-fluid" src="/src/assets/images/diuna.jpg" alt="..." /></div>
                        <div class="col-lg-6">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 class="text-white">Diuna</h4>
                                        <p class="mb-0 text-white-50">opowiada historię niezwykłej, pełnej przygód i emocji podróży Paula Atreidesa. Temu genialnemu i utalentowanemu młodemu człowiekowi pisane jest wspaniałe przeznaczenie, którego on sam nie jest w stanie pojąć. Najpierw jednak Paul musi się udać na najbardziej niebezpieczną planetę we wszechświecie, żeby ratować rodzinę i rodaków.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row gx-0 justify-content-center">
                        <div class="col-lg-6"><img class="img-fluid" src="/src/assets/images/avatar.jpg" alt="..." /></div>
                        <div class="col-lg-6 order-lg-first">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 class="text-white">Avatar: Istota Wody</h4>
                                        <p class="mb-0 text-white-50">Akcja filmu "Avatar: Istota wody" rozgrywa się ponad dziesięć lat po wydarzeniach z pierwszej części. To opowieść o rodzinie Jake'a i Neytiri oraz ich staraniach, by zapewnić bezpieczeństwo sobie i swoim dzieciom, mimo tragedii, których wspólnie doświadczają i bitew, które muszą stoczyć, aby przeżyć.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="slajder">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="section-heading text-center">
                                <h2>Wybierz swój ulubiony serial!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row gx-0 justify-content-center slajder-bottom">
            <Splide options={
                {
                    type   : 'loop',
                    perPage: 3,
                    focus  : 'center',
                    width : 1200,
                    autoplay: true,
                    start: 0,
                    speed: 3000,
                }
            } aria-label="Series Images">
                <SplideSlide>
                    <img src="/src/assets/images/slajder_1.jpg" alt="The Mandalorian"/>
                    <div className="slide-caption">The Mandalorian</div>
                </SplideSlide>
                <SplideSlide>
                    <img src="/src/assets/images/slajder_2.jpg" alt="Obi-Wan Kenobi"/>
                    <div className="slide-caption">Obi-Wan Kenobi</div>
                </SplideSlide>
                <SplideSlide>
                    <img src="/src/assets/images/slajder_3.jpg" alt="Obi-Wan Kenobi"/>
                    <div className="slide-caption">Obi-Wan Kenobi</div>
                </SplideSlide>
                <SplideSlide>
                    <img src="/src/assets/images/slajder_4.jpg" alt="Obi-Wan Kenobi"/>
                    <div className="slide-caption">Obi-Wan Kenobi</div>
                </SplideSlide>
                <SplideSlide>
                    <img src="/src/assets/images/slajder_5.jpg" alt="Obi-Wan Kenobi"/>
                    <div className="slide-caption">Obi-Wan Kenobi</div>
                </SplideSlide>
                <SplideSlide>
                    <img src="/src/assets/images/slajder_6.jpg" alt="Obi-Wan Kenobi"/>
                    <div className="slide-caption">Obi-Wan Kenobi</div>
                </SplideSlide>
                <SplideSlide>
                    <img src="/src/assets/images/slajder_7.jpg" alt="Obi-Wan Kenobi"/>
                    <div className="slide-caption">Obi-Wan Kenobi</div>
                </SplideSlide>
                <SplideSlide>
                    <img src="/src/assets/images/slajder_8.jpg" alt="Obi-Wan Kenobi"/>
                    <div className="slide-caption">Obi-Wan Kenobi</div>
                </SplideSlide>
            </Splide>
            </div>
        </div>
    );
}

export default Dashboard;
