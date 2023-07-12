import React from 'react';

const Prevention = () => {
return (
	<div>
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
						<img alt="logo" src= "https://static.vecteezy.com/system/resources/previews/000/606/261/original/eye-logo-vector.jpg" />
					</div>
          			<h1 class = "text-big"><b>Cataract Checkup</b></h1>
					  <p style={{ marginLeft: '2em' }}>Stay one step ahead of cataracts: Get your comprehensive checkup today.</p>
				{/* </ul> */}
				{/* 
				<input type="text" name="search" id="search" size="6"/>
				<button class="btn">Search</button> */}
				</ul>
				<ul class="nav-list">
				<li><a href="home">Home</a></li>
				<li><a href="types">Types</a></li>
				<li><a href="symptoms">Symptoms </a></li>&emsp;&emsp;
				<li><a href="prevention">Prevention</a></li>
				</ul>
			</nav>
            <br></br>
    <section class="section">
    <p class = "text-small" style={{ padding: '1.5em' }}>
    No studies have proved how to prevent cataracts or slow the progression of cataracts. But doctors think several strategies may be helpful, including:
    <br></br><br></br>
	<b>1) Have regular eye examinations</b>
	<br></br>Eye examinations can help detect cataracts and other eye problems at their earliest stages. 
	Ask your doctor how often you should have an eye examination.
	<br></br><br></br>

	<b>2) Quit smoking</b>
	<br></br>Ask your doctor for suggestions about how to stop smoking. 
	Medications, counseling and other strategies are available to help you.
	<br></br><br></br>

	<b>3) Manage other health problems</b>
	<br></br>Follow your treatment plan if you have diabetes or other 
	medical conditions that can increase your risk of cataracts.
	<br></br><br></br>
	
	<b>4) Choose a healthy diet that includes plenty of fruits and vegetables</b>
	<br></br>Adding a variety of colorful fruits and vegetables to your diet 
	ensures that you're getting many vitamins and nutrients. Fruits and vegetables 
	have many antioxidants, which help maintain the health of your eyes.
	<br></br><br></br>
	
	<b>5) Wear sunglasses</b>
	<br></br>Ultraviolet light from the sun may contribute to the development of 
	cataracts. Wear sunglasses that block ultraviolet B (UVB) rays when you're 
	outdoors.
	<br></br><br></br>

	<b>6) Reduce alcohol use</b>
	<br></br>Excessive alcohol use can increase the risk of cataracts.

	<br></br><br></br>

      </p>

      </section>

<footer className="footer">
    <p className="text-footer">
        Made by team Hinata
    </p>
</footer>

</div>
);
};

export default Prevention;
