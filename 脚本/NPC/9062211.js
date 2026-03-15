var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      var w = cm.getNumberFromQuestInfo(100355, "ready");
      if (w == 0) {
        cm.sendOk_Bottom("请在我对古书进行分类的时候，多收集一些古代魔力吧！");
        cm.dispose();
      } else {
        cm.askYesNo_Bottom("#b#h0##k，你做好启程准备了吗？\r\n#r#e要现在启程吗？#n#k", 9062211);
      }
    } else {
      if (status === V++) {
        cm.spawnMobLimit(9833668, 1, 548, -273, 1);
        cm.spawnMobLimit(9833699, 1, -52, 283, 3);
        cm.spawnMobLimit(9833699, 1, 1394, 6, 3);
        cm.spawnMobLimit(9833666, 1, -821, -6, 1);
        cm.spawnMobLimit(9833699, 1, 445, -236, 3);
        var N = em.getMonster(9833667);
        N.setStance(2);
        N.setFh(65);
        N.setOriginFh(65);
        cm.getMap().spawnMonsterWithEffectBelow(N, new java.awt.Point(-831, 283), -1);
        cm.getMap().spawnReactorIfNotExist(9939045, 0, 1276, -496, 1, "scriptSummonReactor");
        cm.getWeatherEffectNotice("开始移动了。搬运古书的时候，请好好保护我！", 297, 8000, 1);
        cm.playerMessage(5, "开始移动了。搬运古书的时候，请好好保护我！");
        cm.setNumberForQuestInfo(100355, 'phase', 2);
        cm.cerniumProtectBookStart(1);
        cm.addPopupSay(9062211, 2000, "哇……没想到传说位于禁区的#r受诅咒的古书#k竟真实存在。", '', 0);
        cm.addPopupSay(9062211, 2000, "此地的攻击无法用冒险岛世界的魔法来抵挡。请你用#b古代保护魔法#k来护卫我。", '', 0);
        cm.addPopupSay(9062211, 2000, "如果被受诅咒的古书里产生的#r吸入旋风#k击中，好不容易分类好的书就会被吹飞。", '', 0);
        cm.dispose();
      }
    }
  }
}