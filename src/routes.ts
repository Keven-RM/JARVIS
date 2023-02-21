import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello, World!');
});

router.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  // faça algo com os dados recebidos
  res.send(`Usuário criado: ${name} (${email})`);
});

export default router;
