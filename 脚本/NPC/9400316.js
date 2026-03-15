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
  if (cm.getNumberFromQuestInfo(63072, 'Start') == 0) {
    cm.sendNormalTalk("#b这是个看起来好像马上要#r投掷长枪的铜像#b。", 3, 0, false, false);
    cm.dispose();
    return;
  } else {
    if (cm.isQuestFinished(63103)) {
      cm.sendNormalTalk("#b现在变成#r手持玫瑰的铜像#b了……", 3, 0, false, true);
      cm.dispose();
      return;
    } else {
      if (cm.isQuestFinished(63102)) {
        cm.sendNormalTalk("#b我得让铜像碰到水……该怎么做……", 3, 0, false, true);
        cm.dispose();
        return;
      } else {
        if (cm.isQuestActive(63102)) {
          cm.sendNormalTalk("#b要怎么把长枪抽出来……有没有人知道。", 3, 0, false, true);
          cm.dispose();
          return;
        }
      }
    }
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
      cm.sendNormalTalk("#b这尊铜像什么时候都看都好像马上要投掷出长枪一样。", 3, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#b嗯？等等……这尊铜像……长枪部分和人体部分好像是#r分开#b的？", 3, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#b呃，也许是因为制造的年份已经很久远，连接部分变得十分硬邦邦……但应该可以抽得出来。", 3, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#b要怎么把长枪抽出来……有没有人知道。", 3, 0, true, true);
          } else if (status === V++) {
            cm.updateInfoQuest(63102, "state=1");
            cm.forceStartQuest(63102, '');
            cm.dispose();
          }
        }
      }
    }
  }
}