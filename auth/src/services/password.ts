// import {scrypt , randomBytes} from 'crypto';
// import {promisify} from 'util';

// const scryptAsync = promisify(scrypt);

// export class Password {
//     static async toHash(password: string) {
//         const salt = randomBytes(8).toString('hex');
//         const buf = (await scryptAsync(password, salt, 64)) as Buffer;

//         return `${buf.toString('hex')}.${salt}`;
//     }

//     static async compare(storedPassword: string, suppliedPassword: string) {
//         const [hashedPassword, salt] = storedPassword.split('.');
//         const buf = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer;

//         return buf.toString('hex') === hashedPassword;
//     }
// }

const bcrypt = require('bcrypt');

export class Password {
    static async toHash(password: string) {
        const hashedPass = await bcrypt.hash(password, 10);

        return hashedPass;
    }

    static async compare(storedPassword: string, suppliedPassword: string) {
        const hashedPassword = storedPassword;
        const buf = Buffer.from(hashedPassword, 'hex');
        const result = await bcrypt.compare(suppliedPassword, buf.toString());

        return result;
    }
}