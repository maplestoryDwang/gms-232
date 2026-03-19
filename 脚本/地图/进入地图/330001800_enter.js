var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestActive(32778)) {
    action1(f, E, e);
  } else {
    if (cm.isQuestFinished(32781) && cm.isQuestActive(32782)) {
      action2(f, E, e);
    } else if (cm.isQuestFinished(33523) && !cm.isQuestFinished(33524)) {
      action3(f, E, e);
    } else {
      cm.dispose();
    }
  }
}
function action1(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("喵，喵~~！", 37, 1530050, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("莉莉？你怎么会在这里？", 56, 0, true, true);
      } else if (status === V++) {
        cm.dispose();
      }
    }
  }
}
function action2(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1530054, 'oid=29343', -182, 95, 3, -232, -132, 5, true, false);
      cm.npc_ChangeController(1530427, "oid=29344", 980, 95, 21, 930, 1030, 1, false, false);
      cm.npc_ChangeController(1530137, "oid=29345", 501, 95, 18, 451, 551, 0, false, false);
      cm.npc_ChangeController(1530724, "oid=29346", 434, 95, 11, 384, 484, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.sendNormalTalk_Bottom("呼，终于发现了。", 57, 0, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("你一个人在这儿淋雨干什么啊？", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("……不管怎样，先拍照再说吧。现在需要的是照片。", 57, 0, true, true);
        } else if (status === V++) {
          cm.forceStartQuest(32782, '');
          cm.getTopMsgFont("打开智能手机就可以拍照了. ", 3, 20, 20, 0);
          cm.setInGameDirectionMode(false, true, false);
          cm.dispose();
        }
      }
    }
  }
}
function action3(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom('右边是布吉！', 57, 0, false, true);
    } else if (status === V++) {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;