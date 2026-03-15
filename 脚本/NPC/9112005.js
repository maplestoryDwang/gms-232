var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  var V = 'action' + cm.getMapId();
  eval(V)(f, W, U);
}
function action800020001(f, W, U) {
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
      cm.sendNormalTalk("#b(森林完全毁掉了。这里似乎发生过相当激烈的战斗。)#k", 2, 9112005, false, true);
      if (cm.getNumberFromQuestInfo(58723, "pt1") > 0) {
        cm.dispose();
      } else {
        cm.updateInfoQuest(58723, "pt1=1");
      }
    } else if (status === V++) {
      cm.playerMessage(-1, "<请通过传送口移动到下个地图。");
      cm.dispose();
    }
  }
}
function action800020002(f, W, U) {
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
      cm.sendNormalTalk("#b(是狸猫妖怪。它看起来已经精疲力竭了。\r\n狸猫妖怪们是跟谁起冲突了呢……？)#k", 2, 9112005, false, true);
      if (cm.getNumberFromQuestInfo(58723, "pt2") > 0) {
        cm.dispose();
      } else {
        cm.updateInfoQuest(58723, "pt1=1;pt2=1");
      }
    } else if (status === V++) {
      cm.playerMessage(-1, "<请通过传送口移动到下个地图。");
      cm.dispose();
    }
  }
}