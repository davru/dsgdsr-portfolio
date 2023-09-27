import { writeFile } from 'fs';
import { config } from 'dotenv';
config()

const targetPath = './src/environments/environment.ts';

const envConfigFile = `export const environment = {
    production: false,
    aptabase_key: "${process.env.APTABASE_KEY}"
};
`;

writeFile(targetPath, envConfigFile, 'utf8', (err) => {
    if (err) {
        return console.log(err);
    }
});
