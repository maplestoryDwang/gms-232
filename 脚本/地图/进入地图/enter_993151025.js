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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.sendNormalTalk_Bottom("#face0#王子殿下，我们已经无路可退了。", 37, 3004437, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#闪电的威力越来越强了。", 37, 3004437, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face1#没想到会到这种程度……", 37, 3004433, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#灾难……我大概知道塞伦为什么会那么说了。", 37, 3004436, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("(不行。如果不打倒那个闪电使徒……)", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#可以了，#h0#。", 37, 3004434, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("艾伦？", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#时机已到。", 37, 3004434, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#只要能找回圣剑之光……", 37, 3004444, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#守护者大人……", 37, 3004442, true, true);
                          } else if (status === V++) {
                            cm.eventSKill(0);
                            cm.warp(993151033, 0, true);
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
      }
    }
  }
}