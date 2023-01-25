import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser, getAllUsers } from "../Slice/users/userSlice";
import moment from 'moment'

function Users() {
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
  }, [dispatch,isSuccess]);

  console.log(users)

  function delUser(id){
    dispatch(deleteUser(id))
  }
  return (
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
                  <Link to="/">
                    <span>EMU-IT</span>
                  </Link>
                </li>
              </h1>
            </div>
            <div className="logo-icon text-center"></div>
            {/* //logo end */}
            <div className="sidebar-menu-inner">
              {/* sidebar nav start */}
              <ul className="nav nav-pills nav-stacked custom-nav">
                <li className="active">
                  <Link to="/">
                    <i className="fa fa-tachometer" />
                    <span> Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link to="/users">
                    <i className="fa fa-user" /> <span>Users</span>
                  </Link>
                </li>
                <li>
                  <Link to="/cafteria">
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
                      <Link to="/addAnnoucement">
                        <i className="fa fa-bell-o" /> <span>Add</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/announcement">
                        <i className="fa fa-bell-o" /> <span>Announcement</span>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-list">
                  <Link to="/register">
                    <i className="fa fa-question-circle" />
                    <span>
                      Sign <i className="lnr lnr-chevron-right" />
                    </span>
                  </Link>
                  <ul className="sub-menu-list">
                    <li>
                      <Link to="/register">
                        <i className="" /> <span>Register</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/forgotpass">
                        <i className="" /> <span>Forgot Password</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              {/* //sidebar nav end */}
              {/* toggle button start */}
              <Link className="toggle-btn">
                <i className="fa fa-angle-double-left menu-collapsed__left">
                  <span>Collapse Sidebar</span>
                </i>
                <i className="fa fa-angle-double-right menu-collapsed__right" />
              </Link>
              {/* //toggle button end */}
            </div>
          </div>
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
                          <Link to="/register">
                            <i className="fa fa-power-off" />{" "}
                            <span>Register</span>
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
              {/* data tables */}
              <div className="data-tables">
                <div className="row">
                  <div className="col-lg-12 mb-4">
                    <div className="card card_border p-4">
                      <h3 className="card__title position-absolute">
                        All Users Info
                      </h3>
                      &nbsp;
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
                              <button
                                type="button"
                                className="btn btn-primary btn-style"
                                data-toggle="modal"
                                onClick={delUser(item._id)}
                              >
                                Delete
                              </button>
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
  );
}

export default Users;
