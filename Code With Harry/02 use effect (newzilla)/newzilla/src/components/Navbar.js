import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-light mb-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Newzilla</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link" aria-current="page" href="/home">Home</a>
                    <a className="nav-link" href="/sports">Sports</a>
                    <a className="nav-link" href="/politics">Politics</a>
                </div>
                </div>
            </div>
         </nav>
    )
  }
}

export default Navbar