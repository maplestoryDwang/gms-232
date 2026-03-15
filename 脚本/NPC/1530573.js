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
      cm.sendNormalTalk_Bottom(" 亲爱的, 我想要一朵花! ", 37, 1530300, false, true, 1);
      cm.effect_Voice("Voice2.img/Friends/HID_03/9", 100);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom(" 唔, 不行, 亲爱的, 你不是已经有花了嘛. ", 37, 1530270, true, true, 1);
        cm.effect_Voice("Voice2.img/Friends/HID_03/10", 100);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("什咩, 你什咩意思啊, 你是说我的脸大得像朵花? ", 37, 1530300, true, true, 1);
          cm.effect_Voice("Voice2.img/Friends/HID_03/11", 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("怎么会呢……我是说, 我不是把我这颗如火花一般的心整个都交给你了嘛! ", 37, 1530270, true, true, 1);
            cm.effect_Voice("Voice2.img/Friends/HID_03/12", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom(" 哇~~~ 真的? 真的吗? ", 37, 1530300, true, true, 1);
              cm.effect_Voice("Voice2.img/Friends/HID_03/13", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom(" 揭发情侣. ", 57, 0, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom(" 唔啊啊啊! ", 37, 1530571, true, true, 1);
                  cm.effect_Voice("Voice2.img/Friends/HID_03/14", 100);
                } else {
                  if (status === V++) {
                    cm.setNumberForQuestInfo(33048, 'c3', 1);
                    var w = cm.addNumberForQuestInfo(33048, "count", 1);
                    cm.forceCompleteQuest(33053);
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