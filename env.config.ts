import { writeFile } from 'fs';
import { config } from 'dotenv';
const args = require('yargs').argv
config()

const targetPath = `./src/environments/environment${args.env === 'prod' ? '.prod' : ''}.ts`;

const envConfigFile = `export const environment = {
    production: ${args.env === 'prod' ? 'true' : 'false'},
    aptabase_key: "${process.env.APTABASE_KEY}",
    email_server: "${process.env.EMAIL_SERVER}",
    email_port: "${process.env.EMAIL_PORT}",
    email_key: "${process.env.EMAIL_KEY}"
};
`;

writeFile(targetPath, envConfigFile, 'utf8', (err) => {
    if (err) {
        return console.log(err);
    }
});
