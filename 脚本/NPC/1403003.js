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
      if (cm.getJob() != 2411) {
        cm.playerMessage(5, "只有成为3转幻影后才能进行转职。");
        cm.dispose();
        return;
      }
      cm.updateInfoQuest(1073, "2400=10;2410=201;2411=201;2412=201");
      cm.teachSkill(20031209, 0, 1);
      cm.teachSkill(20031209, -1, 0);
      cm.teachSkill(20031210, 1, 1);
      cm.forceStartQuest(25124, '1');
      cm.sendNormalTalk("……真是让人怀念的面孔。长得傻头傻脑的，看上去像傻瓜一样。对了，技能书就藏在后面。她还说这种东西谁会偷走，哈……真是的。", 3, 1403003, false, true);
    } else if (status === V++) {
      cm.gainItem(1142378, 1);
      cm.playerMessage(5, "审判技能升级了。");
      cm.changeJob(2412);
      cm.dispose();
    }
  }
}