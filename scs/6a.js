

const {
  adams
} = require("../Ibrahim/adams");
const {
  Sticker,
  StickerTypes
} = require("wa-sticker-formatter");
const {
  ajouterOuMettreAJourJid,
  mettreAJourAction,
  verifierEtatJid
} = require("../lib/antilien");
const {
  atbajouterOuMettreAJourJid,
  atbverifierEtatJid
} = require("../lib/antibot");
const {
  search,
  download
} = require("aptoide-scraper");
const fs = require("fs-extra");
const conf = require("../config");
const {
  default: axios
} = require("axios");
adams({
  'nomCom': "tagall",
  'categorie': "Group",
  'reaction': '📣'
}, async (_0x17b39, _0xeca6bc, _0x59033f) => {
  const {
    ms: _0x3497fb,
    repondre: _0x545a79,
    arg: _0x1718a2,
    verifGroupe: _0x1eb871,
    nomGroupe: _0x6e14ee,
    infosGroupe: _0x56caf9,
    nomAuteurMessage: _0x145198,
    verifAdmin: _0x322bb,
    superUser: _0x2ac805
  } = _0x59033f;
  if (!_0x1eb871) {
    _0x545a79("✋🏿 ✋🏿this command is reserved for groups ❌");
    return;
  }
  if (!_0x1718a2 || _0x1718a2 === " ") {
    mess = "Aucun Message";
  } else {
    mess = _0x1718a2.join(" ");
  }
  ;
  let _0x274d90 = _0x1eb871 ? await _0x56caf9.participants : '';
  var _0x35326c = '';
  _0x35326c += "\n \n╭─────────────━┈⊷ \n│🕵𝐂𝐘𝐁𝐄𝐑𝐈𝐎𝐍 𝐓𝐀𝐆𝐒\n╰─────────────━┈⊷ \n\n│👥 *Group* : " + _0x6e14ee + " \n│👤 *Hey😀* : *" + _0x145198 + "* \n│📜 *Message* : *" + mess + "* \n╰─────────────━┈⊷\n\n\n\n\n";
  let _0x1924b1 = ['🦴', '👀', "😮‍💨", '❌', '✔️', '😇', '⚙️', '🔧', '🎊', '😡', "🙏🏿", '⛔️', '$', '😟', '🥵', '🐅'];
  let _0x2da63e = Math.floor(Math.random() * (_0x1924b1.length - 1));
  for (const _0x337b12 of _0x274d90) {
    _0x35326c += _0x1924b1[_0x2da63e] + " @" + _0x337b12.id.split('@')[0] + "\n";
  }
  if (_0x322bb || _0x2ac805) {
    _0xeca6bc.sendMessage(_0x17b39, {
      'text': _0x35326c,
      'mentions': _0x274d90.map(_0x2e6c27 => _0x2e6c27.id)
    }, {
      'quoted': _0x3497fb
    });
  } else {
    _0x545a79("command reserved for admins");
  }
});
adams({
  'nomCom': "link",
  'categorie': "Group",
  'reaction': '🙋'
}, async (_0x632d6e, _0x3ddd4e, _0x23691e) => {
  const {
    repondre: _0x5e4928,
    nomGroupe: _0xa2fb65,
    nomAuteurMessage: _0x47b3e0,
    verifGroupe: _0x270cfc
  } = _0x23691e;
  if (!_0x270cfc) {
    _0x5e4928("wait bro , you want the link to my dm?");
    return;
  }
  ;
  var _0x2f8f4e = await _0x3ddd4e.groupInviteCode(_0x632d6e);
  var _0x5b9ce1 = "https://chat.whatsapp.com/" + _0x2f8f4e;
  let _0x320787 = "hello " + _0x47b3e0 + " , here is the group link for " + _0xa2fb65 + " \n\n\nGroup link :" + _0x5b9ce1 + " \n\n©𝐂𝐚𝐫𝐥𝐓𝐞𝐜𝐡 𝐚𝐧𝐝 𝐈𝐛𝐫𝐚𝐡𝐢𝐦 𝐀𝐝𝐚𝐦𝐬 𝐒𝐜𝐢𝐞𝐧𝐜𝐞";
  _0x5e4928(_0x320787);
});
adams({
  'nomCom': "promote",
  'categorie': "Group",
  'reaction': "👨🏿‍💼"
}, async (_0x344752, _0x4f65e9, _0x5977e2) => {
  let {
    repondre: _0x1c0231,
    msgRepondu: _0x358e72,
    infosGroupe: _0x291580,
    auteurMsgRepondu: _0x58043d,
    verifGroupe: _0x5e8b48,
    auteurMessage: _0x545915,
    superUser: _0x49d1c4,
    idBot: _0x34af6f
  } = _0x5977e2;
  let _0x23389c = _0x5e8b48 ? await _0x291580.participants : '';
  if (!_0x5e8b48) {
    return _0x1c0231("For groups only");
  }
  const _0x18b2a6 = _0x2807af => {
    for (const _0x150bbe of _0x23389c) {
      if (_0x150bbe.id !== _0x2807af) {
        continue;
      } else {
        return true;
      }
    }
  };
  const _0x2c6fb2 = _0x166d52 => {
    let _0x51bfa8 = [];
    for (m of _0x166d52) {
      if (m.admin == null) {
        continue;
      }
      _0x51bfa8.push(m.id);
    }
    return _0x51bfa8;
  };
  const _0x35da72 = _0x5e8b48 ? _0x2c6fb2(_0x23389c) : '';
  let _0x35a480 = _0x5e8b48 ? _0x35da72.includes(_0x58043d) : false;
  let _0x239d00 = _0x18b2a6(_0x58043d);
  let _0x28377f = _0x5e8b48 ? _0x35da72.includes(_0x545915) : false;
  zkad = _0x5e8b48 ? _0x35da72.includes(_0x34af6f) : false;
  try {
    if (_0x28377f || _0x49d1c4) {
      if (_0x358e72) {
        if (zkad) {
          if (_0x239d00) {
            if (_0x35a480 == false) {
              var _0x3c47d6 = "🎊🎊🎊 @" + _0x58043d.split('@')[0] + " rose in rank.\n\n he/she has been named group administrator.";
              await _0x4f65e9.groupParticipantsUpdate(_0x344752, [_0x58043d], "promote");
              _0x4f65e9.sendMessage(_0x344752, {
                'text': _0x3c47d6,
                'mentions': [_0x58043d]
              });
            } else {
              return _0x1c0231("This member is already an administrator of the group.");
            }
          } else {
            return _0x1c0231("This user is not part of the group.");
          }
        } else {
          return _0x1c0231("Sorry, I cannot perform this action because I am not an administrator of the group.");
        }
      } else {
        _0x1c0231("please tag the member to be nominated");
      }
    } else {
      return _0x1c0231("Sorry I cannot perform this action because you are not an administrator of the group.");
    }
  } catch (_0x1064fc) {
    _0x1c0231("oups " + _0x1064fc);
  }
});
adams({
  'nomCom': "demote",
  'categorie': "Group",
  'reaction': "👨🏿‍💼"
}, async (_0x3cab65, _0x1ac3c7, _0x2f6581) => {
  let {
    repondre: _0x514307,
    msgRepondu: _0x12547b,
    infosGroupe: _0x4e53ff,
    auteurMsgRepondu: _0x5d9799,
    verifGroupe: _0x1a34e8,
    auteurMessage: _0x15602e,
    superUser: _0x1ea3cc,
    idBot: _0x33cf21
  } = _0x2f6581;
  let _0x8d38c = _0x1a34e8 ? await _0x4e53ff.participants : '';
  if (!_0x1a34e8) {
    return _0x514307("For groups only");
  }
  const _0x194afe = _0xeee5a1 => {
    for (const _0x4c1f2b of _0x8d38c) {
      if (_0x4c1f2b.id !== _0xeee5a1) {
        continue;
      } else {
        return true;
      }
    }
  };
  const _0x108f5b = _0x600274 => {
    let _0x294e45 = [];
    for (m of _0x600274) {
      if (m.admin == null) {
        continue;
      }
      _0x294e45.push(m.id);
    }
    return _0x294e45;
  };
  const _0x2e3466 = _0x1a34e8 ? _0x108f5b(_0x8d38c) : '';
  let _0x115ee0 = _0x1a34e8 ? _0x2e3466.includes(_0x5d9799) : false;
  let _0xb576af = _0x194afe(_0x5d9799);
  let _0x186084 = _0x1a34e8 ? _0x2e3466.includes(_0x15602e) : false;
  zkad = _0x1a34e8 ? _0x2e3466.includes(_0x33cf21) : false;
  try {
    if (_0x186084 || _0x1ea3cc) {
      if (_0x12547b) {
        if (zkad) {
          if (_0xb576af) {
            if (_0x115ee0 == false) {
              _0x514307("This member is not a group administrator.");
            } else {
              var _0x48939a = '@' + _0x5d9799.split('@')[0] + " was removed from his position as a group administrator\n";
              await _0x1ac3c7.groupParticipantsUpdate(_0x3cab65, [_0x5d9799], "demote");
              _0x1ac3c7.sendMessage(_0x3cab65, {
                'text': _0x48939a,
                'mentions': [_0x5d9799]
              });
            }
          } else {
            return _0x514307("This user is not part of the group.");
          }
        } else {
          return _0x514307("Sorry I cannot perform this action because I am not an administrator of the group.");
        }
      } else {
        _0x514307("please tag the member to be removed");
      }
    } else {
      return _0x514307("Sorry I cannot perform this action because you are not an administrator of the group.");
    }
  } catch (_0x23687f) {
    _0x514307("oups " + _0x23687f);
  }
});
adams({
  'nomCom': "remove",
  'categorie': "Group",
  'reaction': "👨🏿‍💼"
}, async (_0x2cfdf0, _0x25767d, _0x5c3143) => {
  let {
    repondre: _0x448bf6,
    msgRepondu: _0x51d9b2,
    infosGroupe: _0x4c5e12,
    auteurMsgRepondu: _0x5148fe,
    verifGroupe: _0x4b9c43,
    nomAuteurMessage: _0x334e86,
    auteurMessage: _0x29544a,
    superUser: _0x411363,
    idBot: _0x1ec70a
  } = _0x5c3143;
  let _0x4dfa88 = _0x4b9c43 ? await _0x4c5e12.participants : '';
  if (!_0x4b9c43) {
    return _0x448bf6("for groups only");
  }
  const _0x2ea950 = _0x42e0e7 => {
    for (const _0x34e187 of _0x4dfa88) {
      if (_0x34e187.id !== _0x42e0e7) {
        continue;
      } else {
        return true;
      }
    }
  };
  const _0x391392 = _0x415c92 => {
    let _0x431754 = [];
    for (m of _0x415c92) {
      if (m.admin == null) {
        continue;
      }
      _0x431754.push(m.id);
    }
    return _0x431754;
  };
  const _0x3e3ff7 = _0x4b9c43 ? _0x391392(_0x4dfa88) : '';
  let _0x543b53 = _0x4b9c43 ? _0x3e3ff7.includes(_0x5148fe) : false;
  let _0x355555 = _0x2ea950(_0x5148fe);
  let _0x409105 = _0x4b9c43 ? _0x3e3ff7.includes(_0x29544a) : false;
  zkad = _0x4b9c43 ? _0x3e3ff7.includes(_0x1ec70a) : false;
  try {
    if (_0x409105 || _0x411363) {
      if (_0x51d9b2) {
        if (zkad) {
          if (_0x355555) {
            if (_0x543b53 == false) {
              var _0x5c5275 = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", {
                'pack': "Cyberion",
                'author': _0x334e86,
                'type': StickerTypes.FULL,
                'categories': ['🤩', '🎉'],
                'id': "12345",
                'quality': 0x32,
                'background': "#000000"
              });
              await _0x5c5275.toFile("st.webp");
              var _0x42f515 = '@' + _0x5148fe.split('@')[0] + " was removed from the group.\n";
              await _0x25767d.groupParticipantsUpdate(_0x2cfdf0, [_0x5148fe], "remove");
              _0x25767d.sendMessage(_0x2cfdf0, {
                'text': _0x42f515,
                'mentions': [_0x5148fe]
              });
            } else {
              _0x448bf6("This member cannot be removed because he is an administrator of the group.");
            }
          } else {
            return _0x448bf6("This user is not part of the group.");
          }
        } else {
          return _0x448bf6("Sorry, I cannot perform this action because I am not an administrator of the group.");
        }
      } else {
        _0x448bf6("please tag the member to be removed");
      }
    } else {
      return _0x448bf6("Sorry I cannot perform this action because you are not an administrator of the group .");
    }
  } catch (_0x50a411) {
    _0x448bf6("oups " + _0x50a411);
  }
});
adams({
  'nomCom': "del",
  'categorie': "Group",
  'reaction': '🧹'
}, async (_0x3e0c87, _0xa71df7, _0x355e0b) => {
  const {
    ms: _0x8803de,
    repondre: _0x1c00aa,
    verifGroupe: _0x46cdad,
    auteurMsgRepondu: _0x288fda,
    idBot: _0x382458,
    msgRepondu: _0x2e23f1,
    verifAdmin: _0x29dd7b,
    superUser: _0x389595
  } = _0x355e0b;
  if (!_0x2e23f1) {
    _0x1c00aa("Please mention the message to delete.");
    return;
  }
  if (_0x389595 && _0x288fda == _0x382458) {
    if (_0x288fda == _0x382458) {
      const _0xaa30dd = {
        'remoteJid': _0x3e0c87,
        'fromMe': true,
        'id': _0x8803de.message.extendedTextMessage.contextInfo.stanzaId
      };
      await _0xa71df7.sendMessage(_0x3e0c87, {
        'delete': _0xaa30dd
      });
      return;
    }
  }
  if (_0x46cdad) {
    if (_0x29dd7b || _0x389595) {
      try {
        const _0x7fbb46 = {
          'remoteJid': _0x3e0c87,
          'id': _0x8803de.message.extendedTextMessage.contextInfo.stanzaId,
          'fromMe': false,
          'participant': _0x8803de.message.extendedTextMessage.contextInfo.participant
        };
        await _0xa71df7.sendMessage(_0x3e0c87, {
          'delete': _0x7fbb46
        });
        return;
      } catch (_0x1c02a9) {
        _0x1c00aa("I need admin rights.");
      }
    } else {
      _0x1c00aa("Sorry, you are not an administrator of the group.");
    }
  }
});
adams({
  'nomCom': "info",
  'categorie': "Group"
}, async (_0xa24a62, _0x4e94dd, _0x257e21) => {
  const {
    ms: _0x48dc1b,
    repondre: _0x1710e4,
    verifGroupe: _0x3f2100
  } = _0x257e21;
  if (!_0x3f2100) {
    _0x1710e4("order reserved for the group only");
    return;
  }
  ;
  try {
    ppgroup = await _0x4e94dd.profilePictureUrl(_0xa24a62, "image");
  } catch {
    ppgroup = conf.IMAGE_MENU;
  }
  const _0x48b77b = await _0x4e94dd.groupMetadata(_0xa24a62);
  let _0x1bda2f = {
    'image': {
      'url': ppgroup
    },
    'caption': "*━━━━『Group Info』━━━━*\n\n*🎐Name:* " + _0x48b77b.subject + "\n\n*🔩Group's ID:* " + _0xa24a62 + "\n\n*🔍Desc:* \n\n" + _0x48b77b.desc
  };
  _0x4e94dd.sendMessage(_0xa24a62, _0x1bda2f, {
    'quoted': _0x48dc1b
  });
});
adams({
  'nomCom': "antilink",
  'categorie': "Group",
  'reaction': '🚫'
}, async (_0x33eb0d, _0x23b27d, _0x579dfb) => {
  var {
    repondre: _0x573ee3,
    arg: _0x1e22a3,
    verifGroupe: _0x538983,
    superUser: _0x5e6793,
    verifAdmin: _0x2309af
  } = _0x579dfb;
  if (!_0x538983) {
    return _0x573ee3("*for groups only*");
  }
  if (_0x5e6793 || _0x2309af) {
    const _0x42bba8 = await verifierEtatJid(_0x33eb0d);
    try {
      if (!_0x1e22a3 || !_0x1e22a3[0] || _0x1e22a3 === " ") {
        _0x573ee3("antilink on to activate the anti-link feature\nantilink off to deactivate the anti-link feature\nantilink action/remove to directly remove the link without notice\nantilink action/warn to give warnings\nantilink action/delete to remove the link without any sanctions\n\nPlease note that by default, the anti-link feature is set to delete.");
        return;
      }
      ;
      if (_0x1e22a3[0] === 'on') {
        if (_0x42bba8) {
          _0x573ee3("the antilink is already activated for this group");
        } else {
          await ajouterOuMettreAJourJid(_0x33eb0d, "oui");
          _0x573ee3("the antilink is activated successfully");
        }
      } else {
        if (_0x1e22a3[0] === "off") {
          if (_0x42bba8) {
            await ajouterOuMettreAJourJid(_0x33eb0d, "non");
            _0x573ee3("The antilink has been successfully deactivated");
          } else {
            _0x573ee3("antilink is not activated for this group");
          }
        } else {
          if (_0x1e22a3.join('').split('/')[0] === "action") {
            let _0x1dc0fd = _0x1e22a3.join('').split('/')[1].toLowerCase();
            if (_0x1dc0fd == "remove" || _0x1dc0fd == "warn" || _0x1dc0fd == "delete") {
              await mettreAJourAction(_0x33eb0d, _0x1dc0fd);
              _0x573ee3("The anti-link action has been updated to " + _0x1e22a3.join('').split('/')[1]);
            } else {
              _0x573ee3("The only actions available are warn, remove, and delete");
            }
          } else {
            _0x573ee3("antilink on to activate the anti-link feature\nantilink off to deactivate the anti-link feature\nantilink action/remove to directly remove the link without notice\nantilink action/warn to give warnings\nantilink action/delete to remove the link without any sanctions\n\nPlease note that by default, the anti-link feature is set to delete.");
          }
        }
      }
    } catch (_0x2dc998) {
      _0x573ee3(_0x2dc998);
    }
  } else {
    _0x573ee3("You are not entitled to this order");
  }
});
adams({
  'nomCom': "antibot",
  'categorie': "Group",
  'reaction': '😬'
}, async (_0x3a2536, _0x386574, _0xea9ba9) => {
  var {
    repondre: _0x3b43af,
    arg: _0x32a6f8,
    verifGroupe: _0x23eb96,
    superUser: _0x75fcb8,
    verifAdmin: _0x4d4070
  } = _0xea9ba9;
  if (!_0x23eb96) {
    return _0x3b43af("*for groups only*");
  }
  if (_0x75fcb8 || _0x4d4070) {
    const _0x217c4f = await atbverifierEtatJid(_0x3a2536);
    try {
      if (!_0x32a6f8 || !_0x32a6f8[0] || _0x32a6f8 === " ") {
        _0x3b43af("antibot on to activate the anti-bot feature\nantibot off to deactivate the antibot feature\nantibot action/remove to directly remove the bot without notice\nantibot action/warn to give warnings\nantilink action/delete to remove the bot message without any sanctions\n\nPlease note that by default, the anti-bot feature is set to delete.");
        return;
      }
      ;
      if (_0x32a6f8[0] === 'on') {
        if (_0x217c4f) {
          _0x3b43af("the antibot is already activated for this group");
        } else {
          await atbajouterOuMettreAJourJid(_0x3a2536, "oui");
          _0x3b43af("the antibot is successfully activated");
        }
      } else {
        if (_0x32a6f8[0] === "off") {
          if (_0x217c4f) {
            await atbajouterOuMettreAJourJid(_0x3a2536, "non");
            _0x3b43af("The antibot has been successfully deactivated");
          } else {
            _0x3b43af("antibot is not activated for this group");
          }
        } else {
          if (_0x32a6f8.join('').split('/')[0] === "action") {
            let _0x20c406 = _0x32a6f8.join('').split('/')[1].toLowerCase();
            if (_0x20c406 == "remove" || _0x20c406 == "warn" || _0x20c406 == "delete") {
              await mettreAJourAction(_0x3a2536, _0x20c406);
              _0x3b43af("The anti-bot action has been updated to " + _0x32a6f8.join('').split('/')[1]);
            } else {
              _0x3b43af("The only actions available are warn, remove, and delete");
            }
          } else {
            _0x3b43af("antibot on to activate the anti-bot feature\nantibot off to deactivate the antibot feature\nantibot action/remove to directly remove the bot without notice\nantibot action/warn to give warnings\nantilink action/delete to remove the bot message without any sanctions\n\nPlease note that by default, the anti-bot feature is set to delete.");
          }
        }
      }
    } catch (_0x226151) {
      _0x3b43af(_0x226151);
    }
  } else {
    _0x3b43af("You are not entitled to this order");
  }
});
adams({
  'nomCom': "group",
  'categorie': "Group"
}, async (_0xa26c34, _0x1ef664, _0x2e7007) => {
  const {
    repondre: _0xd0d115,
    verifGroupe: _0xaf18fe,
    verifAdmin: _0x2ffdd1,
    superUser: _0x45c79c,
    arg: _0x441e3f
  } = _0x2e7007;
  if (!_0xaf18fe) {
    _0xd0d115("order reserved for group only");
    return;
  }
  ;
  if (_0x45c79c || _0x2ffdd1) {
    if (!_0x441e3f[0]) {
      _0xd0d115("Instructions:\n\nType group open or close");
      return;
    }
    const _0x4752bc = _0x441e3f.join(" ");
    switch (_0x4752bc) {
      case "open":
        await _0x1ef664.groupSettingUpdate(_0xa26c34, "not_announcement");
        _0xd0d115("group open");
        break;
      case "close":
        await _0x1ef664.groupSettingUpdate(_0xa26c34, "announcement");
        _0xd0d115("Group close successfully");
        break;
      default:
        _0xd0d115("Please don't invent an option");
    }
  } else {
    _0xd0d115("order reserved for the administratorr");
    return;
  }
});
adams({
  'nomCom': "left",
  'categorie': "Mods"
}, async (_0x3f01ca, _0x4d3563, _0x3e4332) => {
  const {
    repondre: _0x26dd08,
    verifGroupe: _0x51d2b3,
    superUser: _0x14ab6
  } = _0x3e4332;
  if (!_0x51d2b3) {
    _0x26dd08("order reserved for group only");
    return;
  }
  ;
  if (!_0x14ab6) {
    _0x26dd08("command reserved for the bot owner");
    return;
  }
  await _0x26dd08("sayonnara");
  _0x4d3563.groupLeave(_0x3f01ca);
});
adams({
  'nomCom': "gname",
  'categorie': "Group"
}, async (_0x3f3b27, _0x146b8e, _0x2e2eaa) => {
  const {
    arg: _0x49a158,
    repondre: _0x1ae471,
    verifAdmin: _0x47a14d
  } = _0x2e2eaa;
  if (!_0x47a14d) {
    _0x1ae471("order reserved for administrators of the group");
    return;
  }
  ;
  if (!_0x49a158[0]) {
    _0x1ae471("Please enter the group name");
    return;
  }
  ;
  const _0x4d35b4 = _0x49a158.join(" ");
  await _0x146b8e.groupUpdateSubject(_0x3f3b27, _0x4d35b4);
  _0x1ae471("group name refresh: *" + _0x4d35b4 + '*');
});
adams({
  'nomCom': "gdesc",
  'categorie': "Group"
}, async (_0x46b800, _0x1151b3, _0xdbb838) => {
  const {
    arg: _0x3aefde,
    repondre: _0x4d25ca,
    verifAdmin: _0x3793ab
  } = _0xdbb838;
  if (!_0x3793ab) {
    _0x4d25ca("order reserved for administrators of the group");
    return;
  }
  ;
  if (!_0x3aefde[0]) {
    _0x4d25ca("Please enter the group description");
    return;
  }
  ;
  const _0x3ae47c = _0x3aefde.join(" ");
  await _0x1151b3.groupUpdateDescription(_0x46b800, _0x3ae47c);
  _0x4d25ca("group description update: *" + _0x3ae47c + '*');
});
adams({
  'nomCom': "gpp",
  'categorie': "Group"
}, async (_0x530dad, _0xe916c5, _0x28165d) => {
  const {
    repondre: _0x579651,
    msgRepondu: _0x23b0b1,
    verifAdmin: _0x2766cc
  } = _0x28165d;
  if (!_0x2766cc) {
    _0x579651("order reserved for administrators of the group");
    return;
  }
  ;
  if (_0x23b0b1.imageMessage) {
    const _0x440958 = await _0xe916c5.downloadAndSaveMediaMessage(_0x23b0b1.imageMessage);
    await _0xe916c5.updateProfilePicture(_0x530dad, {
      'url': _0x440958
    }).then(() => {
      _0xe916c5.sendMessage(_0x530dad, {
        'text': "Group pfp changed"
      });
      fs.unlinkSync(_0x440958);
    })["catch"](() => _0xe916c5.sendMessage(_0x530dad, {
      'text': err
    }));
  } else {
    _0x579651("Please mention an image");
  }
});
adams({
  'nomCom': "hidetag",
  'categorie': "Group",
  'reaction': '🎤'
}, async (_0x446e39, _0x4dcdd5, _0x58303e) => {
  const {
    repondre: _0x45bf4a,
    msgRepondu: _0x5ac1bd,
    verifGroupe: _0x307e97,
    arg: _0x32a794,
    verifAdmin: _0x4ca402,
    superUser: _0x126426
  } = _0x58303e;
  if (!_0x307e97) {
    _0x45bf4a("This command is only allowed in groups.");
  }
  ;
  if (_0x4ca402 || _0x126426) {
    let _0x21102b = await _0x4dcdd5.groupMetadata(_0x446e39);
    let _0x3286dc = [];
    for (const _0x550a9a of _0x21102b.participants) {
      _0x3286dc.push(_0x550a9a.id);
    }
    if (_0x5ac1bd) {
      console.log(_0x5ac1bd);
      let _0x3e5ea1;
      if (_0x5ac1bd.imageMessage) {
        let _0xfe585e = await _0x4dcdd5.downloadAndSaveMediaMessage(_0x5ac1bd.imageMessage);
        _0x3e5ea1 = {
          'image': {
            'url': _0xfe585e
          },
          'caption': _0x5ac1bd.imageMessage.caption,
          'mentions': _0x3286dc
        };
      } else {
        if (_0x5ac1bd.videoMessage) {
          let _0x5edaeb = await _0x4dcdd5.downloadAndSaveMediaMessage(_0x5ac1bd.videoMessage);
          _0x3e5ea1 = {
            'video': {
              'url': _0x5edaeb
            },
            'caption': _0x5ac1bd.videoMessage.caption,
            'mentions': _0x3286dc
          };
        } else {
          if (_0x5ac1bd.audioMessage) {
            let _0x1abae7 = await _0x4dcdd5.downloadAndSaveMediaMessage(_0x5ac1bd.audioMessage);
            _0x3e5ea1 = {
              'audio': {
                'url': _0x1abae7
              },
              'mimetype': "audio/mp4",
              'mentions': _0x3286dc
            };
          } else {
            if (_0x5ac1bd.stickerMessage) {
              let _0x1e9bbc = await _0x4dcdd5.downloadAndSaveMediaMessage(_0x5ac1bd.stickerMessage);
              let _0x3f330f = new Sticker(_0x1e9bbc, {
                'pack': "cyberiontag",
                'type': StickerTypes.CROPPED,
                'categories': ['🤩', '🎉'],
                'id': "12345",
                'quality': 0x46,
                'background': "transparent"
              });
              const _0x3359d8 = await _0x3f330f.toBuffer();
              _0x3e5ea1 = {
                'sticker': _0x3359d8,
                'mentions': _0x3286dc
              };
            } else {
              _0x3e5ea1 = {
                'text': _0x5ac1bd.conversation,
                'mentions': _0x3286dc
              };
            }
          }
        }
      }
      _0x4dcdd5.sendMessage(_0x446e39, _0x3e5ea1);
    } else {
      if (!_0x32a794 || !_0x32a794[0]) {
        _0x45bf4a("Enter the text to announce or mention the message to announce");
        ;
        return;
      }
      ;
      _0x4dcdd5.sendMessage(_0x446e39, {
        'text': _0x32a794.join(" "),
        'mentions': _0x3286dc
      });
    }
  } else {
    _0x45bf4a("Command reserved for administrators.");
  }
});
adams({
  'nomCom': "apk",
  'reaction': '✨',
  'categorie': "Recherche"
}, async (_0x61d27c, _0x4baa42, _0x299176) => {
  const {
    repondre: _0x3b060f,
    arg: _0xa553b3,
    ms: _0x28d9dc
  } = _0x299176;
  try {
    const _0x50f3c5 = _0xa553b3.join(" ");
    if (!_0x50f3c5) {
      return _0x3b060f("*Enter the name of the application to search for*");
    }
    const _0x597419 = await search(_0x50f3c5);
    if (_0x597419.length === 0) {
      return _0x3b060f("*can't find application, please enter another name*");
    }
    const _0x285c53 = await download(_0x597419[0].id);
    const _0x3c4e8f = parseInt(_0x285c53.size);
    if (_0x3c4e8f > 300) {
      return _0x3b060f("The file exceeds 300 MB, unable to download.");
    }
    const _0x2dbdd1 = _0x285c53.dllink;
    const _0x33119a = "『 *Cyberion Application* 』\n\n*Name :* " + _0x285c53.name + "\n*Id :* " + _0x285c53["package"] + "\n*Last Update :* " + _0x285c53.lastup + "\n*Size :* " + _0x285c53.size + "\n";
    const _0x42572b = (_0x285c53?.["name"] || "Downloader") + ".apk";
    const _0x17b1a4 = await axios.get(_0x2dbdd1, {
      'responseType': "stream"
    });
    const _0x25fa05 = fs.createWriteStream(_0x42572b);
    _0x17b1a4.data.pipe(_0x25fa05);
    await new Promise((_0x233cf3, _0x359e11) => {
      _0x25fa05.on("finish", _0x233cf3);
      _0x25fa05.on("error", _0x359e11);
    });
    const _0x51f361 = {
      'document': fs.readFileSync(_0x42572b),
      'mimetype': "application/vnd.android.package-archive",
      'fileName': _0x42572b
    };
    _0x4baa42.sendMessage(_0x61d27c, {
      'image': {
        'url': _0x285c53.icon
      },
      'caption': _0x33119a
    }, {
      'quoted': _0x28d9dc
    });
    _0x4baa42.sendMessage(_0x61d27c, _0x51f361, {
      'quoted': _0x28d9dc
    });
    fs.unlinkSync(_0x42572b);
  } catch (_0x5d1207) {
    console.error("Erreur lors du traitement de la commande apk:", _0x5d1207);
    _0x3b060f("*Error during apk command processing*");
  }
});
const cron = require("../lib/cron");
adams({
  'nomCom': "automute",
  'categorie': "Group"
}, async (_0x4a39de, _0x2e6dea, _0x16ac1e) => {
  const {
    arg: _0x231030,
    repondre: _0x25a7a8,
    verifAdmin: _0xb16381
  } = _0x16ac1e;
  if (!_0xb16381) {
    _0x25a7a8("You are not an administrator of the group");
    return;
  }
  group_cron = await cron.getCronById(_0x4a39de);
  if (!_0x231030 || _0x231030.length == 0) {
    let _0x9698db;
    if (group_cron == null || group_cron.mute_at == null) {
      _0x9698db = "No time set for automatic mute";
    } else {
      _0x9698db = "The group will be muted at " + group_cron.mute_at.split(':')[0] + " " + group_cron.mute_at.split(':')[1];
    }
    let _0x58de3e = "* *State:* " + _0x9698db + "\n * *Instructions:* To activate automatic mute, add the minute and hour after the command separated by ':'\n Example automute 9:30\n * To delete the automatic mute, use the command *automute del*";
    _0x25a7a8(_0x58de3e);
    return;
  } else {
    let _0x1d8aa1 = _0x231030.join(" ");
    if (_0x1d8aa1.toLowerCase() === "del") {
      if (group_cron == null) {
        _0x25a7a8("No cronometrage is active");
      } else {
        await cron.delCron(_0x4a39de);
        _0x25a7a8("The automatic mute has been removed; restart to apply changes").then(() => {
          exec("pm2 restart all");
        });
      }
    } else if (_0x1d8aa1.includes(':')) {
      await cron.addCron(_0x4a39de, "mute_at", _0x1d8aa1);
      _0x25a7a8("Setting up automatic mute for " + _0x1d8aa1 + " ; restart to apply changes").then(() => {
        exec("pm2 restart all");
      });
    } else {
      _0x25a7a8("Please enter a valid time with hour and minute separated by :");
    }
  }
});
adams({
  'nomCom': "autounmute",
  'categorie': "Group"
}, async (_0x325438, _0x5eace4, _0xfc5a5d) => {
  const {
    arg: _0x4e30fd,
    repondre: _0x3ddec9,
    verifAdmin: _0x2e7005
  } = _0xfc5a5d;
  if (!_0x2e7005) {
    _0x3ddec9("You are not an administrator of the group");
    return;
  }
  group_cron = await cron.getCronById(_0x325438);
  if (!_0x4e30fd || _0x4e30fd.length == 0) {
    let _0x414f1b;
    if (group_cron == null || group_cron.unmute_at == null) {
      _0x414f1b = "No time set for autounmute";
    } else {
      _0x414f1b = "The group will be un-muted at " + group_cron.unmute_at.split(':')[0] + "H " + group_cron.unmute_at.split(':')[1];
    }
    let _0x1050df = "* *State:* " + _0x414f1b + "\n * *Instructions:* To activate autounmute, add the minute and hour after the command separated by ':'\n Example autounmute 7:30\n * To delete autounmute, use the command *autounmute del*";
    _0x3ddec9(_0x1050df);
    return;
  } else {
    let _0x33ae9f = _0x4e30fd.join(" ");
    if (_0x33ae9f.toLowerCase() === "del") {
      if (group_cron == null) {
        _0x3ddec9("No cronometrage has been activated");
      } else {
        await cron.delCron(_0x325438);
        _0x3ddec9("The autounmute has been removed; restart to apply the changes").then(() => {
          exec("pm2 restart all");
        });
      }
    } else if (_0x33ae9f.includes(':')) {
      await cron.addCron(_0x325438, "unmute_at", _0x33ae9f);
      _0x3ddec9("Setting up autounmute for " + _0x33ae9f + "; restart to apply the changes").then(() => {
        exec("pm2 restart all");
      });
    } else {
      _0x3ddec9("Please enter a valid time with hour and minute separated by :");
    }
  }
});
adams({
  'nomCom': "fkick",
  'categorie': "Group"
}, async (_0x2315af, _0xf4367f, _0x54690e) => {
  const {
    arg: _0x43b73f,
    repondre: _0x164feb,
    verifAdmin: _0x3af7f9,
    superUser: _0x11816e,
    verifZokouAdmin: _0x26c028
  } = _0x54690e;
  if (_0x3af7f9 || _0x11816e) {
    if (!_0x26c028) {
      _0x164feb("You need administrative rights to perform this command");
      return;
    }
    if (!_0x43b73f || _0x43b73f.length == 0) {
      _0x164feb("Please enter the country code whose members will be removed");
      return;
    }
    let _0x51cfd6 = await _0xf4367f.groupMetadata(_0x2315af);
    let _0x3ab149 = _0x51cfd6.participants;
    for (let _0x5cd745 = 0; _0x5cd745 < _0x3ab149.length; _0x5cd745++) {
      if (_0x3ab149[_0x5cd745].id.startsWith(_0x43b73f[0]) && _0x3ab149[_0x5cd745].admin === null) {
        await _0xf4367f.groupParticipantsUpdate(_0x2315af, [_0x3ab149[_0x5cd745].id], "remove");
      }
    }
  } else {
    _0x164feb("Sorry, you are not an administrator of the group");
  }
});
adams({
  'nomCom': "nsfw",
  'categorie': "Group"
}, async (_0x62940d, _0x399ee3, _0x593518) => {
  const {
    arg: _0x2f7a19,
    repondre: _0xb64c5d,
    verifAdmin: _0x5dd63e
  } = _0x593518;
  if (!_0x5dd63e) {
    _0xb64c5d("Sorry, you cannot enable NSFW content without being an administrator of the group");
    return;
  }
  let _0x2e7116 = require("../bdd/hentai");
  let _0x134639 = await _0x2e7116.checkFromHentaiList(_0x62940d);
  if (_0x2f7a19[0] == 'on') {
    if (_0x134639) {
      _0xb64c5d("NSFW content is already active for this group");
      return;
    }
    ;
    await _0x2e7116.addToHentaiList(_0x62940d);
    _0xb64c5d("NSFW content is now active for this group");
  } else {
    if (_0x2f7a19[0] == "off") {
      if (!_0x134639) {
        _0xb64c5d("NSFW content is already disabled for this group");
        return;
      }
      ;
      await _0x2e7116.removeFromHentaiList(_0x62940d);
      _0xb64c5d("NSFW content is now disabled for this group");
    } else {
      _0xb64c5d("You must enter \"on\" or \"off\"");
    }
  }
});
