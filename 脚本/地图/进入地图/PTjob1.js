var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  if (f === 0 && status !== 0) {
    status--;
  } else {
    status++;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.getJob() == 2003) {
        while (cm.getLevel() < 10) {
          cm.getPlayer().levelUp();
        }
        cm.changeJob(2400);
        cm.forceCompleteQuest(25000);
        cm.teachSkill(20031211, -1, 0);
        cm.teachSkill(20031212, -1, 0);
      }
      cm.dispose();
    }
  }
}