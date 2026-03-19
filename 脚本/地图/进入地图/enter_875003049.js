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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_同时移动镜头和人(1, 50);
      cm.setMobImage("SoundEffWz2.img/Mukhyun/shout2", 100);
      cm.sendNormalTalk_Bottom("呃哈啊啊啊啊！", 37, 9401287, false, true, 1);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom('哈哈！！！！！！！', 37, 9401288, true, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("速度太慢了！再快点！", 37, 9401285, true, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("呃啊啊啊！", 37, 9401304, true, true, 1);
          } else {
            if (status === V++) {
              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
              cm.sendNewEffects(17, [1000, 1000, 2000, 535, 35]);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                  cm.sendNormalTalk_Bottom("#face5##b哈……太好了……太好了。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(900);
                  } else {
                    if (status === V++) {
                      cm.sendNewEffects(14, [0, 2000, 1000]);
                    } else {
                      if (status === V++) {
                        cm.sendNewEffects(19, [0]);
                      } else if (status === V++) {
                        cm.updateInfoQuest(65971, "rMap=211000000;chk=1");
                        cm.updateInfoQuest(65971, "rMap=211000000;chk=1;obj=1");
                        cm.dispose();
                        cm.warp(875000020, 0, false);
                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                        cm.setInGameDirectionMode(false, true, false);
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
  }
}