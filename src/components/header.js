import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fc9403`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        marginLeft: `3rem`,
        marginRight: `3rem`,
        maxWidth: 960,
        padding: `1.45rem 0rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `The drink powered blogathon`,
}

export default Header
