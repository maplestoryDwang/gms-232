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
      if (cm.getMapId() == 450010700) {
        cm.spawnMobLimit(8880415, 1, 0, 266, 1);
        cm.getWeatherEffectNotice("每隔一定时间，希拉就会斩断一根灵魂之烛。小心不要被夺走灵魂。", 254, 8000, 1);
        cm.addPopupSay(3003771, 1000, "#face0#嗯……真让人意外。你还有力气挣扎吗？", '', 0);
        cm.addPopupSay(3003771, 1000, "#face0#在这种情况下！", '', 0);
      } else {
        var O = em.getMonster(8880415);
        O.setHp(O.getMobMaxHp() / 2);
        cm.getMap().spawnMonsterOnGroundBelow(O, new java.awt.Point(0, 266));
        cm.spawnMobLimit(8880419, 1, 0, 266, 1);
        cm.spawnMobLimit(8880418, 1, 90, 266, 1);
        cm.getWeatherEffectNotice("听见希拉从死亡的深渊底部将斯乌和黛米安的死灵拉上来的声音。", 254, 5000, 1);
      }
      cm.dispose();
    }
  }
}