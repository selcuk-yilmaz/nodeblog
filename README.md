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
npm init   /package.json dosyası oluşur
npm -v
npm install express /belli yönlendirmeleri yapar.node.js'de oluşturulan web uygulamalarını daha kolay sağlar.expressjs.com
npm install nodemon --save-dev  /yapılan değişikleri otomatik update etmesi  için her seferinde node app.js yapmaya gerek kalmaz.
npm install -g nodemon  /nodemon u global indirir.her projede indirmye gerek kalmaz.modules dosyasında dependencies te gözükmez
nodemon app  /js ortamndaki yaptığımız değişikleri izler otomatik olarak görünür yapar

npm install   /node modules dosyasını silince tekrar oluşturmak için kullanırız

*template engine ler HTML sayfalarını  daha kolay yazdırmamızı sağlar.ör:handlebars,....
npm install express-handlebars
*expresle genel olarak 2 iş yaparız.1-belli yönlendirmeleri yaparız.2-belli işlevsellikleri yani databaseden veri alma verme aslında bu işlevler middleware olarak denebilir
*express kütüphanesinde middleware  routingle beraber expresin omurgasıdır
*express.static= express de gömülü built-in middleware function dur.
*template engineler ör: jade edge handlebars.... 

*compass terminalde yapabileceğimiz işleri daha kolay yapabilmemizi sağlayan bir GUİ dir.
*mongoose nesne modelleme librarry dir.veritabanı ile irtiibatı sağlar ve verileri database yazar

npm install mongoose




//! EXPRESS.JS İLE İLGİLİ MVC DEN CONTROLLER İLE İLGİLİ GENEL BİR BİLGİ
Express.js frameworkünü kullanırken, controller bölümünün işlevlerini yerine getirmek için route mekanizması kullanılabilir. Route, HTTP isteklerine yanıt verecek olan kod bloğunun nerede olduğunu ve nasıl çalıştırılacağını tanımlar.

Express.js içinde, istekleri yönetmek için kullanılan yollar (route), genellikle controller bölümünde tanımlanır. Örneğin, bir web uygulamasına gelen bir HTTP GET isteğini işlemek için, route kullanılarak belirli bir fonksiyonun çağrılması sağlanır. Bu fonksiyon, genellikle controller bölümünde yer alır ve veri modeli ile iletişim kurarak, isteğe yanıt verir.

Bu yüzden, Express.js frameworkünü kullanırken, route mekanizması kullanarak controller bölümünün işlevlerini yerine getirmek mümkündür. Ancak, uygulamanın büyüklüğüne ve ihtiyaçlarına göre, controller bölümünün işlevleri, yalnızca route mekanizması ile sınırlı kalmamaktadır.

### bu bölüm chatGBT den router.post ve router.get hakkında
`router.post` ve `router.get`  Express.js (Node.js web framework) için yapılandırılmış rotalardır. Bu iki yapı arasındaki temel fark, kullanılan HTTP metodudur.

`router.post metodu`, tarayıcının bir form veya API çağrısı gönderdiğinde kullanılır. Bu metodun kullanımı, kullanıcının veri gönderdiği ve sunucunun bu veriyi işlemesi gerektiği durumlarda yararlıdır. Örneğin, kullanıcının bir kayıt formunu doldurduğunda ve sunucu bu formdaki bilgileri veritabanına kaydetmek için kullanılabilir.

`router.get` metodu ise, tarayıcının bir sayfayı yüklemek veya veri almak için bir istek gönderdiğinde kullanılır. Bu metodun kullanımı, kullanıcının veri almak için bir istek gönderdiği ve sunucunun bu isteği işlemesi gerektiği durumlarda yararlıdır. Örneğin, kullanıcının bir profil sayfasını görüntülemek için bir istek gönderdiğinde, sunucu kullanıcının profil bilgilerini veritabanından alıp tarayıcıya gönderebilir.

Özet olarak,
`router.post` metodu <br/>
* user tarafından gönderilen veriye cevap vermek için kullanılır <br/>
`router.get` metodu ise <br/>
* user tarafından istenen veriyi browsera göndermek için kullanılır. <br/>
### bu bölüm chatGBT'den res.redirect ve res.render hakkında
`res.redirect("/users/login")` komutu, kullanıcının tarayıcısının yönlendirilmesini sağlar ve yönlendirilen sayfaya bir GET isteği yapar. Örneğin, kullanıcı giriş sayfasına yönlendirilirse, tarayıcı kullanıcının giriş sayfasına gitmek için bir GET isteği yapar.

`res.render('site/addpost')` komutu ise, belirtilen dosyayı (örneğin addpost.ejs) tarayıcıya gönderir ve tarayıcı bu dosyayı işler. Bu komut, sunucunun tarayıcıya HTML, CSS ve JavaScript dosyaları göndermesini sağlar ve kullanıcının tarayıcısı bu dosyaları işler.

Özet olarak, `res.redirect()` yönlendirme yaparken `res.render()` ise sayfayı tarayıcıya gönderir.
