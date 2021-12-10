/**
 * Para criar: name, email, password
 */
//sempre que precisar definir o formato do objeto, criar uma interface
interface TechObject {
    title: string;
    experience: number;
}

interface CreateUserData {
    name?: string;
    email: string;
    password: string;
    techs: Array<string | TechObject>; //Or string[];
}

export default function createUser({name = '', email, password}: CreateUserData){
    const user = {
        name,
        email,
        password,
    }
    return user;
}