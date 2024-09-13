import { 
    getAllProducts, 
    getProductById, 
    createProduct, 
    removeProductById, 
    updateProductById 
} from "../services/ProductServices.js";

export const getProducts = async (req, res) => {
    try {
        const products = await getAllProducts();
        res.status(200).json({data: products, message:"All Products"}); 
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getProductDetail = async (req, res) => {
    try {   
        const { id } = req.params;
        const product = await getProductById(id);
        res.status(200).json ({ data: product, message:"Product Detail" });
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};

export const addProduct = async (req, res) => {
    const product = req.body;

    try {
        const newProduct = await createProduct(product);
        res.status(201).json({ data: newProduct, message:"Product Created" })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    try {
        const updateProduct = await updateProductById(id, product);
        res.status(200).json({ data: updateProduct, message:"Product Updated"})
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
};

export const deleteProduct = async (req,res) => {
    const { id } = req.params;

    try {
        const deletedProductId = await removeProductById(id);
        res.status(200).json({ data: deletedProductId, message:" Product Deleted"});
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
}
