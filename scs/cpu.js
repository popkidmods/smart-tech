

const {
  adams
} = require(__dirname + "/../Ibrahim/adams");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
adams({
  'nomCom': "cpu",
  'categorie': "General"
}, async (_0x1816e8, _0x3e82d2, _0x2a4c5d) => {
  let {
    ms: _0xc49ed3,
    repondre: _0x4249b7,
    prefixe: _0x4766d9,
    nomAuteurMessage: _0x4feb4e,
    mybotpic: _0x42406e
  } = _0x2a4c5d;
  let {
    cm: _0x4b8c8c
  } = require(__dirname + "/../framework//zokou");
  var _0x275730 = {};
  var _0x6a6e5c = "public";
  if (s.MODE.toLocaleLowerCase() != "yes") {
    _0x6a6e5c = "private";
  }
  _0x4b8c8c.map(async (_0x212cd0, _0x3cc317) => {
    if (!_0x275730[_0x212cd0.categorie]) {
      _0x275730[_0x212cd0.categorie] = [];
    }
    _0x275730[_0x212cd0.categorie].push(_0x212cd0.nomCom);
  });
  moment.tz.setDefault("Africa/Nairobi");
  var _0x2e473c = _0x42406e();
  if (_0x2e473c.match(/\.(mp4|gif)$/i)) {
    try {
      _0x3e82d2.sendMessage(_0x1816e8, {
        'video': {
          'url': _0x2e473c
        },
        'caption': "\n \n~Cyberion-Spark-X~\nrss : 165.25 MB\nheapTotal : 62.66 MB\nheapUsed : 49.72 MB\nexternal : 33.21 MB\narrayBuffers: 29.87 MB\n\n_Total CPU Usage of Spark X_\nThinkpad 5 3600 i7Core Processor(14thGeneration)\n- *user* : 65.92%\n- *nice* : 0.00%\n- *sys* : 20.61%\n- *idle* : 13.47%\n- *irq* : 0.00%\n_CPU Core(s) Usage (12 intel Core)_\n1. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 66.87%\n- *Blaz* : 0.00%\n- *Mods* : 20.18%\n- *cache* : 12.94%\n- *temp* : 0.00%\n\n2. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 67.82%\n- *Blaz* : 0.00%\n- *Mods* : 12.61%\n- *cache* : 19.57%\n- *temp* : 0.00%\n\n3. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 66.77%\n- *Blaz* : 0.00%\n- *Mods* : 20.29%\n- *cache* : 12.95%\n- *temp* : 0.00%\n\n4. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 65.12%1\n- *Mods* : 21.69%\n- *cache* : 13.19%\n- *temp* : 0.00%\n\n5. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 64.55%\n- *Blaz* : 0.00%\n- *Mods* : 22.22%\n- *cache* : 13.19%\n- *temp* : 0.00%\n\n6. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 64.58%\n- *Blaz* : 0.00%\n- *Mods* : 22.23%\n- *cache* : 13.18%\n- *temp* : 0.00%\n\n7. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 66.02%\n- *Blaz* : 0.00%\n- *Mods* : 20.93%\n- *cache* : 13.05%\n- *temp* : 0.00%\n\n8. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 71.50%\n- *Blaz* : 0.00%\n- *Mods* : 15.27%\n- *cache* : 13.23%\n- *temp* : 0.00%\n\n9. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 65.79%\n- *Blaz* : 0.00%\n- *Mods* : 21.12%\n- *cache* : 13.09%\n- *temp* : 0.00%\n\n10. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 64.58%\n- *Blaz* : 0.00%\n- *Mods* : 22.01%\n- *cache* : 13.40%\n- *temp* : 0.00%\n\n11. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 64.22%\n- *Blaz* : 0.00%\n- *Mods* : 22.44%\n- *cache* : 13.34%\n- *temp* : 0.00%\n\n12. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 64.18%\n- *Blaz* : 0.00%\n- *Mods* : 22.45%\n- *cacche* : 13.38%\n- *temp* : 0.00%\nProduct By CarlTech 2024\n \n> Servers supported by Thinkpad \n> Beneficials to CARLTECH 2024\n",
        'footer': "Je suis *Spark X*, déveloper Carltech",
        'gifPlayback': true
      }, {
        'quoted': _0xc49ed3
      });
    } catch (_0x1f2ff6) {
      console.log("🥵🥵 Menu erreur " + _0x1f2ff6);
      _0x4249b7("🥵🥵 Menu erreur " + _0x1f2ff6);
    }
  } else {
    if (_0x2e473c.match(/\.(jpeg|png|jpg)$/i)) {
      try {
        _0x3e82d2.sendMessage(_0x1816e8, {
          'image': {
            'url': _0x2e473c
          },
          'caption': "\n \n~Cyberion-Spark-X~\nrss : 165.25 MB\nheapTotal : 62.66 MB\nheapUsed : 49.72 MB\nexternal : 33.21 MB\narrayBuffers: 29.87 MB\n\n_Total CPU Usage of Spark X_\nThinkpad 5 3600 i7Core Processor(14thGeneration)\n- *user* : 65.92%\n- *nice* : 0.00%\n- *sys* : 20.61%\n- *idle* : 13.47%\n- *irq* : 0.00%\n_CPU Core(s) Usage (12 intel Core)_\n1. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 66.87%\n- *Blaz* : 0.00%\n- *Mods* : 20.18%\n- *cache* : 12.94%\n- *temp* : 0.00%\n\n2. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 67.82%\n- *Blaz* : 0.00%\n- *Mods* : 12.61%\n- *cache* : 19.57%\n- *temp* : 0.00%\n\n3. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 66.77%\n- *Blaz* : 0.00%\n- *Mods* : 20.29%\n- *cache* : 12.95%\n- *temp* : 0.00%\n\n4. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 65.12%1\n- *Mods* : 21.69%\n- *cache* : 13.19%\n- *temp* : 0.00%\n\n5. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 64.55%\n- *Blaz* : 0.00%\n- *Mods* : 22.22%\n- *cache* : 13.19%\n- *temp* : 0.00%\n\n6. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 64.58%\n- *Blaz* : 0.00%\n- *Mods* : 22.23%\n- *cache* : 13.18%\n- *temp* : 0.00%\n\n7. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 66.02%\n- *Blaz* : 0.00%\n- *Mods* : 20.93%\n- *cache* : 13.05%\n- *temp* : 0.00%\n\n8. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 71.50%\n- *Blaz* : 0.00%\n- *Mods* : 15.27%\n- *cache* : 13.23%\n- *temp* : 0.00%\n\n9. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 65.79%\n- *Blaz* : 0.00%\n- *Mods* : 21.12%\n- *cache* : 13.09%\n- *temp* : 0.00%\n\n10. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 64.58%\n- *Blaz* : 0.00%\n- *Mods* : 22.01%\n- *cache* : 13.40%\n- *temp* : 0.00%\n\n11. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 64.22%\n- *Blaz* : 0.00%\n- *Mods* : 22.44%\n- *cache* : 13.34%\n- *temp* : 0.00%\n\n12. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 64.18%\n- *Blaz* : 0.00%\n- *Mods* : 22.45%\n- *cacche* : 13.38%\n- *temp* : 0.00%\nProduct By CarlTech 2024\n \n> Servers supported by Thinkpad \n> Beneficials to CARLTECH 2024\n",
          'footer': "Je suis *Spark X*, déveloper Carltech"
        }, {
          'quoted': _0xc49ed3
        });
      } catch (_0x4ab6c3) {
        console.log("🥵🥵 Menu erreur " + _0x4ab6c3);
        _0x4249b7("🥵🥵 Menu erreur " + _0x4ab6c3);
      }
    } else {
      _0x4249b7("\n \n~Cyberion-Spark-X~\nrss : 165.25 MB\nheapTotal : 62.66 MB\nheapUsed : 49.72 MB\nexternal : 33.21 MB\narrayBuffers: 29.87 MB\n\n_Total CPU Usage of Spark X_\nThinkpad 5 3600 i7Core Processor(14thGeneration)\n- *user* : 65.92%\n- *nice* : 0.00%\n- *sys* : 20.61%\n- *idle* : 13.47%\n- *irq* : 0.00%\n_CPU Core(s) Usage (12 intel Core)_\n1. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 66.87%\n- *Blaz* : 0.00%\n- *Mods* : 20.18%\n- *cache* : 12.94%\n- *temp* : 0.00%\n\n2. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 67.82%\n- *Blaz* : 0.00%\n- *Mods* : 12.61%\n- *cache* : 19.57%\n- *temp* : 0.00%\n\n3. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 66.77%\n- *Blaz* : 0.00%\n- *Mods* : 20.29%\n- *cache* : 12.95%\n- *temp* : 0.00%\n\n4. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 65.12%1\n- *Mods* : 21.69%\n- *cache* : 13.19%\n- *temp* : 0.00%\n\n5. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 64.55%\n- *Blaz* : 0.00%\n- *Mods* : 22.22%\n- *cache* : 13.19%\n- *temp* : 0.00%\n\n6. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 64.58%\n- *Blaz* : 0.00%\n- *Mods* : 22.23%\n- *cache* : 13.18%\n- *temp* : 0.00%\n\n7. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 66.02%\n- *Blaz* : 0.00%\n- *Mods* : 20.93%\n- *cache* : 13.05%\n- *temp* : 0.00%\n\n8. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 71.50%\n- *Blaz* : 0.00%\n- *Mods* : 15.27%\n- *cache* : 13.23%\n- *temp* : 0.00%\n\n9. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 65.79%\n- *Blaz* : 0.00%\n- *Mods* : 21.12%\n- *cache* : 13.09%\n- *temp* : 0.00%\n\n10. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 64.58%\n- *Blaz* : 0.00%\n- *Mods* : 22.01%\n- *cache* : 13.40%\n- *temp* : 0.00%\n\n11. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 64.22%\n- *Blaz* : 0.00%\n- *Mods* : 22.44%\n- *cache* : 13.34%\n- *temp* : 0.00%\n\n12. Thinkpad 5 3600 i7Core Processor(14thGen)\n- *AI* : 64.18%\n- *Blaz* : 0.00%\n- *Mods* : 22.45%\n- *cacche* : 13.38%\n- *temp* : 0.00%\nProduct By CarlTech 2024\n \n> Servers supported by Thinkpad \n> Beneficials to CARLTECH 2024\n");
    }
  }
});
