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
