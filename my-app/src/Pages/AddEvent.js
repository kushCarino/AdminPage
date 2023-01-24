import React, {Fragment } from 'react';
import { Link } from 'react-router-dom';
function AddEvent(){
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
              <i className="" /> <span>ForgotPassword</span>
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
                      src="assests/img/profile.jpg"
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
    {/* main content start */}
    <div className="main-content">
      {/* content */}
      <div className="container-fluid content-top-gap">
        {/* forms */}
        <section className="forms">
          {/* forms 1 */}
          <div className="card card_border py-2 mb-4">
            <div className="cards__heading">
              <h3>
                Add Event <span />
              </h3>
            </div>
            <div className="card-body">
              <form action="#" method="post">
                <div className="form-group">
                  <label htmlFor="headline" className="input__label">
                    Headline
                  </label>
                  <input
                    type="text"
                    className="form-control input-style"
                    id="text"
                    aria-describedby="headline"
                    placeholder="Headline"
                  />
                  <label htmlFor="userId" className="input__label">
                    User Id
                  </label>
                  <input
                    type="id"
                    className="form-control input-style"
                    id="text"
                    aria-describedby="id"
                    placeholder="User Id"
                  />
                  <p>
                    <label htmlFor="post">Text</label>
                  </p>
                  <textarea
                    id="post"
                    name="post"
                    rows={5}
                    cols={33}
                    defaultValue={" "}
                  />
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="validatedCustomFile"
                    required=""
                  />
                  <label
                    className="custom-file-label"
                    htmlFor="validatedCustomFile"
                  >
                    Choose file...
                  </label>
                  <div className="invalid-feedback">
                    Example invalid custom file feedback
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-style mt-4"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          {/* //forms 1 */}
        </section>
      </div>
    </div>
    {/* main content end*/}
  </section>
</>

        </Fragment>
    )
}

export default AddEvent;