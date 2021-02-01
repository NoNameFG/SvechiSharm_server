const AdressModel = require('../models/adress.js'),
      BasketProductModel = require('../models/basket_product.js'),
      DeliveryModel = require('../models/delivery.js'),
      ProductModel = require('../models/product.js'),
      OrderModel = require('../models/order.js'),
      ProductImageModel = require('../models/product_image.js'),
      ProductInOrderModel = require('../models/product_in_order.js'),
      UserModel = require('../models/user.js'),
      config = require('../config/config.json')

class AdminController{
  async login_admin(req, resp){
    const body = req.query;
    if(body.login != config.siteAuth.login || body.password != config.siteAuth.password){
      resp.status(401).json({message: 'login dennied'})
      return
    }

    resp.setHeader('admin', `Bearer ${body.login}:${body.password}`)
    resp.status(200).json({message: 'success'})
  }

  async add_product(req, resp){
    const body = req.body,
          product = new ProductModel(body.product)

    if(product.validateSync()){
      resp.status(409).json(product.validateSync())
      return
    }

    const imgSaveArr = body.images.map(el => {
      return (
        {
          product_id: product._id,
          image: el
        }
      )
    })

    await product.save()
    await ProductImageModel.insertMany(imgSaveArr, (error) => {
      if(error) resp.status(404).json(error)
    })

    resp.status(201).json({message: 'success'})

  }

  async get_product_by_id(req, resp){
    const body = req.query,
          product = await ProductModel.findOne({_id: body._id}, (error, result) => {
            if(error) resp.status(404).json(error)
          }),
          productImage = await ProductImageModel.findOne({product_id: body._id}, (error, result) => {
            if(error) resp.status(404).json(error)
          })

    resp.status(200).json({
      ...product,
      image: productImage.image
    })
  }

  async update_product(req, resp){
    const body = req.body,
          product = await ProductModel.findOneAndUpdate(
            {_id: body._id},
            {$set: {...body}},
            {
              useFindAndModify: false
            },
            (error, result) => {
              if(error) resp.status(404).json(error);
            }
          );

    resp.status(200).json({message: 'success'});
  }

  async delete_product(req, resp){
    const body = req.query

    await ProductModel.findOneAndDelete({_id: body._id}, (error, result) => {
        if(error) resp.status(400).json({message: 'failed'});
    });

    await ProductImageModel.deleteMany({_id: body._id}, (error, result) => {
        if(error) resp.status(400).json({message: 'failed'});
    })

    resp.status(200).send({message: 'success'});
  }

  async get_product_list(req, resp){
    const body = req.body,
          products = await ProductModel.find(body, (error, result) => {
              if(error) resp.status(404).json(error)
            }
          )

    resp.status(200).json(products);
  }

  async get_image_by_id(req, resp){
    const body = req.query,
          image = await ProductImageModel.findOne(body, (error, result) => {
            if(error) resp.status(404).json(error)
          })

    resp.status(200).json({
      ...image._doc,
      image: image.image.toString(),
    });
  }

  async get_order_list(req, resp){
    const body = req.query,
          orders = await OrderModel.find(body, (error, result) => {
             if(error) resp.status(404).json(error);
          })

    resp.status(200).json(orders);
  }

  async edit_order(resp, req){
    const body = req.body,
          order = await ProductModel.findOneAndUpdate(
            {_id: body.game_id},
            {$set: body},
            {
              useFindAndModify: false
            },
            (error, result) => {
              if(error) resp.status(404).json(error)
            }
          );

    resp.status(200).json({message: 'success'})
  }

  async delete_order(resp, req){
    const body = req.query

    await OrderModel.findOneAndDelete({_id: body._id},
      (error, result) => {
        if(error) resp.status(404).json(error)
      }
    )

    resp.status(200).json({message: 'success'})
  }
}

module.exports = new AdminController();
