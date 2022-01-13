import './Menu.css'
import menu1 from './image.jpg'
import menu2 from './32.jpg'
import menu3 from './17-2.jpg'
import menu4 from './salmon.jpg'
import menu5 from './lamb.jpg'
import menu6 from './pork.jpg'

function Menu() {
    return (
      <> 
        <div className="menu-container">
          <div className="menu-text">
              <p className="text-menu">Menu</p>
          </div>

          {/* เริ่มเนื้อหา */}
          <div className="menu-box">
            <div className="menu-block">
              <img src={menu1} className="image-menu"/>
              <p className="text-block">Australian Black Angus Tenderloin</p>
            </div>
            <div className="menu-block block-space">
              <img src={menu2} className="image-menu"/>
              <p className="text-block">Black Angus Tomahawk</p>
            </div>
            <div className="menu-block block-space">
              <img src={menu3} className="image-menu"/>
              <p className="text-block">Live Lobsters Tagliatelle Pasta</p>
            </div>
          </div>
          <div className="menu-box menu-box-newline">
            <div className="menu-block">
              <img src={menu4} className="image-menu"/>
              <p className="text-block">Broil Salmon Steak</p>
            </div>
            <div className="menu-block block-space">
              <img src={menu5} className="image-menu"/>
              <p className="text-block">Lamb Chop Garlic & Herb</p>
            </div>
            <div className="menu-block block-space">
              <img src={menu6} className="image-menu"/>
              <p className="text-block">Kurobuta Pork Chop</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Menu;
  