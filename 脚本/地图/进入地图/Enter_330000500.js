var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestActive(32758) && cm.getQuestStatus(32736) == 0) {
    action1(f, E, e);
  } else if (cm.isQuestActive(33015)) {
    action2(f, E, e);
  } else {
    cm.forceForfeitQuest(32792);
    cm.dispose();
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
      cm.sendNormalTalk_Bottom("喵~！喵~喵！", 37, 1530050, false, true);
    } else if (status === V++) {
      cm.sendNormalTalk_Bottom("那是……猫咪？那猫咪的叫声怎么有些奇怪？", 56, 0, true, true);
    } else {
      cm.dispose();
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
      cm.sendNormalTalk_Bottom("是你吗？", 37, 1530212, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom('什么……不是啊……？', 37, 1530303, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("我问你，我的信是不是被你撕的。真的不是你？那你为什么不敢直视我的眼睛？", 37, 1530212, true, true);
        } else if (status === V++) {
          cm.gainExp(Math.pow(cm.getLevel(), 3));
          cm.forceCompleteQuest(33015);
          cm.dispose();
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;