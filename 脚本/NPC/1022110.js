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
      if (cm.isQuestActive(22530)) {
        cm.sendNormalTalk("#m102020100# 警告牌 \r\n\r\n出没的怪物：#o1110101#。\r\n特殊事项：通向燃烧之地的三岔路。\r\n确定： ", 0, 1022110, false, true);
      } else {
        cm.playerMessage(-1, "一个怪物警示牌。");
        cm.dispose();
      }
    } else {
      if (status === V++) {
        cm.askYesNo("#b(警告牌上好像有错误的内容。在确认栏中打上O标记吧。)", 0, 1022110);
      } else {
        if (status === V++) {
          cm.forceStartQuest(22597, '1');
          cm.updateInfoQuest(22597, "1=o");
          cm.sendNormalTalk("#b（在警告牌的确认栏中标注了O）#k \r\n\r\n #m102020100# 警告牌 \r\n\r\n出没的怪物：#o1110101#。\r\n特殊事项：通向燃烧之地的三岔路。\r\n确定：O", 0, 1022110, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("确认了1个勇士部落警告牌。去向伊安报告吧。", 0, 1022110, true, true);
          } else if (status === V++) {
            cm.forceStartQuest(22597, '5');
            cm.updateInfoQuest(22597, "1=o;2=o;3=o;4=o;5=o");
            cm.dispose();
          }
        }
      }
    }
  }
}