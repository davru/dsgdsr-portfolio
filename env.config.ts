import { writeFile } from 'fs';
import { config } from 'dotenv';
config()

const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `export const environment = {
    production: true,
    aptabase_key: "${process.env.APTABASE_KEY}}"
};
`;

writeFile(targetPath, envConfigFile, 'utf8', (err) => {
    if (err) {
        return console.log(err);
    }
});
