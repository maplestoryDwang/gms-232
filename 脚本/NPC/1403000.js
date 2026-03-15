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
      if (cm.getJob() != 2400) {
        cm.playerMessage(5, "只有成为1转幻影后才能进行转职。");
        cm.dispose();
        return;
      }
      cm.forceStartQuest(25103, '1');
      cm.updateInfoQuest(1073, "2400=10;2410=201");
      cm.teachSkill(20031209, 1, 1);
      cm.teachSkill(20031260, 1, 1);
      cm.teachSkill(24100003, 1, 10);
      cm.sendNormalTalk("让我看看……不是这本书，也不是这本……啊，在这里！就是这个！哦，马上就能转职了吗？太好了！", 3, 1403000, false, true);
    } else if (status === V++) {
      cm.gainItem(1142376, 1);
      cm.changeJob(2410);
      cm.sendNormalTalk("哦～这里还写着审判技能。这是新手技能窗中的技能吗？", 3, 1403000, true, true);
      cm.dispose();
    }
  }
}