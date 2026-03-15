var status = -1;
var selectionLog = [];
function start(S, v, Z) {
  if (status == 0 && S == 0) {
    cm.dispose();
    return;
  }
  if (S == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = Z;
  var y = -1;
  if (status <= y++) {
    cm.dispose();
  } else {
    if (status == y++) {
      cm.sendNormalTalk("#e#b#h0##k#n，2022年到了，新的一年又开始了。\r\n祝你新年快乐！", 5, 9401512, false, true, 0);
    } else {
      if (status === y++) {
        cm.sendNormalTalk("祝你新年快乐！", 17, 0, true, true, 0);
      } else {
        if (status === y++) {
          cm.sendNormalTalk("真心祝福你每天开心快乐。", 5, 9401512, true, true, 0);
        } else {
          if (status === y++) {
            cm.sendNormalTalk("为了庆祝新年的到来，我准备了许多活动和礼物。", 5, 9401512, true, true, 0);
          } else {
            if (status === y++) {
              cm.askYesNo("不想和我一块儿度过一个开心的新年吗？", 5, 9401512);
            } else {
              if (status === y++) {
                cm.sendNormalTalk("那就让我们来过一个开心的新年吧！\r\n\r\n#b#e※ 只有使直播活动的订阅粉丝数达到每日上限，并获得超过300个以上粉红豆的勇士才可参加春节活动。#n#k", 5, 9401512, false, true, 0);
              } else if (status === y++) {
                cm.forceCompleteQuest(66409);
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}
function stage0(S, v, Z) {
  if (status == 0 && S == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = Z;
  var y = -1;
  if (status <= y++) {
    cm.dispose();
  } else {
    if (status == y++) {
      cm.askYesNo("");
    } else if (status == y++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(S, v, Z) {
  if (status == 0 && S == 0) {
    cm.dispose();
    return;
  }
  if (S == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = Z;
  var y = -1;
  if (status <= y++) {
    cm.dispose();
  } else {
    if (status == y++) {
      var N = cm.getQuest();
      cm.askYesNo("");
    } else if (status == y++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}