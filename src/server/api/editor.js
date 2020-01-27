// let axios = require('axios');
let AnswerModel = require('../model/editor');
let fs = require('fs');
const child_process = require('child_process');
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);
const runTagger = promisify(child_process.execFile);

// async function getImages(tag) {
//   const getImagesUrl = `services/rest/?method=flickr.photos.search&api_key=522c1f9009ca3609bcbaf08545f067ad
//   &tags=${tag}&tag_mode=any&per_page=100&format=json&safe_search=1&nojsoncallback=1`;
//   const baseUrl = 'https://api.flickr.com/';
//   return await axios({
//     url: getImagesUrl,
//     baseURL: baseUrl,
//     method: 'GET'
//   })
// }

async function all(content){
  await writeFile('C:\\Users\\weamh\\Desktop\\tmpText.txt', content);
    // runTagger
  await runTagger('C:\\Users\\weamh\\Desktop\\mainBat.bat', ['C:\\Users\\weamh\\Desktop\\tmpText.txt'], { cwd: 'C:\\Users\\weamh\\Desktop' });
  // console.log(output.stdout);
  const data = await readFile('C:\\Users\\weamh\\Desktop\\taggedDelimitedtmpText.txt', 'utf-8');
  return data;
}

module.exports = (app) => {
    app.post('/api/upload', function (req, res) {

        let content = req.body.text;
                
        AnswerModel
        .findOne({text: content})
        .then(doc => {
          if (doc != null) {
            console.log('text found in db!');
            res.json(doc.analysed_text_arr);
          } else {
            console.log('creating new entry in db!');
            let data_promise = all(content);
            data_promise
            .then((data) =>{
              let data_array = data.split('\n');
              let arr = [];
              for (let i = 0; i < data_array.length - 2; i++){
                let line_i = data_array[i].split(' ');
                if (!(line_i[0] === '') && line_i.length >= 5){
                  arr[i] = {
                    index: line_i[0],
                    word_in_text: line_i[1],
                    root: line_i[2],
                    word_without_starts: line_i[3],
                    analysis: line_i.slice(4, line_i.length - 2)
                  }
                } else if (line_i.length >= 6){
                  arr[i] = {
                    index: line_i[1],
                    word_in_text: line_i[2],
                    root: line_i[3],
                    word_without_starts: line_i[4],
                    analysis: line_i.slice(5, line_i.length - 2)
                  }
                }
              }
              
              let answer = new AnswerModel({text: content, analysed_text_arr: arr});
              answer
              .save(answer)
              .then(() => {
                res.json(answer.analysed_text_arr);
                res.end();
              })
            })
            .catch((e) => {
              console.log(e);
            });
          }
        });
        

      });
};
