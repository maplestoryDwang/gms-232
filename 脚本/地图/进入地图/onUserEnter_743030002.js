var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/balloonMsg9/0"], [2000, 0, -100, 0, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("呵。时间已经到了…，父亲还没回来。也没看到秀禾，秀禾。", 3, 9330204, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("到这么晚时间… 到底怎么回事呢?", 3, 9330204, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else if (status === V++) {
              cm.dispose();
              cm.warp(743020201, 0, false);
              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
              cm.setInGameDirectionMode(false, true, false);
            }
          }
        }
      }
    }
  }
}