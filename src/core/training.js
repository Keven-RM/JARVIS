import path from 'path';
import { manager }  from './process.js';

async function train(array){
    console.log("Realizando treinamento de modelo.")
    for (const training of array) {
        manager.addDocument('pt', training.input, training.response);
        manager.addAnswer('pt', training.response, training.answer);
    }

    await manager.train();
    manager.save(path.resolve(__dirname, '..', 'nlp_models', 'model.json'));
}

export { train }