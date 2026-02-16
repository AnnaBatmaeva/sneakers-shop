import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
const PORT = 5100;

app.use(cors());
app.use(express.json());

const products = JSON.parse(
    fs.readFileSync('./products.json', 'utf-8')
);
app.get('/products', (req, res) => {
    let filtered = products;

    if (req.query.brand) {
        const brandArray = req.query.brand.split(',');
        filtered = filtered.filter(p => brandArray.includes(p.brand));
    }

    if (req.query.gender) {
        const genderArray = req.query.gender.split(',');
        filtered = filtered.filter(p => genderArray.includes(p.gender));
    }

    res.json(filtered);
});

app.get('/products/:id', (req, res) => {
    const product = products.find(
        p => p.id === Number(req.params.id)
    );

    if (!product) {
        return res.status(404).json({ message: 'Not found' });
    }

    res.json(product);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
