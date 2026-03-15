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
      cm.sendNormalTalk_Bottom("#face0#好久不见。#h0#。", 36, 3003251, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face3#啊，原来你就是防毒面具！", 36, 3004323, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face2#是你的熟人吗？", 36, 3004322, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#联盟报告书里不是有提到过他嘛。你没看吗？", 36, 3004323, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face2#是这样吗？", 36, 3004322, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom('#face1#……', 36, 3004323, true, true);
              } else {
                if (status === v++) {
                  cm.askYesNo_Bottom("#face0#没时间了。先去时间塔吧，我会在路上为你讲解。", 36, 3003251);
                } else if (status === v++) {
                  cm.forceStartQuest(39715, '');
                  cm.dispose();
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