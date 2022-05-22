class ResponseBase{
  constructor(){
    this.message = '';
    this.statusCode = 502;
    this.data;
  }
}

class TwitterResponse {
  constructor() {
    this.userName = '';
    this.text = '';
    this.screenName = '';
    this.profileImageUrl = '';
    this.date = '';
  }
}

module.exports = { ResponseBase, TwitterResponse };
