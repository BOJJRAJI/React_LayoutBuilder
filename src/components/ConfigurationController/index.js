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

      return (
        <div className="header-container">
          <h1 className="controller-heading">Layout</h1>
          <div>
            <input
              checked={showContent}
              onChange={onToggleShowContent}
              id="content"
              type="checkbox"
              className="input"
            />
            <label htmlFor="content" className="label">
              Content
            </label>
          </div>
          <div>
            <input
              checked={showLeftNavbar}
              onChange={onToggleShowLeftNavbar}
              id="leftNavbar"
              type="checkbox"
              className="input"
            />
            <label htmlFor="leftNavbar" className="label">
              Left Navbar
            </label>
          </div>
          <div>
            <input
              checked={showRightNavbar}
              onChange={onToggleShowRightNavbar}
              id="rightNavbar"
              type="checkbox"
              className="input"
            />
            <label htmlFor="rightNavbar" className="label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
