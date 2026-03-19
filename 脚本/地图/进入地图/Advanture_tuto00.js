var status = -1;
function action(f, E, e) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  switch (status) {
    case 0:
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      break;
    case 1:
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/tuto/BalloonMsg0/0"], [2100, 0, -100]);
      cm.inGameDirectionEvent_AskAnswerTime(2100);
      break;
    case 2:
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(420);
      break;
    case 3:
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(420);
      break;
    case 4:
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(420);
      break;
    case 5:
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg0/1"], [2100, 0, -100]);
      cm.inGameDirectionEvent_AskAnswerTime(2100);
      break;
    case 6:
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/tuto/BalloonMsg0/1"], [2100, 0, -100]);
      cm.inGameDirectionEvent_AskAnswerTime(2100);
      break;
    case 7:
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/tuto/key/0"], [3000000, -300, 0, 1, 0, 1, 1, 0]);
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/tuto/key/0"], [3000000, 0, 0, 1, 0, 1, 1, 0]);
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/tuto/key/0"], [3000000, 300, 0, 1, 0, 1, 1, 0]);
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/tuto/key/1"], [3000000, 540, 70, 1, 0, 1, 1, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      break;
    case 8:
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction3.img/effect/tuto/BalloonMsg0/2"], [2100, 0, -100]);
      cm.inGameDirectionEvent_AskAnswerTime(2100);
      break;
    case 9:
      cm.topMsg("按[←]、[→]键，可以进行移动。");
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      break;
    case 10:
      cm.topMsg("移动到有传送口的地点后按[↑]键，可以移动至下一地图。");
      cm.forceStartQuest(32200);
      cm.forceCompleteQuest(32200);
      cm.setInGameDirectionMode(false, true);
      cm.setStandAloneMode(false);
      cm.dispose();
      cm.enableActions();
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