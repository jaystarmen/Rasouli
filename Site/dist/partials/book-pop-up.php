<div class="bookingPopUp">
	
	<div class="bookingPopUpInner">
		<img class="closePopUpNav" src="/img/closeNav.png">
		<p class="popUpTitle">Request consultation<br/> by appointment only</p>
		
		<div class="popUp-form-wrapper">
			<form action="mail.php" method="POST">
			<p class="fieldTitle">First and Last name</p>
			<input type="text" name="name">
			<p class="fieldTitle">Email</p>
			<input type="text" name="email" >
			<p class="fieldTitle">Phone</p>
			<input type="text" name="phone" >
			<p class="fieldTitle">Preferred Appointment date</p>
			
			<div class="PreferredWrapper">
				<div class="checkBoxWrapper">
					<input type="checkbox" value="1" id="checkbox" name=""/>
					<label for="checkboxInput"></label>
					<div class="clear"></div>
				</div>
					<p>Flexible?</p>
					<div class="clear"></div>
				</div>
				<input type="date" name="dateMobile"  id="datepickerMobile">
				<div class="clear"></div>
			</div>
			
			<input type="submit" value="Send">
			</form>
			<div class="clear"></div>
		</div>
		
	</div>
	
	

</div>