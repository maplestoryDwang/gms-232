var status = -1;
var selectionLog = [];
function start(Q, k, S) {
  if (status == 0 && Q == 0) {
    cm.dispose();
    return;
  }
  if (Q == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = S;
  var n = -1;
  if (status <= n++) {
    cm.dispose();
  } else if (status == n++) {
    cm.sendNormalTalk("粉红豆数量不足。\r\n\r\n#b#e※只有使直播活动的订阅粉丝数达到每日上限，并获得超过300个以上粉红豆的勇士才可参加春节活动。#n#k", 5, 9401512, false, false, 0);
    cm.dispose();
  }
}
function stage0(Q, k, S) {
  if (status == 0 && Q == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = S;
  var n = -1;
  if (status <= n++) {
    cm.dispose();
  } else {
    if (status == n++) {
      cm.askYesNo("");
    } else if (status == n++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(Q, k, S) {
  if (status == 0 && Q == 0) {
    cm.dispose();
    return;
  }
  if (Q == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = S;
  var n = -1;
  if (status <= n++) {
    cm.dispose();
  } else {
    if (status == n++) {
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == n++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}