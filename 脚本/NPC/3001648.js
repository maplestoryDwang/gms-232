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
      if (cm.getNumberFromQuestInfo(39566, "clear") > 0) {
        cm.sendNormalTalk_Bottom("#face0#这里似乎没什么要办的事了。", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1);
      } else {
        if (cm.getNumberFromQuestInfo(39566, 'dir') > 0) {
          if (cm.getNumberFromQuestInfo(39566, 'gochi2') > 0) {
            cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#（在扭曲空间的那一头看到怪物的影子，这就过去看看吧？）", 36, 3001674 + cm.getPlayer().getGender(), 1);
          } else {
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（在进入扭曲空间之前，先找到其他蚕茧吧。）", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1);
          }
        } else if (cm.getNumberFromQuestInfo(39566, 'do') > 0) {
          cm.askAcceptDecline_Bottom("#face0##fc0xFFbfbfbf#（在扭曲空间的那一头看到怪物的影子，这就过去看看吧？）", 36, 3001674 + cm.getPlayer().getGender(), 1);
        } else {
          cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（在进入扭曲空间之前，最好和饕餮商量一下。）", 36, 3001674 + cm.getPlayer().getGender(), false, true, 1);
          cm.dispose();
        }
      }
    } else if (status === V++) {
      cm.dispose();
      cm.warp(993160165, 0, false);
    }
  }
}