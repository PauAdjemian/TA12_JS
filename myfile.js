function generatePassword(largo) {
    if (largo >= 8) {
        const chars = {
            mayusculas: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            minusculas: 'abcdefghijklmnopqrstuvwxyz',
            numeros: '0123456789',
            simbolos: '!@#$%^&*()_+~`|}{[]:;?><,./-='
        };

        const allChars = chars.mayusculas + chars.minusculas + chars.numeros + chars.simbolos;

        
        let password = [
            chars.mayusculas[Math.floor(Math.random() * chars.mayusculas.length)],
            chars.minusculas[Math.floor(Math.random() * chars.minusculas.length)],
            chars.numeros[Math.floor(Math.random() * chars.numeros.length)],
            chars.simbolos[Math.floor(Math.random() * chars.simbolos.length)]
        ];

        for (let index = 4; index < largo; index++) {
            password.push(allChars[Math.floor(Math.random() * allChars.length)]);
        }

        
        password = password.sort(() => Math.random() - 0.5).join('');

        console.log(password);
    } else {
        console.log('La longitud mínima debe ser de 8 caracteres.');
    }
}

generatePassword(8);
generatePassword(10);
