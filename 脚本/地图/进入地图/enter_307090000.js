var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(3500);
        cm.effect_Text(["#fn黑体##fs20#艾……艾……"], [50, 2200, 4, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(3500);
          cm.effect_Text(["#fn黑体##fs20#艾……艾特……"], [50, 2200, 4, -50, -50, 1, 4, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("不知道你在说什么。我的名字是纳因。", 37, 2560008, false, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
                cm.effect_PlayMusic("Skill.img/101000200/Use");
              } else {
                if (status === V++) {
                  var O = cm.getJob();
                  if (Math.floor(O / 100) == 101) {
                    cm.inGameDirectionEvent_SetHideEffect(0);
                    cm.sendNormalTalk_Bottom("#face7#这……不是我吗？", 45, 1540421, false, true);
                  } else {
                    cm.dispose();
                    cm.warp(307090001, 0, true);
                  }
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face7#难道是发生在影子村的故事吗？", 45, 1540421, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face13#真有趣。", 45, 1540422, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face7#有什么我不知道的东西吗？", 45, 1540421, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face13#先看看再说。", 45, 1540421, true, true);
                        } else if (status === V++) {
                          cm.dispose();
                          cm.warp(307090001, 0, true);
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