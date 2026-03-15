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
      cm.sendNormalTalk_Bottom("#face0#你……你是凯拉德……？", 36, 2570130, false, true, 1);
    } else {
      if (status === v++) {
        cm.askAcceptDecline_Bottom("#face0#你该不是想进去吧？", 36, 2570130, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#即便是你，现在进去也无异于自寻死路。", 36, 2570130, false, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("也许吧……。", 56, 0, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("但我也不能坐视不管。", 56, 0, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("(向#b右侧#k移动。)", 56, 0, true, true, 1);
              } else if (status === v++) {
                cm.forceStartQuest(37804, '');
                cm.dispose();
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
      cm.sendNormalTalk_Bottom("#face0#右侧通道没发现什么特别的。", 36, 2570101, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#左侧通道也一样。没人见到#b王子殿下#k。", 36, 2570105, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#有人说在水路中看到了陛下的尸体。\r\n目前可能没法去帮他料理后事。", 36, 2570103, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("嗯……", 56, 0, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#没有人见到王子殿下。", 36, 2570103, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("那就只剩下一个地方了。", 56, 0, true, true, 1);
              } else if (status === v++) {
                cm.forceCompleteQuest(37804);
                cm.updateInfoQuest(37804, 'exp=1');
                cm.gainExp(5872020);
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}