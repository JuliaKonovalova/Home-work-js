//Подключаем модуль path
const path = require("path");

//Экпортируем модули
module.exports = {
  //Входной файл
  entry: "./src/index.js",
  // Выходной файл проекта
  output: {
    // Название файла
    filename: "bundle.js",
    //Путь куда созранится (например, <название папки>/dist)
    path: path.resolve(__dirname, "dist"),
  },
};
