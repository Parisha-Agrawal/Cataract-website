import React from 'react';
import './App.css';

function App() {
	return (
		<div>
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
						<img alt="logo" src= "https://static.vecteezy.com/system/resources/previews/000/606/261/original/eye-logo-vector.jpg" />
					</div>
          			<li><h1 class = "text-big"><b>Cataract Checkup</b></h1></li>
				{/* </ul> */}
				{/* 
				<input type="text" name="search" id="search" size="6"/>
				<button class="btn">Search</button> */}
				</ul>
				<ul class="nav-list">
				<div class="flex-items"><a href="#types">Types</a></div>
				<div class="flex-items"><a href="#symptoms">Symptoms</a></div>
				<div class="flex-items"><a href="#causes">Causes</a></div>
				<div class="flex-items"><a href="#treatment">Treatment</a></div>
				</ul>
			</nav>

{/* Source : https://www.mayoclinic.org/diseases-conditions/cataracts/symptoms-causes/syc-20353790 */}
			<section class="section">
				<div class="box-main">
					<div class="firstHalf">
						<br></br><br></br><center>
						<img alt="homepage_img" height="40%" width="60%" src= "https://us.123rf.com/450wm/vectorlab/vectorlab1910/vectorlab191001763/132641324-oculist-doctors-set-professional-optician-exam-devices-for-treatment-vision-eyeglasses-and-chart.jpg?ver=6" />
						</center>
						<h1 class="text-big"><br></br>
            What are cataracts?
						</h1>
						<p class="text-small">
            A cataract is a clouding of the normally clear lens of the eye. For people who have cataracts, seeing through cloudy lenses is a bit like looking through a frosty or fogged-up window. Clouded vision caused by cataracts can make it more difficult to read, drive a car (especially at night) or see the expression on a friend's face.
            </p><br></br>
            <p class="text-small">
            Most cataracts develop slowly and don't disturb your eyesight early on. But with time, cataracts will eventually interfere with your vision.
            </p><br></br>
            <p class="text-small">
            At first, stronger lighting and eyeglasses can help you deal with cataracts. But if impaired vision interferes with your usual activities, you might need cataract surgery. Fortunately, cataract surgery is generally a safe, effective procedure.
						</p><br></br><br></br>

						<h1 class="text-big">
						What are the types of cataracts?
						</h1>
						<p class="text-small">
						Most cataracts are related to age — they happen because of normal changes in your eyes as you get older. But you can get cataracts for other reasons — like after an eye injury or after surgery for another eye problem (like glaucoma).
						</p><br></br>
            <p class="text-small">
            No matter what type of cataract you have, you’ll need surgery to treat it.
			</p><br></br>

				</div>
            <br></br>
			</div>
			</section>
      <section class="section2">
      <div class="box-main">
        <h1 class="text-mid"><br></br>
        <button type="button" class="top-center" color='blue'>Check Your Eyes</button><br></br><br></br>
        </h1>
      </div>
      </section>
			<footer className="footer">
				<p className="text-footer">
					Made by team Hinata
				</p>
			</footer>
		</div>
	)
}

export default App
