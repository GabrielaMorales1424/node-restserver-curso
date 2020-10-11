//*************************** */
// Puerto
//*************************** */
process.env.PORT = process.env.PORT || 3000;


//*************************** */
// Entorno
//*************************** */
process.env.NODE_ENV = process.env.MODE_ENV || 'dev';

//*************************** */
// Vencimiento del Token
//*************************** */

//así expira en 30 dias - 60 * 60 es 1 hora, por 24, por 30
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//*************************** */
// SEED de autenticación
//*************************** */
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';