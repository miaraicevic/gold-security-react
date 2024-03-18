import headerPic from '../assets/Layer_1.png'
import headerPic2 from '../assets/Group 1.png'

function Header() {

    return (
        <div className="header flex items-center pt-4 pl-4 sm:ml-8 md:ml-16 lg:ml-32">
            <img src={headerPic} alt="layer"></img>
            <img src={headerPic2} alt="layer_2 "></img>
        </div>
    );
}

export default Header