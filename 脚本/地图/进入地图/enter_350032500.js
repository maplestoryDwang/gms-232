var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.gainSkillBuff(80001586);
    cm.teachSkill(80001586, 1, 0);
    cm.setNumberForQuestInfo(33180, "heart", 4);
    cm.setNumberForQuestInfo(33180, "stage", 0);
    cm.setNumberForQuestInfo(33180, "upgrade", 0);
    cm.setNumberForQuestInfo(33180, 'lethal0', 0);
    cm.setNumberForQuestInfo(33180, "lethal2", 0);
    cm.setNumberForQuestInfo(33180, "lethal3", 0);
    cm.setNumberForQuestInfo(33180, "clear", 0);
    cm.dispose();
    cm.黑色天堂_开始空战();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;