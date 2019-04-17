function yHandler(){
	var wrap= document.getElementById('post');
	var contentHeight = wrap.offsetHeight;
	var yOffset = window.pageYOffset;
	var y = yOffset + window.innerHeight;
	if (y >= contentHeight) {
		wrap.innerHTML += `<div id="post"class="card gedf-card">
				<div class="card-header">
					<div class="d-flex justify-content-between align-items-center">
						<div class="d-flex justify-content-between align-items-center">
							<div class="mr-2">
								<img class="rounded-circle" width="45" src="{% static 'anon.jpg' %}" alt="">
							</div>
							<div class="ml-2">
								<div class="h5 m-0">Xavor</div>
							</div>
						</div>
						<div>
							<div class="dropdown">
								<button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<i class="fa fa-ellipsis-h"></i>
								</button>
								<div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
									<div class="h6 dropdown-header">Configuration</div>
									<a class="dropdown-item" href="#">Hide</a>
									<a class="dropdown-item" href="#">Report</a>
								</div>
							</div>
						</div>
					</div>

				</div>
				<div class="card-body">
					<div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>10 min ago</div>
					<a class="card-link" href="#">
						<h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
					</a>

					<p class="card-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor
						sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.
					</p>
				</div>
				<div class="card-footer">
					<a href="#" class="card-link"><i class="fa fa-mail-forward"></i>Apply</a>
				</div>
			</div>
			<div id="post"class="card gedf-card">
				<div class="card-header">
					<div class="d-flex justify-content-between align-items-center">
						<div class="d-flex justify-content-between align-items-center">
							<div class="mr-2">
								<img class="rounded-circle" width="45" src="{% static 'anon.jpg' %}" alt="">
							</div>
							<div class="ml-2">
								<div class="h5 m-0">i2c</div>
							</div>
						</div>
						<div>
							<div class="dropdown">
								<button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<i class="fa fa-ellipsis-h"></i>
								</button>
								<div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
									<div class="h6 dropdown-header">Configuration</div>
									<a class="dropdown-item" href="#">Hide</a>
									<a class="dropdown-item" href="#">Report</a>
								</div>
							</div>
						</div>
					</div>

				</div>
				<div class="card-body">
					<div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>10 min ago</div>
					<a class="card-link" href="#">
						<h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
					</a>

					<p class="card-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor
						sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.
					</p>
				</div>
				<div class="card-footer">
					<a href="#" class="card-link"><i class="fa fa-mail-forward"></i>Apply</a>
				</div>
			</div>
			<div id="post"class="card gedf-card">
				<div class="card-header">
					<div class="d-flex justify-content-between align-items-center">
						<div class="d-flex justify-content-between align-items-center">
							<div class="mr-2">
								<img class="rounded-circle" width="45" src="{% static 'anon.jpg' %}" alt="">
							</div>
							<div class="ml-2">
								<div class="h5 m-0">imanami</div>
							</div>
						</div>
						<div>
							<div class="dropdown">
								<button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<i class="fa fa-ellipsis-h"></i>
								</button>
								<div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
									<div class="h6 dropdown-header">Configuration</div>
									<a class="dropdown-item" href="#">Hide</a>
									<a class="dropdown-item" href="#">Report</a>
								</div>
							</div>
						</div>
					</div>

				</div>
				<div class="card-body">
					<div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>10 min ago</div>
					<a class="card-link" href="#">
						<h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
					</a>

					<p class="card-text">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor
						sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.
					</p>
				</div>
				<div class="card-footer">
				</div>
			</div>`;
	}
}
function search(){
  window.location = "results.html";
}
window.onscroll = yHandler;
