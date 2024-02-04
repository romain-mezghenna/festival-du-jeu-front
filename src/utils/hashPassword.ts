const bcrypt = require('bcryptjs');

export async function hashPassword(password:string): Promise<string> {
    const saltRounds = 5; // Vous pouvez ajuster le nombre de rounds
    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw error;
    }
};