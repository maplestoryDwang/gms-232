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
      cm.npc_ChangeController(3001661, 'oid=375513', 970, 38, 7, 920, 1020, 4, true, 0, false);
      cm.npc_ChangeController(3001661, "oid=375514", 1052, 38, 7, 1002, 1102, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1020, 50);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#叽叽……", 37, 3001661, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#不是说好往后不要叽叽叫了，要用说的嘛！\r\n你忘了吗！？", 37, 3001661, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#啊，对了……就是还不太熟悉，哈，哈哈……", 37, 3001661, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#给我打起十二分的精神来，你忘了上次也有一条米诺鱼爬进来吗？\r\n若是再发生那种事情……你懂的吧？", 37, 3001661, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('#face0#额……', 37, 3001661, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face12##fc0xFFbfbfbf#（一群小喽啰在守着嘛？虽说我也可以直接猛揍一顿……\r\n不过这种无知的方法实在和我这个天才解决师不搭。）", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.updateInfoQuest(39598, "02=h0;11=h0;03=h1;31=h0;32=h0;05=h0;06=h0;15=h0;33=h0;34=h1;16=h1;35=h0;27=h0;09=h0;82=h1;28=h0;29=h0;84=h0;85=h0");
                            cm.forceCompleteQuest(39530);
                            cm.gainExp(332);
                            cm.gainExp(3780);
                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                            cm.gainItem(4036582, -25);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                } else if (status === V++) {
                                  cm.warp(410000250, 0, false);
                                  cm.setStandAloneMode(false);
                                  cm.eventSKill(0);
                                  cm.setInGameDirectionMode(false, true, false);
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