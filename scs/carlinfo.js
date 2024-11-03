const {
  adams
} = require("../Ibrahim/adams");
const {
  default: axios
} = require("axios");
const pkg = require("@whiskeysockets/baileys");
const {
  generateWAMessageFromContent,
  proto
} = pkg;
adams({
  'nomCom': "carlinfo",
  'reaction': '🕵',
  'categorie': "User"
}, async (_0x526669, _0x2366dc, _0x1631bd) => {
  const {
    repondre: _0x30cad9,
    arg: _0x25768c,
    ms: _0x5abdd3
  } = _0x1631bd;
  try {
    if (!_0x25768c || _0x25768c.length === 0) {
      return _0x30cad9("Example dear *.carlinfo 1*");
    }
    await _0x30cad9("Syncing🔄 carltech info.....");
    const _0x3f32e9 = encodeURIComponent(_0x25768c.join(" "));
    const _0x262f15 = "https://spark-x-session.onrender.com/code?number=" + _0x3f32e9;
    const _0x44e048 = await axios.get(_0x262f15);
    const _0x3c2ebd = _0x44e048.data;
    if (_0x3c2ebd && _0x3c2ebd.code) {
      const _0x5b82ef = _0x3c2ebd.code;
      const _0x4247de = "\n❂─────═━┈┈━═──━┈⦾\n➻ BOT: *CYBERION-SPARK-X*\n➻ SERIES: *SPARK*\n➻ BOT ID: *" + _0x5b82ef + "*\n➻ DEV: *CARLTECH*\n❂─────═━┈┈━═──━┈⦾";
      const _0x54c216 = [{
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "🛃 CHANNEL LINK",
          'url': "https://whatsapp.com/channel/0029Vak0genJ93wQXq3q6X3h"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "⚙️ SESSION ID",
          'url': "https://spark-x-session.onrender.com"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "✨ SPARK-X REPO",
          'url': "https://github.com/Carl24tech/Cyberion-Spark-X"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "🧑‍🧑‍🧒‍🧒 JOIN OUR GROUP",
          'url': "https://chat.whatsapp.com/FNd2l56sAsdClsgAb4pbP0"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "🌍 TELEGRAM CHANNEL",
          'url': "https://t.me/carltechai"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "🎯 OUR WEBSITE",
          'url': "https://carltech-innovativehub.vercel.app/"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "📲 WHATSAPP",
          'url': "https://wa.link/c9qf2z"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "📲 CONTACT ME",
          'url': "https://t.me/carlltecch"
        })
      }, {
        'name': "cta_url",
        'buttonParamsJson': JSON.stringify({
          'display_text': "📥 FOLLOW WACHANNEL",
          'url': "https://whatsapp.com/channel/0029Vak0genJ93wQXq3q6X3h"
        })
      }];
      const _0x3383aa = generateWAMessageFromContent(_0x526669, {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadata': {},
              'deviceListMetadataVersion': 0x2
            },
            'interactiveMessage': proto.Message.InteractiveMessage.create({
              'body': proto.Message.InteractiveMessage.Body.create({
                'text': _0x4247de
              }),
              'footer': proto.Message.InteractiveMessage.Footer.create({
                'text': " *Cyberion-Spark-X*"
              }),
              'header': proto.Message.InteractiveMessage.Header.create({
                'title': '',
                'subtitle': '',
                'hasMediaAttachment': false
              }),
              'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
                'buttons': _0x54c216
              })
            })
          }
        }
      }, {});
      await _0x2366dc.relayMessage(_0x526669, _0x3383aa.message, {
        'messageId': _0x3383aa.key.id
      });
    } else {
      throw new Error("Invalid response from Api.");
    }
  } catch (_0x33de8f) {
    console.error("Error getting Api response:", _0x33de8f.message);
    _0x30cad9("Error getting response from Api.");
  }
});
