export function greeting(greetingPhrase: string){
    //Fazer a busca de dados pertinentes no banco e usar,
    const user = {
        gender: 'Senhor',
        name: 'Keven',
        age: 18
    }

    return greetingPhrase.replace('$user.gender', user.gender);
}