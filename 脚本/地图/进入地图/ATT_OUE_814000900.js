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
    cm.sendNextSNoESC_New("K 还没好吗? 被其他人发现会很麻烦的…", 57, 1);
  } else {
    if (status == 1) {
      cm.curNodeEventEnd(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status == 2) {
        cm.fieldEffect_Tremble(0, 300, 30);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
        cm.spawnMonster(9460030, 0, 215);
      } else {
        if (status == 3) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 1000, -84, 133);
        } else {
          if (status == 4) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status == 5) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status == 5) {
                cm.sendNextSNoESC_New("那是什么！？怎么会有如此大的巨人…！！", 57, 1);
                cm.fieldEffect_Tremble(0, 300, 30);
              } else {
                if (status == 6) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status == 7) {
                    cm.sendNextSNoESC_New("啊啊！！", 57, 1);
                  } else if (status == 8) {
                    cm.killMob(9460030);
                    cm.updateInfoQuest(58464, "end=1");
                    cm.setInGameDirectionMode(false);
                    cm.setStandAloneMode(false);
                    cm.warp(814000000, 0);
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;