// // import ffmpeg from 'fluent-ffmpeg';
// import fs from 'fs';
// import path from 'path';

// // Папка с изображениями
// const imagesDir = './src/assets/images';
// // Папка для уменьшенных изображений
// const outputDir = './src/assets/images/resized';

// // Создаем папку для уменьшенных изображений, если она не существует
// if (!fs.existsSync(outputDir)) {
//   fs.mkdirSync(outputDir);
// }

// // Получаем все изображения в папке
// fs.readdir(imagesDir, (err, files) => {
//   if (err) {
//     console.error('Ошибка при чтении папки:', err);
//     return;
//   }

//   // Фильтруем только изображения (например, jpg, png)
//   const imageFiles = files.filter((file) => /\.(jpg|jpeg|png)$/i.test(file));

//   imageFiles.forEach((file) => {
//     const inputPath = path.join(imagesDir, file);
//     const outputPath = path.join(outputDir, `resized-${file}`);

//     // Используем ffmpeg для изменения размера изображения
//     ffmpeg(inputPath)
//       .output(outputPath)
//       .size('800x?') // Уменьшаем изображение до ширины 800px, высота пропорциональна
//       .on('end', () => {
//         console.log(`Изображение ${file} было успешно уменьшено.`);
//       })
//       .on('error', (err: unknown) => {
//         console.error(`Ошибка при обработке ${file}:`, err);
//       })
//       .run();
//   });
// });
