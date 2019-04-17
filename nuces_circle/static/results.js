function yHandler(){
    var wrap= document.getElementById('results');
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
                <button class="btn btn-dark btn-sm-2">Connect</button>
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
                <button class="btn btn-dark btn-sm-2">Connect</button>
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
                <button class="btn btn-dark btn-sm-2">Connect</button>
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
                <button class="btn btn-dark btn-sm-2">Connect</button>
                <button class="btn btn-outline-dark btn-sm-2">Message</button>
            </div>
        </div>  
    </div>`;
    }
}

var search_pool = new Array();

function SearchWidget(id, count, filter1, filter2, filter3) {
    this.count = count;
    this.filt = new Array();
    if (count == 3) {
        this.filt[count - 1] = filter3
        this.filt[count - 2] = filter2
        this.filt[count - 3] = filter1

    } else if (count == 2) {
        this.filt[count - 1] = filter2
        this.filt[count - 2] = filter1
    }
    else if (count == 1) {
        this.filt[count - 1] = filter1
    }

    this.id = id;

    search_pool[this.id] = this;
}

SearchWidget.prototype.render = function (divID) {
    let html = this.getFilterHTML();

    document.getElementById(divID).innerHTML = html;
}

SearchWidget.prototype.getFilterHTML = function () {
    let html = `<section class="search-sec">
    <div class="container-fluid">
        <form action="#" method="post" novalidate="novalidate">
            <div class="row">
                <div class="col-md-12">
                <div class="row" style="align-content: space-around">

                `
    let widths = 12 / (this.count + 1);
    for (let i = 0; i < this.count; i++) {
        html += `<div class="col-md-`;
        html += widths;
        html += ` ">
                    <input type="text" class="form-control search-slt" placeholder="`;
        html += this.filt[i];
        html += `">
                    </div>`;

    }
    html += `                    <div class=" col-md-4 ">
                <button type="button" style="width:50%;min-width: 100px;"  class="btn btn-primary">Filter</button>
            </div>

                </div>
                </div>
            </div>
        </form>
    </div>
    </section>`
    return html;
}
var s1 = new SearchWidget(2, 3, "Interests", "Skills", "Graduating Date");
function load() {
    s1.render("div_search");
}
window.onscroll = yHandler;