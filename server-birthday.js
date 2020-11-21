const http = require('http');
const server = http.createServer();


server.on('request', (req, res) => {
  if (req.method === 'POST' && req.url == '/day') {
    let body = []

    req
      .on('data', (chunk) => {
        body.push(chunk);
      })
      .on('end', () => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        body = Buffer.concat(body).toString()
        // console.log(day_birthday(body))
        res.end(day_birthday(body));
      });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

// Function that define birthdate's day

function day_birthday(date){
    let days=['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado','Domingo' ]
    let your_day = new Date(date)
    return days[your_day.getDay()]

}

server.listen(8000);
console.log('Server in http://localhost:8000');
