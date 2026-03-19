var status = -1;
var selectionLog = [];
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
    cm.spawnMobLimit(8240133, 1, 1028, 262, 100);
    cm.spawnMobLimit(8240133, 1, 1152, 80, 100);
    cm.spawnMobLimit(8240133, 1, 1429, -12, 100);
    cm.spawnMobLimit(8240132, 1, 1369, 399, 100);
    cm.spawnMobLimit(8240132, 1, 457, 399, 100);
    cm.spawnMobLimit(8240132, 1, 484, 258, 100);
    cm.spawnMobLimit(8240133, 1, 1709, 155, 100);
    cm.spawnMobLimit(8240132, 1, 1572, 155, 100);
    cm.spawnMobLimit(8240132, 1, 1080, 80, 100);
    cm.spawnMobLimit(8240133, 1, 1137, 399, 100);
    cm.spawnMobLimit(8240133, 1, 945, 399, 100);
    cm.spawnMobLimit(8240133, 1, 790, 399, 100);
    cm.spawnMobLimit(8240133, 1, 537, 258, 100);
    cm.spawnMobLimit(8240133, 1, 638, 258, 100);
    cm.spawnMobLimit(8240133, 1, 324, 399, 100);
    cm.spawnMobLimit(8240132, 1, 1667, 10, 100);
    cm.spawnMobLimit(8240132, 1, 831, 80, 100);
    cm.spawnMobLimit(8240132, 1, 1226, 80, 100);
    cm.spawnMobLimit(8240132, 1, 1589, 10, 100);
    cm.spawnMobLimit(8240132, 1, 1489, 399, 100);
    cm.spawnMobLimit(8240132, 1, 1111, 262, 100);
    cm.spawnMobLimit(8240132, 1, 925, 262, 100);
    cm.spawnMobLimit(8240132, 1, 370, 133, 100);
    cm.spawnMobLimit(8240132, 1, 240, 133, 100);
    cm.spawnMobLimit(8240133, 1, 520, 133, 100);
    cm.spawnMobLimit(8240133, 1, 1027, 80, 100);
    cm.spawnMobLimit(8240133, 1, 1728, 10, 100);
    cm.spawnMobLimit(8240133, 1, 560, 399, 100);
    cm.showMapleHero();
    cm.npc_ChangeController(1540800, "oid=287625341", 2129, 344, 4, 2079, 2179, 1, true, 0, false);
    cm.npc_SetSpecialAction("oid=287625341", "summon", 0, 0);
    cm.npc_SetSpecialAction("oid=287625341", "stand2", -1, 0);
    cm.addPopupSay(1540800, 2500, "哎哟喂，救人啊，不对，救企鹅啊！", '', 0);
    cm.cameraSwitch_PushSwitchMoveToPos(2130, 350, 3000);
    cm.addPopupSay(1540807, 2500, '主人，那里有个东西！', '', 0);
    cm.fieldEffect_ScreenMsg("aswan/stageEff/final");
    cm.getTopMsgFont("只有将区域内的所有怪物全都消灭掉才能够前往下一地区。", 3, 20, 20, 0);
    cm.spawnMobLimit(8240132, 1, 1530, 155, 100);
    cm.spawnMobLimit(8240132, 1, 1565, 10, 100);
    cm.addPopupSay(1540805, 1000, "#face3#企鹅好像受伤了……情况好像比想象中的严重？", '', 0);
    cm.addPopupSay(1540807, 1000, "先把怪物全部消灭，再询问一下情况吧！", '', 0);
    cm.spawnMobLimit(8240132, 1, 1571, 10, 100);
    cm.spawnMobLimit(8240132, 1, 1540, 10, 100);
    cm.spawnMobLimit(8240133, 1, 1538, 10, 100);
    cm.spawnMobLimit(8240133, 1, 1561, 399, 100);
    cm.spawnMobLimit(8240132, 1, 2637, 399, 100);
    cm.spawnMobLimit(8240132, 1, 1722, 10, 100);
    cm.spawnMobLimit(8240132, 1, 1891, 10, 100);
    cm.spawnMobLimit(8240133, 1, 2284, 93, 100);
    cm.spawnMobLimit(8240133, 1, 2217, 93, 100);
    cm.spawnMobLimit(8240132, 1, 2236, 208, 100);
    cm.spawnMobLimit(8240132, 1, 2027, 208, 100);
    cm.spawnMobLimit(8240132, 1, 1923, 10, 100);
    cm.spawnMobLimit(8240132, 1, 2127, 93, 100);
    cm.spawnMobLimit(8240132, 1, 2583, 399, 100);
    cm.spawnMobLimit(8240133, 1, 2264, 399, 100);
    cm.dispose();
    cm.snowStormRepeat();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;