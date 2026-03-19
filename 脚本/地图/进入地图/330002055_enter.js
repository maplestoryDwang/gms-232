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
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530060, "oid=20440617", 640, 58, 2, 590, 690, 1, true, false);
      cm.npc_SetSpecialAction("oid=20440617", 'summon', 0, 0);
      cm.npc_ChangeController(1530070, "oid=20440618", 547, 58, 2, 497, 597, 0, true, false);
      cm.npc_SetSpecialAction("oid=20440618", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 600, 58);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(283);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2500);
              cm.effect_Text(["#fn黑体##fs26#下一个故事"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("命运的……转校生？", 37, 1530070, false, true);
                cm.effect_Voice("Voice2.img/Friends/CH1_02/6", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("嗯，命运之转学生。你不知道吗？这个是最近最热门的传闻了。", 37, 1530060, true, true);
                  cm.effect_Voice("Voice2.img/Friends/CH1_02/7", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("……你究竟是在哪里听说那种传闻的？", 37, 1530070, true, true);
                    cm.effect_Voice("Voice2.img/Friends/CH1_02/9", 100);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=20440617", 'love', -1, 0);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=20440617"], [30000, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=20440618"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect2.img/spinOff1/title", 0, 1500, 0, -50, 12, 4, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(5500);
                            cm.effect_Text(["#fn黑体##fs24#Chapter 1\r\n#fs18#~ 希纳斯与命运之转学生 ~"], [100, 2500, 4, 0, 200, 1, 4, 0, 0, 0]);
                          } else if (status === V++) {
                            cm.dispose();
                            cm.warp(100000004, 0);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;