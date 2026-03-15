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
      cm.sendNormalTalk_Bottom("亲爱的, 你没发觉我有什么变化咩? ", 37, 1530300, false, true, 1);
      cm.effect_Voice("Voice2.img/Friends/HID_03/4", 100);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom(" 嗯, 看不出来~! ", 37, 1530270, true, true, 1);
        cm.effect_Voice("Voice2.img/Friends/HID_03/5", 100);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom(" 哼! 你说什咩, 我生气啦! ", 37, 1530300, true, true, 1);
          cm.effect_Voice("Voice2.img/Friends/HID_03/6", 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom(" 啊哈, 我的小宝贝, 你的刘海和以前不一样了嘛! 宝贝你的美丽如此~耀眼, 让我都睁不开眼睛了呢! ", 37, 1530270, true, true, 1);
            cm.effect_Voice("Voice2.img/Friends/HID_03/7", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom(" 真的? 真的吗? ", 37, 1530300, true, true, 1);
              cm.effect_Voice("Voice2.img/Friends/HID_03/8", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom(" 揭发情侣. ", 57, 0, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom(" 唔啊啊啊! ", 37, 1530571, true, true, 1);
                  cm.effect_Voice("Voice2.img/Friends/HID_03/14", 100);
                } else {
                  if (status === V++) {
                    cm.setNumberForQuestInfo(33048, 'c2', 1);
                    var w = cm.addNumberForQuestInfo(33048, "count", 1);
                    cm.forceCompleteQuest(33052);
                    cm.getTopMsgFont("已经发现了情侣" + w + "次. ", 3, 20, 20, 0, 0);
                    if (w < 3) {
                      cm.dispose();
                    } else {
                      cm.sendNormalTalk_Bottom(" 你为什么要这样对我们! ", 37, 1530270, true, true, 1);
                    }
                    cm.effect_Voice("Voice2.img/Friends/HID_03/15", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom(" 让我们自由恋爱吧~! 呜呜……", 37, 1530300, true, false, 1);
                      cm.effect_Voice("Voice2.img/Friends/HID_03/16", 100);
                    } else if (status === V++) {
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
  }
}