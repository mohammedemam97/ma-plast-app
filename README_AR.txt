MA PLAST GROUP - Netlify Upload Ready

ارفع كل الملفات الموجودة في هذا الفولدر مباشرة على Netlify.

التحديثات في هذه النسخة:
- 100 منتج.
- عرض 8 منتجات في كل صفحة.
- Pagination احترافي.
- عمودين للمنتجات على الموبايل.
- صفحة About مستقلة: about.html.
- صفحة Contact مستقلة: contact.html.
- تحديث Service Worker إلى v8 لإظهار النسخة الجديدة.

مهم: ارفع المحتويات نفسها، وليس فولدر داخل فولدر.


Notifications update:
- Added notifications.html to manage scheduled local notifications.
- Notification interval is fixed at 30 minutes.
- Removed demo/test notifications from users.
- Notification icon and badge colors now follow the cart icon black/white style.
- True remote push notifications to all users require a backend push service such as Firebase or OneSignal.


تحديث Backend Notifications Only:
- تم حذف رابط Notifications من شاشة المستخدم.
- تم إيقاف إنشاء أيقونة الإشعارات ولوحة الإشعارات داخل واجهة المستخدم.
- صفحة notifications.html موجودة فقط كصفحة Backend مباشرة.
- افتحها يدويًا من:
  /notifications.html
- ملاحظة: هذه الصفحة مخفية من الواجهة وليست مؤمنة بكلمة مرور. لو تريد تأمين حقيقي استخدم Cloudflare Access أو صفحة Login.


تحديث:
- تم حذف أي رابط ظاهر لصفحة notifications.html من جميع الـ navbars.
- صفحة notifications.html ما زالت موجودة فقط للرابط المباشر:
  /notifications.html


تحديث:
- تم إضافة أيقونة الإشعارات في النافبار بجانب السلة.
- الأيقونة بنفس ألوان السلة: أبيض فوق الخلفية السوداء، وأسود بعد الـ scroll.
- الأيقونة تفتح صفحة notifications.html مباشرة.


تحديث:
- أيقونة الإشعارات تظهر فقط في النافبار.
- تم إزالة فتح صفحة notifications.html عند الضغط على الأيقونة.
- الصفحة ما زالت موجودة وتفتح فقط لو كتبت الرابط يدويًا:
  /notifications.html


تحديث:
- أيقونة الإشعارات في النافبار تفتح لوحة الإشعارات داخل نفس الصفحة.
- لا تفتح notifications.html عند الضغط على الأيقونة.
- صفحة notifications.html ما زالت للباك إند فقط وتفتح بالرابط المباشر.


تحديث Mobile Fix:
- تم إصلاح المساحة البيضاء في يمين الشاشة على الموبايل فقط.
- تم ضبط عرض الـ hero والـ navbar على 100vw بدون overflow.
- تم تحديث service worker cache لإجبار ظهور النسخة الجديدة.


OneSignal Web Push Update:
- تم تركيب OneSignal Web SDK.
- App ID: a4aee757-dd1f-4247-8ac7-ad5eaee17ea5
- الإشعارات الحقيقية تُرسل من OneSignal Dashboard لكل الأجهزة التي وافقت على الإشعارات.
- تم إضافة prompt احترافي للمستخدم.
- تم دمج OneSignal داخل service-worker.js.


OneSignal Fix v2:
- تمت إضافة OneSignalSDKWorker.js و OneSignalSDKUpdaterWorker.js في root.
- تم ضبط OneSignal init لاستخدام worker الافتراضي.
- تم إضافة optIn بعد السماح بالإشعارات.
- صفحة فحص خاصة:
  /onesignal-check.html
- App ID:
  a4aee757-dd1f-4247-8ac7-ad5eaee17ea5


OneSignal Click Fix:
- تم تحسين زر Allow ليستخدم OneSignal permission flow ثم optIn.
- لو الإشعارات Blocked يظهر للمستخدم تعليمات تفعيلها من إعدادات الموقع.
- تم تحديث صفحة onesignal-check.html للفحص.


OneSignal Force Permission Fix:
- زر Allow الآن يستخدم Notification.requestPermission مباشرة من ضغطة المستخدم.
- بعد السماح، يتم تشغيل OneSignal optIn.
- صفحة الفحص:
  /onesignal-check.html


OneSignal Existing Service Worker Fix:
- تم استخدام service-worker.js الحالي كـ OneSignal worker.
- تمت إضافة importScripts الخاص بـ OneSignal داخل service-worker.js.
- لا تعتمد هذه النسخة على OneSignalSDKWorker.js كـ controller منفصل.
- إذا كان المتصفح ما زال يستخدم worker قديم، افتح /onesignal-check.html واضغط Reset Service Worker ثم Refresh.


Check Button Fix:
- تم إعادة بناء صفحة onesignal-check.html بالكامل.
- الأزرار تعمل بـ addEventListener وليس onclick.
- الصفحة لا تعتمد على script.js أو style.css.


