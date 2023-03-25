import React from 'react'
import { Container, Row, Col, Image } from "react-bootstrap";

function TermsOfService() {
  return (
    <div className='term-page'>
		<Container>     
		 <Row><Col
	   style={{
		margin:"6px"
	   }}
	  ><h1><b>Terms and Conditions</b></h1>

	<Row className='TOS'>
		<Col>
			<div className='TOS_div'>
				<h3>Introduction</h3>
				<p>These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at www.example.com.</p>
			</div>	
		</Col>
		<Col>
			<div className='TOS_div'>
				<h3>Intellectual Property Rights</h3>
				<p>Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.</p>
			</div>
		</Col>
	</Row>

	<Row className='TOS'>
		<Col>
			<div className='TOS_div'>
				<h3>Acceptable use</h3>
				<p>You must not use our website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.</p>
			</div>	
		</Col>
		<Col>
			<div className='TOS_div'>
				<h3>No warranties</h3>
				<p>This website is provided "as is" without any representations or warranties, express or implied. We make no representations or warranties in relation to this website or the information and materials provided on this website.</p>
			</div>
		</Col>
	</Row>

	<Row className='TOS'>
		<Col>
			<div className='TOS_div'>
				<h3>Limitations of liability</h3>
				<p>We will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website for any direct or indirect loss or damage arising out of or in connection with the use of our website.</p>
			</div>
		</Col>
		<Col>
			<div className='TOS_div'>
				<h3>License to use website</h3>
				<p>You may view pages from our website in a web browser, download pages from our website for caching in a web browser, and print pages from our website, subject to the restrictions set out below and elsewhere in these terms and conditions.</p>
			</div>
		</Col>
	</Row>

	<Row className='TOS'>
		<Col>
			<div className='TOS_div'>
				<h3>Indemnification</h3>
				<p>You agree to indemnify us and our affiliates, employees, agents, and representatives, and to hold them harmless from any and all claims and liabilities (including legal costs) that may arise from your submissions, from your unauthorized use of material obtained through the website, from your breach of these Terms and Conditions, or from any such acts arising through your use of the website.</p>
			</div>
		</Col>
		<Col>
			<div className='TOS_div'>
				<h3>Changes to terms</h3>
				<p>We may revise these terms and conditions from time to time by updating this page. You should check this page regularly to ensure you are familiar with the current version.</p>
			</div>
		</Col>
		
	</Row>
	</Col>
  </Row>
  </Container>

    </div>
  )
}

export default TermsOfService;
