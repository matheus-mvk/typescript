import { Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response:Response) {
    //const user = createUser({
         //email: 'matheusmh@gmail.com',
         //password: '15326864',
    //});
    const user1 = createUser({
        email: 'matheusmh@gmail.com',
        password: '15326864',
        techs: [
            'Node.js', 
            'ReactJs', 
            'React Native',
            { title: 'Javascript', experience: 100},
        ],
   });
    return response.json({ messenge: 'Hello world'});
}