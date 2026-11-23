/* Service worker خفيف: موجود عشان التطبيق يتثبت بس، ومن غير fetch handler
   عشان المتصفح ميشغّلوش مع كل فتحة (كان بياخد حوالي 1.5 ثانية قبل ما الصفحة تبدأ).
   كل الملفات بتيجي من GitHub Pages مباشرة، والنظام نفسه من Google Apps Script. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))).then(() => self.clients.claim()));   /* مسح الكاش القديم */
});
