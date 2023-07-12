import React from 'react';

const Type = () => {
return (
	<div>
			<nav class="navbar background">
			<ul class="nav-list">
					<div class="logo">
						<img alt="logo" src= "https://static.vecteezy.com/system/resources/previews/000/606/261/original/eye-logo-vector.jpg" />
					</div>
					<h1 class="text-big" style={{ fontFamily: "'Comic Sans MS', cursive" }}><b>Cataract Checkup</b></h1>
<p style={{ fontFamily: "'Comic Sans MS', cursive", marginLeft: '2em' }}>Stay one step ahead of cataracts: Get your comprehensive checkup today.</p>
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
	<b>Cataract types include:</b>
	<br></br><br></br>
	<b>1) Cataracts affecting the center of the lens (nuclear cataracts)</b>
	<br></br>A nuclear cataract may at first cause more nearsightedness or even a 
	temporary improvement in your reading vision. But with time, the lens gradually 
	turns more densely yellow and further clouds your vision. As the cataract slowly 
	progresses, the lens may even turn brown. Advanced yellowing or browning of the 
	lens can lead to difficulty distinguishing between shades of color.

	<br></br><br></br>

	<b>2) Cataracts that affect the edges of the lens (cortical cataracts)</b>
	<br></br>
	A cortical cataract begins as whitish, wedge-shaped opacities or streaks on the outer 
	edge of the lens cortex. As it slowly progresses, the streaks extend to the center and 
	interfere with light passing through the center of the lens. 
	
	<br></br><br></br>

	<b>3) Cataracts that affect the back of the lens (posterior subcapsular cataracts)</b>
	<br></br>
	A posterior subcapsular cataract starts as a small, opaque area that usually forms near 
	the back of the lens, right in the path of light. A posterior subcapsular cataract often 
	interferes with your reading vision, reduces your vision in bright light, and causes glare 
	or halos around lights at night. These types of cataracts tend to progress faster than other 
	types do.
	
	<br></br><br></br>

	<b>4) Cataracts you're born with (congenital cataracts)</b>
	<br></br>
	Some people are born with cataracts or develop them during childhood. These cataracts may be 
	genetic, or associated with an intrauterine infection or trauma. These cataracts may also be 
	due to certain conditions, such as myotonic dystrophy, galactosemia, neurofibromatosis type 2 
	or rubella. Congenital cataracts don't always affect vision, but if they do, they're usually 
	removed soon after detection.
	<br></br><br></br><br></br>
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

export default Type;
