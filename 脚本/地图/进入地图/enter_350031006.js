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
      cm.useItem(2023432);
      cm.setPartner(1, 1540624, 80001615, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1540618, "oid=22397044", 210, 21, 4, 160, 260, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22397044", 'summon', 0, 0);
      cm.npc_ChangeController(1540619, "oid=22397045", 1205, 21, 8, 1155, 1255, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22397045", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=22397044", "down", -1, 1);
      cm.npc_SetSpecialAction("oid=22397045", 'down2', -1, 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("嘁，这里烟果然也很浓。", 37, 1540624, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(600);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(900, 2000, 900, 210, 80);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1800);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                  cm.effect_NormalSpeechBalloon('咳咳…嗬嗬……', 1, 0, 0, 900, 1, 0, 0, 0, 4, 1540618, cm.getPlayer().getId());
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(900, 2000, 900, 1205, 80);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1800);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                        cm.effect_NormalSpeechBalloon('呃呃…呃……', 1, 0, 0, 900, 1, 0, 0, 0, 4, 1540619, cm.getPlayer().getId());
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(250);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(100);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(900);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      cm.effect_NormalSpeechBalloon("呃呃…呃……", 1, 0, 0, 900, 1, 0, 0, 0, 4, 1540618, cm.getPlayer().getId());
                                    } else if (status === V++) {
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.addPopupSay(1540624, 1500, "那边有晕倒的士兵!!\r\n抓紧时间!!说不定现在他的状态很危险!!", '', 0);
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