// data/data.js - 鎵€鏈夋暟鎹?
const data = {
  diseases: [
  {
    "id": "d01",
    "name": "鐗涘彛韫勭柅",
    "alias": "鍙ｇ柈",
    "description": "鐗涘彛韫勭柅鏄敱鍙ｈ箘鐤梾姣掑紩璧风殑涓€绉嶆€ユ€с€佺儹鎬с€侀珮搴︽帴瑙︽€т紶鏌撶梾銆?,
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "2-7澶?,
    "mortality_rate": "鎴愬勾鐗涜緝浣庯紝鐘婄墰鍙揪50%浠ヤ笂"
  },
  {
    "id": "d02",
    "name": "鐗涚粨鏍哥梾",
    "alias": "鐥ㄧ梾",
    "description": "鐗涚粨鏍哥梾鏄敱缁撴牳鍒嗘灊鏉嗚弻寮曡捣鐨勪竴绉嶆參鎬ф秷鑰楁€т紶鏌撶梾銆?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "鏁板懆鑷虫暟鏈?,
    "mortality_rate": "鎱㈡€ф秷鑰楄嚧姝?
  },
  {
    "id": "d03",
    "name": "鐗涘竷姘忔潌鑿岀梾",
    "alias": "甯冪梾",
    "description": "鐗涘竷姘忔潌鑿岀梾鏄敱甯冩皬鏉嗚弻寮曡捣鐨勪竴绉嶄汉鐣滃叡鎮ｄ紶鏌撶梾銆?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "2-4鍛?,
    "mortality_rate": "杈冧綆锛屼絾寮曡捣娴佷骇"
  },
  {
    "id": "d04",
    "name": "鐗涜偤鐤?,
    "alias": "鐗涗紶鏌撴€ц兏鑶滆偤鐐?,
    "description": "鐗涜偤鐤槸鐢变笣鐘舵敮鍘熶綋涓濈姸浜氱寮曡捣鐨勪竴绉嶉珮搴︽帴瑙︽€у懠鍚搁亾浼犳煋鐥呫€?,
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "2-4鍛?,
    "mortality_rate": "鎬ユ€у瀷鍙揪50%浠ヤ笂"
  },
  {
    "id": "d05",
    "name": "鐗涙祦琛岀儹",
    "alias": "涓夋棩鐑?,
    "description": "鐗涙祦琛岀儹鏄敱鐗涙祦琛岀儹鐥呮瘨寮曡捣鐨勪竴绉嶆€ユ€х儹鎬т紶鏌撶梾銆?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "2-3澶?,
    "mortality_rate": "杈冧綆"
  },
  {
    "id": "d06",
    "name": "鐗涚梾姣掓€ц吂娉?,
    "alias": "BVD",
    "description": "鐗涚梾姣掓€ц吂娉绘槸鐢辩墰鐥呮瘨鎬ц吂娉荤梾姣掑紩璧风殑涓€绉嶆€ユ€т紶鏌撶梾銆?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "5-10澶?,
    "mortality_rate": "鐘婄墰杈冮珮"
  },
  {
    "id": "d07",
    "name": "鐗涗紶鏌撴€ч蓟姘旂鐐?,
    "alias": "IBR",
    "description": "鐗涗紶鏌撴€ч蓟姘旂鐐庢槸鐢辩墰鐤辩柟鐥呮瘨寮曡捣鐨勪竴绉嶆€ユ€т紶鏌撶梾銆?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "3-7澶?,
    "mortality_rate": "杈冧綆"
  },
  {
    "id": "d08",
    "name": "鐗涘反姘忔潌鑿岀梾",
    "alias": "鐗涘嚭琛€鎬ц触琛€鐥?,
    "description": "鐗涘反姘忔潌鑿岀梾鏄敱澶氭潃鎬у反姘忔潌鑿屽紩璧风殑涓€绉嶆€ユ€т紶鏌撶梾銆?,
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "1-3澶?,
    "mortality_rate": "鎬ユ€у瀷鍙揪80%浠ヤ笂"
  },
  {
    "id": "d09",
    "name": "鐘婄墰澶ц偁鏉嗚弻鐥?,
    "alias": "鐘婄墰鐧界棦",
    "description": "鐘婄墰澶ц偁鏉嗚弻鐥呮槸鐢辫嚧鐥呮€уぇ鑲犳潌鑿屽紩璧风殑鏂扮敓鐘婄墰鎬ユ€ц偁閬撲紶鏌撶梾銆?,
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "鏁板皬鏃惰嚦1-2澶?,
    "mortality_rate": "鍙揪50%浠ヤ笂"
  },
  {
    "id": "d10",
    "name": "鐗涘壇缁撴牳鐥?,
    "alias": "鍓粨鏍告€ц偁鐐?,
    "description": "鐗涘壇缁撴牳鐥呮槸鐢卞壇缁撴牳鍒嗘灊鏉嗚弻寮曡捣鐨勪竴绉嶆參鎬ф秷鑰楁€ц偁閬撲紶鏌撶梾銆?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "鏁版湀鑷虫暟骞?,
    "mortality_rate": "鎱㈡€ф秷鑰楄嚧姝?
  },
  {
    "id": "d11",
    "name": "鐗涚偔鐤?,
    "alias": "鐐柦",
    "description": "鐗涚偔鐤芥槸鐢辩偔鐤芥潌鑿屽紩璧风殑涓€绉嶆€ユ€с€佺儹鎬с€佽触琛€鎬т紶鏌撶梾銆?,
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "1-5澶?,
    "mortality_rate": "鎬ユ€у瀷鍙揪100%"
  },
  {
    "id": "d12",
    "name": "鐗涙皵鑲跨柦",
    "alias": "榛戣吙鐥?,
    "description": "鐗涙皵鑲跨柦鏄敱姘旇偪鐤芥鑿屽紩璧风殑涓€绉嶆€ユ€с€佺儹鎬с€佽触琛€鎬т紶鏌撶梾銆?,
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "3-5澶?,
    "mortality_rate": "鎬ユ€у瀷鍙揪80%浠ヤ笂"
  },
  {
    "id": "d13",
    "name": "鐗涙伓鎬ф按鑲?,
    "alias": "鎭舵€ф按鑲?,
    "description": "鐗涙伓鎬ф按鑲挎槸鐢辫厫璐ユ鑿屽紩璧风殑涓€绉嶆€ユ€с€佸垱浼ゆ€т紶鏌撶梾銆?,
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "1-3澶?,
    "mortality_rate": "杈冮珮"
  },
  {
    "id": "d14",
    "name": "鐗涚牬浼ら",
    "alias": "閿佸彛椋?,
    "description": "鐗涚牬浼ら鏄敱鐮翠激椋庢鑿屽紩璧风殑涓€绉嶆€ユ€т腑姣掓€т紶鏌撶梾銆?,
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "1-2鍛?,
    "mortality_rate": "杈冮珮"
  },
  {
    "id": "d15",
    "name": "鐗涚媯鐘梾",
    "alias": "鐤墰鐥?,
    "description": "鐗涚媯鐘梾鏄敱鐙傜姮鐥呯梾姣掑紩璧风殑涓€绉嶆€ユ€т紶鏌撶梾銆?,
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "2-8鍛?,
    "mortality_rate": "100%"
  },
  {
    "id": "d16",
    "name": "鐗涗紶鏌撴€ц鑶滅粨鑶滅値",
    "alias": "绾㈢溂鐥?,
    "description": "鐗涗紶鏌撴€ц鑶滅粨鑶滅値鏄敱鐗涙懇鎷夊厠鑿屽紩璧风殑涓€绉嶆€ユ€т紶鏌撶梾銆?,
    "severity": "low",
    "is_contagious": true,
    "incubation_period": "3-7澶?,
    "mortality_rate": "浣?
  },
  {
    "id": "d17",
    "name": "鐗涙斁绾胯弻鐥?,
    "alias": "澶ч鐥?,
    "description": "鐗涙斁绾胯弻鐥呮槸鐢辩墰鏀剧嚎鑿屽紩璧风殑涓€绉嶆參鎬т紶鏌撶梾銆?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "鏁板懆",
    "mortality_rate": "浣?
  },
  {
    "id": "d18",
    "name": "鐗涜。鍘熶綋鐥?,
    "alias": "琛ｅ師浣撴劅鏌?,
    "description": "鐗涜。鍘熶綋鐥呮槸鐢辫。鍘熶綋寮曡捣鐨勪竴绉嶄紶鏌撶梾銆?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "1-3鍛?,
    "mortality_rate": "杈冧綆"
  },
  {
    "id": "d19",
    "name": "鐗涚悆铏梾",
    "alias": "鐞冭櫕鎰熸煋",
    "description": "鐗涚悆铏梾鏄敱鐞冭櫕寮曡捣鐨勪竴绉嶈偁閬撳瘎鐢熻櫕鐥呫€?,
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "1-2鍛?,
    "mortality_rate": "鐘婄墰杈冮珮"
  },
  {
    "id": "d20",
    "name": "鐗涜倽鐗囧惛铏梾",
    "alias": "鑲濊洯鐥?,
    "description": "鐗涜倽鐗囧惛铏梾鏄敱鑲濈墖鍚歌櫕寮曡捣鐨勪竴绉嶅瘎鐢熻櫕鐥呫€?,
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "6-12鍛?,
    "mortality_rate": "鎱㈡€ф秷鑰楄嚧姝?
  },
  {
    "id": "d21",
    "name": "鐗涚沪铏梾",
    "alias": "缁﹁櫕鎰熸煋",
    "description": "鐗涚沪铏梾鏄敱缁﹁櫕寮曡捣鐨勪竴绉嶈偁閬撳瘎鐢熻櫕鐥呫€?,
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "4-8鍛?,
    "mortality_rate": "浣?
  },
  {
    "id": "d22",
    "name": "鐗涜灗鐥?,
    "alias": "鐤ョ櫍",
    "description": "鐗涜灗鐥呮槸鐢辫灗铏紩璧风殑涓€绉嶄綋澶栧瘎鐢熻櫕鐥呫€?,
    "severity": "low",
    "is_contagious": true,
    "incubation_period": "2-4鍛?,
    "mortality_rate": "浣?
  },
  {
    "id": "d23",
    "name": "鐗涘墠鑳冨紱缂?,
    "alias": "娑堝寲涓嶈壇",
    "description": "鐗涘墠鑳冨紱缂撴槸鐢变簬楗插吇绠＄悊涓嶅綋寮曡捣鐨勪竴绉嶆秷鍖栫郴缁熺柧鐥呫€?,
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "鏁板ぉ",
    "mortality_rate": "浣?
  },
  {
    "id": "d24",
    "name": "鐗涚槫鑳冭噷姘?,
    "alias": "鑳€姘?,
    "description": "鐗涚槫鑳冭噷姘旀槸鐢变簬閲囬鏄撳彂閰甸ゲ鏂欏紩璧风殑涓€绉嶆€ユ€х柧鐥呫€?,
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "鏁板皬鏃?,
    "mortality_rate": "鎬ユ€у瀷杈冮珮"
  },
  {
    "id": "d25",
    "name": "鐗涚槫鑳冮吀涓瘨",
    "alias": "閰镐腑姣?,
    "description": "鐗涚槫鑳冮吀涓瘨鏄敱浜庨噰椋熻繃澶氱簿鏂欏紩璧风殑涓€绉嶄唬璋㈡€х柧鐥呫€?,
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "鏁板皬鏃?,
    "mortality_rate": "杈冮珮"
  },
  {
    "id": "d26",
    "name": "鐗涢叜鐥?,
    "alias": "閰鐥?,
    "description": "鐗涢叜鐥呮槸鐢变簬鑳介噺浠ｈ阿闅滅寮曡捣鐨勪竴绉嶈惀鍏讳唬璋㈢梾銆?,
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "鏁板ぉ",
    "mortality_rate": "杈冧綆"
  },
  {
    "id": "d27",
    "name": "鐗涚敓浜х槴鐥?,
    "alias": "浜у悗鐦棯",
    "description": "鐗涚敓浜х槴鐥槸鐢变簬浜у悗浣庤閽欏紩璧风殑涓€绉嶄唬璋㈡€х柧鐥呫€?,
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "浜у悗1-3澶?,
    "mortality_rate": "杈冮珮"
  },
  {
    "id": "d28",
    "name": "鐗涘瓙瀹唴鑶滅値",
    "alias": "瀛愬鐐?,
    "description": "鐗涘瓙瀹唴鑶滅値鏄敱浜庣粏鑿屾劅鏌撳紩璧风殑涓€绉嶇敓娈栫郴缁熺柧鐥呫€?,
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "浜у悗3-5澶?,
    "mortality_rate": "浣?
  },
  {
    "id": "d29",
    "name": "鐗涗钩鎴跨値",
    "alias": "涔宠吅鐐?,
    "description": "鐗涗钩鎴跨値鏄敱浜庣粏鑿屾劅鏌撳紩璧风殑涓€绉嶄钩鎴跨柧鐥呫€?,
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "1-3澶?,
    "mortality_rate": "浣?
  },
  {
    "id": "d30",
    "name": "鐗涜儙琛ｄ笉涓?,
    "alias": "鑳庣洏婊炵暀",
    "description": "鐗涜儙琛ｄ笉涓嬫槸姣嶇墰浜у悗鑳庤啘涓嶈兘姝ｅ父鎺掑嚭鐨勪竴绉嶄骇绉戠柧鐥呫€?,
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "浜у悗鏁板皬鏃?,
    "mortality_rate": "浣?
  },
  {
    "id": "d31",
    "name": "鐗涢毦浜?,
    "alias": "浜у姏鎬ч毦浜?,
    "description": "鐗涢毦浜ф槸姣嶇墰鍒嗗ī杩囩▼涓儙鍎夸笉鑳芥甯镐骇鍑虹殑涓€绉嶄骇绉戠柧鐥呫€?,
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "鍒嗗ī鏃?,
    "mortality_rate": "杈冮珮"
  },
  {
    "id": "d32",
    "name": "鐗涚淮鐢熺礌A缂轰箯鐥?,
    "alias": "澶滅洸鐥?,
    "description": "鐗涚淮鐢熺礌A缂轰箯鐥囨槸鐢变簬缁寸敓绱燗缂轰箯寮曡捣鐨勪竴绉嶈惀鍏讳唬璋㈢梾銆?,
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "鏁板懆",
    "mortality_rate": "浣?
  },
  {
    "id": "d33",
    "name": "鐗涚櫧鑲岀梾",
    "alias": "纭掔己涔忕棁",
    "description": "鐗涚櫧鑲岀梾鏄敱浜庣鍏冪礌缂轰箯寮曡捣鐨勪竴绉嶈惀鍏讳唬璋㈢梾銆?,
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "鏁板懆",
    "mortality_rate": "杈冮珮"
  },
  {
    "id": "d34",
    "name": "鐗涗綕鍋荤梾",
    "alias": "杞鐥?,
    "description": "鐗涗綕鍋荤梾鏄敱浜庨挋纾蜂唬璋㈤殰纰嶅紩璧风殑涓€绉嶈惀鍏讳唬璋㈢梾銆?,
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "鏁板懆",
    "mortality_rate": "浣?
  },
  {
    "id": "d35",
    "name": "鐗涘紓椋熺櫀",
    "alias": "寮傞鐥?,
    "description": "鐗涘紓椋熺櫀鏄敱浜庤惀鍏荤己涔忔垨绠＄悊涓嶅綋寮曡捣鐨勪竴绉嶈涓哄紓甯搞€?,
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "鏁板ぉ",
    "mortality_rate": "浣?
  },
  {
    "id": "d36",
    "name": "鐗涜箘鍙剁値",
    "alias": "韫勭梾",
    "description": "鐗涜箘鍙剁値鏄敱浜庡绉嶅洜绱犲紩璧风殑涓€绉嶈箘閮ㄧ柧鐥呫€?,
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "鏁板ぉ",
    "mortality_rate": "浣?
  },
  {
    "id": "d37",
    "name": "鐗涜厫韫勭梾",
    "alias": "韫勫弶鑵愮儌",
    "description": "鐗涜厫韫勭梾鏄敱浜庣粏鑿屾劅鏌撳紩璧风殑涓€绉嶈箘閮ㄧ柧鐥呫€?,
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "鏁板ぉ",
    "mortality_rate": "浣?
  },
  {
    "id": "d38",
    "name": "鐗涙劅鍐?,
    "alias": "涓婂懠鍚搁亾鎰熸煋",
    "description": "鐗涙劅鍐掓槸鐢变簬鍙楀瘨寮曡捣鐨勪竴绉嶄笂鍛煎惛閬撶柧鐥呫€?,
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "1-3澶?,
    "mortality_rate": "浣?
  },
  {
    "id": "d39",
    "name": "鐗涜偤鐐?,
    "alias": "鏀皵绠¤偤鐐?,
    "description": "鐗涜偤鐐庢槸鐢变簬缁嗚弻鎴栫梾姣掓劅鏌撳紩璧风殑涓€绉嶅懠鍚搁亾鐤剧梾銆?,
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "3-7澶?,
    "mortality_rate": "杈冮珮"
  },
  {
    "id": "d40",
    "name": "鐗涗腑鏆?,
    "alias": "鐑皠鐥?,
    "description": "鐗涗腑鏆戞槸鐢变簬鐜娓╁害杩囬珮寮曡捣鐨勪竴绉嶆€ユ€х儹搴旀縺鐤剧梾銆?,
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "鏁板垎閽熻嚦鏁板皬鏃?,
    "mortality_rate": "杈冮珮"
  }
],
  
  symptoms: [
  {
    "id": "s01",
    "name": "楂樼儳40鈩冧互涓?,
    "category": "temperature"
  },
  {
    "id": "s02",
    "name": "浣庣儳38.5-40鈩?,
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
    "name": "涔虫埧鑲胯儉",
    "category": "reproductive"
  },
  {
    "id": "s36",
    "name": "瀛愬鐐?,
    "category": "reproductive"
  },
  {
    "id": "s37",
    "name": "鏃犱钩",
    "category": "reproductive"
  },
  {
    "id": "s38",
    "name": "绁炵粡鐥囩姸",
    "category": "neurological"
  },
  {
    "id": "s39",
    "name": "鍏辨祹澶辫皟",
    "category": "neurological"
  },
  {
    "id": "s40",
    "name": "鐦棯",
    "category": "locomotor"
  },
  {
    "id": "s41",
    "name": "鐨偆缁撶梻",
    "category": "skin"
  },
  {
    "id": "s42",
    "name": "鑴辨瘺",
    "category": "skin"
  },
  {
    "id": "s43",
    "name": "楠氱棐",
    "category": "skin"
  },
  {
    "id": "s44",
    "name": "鍛煎惛鍥伴毦",
    "category": "respiratory"
  },
  {
    "id": "s45",
    "name": "鐪煎垎娉岀墿澧炲",
    "category": "eye"
  },
  {
    "id": "s46",
    "name": "鍙ｈ厰婧冪枴",
    "category": "digestive"
  },
  {
    "id": "s47",
    "name": "韫勯儴婧冪枴",
    "category": "locomotor"
  },
  {
    "id": "s48",
    "name": "涔虫埧纭粨",
    "category": "reproductive"
  },
  {
    "id": "s49",
    "name": "鎭惰嚟鍒嗘硨鐗?,
    "category": "reproductive"
  },
  {
    "id": "s50",
    "name": "鐦よ儍鑷屾皵",
    "category": "digestive"
  },
  {
    "id": "s51",
    "name": "鐦よ儍锠曞姩鍑忓急",
    "category": "digestive"
  },
  {
    "id": "s52",
    "name": "纾ㄧ墮",
    "category": "neurological"
  },
  {
    "id": "s53",
    "name": "鍛诲悷",
    "category": "general"
  },
  {
    "id": "s54",
    "name": "寮撹儗",
    "category": "locomotor"
  },
  {
    "id": "s55",
    "name": "鍔矗",
    "category": "reproductive"
  },
  {
    "id": "s56",
    "name": "绐佺劧姝讳骸",
    "category": "general"
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
    "dosage": "鐘婄墰1-2g/澶?,
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
    "dosage": "0.2mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m20",
    "name": "浼婄淮鑿岀礌",
    "type": "椹辫櫕鑽?,
    "dosage": "0.2mg/kg浣撻噸",
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
    "dosage": "2-4ml/澶?,
    "route": "娉ㄥ皠"
  },
  {
    "id": "m23",
    "name": "浜氱閰搁挔缁寸敓绱燛",
    "type": "寰噺鍏冪礌",
    "dosage": "2-4ml/澶?,
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
    "dosage": "200-400g/澶?,
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
    "dosage": "2-4ml/澶?,
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
    "dosage": "2ml/澶?,
    "route": "娉ㄥ皠"
  },
  {
    "id": "m35",
    "name": "鏉ㄦ爲鑺卞彛鏈嶆恫",
    "type": "涓嵂",
    "dosage": "5-10ml/澶?,
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
    "name": "闃胯嫰杈惧攽",
    "type": "椹辫櫕鑽?,
    "dosage": "5-10mg/kg浣撻噸",
    "route": "鍙ｆ湇"
  },
  {
    "id": "m44",
    "name": "楸艰倽娌?,
    "type": "缁寸敓绱?,
    "dosage": "10-20ml/澶?,
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
    "name": "浜哄伐鐩?,
    "type": "鍋ヨ儍鑽?,
    "dosage": "200-400g/澶?,
    "route": "鍙ｆ湇"
  },
  {
    "id": "m47",
    "name": "纰抽吀姘㈤挔",
    "type": "鍒堕吀鑽?,
    "dosage": "20-50g/澶?,
    "route": "鍙ｆ湇"
  },
  {
    "id": "m48",
    "name": "楸肩煶鑴傝蒋鑶?,
    "type": "澶栫敤鑽?,
    "dosage": "閫傞噺",
    "route": "澶栫敤"
  },
  {
    "id": "m49",
    "name": "瀹値娓?,
    "type": "娑堟瘨鑽?,
    "dosage": "200ml",
    "route": "瀛愬鐏屾敞"
  },
  {
    "id": "m50",
    "name": "姘笝鍡?,
    "type": "闀囬潤鑽?,
    "dosage": "1-2mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m51",
    "name": "楂橀敯閰搁捑",
    "type": "娑堟瘨鑽?,
    "dosage": "0.1%婧舵恫",
    "route": "澶栫敤"
  },
  {
    "id": "m52",
    "name": "姘ㄨ媱瑗挎灄",
    "type": "鎶楃敓绱?,
    "dosage": "10-20mg/kg浣撻噸",
    "route": "娉ㄥ皠/鍙ｆ湇"
  },
  {
    "id": "m53",
    "name": "澶村鍠硅偀",
    "type": "鎶楃敓绱?,
    "dosage": "2-3mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m54",
    "name": "娉颁箰鑿岀礌",
    "type": "鎶楃敓绱?,
    "dosage": "5-10mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m55",
    "name": "鏋楀彲闇夌礌",
    "type": "鎶楃敓绱?,
    "dosage": "10mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m56",
    "name": "缂╁绱?,
    "type": "婵€绱?,
    "dosage": "20-50鍗曚綅/澶?,
    "route": "娉ㄥ皠"
  },
  {
    "id": "m57",
    "name": "姘墠鍒楃儻閱?,
    "type": "婵€绱?,
    "dosage": "0.2-0.4mg/澶?,
    "route": "娉ㄥ皠"
  },
  {
    "id": "m58",
    "name": "鑻敳閰搁泴浜岄唶",
    "type": "婵€绱?,
    "dosage": "2-4mg/澶?,
    "route": "娉ㄥ皠"
  },
  {
    "id": "m59",
    "name": "榛勪綋閰?,
    "type": "婵€绱?,
    "dosage": "50-100mg/澶?,
    "route": "娉ㄥ皠"
  },
  {
    "id": "m60",
    "name": "姝㈣鏁?,
    "type": "姝㈣鑽?,
    "dosage": "4-8ml/澶?,
    "route": "娉ㄥ皠"
  },
  {
    "id": "m61",
    "name": "鐩婃瘝鐢熷寲鏁?,
    "type": "涓嵂",
    "dosage": "鎷屾枡",
    "route": "鎷屾枡"
  },
  {
    "id": "m62",
    "name": "杩囩～閰告阿閽?,
    "type": "娑堟瘨鑽?,
    "dosage": "1:200绋€閲?,
    "route": "澶栫敤"
  },
  {
    "id": "m63",
    "name": "鎴婁簩閱?,
    "type": "娑堟瘨鑽?,
    "dosage": "1:200-1:500绋€閲?,
    "route": "澶栫敤"
  },
  {
    "id": "m64",
    "name": "鑱氱淮閰",
    "type": "娑堟瘨鑽?,
    "dosage": "1:500绋€閲?,
    "route": "澶栫敤"
  },
  {
    "id": "m65",
    "name": "鐢佃В澶氱淮",
    "type": "钀ュ吇琛ュ厖",
    "dosage": "鎷屾枡/楗按",
    "route": "鎷屾枡/楗按"
  },
  {
    "id": "m66",
    "name": "闃挎墭鍝?,
    "type": "瑙ｆ瘨鑽?,
    "dosage": "0.01-0.02mg/kg浣撻噸",
    "route": "娉ㄥ皠"
  },
  {
    "id": "m67",
    "name": "纭吀闀?,
    "type": "娉昏嵂",
    "dosage": "200-400g/澶?,
    "route": "鍙ｆ湇"
  },
  {
    "id": "m68",
    "name": "娑蹭綋鐭宠湣",
    "type": "娉昏嵂",
    "dosage": "500-1000ml/澶?,
    "route": "鍙ｆ湇"
  },
  {
    "id": "m69",
    "name": "姘寲閽?,
    "type": "琛ラ挋鑽?,
    "dosage": "5-10g/澶?,
    "route": "娉ㄥ皠"
  },
  {
    "id": "m70",
    "name": "钁¤悇绯栭吀閽?,
    "type": "琛ラ挋鑽?,
    "dosage": "10-20g/澶?,
    "route": "娉ㄥ皠"
  }
]
}

  treatments: [
  {
    "id": "t01",
    "disease_id": "d01",
    "disease_name": "鐗涘彛韫勭柅",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氭姉鎰熸煋+瀵圭棁娌荤枟",
        "medications": [
          {
            "medication_id": "m05",
            "medication_name": "澶村鍣诲憢",
            "dosage_per_kg": "5mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "鎺у埗缁у彂鎰熸煋"
          },
          {
            "medication_id": "m09",
            "medication_name": "姘熷凹杈涜憽鐢茶兒",
            "dosage_per_kg": "2mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 3,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "閫€鐑ч晣鐥?
          }
        ],
        "oral_medications": [
          {
            "medication_name": "鏉块潚棰楃矑",
            "dosage": "100g鎷屾枡200鏂?,
            "frequency": "鎸佺画",
            "duration_days": 7,
            "notes": "娓呯儹瑙ｆ瘨"
          }
        ],
        "notes": "鍙ｈ厰鐢?.1%楂橀敯閰搁捑鍐叉礂锛岃箘閮ㄧ敤纰樼敇娌规秱鎶广€?
      }
    ],
    "nursing_care": "淇濇寔鍦堣垗骞茬嚗娓呮磥锛屾彁渚涜蒋璐ㄩゲ鏂欏拰娓呮磥楗按銆?,
    "priority": 1
  },
  {
    "id": "t02",
    "disease_id": "d02",
    "disease_name": "鐗涚粨鏍哥梾",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氭棤鐗规晥娌荤枟",
        "medications": [],
        "oral_medications": [],
        "notes": "缁撴牳鐥呮棤鐗规晥娌荤枟锛屽彂鐜板悗绔嬪嵆涓婃姤锛屾墤鏉€鏃犲鍖栧鐞嗐€?
      }
    ],
    "nursing_care": "涓ユ牸闅旂锛岀瓑寰呭畼鏂瑰鐞嗐€?,
    "priority": 1
  },
  {
    "id": "t03",
    "disease_id": "d03",
    "disease_name": "鐗涘竷姘忔潌鑿岀梾",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氭棤鐗规晥娌荤枟",
        "medications": [],
        "oral_medications": [],
        "notes": "甯冩皬鏉嗚弻鐥呮棤鐗规晥娌荤枟锛屽彂鐜板悗绔嬪嵆涓婃姤锛屾墤鏉€鏃犲鍖栧鐞嗐€?
      }
    ],
    "nursing_care": "涓ユ牸闅旂锛岀瓑寰呭畼鏂瑰鐞嗐€?,
    "priority": 1
  },
  {
    "id": "t04",
    "disease_id": "d04",
    "disease_name": "鐗涜偤鐤?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氭嘲涔愯弻绱?姘熷凹杈?,
        "medications": [
          {
            "medication_id": "m54",
            "medication_name": "娉颁箰鑿岀礌",
            "dosage_per_kg": "10mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "鎺у埗鏀師浣撴劅鏌?
          },
          {
            "medication_id": "m09",
            "medication_name": "姘熷凹杈涜憽鐢茶兒",
            "dosage_per_kg": "2mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 3,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "閫€鐑ф姉鐐?
          }
        ],
        "oral_medications": [
          {
            "medication_name": "楹绘潖鐭崇敇鏁?,
            "dosage": "100g鎷屾枡200鏂?,
            "frequency": "鎸佺画",
            "duration_days": 7,
            "notes": "姝㈠挸骞冲枠"
          }
        ],
        "notes": "娉颁箰鑿岀礌瀵规敮鍘熶綋鏁堟灉濂姐€?
      }
    ],
    "nursing_care": "鏀瑰杽閫氶锛岄檷浣庨ゲ鍏诲瘑搴︺€?,
    "priority": 1
  },
  {
    "id": "t05",
    "disease_id": "d05",
    "disease_name": "鐗涙祦琛岀儹",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氬鐥囨不鐤?,
        "medications": [
          {
            "medication_id": "m09",
            "medication_name": "姘熷凹杈涜憽鐢茶兒",
            "dosage_per_kg": "2mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 3,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "閫€鐑ч晣鐥?
          },
          {
            "medication_id": "m16",
            "medication_name": "缁寸敓绱燙",
            "dosage_per_kg": "20mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "鎶楀簲婵€"
          }
        ],
        "oral_medications": [
          {
            "medication_name": "鏉胯摑鏍归绮?,
            "dosage": "100g鎷屾枡200鏂?,
            "frequency": "鎸佺画",
            "duration_days": 5,
            "notes": "娓呯儹瑙ｆ瘨"
          }
        ],
        "notes": "娴佽鐑棤鐗规晥鑽紝浠ュ鐥囨不鐤椾负涓汇€?
      }
    ],
    "nursing_care": "淇濇寔鍦堣垗娓呮磥锛屾彁渚涗紭璐ㄩギ姘淬€?,
    "priority": 2
  },
  {
    "id": "t06",
    "disease_id": "d06",
    "disease_name": "鐗涚梾姣掓€ц吂娉?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氬鐥囨不鐤?,
        "medications": [
          {
            "medication_id": "m05",
            "medication_name": "澶村鍣诲憢",
            "dosage_per_kg": "5mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "鎺у埗缁у彂鎰熸煋"
          },
          {
            "medication_id": "m09",
            "medication_name": "姘熷凹杈涜憽鐢茶兒",
            "dosage_per_kg": "2mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 3,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "閫€鐑?
          }
        ],
        "oral_medications": [
          {
            "medication_name": "钂欒劚鐭虫暎",
            "dosage": "鐘婄墰3-5g/澶?,
            "frequency": "姣忔棩2娆?,
            "duration_days": 3,
            "notes": "姝㈡郴淇濇姢鑲犻亾"
          },
          {
            "medication_name": "鍙ｆ湇琛ユ恫鐩?,
            "dosage": "鑷敱楗敤",
            "frequency": "鎸佺画",
            "duration_days": 5,
            "notes": "闃叉鑴辨按"
          }
        ],
        "notes": "BVD鏃犵壒鏁堣嵂锛屼互瀵圭棁娌荤枟涓轰富銆?
      }
    ],
    "nursing_care": "闅旂鐥呯墰锛屾彁渚涗紭璐ㄩゲ鏂欍€?,
    "priority": 2
  },
  {
    "id": "t07",
    "disease_id": "d07",
    "disease_name": "鐗涗紶鏌撴€ч蓟姘旂鐐?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氬鐥囨不鐤?,
        "medications": [
          {
            "medication_id": "m05",
            "medication_name": "澶村鍣诲憢",
            "dosage_per_kg": "5mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "鎺у埗缁у彂鎰熸煋"
          },
          {
            "medication_id": "m09",
            "medication_name": "姘熷凹杈涜憽鐢茶兒",
            "dosage_per_kg": "2mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 3,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "閫€鐑?
          }
        ],
        "oral_medications": [
          {
            "medication_name": "鏉胯摑鏍归绮?,
            "dosage": "100g鎷屾枡200鏂?,
            "frequency": "鎸佺画",
            "duration_days": 7,
            "notes": "娓呯儹瑙ｆ瘨"
          }
        ],
        "notes": "IBR鏃犵壒鏁堣嵂锛屼互瀵圭棁娌荤枟涓轰富銆?
      }
    ],
    "nursing_care": "闅旂鐥呯墰锛屾敼鍠勯€氶銆?,
    "priority": 2
  },
  {
    "id": "t08",
    "disease_id": "d08",
    "disease_name": "鐗涘反姘忔潌鑿岀梾",
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
          },
          {
            "medication_id": "m09",
            "medication_name": "姘熷凹杈涜憽鐢茶兒",
            "dosage_per_kg": "2mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 3,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "閫€鐑ф姉鐐?
          }
        ],
        "oral_medications": [
          {
            "medication_name": "姘熻嫰灏艰€冪矇",
            "dosage": "100g鎷屾枡200鏂?,
            "frequency": "鎸佺画",
            "duration_days": 7,
            "notes": "鎺у埗鎰熸煋"
          }
        ],
        "notes": "澶村+姘熷凹杈涙敞灏勶紝閰嶅悎姘熻嫰灏艰€冩媽鏂欍€?
      }
    ],
    "nursing_care": "鏀瑰杽閫氶锛岄檷浣庨ゲ鍏诲瘑搴︺€?,
    "priority": 1
  },
  {
    "id": "t09",
    "disease_id": "d09",
    "disease_name": "鐘婄墰澶ц偁鏉嗚弻鐥?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氬簡澶ч湁绱?钂欒劚鐭?,
        "medications": [
          {
            "medication_id": "m07",
            "medication_name": "纭吀搴嗗ぇ闇夌礌",
            "dosage_per_kg": "2-3ml/澶?,
            "frequency": "姣忔棩2娆?,
            "duration_days": 3,
            "route": "鍙ｆ湇",
            "notes": "鍙ｆ湇锛岃偁閬撴潃鑿?
          }
        ],
        "oral_medications": [
          {
            "medication_name": "钂欒劚鐭虫暎",
            "dosage": "鐘婄墰1-2g/澶?,
            "frequency": "姣忔棩2娆?,
            "duration_days": 3,
            "notes": "姝㈡郴淇濇姢鑲犻亾"
          },
          {
            "medication_name": "鍙ｆ湇琛ユ恫鐩?,
            "dosage": "鑷敱楗敤",
            "frequency": "鎸佺画",
            "duration_days": 5,
            "notes": "闃叉鑴辨按"
          }
        ],
        "notes": "鐘婄墰鍙ｆ湇搴嗗ぇ闇夌礌+钂欒劚鐭?琛ユ恫鐩愩€?
      }
    ],
    "nursing_care": "淇濇俯锛屼繚鎸佸共鐕ワ紝鍙婃椂娓呴櫎绮究銆?,
    "priority": 1
  },
  {
    "id": "t10",
    "disease_id": "d10",
    "disease_name": "鐗涘壇缁撴牳鐥?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氭棤鐗规晥娌荤枟",
        "medications": [],
        "oral_medications": [],
        "notes": "鍓粨鏍哥梾鏃犵壒鏁堟不鐤楋紝鍙戠幇鍚庣珛鍗充笂鎶ワ紝鎵戞潃鏃犲鍖栧鐞嗐€?
      }
    ],
    "nursing_care": "涓ユ牸闅旂锛岀瓑寰呭畼鏂瑰鐞嗐€?,
    "priority": 1
  },
  {
    "id": "t11",
    "disease_id": "d11",
    "disease_name": "鐗涚偔鐤?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氭棤鐗规晥娌荤枟",
        "medications": [],
        "oral_medications": [],
        "notes": "鐐柦鏃犵壒鏁堟不鐤楋紝鍙戠幇鍚庣珛鍗充笂鎶ワ紝鎵戞潃鏃犲鍖栧鐞嗐€備弗绂佽В鍓栥€?
      }
    ],
    "nursing_care": "涓ユ牸闅旂锛岀瓑寰呭畼鏂瑰鐞嗐€備弗绂佽В鍓栥€?,
    "priority": 1
  },
  {
    "id": "t12",
    "disease_id": "d12",
    "disease_name": "鐗涙皵鑲跨柦",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氶潚闇夌礌+姘熷凹杈?,
        "medications": [
          {
            "medication_id": "m01",
            "medication_name": "闈掗湁绱犻捑/閽?,
            "dosage_per_kg": "6-8涓囧崟浣?,
            "frequency": "姣忔棩2-3娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "棣栭€夎嵂鐗?
          },
          {
            "medication_id": "m09",
            "medication_name": "姘熷凹杈涜憽鐢茶兒",
            "dosage_per_kg": "2mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 3,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "閫€鐑ч晣鐥?
          }
        ],
        "oral_medications": [],
        "notes": "闈掗湁绱犳槸棣栭€夎嵂鐗╋紝鏃╂湡娌荤枟鏁堟灉濂姐€?
      }
    ],
    "nursing_care": "闅旂鐥呯墰锛屼繚鎸佸湀鑸嶆竻娲併€?,
    "priority": 1
  },
  {
    "id": "t13",
    "disease_id": "d13",
    "disease_name": "鐗涙伓鎬ф按鑲?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氶潚闇夌礌+娓呭垱",
        "medications": [
          {
            "medication_id": "m01",
            "medication_name": "闈掗湁绱犻捑/閽?,
            "dosage_per_kg": "6-8涓囧崟浣?,
            "frequency": "姣忔棩2-3娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "瀵瑰帉姘ц弻鏁堟灉濂?
          }
        ],
        "oral_medications": [],
        "notes": "闈掗湁绱犳敞灏?鍙屾哀姘存竻鍒涖€?
      }
    ],
    "nursing_care": "淇濇寔鐜骞茬嚗锛屽噺灏戝浼ゃ€?,
    "priority": 1
  },
  {
    "id": "t14",
    "disease_id": "d14",
    "disease_name": "鐗涚牬浼ら",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氱牬浼ら鎶楁瘨绱?闀囬潤",
        "medications": [
          {
            "medication_id": "m01",
            "medication_name": "闈掗湁绱犻捑/閽?,
            "dosage_per_kg": "6-8涓囧崟浣?,
            "frequency": "姣忔棩2-3娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "棰勯槻鎰熸煋"
          },
          {
            "medication_id": "m50",
            "medication_name": "姘笝鍡?,
            "dosage_per_kg": "1-2mg",
            "frequency": "姣忔棩2娆?,
            "duration_days": 3,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "闀囬潤"
          }
        ],
        "oral_medications": [],
        "notes": "鐮翠激椋庢姉姣掔礌+闈掗湁绱?闀囬潤銆?
      }
    ],
    "nursing_care": "淇濇寔瀹夐潤鐜锛岄伩鍏嶅埡婵€銆?,
    "priority": 1
  },
  {
    "id": "t15",
    "disease_id": "d15",
    "disease_name": "鐗涚媯鐘梾",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氭棤鐗规晥娌荤枟",
        "medications": [],
        "oral_medications": [],
        "notes": "鐙傜姮鐥呮棤鐗规晥娌荤枟锛屽彂鐜板悗绔嬪嵆涓婃姤锛屾墤鏉€鏃犲鍖栧鐞嗐€?
      }
    ],
    "nursing_care": "涓ユ牸闅旂锛岀瓑寰呭畼鏂瑰鐞嗐€?,
    "priority": 1
  },
  {
    "id": "t16",
    "disease_id": "d16",
    "disease_name": "鐗涗紶鏌撴€ц鑶滅粨鑶滅値",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氬眬閮ㄦ不鐤?,
        "medications": [],
        "oral_medications": [],
        "notes": "鐢ㄧ敓鐞嗙洂姘存竻娲楁偅鐪硷紝娑傛姽鎶楃敓绱犵溂鑶忋€?
      }
    ],
    "nursing_care": "淇濇寔鍦堣垗娓呮磥锛岄伩鍏嶅己鍏夊埡婵€銆?,
    "priority": 2
  },
  {
    "id": "t17",
    "disease_id": "d17",
    "disease_name": "鐗涙斁绾胯弻鐥?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氱鍖栭捑+闈掗湁绱?,
        "medications": [
          {
            "medication_id": "m01",
            "medication_name": "闈掗湁绱犻捑/閽?,
            "dosage_per_kg": "6-8涓囧崟浣?,
            "frequency": "姣忔棩2-3娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "鎺у埗鎰熸煋"
          }
        ],
        "oral_medications": [
          {
            "medication_name": "纰樺寲閽?,
            "dosage": "5-10g/澶?,
            "frequency": "姣忔棩1娆?,
            "duration_days": 14,
            "notes": "鍙ｆ湇纰樺寲閽?
          }
        ],
        "notes": "闈掗湁绱犳敞灏?纰樺寲閽惧彛鏈嶃€?
      }
    ],
    "nursing_care": "淇濇寔鍦堣垗娓呮磥锛屽噺灏戝浼ゃ€?,
    "priority": 2
  },
  {
    "id": "t18",
    "disease_id": "d18",
    "disease_name": "鐗涜。鍘熶綋鐥?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氬洓鐜礌绫?,
        "medications": [
          {
            "medication_id": "m39",
            "medication_name": "澶氳タ鐜礌",
            "dosage_per_kg": "鎷屾枡",
            "frequency": "鎸佺画",
            "duration_days": 7,
            "route": "鎷屾枡",
            "notes": "瀵硅。鍘熶綋鏁堟灉濂?
          }
        ],
        "oral_medications": [],
        "notes": "澶氳タ鐜礌瀵硅。鍘熶綋鏁堟灉濂姐€?
      }
    ],
    "nursing_care": "闅旂鐥呯墰锛屾敼鍠勯ゲ鍏荤鐞嗐€?,
    "priority": 2
  },
  {
    "id": "t19",
    "disease_id": "d19",
    "disease_name": "鐗涚悆铏梾",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氱：鑳虹被",
        "medications": [
          {
            "medication_id": "m42",
            "medication_name": "纾鸿兒闂寸敳姘у槯鍟?,
            "dosage_per_kg": "0.1ml",
            "frequency": "姣忔棩1娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "瀵圭悆铏晥鏋滃ソ"
          }
        ],
        "oral_medications": [],
        "notes": "纾鸿兒闂寸敳姘у槯鍟跺鐞冭櫕鏁堟灉濂姐€?
      }
    ],
    "nursing_care": "淇濇寔鍦堣垗娓呮磥锛屽強鏃舵竻闄ょ勃渚裤€?,
    "priority": 2
  },
  {
    "id": "t20",
    "disease_id": "d20",
    "disease_name": "鐗涜倽鐗囧惛铏梾",
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
            "notes": "骞胯氨椹辫櫕鑽紝瀵硅倽鐗囧惛铏晥鏋滃ソ"
          }
        ],
        "notes": "闃胯嫰杈惧攽鍙ｆ湇锛屽崟娆＄粰鑽€?
      }
    ],
    "nursing_care": "瀹氭湡椹辫櫕锛岄伩鍏嶅湪浣庢醇娼箍鍦板尯鏀剧墽銆?,
    "priority": 2
  },
  {
    "id": "t21",
    "disease_id": "d21",
    "disease_name": "鐗涚沪铏梾",
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
            "notes": "骞胯氨椹辫櫕鑽紝瀵圭沪铏晥鏋滃ソ"
          }
        ],
        "notes": "闃胯嫰杈惧攽鍙ｆ湇锛屽崟娆＄粰鑽€?
      }
    ],
    "nursing_care": "瀹氭湡椹辫櫕锛屼繚鎸佺幆澧冨崼鐢熴€?,
    "priority": 3
  },
  {
    "id": "t22",
    "disease_id": "d22",
    "disease_name": "鐗涜灗鐥?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氫紛缁磋弻绱?澶栫敤",
        "medications": [
          {
            "medication_id": "m20",
            "medication_name": "浼婄淮鑿岀礌",
            "dosage_per_kg": "0.2mg",
            "frequency": "闂撮殧7-10澶╅噸澶?,
            "duration_days": 2,
            "route": "鐨笅娉ㄥ皠",
            "notes": "椹辫灗铏?
          }
        ],
        "oral_medications": [],
        "notes": "浼婄淮鑿岀礌娉ㄥ皠+鍙岀敳鑴掑鐢紝闂撮殧7-10澶╅噸澶嶄竴娆°€?
      }
    ],
    "nursing_care": "淇濇寔鍦堣垗骞茬嚗锛屽畾鏈熸秷姣掋€?,
    "priority": 3
  },
  {
    "id": "t23",
    "disease_id": "d23",
    "disease_name": "鐗涘墠鑳冨紱缂?,
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
          },
          {
            "medication_name": "涔抽叾鐢?,
            "dosage": "5-10g/澶?,
            "frequency": "姣忔棩2娆?,
            "duration_days": 5,
            "notes": "璋冭妭鑲犻亾鑿岀兢"
          }
        ],
        "notes": "浜哄伐鐩愬仴鑳?涔抽叾鐢熻皟鑺傝弻缇ゃ€?
      }
    ],
    "nursing_care": "鏀瑰杽楗插吇绠＄悊锛屾彁渚涙槗娑堝寲楗叉枡銆?,
    "priority": 3
  },
  {
    "id": "t24",
    "disease_id": "d24",
    "disease_name": "鐗涚槫鑳冭噷姘?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氱揣鎬ユ帓姘?,
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "浜岀敳纭呮补",
            "dosage": "5-10g/澶?,
            "frequency": "鍗曟",
            "duration_days": 1,
            "notes": "娑堟场鍓?
          }
        ],
        "notes": "绱ф€ョ┛鍒烘帓姘旓紝浜岀敳纭呮补娑堟场銆?
      }
    ],
    "nursing_care": "閬垮厤閲囬鏄撳彂閰甸ゲ鏂欍€?,
    "priority": 1
  },
  {
    "id": "t25",
    "disease_id": "d25",
    "disease_name": "鐗涚槫鑳冮吀涓瘨",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氱⒊閰告阿閽?琛ユ恫",
        "medications": [
          {
            "medication_id": "m24",
            "medication_name": "钁¤悇绯?,
            "dosage_per_kg": "10-20ml/kg",
            "frequency": "鍗曟",
            "duration_days": 1,
            "route": "闈欒剦娉ㄥ皠",
            "notes": "琛ュ厖鑳介噺"
          }
        ],
        "oral_medications": [
          {
            "medication_name": "纰抽吀姘㈤挔",
            "dosage": "20-50g/澶?,
            "frequency": "姣忔棩2娆?,
            "duration_days": 3,
            "notes": "涓拰鑳冮吀"
          }
        ],
        "notes": "纰抽吀姘㈤挔涓拰鑳冮吀+钁¤悇绯栬ˉ娑层€?
      }
    ],
    "nursing_care": "閬垮厤閲囬杩囧绮炬枡銆?,
    "priority": 1
  },
  {
    "id": "t26",
    "disease_id": "d26",
    "disease_name": "鐗涢叜鐥?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氳憽钀勭硸+涓欎簩閱?,
        "medications": [
          {
            "medication_id": "m24",
            "medication_name": "钁¤悇绯?,
            "dosage_per_kg": "10-20ml/kg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 3,
            "route": "闈欒剦娉ㄥ皠",
            "notes": "琛ュ厖琛€绯?
          }
        ],
        "oral_medications": [
          {
            "medication_name": "涓欎簩閱?,
            "dosage": "200-300ml/澶?,
            "frequency": "姣忔棩1娆?,
            "duration_days": 5,
            "notes": "琛ュ厖鑳介噺"
          }
        ],
        "notes": "钁¤悇绯栭潤鑴夋敞灏?涓欎簩閱囧彛鏈嶃€?
      }
    ],
    "nursing_care": "璋冩暣楗叉枡閰嶆柟锛屽鍔犺兘閲忔憚鍏ャ€?,
    "priority": 2
  },
  {
    "id": "t27",
    "disease_id": "d27",
    "disease_name": "鐗涚敓浜х槴鐥?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氳ˉ閽?,
        "medications": [
          {
            "medication_id": "m69",
            "medication_name": "姘寲閽?,
            "dosage_per_kg": "5-10g/澶?,
            "frequency": "鍗曟",
            "duration_days": 1,
            "route": "闈欒剦娉ㄥ皠",
            "notes": "琛ラ挋"
          }
        ],
        "oral_medications": [],
        "notes": "姘寲閽欓潤鑴夋敞灏勮ˉ閽欍€?
      }
    ],
    "nursing_care": "浜у悗鍙婃椂琛ラ挋锛岄闃蹭綆琛€閽欍€?,
    "priority": 1
  },
  {
    "id": "t28",
    "disease_id": "d28",
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
    "nursing_care": "鍋氬ソ浜ф埧娑堟瘨锛屼骇鍚庢秷鐐庛€?,
    "priority": 2
  },
  {
    "id": "t29",
    "disease_id": "d29",
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
          },
          {
            "medication_id": "m09",
            "medication_name": "姘熷凹杈涜憽鐢茶兒",
            "dosage_per_kg": "2mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 3,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "娑堢値闀囩棝"
          }
        ],
        "oral_medications": [],
        "notes": "澶村+姘熷凹杈涙敞灏勶紝楸肩煶鑴傝蒋鑶忓鏁锋秷鐐庛€?
      }
    ],
    "nursing_care": "淇濇寔鐗涜垗娓呮磥锛屽仛濂戒钩鎴挎姢鐞嗐€?,
    "priority": 2
  },
  {
    "id": "t30",
    "disease_id": "d30",
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
            "notes": "淇冭繘瀛愬鏀剁缉锛屾帓鍑鸿儙琛?
          },
          {
            "medication_id": "m05",
            "medication_name": "澶村鍣诲憢",
            "dosage_per_kg": "5mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "棰勯槻鎰熸煋"
          }
        ],
        "oral_medications": [],
        "notes": "缂╁绱犱績杩涘瓙瀹敹缂╂帓鍑鸿儙琛ｏ紝澶村棰勯槻鎰熸煋銆?
      }
    ],
    "nursing_care": "鍔犲己濡婂鏈熼ゲ鍏荤鐞嗭紝閬垮厤闅句骇銆?,
    "priority": 2
  },
  {
    "id": "t31",
    "disease_id": "d31",
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
    "nursing_care": "鍔犲己濡婂鏈熼ゲ鍏荤鐞嗭紝閬垮厤姣嶇墰杩囪偉鎴栬繃鐦︺€?,
    "priority": 1
  },
  {
    "id": "t32",
    "disease_id": "d32",
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
        "notes": "缁寸敓绱燗D娉ㄥ皠+楸艰倽娌瑰彛鏈嶃€?
      }
    ],
    "nursing_care": "琛ュ厖闈掔豢楗叉枡锛屾敼鍠勯ゲ鍏荤鐞嗐€?,
    "priority": 3
  },
  {
    "id": "t33",
    "disease_id": "d33",
    "disease_name": "鐗涚櫧鑲岀梾",
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
        "notes": "浜氱閰搁挔缁寸敓绱燛娉ㄥ皠锛岄ゲ鏂欎腑娣诲姞浜氱閰搁挔棰勯槻銆?
      }
    ],
    "nursing_care": "楗叉枡涓坊鍔犱簹纭掗吀閽狅紝琛ュ厖缁寸敓绱燛銆?,
    "priority": 3
  },
  {
    "id": "t34",
    "disease_id": "d34",
    "disease_name": "鐗涗綕鍋荤梾",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氳ˉ閽?缁寸敓绱燚",
        "medications": [
          {
            "medication_id": "m22",
            "medication_name": "缁寸敓绱燗D娉ㄥ皠娑?,
            "dosage_per_kg": "2-4ml/澶?,
            "frequency": "鍗曟",
            "duration_days": 1,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "琛ュ厖缁寸敓绱燚"
          }
        ],
        "oral_medications": [
          {
            "medication_name": "纰抽吀閽?,
            "dosage": "10-20g/澶?,
            "frequency": "姣忔棩1娆?,
            "duration_days": 14,
            "notes": "琛ラ挋"
          }
        ],
        "notes": "缁寸敓绱燚娉ㄥ皠+纰抽吀閽欏彛鏈嶃€?
      }
    ],
    "nursing_care": "琛ュ厖閽欑７锛屽鍔犲厜鐓с€?,
    "priority": 3
  },
  {
    "id": "t35",
    "disease_id": "d35",
    "disease_name": "鐗涘紓椋熺櫀",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氳ˉ鍏呰惀鍏?,
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "鐢佃В澶氱淮",
            "dosage": "500g鎷屾枡1000鏂?,
            "frequency": "鎸佺画",
            "duration_days": 14,
            "notes": "琛ュ厖缁寸敓绱犲拰鐭跨墿璐?
          },
          {
            "medication_name": "寰噺鍏冪礌娣诲姞鍓?,
            "dosage": "鎸夎鏄庝娇鐢?,
            "frequency": "鎸佺画",
            "duration_days": 14,
            "notes": "琛ュ厖寰噺鍏冪礌"
          }
        ],
        "notes": "琛ュ厖钀ュ吇锛屾敼鍠勯ゲ鍏荤幆澧冦€?
      }
    ],
    "nursing_care": "鏀瑰杽楗插吇鐜锛岄檷浣庨ゲ鍏诲瘑搴︺€?,
    "priority": 3
  },
  {
    "id": "t36",
    "disease_id": "d36",
    "disease_name": "鐗涜箘鍙剁値",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氭盁灏艰緵+淇箘",
        "medications": [
          {
            "medication_id": "m09",
            "medication_name": "姘熷凹杈涜憽鐢茶兒",
            "dosage_per_kg": "2mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 3,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "娑堢値闀囩棝"
          }
        ],
        "oral_medications": [],
        "notes": "姘熷凹杈涙秷鐐庨晣鐥?淇箘銆?
      }
    ],
    "nursing_care": "淇濇寔鍦伴潰骞茬嚗锛屽畾鏈熶慨韫勩€?,
    "priority": 2
  },
  {
    "id": "t37",
    "disease_id": "d37",
    "disease_name": "鐗涜厫韫勭梾",
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氭竻鍒?鎶楃敓绱?,
        "medications": [
          {
            "medication_id": "m01",
            "medication_name": "闈掗湁绱犻捑/閽?,
            "dosage_per_kg": "6-8涓囧崟浣?,
            "frequency": "姣忔棩2娆?,
            "duration_days": 5,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "鎺у埗鎰熸煋"
          }
        ],
        "oral_medications": [],
        "notes": "娓呭垱+闈掗湁绱犳敞灏勩€?
      }
    ],
    "nursing_care": "淇濇寔鍦伴潰骞茬嚗锛屽畾鏈熶慨韫勩€?,
    "priority": 2
  },
  {
    "id": "t38",
    "disease_id": "d38",
    "disease_name": "鐗涙劅鍐?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氬鐥囨不鐤?,
        "medications": [
          {
            "medication_id": "m09",
            "medication_name": "姘熷凹杈涜憽鐢茶兒",
            "dosage_per_kg": "2mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 3,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "閫€鐑?
          }
        ],
        "oral_medications": [
          {
            "medication_name": "鏉胯摑鏍归绮?,
            "dosage": "100g鎷屾枡200鏂?,
            "frequency": "鎸佺画",
            "duration_days": 5,
            "notes": "娓呯儹瑙ｆ瘨"
          }
        ],
        "notes": "鍋氬ソ淇濇俯锛屽噺灏戝簲婵€銆?
      }
    ],
    "nursing_care": "鍋氬ソ淇濇俯锛屽噺灏戝簲婵€銆?,
    "priority": 3
  },
  {
    "id": "t39",
    "disease_id": "d39",
    "disease_name": "鐗涜偤鐐?,
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
          },
          {
            "medication_id": "m09",
            "medication_name": "姘熷凹杈涜憽鐢茶兒",
            "dosage_per_kg": "2mg",
            "frequency": "姣忔棩1娆?,
            "duration_days": 3,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "閫€鐑ф姉鐐?
          }
        ],
        "oral_medications": [
          {
            "medication_name": "楹绘潖鐭崇敇鏁?,
            "dosage": "100g鎷屾枡200鏂?,
            "frequency": "鎸佺画",
            "duration_days": 7,
            "notes": "姝㈠挸骞冲枠"
          }
        ],
        "notes": "澶村+姘熷凹杈涙敞灏勶紝閰嶅悎楹绘潖鐭崇敇鏁ｃ€?
      }
    ],
    "nursing_care": "鏀瑰杽閫氶锛岄檷浣庨ゲ鍏诲瘑搴︺€?,
    "priority": 2
  },
  {
    "id": "t40",
    "disease_id": "d40",
    "disease_name": "鐗涗腑鏆?,
    "treatment_plans": [
      {
        "plan_name": "鏂规涓€锛氱揣鎬ラ檷娓?,
        "medications": [
          {
            "medication_id": "m09",
            "medication_name": "姘熷凹杈涜憽鐢茶兒",
            "dosage_per_kg": "2mg",
            "frequency": "鍗曟",
            "duration_days": 1,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "閫€鐑?
          },
          {
            "medication_id": "m16",
            "medication_name": "缁寸敓绱燙",
            "dosage_per_kg": "20mg",
            "frequency": "鍗曟",
            "duration_days": 1,
            "route": "鑲岃倝娉ㄥ皠",
            "notes": "鎶楀簲婵€"
          }
        ],
        "oral_medications": [
          {
            "medication_name": "鍙ｆ湇琛ユ恫鐩?,
            "dosage": "鑷敱楗敤",
            "frequency": "鎸佺画",
            "duration_days": 3,
            "notes": "琛ュ厖姘村垎鍜岀數瑙ｈ川"
          }
        ],
        "notes": "绔嬪嵆灏嗙墰杞Щ鍒伴槾鍑夊锛岀敤鍐锋按娴囧ご鍜屽叏韬€?
      }
    ],
    "nursing_care": "绔嬪嵆灏嗙墰杞Щ鍒伴槾鍑夊锛岀敤鍐锋按娴囧ご鍜屽叏韬€?,
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
    "symptom_id": "s46"
  },
  {
    "disease_id": "d01",
    "symptom_id": "s47"
  },
  {
    "disease_id": "d02",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d02",
    "symptom_id": "s06"
  },
  {
    "disease_id": "d02",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d03",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d03",
    "symptom_id": "s33"
  },
  {
    "disease_id": "d04",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d04",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d04",
    "symptom_id": "s11"
  },
  {
    "disease_id": "d04",
    "symptom_id": "s44"
  },
  {
    "disease_id": "d05",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d05",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d05",
    "symptom_id": "s11"
  },
  {
    "disease_id": "d05",
    "symptom_id": "s12"
  },
  {
    "disease_id": "d06",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d06",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d06",
    "symptom_id": "s07"
  },
  {
    "disease_id": "d06",
    "symptom_id": "s10"
  },
  {
    "disease_id": "d07",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d07",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d07",
    "symptom_id": "s11"
  },
  {
    "disease_id": "d07",
    "symptom_id": "s13"
  },
  {
    "disease_id": "d08",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d08",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d08",
    "symptom_id": "s11"
  },
  {
    "disease_id": "d08",
    "symptom_id": "s44"
  },
  {
    "disease_id": "d09",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d09",
    "symptom_id": "s05"
  },
  {
    "disease_id": "d09",
    "symptom_id": "s07"
  },
  {
    "disease_id": "d09",
    "symptom_id": "s08"
  },
  {
    "disease_id": "d10",
    "symptom_id": "s04"
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
    "symptom_id": "s04"
  },
  {
    "disease_id": "d11",
    "symptom_id": "s56"
  },
  {
    "disease_id": "d12",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d12",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d12",
    "symptom_id": "s19"
  },
  {
    "disease_id": "d12",
    "symptom_id": "s44"
  },
  {
    "disease_id": "d13",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d13",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d13",
    "symptom_id": "s17"
  },
  {
    "disease_id": "d14",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d14",
    "symptom_id": "s21"
  },
  {
    "disease_id": "d14",
    "symptom_id": "s22"
  },
  {
    "disease_id": "d15",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d15",
    "symptom_id": "s22"
  },
  {
    "disease_id": "d15",
    "symptom_id": "s23"
  },
  {
    "disease_id": "d16",
    "symptom_id": "s25"
  },
  {
    "disease_id": "d16",
    "symptom_id": "s45"
  },
  {
    "disease_id": "d17",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d17",
    "symptom_id": "s17"
  },
  {
    "disease_id": "d18",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d18",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d18",
    "symptom_id": "s33"
  },
  {
    "disease_id": "d19",
    "symptom_id": "s04"
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
    "symptom_id": "s04"
  },
  {
    "disease_id": "d20",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d21",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d21",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d21",
    "symptom_id": "s43"
  },
  {
    "disease_id": "d22",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d22",
    "symptom_id": "s43"
  },
  {
    "disease_id": "d22",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d23",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d23",
    "symptom_id": "s06"
  },
  {
    "disease_id": "d23",
    "symptom_id": "s51"
  },
  {
    "disease_id": "d24",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d24",
    "symptom_id": "s44"
  },
  {
    "disease_id": "d24",
    "symptom_id": "s50"
  },
  {
    "disease_id": "d25",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d25",
    "symptom_id": "s06"
  },
  {
    "disease_id": "d25",
    "symptom_id": "s51"
  },
  {
    "disease_id": "d26",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d26",
    "symptom_id": "s06"
  },
  {
    "disease_id": "d26",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d27",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d27",
    "symptom_id": "s21"
  },
  {
    "disease_id": "d27",
    "symptom_id": "s40"
  },
  {
    "disease_id": "d28",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d28",
    "symptom_id": "s36"
  },
  {
    "disease_id": "d28",
    "symptom_id": "s49"
  },
  {
    "disease_id": "d29",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d29",
    "symptom_id": "s35"
  },
  {
    "disease_id": "d29",
    "symptom_id": "s48"
  },
  {
    "disease_id": "d30",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d30",
    "symptom_id": "s55"
  },
  {
    "disease_id": "d31",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d31",
    "symptom_id": "s55"
  },
  {
    "disease_id": "d32",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d32",
    "symptom_id": "s06"
  },
  {
    "disease_id": "d33",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d33",
    "symptom_id": "s21"
  },
  {
    "disease_id": "d33",
    "symptom_id": "s40"
  },
  {
    "disease_id": "d34",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d34",
    "symptom_id": "s21"
  },
  {
    "disease_id": "d34",
    "symptom_id": "s40"
  },
  {
    "disease_id": "d35",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d35",
    "symptom_id": "s06"
  },
  {
    "disease_id": "d36",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d36",
    "symptom_id": "s20"
  },
  {
    "disease_id": "d36",
    "symptom_id": "s54"
  },
  {
    "disease_id": "d37",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d37",
    "symptom_id": "s20"
  },
  {
    "disease_id": "d37",
    "symptom_id": "s17"
  },
  {
    "disease_id": "d38",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d38",
    "symptom_id": "s11"
  },
  {
    "disease_id": "d38",
    "symptom_id": "s13"
  },
  {
    "disease_id": "d39",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d39",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d39",
    "symptom_id": "s11"
  },
  {
    "disease_id": "d39",
    "symptom_id": "s44"
  },
  {
    "disease_id": "d40",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d40",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d40",
    "symptom_id": "s44"
  },
  {
    "disease_id": "d40",
    "symptom_id": "s56"
  }
]
}

module.exports = data
