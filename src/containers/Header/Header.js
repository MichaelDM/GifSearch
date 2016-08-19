import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { signOutUser } from '../../actions/authActions';

class Header extends Component {

  get handleSignout() {
    return this.props.dispatch(signOutUser());
  }

  renderAuthLinks() {
    if (!this.props.authenticated) {
      return [ //why are we returning an array? Because we would need to enclose within a div or a ul (redundant), so for cleaner markup put them in an object and add keys
        <li className="nav-item" key={1}>
          <Link className="nav-link" to="/login">Login</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ];
    } else {
      return [
        <li className="nav-item" key={1}>
        <Link className="nav-link" to="/favorites">My Favorites</Link>
        </li>,
        <li className="nav-item" key={2}>
        <a className="nav-link" href="/" onClick={() => this.handleSignout}>Sign Out</a>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">Search For GIFS</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            {this.renderAuthLinks()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated};
}

export default connect(mapStateToProps)(Header);
