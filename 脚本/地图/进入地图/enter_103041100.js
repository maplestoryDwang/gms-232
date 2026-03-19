var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestActive(34418) && "find1=1;s1=1" === cm.getInfoQuest(34436)) {
    action3(f, E, e);
  } else {
    cm.dispose();
  }
}
function action3(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.updateInfoQuest(34436, "find1=1;find2=1;s1=1");
      cm.sendNormalTalk("#b（好像也不在这里啊，说不定是去练习室了。#k", 2, 0, false, false);
    } else if (status === V++) {
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;