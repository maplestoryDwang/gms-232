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
      cm.sendNormalTalk_Bottom("#face0#我说，该隐，有急事。", 36, 3001250, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#我找到了那个知道如何解开项圈的人，先行告诉了你的朋友伊林，\r\n此人的身份尚没有查清，只不过……", 36, 3001250, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#看样子你的朋友急坏了，貌似独自一人去见那个人了。", 36, 3001250, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face2#难道说不定这是个陷阱？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#这就不得而知了。", 36, 3001250, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#看样子是想要在如今空荡荡的德拉卡兹据点接头。", 36, 3001250, true, true, 1);
              } else {
                if (status === v++) {
                  cm.askAcceptDecline_Bottom("#face2##fc0xFFbfbfbf#(要去找伊林才行。)\r\n\r\n #r※自动前往任务地图。#k", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, 1);
                } else if (status === v++) {
                  cm.dispose();
                  cm.warp(993164053, 0, false);
                }
              }
            }
          }
        }
      }
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}