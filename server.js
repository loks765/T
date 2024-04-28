import express from 'express';
import { createServer } from 'http';
import path from 'path'; 
import { toBuffer } from 'qrcode';
import fetch from 'node-fetch';

function connect(conn, PORT, qrFileName) {
    if (!conn || !conn.ev) {
        console.error('');
        return;
    }

    let app = express();
    let server = createServer(app);
    let _qr = `اسم الملف: ${qrFileName}`;

    conn.ev.on('connection.update', function appQR({ qr }) {
        if (qr) _qr = qr;
    });

    app.use(async (req, res) => {
        res.setHeader('content-type', 'image/png');
        res.end(await toBuffer(_qr));
    });

    server.listen(PORT, () => {
        console.log('تم الاستماع إلى التطبيق على المنفذ', PORT);
        if (opts['keepalive']) keepAlive();
    });
}

function pipeEmit(event, event2, prefix = '') {
    let old = event.emit;
    event.emit = function (event, ...args) {
        old.emit(event, ...args);
        event2.emit(prefix + event, ...args);
    };
    return {
        unpipeEmit() {
            event.emit = old;
        }
    };
}

function keepAlive() {
    const url = `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co`;
    if (/(\/\/|\.)undefined\./.test(url)) {
        setInterval(() => {
            fetch(url).catch(console.error);
        }, 5 * 1000 * 60);
    }
}

export default connect;
