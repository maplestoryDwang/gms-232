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
      cm.askMenu("哈哈！看来你需要我的帮助啊？喵呜！\r\n#b\r\n#L0#我想强化或制作V核心。#l\r\n#L1#没什么，今天天气真好啊 。#l", 0, 3003159);
    } else {
      if (status === V++) {
        cm.dispose();
        if (U == 0) {
          cm.openUI(1131);
          if (cm.getInfoQuest(39387).length > 0 && cm.getNumberFromQuestInfo(39387, 'q') == 0) {
            cm.updateInfoQuest(39387, "q=1");
          }
        } else if (U == 1) {
          cm.sendNormalTalk("哈哈！如果你需要帮助，可以随时来找我！", 0, 3003159, false, false);
        }
      } else {
        cm.dispose();
      }
    }
  }
}