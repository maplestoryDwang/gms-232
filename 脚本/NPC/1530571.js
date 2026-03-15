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
      cm.sendNormalTalk_Bottom(" 亲爱的~ 我们去假粘华玩游乐项目吧! ", 37, 1530300, false, true, 1);
      cm.effect_Voice("Voice2.img/Friends/HID_03/1", 100);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom(" 嗯嗯, 小宝贝~ 假粘华? 在哪个国家啊? ", 37, 1530270, true, true, 1);
        cm.effect_Voice("Voice2.img/Friends/HID_03/2", 100);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom(" 你干什咩, 你在嘲笑我的发音吗? 我生气啦! ", 37, 1530300, true, true, 1);
          cm.effect_Voice("Voice2.img/Friends/HID_03/3", 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom(" 揭发情侣. ", 57, 0, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom(" 唔啊啊啊! ", 37, 1530571, true, true, 1);
              cm.effect_Voice("Voice2.img/Friends/HID_03/14", 100);
            } else {
              if (status === V++) {
                cm.setNumberForQuestInfo(33048, 'c1', 1);
                var w = cm.addNumberForQuestInfo(33048, "count", 1);
                cm.forceCompleteQuest(33051);
                cm.getTopMsgFont('已经发现了情侣' + w + "次. ", 3, 20, 20, 0, 0);
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