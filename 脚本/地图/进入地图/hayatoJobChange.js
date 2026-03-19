function action(f, E, e) {
  cm.dispose();
  if (cm.getJob() == 4001) {
    while (cm.getLevel() < 10) {
      cm.getPlayer().levelUp();
    }
    cm.changeJob(4100);
  } else {
    if (cm.getJob() == 4002) {
      while (cm.getLevel() < 10) {
        cm.getPlayer().levelUp();
      }
      cm.changeJob(4200);
    }
  }
  var V = cm.getJob();
  if (V == 4002 || V == 4200 || V == 4210 || V == 4211 || V == 4212) {
    cm.hideNpc(9130031);
  } else {
    cm.hideNpc(9130082);
  }
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;