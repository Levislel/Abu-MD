const _0x434d1a=_0x1556;function _0x1556(_0x528e33,_0x1c6983){const _0x559fc2=_0x559f();return _0x1556=function(_0x1556d4,_0x165f38){_0x1556d4=_0x1556d4-0x1e1;let _0x3753ee=_0x559fc2[_0x1556d4];return _0x3753ee;},_0x1556(_0x528e33,_0x1c6983);}(function(_0x1296dd,_0x1fce90){const _0x1d13c5=_0x1556,_0x31c33c=_0x1296dd();while(!![]){try{const _0x480c3b=parseInt(_0x1d13c5(0x1fd))/0x1+parseInt(_0x1d13c5(0x216))/0x2*(-parseInt(_0x1d13c5(0x219))/0x3)+-parseInt(_0x1d13c5(0x234))/0x4+-parseInt(_0x1d13c5(0x223))/0x5*(parseInt(_0x1d13c5(0x211))/0x6)+-parseInt(_0x1d13c5(0x230))/0x7*(parseInt(_0x1d13c5(0x1f7))/0x8)+parseInt(_0x1d13c5(0x224))/0x9+parseInt(_0x1d13c5(0x227))/0xa;if(_0x480c3b===_0x1fce90)break;else _0x31c33c['push'](_0x31c33c['shift']());}catch(_0x1f0a6f){_0x31c33c['push'](_0x31c33c['shift']());}}}(_0x559f,0x3bec8));const {default:makeWASocket,Browsers,makeInMemoryStore,useMultiFileAuthState}=require(_0x434d1a(0x232)),singleToMulti=require(_0x434d1a(0x20d)),fs=require('fs'),{serialize}=require(_0x434d1a(0x1fc)),{Message,Image,Sticker}=require('./lib/Base'),pino=require(_0x434d1a(0x1ef)),path=require(_0x434d1a(0x202)),events=require(_0x434d1a(0x1fa)),{MakeSession}=require(_0x434d1a(0x1eb)),got=require(_0x434d1a(0x229)),config=require(_0x434d1a(0x1e4)),{PluginDB}=require('./lib/db/plugins'),Greetings=require(_0x434d1a(0x20f)),{DATABASE,VERSION}=require(_0x434d1a(0x1e4)),store=makeInMemoryStore({'logger':pino()[_0x434d1a(0x1f2)]({'level':_0x434d1a(0x21d),'stream':_0x434d1a(0x206)})});async function Singmulti(){const _0xe8a490=_0x434d1a;if(!fs['existsSync'](__dirname+_0xe8a490(0x203)))await MakeSession(config[_0xe8a490(0x201)],__dirname+_0xe8a490(0x203));const {state:_0x133781}=await useMultiFileAuthState(__dirname+_0xe8a490(0x228));await singleToMulti('session.json',__dirname+'/session',_0x133781);}Singmulti(),require('events')[_0x434d1a(0x1e2)][_0x434d1a(0x222)]=0x0;function _0x559f(){const _0x5a478e=['user','length','stickerMessage','pino','dataValues','LOGS','child','\x0aFrom\x20:\x20','toLowerCase','SUDO','At\x20:\x20','8hiUSjY','fromMe','payload','./lib/utils','parse','./lib/serialize','212861EDtelT','log','type','name','SESSION_ID','path','/session.json','pattern','./package.json','store','message','./plugins/','sticker','from','replace','.js','./lib/singleToMulti','shift','./lib/Greetings','writeToFile','18jhVdtx','function','endsWith','findAll','split','354EYiVhb','connection.update','sender','4629KeiTVh','photo','statusCode','test','silent','error','existsSync','groupMetadata','```💗\x20𝙰𝙱𝚄\x20𝙼𝙳\x20𝚁𝚄𝙽𝙽𝙸𝙶\x20\x0aversion\x20:\x20','defaultMaxListeners','185015SQttPN','1365867yOEnKE','trim','open','5648530aacMQQ','/session','got','prefix','Session\x20Restored\x20✅!','sync','sendMessage','bind','imageMessage','1674743VAxqnQ','body','@adiwajshing/baileys','./lib/ss/store.json','242640LBddSD','Installing\x20Plugins\x20✅','```','image','output','\x0aMessage:','connecting','creds.update','subject','✅\x20Plugins\x20Installed!','EventEmitter','HANDLERS','./config','extname','group-participants.update','Abu\x20MD\x20','\x0a𝚃𝙾𝚃𝙰𝙻\x20𝙿𝙻𝙸𝙶𝙸𝙽𝚂\x20:\x20','map','uncaughtException','./lib/session'];_0x559f=function(){return _0x5a478e;};return _0x559f();}async function Jsl(){const _0x505f66=_0x434d1a;await config['DATABASE'][_0x505f66(0x22c)]();const {state:_0x43a870,saveCreds:_0xa95e79}=await useMultiFileAuthState(__dirname+_0x505f66(0x228));let _0x28cce3=makeWASocket({'logger':pino({'level':_0x505f66(0x21d)}),'auth':_0x43a870,'printQRInTerminal':![],'browser':Browsers['macOS']('Desktop'),'downloadHistory':![],'syncFullHistory':![]});store[_0x505f66(0x22e)](_0x28cce3['ev']),setInterval(()=>{const _0x1cc125=_0x505f66;store[_0x1cc125(0x210)](_0x1cc125(0x233)),console[_0x1cc125(0x1fe)]('saved\x20store');},0x1e*0x3c*0x3e8),_0x28cce3['ev']['on'](_0x505f66(0x217),async _0x38943e=>{const _0x1bde7d=_0x505f66,{connection:_0x4930d7,lastDisconnect:_0x1ec9bf}=_0x38943e;_0x4930d7===_0x1bde7d(0x23a)&&console[_0x1bde7d(0x1fe)](_0x1bde7d(0x1e7)+VERSION);_0x4930d7==='close'&&_0x1ec9bf&&_0x1ec9bf[_0x1bde7d(0x21e)]&&_0x1ec9bf[_0x1bde7d(0x21e)][_0x1bde7d(0x238)]['statusCode']!=0x191&&(console[_0x1bde7d(0x1fe)](_0x1ec9bf[_0x1bde7d(0x21e)]['output'][_0x1bde7d(0x1f9)]),Jsl());if(_0x4930d7===_0x1bde7d(0x226)){console[_0x1bde7d(0x1fe)](_0x1bde7d(0x22b)),console[_0x1bde7d(0x1fe)](_0x1bde7d(0x235));let _0x32a4d4=await PluginDB[_0x1bde7d(0x214)]();_0x32a4d4[_0x1bde7d(0x1e9)](async _0x3416ab=>{const _0x2e37d9=_0x1bde7d;if(!fs[_0x2e37d9(0x21f)](_0x2e37d9(0x208)+_0x3416ab[_0x2e37d9(0x1f0)]['name']+'.js')){console['log'](_0x3416ab[_0x2e37d9(0x1f0)]['name']);var _0x22a2be=await got(_0x3416ab['dataValues']['url']);_0x22a2be[_0x2e37d9(0x21b)]==0xc8&&(fs['writeFileSync'](_0x2e37d9(0x208)+_0x3416ab[_0x2e37d9(0x1f0)][_0x2e37d9(0x200)]+_0x2e37d9(0x20c),_0x22a2be[_0x2e37d9(0x231)]),require(_0x2e37d9(0x208)+_0x3416ab[_0x2e37d9(0x1f0)][_0x2e37d9(0x200)]+'.js'));}}),fs['readdirSync']('./plugins')['forEach'](_0x17050f=>{const _0x2f0da7=_0x1bde7d;path[_0x2f0da7(0x1e5)](_0x17050f)[_0x2f0da7(0x1f4)]()==_0x2f0da7(0x20c)&&require('./plugins/'+_0x17050f);}),console['log'](_0x1bde7d(0x1e1));let _0x38e61d=_0x1bde7d(0x221)+require(_0x1bde7d(0x205))['version']+_0x1bde7d(0x1e8)+events['commands'][_0x1bde7d(0x1ed)]+'\x0a𝙼𝙾𝙳𝙴\x20:\x20'+config['MODE']+_0x1bde7d(0x236);_0x28cce3[_0x1bde7d(0x22d)](_0x28cce3[_0x1bde7d(0x1ec)]['id'],{'text':_0x38e61d});try{_0x28cce3['ev']['on'](_0x1bde7d(0x23b),saveState),_0x28cce3['ev']['on'](_0x1bde7d(0x1e6),async _0x15984f=>{Greetings(_0x15984f,_0x28cce3);}),_0x28cce3['ev']['on']('messages.upsert',async _0x3ad962=>{const _0xf9b0dc=_0x1bde7d;if(_0x3ad962['type']!=='notify')return;let _0x127bb7=_0x3ad962['messages'][0x0],_0x35222d=await serialize(JSON[_0xf9b0dc(0x1fb)](JSON['stringify'](_0x127bb7)),_0x28cce3);if(!_0x35222d[_0xf9b0dc(0x207)])return;let _0x393d2e=_0x35222d[_0xf9b0dc(0x231)];if(_0x393d2e&&config[_0xf9b0dc(0x1f1)])console['log'](_0xf9b0dc(0x1f6)+(_0x35222d[_0xf9b0dc(0x20a)][_0xf9b0dc(0x213)]('@g.us')?(await _0x28cce3[_0xf9b0dc(0x220)](_0x35222d[_0xf9b0dc(0x20a)]))[_0xf9b0dc(0x23c)]:_0x35222d[_0xf9b0dc(0x20a)])+_0xf9b0dc(0x1f3)+_0x35222d[_0xf9b0dc(0x218)]+_0xf9b0dc(0x239)+_0x393d2e);events['commands']['map'](async _0x2534fd=>{const _0xe69e10=_0xf9b0dc;if(_0x2534fd[_0xe69e10(0x1f8)]&&!config[_0xe69e10(0x1f5)][_0xe69e10(0x215)](',')['includes'](_0x35222d[_0xe69e10(0x218)][_0xe69e10(0x215)]('@')[0x0]||!_0x35222d['isSelf']))return;let _0x50d67d;_0x393d2e&&(_0x50d67d=_0x393d2e['trim']()[_0xe69e10(0x215)](/ +/)[0x0],_0x35222d[_0xe69e10(0x22a)]=new RegExp(config[_0xe69e10(0x1e3)])[_0xe69e10(0x21c)](_0x393d2e)?_0x393d2e['split']('')[_0xe69e10(0x20e)]():',');if(_0x2534fd['pattern']&&_0x2534fd[_0xe69e10(0x204)][_0xe69e10(0x21c)](_0x50d67d)){var _0x44ca86;try{_0x44ca86=_0x393d2e[_0xe69e10(0x20b)](new RegExp(_0x50d67d,'i'),'')[_0xe69e10(0x225)]();}catch{_0x44ca86=![];}whats=new Message(_0x28cce3,_0x35222d,_0x127bb7),_0x2534fd['function'](whats,_0x44ca86,_0x35222d,_0x28cce3);}else{if(_0x393d2e&&_0x2534fd['on']==='text')whats=new Message(_0x28cce3,_0x35222d,_0x127bb7),_0x2534fd[_0xe69e10(0x212)](whats,_0x393d2e,_0x35222d,_0x28cce3,_0x3ad962);else{if((_0x2534fd['on']===_0xe69e10(0x237)||_0x2534fd['on']===_0xe69e10(0x21a))&&_0x35222d[_0xe69e10(0x1ff)]===_0xe69e10(0x22f))whats=new Image(_0x28cce3,_0x35222d,_0x127bb7),_0x2534fd[_0xe69e10(0x212)](whats,_0x393d2e,_0x35222d,_0x28cce3,_0x3ad962,_0x127bb7);else _0x2534fd['on']===_0xe69e10(0x209)&&_0x35222d['type']===_0xe69e10(0x1ee)&&(whats=new Sticker(_0x28cce3,_0x35222d,_0x127bb7),_0x2534fd[_0xe69e10(0x212)](whats,_0x35222d,_0x28cce3,_0x3ad962,_0x127bb7));}}});});}catch(_0x55f74c){console[_0x1bde7d(0x1fe)](_0x55f74c+'\x0a\x0a\x0a\x0a\x0a'+JSON['stringify'](msg));}}}),process['on'](_0x505f66(0x1ea),_0x186e07=>{const _0x19930e=_0x505f66;let _0xf8c7aa=_0x186e07['message'];console[_0x19930e(0x1fe)](_0x186e07);});}setTimeout(()=>{Jsl();},0xbb8);
