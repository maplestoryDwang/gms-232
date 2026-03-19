var status = -1;
var selectionLog = [];
function action(f, E, e) {
  cm.setNumberForQuestCustomData(33900, 4);
  cm.showMapleHero();
  var V = 'action' + (cm.getMapId() - 350120000);
  eval(V)(f, E, e);
}
function action300(f, E, e) {
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
    cm.spawnMobLimit(8240169, 1, 727, 148, 100);
    cm.spawnMobLimit(8240169, 1, 417, 28, 100);
    cm.spawnMobLimit(8240169, 1, -120, 268, 100);
    cm.spawnMobLimit(8240168, 1, 847, -92, 100);
    cm.spawnMobLimit(8240168, 1, -43, 88, 100);
    cm.spawnMobLimit(8240167, 1, -529, 268, 100);
    cm.spawnMobLimit(8240167, 1, -659, 58, 100);
    cm.spawnMobLimit(8240163, 1, 638, 148, 100);
    cm.spawnMobLimit(8240163, 1, 901, 268, 100);
    cm.spawnMobLimit(8240163, 1, 806, 268, 100);
    cm.spawnMobLimit(8240163, 1, 668, 268, 100);
    cm.spawnMobLimit(8240163, 1, 516, 268, 100);
    cm.spawnMobLimit(8240163, 1, -380, 148, 100);
    cm.spawnMobLimit(8240163, 1, 66, 268, 100);
    cm.spawnMobLimit(8240163, 1, -90, 268, 100);
    cm.spawnMobLimit(8240163, 1, -281, 268, 100);
    cm.spawnMobLimit(8240163, 1, -400, 268, 100);
    cm.spawnMobLimit(8240163, 1, -542, 268, 100);
    cm.spawnMobLimit(8240163, 1, 392, 28, 100);
    cm.spawnMobLimit(8240163, 1, 470, 28, 100);
    cm.spawnMobLimit(8240163, 1, 764, -92, 100);
    cm.spawnMobLimit(8240163, 1, 867, -92, 100);
    cm.spawnMobLimit(8240163, 1, 290, 148, 100);
    cm.spawnMobLimit(8240163, 1, 131, -32, 100);
    cm.spawnMobLimit(8240163, 1, 232, -32, 100);
    cm.spawnMobLimit(8240163, 1, 353, 268, 100);
    cm.spawnMobLimit(8240163, 1, 563, 28, 100);
    cm.spawnMobLimit(8240163, 1, -757, 268, 100);
    cm.spawnMobLimit(8240163, 1, -287, 148, 100);
    cm.spawnMobLimit(8240163, 1, -397, -32, 100);
    cm.spawnMobLimit(8240163, 1, -188, -32, 100);
    cm.spawnMobLimit(8240163, 1, -295, -32, 100);
    cm.spawnMobLimit(8240163, 1, -613, 58, 100);
    cm.spawnMobLimit(8240163, 1, -730, 58, 100);
    cm.spawnMobLimit(8240163, 1, 755, 148, 100);
    cm.spawnMobLimit(8240163, 1, -225, 148, 100);
    cm.spawnMobLimit(8240163, 1, -812, 58, 100);
    cm.spawnMobLimit(8240163, 1, 151, 148, 100);
    cm.spawnMobLimit(8240163, 1, -27, 88, 100);
    cm.spawnMobLimit(8240163, 1, 659, -92, 100);
    cm.getTopMsgFont("只有将区域内的所有怪物全都消灭掉才能够前往下一地区。", 3, 20, 20, 0);
    cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
    cm.fieldEffect_ScreenMsg("aswan/stageEff/number/1");
    cm.spawnMobLimit(8240170, 1, -529, 268, 100);
    cm.spawnMobLimit(8240170, 1, -659, 58, 100);
    cm.addPopupSay(1540807, 1000, "主人！真是一只长相奇怪的怪物！", '', 0);
    cm.addPopupSay(1540805, 1000, "没有翅膀也能飞？！比米乐你还厉害哦！", '', 0);
    cm.addPopupSay(1540807, 1000, "#face0#说不定主人也能飞呢。我从悬崖上把你扔下去吧？", '', 0);
    cm.addPopupSay(1540805, 1000, "#face6#我错了。", '', 0);
    cm.spawnMobLimit(8240172, 1, -120, 268, 100);
    cm.updateInfoQuest(33966, "break=3");
    cm.spawnMobLimit(8240163, 1, 778, 268, 100);
    cm.spawnMobLimit(8240172, 1, 417, 28, 100);
    cm.spawnMobLimit(8240172, 1, 727, 148, 100);
    cm.spawnMobLimit(8240163, 1, 1196, 268, 100);
    cm.addPopupSay(1540807, 1000, "主人，既然怪物已经把路堵死了，想必是没有人来过。", '', 0);
    cm.addPopupSay(1540805, 1000, "#face0#没关系，米乐。我们一定可以做到的。", '', 0);
    cm.addPopupSay(1540807, 1000, "主人，我好感动啊。", '', 0);
    cm.addPopupSay(1540805, 1000, '#face6#呜……', '', 0);
    cm.dispose();
  }
}
function action400(f, E, e) {
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
    cm.spawnMobLimit(8240169, 1, -458, 148, 100);
    cm.spawnMobLimit(8240169, 1, 290, 148, 100);
    cm.spawnMobLimit(8240169, 1, 872, -92, 100);
    cm.spawnMobLimit(8240168, 1, -500, -32, 100);
    cm.spawnMobLimit(8240168, 1, 454, 28, 100);
    cm.spawnMobLimit(8240167, 1, 910, 268, 100);
    cm.spawnMobLimit(8240167, 1, -50, 88, 100);
    cm.spawnMobLimit(8240162, 1, 723, -92, 100);
    cm.spawnMobLimit(8240162, 1, 811, 148, 100);
    cm.spawnMobLimit(8240162, 1, 530, 28, 100);
    cm.spawnMobLimit(8240162, 1, 657, 148, 100);
    cm.spawnMobLimit(8240162, 1, 280, -32, 100);
    cm.spawnMobLimit(8240162, 1, -171, 148, 100);
    cm.spawnMobLimit(8240162, 1, 158, 148, 100);
    cm.spawnMobLimit(8240162, 1, 239, 148, 100);
    cm.spawnMobLimit(8240162, 1, 832, -92, 100);
    cm.spawnMobLimit(8240162, 1, -609, 148, 100);
    cm.spawnMobLimit(8240162, 1, -454, 148, 100);
    cm.spawnMobLimit(8240162, 1, 160, -32, 100);
    cm.spawnMobLimit(8240162, 1, -154, -32, 100);
    cm.spawnMobLimit(8240162, 1, -321, -32, 100);
    cm.spawnMobLimit(8240162, 1, 973, 268, 100);
    cm.spawnMobLimit(8240162, 1, 794, 268, 100);
    cm.spawnMobLimit(8240162, 1, 519, 268, 100);
    cm.spawnMobLimit(8240162, 1, 678, 268, 100);
    cm.spawnMobLimit(8240162, 1, -277, 268, 100);
    cm.spawnMobLimit(8240162, 1, 344, 268, 100);
    cm.spawnMobLimit(8240162, 1, 109, 268, 100);
    cm.spawnMobLimit(8240162, 1, 240, 268, 100);
    cm.spawnMobLimit(8240162, 1, 915, 268, 100);
    cm.spawnMobLimit(8240162, 1, 915, 268, 100);
    cm.spawnMobLimit(8240162, 1, -40, 268, 100);
    cm.spawnMobLimit(8240162, 1, -587, 268, 100);
    cm.spawnMobLimit(8240162, 1, 550, 268, 100);
    cm.spawnMobLimit(8240162, 1, -22, 268, 100);
    cm.spawnMobLimit(8240162, 1, -498, -32, 100);
    cm.getTopMsgFont("只有将区域内的所有怪物全都消灭掉才能够前往下一地区。", 3, 20, 20, 0);
    cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
    cm.fieldEffect_ScreenMsg("aswan/stageEff/number/2");
    cm.spawnMobLimit(8240172, 1, -458, 148, 100);
    cm.spawnMobLimit(8240171, 1, -500, -32, 100);
    cm.addPopupSay(1540807, 1000, "主人，这些长得像蝎子一样啊？", '', 0);
    cm.addPopupSay(1540805, 1000, "和我们见过的蝎子很不一样呢。", '', 0);
    cm.addPopupSay(1540807, 1000, "是不是应该小心它们的尾巴？", '', 0);
    cm.spawnMobLimit(8240170, 1, -50, 88, 100);
    cm.spawnMobLimit(8240172, 1, 290, 148, 100);
    cm.spawnMobLimit(8240162, 1, 1209, 268, 100);
    cm.spawnMobLimit(8240162, 1, 1139, 268, 100);
    cm.spawnMobLimit(8240162, 1, 1230, 268, 100);
    cm.spawnMobLimit(8240171, 1, 454, 28, 100);
    cm.spawnMobLimit(8240172, 1, 872, -92, 100);
    cm.spawnMobLimit(8240170, 1, 910, 268, 100);
    cm.addPopupSay(1540805, 1000, '哇，尾巴真漂亮。', '', 0);
    cm.addPopupSay(1540807, 1000, "#face0#谢谢你，主人。", '', 0);
    cm.addPopupSay(1540805, 1000, "#face0#我是说蝎子啊？", '', 0);
    cm.addPopupSay(1540807, 1000, "#face2#呃呃……真气人！", '', 0);
    cm.dispose();
  }
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
    cm.spawnMobLimit(8240167, 1, -712, -62, 100);
    cm.spawnMobLimit(8240167, 1, 853, -92, 100);
    cm.spawnMobLimit(8240168, 1, 679, 148, 100);
    cm.spawnMobLimit(8240168, 1, -212, 148, 100);
    cm.spawnMobLimit(8240169, 1, 404, -92, 100);
    cm.spawnMobLimit(8240169, 1, 986, 268, 100);
    cm.spawnMobLimit(8240169, 1, 94, -32, 100);
    cm.spawnMobLimit(8240163, 1, 522, -92, 100);
    cm.spawnMobLimit(8240163, 1, 176, -32, 100);
    cm.spawnMobLimit(8240163, 1, 124, -32, 100);
    cm.spawnMobLimit(8240163, 1, 237, 88, 100);
    cm.spawnMobLimit(8240163, 1, -564, 58, 100);
    cm.spawnMobLimit(8240163, 1, -318, -32, 100);
    cm.spawnMobLimit(8240163, 1, -797, 178, 100);
    cm.spawnMobLimit(8240163, 1, -202, -32, 100);
    cm.spawnMobLimit(8240163, 1, 813, -92, 100);
    cm.spawnMobLimit(8240163, 1, 813, -92, 100);
    cm.spawnMobLimit(8240163, 1, 770, 148, 100);
    cm.spawnMobLimit(8240163, 1, 836, 28, 100);
    cm.spawnMobLimit(8240163, 1, 596, 148, 100);
    cm.spawnMobLimit(8240163, 1, 695, 148, 100);
    cm.spawnMobLimit(8240163, 1, 400, 28, 100);
    cm.spawnMobLimit(8240163, 1, 551, 28, 100);
    cm.spawnMobLimit(8240162, 1, -347, 268, 100);
    cm.spawnMobLimit(8240162, 1, 290, 208, 100);
    cm.spawnMobLimit(8240162, 1, 441, 208, 100);
    cm.spawnMobLimit(8240162, 1, -73, 268, 100);
    cm.spawnMobLimit(8240162, 1, -609, 268, 100);
    cm.spawnMobLimit(8240163, 1, -808, 58, 100);
    cm.spawnMobLimit(8240163, 1, -691, 58, 100);
    cm.spawnMobLimit(8240163, 1, -699, 178, 100);
    cm.spawnMobLimit(8240163, 1, 447, -92, 100);
    cm.spawnMobLimit(8240163, 1, -380, 148, 100);
    cm.spawnMobLimit(8240163, 1, -718, -62, 100);
    cm.spawnMobLimit(8240163, 1, 53, 88, 100);
    cm.spawnMobLimit(8240163, 1, -397, -32, 100);
    cm.spawnMobLimit(8240163, 1, 752, -92, 100);
    cm.spawnMobLimit(8240162, 1, -40, 268, 100);
    cm.spawnMobLimit(8240162, 1, 915, 268, 100);
    cm.spawnMobLimit(8240162, 1, -453, 268, 100);
    cm.getTopMsgFont("只有将区域内的所有怪物全都消灭掉才能够前往下一地区。", 3, 20, 20, 0);
    cm.fieldEffect_ScreenMsg("aswan/stageEff/final");
    cm.spawnMobLimit(8240171, 1, -212, 148, 100);
    cm.spawnMobLimit(8240170, 1, -712, -62, 100);
    cm.addPopupSay(1540807, 1000, "主人，偶尔调换一下角色怎么样呢？", '', 0);
    cm.addPopupSay(1540805, 1000, "#face0#嗯？怎么调换？", '', 0);
    cm.addPopupSay(1540807, 1000, "#face0#主人你突击的话，我为你吹气。", '', 0);
    cm.addPopupSay(1540805, 1000, "#face2#你是打算把我送到西天吗？！", '', 0);
    cm.spawnMobLimit(8240172, 1, 94, -32, 100);
    cm.spawnMobLimit(8240172, 1, 404, -92, 100);
    cm.spawnMobLimit(8240171, 1, 679, 148, 100);
    cm.spawnMobLimit(8240172, 1, 986, 268, 100);
    cm.spawnMobLimit(8240170, 1, 853, -92, 100);
    cm.addPopupSay(1540805, 1000, "#face3#如果我们能找到弗里德留下的遗物，其他英雄也会重新注意到我们的吧？", '', 0);
    cm.addPopupSay(1540807, 1000, "#face0#好主意，主人！", '', 0);
    cm.addPopupSay(1540805, 1000, "#face0#所以，米乐，突击！", '', 0);
    cm.addPopupSay(1540807, 1000, "真是刚夸一下就开始使唤人了！", '', 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;