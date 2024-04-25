import React from 'react'
import Header from '../components/Header'
import BrandComponent from '../components/BrandComponent'
import NavComponent from '../components/NavComponent';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SyncProblemIcon from '@mui/icons-material/SyncProblem';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import ApprovalIcon from '@mui/icons-material/Approval';
import Footer from '../components/Footer';

const Rector_Home = () => {
  return (
    <div>
      <nav style={{ backgroundColor: '#F0F3FF', borderBottom: '1px solid #dee2e6', padding: '10px 0' }}>
                <div className="container-fluid d-flex justify-content-between align-items-center">
                   <BrandComponent/>
                   <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/rector/home">Rector's Dashboard</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Check Grievances</a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/hostel/:id/rector">Hostel</a></li>
                    <li><a className="dropdown-item" href="/mess/:id/rector">Mess</a></li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/aboutUs">About Us</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/contactUs">Contact Us</a>
            </li>
        </ul>

        <ul class="nav ">
  <li class="nav-item">
    <a style={{color:'black'}} class="nav-link " href="/rector/:id/profile">
    <svg style={{marginRight:'9px'}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>Rector Profile</a>
  </li>
  
</ul>

                </div>
            </nav>

            <div className="jumbotron p-3 p-md-5 text-white rounded mb-3 slow-animation" style={{ backgroundColor: "#8062D6", marginLeft: '10px', marginRight: '10px', marginTop: '15px' }}>
                <div className="col-md-6 px-0">
                <h1 className="display-4 font-italic">Welcome Rector !!</h1>
          <p className="lead my-3">to the VJTI Hostel Mate Dashboard! This platform is designed to streamline the grievance management process and ensure timely resolution of student concerns.</p>
          <p>
            <a href="/hostel/:id/rector" class="btn btn-secondary  my-2" style={{marginRight:'20px'}}>Check Hostel Grievance</a>
            <a href="/mess/:id/rector" class="btn btn-dark my-2">Check Mess Grievance</a>
          </p>   
                </div>
            </div>

            <section class="py-5">
	<div class="container">
		<div class="row align-items-center gx-4">
			<div class="col-md-5">
				<div class="ms-md-2 ms-lg-5"><img class="img-fluid rounded-3" src="https://www.coe.int/documents/10463064/14588322/internet+intermediaries_870-489.jpg/9d252e73-a663-d1d9-9d3a-df88a6297fd8?t=1534328350000" /></div>
			</div>
			<div class="col-md-6 offset-md-1">
				<div class="ms-md-2 ms-lg-5">
					<h2 class="display-5 fw-bold">Rector's Responsibilities</h2>
					<p class="lead">As a hostel rector, you're responsible for the overall management of the hostel and mess facilities. This includes ensuring cleanliness, safety, and proper functioning, addressing maintenance issues, managing room allocations, and monitoring the quality of food and services provided in the mess.</p>
					<p class="lead mb-0">Your active involvement is crucial for creating a conducive living environment for students.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<hr style={{marginRight:'30px', marginLeft:"30px"}}/>

<div class="container py-5">
        <h2 class="mb-5">Grievance Management</h2>
        <div class="row mb-2">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="icon mb-4"><ReportProblemIcon style={{width:'35px',height:'35px'}}/></div>
            <h5 class="lined mb-4">View Grievance</h5>
            <p class="text-muted text-small">Rectors log in and navigate to the grievances section to view all hostel and mess-related issues reported by students..</p>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="icon mb-4"><SyncProblemIcon style={{width:'35px',height:'35px'}}/></div>
            <h5 class="lined mb-4">Assessment</h5>
            <p class="text-muted text-small"> Rectors assess the severity of each grievance and assign staff to investigate and resolve the issues.</p>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="icon mb-4"><ConnectWithoutContactIcon style={{width:'35px',height:'35px'}}/></div>
            <h5 class="lined mb-4">Communication</h5>
            <p class="text-muted text-small">Rectors communicate with relevant staff members and stakeholders to address the grievances effectively.</p>
          </div>
        </div>
        
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div class="icon mb-4"><TrackChangesIcon style={{width:'35px',height:'35px'}}/></div>
            <h5 class="lined mb-4">Problem Resolution</h5>
            <p class="text-muted text-small">Staff members investigate the reported issues, take necessary actions, and work towards resolving them promptly.</p>
          </div>
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div class="icon mb-4"><UpgradeIcon style={{width:'35px',height:'35px'}}/></div>
            <h5 class="lined mb-4">Status Update</h5>
            <p class="text-muted text-small">Rectors update the status of each grievance on the website to keep students informed about the progress of their reported issues.</p>
          </div>
          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div class="icon mb-4"><ApprovalIcon style={{width:'35px',height:'35px'}}/></div>
            <h5 class="lined mb-4">Issue Resolution</h5>
            <p class="text-muted text-small">
            Once the grievance is successfully resolved, Rectors mark it as solved on the website, providing closure to the reported problem.</p>
          </div>
        </div>
      </div>
      <Footer/>



    </div>
  )
}

export default Rector_Home