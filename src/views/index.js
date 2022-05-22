class RenderPortfolio {
  constructor() {
    this.portfolio;
    this.twits;
  }
  sendScreen() {
    return typeof this.portfolio === 'undefined'
      ? `<h1>User doesnt exist</h1>`
      : `
    <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
    crossorigin="anonymous"
    />
    <section class="container-fluid">
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
    <div  id="header" class="row">
      <div class="col-4">
        <h2>User Timeline</h2>
        <div class="row">
          <div class="col-4">
          <img id="image_twitter"  src="${
            this.portfolio.twits[0].url_image
              ? this.portfolio.twits[0].url_image
              : ''
          }" alt="" />
        </div>
          <div class="col-8">
          <h3>${
            this.twits.twits[0].user ? this.twits.twits[0].user : ''
          }</h3>
          <h4>${
            this.twits.twits[0].user_id ? this.twits.twits[0].user_id : ''
          }</h4>
          <p>${this.twits.twits[0].body ? this.twits.twits[0].body : ''}</p>
        </div>
        </div>
        <div class="row">
          <div class="col-4">
            <img id="image_twitter" src="${
              this.twits.twits[1].url_image
                ? this.twits.twits[1].url_image
                : ''
            }" alt="" />
          </div>
          <div class="col-8">
            <h3>${
              this.twits.twits[1].user ? this.twits.twits[1].user : ''
            }</h3>
            <h4>${
              this.twits.twits[1].user_id ? this.twits.twits[1].user_id : ''
            }</h4>
            <p>${
              this.twits.twits[1].body ? this.twits.twits[1].body : ''
            }</p>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
          <img id="image_twitter" src="${
            this.twits.twits[2].url_image
              ? this.twits.twits[2].url_image
              : ''
          }" alt="" />
        </div>
          <div class="col-8">
          <h3>${
            this.twits.twits[2].user ? this.twits.twits[2].user : ''
          }</h3>
          <h4>${
            this.twits.twits[2].user_id ? this.twits.twits[2].user_id : ''
          }</h4>
          <p>${this.twits.twits[2].body ? this.twits.twits[2].body : ''}</p>
        </div>
        </div>
        <div class="row">
          <div class="col-4">
          <img id="image_twitter" src="${
            this.twits.twits[3].url_image
              ? this.twits.twits[3].url_image
              : ''
          }" alt="" />
          </div>
          <div class="col-8">
          <h3>${
            this.twits.twits[3].user ? this.twits.twits[3].user : ''
          }</h3>
          <h4>${
            this.twits.twits[3].user_id ? this.twits.twits[3].user_id : ''
          }</h4>
          <p>${this.twits.twits[3].body ? this.twits.twits[3].body : ''}</p>
          </div>
        </div>
      </div>
      <div class="col">
          <div class="col">
          <h2>${this.portfolio.tittle ? this.portfolio.tittle : ''}</h2>
          <div class="col">
          <p class="col-12">${
            this.portfolio.experience_01 ? this.portfolio.experience_01 : ''
          }</p>
          <p class="col-12">${
            this.portfolio.experience_02 ? this.portfolio.experience_02 : ''
          }</p>
          <p class="col-12">${
            this.portfolio.experience_03 ? this.portfolio.experience_03 : ''
          }</p>
          </div>
        </div>
    </div>
    <style>
      p {
        font-weight: 20px;
        font-size: large;
        padding: 30px;
      }
      div{
        width: 100%;
      }
      #image_twitter {
        min-width: 100%;
      }
      #image_url{
        max-width: 200px;
      }
      #header{
        margin-top: 50px;
      }
    </style>
      `;
  }
}

module.exports = RenderPortfolio;
