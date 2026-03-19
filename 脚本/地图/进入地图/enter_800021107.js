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
      cm.forceCompleteQuest(58733);
      cm.forceStartQuest(58734, '');
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9111011, "oid=3582792", 147, 1437, 17, 97, 197, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=3582792", 'summon', 0, 0);
        cm.npc_ChangeController(9111012, "oid=3582793", 0, 1437, 26, -50, 50, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=3582793", 'summon', 0, 0);
        cm.npc_ChangeController(9111022, "oid=3582794", -548, 1437, 29, -598, -498, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=3582794", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
          cm.effect_NormalSpeechBalloon("#fn黑体##fs18#呃啊啊啊啊啊啊啊。", 1, 0, 0, 5000, 1, 0, 0, 0, 4, 9111022, null, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=3582792", -1, 300, 150);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#哥-！", 37, 9111011, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                  cm.effect_NormalSpeechBalloon("#fn黑体##fs18#唔噢噢噢噢噢，哇啊啊", 1, 0, 0, 5000, 1, 0, 0, 0, 4, 9111022, null, cm.getPlayer().getId());
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=3582794", "Attack2", 1200, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3582792"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.sendNormalTalk_Bottom("#face0#等等，棘鬼！别过去！牛鬼不认得你！", 37, 9111012, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#看样子只能先制伏牛鬼，再想办法让他恢复原样了。", 37, 9111012, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(9111001, "oid=3583251", 331, 1437, 18, 281, 381, 0, true, 0, false);
                            cm.npc_SetSpecialAction("oid=3583251", "summon", 0, 0);
                            cm.npc_SetForceMove("oid=3583251", -1, 200, 150);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("啊……竹野子！", 57, 0, false, true);
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=3582792", 1);
                                cm.npc_setForceFlip("oid=3582793", 1);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#不好意思，我来得太迟了。我得把姐姐支走才能过来……镰鼬大叔你好吗？", 37, 9111001, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#你……？", 37, 9111011, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#竹野子是半妖。因为只有她才能取出五行，所以我叫上了她。", 37, 9111012, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#请各位暂时制住牛鬼，我好回收五行。", 37, 9111001, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#拜托了，求求你……救救牛鬼哥……", 37, 9111011, true, true);
                                        } else if (status === V++) {
                                          cm.dispose();
                                          cm.openNpc("蘑菇神社_恶鬼之森2");
                                          cm.npc_LeaveField("oid=3582792");
                                          cm.npc_LeaveField("oid=3582792");
                                          cm.npc_LeaveField("oid=3582794");
                                          cm.npc_LeaveField("oid=3582794");
                                          cm.npc_LeaveField("oid=3582793");
                                          cm.npc_LeaveField("oid=3582793");
                                          cm.npc_LeaveField("oid=3583251");
                                          cm.npc_LeaveField("oid=3583251");
                                          cm.getTopMsgFont("请打败牛鬼。", 3, 20, 20, 0, 0);
                                          cm.eventSKill(0);
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
          }
        }
      }
    }
  }
}