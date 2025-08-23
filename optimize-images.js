const fs = require('fs');
const path = require('path');

// قائمة بالصور الكبيرة التي تحتاج تحسين
const largeImages = [
  'public/3d img/23522 (1).png', // 15MB
  'public/3d img/4hn.jpg', // 2.1MB
  'public/3d img/2f.jpg', // 1.4MB
  'public/2dimg/2021_Januari_71.jpg1.jpg', // 3.2MB
  'public/2dimg/Logo_Mockup_070.jpg', // 4.4MB
  'public/2dimg/fggh.jpg', // 1.5MB
];

console.log('⚠️  تحذير: الصور التالية كبيرة جداً وتؤثر على سرعة الموقع:');
largeImages.forEach(img => {
  const stats = fs.statSync(img);
  const sizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`📸 ${img}: ${sizeInMB}MB`);
});

console.log('\n💡 نصائح لتحسين الصور:');
console.log('1. استخدم أدوات مثل TinyPNG أو ImageOptim');
console.log('2. حول الصور إلى WebP format');
console.log('3. استخدم أحجام أصغر للصور');
console.log('4. استخدم lazy loading للصور');

console.log('\n🔧 أوامر مفيدة:');
console.log('npm install -g imagemin-cli');
console.log('imagemin public/3d\\ img/* --out-dir=public/3d\\ img/optimized');
console.log('imagemin public/2dimg/* --out-dir=public/2dimg/optimized');
