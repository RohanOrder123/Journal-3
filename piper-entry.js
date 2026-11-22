// Optional offline voice engine. Built into www/piper-bundle.js by the workflow (a failure here never breaks the APK build).
import * as tts from '@mintplex-labs/piper-tts-web';
window.RCPiper = tts;
