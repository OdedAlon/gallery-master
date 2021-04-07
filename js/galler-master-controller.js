'use strict';

$(document).ready(function () {
  initPage();
})

function initPage() {
  renderProtfolio();
}

function renderProtfolio() {
  var projs = getProjs();
  var strHtmls = projs.map(function (proj) {
    return `
        
        <div class="col-md-4 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
            <div class="portfolio-hover" onclick="renderModal('${proj.id}')">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${proj.id}.jpg" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
          </div>
        </div>
        `
  })
  $('.protfolio-container').html(strHtmls.join(''))
}

function renderModal(projId) {
  var proj = getProjById(projId);
  var strHtml = `
  <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${proj.name}</h2>
                <p class="item-intro text-muted">${proj.title}</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.jpg" alt="">
                <p>${proj.desc}</p>
                <ul class="list-inline">
                  <li>Date: ${proj.publishedAt}</li>
                  <li>Category: ${proj.labels.join(', ')}</li>
                  <a href="${proj.url}/index.html" target="_blank">Try me!</a>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
  $('.modal-render').html(strHtml);
}

function onGetMailDetails(ev) {
  ev.preventDefault();
  var address = $('#input-email').val();
  var subject = $('#input-subject').val();
  var body = $('#input-body').val();
  var strHtml = `https://mail.google.com/mail/?view=cm&fs=1&to=${address}&su=${subject}&body=${body}`
  window.open(strHtml);
  
}