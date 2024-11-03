


const {
  adams
} = require("../Ibrahim/adams");
const traduire = require("../Ibrahim/traduction");
const {
  default: axios
} = require("axios");
adams({
  'nomCom': "bot",
  'reaction': '📡',
  'categorie': 'IA'
}, async (_0x4a55d4, _0x59e03d, _0x52ec23) => {
  const {
    repondre: _0x353cc8,
    ms: _0x1e9bc4,
    arg: _0x36e8b1
  } = _0x52ec23;
  if (!_0x36e8b1 || !_0x36e8b1[0]) {
    return _0x353cc8("yes buddy,🕵please say something.");
  }
  try {
    const _0x27c33b = await traduire(_0x36e8b1.join(" "), {
      'to': 'en'
    });
    console.log(_0x27c33b);
    fetch("http://api.brainshop.ai/get?bid=177607&key=NwzhALqeO1kubFVD&uid=[uid]&msg=" + _0x27c33b).then(_0x4cc925 => _0x4cc925.json()).then(_0x29cbba => {
      const _0x1e5e39 = _0x29cbba.cnt;
      console.log(_0x1e5e39);
      traduire(_0x1e5e39, {
        'to': 'en'
      }).then(_0x43c2a5 => {
        _0x353cc8(_0x43c2a5);
      })["catch"](_0x10fe9d => {
        console.error("Error when translating into French :", _0x10fe9d);
        _0x353cc8("Error when translating into French");
      });
    })["catch"](_0x28c985 => {
      console.error("Error requesting BrainShop :", _0x28c985);
      _0x353cc8("Error requesting BrainShop");
    });
  } catch (_0x48c70c) {
    _0x353cc8("oops an error : " + _0x48c70c);
  }
});
adams({
  'nomCom': 'ai',
  'reaction': '📡',
  'categorie': 'IA'
}, async (_0x2187c6, _0x5b6ce3, _0x58f293) => {
  const {
    repondre: _0x2682e3,
    arg: _0x446a51,
    ms: _0x38a881
  } = _0x58f293;
  try {
    if (!_0x446a51 || _0x446a51.length === 0) {
      return _0x2682e3("Please enter the necessary information to generate the image.");
    }
    const _0x829a06 = _0x446a51.join(" ");
    const _0x553e96 = await axios.get("https://photooxy.com/effect/create-image?q=" + _0x829a06);
    const _0x42e91b = _0x553e96.data;
    if (_0x42e91b.status == 200) {
      const _0x8aa4ec = _0x42e91b.result;
      _0x5b6ce3.sendMessage(_0x2187c6, {
        'image': {
          'url': _0x8aa4ec
        },
        'caption': "*powered by Spark-X*"
      }, {
        'quoted': _0x38a881
      });
    } else {
      _0x2682e3("Error during image generation.");
    }
  } catch (_0x401b56) {
    console.error("Erreur:", _0x401b56.message || "Une erreur s'est produite");
    _0x2682e3("Oops, an error occurred while processing your request");
  }
});
adams({
  'nomCom': "gpt1",
  'reaction': '📡',
  'categorie': 'IA'
}, async (_0x69540f, _0x4bf38a, _0x50b408) => {
  const {
    repondre: _0x57ddb7,
    arg: _0x3c6bad,
    ms: _0x274dcc
  } = _0x50b408;
  try {
    if (!_0x3c6bad || _0x3c6bad.length === 0) {
      return _0x57ddb7("Please ask a me any thing.");
    }
    const _0x472ed6 = _0x3c6bad.join(" ");
    const _0x344b99 = await axios.get("https://api.ibrahimadams.us.kg/api/ai/gpt4?q=" + _0x472ed6 + "&apikey=cracker");
    const _0x1a670f = _0x344b99.data;
    if (_0x1a670f) {
      _0x57ddb7(_0x1a670f.result);
    } else {
      _0x57ddb7("Error during response generation.");
    }
  } catch (_0x247bd7) {
    console.error("Erreur:", _0x247bd7.message || "Une erreur s'est produite");
    _0x57ddb7("Oops, an error occurred while processing your request.");
  }
});
adams({
  'nomCom': "gpt",
  'reaction': '🤔',
  'categorie': 'IA'
}, async (_0x403a99, _0x33d0ea, _0x3f4754) => {
  const {
    repondre: _0x186d57,
    arg: _0x4080af,
    ms: _0x173f2e
  } = _0x3f4754;
  try {
    if (!_0x4080af || _0x4080af.length === 0) {
      return _0x186d57("Please ask a question.");
    }
    const _0x4c78a5 = _0x4080af.join(" ");
    const _0x5a3f8b = await axios.get("https://api.ibrahimadams.us.kg/api/ai/gpt4?q=" + _0x4c78a5 + "&apikey=cracker");
    const _0x475687 = _0x5a3f8b.data;
    if (_0x475687) {
      _0x186d57(_0x475687.result);
    } else {
      _0x186d57("Error during response generation.");
    }
  } catch (_0x43ee53) {
    console.error("Erreur:", _0x43ee53.message || "Une erreur s'est produite");
    _0x186d57("Oops, an error occurred while processing your request.");
  }
});
