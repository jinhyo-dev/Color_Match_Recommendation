import React from 'react';
import './App.css';
import img from './image/pngegg.png'
import pants from './image/pants.png'

function App() {
  const changeColor = (e) => {
		const tshirt = window.document.querySelector('.tshirt')
		const pants1 = window.document.querySelector('.pants1')
		const pants2 = window.document.querySelector('.pants2')
		const pants3 = window.document.querySelector('.pants3')
		const pants4 = window.document.querySelector('.pants4')
	  
    const value = e.target.value

    if (value === 'black') {
			tshirt.style.filter = 'invert(0%) sepia(39%) saturate(173%) hue-rotate(97deg) brightness(91%) contrast(104%)'
      pants1.style.filter = 'invert(81%) sepia(20%) saturate(187%) hue-rotate(349deg) brightness(91%) contrast(80%)'
      pants2.style.filter = 'invert(100%) sepia(0%) saturate(0%) hue-rotate(177deg) brightness(106%) contrast(101%)'
      pants3.style.filter = 'invert(27%) sepia(7%) saturate(2152%) hue-rotate(197deg) brightness(96%) contrast(89%)'
      pants4.style.filter = 'invert(43%) sepia(89%) saturate(17%) hue-rotate(39deg) brightness(100%) contrast(89%)'
    }
		else if (value === 'white') {
			tshirt.style.filter = 'invert(100%) sepia(100%) saturate(0%) hue-rotate(98deg) brightness(104%) contrast(107%)'
      pants1.style.filter = 'invert(0%) sepia(3%) saturate(7489%) hue-rotate(115deg) brightness(99%) contrast(98%)'
      pants2.style.filter = 'invert(88%) sepia(16%) saturate(7485%) hue-rotate(173deg) brightness(98%) contrast(95%)'
      pants3.style.filter = 'invert(87%) sepia(3%) saturate(1899%) hue-rotate(350deg) brightness(109%) contrast(93%)'
      pants4.style.filter = 'invert(15%) sepia(14%) saturate(2870%) hue-rotate(179deg) brightness(100%) contrast(87%)' 
    }
		else if (value === 'blue') {
			tshirt.style.filter = 'invert(25%) sepia(86%) saturate(7103%) hue-rotate(243deg) brightness(92%) contrast(100%)'
      pants1.style.filter = 'invert(16%) sepia(14%) saturate(7091%) hue-rotate(95deg) brightness(89%) contrast(97%)'
      pants2.style.filter = 'invert(99%) sepia(4%) saturate(2579%) hue-rotate(323deg) brightness(98%) contrast(93%)'
      pants3.style.filter = ''
      pants4.style.filter = 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(342deg) brightness(102%) contrast(102%)'
    }
		else if (value === 'orange'){
			tshirt.style.filter = 'invert(63%) sepia(37%) saturate(4572%) hue-rotate(343deg) brightness(95%) contrast(89%)'
      pants1.style.filter = 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(342deg) brightness(102%) contrast(102%)'
      pants2.style.filter = 'invert(9%) sepia(7%) saturate(706%) hue-rotate(329deg) brightness(93%) contrast(87%)'
      pants3.style.filter = 'invert(8%) sepia(60%) saturate(4592%) hue-rotate(229deg) brightness(86%) contrast(107%)'
      pants4.style.filter = ''
    }
		else if (value === 'red') {
			tshirt.style.filter = 'invert(10%) sepia(77%) saturate(3675%) hue-rotate(2deg) brightness(98%) contrast(108%)'
      pants1.style.filter = ''
      pants2.style.filter = 'invert(80%) sepia(5%) saturate(4503%) hue-rotate(175deg) brightness(99%) contrast(98%)'
      pants3.style.filter = 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(342deg) brightness(102%) contrast(102%)'
      pants4.style.filter = 'invert(17%) sepia(4%) saturate(25%) hue-rotate(352deg) brightness(101%) contrast(92%)'
    }
		else if (value === 'green') {
			tshirt.style.filter = 'invert(25%) sepia(13%) saturate(6775%) hue-rotate(86deg) brightness(97%) contrast(77%)'
      pants1.style.filter = 'invert(97%) sepia(7%) saturate(841%) hue-rotate(325deg) brightness(93%) contrast(95%)'
      pants2.style.filter = 'invert(96%) sepia(54%) saturate(4867%) hue-rotate(163deg) brightness(100%) contrast(94%)'
      pants3.style.filter = 'invert(14%) sepia(60%) saturate(3334%) hue-rotate(207deg) brightness(92%) contrast(103%)'
      pants4.style.filter = ''
    }
		else if (value === 'purple'){
			tshirt.style.filter = 'invert(12%) sepia(92%) saturate(5961%) hue-rotate(278deg) brightness(91%) contrast(99%)'
			pants1.style.filter = 'invert(11%) sepia(80%) saturate(1165%) hue-rotate(192deg) brightness(98%) contrast(110%)'
			pants2.style.filter = 'invert(100%) sepia(100%) saturate(0%) hue-rotate(47deg) brightness(101%) contrast(106%)'
			pants3.style.filter = 'invert(14%) sepia(37%) saturate(7343%) hue-rotate(212deg) brightness(83%) contrast(89%)'
			pants4.style.filter = ''
		}
		else if (value === 'brown') {
			tshirt.style.filter = 'invert(23%) sepia(41%) saturate(5619%) hue-rotate(38deg) brightness(93%) contrast(102%)'
			pants1.style.filter = ''
			pants2.style.filter = 'invert(11%) sepia(80%) saturate(1165%) hue-rotate(192deg) brightness(98%) contrast(110%)'
			pants3.style.filter = 'invert(15%) sepia(82%) saturate(4278%) hue-rotate(277deg) brightness(68%) contrast(120%)'
			pants4.style.filter = 'invert(97%) sepia(8%) saturate(861%) hue-rotate(321deg) brightness(95%) contrast(91%)'
		}
	}
  return (
    <div className="mainBox">
				<div className="title">CMR</div>
				<p className="title" style={{ fontSize: '15px', marginTop: '-0.2rem'}}>Color Match Recommendation</p>
				<div style={{ marginTop: '2rem', textAlign: 'center'}}>
					<lable style = {{marginRight: '10px'}}>상의 색상 선택</lable>
					<select className="select" onChange={value => changeColor(value)}>
            <option style ={{ backgroundColor: 'black', color: 'white'}} value="black">BLACK</option>
						<option style ={{ backgroundColor: 'white', color: 'black'}} value="white">WHITE</option>
						<option style ={{ backgroundColor: 'blue', color: 'white'}} value="blue">BLUE</option>
						<option style ={{ backgroundColor: 'orange'}} value="orange">ORANGE</option>
						<option style ={{ backgroundColor: '#760c0c'}} value="red">BURGUNDY</option>
						<option style ={{ backgroundColor: 'green'}} value="green">GREEN</option>
						<option style ={{ backgroundColor: 'purple'}} value="purple">PURPLE</option>
						<option style ={{ backgroundColor: 'brown'}} value="brown">BROWN</option>
					</select>
				</div>
				<img src={img} style={{width: '10rem', marginTop: '4rem'}} className='tshirt' alt="No Pic"/>
        <div style={{ textAlign: 'center', margin: 'auto',}}>
				  <img src={pants} style={{width: '10rem', marginTop: '4rem', marginLeft: '-2rem'}} className='pants1' alt="No Pic"/>
				  <img src={pants} style={{width: '10rem', marginTop: '4rem', marginLeft: '-2rem'}} className='pants2' alt="No Pic"/>
				  <img src={pants} style={{width: '10rem', marginTop: '4rem', marginLeft: '-2rem'}} className='pants3' alt="No Pic"/>
				  <img src={pants} style={{width: '10rem', marginTop: '4rem', marginLeft: '-2rem'}} className='pants4' alt="No Pic"/>
        </div>
      </div>
  );
}

export default App;
