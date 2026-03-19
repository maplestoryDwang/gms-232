var status = -1;
var selectionLog = [];
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
      cm.updateInfoQuest(34437, "c0=1;c1=1;c2=1;c3=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.sendNormalTalk_Bottom("#b（这一层好像是高档店，说不定会有明星原石，去慢慢挖掘吧。）", 57, 0, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNewEffects(1, [0, 0, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, -450, 249);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(2, 450);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1600);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction5.img/effect/Kerning/peri/0", 0, 1000, 0, -90, 12, 4, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#啦啦，啦啦啦~啦啦啦啦~", 37, 1052233, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#没错，这里就这样连着唱，这里的调子要再高一点才行。", 37, 1052233, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#b（在嘈杂的环境下依然注意力惊人，似乎在进行着与音乐相关的工作。）", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b（也许她具备着当明星的潜质，不妨去和她聊一聊这件事吧。）", 57, 0, true, true);
                        } else if (status === V++) {
                          cm.dispose();
                          cm.updateInfoQuest(34410, "done=1");
                          cm.warp(103041120, 0);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;