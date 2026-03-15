var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.forceStartQuest();
      if (cm.getMap().countMonsterById(9306105) == 0) {
        var e = em.getMonster(9306105);
        e.changeLevel(cm.getPlayer().getLevel());
        cm.getMap().spawnMonsterOnGroundBelow(e, new java.awt.Point(1175, 95));
      }
      cm.dispose();
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("影子怪物消灭掉了吗？", 0, 9075202);
    } else if (status === v++) {
      cm.forceStartQuest(1840, '11');
      cm.forceCompleteQuest();
      cm.sendNormalTalk("成功地完成了选择程序。", 0, 9075202, false, true);
      cm.gainItem(4310060, 3);
      cm.dispose();
    }
  }
}