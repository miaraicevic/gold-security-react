import newsPic from '../assets/News.png'
import profilePic from '../assets/Profile.png'
import locationPin from '../assets/locationPin.png'
import shiledPic from '../assets/Shield.png'
import isomodePic from '../assets/Isolation_Mode.png'
import React from 'react'
import InfoBox from './InfoBox.jsx'
import ServiceBox from './ServiceBox.jsx'


function MainContent() {

    return (
        <>
            <div class="py-8 px-8">
                <div class="flex flex-col lg:flex-row items-center lg:px-16 pb-12">
                    <div class="flex flex-col items-center my-2 mx-8 lg:w-1/2">
                        <img src={isomodePic} class="hidden md:block" alt="Extra Image" />
                        <h1 class="py-4 font-bold text-3xl" style={{ letterSpacing: '2px', color: 'rgb(237, 196, 94)' }}>GOLD SECURITY</h1>
                        <h2 class="py-4 text-white text-4xl font-bold" style={{ letterSpacing: '2px' }}> Siguran saveznik </h2>
                        <p class="py-4 text-white text-2xl pb-12">Vaša pouzdana na podrška u zaštiti imovine i osiguranju bezbijednosti.</p>
                    </div>
                    <div class="rounded text-white font-sans text-left lg:w-1/2" style={{ backgroundColor: 'rgb(37, 34, 34)' }}>
                        <h1 class="text-3xl font-bold pt-5 text-left pl-8">Kontakt podaci</h1>
                        <ul class="lista list-none ml-12 mr-20 py-5">
                            <li class="py-4">
                                <span class="font-bold block sm:inline pl-2"> Gold Security d.o.o</span> Nikšić, Stojana Kovačevića bb
                            </li>
                            <li class="py-4">
                                <span class="block sm:inline pl-2">Telefon administracije:</span><span class="font-bold "> +382 67 154 839</span>
                                <span class="block">radno vrijeme:
                                    <span class="font-bold block sm:inline">ponedjeljak - petak 08:00 16:00</span>
                                </span>
                            </li>
                            <li class="py-4">
                                <span class="block sm:inline pl-2">Telefon operativnog centra</span><span class="font-bold"> 068 831 433</span>
                                <span class="block">radno vrijeme:
                                    <span class="font-bold block sm:inline">ponedjeljak - nedjelja 00:00 24:00</span>
                                </span>
                            </li>
                            <li class="pt-4 pl-2 pb-2"> info@goldsecurity.me</li>
                        </ul>
                    </div>
                </div>
                <hr class="m-4 sm:mx-6 md:mx-12" style={{ color: 'rgb(85, 79, 79)' }} />
                <div class="flex flex-col sm:flex-row mx-4 justify-center pt-12">
                    <InfoBox imageUrl={newsPic} text="Osnovano 2019. godine" />
                    <InfoBox imageUrl={profilePic} text="Oko 100 radnika" />
                    <InfoBox imageUrl={locationPin} text="Poslovanje na teritoriji Crne Gore" />
                    <InfoBox imageUrl={shiledPic} text="Osnovna djelatnost privatnog obezbjeđenja" />
                </div>
                <h1 class="text-center text-white text-4xl font-bold mt-16 mb-6">Usluge</h1>
                <div>
                    <div class="flex flex-col lg:flex-row justify-center">
                        <ServiceBox
                            title="Fizička zaštita"
                            description="Specijalizovani smo za pružanje visokog standarda fizičke zaštite klijenata na teritoriji Crne Gore. Naš tim čine licencirani profesionalci koji kontinuirano prolaze internu obuku kako bi osigurali najviši nivo usluge."
                        />
                        <ServiceBox
                            title="Tehnička zaštita"
                            description="Radimo savjetovanje i planiranje, kao i instalaciju i održavanje električnih, mehaničkih i automatizovanih sistema zaštite. Naša kompanija posjeduje licencu za projektovanje instalacija niske struje, kao što su video sistemi, sistem strukturalnih kablova, protivprovalni i protivpožarni sistemi."
                        />
                        <ServiceBox
                            title="Monitoring centar"
                            description="Jedna smo od tehnički opremljenijih firmi koje se bave poslovima zaštite, posjedujemo savremeni monitoring centar, sa najpouzdanijim softverskim rješenjima i video zidom za lakše praćenje kamera."
                        />
                    </div>
                    <div class="flex flex-col lg:flex-row justify-center">
                        <ServiceBox
                            title="Obezbeđenje stvari u transportu"
                            description="Posjedujemo tim za pružanje usluga obezbjeđenja stvari u transportu, prevoz novca i opsluživanje bankomata."
                        />
                        <ServiceBox
                            title="Izrada planova zaštite"
                            description="Posjedujemo tim za pružanje usluga izrade planova zaštite. Članovi tima su radili na izradi planova obavezno štićenih objekata, Leketroprivrede Crne Gore, Jugopetrola, CEDISA-a, Adriatic Marinasa, Lustice development i mnogih drugih."
                        />
                        <div class="hidden lg:block lg:w-1/3"></div>
                    </div>
                </div>
                <div class="text-white px-6 my-10 mx-auto sm:max-w-lg text-center">
                    <h2 class='text-3xl font-bold py-3'>Zašto mi?</h2>
                    <p class="py-3">Sa ozbiljnošću pristupano vašem zahtjevu i pružamo optimalnu kombinaciju svojih usluga sa ciljem da obezbijedimo visok nivo sigurnosti. Smatramo da se najviši standardi u bezbijednosti mogu postići isključivo uz stručan i obučen kadar postavljen na odgovarajuće mjesto.</p>
                    <p class="py-3"><span>Misija naše kompanije</span>je da kroz implementaciju osnovnih principa i vrijednosti poslovanja promijenimo način na koji se posmatra sektor privatne zaštite. Naši principi su briga o zaposlenima, timski rad i efikasnost u radu. Osnovne vrijednosti kojima se vodimo su integritet, povjerenja kao polazna tačna za izgradnju odnosa sa klijentima i zaposlenima i odgovornost za sve postupke i odluke.</p>
                </div>
                <div class='text-white my-16 mx-10'>
                    <h2 class='text-3xl font-bold pb-6'>Neki od naših klijenata</h2>
                    <ul class="flex flex-col sm:flex-row justify-center">
                        <div class="sm:px-8 flex flex-col lg:flex-row">
                            <div class="flex flex-col lg:px-8">
                                <li class="my-4">Adriatic Properties Sveti Stefan</li>
                                <li class="my-4">PM hotels - Hotel Regent Tivat</li>
                                <li class="my-4">Adriatic Properties Sveti Stefan</li>
                                <li class="my-4">Adriatic Properties Sveti Stefan</li>
                            </div>
                            <div class="flex flex-col">
                                <li class="my-4">Adriatic Properties Sveti Stefan</li>
                                <li class="my-4">Adriatic Properties Sveti Stefan</li>
                                <li class="my-4">Adriatic Properties Sveti Stefan</li>
                                <li class="my-4">Adriatic Properties Sveti Stefan</li>
                            </div>
                        </div>
                        <div class="flex flex-col lg:flex-row">
                            <div class="flex flex-col">
                                <li class="my-4">Adriatic Properties Sveti Stefan</li>
                                <li class="my-4">Adriatic Properties Sveti Stefan</li>
                                <li class="my-4">Adriatic Properties Sveti Stefan</li>
                                <li class="my-4">PM hotels - Hotel Regent Tivat</li>
                            </div>
                            <div class="flex flex-col lg:px-8">
                                <li class="my-4">PM hotels - Hotel Regent Tivat</li>
                                <li class="my-4">PM hotels - Hotel Regent Tivat</li>
                                <li class="my-4">PM hotels - Hotel Regent Tivat</li>
                                <li class="my-4">PM hotels - Hotel Regent Tivat</li>
                            </div>
                        </div>
                    </ul>
                </div >
                <hr class="mx-4 sm:mx-8" style={{ color: 'rgb(85, 79, 79)' }} />
            </div >
        </>
    );
}

export default MainContent