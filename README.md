#NODE.JS İNSTALL AND RUN COMMANDS

node --version

*Node.js Extension Pack     Wade Anderson 'ın isteğe bağlı
*Node.js nedir: Bizi js'in tarayıcı ile sınırlı çalışma ortamından kurtaran, js kodlarını çalıştırabildiğimiz bir enviroment'tır.Bazen server da çalışan js de denir.
*v8 engine nedir? Google taraqfından geliştirilmiş c++ ile  yazsılmış js kodlarını makine diline çeviren engiine'dir.Node.js de c++ ile yazılmıştır.
*Node.js de module ile paket kavramı aynı anlamda kullanılabilir.
*callback function asenkron çalışmayı sağlayan yöntemdir, her iş tek tek gelir ancak bir işin başlaması için diğer işin bitmesi beklenmez. 
*TCP=Transtion control panel
*IP=ınternet protokolü
*Port=bağlantı noktası demektir.Bunun anlamı o portun dinlenmesi ve o portttan gelen verilerin işlenmesi demektir.
*Package=Module=önceden hazırlanmış scriptlerdir.ör:express.js,fs,http
*NPM=Node Package Management system.paketleri indirmek gibi işlevleri yerine getirir.
*express:"^4.17.1" ^ anlamı minor ve patch değişiklikleri otomatik yap 17=minor 1=patch

mkdir nodeblog
node app.js or node app
npm init
npm -v
npm install   /node modules dosyasını silince tekrar oluşturmak için
npm install express /belli yönlendirmeleri yapar.node.js'de oluşturulan web uygulamalarını daha kolay sağlar.expressjs.com
npm install nodemon --save-dev  /yapılan değişikleri otomatik update etmesi  için her seferinde node app.js yapmaya gerek kalmaz.
npm install -g nodemon  /nodemon u global indirir.modules dosyasında dependencies te gözükmez
nodemon app  /js ortamndaki yaptığımız değişikleri izler otomatik olarak görünür yapar

*template engine ler HTML sayfalarını  daha kolay yazdırmamızı sağlar.ör:handlebars,....
npm install express-handlebars

