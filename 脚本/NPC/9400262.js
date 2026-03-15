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
  f == 1 ? status++ : status--;
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++)
    cm.dispose();
  else if (status === V++) {
    var w = cm.getNpc() - 9400256;
    var N = 4036000 + w;
    if (cm.getNumberFromQuestInfo(63099, 'door') == 12) {
      cm.playerMessage(-1, '所有的锁全部打开，巨门缓缓开启。');
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 3000, 0);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
    } else if (cm.getNumberFromQuestInfo(63094, '' + w) > 0) {
      cm.dispose();
      cm.playerMessage(5, '已经打开了这把锁。');
    } else if (cm.haveItem(N)) {
      cm.dispose();
      cm.afterlandChangeMapObject('Key' + w + '_Open', 1, 1, 3000, 0, 0, 0, 0);
      cm.afterlandChangeMapObject('Key' + w + '_Close', 1, 0, 3000, 0, 0, 0, 0);
      cm.playerMessage(-1, '锁发出哐-的一声，打开了。');
      cm.addNumberForQuestInfo(63099, 'door', 1);
      cm.addNumberForQuestInfo(63094, '' + w, 1);
      cm.gainItem(N, -1);
    } else {
      cm.dispose();
      cm.isQuestActive(63032) && cm.addNumberForQuestInfo(63032, 'click', 1, 0, 12);
      cm.playerMessage(5, '没有可以开门的钥匙。');
    }
  } else if (status === V++) {
    var u = cm.getNumberFromQuestInfo(63099, 'enterQ');
    if (u == 1)
      cm.warp(867113603, 1, true);
    else if (u == 2)
      cm.warp(867113613, 2, true);
    else if (u == 3) {
      cm.warp(867113623, 1, true);
    } else {
      cm.warp(867113633, 1, true);
    }
    cm.dispose();
    cm.setInGameDirectionMode(false, true, false);
    if (cm.getQuestStatus(63086) == 0) {
      cm.forceStartQuest(63086, '');
      cm.updateInfoQuest(63086, 'first=1');
    }
  }
}