import { writeFile } from 'fs';

const targetPath = './src/environments/environment.prod.ts';

const envConfigFile = `export const environment = {
    production: true,
    supabaseUrl: '${process.env.SUPABASE_URL}',
    supabaseKey: '${process.env.SUPABASE_KEY}'
};
`;

writeFile(targetPath, envConfigFile, 'utf8', (err) => {
  if (err) {
    return console.log(err);
  }
});
