var status = -1;
function action(f, E, e) {
  var V = cm.getEventManager("副本_金海滩_Boss");
  var O = V.getMapFactoryMap(cm.getMapId());
  var b = V.getMonster(3401011);
  V.registerMonster(b);
  O.spawnMonsterOnGroundBelow(b, new java.awt.Point(-174, -169));
  if (!cm.isQuestFinished(2975)) {
    cm.fieldEffect_ScreenMsg("Map/Effect.img/goldBeach/blackSlimeBoss");
  }
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;