var status = -1;
var selectionLog = [];
function action(f, E, e) {
  var V = "action" + (cm.getMapId() - 350112000);
  eval(V)(f, E, e);
}
function action500(f, E, e) {
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
    cm.spawnMobLimit(8240134, 1, 672, -43, 100);
    cm.spawnMobLimit(8240134, 1, 501, 137, 100);
    cm.spawnMobLimit(8240134, 1, 1030, 351, 100);
    cm.spawnMobLimit(8240134, 1, 444, -43, 100);
    cm.spawnMobLimit(8240134, 1, 666, 137, 100);
    cm.spawnMobLimit(8240134, 1, 875, -43, 100);
    cm.spawnMobLimit(8240134, 1, 683, 351, 100);
    cm.spawnMobLimit(8240134, 1, 1073, -43, 100);
    cm.spawnMobLimit(8240134, 1, 838, 351, 100);
    cm.spawnMobLimit(8240134, 1, -183, 351, 100);
    cm.spawnMobLimit(8240134, 1, 455, 351, 100);
    cm.spawnMobLimit(8240134, 1, 274, 351, 100);
    cm.spawnMobLimit(8240134, 1, 263, 351, 100);
    cm.spawnMobLimit(8240134, 1, -209, 23, 100);
    cm.spawnMobLimit(8240134, 1, -357, 23, 100);
    cm.spawnMobLimit(8240134, 1, -22, 137, 100);
    cm.spawnMobLimit(8240134, 1, 76, 351, 100);
    cm.showMapleHero();
    cm.userSetFieldFloating(350112500, 5, 5, 5);
    cm.getTopMsgFont("只有将区域内的所有怪物全都消灭掉才能够前往下一地区。", 3, 20, 20, 0);
    cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
    cm.fieldEffect_ScreenMsg("aswan/stageEff/number/1");
    cm.updateInfoQuest(33927, "spare=1;ice=26");
    cm.spawnMobLimit(8240134, 1, -131, 351, 100);
    cm.addPopupSay(1540802, 1000, "#face1#洞穴正在倒塌！！\r\n赶紧躲开！！", '', 0);
    cm.addPopupSay(1540798, 1000, "你以为魔族会从战斗中逃跑吗！！", '', 0);
    cm.addPopupSay(1540798, 1000, "别后退！！", '', 0);
    cm.addPopupSay(1540802, 1000, "#face1#很好，不错！！", '', 0);
    cm.dispose();
  }
}
function action600(f, E, e) {
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
    cm.showMapleHero();
    cm.spawnMobLimit(8240134, 1, 457, 20, 100);
    cm.spawnMobLimit(8240134, 1, 570, 20, 100);
    cm.spawnMobLimit(8240134, 1, 329, 20, 100);
    cm.spawnMobLimit(8240134, 1, -357, 129, 100);
    cm.spawnMobLimit(8240134, 1, -367, 129, 100);
    cm.spawnMobLimit(8240134, 1, -205, 129, 100);
    cm.spawnMobLimit(8240134, 1, 668, 20, 100);
    cm.spawnMobLimit(8240134, 1, 338, 181, 100);
    cm.spawnMobLimit(8240134, 1, 1030, 351, 100);
    cm.spawnMobLimit(8240134, 1, 997, 166, 100);
    cm.spawnMobLimit(8240134, 1, 683, 351, 100);
    cm.spawnMobLimit(8240134, 1, 838, 351, 100);
    cm.spawnMobLimit(8240134, 1, -183, 351, 100);
    cm.spawnMobLimit(8240134, 1, 455, 351, 100);
    cm.spawnMobLimit(8240134, 1, 274, 351, 100);
    cm.spawnMobLimit(8240145, 1, 146, 137, 100);
    cm.spawnMobLimit(8240143, 1, 1049, 351, 100);
    cm.spawnMobLimit(8240141, 1, 618, 137, 100);
    cm.spawnMobLimit(8240140, 1, 581, -43, 100);
    cm.spawnMobLimit(8240139, 1, 248, 351, 100);
    cm.spawnMobLimit(8240134, 1, 263, 20, 100);
    cm.spawnMobLimit(8240134, 1, -209, 129, 100);
    cm.spawnMobLimit(8240134, 1, 39, 129, 100);
    cm.spawnMobLimit(8240134, 1, 76, 351, 100);
    cm.userSetFieldFloating(350112600, 5, 5, 5);
    cm.spawnMobLimit(8240146, 1, 1049, 351, 100);
    cm.spawnMobLimit(8240151, 1, 90, 351, 100);
    cm.spawnMobLimit(8240159, 1, 633, 351, 100);
    cm.spawnMobLimit(8240156, 1, 966, 351, 100);
    cm.spawnMobLimit(8240153, 1, 1107, 351, 100);
    cm.spawnMobLimit(8240134, 1, -131, 351, 100);
    cm.spawnMobLimit(8240153, 1, 633, 351, 100);
    cm.spawnMobLimit(8240153, 1, 966, 351, 100);
    cm.getTopMsgFont("只有将区域内的所有怪物全都消灭掉才能够前往下一地区。", 3, 20, 20, 0);
    cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
    cm.fieldEffect_ScreenMsg("aswan/stageEff/number/2");
    cm.addPopupSay(1540798, 1000, "一定要阻止他们！\r\n哪怕是同归于尽！", '', 0);
    cm.addPopupSay(1540806, 1000, "#face0#愚蠢的……！", '', 0);
    cm.addPopupSay(1540806, 1000, "#face0#即使洞穴倒塌，也没有人逃走。", '', 0);
    cm.addPopupSay(1540802, 1000, "这是非常了不起的忠心。", '', 0);
    cm.spawnMobLimit(8240151, 1, -113, 351, 100);
    cm.spawnMobLimit(8240159, 1, 500, 351, 100);
    cm.spawnMobLimit(8240152, 1, 1069, 351, 100);
    cm.spawnMobLimit(8240152, 1, 1141, 351, 100);
    cm.spawnMobLimit(8240134, 1, -139, 129, 100);
    cm.spawnMobLimit(8240146, 1, 575, 351, 100);
    cm.dispose();
  }
}
function action700(f, E, e) {
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
    cm.showMapleHero();
    cm.spawnMobLimit(8240137, 1, -678, 351, 100);
    cm.spawnMobLimit(8240136, 1, 527, 351, 100);
    cm.spawnMobLimit(8240136, 1, 712, 351, 100);
    cm.spawnMobLimit(8240136, 1, 913, 351, 100);
    cm.spawnMobLimit(8240137, 1, 203, 351, 100);
    cm.spawnMobLimit(8240139, 1, 32, 351, 100);
    cm.spawnMobLimit(8240139, 1, 153, 351, 100);
    cm.spawnMobLimit(8240139, 1, 10, 351, 100);
    cm.spawnMobLimit(8240136, 1, 1079, 351, 100);
    cm.spawnMobLimit(8240139, 1, 211, 351, 100);
    cm.userSetFieldFloating(350112700, 10, 10, 10);
    cm.addPopupSay(1540806, 1000, "#face0#冰块挡住了去路！", '', 0);
    cm.addPopupSay(1540802, 1000, "#face1#砸碎了就好啊！", '', 0);
    cm.fieldEffect_ScreenMsg("aswan/stageEff/final");
    cm.addPopupSay(1540806, 1000, "#face0#加快脚步，摇晃越来越严重了。", '', 0);
    cm.addPopupSay(1540802, 1000, "#face1#我可不想再次被关进冰块里！", '', 0);
    cm.spawnMobLimit(8240157, 1, -706, 351, 100);
    cm.spawnMobLimit(8240155, 1, -266, 351, 100);
    cm.spawnMobLimit(8240159, 1, 388, 351, 100);
    cm.spawnMobLimit(8240154, 1, 825, 351, 100);
    cm.spawnMobLimit(8240137, 1, -1698, 351, 100);
    cm.spawnMobLimit(8240137, 1, -1148, 351, 100);
    cm.spawnMobLimit(8240141, 1, -1411, 351, 100);
    cm.spawnMobLimit(8240141, 1, -1612, 351, 100);
    cm.spawnMobLimit(8240141, 1, -1043, 351, 100);
    cm.spawnMobLimit(8240141, 1, -1576, 351, 100);
    cm.spawnMobLimit(8240136, 1, -1275, 351, 100);
    cm.spawnMobLimit(8240144, 1, -1723, 351, 100);
    cm.spawnMobLimit(8240144, 1, -1278, 351, 100);
    cm.spawnMobLimit(8240144, 1, -1088, 351, 100);
    cm.spawnMobLimit(8240158, 1, -1480, 351, 100);
    cm.spawnMobLimit(8240151, 1, -859, 351, 100);
    cm.spawnMobLimit(8240152, 1, -1480, 351, 100);
    cm.spawnMobLimit(8240151, 1, -706, 351, 100);
    cm.spawnMobLimit(8240152, 1, -266, 351, 100);
    cm.spawnMobLimit(8240153, 1, 388, 351, 100);
    cm.spawnMobLimit(8240151, 1, 825, 351, 100);
    cm.spawnMobLimit(8240138, 1, -678, 351, 100);
    cm.spawnMobLimit(8240137, 1, -2036, 351, 100);
    cm.spawnMobLimit(8240137, 1, -2367, 351, 100);
    cm.spawnMobLimit(8240137, 1, -2648, 351, 100);
    cm.spawnMobLimit(8240137, 1, -2337, 351, 100);
    cm.spawnMobLimit(8240141, 1, -2734, 351, 100);
    cm.spawnMobLimit(8240141, 1, -2314, 351, 100);
    cm.spawnMobLimit(8240141, 1, -2192, 351, 100);
    cm.spawnMobLimit(8240141, 1, -2553, 351, 100);
    cm.spawnMobLimit(8240144, 1, -2371, 351, 100);
    cm.spawnMobLimit(8240136, 1, -2177, 351, 100);
    cm.spawnMobLimit(8240136, 1, -2520, 351, 100);
    cm.spawnMobLimit(8240144, 1, -2101, 351, 100);
    cm.spawnMobLimit(8240144, 1, -2614, 351, 100);
    cm.spawnMobLimit(8240153, 1, -1952, 351, 100);
    cm.spawnMobLimit(8240151, 1, -2538, 351, 100);
    cm.spawnMobLimit(8240146, 1, -1278, 351, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;