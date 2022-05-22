class RenderPortfolioView {
  constructor() {
    this.portfolio;
    this.twits;
  }
  sendScreen() {
    this.portfolio = this.portfolio.Item;
    return typeof this.portfolio === 'undefined'
      ? `<h1>User doesnt exist</h1>`
      : `
      <link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
  crossorigin="anonymous"
  />
  <section class="container">
  <div class="row">
    <div class="col-8">
      <h1>${this.portfolio.names ? this.portfolio.names : ''}</h1>
      <h2>${this.portfolio.description ? this.portfolio.description : ''}</h2>
      <h3>${this.portfolio.email ? this.portfolio.email : ''}</h3>
      <h3>${this.portfolio.phone ? this.portfolio.phone : ''}</h3>
      <h3>${this.portfolio.zip_code ? this.portfolio.zip_code : ''}</h3>
    </div>
    <div class="col-4">
      <img id="image_url" src="${
        this.portfolio.image_url ? this.portfolio.image_url : ''
      }" alt="" />
      </br>
      <a href="${
        this.portfolio.profile ? this.portfolio.profile : ''
      }">Linkedin</a>
    </div>
  </div>
  <div class="row">
    <div class="col-4">
      <div class="row">
        <div class="col-4">
          <img id="image_twitter"  src="${
            this.twits[0].profileImageUrl ? this.twits[0].profileImageUrl : ''
          }" alt="" />
        </div>
        <div class="col-8">
          <h4>${this.twits[0].userName ? this.twits[0].userName : ''}</h3>
          <h5>${this.twits[0].screenName ? this.twits[0].screenName : ''}</h4>
          <h6>${new Date(this.twits[0].date).toLocaleString() ? new Date(this.twits[0].date).toLocaleString() : ''}</h6>
        </div>
      </div>
      <div class="row overflow-auto">
        <p>${this.twits[0].text ? this.twits[0].text : ''}</p>
      </div>
      <div class="row">
        <div class="col-4">
          <img id="image_twitter"  src="${
            this.twits[1].profileImageUrl ? this.twits[1].profileImageUrl : ''
          }" alt="" />
        </div>
        <div class="col-8">
          <h4>${this.twits[1].userName ? this.twits[1].userName : ''}</h3>
          <h5>${this.twits[1].screenName ? this.twits[1].screenName : ''}</h4>
          <h6>${new Date(this.twits[1].date).toLocaleString() ? new Date(this.twits[1].date).toLocaleString() : ''}</h6>
        </div>
      </div>
      <div class="row overflow-auto">
        <p>${this.twits[1].text ? this.twits[1].text : ''}</p>
      </div>
      <div class="row">
        <div class="col-4">
          <img id="image_twitter"  src="${
            this.twits[2].profileImageUrl ? this.twits[2].profileImageUrl : ''
          }" alt="" />
        </div>
        <div class="col-8">
          <h4>${this.twits[2].userName ? this.twits[2].userName : ''}</h3>
          <h5>${this.twits[2].screenName ? this.twits[2].screenName : ''}</h4>
          <h6>${new Date(this.twits[2].date).toLocaleString() ? new Date(this.twits[2].date).toLocaleString() : ''}</h6>
        </div>
      </div>
      <div class="row overflow-auto">
        <p>${this.twits[2].text ? this.twits[2].text : ''}</p>
      </div>
      <div class="row">
        <div class="col-4">
          <img id="image_twitter"  src="${
            this.twits[3].profileImageUrl ? this.twits[3].profileImageUrl : ''
          }" alt="" />
        </div>
        <div class="col-8">
          <h4>${this.twits[3].userName ? this.twits[3].userName : ''}</h3>
          <h5>${this.twits[3].screenName ? this.twits[3].screenName : ''}</h4>
          <h6>${new Date(this.twits[3].date).toLocaleString() ? new Date(this.twits[3].date).toLocaleString() : ''}</h6>
        </div>
      </div>
      <div class="row overflow-auto">
        <p>${this.twits[3].text ? this.twits[3].text : ''}</p>
      </div>
    </div>
    <div class="col-8">
        <div class="row">
        <h2>${this.portfolio.tittle ? this.portfolio.tittle : ''}</h2>
        </div>
          <div class="row">
            ${this.portfolio.experience_01 ? this.portfolio.experience_01 : ''}
          </div>
          <div class="row">
            ${this.portfolio.experience_02 ? this.portfolio.experience_02 : ''}
          </div>
          <div class="row">
            ${this.portfolio.experience_03 ? this.portfolio.experience_03 : ''}
          </div>
        </div>
    </div>
  </div>
  <style>
    p {
      font-weight: 20px;
      font-size: large;
      max-height: 10vh;
      font-size: .9rem;
    }
    div{
      width: 100%;
      padding: 5px;
    }
    #image_twitter {
      min-width: 60px;
    }
    #image_url{
      max-width: 200px;
    }
    #header{
      margin-top: 50px;
    }
  </style>`;
  }
}

module.exports = RenderPortfolioView;
