function yHandler(){
	var wrap= document.getElementById('connections');
	var contentHeight = wrap.offsetHeight;
	var yOffset = window.pageYOffset;
	var y = yOffset + window.innerHeight;
	if (y >= contentHeight) {
		wrap.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-3 mt-4">
		<div class="card card-inverse card-info">
		<img class="card-img-top" src="{% static 'anon.jpg' %}">
		<div class="card-block">
		<h4 class="card-title">Marriam Sajid</h4>
		<div class="card-text">
		Web developer looking for a Job!
		</div>
		</div>
		<div class="card-footer">
		<button class="btn btn-dark btn-sm-2" disabled>Connected</button>
		<button class="btn btn-outline-dark btn-sm-2">Message</button>
		</div>
		</div>  
		</div>
		<div class="col-sm-6 col-md-4 col-lg-3 mt-4">
		<div class="card card-inverse card-info">
		<img class="card-img-top" src="{% static 'anon.jpg' %}">
		<div class="card-block">
		<h4 class="card-title">Marriam Sajid</h4>
		<div class="card-text">
		Web developer looking for a Job!
		</div>
		</div>
		<div class="card-footer">
		<button class="btn btn-dark btn-sm-2" disabled>Connected</button>
		<button class="btn btn-outline-dark btn-sm-2">Message</button>
		</div>
		</div>  
		</div>
		<div class="col-sm-6 col-md-4 col-lg-3 mt-4">
		<div class="card card-inverse card-info">
		<img class="card-img-top" src="{% static 'anon.jpg' %}">
		<div class="card-block">
		<h4 class="card-title">Marriam Sajid</h4>
		<div class="card-text">
		Web developer looking for a Job!
		</div>
		</div>
		<div class="card-footer">
		<button class="btn btn-dark btn-sm-2" disabled>Connected</button>
		<button class="btn btn-outline-dark btn-sm-2">Message</button>
		</div>
		</div>  
		</div>
		<div class="col-sm-6 col-md-4 col-lg-3 mt-4">
		<div class="card card-inverse card-info">
		<img class="card-img-top" src="{% static 'anon.jpg' %}">
		<div class="card-block">
		<h4 class="card-title">Marriam Sajid</h4>
		<div class="card-text">
		Web developer looking for a Job!
		</div>
		</div>
		<div class="card-footer">
		<button class="btn btn-dark btn-sm-2" disabled>Connected</button>
		<button class="btn btn-outline-dark btn-sm-2">Message</button>
		</div>
		</div>  
		</div>
		<div class="col-sm-6 col-md-4 col-lg-3 mt-4">
		<div class="card card-inverse card-info">
		<img class="card-img-top" src="{% static 'anon.jpg' %}">
		<div class="card-block">
		<h4 class="card-title">Marriam Sajid</h4>
		<div class="card-text">
		Web developer looking for a Job!
		</div>
		</div>
		<div class="card-footer">
		<button class="btn btn-dark btn-sm-2" disabled>Connected</button>
		<button class="btn btn-outline-dark btn-sm-2">Message</button>
		</div>
		</div>  
		</div>
		<div class="col-sm-6 col-md-4 col-lg-3 mt-4">
		<div class="card card-inverse card-info">
		<img class="card-img-top" src="{% static 'anon.jpg' %}">
		<div class="card-block">
		<h4 class="card-title">Marriam Sajid</h4>
		<div class="card-text">
		Web developer looking for a Job!
		</div>
		</div>
		<div class="card-footer">
		<button class="btn btn-dark btn-sm-2" disabled>Connected</button>
		<button class="btn btn-outline-dark btn-sm-2">Message</button>
		</div>
		</div>  
		</div>`;
	}
}
function search(){
  window.location = "results.html";
}
window.onscroll = yHandler;
