import React from "react";

const Nav = () =>(
    <>
      <div class="container">


        <div class="row nomargin">
          <div class="span4">
            <div class="logo">
              <h3><a href="/">Computer College</a></h3>
            </div>
          </div>
          <div class="span8">
            <div class="navbar navbar-static-top">
              <div class="navigation">
                <nav>
                  <ul class="nav topnav">
                    <li class="active">
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="#">Features </a>
                    </li>
                    <li>
                      <a href="#">Pages </a>
                    </li>
                    <li>
                      <a href="/dashboard">Dashboard</a>
                    </li>
                    <li class="dropdown">
                      <a href="#">My Profile <i class="icon-angle-down"></i></a>
                      <ul class="dropdown-menu">
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Logout</a></li>
                        <li><a href="#">Logged in as Simon</a></li>
                      </ul>
                    </li>
                    <li>
                      <a href="/contact">Contact </a>
                    </li>
                  </ul>
                </nav>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
);
export default Nav;