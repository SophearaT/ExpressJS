import { stockModel } from "../models/stock.model.js";


export const getAllStock = async (req, res) => {
       let filterStocks = await stockModel.find();

    if (req.query.minQuantity) {
        filterStocks = filterStocks.filter((s) => {
            return s.quantity >= req.query.minQuantity;
        });
    }

    if (req.query.maxQuantity) {
        filterStocks = filterStocks.filter((s) => {
            return s.quantity <= req.query.maxQuantity;
        });
    }

    if (req.query.minPrice) {
        filterStocks = filterStocks.filter((s) => {
            return s.price >= req.query.minPrice;
        });
    }

    if (req.query.maxPrice) {
        filterStocks = filterStocks.filter((s) => {
            return s.price <= req.query.maxPrice;
        });
    }

    if (filterStocks.length === 0) {
        return res.status(404).json({ message: "Stock not found" });
    }

    return res.json(filterStocks);
}

export const getStockById = async (req, res) => {
    const userId = req.params.id;

    const stock = await stockModel.findById(userId);
    console.log(!stock);
    
    if (!stock){
         return res.status(404).json({ messsge: "Not Found" });
    }
    return res.json(stock);
    /* const user = stock.find((u) => {
        return u.id == id
    })
    if (!user) {
        return res.json({ messsge: "Not Found" })
    }
    return res.json(user) */
}

export const deleteStockById = async (req, res) => {
    const userId = req.params.id;
    const stock = await stockModel.deleteOne({ _id: userId});


    /* const deleteIndex = stock.findIndex((u) => {
        return u.id == userId
    })
    if (deleteIndex == -1) {
        return res.json("Stock not found");
    }
    stock.splice(deleteIndex, 1) */
    return res.status(204).json({ message: 'deleted' , data: 'deleted' });
}

export const updateStockById = async (req, res) => {
    const userId = req.params.id;
    const stock = await stockModel.updateOne({ _id: userId }, req.body);
    return res.status(200).json({message:'updated', data: 'result'});

    /* const userIndex = stock.findIndex((u) => {
        return userId == u.id
    })
    if (userIndex == -1) {
        return res.json("Stock not found");
    }
    stock[userIndex] = { id: userId, ...req.body }
    return res.json({ message: `Stock with id ${userId} updated!` }) */
}

export const createStock = async (req, res) => {

//using file model data
   /*  const id = req.body.id
    const existIndex = stock.findIndex((u) => {
        return u.id == id
    })
    console.log(existIndex)
    if (existIndex != -1) {
        return res.status(400).json({ message: "Stock exists" })
    }
    stock.push(req.body)
    return res.status(201).json({ message: `Stock with name: ${req.body.name} created` }) */
//using database
    const stock = new stockModel(req.body);
    await stock.save();
    return res.status(201).json(stock);

}