const express = require('express');
const app = express();

app.use(express.json())


app.get('/:num', (request, response) => {
    const NUM = request.params.num
      let i, ResultadoFatorial=1
         for( i = 1;i <= NUM; i++){
            ResultadoFatorial = ResultadoFatorial * i;
            }


        response.json({
            ResultadoFatorial,
        })
})


app.listen(3000, () => {
    console.log('O servidor utilizara a porta 3000.')
})