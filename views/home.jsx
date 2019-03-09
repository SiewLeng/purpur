var React = require("react");

class Home extends React.Component {
    render() {
    let loginMessage;
    if (this.props.email=== undefined || this.props.email=== 'j:null') {
        loginMessage = "Login";
    }
    else {
        loginMessage = this.props.email;
    }

    return (
      <html>
        <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
            <link rel="stylesheet" href="/css/home_styles.css"/>
        </head>
        <body>
            <div className="container">
                 <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        <h1>Purpur Boutique</h1>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-d-auto">
                        <a href="/login">{loginMessage}</a> <a href="/logout">Logout</a> <a href="/mycart">My Cart</a> <a href="/signup">Sign Up</a>
                    </div>
                </div>
                <div className="row" id="content">
                    <div className="col-2">
                        <h5> Search By: </h5>
                        <div><a className="nav" href="/search/blouse"> Blouses </a></div>
                        <div><a className="nav" href="/search/t_shirt"> T-shirts </a></div>
                        <div><a className="nav" href="/search/pant"> Pants </a></div>
                        <div><a className="nav" href="/search/skirt"> Skirts </a></div>
                        <div><a className="nav" href="/search/dress"> Dresses </a></div>
                    </div>
                    <div className="col-10">
                        <div className="row">
                            <img src="/image/blouse/1.jpg"/> <img src="/image/blouse/2.jpg"/> <img src="/image/blouse/3.jpg"/><img src="/image/blouse/4.jpg"/>
                        </div>
                        <div className="row">
                            <img src="/image/blouse/5.jpg"/> <img src="/image/blouse/6.jpg"/> <img src="/image/blouse/7.jpg"/><img src="/image/blouse/8.jpg"/>
                        </div>
                        <div className="row">
                            <img src="/image/blouse/9.jpg"/> <img src="/image/blouse/10.jpg"/> <img src="/image/blouse/11.jpg"/><img src="/image/blouse/12.jpg"/>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center" id="footer">
                    <div className="col-md-auto">
                        <h6> Customer Care </h6>
                        <a href=""> Delivery </a>  <a href=""> Product Policy </a> <a href=""> Contact us </a> <a href=""> How to return </a>
                    </div>
                </div>
            </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;