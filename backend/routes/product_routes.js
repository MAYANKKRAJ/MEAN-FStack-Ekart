const router = require('express').Router();
const prdctCtrl = require('../controller/product_ctrl');

// const products = require('../models/products');
//const ProductsModel = require("../models/products_model");
const { verifyTokenAndAuth, upload } = require('./verify_token');

// router.post('/insert-product', async (req,res)=>{
//     const products = new ProductsModel({
//         p_name:req.body.p_name,
//         p_details:req.body.p_details,
//         p_warranty:req.body.p_warranty,
//         p_cost:req.body.p_cost
//     });

//     try {
//         const registeredData = await products.save();
//         res.status(201).json(registeredData);
//         console.log("Registered Data are: ",registeredData);    
//     } catch (error) {
//         res.status(500).json(error)
//         console.log(error);    
//     }

// });

router.get('/products',prdctCtrl.findAllProducts);
router.get('/product/:id',prdctCtrl.findProductById);
router.post('/product/insert',[verifyTokenAndAuth,upload.single("p_image")],prdctCtrl.UploadProduct);
router.put('/product/modify/:id',[verifyTokenAndAuth,upload.single('p_images')],prdctCtrl.updateProduct);
router.delete('/product/del/:id',[verifyTokenAndAuth],prdctCtrl.deleteProductById);


module.exports = router;