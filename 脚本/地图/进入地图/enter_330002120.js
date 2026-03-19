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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530130, "oid=21324119", 250, 179, 4, 200, 300, 0, true, false);
      cm.npc_SetSpecialAction("oid=21324119", "summon", 0, 0);
      cm.npc_ChangeController(1530140, "oid=21324120", 410, 179, 5, 360, 460, 1, true, false);
      cm.npc_SetSpecialAction("oid=21324120", "summon", 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 370, 179);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(186);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=21324120", "shy", -1, 1);
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
                cm.sendNormalTalk_Bottom('你是弗朗西斯？', 37, 1530130, false, true);
                cm.effect_Voice("Voice2.img/Friends/CH2_08/1", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("嗯，没错……", 37, 1530140, true, true);
                  cm.effect_Voice("Voice2.img/Friends/CH2_08/2", 100);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#呼……我又开始紧张了。", 37, 1530140, false, true);
                      cm.effect_Voice("Voice2.img/Friends/CH2_06/6", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#不要紧张，她可以说已经属于我了。不要紧张，不要紧张……", 37, 1530140, true, true);
                        cm.effect_Voice("Voice2.img/Friends/CH2_06/7", 100);
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
                              cm.effect_Text(["#fn黑体##fs24#Chapter 2\r\n#fs18#~ 偶像明星奥尔卡与跟踪狂大骚动 ~"], [100, 2500, 4, 0, 200, 1, 4, 0, 0, 0]);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(100000004, 0);
                              cm.inGameDirectionEvent_SetHideEffect(0);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;