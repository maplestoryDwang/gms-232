var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(a, p, A) {
  if (status == 0 && a == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = A;
  var S = -1;
  if (status <= S++) {
    cm.dispose();
  } else {
    if (status === S++) {
      if (cm.getQuestStatus(7707) == 2) {
        cm.dispose();
        return;
      }
      cm.monadForceMove("spriteFlower", 0, 0);
      cm.onSetMapObjectMove("spineFlower", [1, 255, 0]);
      cm.teachSkill(80011957, 1, 1);
      cm.teachSkill(80002323, 0, -1);
      cm.teachSkill(80002323, 1, 1);
      cm.forceCompleteQuest(63500);
      cm.forceCompleteQuest(100297);
      cm.forceCompleteQuest(65480);
      cm.forceCompleteQuest(65590);
      cm.forceCompleteQuest(501015);
      cm.forceCompleteQuest(65463);
      cm.forceCompleteQuest(65590);
      cm.forceCompleteQuest(7707);
      cm.dispose();
      cm.openNpc(9110002, "啦啦任务检测");
    }
  }
}