var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    cm.dispose();
    return;
  }
  if (status == 0) {
    cm.sendNextNoESC("好了，现在出发！");
  } else {
    if (status == 1) {
      cm.npc_LeaveField(1096012);
      cm.fieldEffect_PlayFieldSound("cannonshooter/fire");
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/flying/0"], [0, 0, 0]);
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction4.img/effect/cannonshooter/flying1/0"], [2000, 0, -100, 1, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(800);
    } else if (status == 2) {
      cm.forceCompleteQuest(2572);
      cm.warp(912060300, 0);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;