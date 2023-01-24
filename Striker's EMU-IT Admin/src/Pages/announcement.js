import React, {Fragment } from 'react';
import { Link } from 'react-router-dom';

function Announcement(){
    return(
        <Fragment>
            <>
  <div className="se-pre-con" />
  <section>
    {/* sidebar menu start */}
    <div className="sidebar-menu sticky-sidebar-menu">
      {/* logo start */}
      <div className="logo">
      <h1>
          <li>
            <Link to="/"><span>EMU-IT</span></Link>
          </li>
        </h1>
      </div>
      <div className="logo-icon text-center"></div>
      {/* //logo end */}
      <div className="sidebar-menu-inner">
        {/* sidebar nav start */}
        <ul className="nav nav-pills nav-stacked custom-nav">
          <li className="">
          <Link to="/" >
              <i className="fa fa-tachometer" />
              <span> Dashboard</span>
              </Link>
          </li>
          <li>
          <Link to="/users" >
              <i className="fa fa-user" /> <span>Users</span>
           </Link>
          </li>
          <li>
          <Link to="/cafteria" >
              <i className="fa fa-calendar-o" /> <span>Cafteria</span>
           </Link>
          </li>
          <li className="menu-list">
           <Link to="/announcement">
              <i className="fa fa-bell-o" />
              <span>
                Announcement <i className="lnr lnr-chevron-right" />
              </span>
              </Link>
            <ul className="sub-menu-list">
              <li>
            <Link to="/addAnnoucement" >
              <i className="fa fa-bell-o" /> <span>Add</span>
           </Link>
           </li>
           <li>
          <Link to="/announcement" >
              <i className="fa fa-bell-o" /> <span>Announcement</span>
           </Link>       
           </li>
           </ul>
           </li>
           <li className="menu-list">
            <Link to="/register" >
              <i className="fa fa-question-circle" /> 
              <span>
                Sign <i className="lnr lnr-chevron-right" />
              </span>
           </Link>
            <ul className="sub-menu-list">
              <li>
              <Link to="/register" >
              <i className="" /> <span>Register</span>
           </Link>
              </li>
              <li>
              <Link to="/forgotpass" >
              <i className="" /> <span>Forgot Password</span>
           </Link>
              </li>
            </ul>
          </li>
        </ul>
        {/* //sidebar nav end */}
        {/* toggle button start */}
        <a className="toggle-btn">
          <i className="fa fa-angle-double-left menu-collapsed__left">
            <span>Collapse Sidebar</span>
          </i>
          <i className="fa fa-angle-double-right menu-collapsed__right" />
        </a>
        {/* //toggle button end */}
      </div>
    </div>
    {/* //sidebar menu end */}
    {/* header-starts */}
    <div className="header sticky-header">
      {/* notification menu start */}
      <div className="menu-right">
        <div className="navbar user-panel-top">
          <div className="search-box">
            <form action="#search-results.html" method="get">
              <input
                className="search-input"
                placeholder="Search Here..."
                type="search"
                id="search"
              />
              <button className="search-submit" value="">
                <span className="fa fa-search" />
              </button>
            </form>
          </div>
          <div className="profile_details">
            <ul>
              <li className="dropdown profile_details_drop">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  id="dropdownMenu3"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="profile_img">
                    <img
                      src="assets/img/profile.jpg"
                      className="rounded-circle"
                      alt=""
                    />
                    <div className="user-active">
                      <span />
                    </div>
                  </div>
                </a>
                <ul
                  className="dropdown-menu drp-mnu"
                  aria-labelledby="dropdownMenu3"
                >
                  <li className="user-info">
                    <h5 className="user-name">John Deo</h5>
                    <span className="status ml-2">Available</span>
                  </li>
                  <li className="logout">
                  <Link to="/register" >
                   <i className="fa fa-power-off" /> <span>Register</span>
                 </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/*notification menu end */}
    <div className="main-content">
      {/* content */}
      <div className="container-fluid content-top-gap">
        <div className="mail-messages-view mt-md-0 mt-4">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <div className="card-heading pl-4 py-3">
                  <span className="fa fa-bell-o" aria-hidden="true" />
                  Notifications
                </div>
                <table className="table inbox-messages">
                  <tbody>
                    <tr>
                      <td>
                        <div className="inbox__grid">
                          <div className="inbox-main">
                            <strong>
                              <a href="">Post</a>
                            </strong>
                          </div>
                          <div className="cs-5">
                            <p>
                              <a href="inbox-message.html">
                                Nuisfieufiuedvchbiuhdeiu
                              </a>
                            </p>
                          </div>
                          <div className="time">
                            <h6>02:11</h6>
                          </div>
                          <nav className="navbar inbox-message-options p-0">
                            <div className="mail-right dots_drop">
                              <div className="dropdown open">
                                <a
                                  href="#"
                                  data-toggle="dropdown"
                                  aria-expanded="true"
                                >
                                  <i className="fa fa-ellipsis-v mail-icon" />
                                </a>
                                <ul className="dropdown-menu move-options inbox-message-dropdown float-right">
                                  <li>
                                    <a href="#" className="font-red" title="">
                                      <i className="fa fa-trash-o mail-icon" />
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="inbox__grid">
                          <div className="inbox-main">
                            <strong>
                              <a href="">Book</a>
                            </strong>
                          </div>
                          <div className="cs-5">
                            <p>
                              <a href="inbox-message.html">
                                Lorem ipsum dolor sit amet, consectetur.
                              </a>
                            </p>
                          </div>
                          <div className="time">
                            <h6>10:22</h6>
                          </div>
                          <nav className="navbar inbox-message-options p-0">
                            <div className="mail-right dots_drop">
                              <div className="dropdown open">
                                <a
                                  href="#"
                                  data-toggle="dropdown"
                                  aria-expanded="true"
                                >
                                  <i className="fa fa-ellipsis-v mail-icon" />
                                </a>
                                <ul className="dropdown-menu move-options inbox-message-dropdown float-right">
                                  <li>
                                    <a
                                      role="button"
                                      data-toggle="collapse"
                                      data-parent="#accordion"
                                      href="#collapseOne"
                                      aria-expanded="true"
                                      aria-controls="collapseOne"
                                    ></a>
                                  </li>
                                  <li>
                                    <a
                                      role="button"
                                      data-toggle="collapse"
                                      data-parent="#accordion"
                                      href="#collapseOne"
                                      aria-expanded="true"
                                      aria-controls="collapseOne"
                                    ></a>
                                    <a href="#" className="font-red" title="">
                                      <i className="fa fa-trash-o mail-icon" />
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="inbox__grid">
                          <div className="inbox-main">
                            <strong>
                              <a href="">Book</a>
                            </strong>
                          </div>
                          <div className="cs-5">
                            <p>
                              <a href="inbox-message.html">
                                Lorem ipsum dolor sit amet, consectetur.
                              </a>
                            </p>
                          </div>
                          <div className="time">
                            <h6>10:22</h6>
                          </div>
                          <nav className="navbar inbox-message-options p-0">
                            <div className="mail-right dots_drop">
                              <div className="dropdown open">
                                <a
                                  href="#"
                                  data-toggle="dropdown"
                                  aria-expanded="true"
                                >
                                  <i className="fa fa-ellipsis-v mail-icon" />
                                </a>
                                <ul className="dropdown-menu move-options inbox-message-dropdown float-right">
                                  <li>
                                    <a
                                      role="button"
                                      data-toggle="collapse"
                                      data-parent="#accordion"
                                      href="#collapseOne"
                                      aria-expanded="true"
                                      aria-controls="collapseOne"
                                    ></a>
                                  </li>
                                  <li>
                                    <a
                                      role="button"
                                      data-toggle="collapse"
                                      data-parent="#accordion"
                                      href="#collapseOne"
                                      aria-expanded="true"
                                      aria-controls="collapseOne"
                                    ></a>
                                    <a href="#" className="font-red" title="">
                                      <i className="fa fa-trash-o mail-icon" />
                                      Delete
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </nav>
                        </div>
                      </td>
                    </tr>
                    {/* //content */}
                    {/* main content end*/}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

        </Fragment>
    )
}

export default Announcement;