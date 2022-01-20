import { useState } from "react";
import './App.css';
import img from './image/pngegg.png'
import pants from './image/pants.png'
import Modal from 'react-modal';

function App() {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalIsOpen2, setModalIsOpen2] = useState(false);

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
		else if (value === 'orange') {
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
		else if (value === 'purple') {
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
			<p className="title" style={{ fontSize: '15px', marginTop: '-0.2rem' }}>Color Match Recommendation</p>
			<div style={{ marginTop: '2rem', textAlign: 'center' }}>
				<lable style={{ marginRight: '10px' }}>상의 색상 선택</lable>
				<select className="select" onChange={value => changeColor(value)}>
					<option style={{ backgroundColor: 'black', color: 'white' }} value="black">BLACK</option>
					<option style={{ backgroundColor: 'white', color: 'black' }} value="white">WHITE</option>
					<option style={{ backgroundColor: 'blue', color: 'white' }} value="blue">BLUE</option>
					<option style={{ backgroundColor: 'orange' }} value="orange">ORANGE</option>
					<option style={{ backgroundColor: '#760c0c' }} value="red">BURGUNDY</option>
					<option style={{ backgroundColor: 'green' }} value="green">GREEN</option>
					<option style={{ backgroundColor: 'purple' }} value="purple">PURPLE</option>
					<option style={{ backgroundColor: 'brown' }} value="brown">BROWN</option>
				</select>
			</div>
			<img src={img} style={{ width: '10rem', marginTop: '4rem' }} className='tshirt' alt="No Pic" />
			<div style={{ textAlign: 'center', margin: 'auto', }}>
				<img src={pants} style={{ width: '10rem', marginTop: '4rem', marginLeft: '-2rem' }} className='pants1' alt="No Pic" />
				<img src={pants} style={{ width: '10rem', marginTop: '4rem', marginLeft: '-2rem' }} className='pants2' alt="No Pic" />
				<img src={pants} style={{ width: '10rem', marginTop: '4rem', marginLeft: '-2rem' }} className='pants3' alt="No Pic" />
				<img src={pants} style={{ width: '10rem', marginTop: '4rem', marginLeft: '-2rem' }} className='pants4' alt="No Pic" />
			</div>
			<div>
				<button style={{ margin: "auto", display: "block", marginTop: "3.5rem" }} onClick={() => setModalIsOpen(true)} className="modalOpenBtn">
					<div>색상 정보</div>
				</button>
				<Modal isOpen={modalIsOpen} style={{ backgroundColor: '#EFc' }}>
					<div style={{ backgroundColor: '#EFc' }}>
						<button onClick={() => setModalIsOpen(false)} style={{ marginRight: 'auto' }} className='modalCloseBtn'>❌</button>
						<br />
						<div style={{ border: '1px solid #fff', borderRadius: '2rem', backgroundColor: '#fff', width: '90%', margin: "auto", marginTop: '2rem' }}>
							<div style={{ marginLeft: '2rem', marginRight: '2rem' }}>
								<br />
								흰색-흰색 계열
								<br /><br />
								흰색 계열의 상의 역시 대부분의 하의에 잘 어울리기 때문에 흰색, 흰색 계열의 상의는 기본은 한다고 볼 수 있어요.<br />
								그림에 두 색상을 같이 묶으려고 했는데 요즘은 완전히 하얀색 보다 흰색, 베이지, 크림색 등 비슷한 계열의 색을 많이 입어서 따로 분류했습니다. <br />
								기본적으로 흰색, 흰색 계열의 티셔츠나 셔츠는 몇 벌 가지고 있는 게 좋습니다. <br />
								모두 잘 어울린다는 장점은 있지만 다른 색 보다 오염이 금방 되며 세탁 횟수와 탈색으로 만들어졌기 때문에 천의 재질도 약한 편입니다. 흰색 티셔츠는 만져보고 사는 걸 추천합니다.<br />
								<br />
							</div>
						</div>
						<div style={{ border: '1px solid #fff', borderRadius: '2rem', backgroundColor: '#fcb3ce', width: '90%', margin: "auto", marginTop: '2rem' }}>
							<div style={{ marginLeft: '2rem', marginRight: '2rem' }}>
								<br />
								빨강-분홍 계열<br /><br />
								남자에게는 정말 어려운 색이죠. 월드컵 할 때가 아니라면 빨강을 입지 잘 안 입게 됩니다. 오히려 그것 때문에 더 피하는 경향도 있습니다.<br />
								분홍색 역시 입는 분들이 있지만 많은 분들이 선호하는 색은 아니라 잘 안 입게 되는데요. <br />
					예전에는 직장인분들이 셔츠는 흰색>하늘색>분홍색으로 어느 정도 인기는 있었는데 요즘은 잘 안 입는 색입니다.<br />
								2020년부터 조짐이 보이는 파스텔 계열의 유행은 2021년에도 계속될 것으로 보입니다. 티셔츠가 부담된다면 후드나 맨투맨에 도전해보세요. 아주 예쁜 코디가 될 것입니다. <br />
								분홍색은 연한 색 옷이나 비슷한 계열의 색들과 잘 어울립니다. <br /><br />
							</div>
						</div>
						<div style={{ border: '1px solid #fff', borderRadius: '2rem', backgroundColor: '#f0c169', width: '90%', margin: "auto", marginTop: '2rem' }}>
							<div style={{ marginLeft: '2rem', marginRight: '2rem' }}>
								<br />
								노랑-오렌지 계열<br /><br />
								유행하는 색이죠. 네온 컬러가 유행하면서 덩달아 유행하는 색이기도 합니다. <br />
								색상이 워낙 많고 다양하다 보니 어디에 잘 어울린다 보기는 어려운데 연해질수록 연한 색 하의와 진해질수록 진한 색 하의와 어울리게 됩니다. <br />
								부담스러운 색은 톤을 맞추는 건데요. 사실 이런 거 다 따져서 입는 사람은 없지만 같은 비슷한 위치에 있는 색이 잘 어울리게 돼요. <br />
								개인적으로는 노란색은 튀는 색이라 하나의 색상이 더 있으면 좋습니다. 바지도 같이 튀어주는 게 좋습니다. 찢어진 바지 워싱이 된 바지, 반바지 등을 추천합니다.<br /><br />
							</div>
						</div>

						<div style={{ border: '1px solid #fff', borderRadius: '2rem', backgroundColor: '#69f07e', width: '90%', margin: "auto", marginTop: '2rem' }}>
							<div style={{ marginLeft: '2rem', marginRight: '2rem' }}>
								<br />
								초록색 계열<br /><br />
								초록색도 너무 다양하죠. 연한 색부터 형광색, 진한 색, 카키색, 초록색에도 많은 종류의 색이 있습니다.<br />
								얘도 노랑과 마찬가지예요. 연해지면 연한 색 바지, 진한 상의는 진한 색 하의 공식으로 입으면 잘 어울리게 될 것이고요. <br />
								올해는 형광이나 어두운색보다는 환한 파스텔 톤이 유행할 것으로 보입니다. 파스텔 톤이라면 아주 연한 청색이나 흰색 베이지색이 잘 어울립니다.<br /><br />
							</div>
						</div>

						<div style={{ border: '1px solid #fff', borderRadius: '2rem', backgroundColor: '#6055fa', width: '90%', margin: "auto", marginTop: '2rem' }}>
							<div style={{ marginLeft: '2rem', marginRight: '2rem' }}>
								<br />
								파란색-네이비 계열<br /><br />
								파란색도 샐 수 없을 만큼 많은 색을 가지고 있죠. 아마 가장 많은 색이 있지 않을까 하는데요.  <br />
								대부분 잘 어울리는 편이에요. 파란색은 조합하기 쉽습니다. 청바지는 대부분 몇 개씩 가지고 있기 때문에 파란색을 맞추는 것은 생략하겠습니다.<br />
								남색 역시 쉽죠. 두 색상은 아마 흰색, 검은색 다음으로 조합해서 입기 쉽지 않을까 생각합니다.<br /><br />
							</div>
						</div>

						<div style={{ border: '1px solid #fff', borderRadius: '2rem', backgroundColor: '#000', width: '90%', margin: "auto", marginTop: '2rem', color: '#fff' }}>
							<div style={{ marginLeft: '2rem', marginRight: '2rem' }}>
								<br />
								검정-그레이 계열<br /><br />
								검정 계열 흰색만큼 조합해서 입기가 쉬운데요. 어두운색이라 생각보다 조합에 어려움을 겪는 분들이 있습니다.<br />
								검은색으로 통일을 한다면 중간에 다른 색으로 포인트를 주는 것도 좋고요. <br />
								전혀 다른 재질로 입어서 위아래를 분리해 주는 것도 좋습니다.<br /><br />
							</div>
						</div>
					</div>
				</Modal>
				<button style={{ margin: "auto", display: "block", marginTop: "1rem" }} onClick={() => setModalIsOpen2(true)} className="modalOpenBtn">
					<div>코디 보기</div>
				</button>
				<Modal isOpen={modalIsOpen2} style={{ backgroundColor: '#EFc' }}>
					<button onClick={() => setModalIsOpen2(false)} style={{ marginRight: 'auto' }} className='modalCloseBtn'>❌</button>
					<p style={{ align: 'middle', marginLeft: 'auto', marginRight: 'auto' }}>
						<iframe src="https://www.lookpin.co.kr/coordi" style={{ width: "100%", height: "230rem", marginLeft: 'auto', marginRight: 'auto' }} ></iframe>
					</p>
				</Modal>
			</div>
		</div>
	)
}

export default App;
