var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    if (cm.getQuestStatus(6180) == 1) {
      cm.sendOk("Good. I'll send you to shield training field. Talk to me again.");
    } else {
      cm.dispose();
    }
  } else if (status == 1) {
    cm.warp(924000000, 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;