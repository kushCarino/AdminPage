import React, {Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllUsers } from "../Slice/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from 'moment';



function Index(){


  const dispatch = useDispatch();

  const {
    users,
    isSuccess,
    isLoading,
    isError,
    message,
  } = useSelector((state) => state.users);


  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  console.log(users)
    return(
    
            <>
  <div className="se-pre-con" />
  <section>
  <div className="se-pre-con" />
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
          <li className="active">
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
    {/* main content start */}
    <div className="main-content">
      {/* content */}
      <div className="container-fluid content-top-gap">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb my-breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/"><span>Home</span>
              </Link>
             </li>
            <li className="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>
        {/* statistics data */}
        <div className="statistics">
          <div className="row">
            <div className="col-xl-6 pr-xl-2">
              <div className="row">
                <div className="col-sm-6 pr-sm-2 statistics-grid">
                  <div className="card card_border border-primary-top p-4">
                    <i className="lnr lnr-users"> </i>
                    <h3 className="text-primary number">{users.length} </h3>
                    <p className="stat-text">Total Users</p>
                  </div>
                </div>
                {/* <div className="col-sm-6 pl-sm-2 statistics-grid">
                  <div className="card card_border border-primary-top p-4">
                    <i className="lnr lnr-eye"> </i>
                    <h3 className="text-secondary number">2,125</h3>
                    <p className="stat-text">Daily Visitors</p>
                  </div>
                </div> */}
              </div>
            </div>
            {/* <div className="col-xl-6 pl-xl-2">
              <div className="row">
                <div className="col-sm-6 pr-sm-2 statistics-grid">
                  <div className="card card_border border-primary-top p-4">
                    <i className="lnr lnr-cloud-download"> </i>
                    <h3 className="text-success number"> 669 </h3>
                    <p className="stat-text">posts</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* //statistics data */}
        {/* data tables */}
        <div className="data-tables">
          <div className="row">
            <div className="col-lg-12 mb-4">
              <div className="card card_border p-4">
                <h3 className="card__title position-absolute">Users</h3>&nbsp;
                <div className="table-responsive">
                  <table
                    id="example"
                    className="display"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>DOB</th>
                        <th>Phone number</th>
                        <th>User Type</th>
                        <th>Joining date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                    {  users.map((item ,index)=> {
                    return(
                      <tr>
                        <td>
                          <img
                            src="assets/img/avatar1.jpg"
                            className="rounded-circle mr-2"
                            width="40px"
                            alt=""
                          />
                              {item.firstName +" "+item.lastName}                                                                                                                      
                        </td>
                        <td> {item.username}</td>
                            <td>{moment(item.dateOfBirth).format("l")}{" "}</td>
                            <td>{item.phoneNo}</td>
                            <td>{item.userRole}</td>
                            <td>{moment(item.createdAt).format("l")}{" "}</td>
                        <td>
                          <span className="badge badge-success">Active</span>
                        </td>
                      </tr>
                       )
                      }) }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* //content */}
      </div>
      {/* main content end*/}
    </div>
  </section>
</>
    )
}

export default Index;