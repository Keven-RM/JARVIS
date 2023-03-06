import express from 'express';
import { NotesfindOne } from './controllers/notesController';
import { train } from './core/training';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

router.post('/train_model', async (req, res) => {
  try {
    const data = req.body.training;
    await train(data);
    res.status(200).send('Treinamento feito com sucesso!');
  } catch (error) {
    res.status(500).send(error)
  }
});

router.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  // faça algo com os dados recebidos
  res.send(`Usuário criado: ${name} (${email})`);
});

router.post('/notes/find/:id', NotesfindOne)


export default router;
