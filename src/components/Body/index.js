// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body-cont">
          {showLeftNavbar ? (
            <div className="left-cont">
              <h1 className="head">Left Navbar Menu</h1>
              <ul className="list">
                <li className="para">Item 1</li>
                <li className="para">Item 2</li>
                <li className="para">Item 3</li>
                <li className="para">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-cont">
              <h1 className="head">Content</h1>
              <p className="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                elusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-cont">
              <h1 className="head">Right Navbar</h1>
              <div className="ad-cont">
                <p className="para">Ad 1</p>
              </div>
              <div className="ad-cont">
                <p className="para">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
