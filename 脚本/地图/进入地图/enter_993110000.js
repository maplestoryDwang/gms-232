var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.getNumberFromQuestInfo(500728, "Scene") == 0) {
        cm.dispose();
        return;
      } else {
        cm.setNumberForQuestInfo(500728, "Scene", 0);
        switch (cm.getNumberFromQuestInfo(500728, 'lv')) {
          case 2:
            cm.sendNormalTalk_Bottom("\r\n祝贺你成为#b新复古王国#k认证的#r<2星勇士>#k。\r\n\r\n发放[荣誉勇士礼物]！\r\n#b- #i2630506:# #t2630506:##k\r\n#b- #i2630508:# #t2630508:##k\r\n\r\n[新复古能量]升级！\r\n#b- 每日可获得量 10,000 点 → 20,000 点！#k\r\n\r\n[新复古币商店]升级！\r\n#b- 可以购买2星级商品！#k\r\n\r\n[荣誉勇士之力]升级！\r\n#b- <荣誉勇士之力>技能等级1！#k\r\n", 133, 9062172, false, true, 3);
            break;
          case 3:
            cm.sendNormalTalk_Bottom("\r\n祝贺你成为#b新复古王国#k认证的#r<3星勇士>#k。\r\n\r\n发放[荣誉勇士礼物]！\r\n#b- #i2630507:# #t2630507:##k\r\n#b- #i2630509:# #t2630509:##k\r\n\r\n[新复古能量]升级！\r\n#b- 每日可获得量 20,000 点 → 30,000 点！#k\r\n\r\n[新复古币商店]升级！\r\n#b- 可以购买3星级商品！#k\r\n\r\n[荣誉勇士之力]升级！\r\n#b- <荣誉勇士之力>技能等级2！#k\r\n", 133, 9062172, false, true, 3);
            break;
          case 4:
            cm.sendNormalTalk_Bottom("\r\n祝贺你成为#b新复古王国#k认证的#r<4星勇士>#k。\r\n\r\n发放[荣誉勇士礼物]！\r\n#b- #i2630530:# #t2630530:##k\r\n#b- #i2630510:# #t2630510:##k\r\n\r\n[新复古能量]升级！\r\n#b- 每日可获得量 30,000 点 → 40,000 点！#k\r\n\r\n[新复古币商店]升级！\r\n#b- 可以购买4星级商品！#k\r\n\r\n[荣誉勇士之力]升级！\r\n#b- <荣誉勇士之力>技能等级3！#k\r\n", 133, 9062172, false, true, 3);
            break;
          case 5:
            cm.sendNormalTalk_Bottom("\r\n祝贺你成为#b新复古王国#k认证的#r<5星勇士>#k。\r\n\r\n发放[荣誉勇士礼物]！\r\n#b- #i2630531:# #t2630531:##k\r\n#b- #i2630532:# #t2630532:##k\r\n#b- #i2630533:# #t2630533:##k\r\n#b- #i2630534:# #t2630534:##k\r\n#b- #i2630511:# #t2630511:##k\r\n\r\n[新复古能量]升级！\r\n#b- 每日可获得量 40,000 点 → 50,000 点！#k\r\n\r\n[新复古币商店]升级！\r\n#b- 可以购买5星级商品！#k\r\n\r\n[荣誉勇士之力]升级！\r\n#b- <荣誉勇士之力>技能等级4！#k\r\n", 133, 9062172, false, true, 3);
            break;
        }
      }
    } else if (status === V++) {
      cm.effect_OnUserEff("Effect/CharacterEff.img/GradeUp");
      cm.dispose();
    }
  }
}