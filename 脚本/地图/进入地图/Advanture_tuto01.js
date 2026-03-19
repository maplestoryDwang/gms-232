var status = -1;
function action(f, E, e) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  switch (status) {
    case 0:
      cm.resetMap(cm.getMapId());
      cm.spawnReactorOnGroundBelow(1008010, 365, 216);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      break;
    case 1:
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/tuto/BalloonMsg0/3"], [2100, 0, -100]);
      cm.inGameDirectionEvent_AskAnswerTime(2100);
      break;
    case 2:
      cm.topMsg("按[Ctrl]可进行一般攻击。");
      cm.forceStartQuest(32201);
      cm.setInGameDirectionMode(false);
      cm.dispose();
      break;
    default:
      cm.dispose();
      break;
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;