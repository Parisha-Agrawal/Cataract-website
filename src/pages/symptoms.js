import React from 'react';

const Symptoms = () => {
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
    <b>Signs and symptoms of cataracts include:</b>
    <br></br><br></br>
        1) Clouded, blurred or dim vision
        <br></br>
        2) Increasing difficulty with vision at night
        <br></br>
        3) Sensitivity to light and glare
        <br></br>
        4) Need for brighter light for reading and other activities
        <br></br>
        5) Seeing "halos" around lights
        <br></br>
        6) Frequent changes in eyeglass or contact lens prescription
        <br></br>
        7) Fading or yellowing of colors
        <br></br>
        8) Double vision in a single eye
        <br></br>
        <br></br>
        At first, the cloudiness in your vision caused by a cataract may affect only a small part of the eye's lens, and you may be unaware of any vision loss. As the cataract grows larger, it clouds more of your lens and distorts the light passing through the lens. This may lead to more noticeable symptoms.
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
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

export default Symptoms;
