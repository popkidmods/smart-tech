
const {
  adams
} = require("../Ibrahim/adams");
const {
  getAllSudoNumbers,
  isSudoTableNotEmpty
} = require("../lib/sudo");
const conf = require("../set");
adams({
  'nomCom': "user",
  'categorie': "General",
  'reaction': '🏷'
}, async (_0xa6496f, _0x52b244, _0x2d0fe) => {
  const {
    ms: _0x4862b7,
    mybotpic: _0x1906aa
  } = _0x2d0fe;
  const _0x64758 = await isSudoTableNotEmpty();
  if (_0x64758) {
    let _0x164478 = "*My Super-User*\n\n *Owner Number*\n :\n- 🌟 @" + conf.NUMERO_OWNER + "\n\n------ *other sudos* -----\n";
    let _0x3a22e9 = await getAllSudoNumbers();
    for (const _0x134679 of _0x3a22e9) {
      if (_0x134679) {
        sudonumero = _0x134679.replace(/[^0-9]/g, '');
        _0x164478 += "- 💼 @" + sudonumero + "\n";
      } else {
        return;
      }
    }
    const _0x119673 = conf.NUMERO_OWNER.replace(/[^0-9]/g) + "@s.whatsapp.net";
    const _0x3485c3 = _0x3a22e9.concat([_0x119673]);
    console.log(_0x3a22e9);
    console.log(_0x3485c3);
    _0x52b244.sendMessage(_0xa6496f, {
      'image': {
        'url': _0x1906aa()
      },
      'caption': _0x164478,
      'mentions': _0x3485c3
    });
  } else {
    const _0x533c2a = "BEGIN:VCARD\nVERSION:3.0\nFN:" + conf.OWNER_NAME + "\n" + "ORG:undefined;\n" + "TEL;type=CELL;type=VOICE;waid=" + conf.NUMERO_OWNER + ':+' + conf.NUMERO_OWNER + "\n" + "END:VCARD";
    _0x52b244.sendMessage(_0xa6496f, {
      'contacts': {
        'displayName': conf.OWNER_NAME,
        'contacts': [{
          'vcard': _0x533c2a
        }]
      }
    }, {
      'quoted': _0x4862b7
    });
  }
});
adams({
  'nomCom': "developer",
  'categorie': "General",
  'reaction': '🆘'
}, async (_0x5a9da8, _0xfc6236, _0x99bde1) => {
  const {
    ms: _0x5ab7ce,
    mybotpic: _0x178bfe
  } = _0x99bde1;
  const _0x26c1f9 = [{
    'nom': "CARL WILLIAM",
    'numero': "254770954948"
  }, {
    'nom': "᚛CARL WILLIAM᚜",
    'numero': "254740271632"
  }];
  let _0x113bce = "👋 *Welcome to CarlTech* here is the developer numbers:\n\n";
  for (const _0xc25bc0 of _0x26c1f9) {
    _0x113bce += "----------------\n• " + _0xc25bc0.nom + " : https://wa.me/" + _0xc25bc0.numero + "\n";
  }
  var _0x56cd30 = _0x178bfe();
  if (_0x56cd30.match(/\.(mp4|gif)$/i)) {
    try {
      _0xfc6236.sendMessage(_0x5a9da8, {
        'video': {
          'url': _0x56cd30
        },
        'caption': _0x113bce
      }, {
        'quoted': _0x5ab7ce
      });
    } catch (_0x79ced5) {
      console.log("🥵🥵 Menu erreur " + _0x79ced5);
      repondre("🥵🥵 Menu erreur " + _0x79ced5);
    }
  } else {
    if (_0x56cd30.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        _0xfc6236.sendMessage(_0x5a9da8, {
          'image': {
            'url': _0x56cd30
          },
          'caption': _0x113bce
        }, {
          'quoted': _0x5ab7ce
        });
      } catch (_0x4f3cd5) {
        console.log("🥵🥵 Menu erreur " + _0x4f3cd5);
        repondre("🥵🥵 Menu erreur " + _0x4f3cd5);
      }
    } else {
      repondre(_0x56cd30);
      repondre("link error");
    }
  }
});
adams({
  'nomCom': "coder",
  'categorie': "General"
}, async (_0x481049, _0x527f86, _0x186db1) => {
  const {
    ms: _0x5588ae,
    repondre: _0x4015ca,
    auteurMessage: _0x20f61e
  } = _0x186db1;
  _0x4015ca("Hello..wanna contact my handsome developer ");
  await _0x527f86.sendMessage(_0x20f61e, {
    'text': "254740271632"
  }, {
    'quoted': _0x5588ae
  });
});
