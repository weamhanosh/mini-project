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

function make_id() {
  let length = Math.floor(Math.random() * 10);
  length += 10;
  
  let result           = '';
  let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

async function all(content, curr_id){
  await writeFile('C:\\Users\\weamh\\Desktop\\' + curr_id + '.txt', content);
    // runTagger
  await runTagger('C:\\Users\\weamh\\Desktop\\mainBat.bat', ['C:\\Users\\weamh\\Desktop\\' + curr_id + '.txt'], { cwd: 'C:\\Users\\weamh\\Desktop' });
  // console.log(output.stdout);
  const data = await readFile('C:\\Users\\weamh\\Desktop\\taggeddelimited' + curr_id + '.txt', 'utf-8');
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
            res.json(doc);
          } else {
            console.log('creating new entry in db!');
            let curr_id = make_id();
            let data_promise = all(content, curr_id);
            data_promise
            .then((data) =>{
              fs.unlink('C:\\Users\\weamh\\Desktop\\' + curr_id + '.txt', (err) => { if (err) console.error(err)})
              fs.unlink('C:\\Users\\weamh\\Desktop\\delimited' + curr_id + '.txt', (err) => { if (err) console.error(err)})
              fs.unlink('C:\\Users\\weamh\\Desktop\\taggeddelimited' + curr_id + '.txt', (err) => {if (err) console.error(err)})
              let data_array = data.split('\n');
              let arr = [];
              let m = -1;
              for (let i = 0; i < data_array.length - 2; i++){
                let line_i = data_array[i].split(' ');
                if (!(line_i[0] === '') && line_i.length >= 5){
                  if (line_i[0] === "0" && line_i !== ""){
                    m++;
                  }
                  arr[i] = {
                    index: line_i[0],
                    word_in_text: line_i[1],
                    root: line_i[2],
                    word_without_starts: line_i[3],
                    line_index: m,
                    analysis: line_i.slice(4, line_i.length - 2).filter(a => a !== "unspecified")
                  }
                } else if (line_i.length >= 6){
                  if (line_i[1] === "0"){
                    m++;
                  }
                  arr[i] = {
                    index: line_i[1],
                    word_in_text: line_i[2],
                    root: line_i[3],
                    word_without_starts: line_i[4],
                    line_index: m,
                    analysis: line_i.slice(5, line_i.length - 2).filter(a => a !== "unspecified")
                  }
                }
              }
              let line_length_arr = [];
              let text_array = content.split('\n');
              for(let i = 0; i < text_array.length; i++){
                line_length_arr[i] = {
                  line_index: i,
                  line_length: text_array[i].split(' ').length
                }
              }
              
              let answer = new AnswerModel({text: content, analysed_text_arr: arr, line_length_arr: line_length_arr, newline_counter: content.split('\n').length});
              answer
              .save(answer)
              .then(() => {
                res.json(answer);
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