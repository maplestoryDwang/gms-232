var status = -1;
function action(f, E, e) {
  if (f > 0) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true);
    cm.setStandAloneMode(true);
    cm.sendNextSNoESC_New("到底是怎么回事？吃人的巨人!！而且还赤裸裸…不，这不是重点…现在我要去哪里才好呢？", 57, 1);
  } else {
    if (status == 1) {
      cm.curNodeEventEnd(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status == 2) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 4000, -320, 0);
      } else {
        if (status == 3) {
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status == 4) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status == 5) {
              cm.sendNextSNoESC_New("啊！在那里一群人在坐船！好像是搭上那个船离开这村庄的样子. 很好，我也要搭上那艘船离开这里！竟然说会是个有趣的冒险，根本就骗人的嘛!!!", 57, 1);
            } else if (status == 6) {
              cm.setInGameDirectionMode(false);
              cm.setStandAloneMode(false);
              cm.dispose();
            } else {
              cm.dispose();
            }
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;