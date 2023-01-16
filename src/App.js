import React from 'react';
import './App.css';

function App() {
	return (
		<div>
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
						<img src=
"https://static.vecteezy.com/system/resources/previews/000/606/261/original/eye-logo-vector.jpg" />
					</div>
          <li><h1 class = "text-big"><b>Cataract Checkup</b></h1></li>
					<li><a href="#types">Types</a></li>
					<li><a href="#symptoms">Symptoms</a></li>
					<li><a href="#causes">Causes</a></li>
					<li><a href='#prevention'>Prevention</a></li>
          <li><a href="#treatment">Treatment</a></li>
					<li><a href='#about'>About</a></li>
				</ul>

				<div class="rightNav">
					<input type="text" name="search" id="search" />
					<button class="btn btn-sm">Search</button>
				</div>
			</nav>

{/* Source : https://www.mayoclinic.org/diseases-conditions/cataracts/symptoms-causes/syc-20353790 */}
			<section class="section">
				<div class="box-main">
					<div class="firstHalf">
						<h1 class="text-big">
            What are cataracts?
						</h1>
						<p class="text-small">
            A cataract is a clouding of the normally clear lens of the eye. For people who have cataracts, seeing through cloudy lenses is a bit like looking through a frosty or fogged-up window. Clouded vision caused by cataracts can make it more difficult to read, drive a car (especially at night) or see the expression on a friend's face.
            </p>
            <p class="text-small">
            Most cataracts develop slowly and don't disturb your eyesight early on. But with time, cataracts will eventually interfere with your vision.
            </p>
            <p class="text-small">
            At first, stronger lighting and eyeglasses can help you deal with cataracts. But if impaired vision interferes with your usual activities, you might need cataract surgery. Fortunately, cataract surgery is generally a safe, effective procedure.
						</p>
					</div>
          <div class="image">
            <br></br>
						<img src=
"https://www.ucsf.edu/sites/default/files/styles/2014_inline_5-col/public/fields/field_insert_file/news/senior-eye.jpg?itok=yzYuASzh" />
					</div>
				</div>
			</section>
      <section class="section2">
      <div class="box-main">
        <h1 class="text-mid">
        <button type="button" class="top-center" color='blue'><a href = "">Check Your Eyes</a></button>
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
