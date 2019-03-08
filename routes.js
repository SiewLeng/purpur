module.exports = (app, db) => {

    const products = require('./controllers/product')(db);

    const users = require('./controllers/user')(db);

    const users_cart= require('./controllers/user_cart')(db);


  /*
   *  =========================================
   *  Routes for one controller
   *  =========================================
   */

   app.get('/', products.get);
   app.get('/search/:type', products.getAllItem);
   app.get('/searchSingle/:type/:img_id', products.getAItem);
   app.get('/byprice/:type', products.itemByPrice);
   app.get('/bypopularity/:type', products.itemByPopularity);
   app.get('/login', users.login);
   app.get('/signup', users.signup);
   app.get('/logout', users.logout);
   app.get('/mycart', users_cart.displayCart);
   app.post('/', users.checkLogin);
   app.post('/signup', users.checkUser);
   app.post('/addToCart/:type_of_product/:img_id', users_cart.addToCart);
   app.put('/payment', users_cart.updated);
   app.delete('/cancelpayment', users_cart.cancelpayment);
};