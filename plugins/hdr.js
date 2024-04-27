import FormData from "form-data";
import Jimp from "jimp";

let handler = async (m, { conn, usedPrefix, command }) => {
let done = '🏮'; 
       m.react(done);
  conn.hdr = conn.hdr ? conn.hdr : {}
  if (m.sender in conn.hdr)
    throw "❌ لا تزال هناك عملية لم تنتهي انتظر ..."
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || ""
  if (!mime)
    throw `*🏮 قم برد على الصورة التي تريد تحسين جودتها*`
  if (!/image\/(jpe?g|png)/.test(mime))
    throw `❌ رد علی صورة فقط`
  else conn.hdr[m.sender] = true;
  m.react("🏮")
  let img = await q.download?.()
  let error
  try {
    const This = await processing(img, "enhance")
    conn.sendFile(m.chat, This, "", "🍭╎تـفـضــل طـلـبــك˙⁠❥⁠", m)
  } catch (er) {
    error = true
  } finally {
    if (error) {
      m.reply(" ❌ حدث خطأ :(")
    }
    delete conn.hdr[m.sender]
  }
}

handler.help = ['hd']
handler.tags = ['tools', 'ai']
handler.command = /^(hd|جوده|جودة)$/i

handler.register = false
handler.limit = false

export default handler

async function processing(urlPath, method) {
  return new Promise(async (resolve, reject) => {
    let Methods = ["enhance", "recolor", "dehaze"]
    Methods.includes(method) ? (method = method) : (method = Methods[0]);
    let buffer,
      Form = new FormData(),
      scheme = "https" + "://" + "inferenceengine" + ".vyro" + ".ai/" + method;
    Form.append("model_version", 1, {
      "Content-Transfer-Encoding": "binary",
      contentType: "multipart/form-data; charset=uttf-8",
    });
    Form.append("image", Buffer.from(urlPath), {
      filename: "enhance_image_body.jpg",
      contentType: "image/jpeg",
    });
    Form.submit(
      {
        url: scheme,
        host: "inferenceengine" + ".vyro" + ".ai",
        path: "/" + method,
        protocol: "https:",
        headers: {
          "User-Agent": "okhttp/4.9.3",
          Connection: "Keep-Alive",
          "Accept-Encoding": "gzip",
        },
      },
      function (err, res) {
        if (err) reject();
        let data = [];
        res
          .on("data", function (chunk, resp) {
            data.push(chunk);
          })
          .on("end", () => {
            resolve(Buffer.concat(data));
          });
        res.on("error", (e) => {
          reject();
        });
      }
    );
  });
}