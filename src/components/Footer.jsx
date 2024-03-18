import instaPic from '../assets/Group.png'
import tag from '../assets/Tag.png'
import logo from '../assets/logo.png'

function Footer() {
    return (
        <>
            <div class="text-white flex flex-col sm:flex-row text-left md:justify-center p-8">
                <img class="hidden lg:block lg:mr-64" src={logo} style={{ width: '164px', height: '52px' }} alt="logo"></img>
                <div class="flex sm:mx-10 flex-col md:flex-row ">
                    <div class="flex flex-col md:pr-14">
                        <h1 class="text-lg font-bold md:pb-2">Kontakt</h1>
                        <p class="py-2 sm:py-6 md:pb-0">Gold Security d.o.o Podgorica</p>
                        <p>Telefon administracija</p>
                        <p>+382 67 154 839</p>
                        <p class="pt-2 sm:py-0">radno vrijeme:</p>
                        <p>ponedjeljak - petak 08:00 16:00</p>
                    </div>
                    <div class="flex flex-col md:py-9 md:px-4 sm:py-6">
                        <p class="pt-2 sm:pt-0 md:pt-6">Telefon operativnog centra</p>
                        <p>068 831 433</p>
                        <p class="pt-2 sm:pt-0">radno vrijeme:</p>
                        <p>ponedjeljak-nedjelja 00:00 24:00</p>
                    </div>
                </div>
                <div class="flex flex-col sm:py-11 md:px-4 md:pt-14">
                    <p class="py-2 sm:pb-6">info@goldsecurity.me</p>
                    <p class='pb-4'>PIB: 03280799</p>
                    <img src={instaPic} alt="instaPic" style={{ width: '20px', height: '20px' }}></img>
                </div>
            </div>
            <hr class="mx-4 my-12 sm:mx-8 md:mx-16 hidden md:block" style={{ color: 'rgb(85, 79, 79)' }} />
            <img class="px-16 mb-6 md:mx-auto hidden sm:block" src={tag} alt="tag.img" />
        </>
    );
}

export default Footer