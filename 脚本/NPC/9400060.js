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
      if (cm.getNumberFromQuestInfo(59746, 'chk2') == 1) {
        cm.npc_LeaveField('oid=116639');
        cm.updateInfoQuest(59746, "chk1=1;chk2=1;chk3=1");
        cm.forceCompleteQuest(59749);
        cm.sendNextSNoESC_Bottom("好，现在笔记本的这一页也写满了吗？");
      } else {
        cm.sendOkSNoESC_Bottom("先去其他地方张贴吧。待会再来看看这里。");
        cm.dispose();
      }
    } else if (status === V++) {
      cm.forceCompleteQuest(59704);
      cm.updateInfoQuest(59761, "1=1;2=1;3=1;4=1;5=1");
      cm.setStandAloneMode(false);
      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess");
      cm.warp(cm.getNumberFromQuestInfo(59744, "map"), 0);
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
      cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
      cm.dispose();
    } else {
      cm.dispose();
    }
  }
}