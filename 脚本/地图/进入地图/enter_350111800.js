var status = -1;
var selectionLog = [];
function action(f, E, e) {
  var V = "action" + (cm.getMapId() - 350111000);
  eval(V)(f, E, e);
}
function action800(f, E, e) {
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
    cm.spawnMobLimit(8240141, 1, -599, 23, 100);
    cm.spawnMobLimit(8240145, 1, 366, 351, 100);
    cm.spawnMobLimit(8240145, 1, -1013, 351, 100);
    cm.spawnMobLimit(8240144, 1, -1084, 23, 100);
    cm.spawnMobLimit(8240143, 1, -923, 23, 100);
    cm.spawnMobLimit(8240141, 1, -679, 23, 100);
    cm.spawnMobLimit(8240140, 1, 277, 20, 100);
    cm.spawnMobLimit(8240135, 1, -788, 351, 100);
    cm.spawnMobLimit(8240134, 1, -183, 351, 100);
    cm.spawnMobLimit(8240134, 1, 455, 351, 100);
    cm.spawnMobLimit(8240134, 1, 274, 351, 100);
    cm.spawnMobLimit(8240134, 1, 248, 20, 100);
    cm.spawnMobLimit(8240134, 1, -209, 23, 100);
    cm.spawnMobLimit(8240134, 1, -125, 23, 100);
    cm.spawnMobLimit(8240134, 1, 39, 139, 100);
    cm.spawnMobLimit(8240134, 1, -506, 351, 100);
    cm.spawnMobLimit(8240134, 1, 76, 351, 100);
    cm.spawnMobLimit(8240134, 1, -643, 351, 100);
    cm.spawnMobLimit(8240134, 1, -807, 351, 100);
    cm.spawnMobLimit(8240134, 1, -1071, 351, 100);
    cm.spawnMobLimit(8240134, 1, -514, 23, 100);
    cm.spawnMobLimit(8240134, 1, -661, 23, 100);
    cm.spawnMobLimit(8240134, 1, -946, 23, 100);
    cm.spawnMobLimit(8240134, 1, -798, 23, 100);
    cm.spawnMobLimit(8240134, 1, -1069, 23, 100);
    cm.getTopMsgFont("只有将区域内的所有怪物全都消灭掉才能够前往下一地区。", 3, 20, 20, 0);
    cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
    cm.fieldEffect_ScreenMsg("aswan/stageEff/number/1");
    cm.spawnMobLimit(8240146, 1, -1013, 351, 100);
    cm.spawnMobLimit(8240134, 1, 423, 351, 100);
    cm.spawnMobLimit(8240146, 1, -1084, 23, 100);
    cm.spawnMobLimit(8240146, 1, -923, 23, 100);
    cm.spawnMobLimit(8240134, 1, 435, 20, 100);
    cm.spawnMobLimit(8240142, 1, -679, 23, 100);
    cm.spawnMobLimit(8240138, 1, -788, 351, 100);
    cm.spawnMobLimit(8240142, 1, -599, 23, 100);
    cm.addPopupSay(1540805, 1000, "两个人是从什么时候开始关系变好的呢？", '', 0);
    cm.addPopupSay(1540806, 1000, "#face1#不是在天空中一起战斗过嘛？从那时起，关系又重新变好了。", '', 0);
    cm.addPopupSay(1540802, 1000, "重新？", '', 0);
    cm.addPopupSay(1540806, 1000, "#face2#哦不，我只是自言自语，你不用在意。", '', 0);
    cm.spawnMobLimit(8240139, 1, 1071, 20, 100);
    cm.spawnMobLimit(8240137, 1, 747, 20, 100);
    cm.spawnMobLimit(8240136, 1, 1080, 351, 100);
    cm.spawnMobLimit(8240134, 1, 1230, 351, 100);
    cm.spawnMobLimit(8240134, 1, 888, 20, 100);
    cm.spawnMobLimit(8240134, 1, 857, 20, 100);
    cm.spawnMobLimit(8240134, 1, 1148, 20, 100);
    cm.spawnMobLimit(8240134, 1, 1192, 351, 100);
    cm.spawnMobLimit(8240142, 1, 277, 20, 100);
    cm.spawnMobLimit(8240146, 1, 366, 351, 100);
    cm.addPopupSay(1540802, 1000, "#face0#想阻止我，你们还嫩了点！", '', 0);
    cm.addPopupSay(1540806, 1000, "#face1#真的没有变。", '', 0);
    cm.spawnMobLimit(8240134, 1, 431, 20, 100);
    cm.spawnMobLimit(8240139, 1, 1071, 20, 100);
    cm.spawnMobLimit(8240137, 1, 747, 20, 100);
    cm.spawnMobLimit(8240136, 1, 1080, 351, 100);
    cm.spawnMobLimit(8240134, 1, 879, 351, 100);
    cm.spawnMobLimit(8240134, 1, 691, 20, 100);
    cm.spawnMobLimit(8240134, 1, 699, 20, 100);
    cm.spawnMobLimit(8240134, 1, 1135, 351, 100);
    cm.spawnMobLimit(8240134, 1, 692, 20, 100);
    cm.spawnMobLimit(8240138, 1, 1080, 351, 100);
    cm.spawnMobLimit(8240138, 1, 747, 20, 100);
    cm.dispose();
  }
}
function action900(f, E, e) {
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
    cm.spawnMobLimit(8240141, 1, -926, 23, 100);
    cm.spawnMobLimit(8240143, 1, 30, 351, 100);
    cm.spawnMobLimit(8240144, 1, 575, 351, 100);
    cm.spawnMobLimit(8240145, 1, 434, 20, 100);
    cm.spawnMobLimit(8240142, 1, -353, 129, 100);
    cm.spawnMobLimit(8240141, 1, -744, 351, 100);
    cm.spawnMobLimit(8240140, 1, -1027, 351, 100);
    cm.spawnMobLimit(8240134, 1, 457, 20, 100);
    cm.spawnMobLimit(8240134, 1, -183, 351, 100);
    cm.spawnMobLimit(8240134, 1, 455, 351, 100);
    cm.spawnMobLimit(8240134, 1, 274, 351, 100);
    cm.spawnMobLimit(8240134, 1, 263, 20, 100);
    cm.spawnMobLimit(8240134, 1, -209, 129, 100);
    cm.spawnMobLimit(8240134, 1, -357, 129, 100);
    cm.spawnMobLimit(8240134, 1, 39, 129, 100);
    cm.spawnMobLimit(8240134, 1, -506, 351, 100);
    cm.spawnMobLimit(8240134, 1, 76, 351, 100);
    cm.spawnMobLimit(8240134, 1, -643, 351, 100);
    cm.spawnMobLimit(8240134, 1, -807, 351, 100);
    cm.spawnMobLimit(8240134, 1, -978, 351, 100);
    cm.spawnMobLimit(8240134, 1, -1113, 351, 100);
    cm.spawnMobLimit(8240134, 1, -514, 129, 100);
    cm.spawnMobLimit(8240134, 1, -1081, 23, 100);
    cm.spawnMobLimit(8240134, 1, -798, 23, 100);
    cm.spawnMobLimit(8240134, 1, -942, 23, 100);
    cm.getTopMsgFont("只有将区域内的所有怪物全都消灭掉才能够前往下一地区。", 3, 20, 20, 0);
    cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
    cm.fieldEffect_ScreenMsg("aswan/stageEff/number/2");
    cm.spawnMobLimit(8240142, 1, -1027, 351, 100);
    cm.spawnMobLimit(8240142, 1, -744, 351, 100);
    cm.spawnMobLimit(8240134, 1, 435, 20, 100);
    cm.spawnMobLimit(8240134, 1, 437, 20, 100);
    cm.addPopupSay(1540806, 1000, "当心，前面还有敌人出现。", '', 0);
    cm.addPopupSay(1540802, 1000, "#face0#要当心的不是我们，而是那帮家伙！", '', 0);
    cm.spawnMobLimit(8240134, 1, 417, 20, 100);
    cm.spawnMobLimit(8240140, 1, 753, 20, 100);
    cm.spawnMobLimit(8240134, 1, 650, 20, 100);
    cm.spawnMobLimit(8240134, 1, 855, 351, 100);
    cm.spawnMobLimit(8240134, 1, 785, 351, 100);
    cm.spawnMobLimit(8240134, 1, 1184, 351, 100);
    cm.spawnMobLimit(8240134, 1, 884, 351, 100);
    cm.spawnMobLimit(8240142, 1, -926, 23, 100);
    cm.spawnMobLimit(8240140, 1, 753, 20, 100);
    cm.spawnMobLimit(8240134, 1, 817, 20, 100);
    cm.spawnMobLimit(8240134, 1, 645, 20, 100);
    cm.spawnMobLimit(8240134, 1, 619, 351, 100);
    cm.spawnMobLimit(8240134, 1, 1230, 351, 100);
    cm.spawnMobLimit(8240134, 1, 741, 351, 100);
    cm.spawnMobLimit(8240134, 1, 1139, 351, 100);
    cm.spawnMobLimit(8240146, 1, 575, 351, 100);
    cm.addPopupSay(1540805, 1000, "#face3#魔族不是都长着翅膀嘛？", '', 0);
    cm.addPopupSay(1540806, 1000, "血统较弱的魔族大部分是没有翅膀的。", '', 0);
    cm.spawnMobLimit(8240142, 1, -1027, 351, 100);
    cm.spawnMobLimit(8240142, 1, -744, 351, 100);
    cm.spawnMobLimit(8240142, 1, -926, 23, 100);
    cm.spawnMobLimit(8240142, 1, 753, 20, 100);
    cm.spawnMobLimit(8240146, 1, 434, 20, 100);
    cm.dispose();
  }
}
function action1000(f, E, e) {
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
    cm.spawnMobLimit(8240134, 1, 501, 137, 100);
    cm.spawnMobLimit(8240145, 1, 146, 137, 100);
    cm.spawnMobLimit(8240144, 1, -571, 351, 100);
    cm.spawnMobLimit(8240141, 1, 618, 137, 100);
    cm.spawnMobLimit(8240140, 1, 581, -43, 100);
    cm.spawnMobLimit(8240139, 1, 248, 351, 100);
    cm.spawnMobLimit(8240137, 1, -525, 23, 100);
    cm.spawnMobLimit(8240136, 1, -1076, 153, 100);
    cm.spawnMobLimit(8240135, 1, -816, 351, 100);
    cm.spawnMobLimit(8240134, 1, 444, -43, 100);
    cm.spawnMobLimit(8240134, 1, -183, 351, 100);
    cm.spawnMobLimit(8240134, 1, 455, 351, 100);
    cm.spawnMobLimit(8240134, 1, 274, 351, 100);
    cm.spawnMobLimit(8240134, 1, 263, 351, 100);
    cm.spawnMobLimit(8240134, 1, -209, 23, 100);
    cm.spawnMobLimit(8240134, 1, -357, 23, 100);
    cm.spawnMobLimit(8240134, 1, -22, 137, 100);
    cm.spawnMobLimit(8240134, 1, -506, 351, 100);
    cm.spawnMobLimit(8240134, 1, 76, 351, 100);
    cm.spawnMobLimit(8240134, 1, -643, 351, 100);
    cm.spawnMobLimit(8240134, 1, -807, 351, 100);
    cm.spawnMobLimit(8240134, 1, -978, 351, 100);
    cm.spawnMobLimit(8240134, 1, -1113, 351, 100);
    cm.spawnMobLimit(8240134, 1, -514, 23, 100);
    cm.spawnMobLimit(8240134, 1, -661, 23, 100);
    cm.spawnMobLimit(8240134, 1, -1081, 153, 100);
    cm.spawnMobLimit(8240134, 1, -798, 23, 100);
    cm.spawnMobLimit(8240134, 1, -942, 153, 100);
    cm.getTopMsgFont("只有将区域内的所有怪物全都消灭掉才能够前往下一地区。", 3, 20, 20, 0);
    cm.fieldEffect_ScreenMsg("aswan/stageEff/final");
    cm.spawnMobLimit(8240138, 1, -1076, 153, 100);
    cm.spawnMobLimit(8240138, 1, -816, 351, 100);
    cm.spawnMobLimit(8240146, 1, -571, 351, 100);
    cm.spawnMobLimit(8240134, 1, 407, -43, 100);
    cm.spawnMobLimit(8240134, 1, 457, 137, 100);
    cm.spawnMobLimit(8240134, 1, 459, 351, 100);
    cm.addPopupSay(1540805, 1000, "去吧，米乐！我选中你了！", '', 0);
    cm.addPopupSay(1540807, 1000, "#face1#啊哦~", '', 0);
    cm.spawnMobLimit(8240134, 1, 427, -43, 100);
    cm.spawnMobLimit(8240134, 1, 1065, -43, 100);
    cm.spawnMobLimit(8240143, 1, 1049, 351, 100);
    cm.spawnMobLimit(8240134, 1, 507, -43, 100);
    cm.spawnMobLimit(8240134, 1, 1230, 351, 100);
    cm.spawnMobLimit(8240134, 1, 936, 351, 100);
    cm.spawnMobLimit(8240142, 1, 248, 351, 100);
    cm.spawnMobLimit(8240146, 1, 146, 137, 100);
    cm.spawnMobLimit(8240142, 1, 618, 137, 100);
    cm.addPopupSay(1540807, 1000, "主人！冰块飞到嘴里了。", '', 0);
    cm.addPopupSay(1540805, 1000, "#face2#别吃，米乐！", '', 0);
    cm.spawnMobLimit(8240146, 1, 1049, 351, 100);
    cm.spawnMobLimit(8240142, 1, 581, -43, 100);
    cm.spawnMobLimit(8240134, 1, -168, 23, 100);
    cm.spawnMobLimit(8240137, 1, -525, 23, 100);
    cm.spawnMobLimit(8240134, 1, -267, 23, 100);
    cm.spawnMobLimit(8240134, 1, -605, 23, 100);
    cm.spawnMobLimit(8240134, 1, -482, 23, 100);
    cm.spawnMobLimit(8240138, 1, -1076, 153, 100);
    cm.spawnMobLimit(8240138, 1, -816, 351, 100);
    cm.spawnMobLimit(8240146, 1, -571, 351, 100);
    cm.spawnMobLimit(8240138, 1, -525, 23, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;