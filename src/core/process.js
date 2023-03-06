import path from 'path';
const { NlpManager } = require('node-nlp');

const manager = new NlpManager({ languages: ['pt'] });

(async () => await manager.load(path.resolve(__dirname, '..', 'nlp_models', 'model.json')))();

async function processRequestedCommand(input){
    const response = await manager.process('pt', input);

    return response;
}

export { processRequestedCommand, manager };

(async () => (await processRequestedCommand('Bom dia')));