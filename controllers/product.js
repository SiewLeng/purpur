module.exports = (db) => {
    /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
    const get = (request, response) => {
        response.render("home", {"email": request.cookies['email']});
    }

    const getAllItem = (request, response)=> {
        let type = request.params.type;
        db.product.getAllItem(type, request.cookies['email'], (error,obj)=> {
            response.render("home_item", obj);
        })
    }

    const getAItem = (request, response)=> {
        let type = request.params.type;
        let img_id = request.params.img_id;
        let email = request.cookies['email'];
        db.product.getAItem(type, email, img_id, (error,obj)=> {
            response.render("home_single_item", obj);
        })
    }

    const itemByPrice = (request, response)=> {
        let type = request.params.type;
        db.product.itemByPrice(type, request.cookies['email'], (error,obj)=> {
            response.render("home_item", obj);
        })
    }

    const itemByPopularity = (request, response)=> {
        let type = request.params.type;
        db.product.itemByPopularity(type, request.cookies['email'], (error, obj)=> {
            response.render("item_popular", obj);
        })
    }

    return {
        get,
        getAllItem,
        getAItem,
        itemByPrice,
        itemByPopularity
    }
}