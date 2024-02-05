import React from 'react';

const Messaging = () => {
  return (
    <div className="container">
      <h3 className="text-center">Messaging</h3>
      <div className="messaging">
        <div className="inbox_msg">
          <div className="inbox_people">
            <div className="headind_srch">
              <div className="recent_heading">
                <h4>Recent</h4>
              </div>
              <div className="srch_bar">
                <div className="stylish-input-group">
                  <input type="text" className="search-bar" placeholder="Search" />
                  <span className="input-group-addon">
                    <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
                  </span>
                </div>
              </div>
            </div>
            <div className="inbox_chat">
              {/* Chat list items */}
            </div>
          </div>
          <div className="mesgs">
            <div className="msg_history">
              {/* Message history */}
            </div>
            <div className="type_msg">
              <div className="input_msg_write">
                <input type="text" className="write_msg" placeholder="Type a message" />
                <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="bottom">
        <nav className="navbar bg-dark" data-bs-theme="dark">
          <ul>
            <li>
              <a className="bottoms">Contact Us</a>
            </li>
            <li>
              <a className="bottoms"><img src="../static/img/instagramlogo.png" alt="instagram" width="35px" height="32px"/></a>
              <a className="bottoms">adwitiya_gupta</a>
              <a className="bottoms">gadwanitushar</a>
              <a className="bottoms">i_am_harshk</a>
              <a className="bottoms">yashgupta_012</a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  )
};

export default Messaging;
