import "./styles.css"
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { IoPulseOutline } from "react-icons/io5";
import { FiBarChart } from "react-icons/fi";
import { GrRun } from "react-icons/gr";
import { FaPersonSwimming } from "react-icons/fa6";
import { FaDumbbell } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";

function App() {
  return (
	<>
    <nav>
		<ul>
			<li><a href="#">Popular</a></li>
			<li><a href="#">Attention</a></li>
			<li><a href="#">Topic</a></li>
            <li><a href="#">Diary</a></li>
			<button onClick={"handleSearch"} className="btn">Search <FaSearch size={15} /></button>
			<FaBell className="bell"/>
		</ul>
	</nav>
	<div>
	<div className="rectangle"> 
		<h3>Vitality</h3>
		<button className="btnCom">Community</button>
		<button className="btnSp">Sport</button>
		<button className="btnPl">Plan</button>
		<button className="btnCat">Category</button>
		<button className="btnSta">Store</button>
		<button className="btngo">Go Out</button>
	</div>

	<div className="side-rectangle">
		<div className="training">Training</div>
		<div className="num">27</div>
        <div className="day">Day</div>
		<div className="dis">Distance 49km</div>
		<div className="dur">Duration 13minutes</div>
		<div className="train">Training Trend</div>
       
		<IoPulseOutline className="lo"/>
		<FiBarChart className="ll"/>
	</div>
      
	<div className="square">
	<dev className="burn">Burn colories</dev>
	  <div className="month">July 2024</div>
	  <div className="avg">Avg 8%</div>
	  <div className="you">You 8%</div>
	</div>

	<div className="bttmS">
		<h1>See more training time</h1>
		<h4>Training type</h4>
		<GrRun  className="run" size={30}/>
        <FaPersonSwimming className="swim" size={30}/>
		<FaDumbbell className="dum" size={30}/>
		<IoMdAdd className="add" size={30}/>
		<h2>Cliens
			<div className="line"></div>
		<div>Business</div>
		</h2>
		<div className="view">view all</div>
	</div>

	<div className="sq">
		<h5>Group</h5>
		<h6>
		<div className="lillian">Lillian</div>
		<p className="p1">Cogratulatins</p>
		<div className="helena">Helena</div>
		<p className="p2">Thank you</p>
		<div className="stickland">Stickland</div>
		<p className="p3">You can check it</p>
	
		</h6>
	</div>
	</div>
  </>
  )
}
export default App
