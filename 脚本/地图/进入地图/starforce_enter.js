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
  } else {
    if (status === V++) {
      if (cm.isQuestActive(3463)) {
        cm.forceStartQuest(3463, '1');
        cm.updateInfoQuest(3463, "1=0");
        cm.updateInfoQuest(25973, "1=0");
        cm.sendNormalTalk("(没有发现流星坠落的痕迹。不过，总觉得怪物们好像和之前不太一样……去狩猎怪物吧。)", 2, 0, false, true);
      } else {
        if (cm.isQuestActive(3881)) {
          cm.forceStartQuest(3881, '1');
          cm.updateInfoQuest(3881, '1=0');
          cm.updateInfoQuest(25973, '1=0');
          cm.sendNormalTalk("(那里与之前没有什么差别. 不过, 总觉得怪物们好像和之前不太一样……去狩猎怪物吧. )", 2, 0, false, true);
        } else if (cm.isQuestActive(3875)) {
          cm.forceStartQuest(3875, '1');
          cm.updateInfoQuest(3875, "1=0");
          cm.updateInfoQuest(25973, "1=0");
          cm.sendNormalTalk("(没有发现山崩的征兆. 不过, 总觉得怪物们好像和之前不太一样……去狩猎怪物吧. )", 2, 0, false, true);
        }
      }
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;