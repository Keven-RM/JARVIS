import express from 'express';
import dotenv from 'dotenv';
import router from './routes';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/', router);

app.listen(port, () => {
  console.log(`> Servidor rodando na porta ${port}`);
  console.log("===============================================")
  console.log("============JARVIS - POR - KEVEN ==============")
  console.log("===============================================")
});
