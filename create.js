const fs = require('fs');
const yaml = require('js-yaml');
const books = [
  { name: 'タイトル1', authors: ['著者A', '著者B'] },
  { name: 'タイトル2', authros: ['著者C', '著者D'] }
];

const yamlText = yaml.dump(books);
fs.writeFile('books.yaml', yamlText, 'utf8', (err) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
  }
  console.log('Yaml ファイルを保存しました');
});