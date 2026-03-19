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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -370, 49);
      cm.npc_ChangeController(3001952, "oid=6418245", -266, 49, 1, -316, -216, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=6418245", "summon", 0, 0);
      cm.npc_ChangeController(3001961, "oid=6418246", -175, 49, 1, -225, -125, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=6418246", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -285, 100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#从这里一路下去，就到那个地下仓库了。\r\n我们依次进去吧。我和布乌走前面……", 36, 3001952, false, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#呃，这里面太黑了，什么都看不见……\r\n布乌，你能变个灯火什么的吗？", 36, 3001952, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face2#布，布乌！", 36, 3001960, true, true, 1);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/Game.img/Transform", 100);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#嘻嘻……真乖。", 36, 3001952, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.forceCompleteQuest(39610);
                            cm.gainExp(713);
                            cm.gainExp(467);
                            cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h0;j=1;54=h0;55=h0;56=h0;57=h0;58=h0;59=h0");
                            cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h0;11=h1;20=h0;03=h0;12=h1;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                            cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h0;j=1;54=h1;55=h0;56=h0;57=h0;58=h0;59=h0");
                            cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h0;j=1;54=h1;55=h1;56=h0;57=h0;58=h0;59=h0");
                            cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h0;11=h1;20=h0;03=h0;12=h1;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;15=h1;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
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
                                  cm.warp(993162016, 0, false);
                                  cm.setStandAloneMode(false);
                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                  cm.setInGameDirectionMode(false, true, false);
                                  cm.npc_LeaveField("oid=6418245");
                                  cm.npc_LeaveField("oid=6418246");
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