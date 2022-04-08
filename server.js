
import path from 'path';
import express from 'express';

const app = express();
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, 'dist')));
app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port);
});