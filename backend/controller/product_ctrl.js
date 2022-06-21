const productModel = require('../models/products_model');


//Storing Products in DB
exports.UploadProduct = (req, res) => {
  console.log('img uploaded');
  const file_img = req.file.path;
  console.log(file_img,'...........');
    // Validate request
    if (!req.body.p_name) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
    // Creating Product
    const products = new productModel({
        p_name:req.body.p_name,
        p_details:req.body.p_details,
        p_warranty: req.body.p_warranty,
        p_cost:req.body.p_cost,
        p_image:file_img
    });
    // Saving Products in the database
    products
      .save(products)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Error in Creating the Products."
        });
      });
  };


  // Finding Products By Name
  exports.findAllProducts = async(req, res) => {
    try {

    const allProducts = await productModel.find();
    res.status(200).json(allProducts);
        
    } catch (err) {
        console.log('Error in Finding All Products');     
        res.status(401).json({Message:'Error in Finding the Products'})   ;
    }
  };

  //Find by Id
  exports.findProductById = (req, res) => {
    const id = req.params.id;
    productModel.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Product not found with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error in Finding Product with id=" + id });
      });
  };

  //Updating Product
  exports.updateProduct = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Please fill the Data to be updated!"
      });
    }
    const id = req.params.id;
    productModel.findByIdAndUpdate(id, req.body)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Product with id=${id}. Maybe Product was not found!`
          });
        } else res.send({ message: "Product updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Product with id=" + id
        });
      });
  };

  //Deleting Product by id
  exports.deleteProductById = (req, res) => {
    const id = req.params.id;
    productModel.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Product with id=${id}. Maybe Product was not found!`
          });
        } else {
          res.send({
            message: "Product was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Product with id=" + id
        });
      });
  };