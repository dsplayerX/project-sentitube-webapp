import React from "react";
import styled from "styled-components";
// import "../CSS/footer.css"

function Footer() {
  return(
    <div className="main_footer">
      <div className="footer_middle" class="p-3 mb-2 bg-light text-dark">
        <div className="Container">
          <dev className="row">
            {/*Colomns 1*/}
            <div className="col-md-3 col-sm-3">
              <h4>Lorem Ipsom</h4>
              <ul className="list_unstyled">
                <div class="text-muted">
                <li>Lorem Ipsom</li>
                <li>Lorem Ipsom</li>
                <li>Lorem Ipsom</li>
                <li>Lorem Ipsom</li>
                </div>
              </ul>
            </div>

            {/*Colomns 2*/}
            <div className="col-md-3 col-sm-3">
              <h4>Lorem Ipsom</h4>
              <ul className="list_unstyled">
                <li>Lorem Ipsom</li>
                <li>Lorem Ipsom</li>
                <li>Lorem Ipsom</li>
                <li>Lorem Ipsom</li>
              </ul>
            </div>

            {/*Colomns 3*/}
            <div className="col-md-3 col-sm-3">
              <h4>Lorem Ipsom</h4>
              <ul className="list_unstyled">
                <li>Lorem Ipsom</li>
                <li>Lorem Ipsom</li>
                <li>Lorem Ipsom</li>
                <li>Lorem Ipsom</li>
              </ul>
            </div>

            {/*Colomns 4 */}
            <div className="col-md-3 col-sm-3">
              <h4>Lorem Ipsom</h4>
              <ul className="list_unstyled">
                <li>Lorem Ipsom</li>
                <li>Lorem Ipsom</li>
                <li>Lorem Ipsom</li>
                <li>Lorem Ipsom</li>
              </ul>
            </div>
          </dev>  
        </div>
      </div>
    </div>
  )
}

export default Footer;

const FooterContainer = styled.footer 