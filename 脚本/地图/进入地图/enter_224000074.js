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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(2074105, "oid=1943044", 694, -11, 8, 644, 744, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1943044", "summon", 0, 0);
      cm.npc_ChangeController(2074100, "oid=1943045", 593, -11, 23, 543, 643, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1943045", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 619, 44);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#朴大爷！", 37, 2074100, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=1943045"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#朴大爷？", 37, 2074100, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=1943044", -1);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1943044"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("哦？你怎么会在这里！\r\n这家伙！又跟着我来了啊，我让你不要来了。", 37, 2074105, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("这个吗？\r\n嗯……这东西可相当危险，你可别感兴趣。", 37, 2074105, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("哟呵！！我让你别感兴趣！\r\n这东西可是相当可怕的，嗯？你说会变成什么样？\r\n要是不小心碰了它啊……", 37, 2074105, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("就会在不知不觉间迷失了自己，\r\n又可能变得和原来的自己完全不一样。", 37, 2074105, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("这东西可是相当厉害，所以你可千万不要感兴趣。", 37, 2074105, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#爷爷，那是……什么意思啊？\r\n这里到底是哪里……", 37, 2074100, true, true);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 300, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else if (status === V++) {
                                cm.dispose();
                                cm.warp(224000075, 0, true);
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
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;