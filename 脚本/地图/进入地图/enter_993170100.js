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
  } else if (status === V++) {
    cm.allowSpecialAtion(0, 1, ["swim01", "swim02", "swim03", 'swim04']);
    cm.gloryWildWater(2, [130]);
    cm.gloryWildWater(1, [0, 1, 0]);
    cm.gainSkillBuff(80002812, 1, 10000000);
    cm.updateInfoQuest(100334, "point=0;rMap=102020300;fin=0;enterPoint=8924;kill=0");
    cm.gloryWildWater(0, []);
    cm.getWeatherEffectNotice("     按下WASD键可以移动，点击鼠标时可以发动攻击。   ", 0, 10000, 1);
    cm.getClock(225);
    cm.dispose();
    em.schedule('刷怪', 0);
    cm.spawnReactorOnGroundBelow(9939041, 1320, 308);
    cm.spawnReactorOnGroundBelow(9939041, 3220, 276);
    cm.spawnReactorOnGroundBelow(9939041, 5220, 332);
    cm.spawnReactorOnGroundBelow(9939041, 7200, 266);
    cm.spawnReactorOnGroundBelow(9939042, 7400, 374);
    cm.spawnReactorOnGroundBelow(9939041, 19350, 304);
    cm.spawnReactorOnGroundBelow(9939042, 19980, 298);
    cm.spawnReactorOnGroundBelow(9939042, 18000, 255);
    cm.spawnReactorOnGroundBelow(9939041, 17550, 355);
    cm.spawnReactorOnGroundBelow(9939041, 15650, 369);
    cm.spawnReactorOnGroundBelow(9939041, 13450, 309);
    cm.spawnReactorOnGroundBelow(9939042, 14300, 291);
    cm.spawnReactorOnGroundBelow(9939041, 9450, 354);
    cm.spawnReactorOnGroundBelow(9939041, 11510, 281);
    cm.spawnReactorOnGroundBelow(9939041, 26185, 303);
    cm.spawnReactorOnGroundBelow(9939042, 26090, 347);
    cm.spawnReactorOnGroundBelow(9939041, 24500, 290);
    cm.spawnReactorOnGroundBelow(9939042, 25000, 287);
    cm.spawnReactorOnGroundBelow(9939041, 22765, 318);
    cm.spawnReactorOnGroundBelow(9939042, 23130, 361);
    cm.spawnReactorOnGroundBelow(9939041, 20920, 264);
    cm.spawnReactorOnGroundBelow(9939042, 21650, 326);
  }
}