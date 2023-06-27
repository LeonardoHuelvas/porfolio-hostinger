import express from 'express';
import cors from 'cors';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import certificates from './src/components/Data.js';

const app = express();
const __dirname = dirname(fileURLToPath(
    import.meta.url));

app.use(cors());

app.get('/api/certificates', (req, res) => {
    res.json(certificates);
});

app.use(express.static(path.resolve(__dirname, '../public')));

const port = 3000;

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));