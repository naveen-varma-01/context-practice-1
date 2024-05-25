// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeRightNavbar = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="main-cont">
          <h1 className="layout">Layout</h1>
          <div>
            <input
              checked={showContent}
              type="checkbox"
              id="content"
              onChange={onChangeContent}
            />
            <label htmlFor="content" className="inp">
              Content
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="left"
              checked={showLeftNavbar}
              onChange={onChangeLeftNavbar}
            />
            <label htmlFor="left" className="inp">
              Left Navbar
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="right"
              checked={showRightNavbar}
              onChange={onChangeRightNavbar}
            />
            <label htmlFor="right" className="inp">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default ConfigurationController
