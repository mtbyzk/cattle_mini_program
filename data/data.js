// data/data.js - 鎵€鏈夋暟鎹?
const data = {
  diseases: [
  {
    "id": "d01",
    "name": "鐗涚槦",
    "alias": "鐑傝偁鐦?,
    "description": "鐗涚槦鏄敱鐗涚槦鐥呮瘨寮曡捣鐨勪竴绉嶆€ユ€с€佺儹鎬с€侀珮搴︽帴瑙︽€т紶鏌撶梾銆?,
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "5-7澶?,
    "mortality_rate": "鎬ユ€у瀷鍙揪90%浠ヤ笂"
  },
  {
    "id": "d02",
    "name": "闈炴床鐗涚槦",
    "alias": "ASF",
    "description": "闈炴床鐗涚槦鏄敱闈炴床鐗涚槦鐥呮瘨寮曡捣鐨勪竴绉嶆€ユ€с€佸嚭琛€鎬с€侀珮鑷存鎬т紶鏌撶梾銆?,
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "5-19澶?,
    "mortality_rate": "鍙揪100%"
  },
  {
    "id": "d03",
    "name": "鐗涘彛韫勭柅",
    "alias": "鍙ｇ柈",
    "description": "鍙ｈ箘鐤槸鐢卞彛韫勭柅鐥呮瘨寮曡捣鐨勫伓韫勫姩鐗╁叡鎮ｇ殑鎬ユ€т紶鏌撶梾銆?,
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "2-7澶?,
    "mortality_rate": "鎴愬勾鐚緝浣庯紝浠旂尓鍙揪60-80%"
  },
  {
    "id": "d04",
    "name": "鐗涜摑鑰崇梾",
    "alias": "鐚箒娈栦笌鍛煎惛缁煎悎寰?,
    "description": "鐗涜摑鑰崇梾鏄敱鐚箒娈栦笌鍛煎惛缁煎悎寰佺梾姣掑紩璧风殑涓€绉嶉珮搴︽帴瑙︽€т紶鏌撶梾銆?,
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "3-37澶?,
    "mortality_rate": "浠旂尓鍙揪80-100%"
  },
  {
    "id": "d05",
    "name": "鐗涘渾鐜梾姣掔梾",
    "alias": "PCVAD",
    "description": "鐗涘渾鐜梾姣掔梾鏄敱鐚渾鐜梾姣?鍨嬪紩璧风殑澶氱郴缁熷姛鑳介殰纰嶆€х柧鐥呫€?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "2-3鍛?,
    "mortality_rate": "10-30%"
  },
  {
    "id": "d06",
    "name": "鐗涙祦琛屾€ц吂娉?,
    "alias": "PED",
    "description": "鐗涙祦琛屾€ц吂娉绘槸鐢辩墰娴佽鎬ц吂娉荤梾姣掑紩璧风殑涓€绉嶆€ユ€ц偁閬撲紶鏌撶梾銆?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "1-4澶?,
    "mortality_rate": "浠旂尓鍙揪80%锛屾垚骞寸尓杈冧綆"
  },
  {
    "id": "d07",
    "name": "鐗涗紶鏌撴€ц兏鑶滆偤鐐?,
    "alias": "APP",
    "description": "鐗涗紶鏌撴€ц兏鑶滆偤鐐庢槸鐢辫兏鑶滆偤鐐庢斁绾挎潌鑿屽紩璧风殑涓€绉嶉珮搴︽帴瑙︽€у懠鍚搁亾浼犳煋鐥呫€?,
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "1-2澶?,
    "mortality_rate": "鎬ユ€у瀷鍙揪80-100%"
  },
  {
    "id": "d08",
    "name": "鐗涙皵鍠樼梾",
    "alias": "鐚敮鍘熶綋鑲虹値",
    "description": "鐗涙皵鍠樼梾鏄敱鐚偤鐐庢敮鍘熶綋寮曡捣鐨勪竴绉嶆參鎬у懠鍚搁亾浼犳煋鐥呫€?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "10-16澶?,
    "mortality_rate": "鍗曠函鎰熸煋杈冧綆"
  },
  {
    "id": "d09",
    "name": "鐘婄墰榛勭棦",
    "alias": "鏃╁彂鎬уぇ鑲犳潌鑿岀梾",
    "description": "鐘婄墰榛勭棦鏄敱鑷寸梾鎬уぇ鑲犳潌鑿屽紩璧风殑鍒濈敓浠旂尓鎬ユ€ц偁閬撲紶鏌撶梾銆?,
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "鏁板皬鏃惰嚦1-2澶?,
    "mortality_rate": "鍙揪80-100%"
  },
  {
    "id": "d10",
    "name": "鐘婄墰鐧界棦",
    "alias": "杩熷彂鎬уぇ鑲犳潌鑿岀梾",
    "description": "鐘婄墰鐧界棦鏄敱鑷寸梾鎬уぇ鑲犳潌鑿屽紩璧风殑10-30鏃ラ緞浠旂尓鎬ユ€ц偁閬撲紶鏌撶梾銆?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "1-3澶?,
    "mortality_rate": "杈冧綆"
  },
  {
    "id": "d11",
    "name": "鐗涗腹姣?,
    "alias": "鎵撶伀鍗?,
    "description": "鐗涗腹姣掓槸鐢辩墰涓规瘨鏉嗚弻寮曡捣鐨勪竴绉嶆€ユ€с€佺儹鎬т紶鏌撶梾銆?,
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "3-5澶?,
    "mortality_rate": "鎬ユ€у瀷鍙揪80%浠ヤ笂"
  },
  {
    "id": "d12",
    "name": "鐗涜偤鐤?,
    "alias": "鐚反姘忔潌鑿岀梾",
    "description": "鐗涜偤鐤槸鐢卞鏉€鎬у反姘忔潌鑿屽紩璧风殑涓€绉嶆€ユ€т紶鏌撶梾銆?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "1-5澶?,
    "mortality_rate": "鎬ユ€у瀷鍙揪70%"
  },
  {
    "id": "d13",
    "name": "鐗涢摼鐞冭弻鐥?,
    "alias": "閾剧悆鑿屾劅鏌?,
    "description": "鐗涢摼鐞冭弻鐥呮槸鐢卞绉嶉摼鐞冭弻寮曡捣鐨勪汉鐣滃叡鎮ｄ紶鏌撶梾銆?,
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "1-3澶?,
    "mortality_rate": "鎬ユ€ц触琛€鍨嬪拰鑴戣啘鐐庡瀷杈冮珮"
  },
  {
    "id": "d14",
    "name": "鐗涘壇浼ゅ瘨",
    "alias": "鐚矙闂ㄦ皬鑿岀梾",
    "description": "鐗涘壇浼ゅ瘨鏄敱娌欓棬姘忚弻寮曡捣鐨勪竴绉嶄紶鏌撶梾銆?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "3-7澶?,
    "mortality_rate": "鎬ユ€у瀷杈冮珮"
  },
  {
    "id": "d15",
    "name": "鐗涗吉鐙傜姮鐥?,
    "alias": "PR",
    "description": "鐗涗吉鐙傜姮鐥呮槸鐢变吉鐙傜姮鐥呯梾姣掑紩璧风殑涓€绉嶆€ユ€т紶鏌撶梾銆?,
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "3-6澶?,
    "mortality_rate": "鏂扮敓浠旂尓鍙揪100%"
  },
  {
    "id": "d16",
    "name": "鐗涚粏灏忕梾姣掔梾",
    "alias": "PPV",
    "description": "鐗涚粏灏忕梾姣掔梾鏄敱鐚粏灏忕梾姣掑紩璧风殑绻佹畺闅滅鎬х柧鐥呫€?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "10-14澶?,
    "mortality_rate": "浠旂尓杈冮珮"
  },
  {
    "id": "d17",
    "name": "鐗涗箼鍨嬭剳鐐?,
    "alias": "鏃ユ湰涔欏瀷鑴戠値",
    "description": "鐗涗箼鍨嬭剳鐐庢槸鐢辨棩鏈剳鐐庣梾姣掑紩璧风殑涓€绉嶄汉鐣滃叡鎮ｄ紶鏌撶梾銆?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "3-7澶?,
    "mortality_rate": "杈冧綆"
  },
  {
    "id": "d18",
    "name": "鐗涗紶鏌撴€ц儍鑲犵値",
    "alias": "TGE",
    "description": "鐗涗紶鏌撴€ц儍鑲犵値鏄敱鐗涗紶鏌撴€ц儍鑲犵値鐥呮瘨寮曡捣鐨勪竴绉嶉珮搴︽帴瑙︽€ц偁閬撲紶鏌撶梾銆?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "1-3澶?,
    "mortality_rate": "浠旂尓鍙揪100%"
  },
  {
    "id": "d19",
    "name": "鐗涚棦鐤?,
    "alias": "琛€鐥?,
    "description": "鐗涚棦鐤炬槸鐢辩墰鐥㈢柧鐭灪鏃嬩綋寮曡捣鐨勪竴绉嶈偁閬撲紶鏌撶梾銆?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "2-14澶?,
    "mortality_rate": "杈冧綆"
  },
  {
    "id": "d20",
    "name": "鐗涘鐢熸€у洖鑲犵値",
    "alias": "鍥炶偁鐐?,
    "description": "鐗涘鐢熸€у洖鑲犵値鏄敱鑳炲唴鍔虫．鑿屽紩璧风殑涓€绉嶆參鎬ц偁閬撲紶鏌撶梾銆?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "2-3鍛?,
    "mortality_rate": "杈冧綆"
  },
  {
    "id": "d21",
    "name": "鐗涢檮绾㈢粏鑳炰綋鐥?,
    "alias": "闄勭孩浣撶梾",
    "description": "鐗涢檮绾㈢粏鑳炰綋鐥呮槸鐢遍檮绾㈢粏鑳炰綋瀵勭敓浜庣孩缁嗚優琛ㄩ潰寮曡捣鐨勪竴绉嶄紶鏌撶梾銆?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "3-7澶?,
    "mortality_rate": "杈冮珮"
  },
  {
    "id": "d22",
    "name": "鐗涘紦褰㈣櫕鐥?,
    "alias": "寮撳舰浣撶梾",
    "description": "鐗涘紦褰㈣櫕鐥呮槸鐢遍練鍦板紦褰㈣櫕寮曡捣鐨勪竴绉嶄汉鐣滃叡鎮ｅ瘎鐢熻櫕鐥呫€?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "3-7澶?,
    "mortality_rate": "鎬ユ€у瀷杈冮珮"
  },
  {
    "id": "d23",
    "name": "鐗涜洈铏梾",
    "alias": "铔旇櫕鎰熸煋",
    "description": "鐗涜洈铏梾鏄敱鐚洈铏瘎鐢熶簬灏忚偁寮曡捣鐨勪竴绉嶅瘎鐢熻櫕鐥呫€?,
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "2-2.5涓湀",
    "mortality_rate": "杈冧綆"
  },
  {
    "id": "d24",
    "name": "鐗涚枼铻ㄧ梾",
    "alias": "鐤ョ櫍",
    "description": "鐗涚枼铻ㄧ梾鏄敱鐚枼铻ㄥ瘎鐢熶簬鐨偆寮曡捣鐨勪竴绉嶆參鎬у瘎鐢熻櫕鐥呫€?,
    "severity": "low",
    "is_contagious": true,
    "incubation_period": "2-4鍛?,
    "mortality_rate": "浣?
  },
  {
    "id": "d25",
    "name": "鐗涚己閾佹€ц传琛€",
    "alias": "浠旂尓璐",
    "description": "鐗涚己閾佹€ц传琛€鏄敱浜庨搧鍏冪礌缂轰箯寮曡捣鐨勪竴绉嶈惀鍏讳唬璋㈢梾銆?,
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "鍑虹敓鍚?-2鍛?,
    "mortality_rate": "杈冮珮"
  },
  {
    "id": "d26",
    "name": "鐗涚淮鐢熺礌A缂轰箯鐥?,
    "alias": "澶滅洸鐥?,
    "description": "鐗涚淮鐢熺礌A缂轰箯鐥囨槸鐢变簬缁寸敓绱燗缂轰箯寮曡捣鐨勪竴绉嶈惀鍏讳唬璋㈢梾銆?,
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "鏁板懆",
    "mortality_rate": "浣?
  },
  {
    "id": "d27",
    "name": "鐗涚缂轰箯鐥?,
    "alias": "鐧借倢鐥?,
    "description": "鐗涚缂轰箯鐥囨槸鐢变簬纭掑厓绱犵己涔忓紩璧风殑涓€绉嶈惀鍏讳唬璋㈢梾銆?,
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "鏁板懆",
    "mortality_rate": "杈冮珮"
  },
  {
    "id": "d28",
    "name": "鐗涢鐩愪腑姣?,
    "alias": "鍜镐腑姣?,
    "description": "鐗涢鐩愪腑姣掓槸鐢变簬鎽勫叆杩囬噺椋熺洂寮曡捣鐨勪竴绉嶄腑姣掔梾銆?,
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "鏁板皬鏃?,
    "mortality_rate": "杈冮珮"
  },
  {
    "id": "d29",
    "name": "鐗涢湁鑿屾瘨绱犱腑姣?,
    "alias": "闇夐ゲ鏂欎腑姣?,
    "description": "鐗涢湁鑿屾瘨绱犱腑姣掓槸鐢变簬閲囬闇夊彉楗叉枡寮曡捣鐨勪竴绉嶄腑姣掔梾銆?,
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "鏁板ぉ",
    "mortality_rate": "鎬ユ€у瀷杈冮珮"
  },
  {
    "id": "d30",
    "name": "鐗涗腑鏆?,
    "alias": "鐑皠鐥?,
    "description": "鐗涗腑鏆戞槸鐢变簬鐜娓╁害杩囬珮寮曡捣鐨勪竴绉嶆€ユ€х儹搴旀縺鐤剧梾銆?,
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "鏁板垎閽熻嚦鏁板皬鏃?,
    "mortality_rate": "杈冮珮"
  },
  {
    "id": "d31",
    "name": "鐗涙劅鍐?,
    "alias": "涓婂懠鍚搁亾鎰熸煋",
    "description": "鐗涙劅鍐掓槸鐢变簬鍙楀瘨寮曡捣鐨勪竴绉嶄笂鍛煎惛閬撶柧鐥呫€?,
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "1-3澶?,
    "mortality_rate": "浣?
  },
  {
    "id": "d32",
    "name": "鐗涗究绉?,
    "alias": "鑲犻樆濉?,
    "description": "鐗涗究绉樻槸鐢变簬鑲犻亾鍐呭鐗╁共纭紩璧风殑涓€绉嶆秷鍖栫郴缁熺柧鐥呫€?,
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "鏁板ぉ",
    "mortality_rate": "浣?
  },
  {
    "id": "d33",
    "name": "鐗涜儍婧冪枴",
    "alias": "鑳冪┛瀛?,
    "description": "鐗涜儍婧冪枴鏄敱浜庤儍榛忚啘鎹熶激寮曡捣鐨勪竴绉嶆秷鍖栫郴缁熺柧鐥呫€?,
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "鏁板懆",
    "mortality_rate": "鎬ユ€у瀷杈冮珮"
  },
  {
    "id": "d34",
    "name": "鐗涗钩鎴跨値",
    "alias": "涔宠吅鐐?,
    "description": "鐗涗钩鎴跨値鏄敱浜庣粏鑿屾劅鏌撳紩璧风殑涓€绉嶄钩鎴跨柧鐥呫€?,
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "1-3澶?,
    "mortality_rate": "浣?
  },
  {
    "id": "d35",
    "name": "鐗涘瓙瀹唴鑶滅値",
    "alias": "瀛愬鐐?,
    "description": "鐗涘瓙瀹唴鑶滅値鏄敱浜庣粏鑿屾劅鏌撳紩璧风殑涓€绉嶇敓娈栫郴缁熺柧鐥呫€?,
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "浜у悗3-5澶?,
    "mortality_rate": "浣?
  },
  {
    "id": "d36",
    "name": "鐗涜箘瑁?,
    "alias": "韫勭梾",
    "description": "鐗涜箘瑁傛槸鐢变簬韫勫３骞茶寮曡捣鐨勪竴绉嶈箘閮ㄧ柧鐥呫€?,
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "鏁板懆",
    "mortality_rate": "浣?
  },
  {
    "id": "d37",
    "name": "鐗涘簲婵€缁煎悎寰?,
    "alias": "PSS",
    "description": "鐗涘簲婵€缁煎悎寰佹槸鐢变簬搴旀縺鍥犵礌寮曡捣鐨勪竴绉嶆€ユ€х柧鐥呫€?,
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "鏁板垎閽?,
    "mortality_rate": "杈冮珮"
  },
  {
    "id": "d38",
    "name": "鐗涘紓椋熺櫀",
    "alias": "鍜熬鐥?,
    "description": "鐗涘紓椋熺櫀鏄敱浜庤惀鍏荤己涔忔垨绠＄悊涓嶅綋寮曡捣鐨勪竴绉嶈涓哄紓甯搞€?,
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "鏁板ぉ",
    "mortality_rate": "浣?
  },
  {
    "id": "d39",
    "name": "鐗涙笚鍑烘€х毊鐐?,
    "alias": "娌圭毊鐥?,
    "description": "鐗涙笚鍑烘€х毊鐐庢槸鐢辩尓钁¤悇鐞冭弻寮曡捣鐨勪竴绉嶇毊鑲ょ梾銆?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "3-5澶?,
    "mortality_rate": "浠旂尓杈冮珮"
  },
  {
    "id": "d40",
    "name": "鐗涘潖姝绘€ф潌鑿岀梾",
    "alias": "鍧忔鏉嗚弻鎰熸煋",
    "description": "鐗涘潖姝绘€ф潌鑿岀梾鏄敱鍧忔姊潌鑿屽紩璧风殑涓€绉嶄紶鏌撶梾銆?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "3-7澶?,
    "mortality_rate": "杈冧綆"
  },
  {
    "id": "d41",
    "name": "鐗涜劚鑲?,
    "alias": "鐩磋偁鑴卞嚭",
    "description": "鐗涜劚鑲涙槸鐩磋偁鏈榛忚啘鎴栫洿鑲犲叏灞傝劚鍑鸿倹闂ㄥ鐨勪竴绉嶇柧鐥呫€?,
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "鎬ユ€?,
    "mortality_rate": "浣?
  },
  {
    "id": "d42",
    "name": "鐘婄墰姘磋偪鐥?,
    "alias": "鑲犳瘨琛€鐥?,
    "description": "鐘婄墰姘磋偪鐥呮槸鐢辨憾琛€鎬уぇ鑲犳潌鑿屾瘨绱犲紩璧风殑涓€绉嶆€ユ€ф瘨琛€鐥囥€?,
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "1-2澶?,
    "mortality_rate": "鍙揪80%浠ヤ笂"
  },
  {
    "id": "d43",
    "name": "鐗涢瓘姘忔鑿岃儉姘旂梾",
    "alias": "鐚濇鐥?,
    "description": "鐗涢瓘姘忔鑿岃儉姘旂梾鏄敱浜ф皵鑽氳啘姊弻寮曡捣鐨勪竴绉嶆€ユ€т腑姣掔梾銆?,
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "鏁板皬鏃?,
    "mortality_rate": "鎬ユ€у瀷鍙揪100%"
  },
  {
    "id": "d44",
    "name": "鐗涙潕姘忔潌鑿岀梾",
    "alias": "杞湀鐥?,
    "description": "鐗涙潕姘忔潌鑿岀梾鏄敱鍗曟牳缁嗚優澧炲鎬ф潕姘忔潌鑿屽紩璧风殑涓€绉嶄汉鐣滃叡鎮ｄ紶鏌撶梾銆?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "2-3鍛?,
    "mortality_rate": "杈冮珮"
  },
  {
    "id": "d45",
    "name": "鐗涜悗缂╂€ч蓟鐐?,
    "alias": "AR",
    "description": "鐗涜悗缂╂€ч蓟鐐庢槸鐢辨敮姘旂璐ヨ娉㈡皬鏉嗚弻鍜屽鏉€鎬у反姘忔潌鑿屽紩璧风殑涓€绉嶆參鎬у懠鍚搁亾浼犳煋鐥呫€?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "鏁板懆",
    "mortality_rate": "浣?
  },
  {
    "id": "d46",
    "name": "鐗涙祬琛ㄦ€ц儍鐐?,
    "alias": "鍗′粬鎬ц儍鐐?,
    "description": "鐗涙祬琛ㄦ€ц儍鐐庢槸鐢变簬楗插吇绠＄悊涓嶅綋寮曡捣鐨勪竴绉嶈儍榛忚啘鐐庣棁銆?,
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "鏁板ぉ",
    "mortality_rate": "浣?
  },
  {
    "id": "d47",
    "name": "鐗涜儙琛ｄ笉涓?,
    "alias": "鑳庣洏婊炵暀",
    "description": "鐗涜儙琛ｄ笉涓嬫槸姣嶇尓浜у悗鑳庤啘涓嶈兘姝ｅ父鎺掑嚭鐨勪竴绉嶄骇绉戠柧鐥呫€?,
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "浜у悗鏁板皬鏃?,
    "mortality_rate": "浣?
  },
  {
    "id": "d48",
    "name": "姣嶇墰鏃犱钩缁煎悎寰?,
    "alias": "MMA缁煎悎寰?,
    "description": "姣嶇墰鏃犱钩缁煎悎寰佹槸姣嶇尓浜у悗鏃犱钩鎴栧皯涔崇殑涓€绉嶇患鍚堢棁銆?,
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "浜у悗1-3澶?,
    "mortality_rate": "浣?
  },
  {
    "id": "d49",
    "name": "鐗涢毦浜?,
    "alias": "浜у姏鎬х墰闅句骇",
    "description": "鐗涢毦浜ф槸姣嶇尓鍒嗗ī杩囩▼涓儙鍎夸笉鑳芥甯镐骇鍑虹殑涓€绉嶄骇绉戠柧鐥呫€?,
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "鍒嗗ī鏃?,
    "mortality_rate": "杈冮珮"
  }
],
  
  symptoms: [
  {
    "id": "s01",
    "name": "楂樼儳41鈩冧互涓?,
    "category": "temperature"
  },
  {
    "id": "s02",
    "name": "浣庣儳39-40鈩?,
    "category": "temperature"
  },
  {
    "id": "s03",
    "name": "浣撴俯姝ｅ父",
    "category": "temperature"
  },
  {
    "id": "s04",
    "name": "绮剧娌夐儊",
    "category": "general"
  },
  {
    "id": "s05",
    "name": "椋熸搴熺粷",
    "category": "general"
  },
  {
    "id": "s06",
    "name": "椋熸鍑忛€€",
    "category": "general"
  },
  {
    "id": "s07",
    "name": "鑵规郴",
    "category": "digestive"
  },
  {
    "id": "s08",
    "name": "姘存牱鑵规郴",
    "category": "digestive"
  },
  {
    "id": "s09",
    "name": "琛€渚?,
    "category": "digestive"
  },
  {
    "id": "s10",
    "name": "鍛曞悙",
    "category": "digestive"
  },
  {
    "id": "s11",
    "name": "鍜冲椊",
    "category": "respiratory"
  },
  {
    "id": "s12",
    "name": "鍠樻皵",
    "category": "respiratory"
  },
  {
    "id": "s13",
    "name": "娴侀蓟娑?,
    "category": "respiratory"
  },
  {
    "id": "s14",
    "name": "鎵撳柗鍤?,
    "category": "respiratory"
  },
  {
    "id": "s15",
    "name": "鐨偆鍙戠孩",
    "category": "skin"
  },
  {
    "id": "s16",
    "name": "鐨偆涓樼柟",
    "category": "skin"
  },
  {
    "id": "s17",
    "name": "鐨偆婧冪儌",
    "category": "skin"
  },
  {
    "id": "s18",
    "name": "鑰虫湹鍙戠传",
    "category": "skin"
  },
  {
    "id": "s19",
    "name": "鍏宠妭鑲垮ぇ",
    "category": "locomotor"
  },
  {
    "id": "s20",
    "name": "璺涜",
    "category": "locomotor"
  },
  {
    "id": "s21",
    "name": "绔欑珛鍥伴毦",
    "category": "locomotor"
  },
  {
    "id": "s22",
    "name": "鎶芥悙",
    "category": "neurological"
  },
  {
    "id": "s23",
    "name": "杞湀杩愬姩",
    "category": "neurological"
  },
  {
    "id": "s24",
    "name": "瑙掑紦鍙嶅紶",
    "category": "neurological"
  },
  {
    "id": "s25",
    "name": "鐪肩粨鑶滃厖琛€",
    "category": "eye"
  },
  {
    "id": "s26",
    "name": "鐪煎睅澧炲",
    "category": "eye"
  },
  {
    "id": "s27",
    "name": "娴佹稁",
    "category": "general"
  },
  {
    "id": "s28",
    "name": "渚跨",
    "category": "digestive"
  },
  {
    "id": "s29",
    "name": "娑堢槮",
    "category": "general"
  },
  {
    "id": "s30",
    "name": "琚瘺绮椾贡",
    "category": "skin"
  },
  {
    "id": "s31",
    "name": "璐鑻嶇櫧",
    "category": "general"
  },
  {
    "id": "s32",
    "name": "榛勭柛",
    "category": "skin"
  },
  {
    "id": "s33",
    "name": "娴佷骇",
    "category": "reproductive"
  },
  {
    "id": "s34",
    "name": "姝昏儙",
    "category": "reproductive"
  },
  {
    "id": "s35",
    "name": "鏈ㄤ箖浼婅儙",
    "category": "reproductive"
  },
  {
    "id": "s36",
    "name": "涔虫埧鑲胯儉",
    "category": "reproductive"
  },
  {
    "id": "s37",
    "name": "瀛愬鐐?,
    "category": "reproductive"
  },
  {
    "id": "s38",
    "name": "鐫句父鑲胯儉",
    "category": "reproductive"
  },
  {
    "id": "s39",
    "name": "绁炵粡鐥囩姸",
    "category": "neurological"
  },
  {
    "id": "s40",
    "name": "鍏辨祹澶辫皟",
    "category": "neurological"
  },
  {
    "id": "s41",
    "name": "鐦棯",
    "category": "locomotor"
  },
  {
    "id": "s42",
    "name": "鐨偆缁撶梻",
    "category": "skin"
  },
  {
    "id": "s43",
    "name": "鑴辨瘺",
    "category": "skin"
  },
  {
    "id": "s44",
    "name": "楠氱棐",
    "category": "skin"
  },
  {
    "id": "s45",
    "name": "鍛煎惛鍥伴毦",
    "category": "respiratory"
  },
  {
    "id": "s46",
    "name": "鐘潗濮垮娍",
    "category": "respiratory"
  },
  {
    "id": "s47",
    "name": "鍙ｅ悙鐧芥搏",
    "category": "neurological"
  },
  {
    "id": "s48",
    "name": "纾ㄧ墮",
    "category": "neurological"
  },
  {
    "id": "s49",
    "name": "鑵归儴鑶ㄥぇ",
    "category": "digestive"
  },
  {
    "id": "s50",
    "name": "浣撴俯鍋忎綆",
    "category": "temperature"
  },
  {
    "id": "s51",
    "name": "鐩磋偁鑴卞嚭",
    "category": "digestive"
  },
  {
    "id": "s52",
    "name": "鐪肩潙姘磋偪",
    "category": "skin"
  },
  {
    "id": "s53",
    "name": "澶撮儴姘磋偪",
    "category": "skin"
  },
  {
    "id": "s54",
    "name": "灏栧彨",
    "category": "neurological"
  },
  {
    "id": "s55",
    "name": "绐佺劧姝讳骸",
    "category": "general"
  },
  {
    "id": "s56",
    "name": "榧诲嚭琛€",
    "category": "respiratory"
  },
  {
    "id": "s57",
    "name": "榧荤姝枩",
    "category": "respiratory"
  },
  {
    "id": "s58",
    "name": "闈㈤儴楹荤椆",
    "category": "neurological"
  },
  {
    "id": "s59",
    "name": "鍔矗",
    "category": "reproductive"
  },
  {
    "id": "s60",
    "name": "鏃犱钩",
    "category": "reproductive"
  },
  {
    "id": "s61",
    "name": "鑸岃嫈鍘氳吇",
    "category": "digestive"
  },
  {
    "id": "s62",
    "name": "鎭惰嚟鍒嗘硨鐗?,
    "category": "reproductive"
  },
  {
    "id": "s63",
    "name": "鍥涜偄鍒掓按鏍?,
    "category": "neurological"
  }
],
  
  medications: [
  {
    "id": "m01",
    "name": "闈掗湁绱犻捑/閽?,
    "type": "鎶楃敓绱?,
    "dosage": "4-6涓囧崟浣?kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m02",
    "name": "閾鹃湁绱?,
    "type": "鎶楃敓绱?,
    "dosage": "10-15mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m03",
    "name": "鎭╄娌欐槦",
    "type": "鎶楃敓绱?,
    "dosage": "2.5-5mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m04",
    "name": "姘熻嫰灏艰€?,
    "type": "鎶楃敓绱?,
    "dosage": "20mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m05",
    "name": "澶村鍣诲憢",
    "type": "鎶楃敓绱?,
    "dosage": "3-5mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m06",
    "name": "闃胯帿瑗挎灄",
    "type": "鎶楃敓绱?,
    "dosage": "10-20mg/kg浣撻噸",
    "route": "娉ㄥ皠/鍙ｆ湇"
  },
  {
    "id": "m07",
    "name": "纭吀搴嗗ぇ闇夌礌",
    "type": "鎶楃敓绱?,
    "dosage": "4-8mg/kg浣撻噸",
    "route": "娉ㄥ皠/鍙ｆ湇"
  },
  {
    "id": "m08",
    "name": "瀹変箖杩?,
    "type": "閫€鐑ц嵂",
    "dosage": "0.1-0.2ml/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m09",
    "name": "姘熷凹杈涜憽鐢茶兒",
    "type": "閫€鐑ц嵂",
    "dosage": "2mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m10",
    "name": "鍦板绫虫澗",
    "type": "婵€绱?,
    "dosage": "0.1-0.2mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m11",
    "name": "鍙岄粍杩炴敞灏勬恫",
    "type": "涓嵂",
    "dosage": "0.2-0.3ml/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m12",
    "name": "鏉胯摑鏍规敞灏勬恫",
    "type": "涓嵂",
    "dosage": "0.2ml/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m13",
    "name": "绌垮績鑾叉敞灏勬恫",
    "type": "涓嵂",
    "dosage": "0.1-0.2ml/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m14",
    "name": "钂欒劚鐭虫暎",
    "type": "姝㈡郴鑽?,
    "dosage": "浠旂尓1-2g/澶?,
    "route": "鍙ｆ湇"
  },
  {
    "id": "m15",
    "name": "鍙ｆ湇琛ユ恫鐩?,
    "type": "琛ユ恫",
    "dosage": "鑷敱楗敤",
    "route": "鍙ｆ湇"
  },
  {
    "id": "m16",
    "name": "缁寸敓绱燙",
    "type": "缁寸敓绱?,
    "dosage": "10-20mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m17",
    "name": "缁寸敓绱燘12",
    "type": "缁寸敓绱?,
    "dosage": "0.1-0.3mg/澶?,
    "route": "娉ㄥ皠"
  },
  {
    "id": "m18",
    "name": "鍙虫棆绯栭厫閾?,
    "type": "琛ラ搧",
    "dosage": "100-200mg/澶?,
    "route": "娉ㄥ皠"
  },
  {
    "id": "m19",
    "name": "闃跨淮鑿岀礌",
    "type": "椹辫櫕鑽?,
    "dosage": "0.3mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m20",
    "name": "浼婄淮鑿岀礌",
    "type": "椹辫櫕鑽?,
    "dosage": "0.3mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m21",
    "name": "鍙岀敳鑴?,
    "type": "椹辫櫕鑽?,
    "dosage": "0.025-0.05%婧舵恫",
    "route": "澶栫敤"
  },
  {
    "id": "m22",
    "name": "缁寸敓绱燗D娉ㄥ皠娑?,
    "type": "缁寸敓绱?,
    "dosage": "1-2ml/澶?,
    "route": "娉ㄥ皠"
  },
  {
    "id": "m23",
    "name": "浜氱閰搁挔缁寸敓绱燛",
    "type": "寰噺鍏冪礌",
    "dosage": "1-2ml/澶?,
    "route": "娉ㄥ皠"
  },
  {
    "id": "m24",
    "name": "钁¤悇绯?,
    "type": "钀ュ吇",
    "dosage": "10-20ml/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m25",
    "name": "纭吀闀?,
    "type": "娉昏嵂",
    "dosage": "50-100g/澶?,
    "route": "鍙ｆ湇"
  },
  {
    "id": "m26",
    "name": "瑗垮挭鏇夸竵",
    "type": "鑳冭嵂",
    "dosage": "5-10mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m27",
    "name": "缁寸敓绱燢3",
    "type": "缁寸敓绱?,
    "dosage": "1-2mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m28",
    "name": "鐢熺墿绱?,
    "type": "缁寸敓绱?,
    "dosage": "0.1-0.2mg/澶?,
    "route": "鍙ｆ湇"
  },
  {
    "id": "m29",
    "name": "澶嶅悎缁寸敓绱燘",
    "type": "缁寸敓绱?,
    "dosage": "1-2ml/澶?,
    "route": "娉ㄥ皠"
  },
  {
    "id": "m30",
    "name": "纰橀厞",
    "type": "娑堟瘨鑽?,
    "dosage": "閫傞噺",
    "route": "澶栫敤"
  },
  {
    "id": "m31",
    "name": "榛勮姫澶氱硸",
    "type": "涓嵂",
    "dosage": "0.2ml/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m32",
    "name": "鍙ｈ箘鐤珮鍏嶈娓?,
    "type": "鐢熺墿鍒跺搧",
    "dosage": "1-2ml/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m33",
    "name": "鏇跨背鑰冩槦",
    "type": "鎶楃敓绱?,
    "dosage": "10mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m34",
    "name": "骞叉壈绱?,
    "type": "鐢熺墿鍒跺搧",
    "dosage": "1ml/澶?,
    "route": "娉ㄥ皠"
  },
  {
    "id": "m35",
    "name": "鏉ㄦ爲鑺卞彛鏈嶆恫",
    "type": "涓嵂",
    "dosage": "2-3ml/澶?,
    "route": "鍙ｆ湇"
  },
  {
    "id": "m36",
    "name": "纭吀绮樻潌鑿岀礌",
    "type": "鎶楃敓绱?,
    "dosage": "5mg/kg浣撻噸",
    "route": "鍙ｆ湇"
  },
  {
    "id": "m37",
    "name": "涔欓叞鐢插柟",
    "type": "鎶楃敓绱?,
    "dosage": "5mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m38",
    "name": "娉板鑿岀礌",
    "type": "鎶楃敓绱?,
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m39",
    "name": "澶氳タ鐜礌",
    "type": "鎶楃敓绱?,
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m40",
    "name": "鍦扮編纭濆攽",
    "type": "鎶楀師铏嵂",
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m41",
    "name": "涓夋爱鑴?,
    "type": "鎶楀師铏嵂",
    "dosage": "5mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m42",
    "name": "纾鸿兒闂寸敳姘у槯鍟?,
    "type": "鎶楃敓绱?,
    "dosage": "0.1ml/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m43",
    "name": "鑺嫰杈惧攽",
    "type": "椹辫櫕鑽?,
    "dosage": "5mg/kg浣撻噸",
    "route": "鍙ｆ湇"
  },
  {
    "id": "m44",
    "name": "楸艰倽娌?,
    "type": "缁寸敓绱?,
    "dosage": "5-10ml/澶?,
    "route": "鍙ｆ湇"
  },
  {
    "id": "m45",
    "name": "鐢橀湶閱?,
    "type": "鑴辨按鑽?,
    "dosage": "1-2g/kg浣撻噸",
    "route": "闈欒剦娉ㄥ皠"
  },
  {
    "id": "m46",
    "name": "鍒堕湁鑿岀礌",
    "type": "鎶楃湡鑿岃嵂",
    "dosage": "100涓囧崟浣?澶?,
    "route": "鍙ｆ湇"
  },
  {
    "id": "m47",
    "name": "浜哄伐鐩?,
    "type": "鍋ヨ儍鑽?,
    "dosage": "50-100g/澶?,
    "route": "鍙ｆ湇"
  },
  {
    "id": "m48",
    "name": "纰抽吀姘㈤挔",
    "type": "鍒堕吀鑽?,
    "dosage": "5-10g/澶?,
    "route": "鍙ｆ湇"
  },
  {
    "id": "m49",
    "name": "楸肩煶鑴傝蒋鑶?,
    "type": "澶栫敤鑽?,
    "dosage": "閫傞噺",
    "route": "澶栫敤"
  },
  {
    "id": "m50",
    "name": "瀹値娓?,
    "type": "娑堟瘨鑽?,
    "dosage": "100ml",
    "route": "瀛愬鐏屾敞"
  },
  {
    "id": "m51",
    "name": "姘笝鍡?,
    "type": "闀囬潤鑽?,
    "dosage": "1-2mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m52",
    "name": "楂橀敯閰搁捑",
    "type": "娑堟瘨鑽?,
    "dosage": "0.1%婧舵恫",
    "route": "澶栫敤"
  },
  {
    "id": "m53",
    "name": "姘ㄨ媱瑗挎灄",
    "type": "鎶楃敓绱?,
    "dosage": "10-20mg/kg浣撻噸",
    "route": "娉ㄥ皠/鍙ｆ湇"
  },
  {
    "id": "m54",
    "name": "澶村鍠硅偀",
    "type": "鎶楃敓绱?,
    "dosage": "2-3mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m55",
    "name": "娉颁箰鑿岀礌",
    "type": "鎶楃敓绱?,
    "dosage": "5-10mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m56",
    "name": "娉颁竾鑿岀礌",
    "type": "鎶楃敓绱?,
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m57",
    "name": "纭吀鏂伴湁绱?,
    "type": "鎶楃敓绱?,
    "dosage": "7-15mg/kg浣撻噸",
    "route": "鍙ｆ湇"
  },
  {
    "id": "m58",
    "name": "鍗￠偅闇夌礌",
    "type": "鎶楃敓绱?,
    "dosage": "10-15mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m59",
    "name": "澶ц闇夌礌",
    "type": "鎶楃敓绱?,
    "dosage": "10mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m60",
    "name": "鐢茬牅闇夌礌",
    "type": "鎶楃敓绱?,
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m61",
    "name": "鏋楀彲闇夌礌",
    "type": "鎶楃敓绱?,
    "dosage": "10mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m62",
    "name": "鍒╅珮闇夌礌",
    "type": "澶嶆柟鎶楃敓绱?,
    "dosage": "0.1ml/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m63",
    "name": "闃胯嫰杈惧攽",
    "type": "椹辫櫕鑽?,
    "dosage": "5-10mg/kg浣撻噸",
    "route": "鍙ｆ湇"
  },
  {
    "id": "m64",
    "name": "澶氭媺鑿岀礌",
    "type": "椹辫櫕鑽?,
    "dosage": "0.3mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m65",
    "name": "鍦板厠鐝犲埄",
    "type": "鎶楃悆铏嵂",
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m66",
    "name": "濡ユ洸鐝犲埄",
    "type": "鎶楃悆铏嵂",
    "dosage": "鍙ｆ湇",
    "route": "鍙ｆ湇"
  },
  {
    "id": "m67",
    "name": "杈涚～纾?,
    "type": "椹辫櫕鑽?,
    "dosage": "0.05-0.1%婧舵恫",
    "route": "澶栫敤"
  },
  {
    "id": "m68",
    "name": "涔抽叾鐢?,
    "type": "鐩婄敓鑿?,
    "dosage": "2-5g/澶?,
    "route": "鍙ｆ湇"
  },
  {
    "id": "m69",
    "name": "鏋崏鑺藉鏉嗚弻",
    "type": "鐩婄敓鑿?,
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m70",
    "name": "澶ц挏绱?,
    "type": "涓嵂",
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m71",
    "name": "鏉ㄦ爲鑺辨彁鍙栫墿",
    "type": "涓嵂",
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m72",
    "name": "楹绘潖鐭崇敇鏁?,
    "type": "涓嵂",
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m73",
    "name": "鐢樿崏棰楃矑",
    "type": "涓嵂",
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m74",
    "name": "姘ㄨ尪纰?,
    "type": "骞冲枠鑽?,
    "dosage": "娉ㄥ皠/鍙ｆ湇",
    "route": "娉ㄥ皠/鍙ｆ湇"
  },
  {
    "id": "m75",
    "name": "鏉块潚棰楃矑",
    "type": "涓嵂",
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m76",
    "name": "鑽嗛槻璐ユ瘨鏁?,
    "type": "涓嵂",
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m77",
    "name": "娓呯槦璐ユ瘨鏁?,
    "type": "涓嵂",
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m78",
    "name": "楹婚粍鎻愬彇鐗?,
    "type": "涓嵂",
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m79",
    "name": "鍙岄粍杩炲彛鏈嶆恫",
    "type": "涓嵂",
    "dosage": "1-2ml/kg浣撻噸",
    "route": "鍙ｆ湇"
  },
  {
    "id": "m80",
    "name": "鍗″反鍖规灄閽?,
    "type": "閫€鐑ц嵂",
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m81",
    "name": "鏌磋儭鍙ｆ湇娑?,
    "type": "涓嵂",
    "dosage": "1-2ml/kg浣撻噸",
    "route": "鍙ｆ湇"
  },
  {
    "id": "m82",
    "name": "鏉胯摑鏍归绮?,
    "type": "涓嵂",
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m83",
    "name": "缂╁绱?,
    "type": "婵€绱?,
    "dosage": "10-30鍗曚綅/澶?,
    "route": "娉ㄥ皠"
  },
  {
    "id": "m84",
    "name": "姘墠鍒楃儻閱?,
    "type": "婵€绱?,
    "dosage": "0.1-0.2mg/澶?,
    "route": "娉ㄥ皠"
  },
  {
    "id": "m85",
    "name": "鑻敳閰搁泴浜岄唶",
    "type": "婵€绱?,
    "dosage": "1-2mg/澶?,
    "route": "娉ㄥ皠"
  },
  {
    "id": "m86",
    "name": "榛勪綋閰?,
    "type": "婵€绱?,
    "dosage": "20-50mg/澶?,
    "route": "娉ㄥ皠"
  },
  {
    "id": "m87",
    "name": "姝㈣鏁?,
    "type": "姝㈣鑽?,
    "dosage": "2-4ml/澶?,
    "route": "娉ㄥ皠"
  },
  {
    "id": "m88",
    "name": "鐩婃瘝鐢熷寲鏁?,
    "type": "涓嵂",
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m89",
    "name": "瀹値鍑€",
    "type": "涓嵂",
    "dosage": "50-100ml/澶?,
    "route": "瀛愬鐏屾敞"
  },
  {
    "id": "m90",
    "name": "杩囩～閰告阿閽?,
    "type": "娑堟瘨鑽?,
    "dosage": "1:200绋€閲?,
    "route": "澶栫敤"
  },
  {
    "id": "m91",
    "name": "鎴婁簩閱?,
    "type": "娑堟瘨鑽?,
    "dosage": "1:200-1:500绋€閲?,
    "route": "澶栫敤"
  },
  {
    "id": "m92",
    "name": "鑱氱淮閰",
    "type": "娑堟瘨鑽?,
    "dosage": "1:500绋€閲?,
    "route": "澶栫敤"
  },
  {
    "id": "m93",
    "name": "鐢熺煶鐏?,
    "type": "娑堟瘨鑽?,
    "dosage": "閫傞噺",
    "route": "澶栫敤"
  },
  {
    "id": "m94",
    "name": "鍙屾哀姘?,
    "type": "娑堟瘨鑽?,
    "dosage": "3%婧舵恫",
    "route": "澶栫敤"
  },
  {
    "id": "m95",
    "name": "鐢佃В澶氱淮",
    "type": "钀ュ吇琛ュ厖",
    "dosage": "鎷屾枡/楗按",
    "route": "鎷屾枡/楗按"
  },
  {
    "id": "m96",
    "name": "闃挎墭鍝?,
    "type": "瑙ｆ瘨鑽?,
    "dosage": "0.01-0.02mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m97",
    "name": "纾鸿兒鍢у暥閽?,
    "type": "鎶楃敓绱?,
    "dosage": "0.1ml/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m98",
    "name": "澶嶆柟纾鸿兒闂寸敳姘у槯鍟堕挔",
    "type": "澶嶆柟鎶楃敓绱?,
    "dosage": "0.1ml/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m99",
    "name": "闃跨淮鑿岀礌閫忕毊娑?,
    "type": "椹辫櫕鑽?,
    "dosage": "0.1ml/kg浣撻噸",
    "route": "澶栫敤"
  },
  {
    "id": "m100",
    "name": "鐧藉ご缈佸彛鏈嶆恫",
    "type": "涓嵂",
    "dosage": "1-2ml/kg浣撻噸",
    "route": "鍙ｆ湇"
  },
  {
    "id": "m101",
    "name": "鍙岄粍杩炴暎",
    "type": "涓嵂",
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m102",
    "name": "榛勮姫澶氱硸鏁?,
    "type": "涓嵂",
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m103",
    "name": "钘块姝ｆ皵鏁?,
    "type": "涓嵂",
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m104",
    "name": "鑴遍湁鍓?,
    "type": "楗叉枡娣诲姞鍓?,
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m105",
    "name": "楸艰叆鑽夐绮?,
    "type": "涓嵂",
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m106",
    "name": "榫欒儐娉昏倽鏁?,
    "type": "涓嵂",
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m107",
    "name": "淇冩帓A3",
    "type": "婵€绱?,
    "dosage": "25-50渭g/澶?,
    "route": "娉ㄥ皠"
  },
  {
    "id": "m108",
    "name": "閰氱：涔欒兒",
    "type": "姝㈣鑽?,
    "dosage": "2-4ml/澶?,
    "route": "娉ㄥ皠"
  }
]
}

  treatments: [
  {
    "id": "t01",
    "disease_id": "d01",
    "disease_name": "鐗涚槦",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氭敮鎸佺枟娉?,
        "medications": [],
        "oral_medications": [],
        "notes": "鐗涚槦鏃犵壒鏁堣嵂锛屼互鏀寔鐤楁硶涓轰富銆?
      }
    ],
    "nursing_care": "闅旂鐥呯墰锛屼繚鎸佹俯鏆栥€?,
    "priority": 1
  },
  {
    "id": "t02",
    "disease_id": "d02",
    "disease_name": "闈炴床鐗涚槦",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氭棤鐗规晥娌荤枟",
        "medications": [],
        "oral_medications": [],
        "notes": "闈炴床鐗涚槦鏃犵壒鏁堟不鐤楋紝鍙戠幇鍚庣珛鍗充笂鎶ャ€?
      }
    ],
    "nursing_care": "涓ユ牸闅旂锛岀瓑寰呭畼鏂瑰鐞嗐€?,
    "priority": 1
  },
  {
    "id": "t03",
    "disease_id": "d03",
    "disease_name": "鐗涘彛韫勭柅",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氬鐥囨不鐤?,
        "medications": [],
        "oral_medications": [],
        "notes": "鍙ｈ厰鐢ㄩ珮閿伴吀閽惧啿娲楋紝韫勯儴鐢ㄧ鐢樻补娑傛姽銆?
      }
    ],
    "nursing_care": "淇濇寔鍦堣垗骞茬嚗娓呮磥銆?,
    "priority": 1
  },
  {
    "id": "t04",
    "disease_id": "d04",
    "disease_name": "鐗涜摑鑰崇梾",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氭敮鎸佺枟娉?,
        "medications": [],
        "oral_medications": [],
        "notes": "钃濊€崇梾鏃犵壒鏁堣嵂銆?
      }
    ],
    "nursing_care": "鏀瑰杽閫氶锛岄檷浣庨ゲ鍏诲瘑搴︺€?,
    "priority": 1
  },
  {
    "id": "t05",
    "disease_id": "d05",
    "disease_name": "鐗涘渾鐜梾姣掔梾",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氭敮鎸佺枟娉?,
        "medications": [],
        "oral_medications": [],
        "notes": "鍦嗙幆鐥呮瘨鐥呮棤鐗规晥鑽€?
      }
    ],
    "nursing_care": "鏀瑰杽楗插吇鐜銆?,
    "priority": 2
  },
  {
    "id": "t06",
    "disease_id": "d06",
    "disease_name": "鐗涙祦琛屾€ц吂娉?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氬彛鏈嶈ˉ娑?姝㈡郴",
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "钂欒劚鐭虫暎",
            "dosage": "鐘婄墰3-5g/澶?,
            "frequency": "姣忔棩2娆?,
            "duration_days": 3,
            "notes": "姝㈡郴"
          }
        ],
        "notes": "鐘婄墰鍙ｆ湇钂欒劚鐭虫暎+琛ユ恫鐩愩€?
      }
    ],
    "nursing_care": "淇濇俯锛屼繚鎸佸共鐕ャ€?,
    "priority": 1
  },
  {
    "id": "t07",
    "disease_id": "d07",
    "disease_name": "鐗涗紶鏌撴€ц兏鑶滆偤鐐?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氬ご瀛?姘熷凹杈?,
        "medications": [
          {
            "medication_id": "m05",
            "medication_name": "澶村鍣诲憢",
            "dosage_per_kg": "5mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "鎺у埗鎰熸煋"
          }
        ],
        "oral_medications": [],
        "notes": "澶村+姘熷凹杈涙敞灏勩€?
      }
    ],
    "nursing_care": "鏀瑰杽閫氶銆?,
    "priority": 1
  },
  {
    "id": "t08",
    "disease_id": "d08",
    "disease_name": "鐗涙皵鍠樼梾",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氭浛绫宠€冩槦",
        "medications": [
          {
            "medication_id": "m33",
            "medication_name": "鏇跨背鑰冩槦",
            "dosage_per_kg": "10mg",
            "frequency": "姣?8灏忔椂1娆?,
            "duration_days": 3,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "鎺у埗鏀師浣撴劅鏌?
          }
        ],
        "oral_medications": [],
        "notes": "鏇跨背鑰冩槦瀵规敮鍘熶綋鏁堟灉濂姐€?
      }
    ],
    "nursing_care": "鏀瑰杽閫氶銆?,
    "priority": 2
  },
  {
    "id": "t09",
    "disease_id": "d09",
    "disease_name": "鐘婄墰榛勭棦",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氬簡澶ч湁绱?钂欒劚鐭?,
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "纭吀搴嗗ぇ闇夌礌",
            "dosage": "鐘婄墰2-3ml/澶?,
            "frequency": "姣忔棩2娆?,
            "duration_days": 3,
            "notes": "鍙ｆ湇锛岃偁閬撴潃鑿?
          }
        ],
        "notes": "鐘婄墰鍙ｆ湇搴嗗ぇ闇夌礌+钂欒劚鐭炽€?
      }
    ],
    "nursing_care": "淇濇俯锛屼繚鎸佸共鐕ャ€?,
    "priority": 1
  },
  {
    "id": "t10",
    "disease_id": "d10",
    "disease_name": "鐘婄墰鐧界棦",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氬簡澶ч湁绱?钂欒劚鐭?,
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "纭吀搴嗗ぇ闇夌礌",
            "dosage": "鐘婄墰2-3ml/澶?,
            "frequency": "姣忔棩2娆?,
            "duration_days": 3,
            "notes": "鍙ｆ湇锛岃偁閬撴潃鑿?
          }
        ],
        "notes": "鐘婄墰鍙ｆ湇搴嗗ぇ闇夌礌+钂欒劚鐭炽€?
      }
    ],
    "nursing_care": "鍔犲己姣嶇墰楗插吇绠＄悊銆?,
    "priority": 2
  },
  {
    "id": "t11",
    "disease_id": "d11",
    "disease_name": "鐗涗腹姣?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氶潚闇夌礌锛堥閫夛級",
        "medications": [
          {
            "medication_id": "m01",
            "medication_name": "闈掗湁绱犻捑/閽?,
            "dosage_per_kg": "6-8涓囧崟浣?,
            "frequency": "姣忔棩2-3娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "棣栭€夎嵂鐗?
          }
        ],
        "oral_medications": [],
        "notes": "闈掗湁绱犳槸鐗涗腹姣掗閫夎嵂鐗┿€?
      }
    ],
    "nursing_care": "闅旂鐥呯墰锛屼繚鎸佸湀鑸嶆竻娲併€?,
    "priority": 1
  },
  {
    "id": "t12",
    "disease_id": "d12",
    "disease_name": "鐗涜偤鐤?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氬ご瀛?姘熷凹杈?,
        "medications": [
          {
            "medication_id": "m05",
            "medication_name": "澶村鍣诲憢",
            "dosage_per_kg": "5mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "鎺у埗鎰熸煋"
          }
        ],
        "oral_medications": [],
        "notes": "澶村+姘熷凹杈涙敞灏勩€?
      }
    ],
    "nursing_care": "鏀瑰杽閫氶銆?,
    "priority": 2
  },
  {
    "id": "t13",
    "disease_id": "d13",
    "disease_name": "鐗涢摼鐞冭弻鐥?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氬ご瀛㈠櫥鍛?,
        "medications": [
          {
            "medication_id": "m05",
            "medication_name": "澶村鍣诲憢",
            "dosage_per_kg": "5mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "棣栭€夎嵂鐗?
          }
        ],
        "oral_medications": [],
        "notes": "澶村鍣诲憢瀵归摼鐞冭弻鏁堟灉濂姐€?
      }
    ],
    "nursing_care": "闅旂鐥呯墰銆?,
    "priority": 1
  },
  {
    "id": "t14",
    "disease_id": "d14",
    "disease_name": "鐗涘壇浼ゅ瘨",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氭盁鑻凹鑰?,
        "medications": [
          {
            "medication_id": "m04",
            "medication_name": "姘熻嫰灏艰€?,
            "dosage_per_kg": "20mg",
            "frequency": "姣?8灏忔椂1娆?,
            "duration_days": 3,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "瀵规矙闂ㄦ皬鑿屾晥鏋滃ソ"
          }
        ],
        "oral_medications": [],
        "notes": "姘熻嫰灏艰€冩敞灏勩€?
      }
    ],
    "nursing_care": "闅旂鐥呯墰銆?,
    "priority": 2
  },
  {
    "id": "t15",
    "disease_id": "d15",
    "disease_name": "鐗涗吉鐙傜姮鐥?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氭敮鎸佺枟娉?,
        "medications": [],
        "oral_medications": [],
        "notes": "浼媯鐘梾鏃犵壒鏁堣嵂銆?
      }
    ],
    "nursing_care": "闅旂鐥呯墰銆?,
    "priority": 1
  },
  {
    "id": "t16",
    "disease_id": "d16",
    "disease_name": "鐗涚粏灏忕梾姣掔梾",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氭棤鐗规晥娌荤枟",
        "medications": [],
        "oral_medications": [],
        "notes": "缁嗗皬鐥呮瘨鐥呮棤鐗规晥娌荤枟銆?
      }
    ],
    "nursing_care": "鍔犲己楗插吇绠＄悊銆?,
    "priority": 2
  },
  {
    "id": "t17",
    "disease_id": "d17",
    "disease_name": "鐗涗箼鍨嬭剳鐐?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氭敮鎸佺枟娉?,
        "medications": [],
        "oral_medications": [],
        "notes": "涔欏瀷鑴戠値鏃犵壒鏁堣嵂銆?
      }
    ],
    "nursing_care": "鐏殜闃茶殜銆?,
    "priority": 2
  },
  {
    "id": "t18",
    "disease_id": "d18",
    "disease_name": "鐗涗紶鏌撴€ц儍鑲犵値",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氬彛鏈嶈ˉ娑?姝㈡郴",
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "钂欒劚鐭虫暎",
            "dosage": "鐘婄墰3-5g/澶?,
            "frequency": "姣忔棩2娆?,
            "duration_days": 3,
            "notes": "姝㈡郴"
          }
        ],
        "notes": "鐘婄墰鍙ｆ湇钂欒劚鐭虫暎銆?
      }
    ],
    "nursing_care": "淇濇俯锛屼繚鎸佸共鐕ャ€?,
    "priority": 2
  },
  {
    "id": "t19",
    "disease_id": "d19",
    "disease_name": "鐗涚棦鐤?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氫箼閰扮敳鍠?,
        "medications": [
          {
            "medication_id": "m37",
            "medication_name": "涔欓叞鐢插柟",
            "dosage_per_kg": "5mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "棣栭€夎嵂鐗?
          }
        ],
        "oral_medications": [],
        "notes": "涔欓叞鐢插柟娉ㄥ皠銆?
      }
    ],
    "nursing_care": "淇濇寔鍦堣垗娓呮磥銆?,
    "priority": 2
  },
  {
    "id": "t20",
    "disease_id": "d20",
    "disease_name": "鐗涘鐢熸€у洖鑲犵値",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氭嘲濡欒弻绱?,
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "娉板鑿岀礌",
            "dosage": "鎷屾枡",
            "frequency": "鎸佺画",
            "duration_days": 10,
            "notes": "棣栭€夎嵂鐗?
          }
        ],
        "notes": "娉板鑿岀礌鎷屾枡銆?
      }
    ],
    "nursing_care": "鏀瑰杽楗插吇绠＄悊銆?,
    "priority": 2
  },
  {
    "id": "t21",
    "disease_id": "d21",
    "disease_name": "鐗涢檮绾㈢粏鑳炰綋鐥?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氫笁姘剴",
        "medications": [
          {
            "medication_id": "m41",
            "medication_name": "涓夋爱鑴?,
            "dosage_per_kg": "5mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 3,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "棣栭€夎嵂鐗?
          }
        ],
        "oral_medications": [],
        "notes": "涓夋爱鑴掓敞灏勩€?
      }
    ],
    "nursing_care": "鐏殜椹辫櫕銆?,
    "priority": 2
  },
  {
    "id": "t22",
    "disease_id": "d22",
    "disease_name": "鐗涘紦褰㈣櫕鐥?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氱：鑳洪棿鐢叉哀鍢у暥",
        "medications": [
          {
            "medication_id": "m42",
            "medication_name": "纾鸿兒闂寸敳姘у槯鍟?,
            "dosage_per_kg": "0.1ml",
            "frequency": "姣忔棩1娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "棣栭€夎嵂鐗?
          }
        ],
        "oral_medications": [],
        "notes": "纾鸿兒闂寸敳姘у槯鍟跺寮撳舰铏晥鏋滃ソ銆?
      }
    ],
    "nursing_care": "鐏紶锛岀姝㈠吇鐚€?,
    "priority": 2
  },
  {
    "id": "t23",
    "disease_id": "d23",
    "disease_name": "鐗涜洈铏梾",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氶樋鑻揪鍞?,
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "闃胯嫰杈惧攽",
            "dosage": "5-10mg/kg浣撻噸",
            "frequency": "鍗曟",
            "duration_days": 1,
            "notes": "骞胯氨椹辫櫕鑽?
          }
        ],
        "notes": "闃胯嫰杈惧攽鍙ｆ湇銆?
      }
    ],
    "nursing_care": "瀹氭湡椹辫櫕銆?,
    "priority": 3
  },
  {
    "id": "t24",
    "disease_id": "d24",
    "disease_name": "鐗涚枼铻ㄧ梾",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氫紛缁磋弻绱?,
        "medications": [
          {
            "medication_id": "m20",
            "medication_name": "浼婄淮鑿岀礌",
            "dosage_per_kg": "0.3mg",
            "frequency": "闂撮殧7-10澶╅噸澶?,
            "duration_days": 2,
            "route": "鐨笅娉ㄥ皠",
            "notes": "椹辫灗铏?
          }
        ],
        "oral_medications": [],
        "notes": "浼婄淮鑿岀礌娉ㄥ皠銆?
      }
    ],
    "nursing_care": "淇濇寔鍦堣垗骞茬嚗銆?,
    "priority": 3
  },
  {
    "id": "t25",
    "disease_id": "d25",
    "disease_name": "鐗涚己閾佹€ц传琛€",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氬彸鏃嬬硸閰愰搧",
        "medications": [
          {
            "medication_id": "m18",
            "medication_name": "鍙虫棆绯栭厫閾?,
            "dosage_per_kg": "100-200mg/澶?,
            "frequency": "鍗曟",
            "duration_days": 1,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "棣栭€夎嵂鐗?
          }
        ],
        "oral_medications": [],
        "notes": "鐘婄墰鍑虹敓鍚?澶╁唴娉ㄥ皠銆?
      }
    ],
    "nursing_care": "鐘婄墰鍑虹敓鍚?澶╁唴琛ラ搧銆?,
    "priority": 3
  },
  {
    "id": "t26",
    "disease_id": "d26",
    "disease_name": "鐗涚淮鐢熺礌A缂轰箯鐥?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氱淮鐢熺礌AD",
        "medications": [
          {
            "medication_id": "m22",
            "medication_name": "缁寸敓绱燗D娉ㄥ皠娑?,
            "dosage_per_kg": "2-4ml/澶?,
            "frequency": "鍗曟",
            "duration_days": 1,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "琛ュ厖缁寸敓绱燗鍜孌"
          }
        ],
        "oral_medications": [],
        "notes": "缁寸敓绱燗D娉ㄥ皠銆?
      }
    ],
    "nursing_care": "琛ュ厖闈掔豢楗叉枡銆?,
    "priority": 3
  },
  {
    "id": "t27",
    "disease_id": "d27",
    "disease_name": "鐗涚缂轰箯鐥?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氫簹纭掗吀閽犵淮鐢熺礌E",
        "medications": [
          {
            "medication_id": "m23",
            "medication_name": "浜氱閰搁挔缁寸敓绱燛",
            "dosage_per_kg": "2-4ml/澶?,
            "frequency": "鍗曟",
            "duration_days": 1,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "琛ョ鍜岀淮鐢熺礌E"
          }
        ],
        "oral_medications": [],
        "notes": "浜氱閰搁挔缁寸敓绱燛娉ㄥ皠銆?
      }
    ],
    "nursing_care": "楗叉枡涓坊鍔犱簹纭掗吀閽犮€?,
    "priority": 3
  },
  {
    "id": "t28",
    "disease_id": "d28",
    "disease_name": "鐗涢鐩愪腑姣?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氬鐥囨不鐤?,
        "medications": [],
        "oral_medications": [],
        "notes": "绔嬪嵆鍋滃杺鍚洂楗叉枡锛屽皯閲忓娆＄粰姘淬€?
      }
    ],
    "nursing_care": "绔嬪嵆鍋滃杺鍚洂楗叉枡銆?,
    "priority": 1
  },
  {
    "id": "t29",
    "disease_id": "d29",
    "disease_name": "鐗涢湁鑿屾瘨绱犱腑姣?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氳劚闇?淇濊倽",
        "medications": [],
        "oral_medications": [],
        "notes": "绔嬪嵆鍋滃杺闇夊彉楗叉枡銆?
      }
    ],
    "nursing_care": "绔嬪嵆鍋滃杺闇夊彉楗叉枡銆?,
    "priority": 2
  },
  {
    "id": "t30",
    "disease_id": "d30",
    "disease_name": "鐗涗腑鏆?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氱揣鎬ラ檷娓?,
        "medications": [],
        "oral_medications": [],
        "notes": "绔嬪嵆灏嗙墰杞Щ鍒伴槾鍑夊銆?
      }
    ],
    "nursing_care": "绔嬪嵆灏嗙墰杞Щ鍒伴槾鍑夊銆?,
    "priority": 1
  },
  {
    "id": "t31",
    "disease_id": "d31",
    "disease_name": "鐗涙劅鍐?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氬鐥囨不鐤?,
        "medications": [],
        "oral_medications": [],
        "notes": "鍋氬ソ淇濇俯锛屽噺灏戝簲婵€銆?
      }
    ],
    "nursing_care": "鍋氬ソ淇濇俯銆?,
    "priority": 3
  },
  {
    "id": "t32",
    "disease_id": "d32",
    "disease_name": "鐗涗究绉?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氱～閰搁晛閫氫究",
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "纭吀闀?,
            "dosage": "200-400g/澶?,
            "frequency": "鍗曟",
            "duration_days": 1,
            "notes": "娉讳笅閫氫究"
          }
        ],
        "notes": "纭吀闀侀€氫究銆?
      }
    ],
    "nursing_care": "淇濊瘉鍏呰冻楗按銆?,
    "priority": 3
  },
  {
    "id": "t33",
    "disease_id": "d33",
    "disease_name": "鐗涜儍婧冪枴",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氳タ鍜浛涓?,
        "medications": [
          {
            "medication_id": "m26",
            "medication_name": "瑗垮挭鏇夸竵",
            "dosage_per_kg": "5-10mg",
            "frequency": "姣忔棩2娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "鎶戝埗鑳冮吀鍒嗘硨"
          }
        ],
        "oral_medications": [],
        "notes": "瑗垮挭鏇夸竵鎶戝埗鑳冮吀銆?
      }
    ],
    "nursing_care": "閬垮厤楗叉枡杩囩粏銆?,
    "priority": 2
  },
  {
    "id": "t34",
    "disease_id": "d34",
    "disease_name": "鐗涗钩鎴跨値",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氬ご瀛?楸肩煶鑴傚鏁?,
        "medications": [
          {
            "medication_id": "m05",
            "medication_name": "澶村鍣诲憢",
            "dosage_per_kg": "5mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "鎺у埗鎰熸煋"
          }
        ],
        "oral_medications": [],
        "notes": "澶村娉ㄥ皠锛岄奔鐭宠剛杞啅澶栨暦銆?
      }
    ],
    "nursing_care": "淇濇寔鐗涜垗娓呮磥銆?,
    "priority": 2
  },
  {
    "id": "t35",
    "disease_id": "d35",
    "disease_name": "鐗涘瓙瀹唴鑶滅値",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氬ご瀛?瀹値鍑€鐏屾敞",
        "medications": [
          {
            "medication_id": "m05",
            "medication_name": "澶村鍣诲憢",
            "dosage_per_kg": "5mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "鎺у埗鎰熸煋"
          }
        ],
        "oral_medications": [],
        "notes": "澶村娉ㄥ皠锛屽鐐庡噣瀛愬鐏屾敞銆?
      }
    ],
    "nursing_care": "鍋氬ソ浜ф埧娑堟瘨銆?,
    "priority": 2
  },
  {
    "id": "t36",
    "disease_id": "d36",
    "disease_name": "鐗涜箘瑁?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氱敓鐗╃礌+澶栫敤",
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "鐢熺墿绱?,
            "dosage": "0.1-0.2mg/澶?,
            "frequency": "姣忔棩1娆?,
            "duration_days": 14,
            "notes": "淇冭繘韫勫３淇"
          }
        ],
        "notes": "鐢熺墿绱犲彛鏈嶃€?
      }
    ],
    "nursing_care": "淇濇寔鍦伴潰骞茬嚗銆?,
    "priority": 3
  },
  {
    "id": "t37",
    "disease_id": "d37",
    "disease_name": "鐗涘簲婵€缁煎悎寰?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氶晣闈?闄嶆俯",
        "medications": [],
        "oral_medications": [],
        "notes": "鍑忓皯搴旀縺鍥犵礌銆?
      }
    ],
    "nursing_care": "鍑忓皯搴旀縺鍥犵礌銆?,
    "priority": 1
  },
  {
    "id": "t38",
    "disease_id": "d38",
    "disease_name": "鐗涘紓椋熺櫀",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氳ˉ鍏呰惀鍏?,
        "medications": [],
        "oral_medications": [],
        "notes": "琛ュ厖钀ュ吇锛屾敼鍠勯ゲ鍏荤幆澧冦€?
      }
    ],
    "nursing_care": "鏀瑰杽楗插吇鐜銆?,
    "priority": 3
  },
  {
    "id": "t39",
    "disease_id": "d39",
    "disease_name": "鐗涙笚鍑烘€х毊鐐?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氬ご瀛?澶栫敤娑堟瘨",
        "medications": [
          {
            "medication_id": "m05",
            "medication_name": "澶村鍣诲憢",
            "dosage_per_kg": "5mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "鎺у埗鎰熸煋"
          }
        ],
        "oral_medications": [],
        "notes": "澶村娉ㄥ皠銆?
      }
    ],
    "nursing_care": "淇濇寔鐜娓呮磥銆?,
    "priority": 2
  },
  {
    "id": "t40",
    "disease_id": "d40",
    "disease_name": "鐗涘潖姝绘€ф潌鑿岀梾",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氶潚闇夌礌+娓呭垱",
        "medications": [
          {
            "medication_id": "m01",
            "medication_name": "闈掗湁绱犻捑/閽?,
            "dosage_per_kg": "6涓囧崟浣?,
            "frequency": "姣忔棩2娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "瀵瑰帉姘ц弻鏁堟灉濂?
          }
        ],
        "oral_medications": [],
        "notes": "闈掗湁绱犳敞灏?鍙屾哀姘存竻鍒涖€?
      }
    ],
    "nursing_care": "淇濇寔鐜骞茬嚗銆?,
    "priority": 2
  },
  {
    "id": "t41",
    "disease_id": "d41",
    "disease_name": "鐗涜劚鑲?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氭暣澶?娑堢値",
        "medications": [
          {
            "medication_id": "m05",
            "medication_name": "澶村鍣诲憢",
            "dosage_per_kg": "5mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 3,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "棰勯槻鎰熸煋"
          }
        ],
        "oral_medications": [],
        "notes": "鏁村鍚庤嵎鍖呯紳鍚堛€?
      }
    ],
    "nursing_care": "閬垮厤渚跨銆?,
    "priority": 2
  },
  {
    "id": "t42",
    "disease_id": "d42",
    "disease_name": "鐘婄墰姘磋偪鐥?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氱敇闇查唶+鍦板绫虫澗",
        "medications": [
          {
            "medication_id": "m10",
            "medication_name": "鍦板绫虫澗",
            "dosage_per_kg": "0.1-0.2mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 3,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "鎶楃値鎶楁按鑲?
          }
        ],
        "oral_medications": [],
        "notes": "鍦板绫虫澗鎶楁按鑲裤€?
      }
    ],
    "nursing_care": "鏂ザ鍚庨€愭笎鎹㈡枡銆?,
    "priority": 1
  },
  {
    "id": "t43",
    "disease_id": "d43",
    "disease_name": "鐗涢瓘姘忔鑿岃儉姘旂梾",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氱揣鎬ユ帓姘?,
        "medications": [],
        "oral_medications": [],
        "notes": "绱ф€ョ┛鍒烘帓姘斻€?
      }
    ],
    "nursing_care": "閬垮厤楗叉枡绐佸彉銆?,
    "priority": 1
  },
  {
    "id": "t44",
    "disease_id": "d44",
    "disease_name": "鐗涙潕姘忔潌鑿岀梾",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氶潚闇夌礌+纾鸿兒鍢у暥閽?,
        "medications": [
          {
            "medication_id": "m01",
            "medication_name": "闈掗湁绱犻捑/閽?,
            "dosage_per_kg": "6涓囧崟浣?,
            "frequency": "姣忔棩2-3娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "瀵规潕姘忔潌鑿屾晥鏋滃ソ"
          }
        ],
        "oral_medications": [],
        "notes": "闈掗湁绱犳敞灏勩€?
      }
    ],
    "nursing_care": "鐏紶锛屽姞寮烘秷姣掋€?,
    "priority": 2
  },
  {
    "id": "t45",
    "disease_id": "d45",
    "disease_name": "鐗涜悗缂╂€ч蓟鐐?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氭浛绫宠€冩槦+澶氳タ鐜礌",
        "medications": [
          {
            "medication_id": "m33",
            "medication_name": "鏇跨背鑰冩槦",
            "dosage_per_kg": "10mg",
            "frequency": "姣?8灏忔椂1娆?,
            "duration_days": 3,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "鎺у埗鎰熸煋"
          }
        ],
        "oral_medications": [],
        "notes": "鏇跨背鑰冩槦+澶氳タ鐜礌鎷屾枡銆?
      }
    ],
    "nursing_care": "鏀瑰杽閫氶銆?,
    "priority": 2
  },
  {
    "id": "t46",
    "disease_id": "d46",
    "disease_name": "鐗涙祬琛ㄦ€ц儍鐐?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氬仴鑳?鐩婄敓鑿?,
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "浜哄伐鐩?,
            "dosage": "200-400g/澶?,
            "frequency": "姣忔棩1娆?,
            "duration_days": 3,
            "notes": "鍋ヨ儍閫氫究"
          }
        ],
        "notes": "浜哄伐鐩愬仴鑳冦€?
      }
    ],
    "nursing_care": "鏀瑰杽楗插吇绠＄悊銆?,
    "priority": 3
  },
  {
    "id": "t47",
    "disease_id": "d47",
    "disease_name": "鐗涜儙琛ｄ笉涓?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氱缉瀹礌+鎶楃敓绱?,
        "medications": [
          {
            "medication_id": "m56",
            "medication_name": "缂╁绱?,
            "dosage_per_kg": "20-50鍗曚綅/澶?,
            "frequency": "姣?灏忔椂1娆★紝鏈€澶?娆?,
            "duration_days": 1,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "淇冭繘瀛愬鏀剁缉"
          }
        ],
        "oral_medications": [],
        "notes": "缂╁绱犱績杩涘瓙瀹敹缂╂帓鍑鸿儙琛ｃ€?
      }
    ],
    "nursing_care": "鍔犲己濡婂鏈熼ゲ鍏荤鐞嗐€?,
    "priority": 2
  },
  {
    "id": "t48",
    "disease_id": "d48",
    "disease_name": "姣嶇墰鏃犱钩缁煎悎寰?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氱缉瀹礌+娑堢値",
        "medications": [
          {
            "medication_id": "m56",
            "medication_name": "缂╁绱?,
            "dosage_per_kg": "20-50鍗曚綅/澶?,
            "frequency": "姣忔棩1-2娆?,
            "duration_days": 3,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "淇冭繘娉屼钩"
          }
        ],
        "oral_medications": [],
        "notes": "缂╁绱犱績杩涙硨涔炽€?
      }
    ],
    "nursing_care": "鍔犲己濡婂鏈熼ゲ鍏荤鐞嗐€?,
    "priority": 2
  },
  {
    "id": "t49",
    "disease_id": "d49",
    "disease_name": "鐗涢毦浜?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氱缉瀹礌鍔╀骇",
        "medications": [
          {
            "medication_id": "m56",
            "medication_name": "缂╁绱?,
            "dosage_per_kg": "20-50鍗曚綅/澶?,
            "frequency": "姣?0鍒嗛挓1娆★紝鏈€澶?娆?,
            "duration_days": 1,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "淇冭繘瀛愬鏀剁缉"
          }
        ],
        "oral_medications": [],
        "notes": "缂╁绱犲姪浜э紝鏃犳晥鍒欎汉宸ュ姪浜ф垨鍓栬吂浜с€?
      }
    ],
    "nursing_care": "鍔犲己濡婂鏈熼ゲ鍏荤鐞嗐€?,
    "priority": 1
  }
],\n\n  diseaseSymptoms: [
  {
    "disease_id": "d01",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d01",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d01",
    "symptom_id": "s05"
  },
  {
    "disease_id": "d01",
    "symptom_id": "s07"
  },
  {
    "disease_id": "d02",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d02",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d02",
    "symptom_id": "s05"
  },
  {
    "disease_id": "d02",
    "symptom_id": "s10"
  },
  {
    "disease_id": "d03",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d03",
    "symptom_id": "s16"
  },
  {
    "disease_id": "d03",
    "symptom_id": "s20"
  },
  {
    "disease_id": "d03",
    "symptom_id": "s27"
  },
  {
    "disease_id": "d04",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d04",
    "symptom_id": "s12"
  },
  {
    "disease_id": "d04",
    "symptom_id": "s18"
  },
  {
    "disease_id": "d04",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d05",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d05",
    "symptom_id": "s16"
  },
  {
    "disease_id": "d05",
    "symptom_id": "s12"
  },
  {
    "disease_id": "d05",
    "symptom_id": "s07"
  },
  {
    "disease_id": "d06",
    "symptom_id": "s08"
  },
  {
    "disease_id": "d06",
    "symptom_id": "s10"
  },
  {
    "disease_id": "d06",
    "symptom_id": "s05"
  },
  {
    "disease_id": "d06",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d07",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d07",
    "symptom_id": "s12"
  },
  {
    "disease_id": "d07",
    "symptom_id": "s18"
  },
  {
    "disease_id": "d07",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d08",
    "symptom_id": "s11"
  },
  {
    "disease_id": "d08",
    "symptom_id": "s12"
  },
  {
    "disease_id": "d08",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d08",
    "symptom_id": "s30"
  },
  {
    "disease_id": "d09",
    "symptom_id": "s08"
  },
  {
    "disease_id": "d09",
    "symptom_id": "s05"
  },
  {
    "disease_id": "d09",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d10",
    "symptom_id": "s07"
  },
  {
    "disease_id": "d10",
    "symptom_id": "s06"
  },
  {
    "disease_id": "d10",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d11",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d11",
    "symptom_id": "s15"
  },
  {
    "disease_id": "d11",
    "symptom_id": "s16"
  },
  {
    "disease_id": "d11",
    "symptom_id": "s20"
  },
  {
    "disease_id": "d12",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d12",
    "symptom_id": "s12"
  },
  {
    "disease_id": "d12",
    "symptom_id": "s46"
  },
  {
    "disease_id": "d12",
    "symptom_id": "s45"
  },
  {
    "disease_id": "d13",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d13",
    "symptom_id": "s15"
  },
  {
    "disease_id": "d13",
    "symptom_id": "s18"
  },
  {
    "disease_id": "d13",
    "symptom_id": "s23"
  },
  {
    "disease_id": "d14",
    "symptom_id": "s07"
  },
  {
    "disease_id": "d14",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d14",
    "symptom_id": "s18"
  },
  {
    "disease_id": "d14",
    "symptom_id": "s31"
  },
  {
    "disease_id": "d15",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d15",
    "symptom_id": "s22"
  },
  {
    "disease_id": "d15",
    "symptom_id": "s24"
  },
  {
    "disease_id": "d15",
    "symptom_id": "s33"
  },
  {
    "disease_id": "d16",
    "symptom_id": "s33"
  },
  {
    "disease_id": "d16",
    "symptom_id": "s34"
  },
  {
    "disease_id": "d16",
    "symptom_id": "s35"
  },
  {
    "disease_id": "d17",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d17",
    "symptom_id": "s33"
  },
  {
    "disease_id": "d17",
    "symptom_id": "s34"
  },
  {
    "disease_id": "d18",
    "symptom_id": "s08"
  },
  {
    "disease_id": "d18",
    "symptom_id": "s10"
  },
  {
    "disease_id": "d18",
    "symptom_id": "s05"
  },
  {
    "disease_id": "d19",
    "symptom_id": "s09"
  },
  {
    "disease_id": "d19",
    "symptom_id": "s07"
  },
  {
    "disease_id": "d19",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d20",
    "symptom_id": "s07"
  },
  {
    "disease_id": "d20",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d20",
    "symptom_id": "s31"
  },
  {
    "disease_id": "d21",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d21",
    "symptom_id": "s31"
  },
  {
    "disease_id": "d21",
    "symptom_id": "s32"
  },
  {
    "disease_id": "d21",
    "symptom_id": "s15"
  },
  {
    "disease_id": "d22",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d22",
    "symptom_id": "s45"
  },
  {
    "disease_id": "d22",
    "symptom_id": "s18"
  },
  {
    "disease_id": "d23",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d23",
    "symptom_id": "s30"
  },
  {
    "disease_id": "d23",
    "symptom_id": "s11"
  },
  {
    "disease_id": "d24",
    "symptom_id": "s44"
  },
  {
    "disease_id": "d24",
    "symptom_id": "s42"
  },
  {
    "disease_id": "d24",
    "symptom_id": "s43"
  },
  {
    "disease_id": "d24",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d25",
    "symptom_id": "s31"
  },
  {
    "disease_id": "d25",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d25",
    "symptom_id": "s45"
  },
  {
    "disease_id": "d26",
    "symptom_id": "s30"
  },
  {
    "disease_id": "d26",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d27",
    "symptom_id": "s21"
  },
  {
    "disease_id": "d27",
    "symptom_id": "s45"
  },
  {
    "disease_id": "d27",
    "symptom_id": "s22"
  },
  {
    "disease_id": "d28",
    "symptom_id": "s47"
  },
  {
    "disease_id": "d28",
    "symptom_id": "s22"
  },
  {
    "disease_id": "d28",
    "symptom_id": "s40"
  },
  {
    "disease_id": "d29",
    "symptom_id": "s06"
  },
  {
    "disease_id": "d29",
    "symptom_id": "s32"
  },
  {
    "disease_id": "d29",
    "symptom_id": "s33"
  },
  {
    "disease_id": "d30",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d30",
    "symptom_id": "s45"
  },
  {
    "disease_id": "d30",
    "symptom_id": "s22"
  },
  {
    "disease_id": "d31",
    "symptom_id": "s11"
  },
  {
    "disease_id": "d31",
    "symptom_id": "s13"
  },
  {
    "disease_id": "d31",
    "symptom_id": "s14"
  },
  {
    "disease_id": "d32",
    "symptom_id": "s28"
  },
  {
    "disease_id": "d32",
    "symptom_id": "s06"
  },
  {
    "disease_id": "d33",
    "symptom_id": "s09"
  },
  {
    "disease_id": "d33",
    "symptom_id": "s10"
  },
  {
    "disease_id": "d33",
    "symptom_id": "s31"
  },
  {
    "disease_id": "d34",
    "symptom_id": "s36"
  },
  {
    "disease_id": "d34",
    "symptom_id": "s02"
  },
  {
    "disease_id": "d35",
    "symptom_id": "s37"
  },
  {
    "disease_id": "d35",
    "symptom_id": "s02"
  },
  {
    "disease_id": "d36",
    "symptom_id": "s20"
  },
  {
    "disease_id": "d36",
    "symptom_id": "s21"
  },
  {
    "disease_id": "d37",
    "symptom_id": "s22"
  },
  {
    "disease_id": "d37",
    "symptom_id": "s45"
  },
  {
    "disease_id": "d37",
    "symptom_id": "s18"
  },
  {
    "disease_id": "d38",
    "symptom_id": "s06"
  },
  {
    "disease_id": "d38",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d39",
    "symptom_id": "s42"
  },
  {
    "disease_id": "d39",
    "symptom_id": "s44"
  },
  {
    "disease_id": "d39",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d40",
    "symptom_id": "s17"
  },
  {
    "disease_id": "d40",
    "symptom_id": "s20"
  },
  {
    "disease_id": "d40",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d41",
    "symptom_id": "s51"
  },
  {
    "disease_id": "d41",
    "symptom_id": "s28"
  },
  {
    "disease_id": "d42",
    "symptom_id": "s52"
  },
  {
    "disease_id": "d42",
    "symptom_id": "s53"
  },
  {
    "disease_id": "d42",
    "symptom_id": "s40"
  },
  {
    "disease_id": "d43",
    "symptom_id": "s49"
  },
  {
    "disease_id": "d43",
    "symptom_id": "s45"
  },
  {
    "disease_id": "d44",
    "symptom_id": "s23"
  },
  {
    "disease_id": "d44",
    "symptom_id": "s40"
  },
  {
    "disease_id": "d45",
    "symptom_id": "s14"
  },
  {
    "disease_id": "d45",
    "symptom_id": "s13"
  },
  {
    "disease_id": "d46",
    "symptom_id": "s06"
  },
  {
    "disease_id": "d46",
    "symptom_id": "s10"
  },
  {
    "disease_id": "d47",
    "symptom_id": "s62"
  },
  {
    "disease_id": "d47",
    "symptom_id": "s02"
  },
  {
    "disease_id": "d48",
    "symptom_id": "s36"
  },
  {
    "disease_id": "d48",
    "symptom_id": "s60"
  },
  {
    "disease_id": "d49",
    "symptom_id": "s59"
  },
  {
    "disease_id": "d49",
    "symptom_id": "s62"
  }
]
}

module.exports = data
