import { bootstrap } from './bootstrap';

export async function init() {
  const app = await bootstrap();
  await app.listen(3000).then(()=>console.log('App Started ...'));
}