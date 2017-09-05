import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google">Login With Google</a>
                    </li>
                );
            default:
                return [
                    <li key="1"><Payments /></li>,
                    <li key="2"><a href="/api/logout">Logout</a></li>
                ];
        }
    }

    render() {
        return (
            <header>
                <nav style={styles.navStyle}>
                    <div className="nav-wrapper container">
                        <Link
                            to={this.props.auth ? '/surveys' : '/'}
                            className="left brand-logo"
                        >
                            Emaily
                        </Link>
                        <ul className="right">{this.renderContent()}</ul>
                    </div>
                </nav>
            </header>
        );
    }
}

const styles = {
    navStyle: {
        backgroundColor: '#ff6600'
    }
};

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);