No Duplicate OneSignal Fix:
- تم حذف prompt المخصص من الموقع.
- الاعتماد الآن على OneSignal Native Prompt فقط.
- تم منع تسجيل service-worker.js من صفحات الموقع حتى لا يحدث اشتراكين.
- OneSignalSDKWorker.js هو worker الوحيد للإشعارات.
- بعد الرفع افتح /onesignal-check.html واضغط Reset Old Workers مرة واحدة ثم Refresh.


Custom Push Prompt Update:
- تم استبدال شكل OneSignal Native Prompt بواجهة MA PLAST احترافية.
- عند ضغط Enable Notifications يظهر طلب المتصفح الحقيقي مرة واحدة فقط.
- يجب إيقاف Auto Prompt داخل OneSignal Dashboard لتجنب ظهور طلبين:
  Settings > Push & In-App > Web Push > Permission Prompt Setup > Auto Prompt OFF
- لا ترسل الإشعارات مرتين لأن OneSignal worker فقط هو المستخدم.


Final Update v2:
- تم حذف أيقونة الإشعارات من داخل التطبيق.
- تم تثبيت عدد المنتجات على 30 منتج فقط.
- الموبايل يعرض 6 منتجات في الصفحة، والـ PC كما هو 8 منتجات في الصفحة.
- تم إضافة خصومات داخل كارت المنتج مع السعر القديم والتوفير.
- تم حذف Contact Information من الصفحة الرئيسية فقط.
- تم تصغير وتحسين شكل رسالة تفعيل الإشعارات.
- تم تفعيل اشتراك الإيميل في الفوتر عبر FormSubmit إلى hammedmo504@gmail.com.
- ملاحظة FormSubmit: أول إرسال قد يحتاج تأكيد البريد المستلم من inbox.


Welcome Email Update:
- تم تعديل اشتراك الإيميل في الفوتر بحيث العميل يستقبل رسالة ترحيب على الإيميل الذي يكتبه.
- يتم الإرسال عبر FormSubmit باستخدام _autoresponse.
- مهم: أول مرة قد يحتاج hammedmo504@gmail.com إلى تأكيد FormSubmit من رسالة تصل للبريد.
- بعد التأكيد، العملاء سيستقبلون رسالة الترحيب تلقائيًا.


Email Update:
- تم تغيير إيميل استقبال الاشتراكات ورسائل الموقع إلى:
  hammedmo504@gmail.com
- مهم: أول استخدام مع FormSubmit قد يحتاج تأكيد من Gmail.


Email Update:
- تم تغيير إيميل استقبال الاشتراكات ورسائل الموقع إلى:
  hammedmo504@gmail.com
- مهم: أول استخدام مع FormSubmit قد يحتاج تأكيد من Gmail.


FormSubmit Iframe Fix:
- تم إصلاح اشتراك الإيميل باستخدام form POST حقيقي إلى FormSubmit بدل fetch/ajax.
- الإرسال يتم إلى: hammedmo504@gmail.com
- يتم إرسال رسالة ترحيب للعميل عبر _autoresponse.
- أول إرسال يتطلب فتح Gmail (hammedmo504@gmail.com) والضغط على رسالة تأكيد FormSubmit.
- بعد التأكيد، ستصل رسائل الترحيب للعملاء تلقائيًا.


PDF Products + Logo + Email Fix:
- تمت إضافة 30 منتج من ملف MA PLAST لسته 2026.pdf.
- المنتجات مأخوذة من صفحات الأسعار: الفيز، المسامير، وصلات استانلس 304، وصلات شجرة استانلس 304، والشطاف الأوتوماتيك.
- تم استخراج لوجو MA PLAST من صفحة الغلاف داخل الملف واستخدامه في الموقع والأيقونات.
- تم ضبط نموذج الاشتراك في الفوتر بإرسال مباشر إلى FormSubmit:
  hammedmo504@gmail.com
- مهم: أول إرسال سيحتاج تأكيد FormSubmit من Gmail. بعد التأكيد سيرسل رسالة الترحيب للعميل تلقائيًا.


Real Logo Update:
- تم استخدام اللوجو الذي أرسله المستخدم كما هو داخل التطبيق.
- تم ضبط مقاسات اللوجو في النافبار والفوتر وصفحة الشكر.
- تم تحديث icon-192.png و icon-512.png ليكون اللوجو الطبيعي للتطبيق.
- بعد الرفع، يفضل عمل Clear cache أو Reset Service Worker لو ظهر اللوجو القديم.


Compact Card + Footer Logo Update:
- تم تحويل كارت المنتجات إلى شكل أقصر وأقرب للصورة المختارة.
- تم تقليل طول الكارت وتبسيط السعر والخصم في صف واحد.
- تم تحسين اللوجو في الفوتر والصفحات الداخلية بخلفية بيضاء واضحة خلف MA.
- تم إخفاء اشتراك الإيميل من الفوتر.
