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
      cm.npc_ChangeController(9401278, "oid=206914", 314, 101, 13, 270, 364, 1, false, 0, false);
      cm.npc_ChangeController(9401302, "oid=206915", 217, 101, 14, 167, 230, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.sendNewEffects(17, [0, 1000, 2000, 300, 100]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#没事吧？", 37, 9401278, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("对、对不起，分、分舵主……我……我……", 37, 9401302, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#没关系。那也是没办法的事。", 37, 9401278, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("但是……因为我，玄山派……要不是我提供了情报……", 37, 9401302, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#啧，哪有什么东西比自己的生命更重要。", 37, 9401278, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#……提供了什么情报？", 37, 9401278, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("……门派内主要人物的情报和近期行踪……还有……", 37, 9401302, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#……交给你的情报中，有关于云雾公子的内容吗？", 37, 9401278, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("是的……玄山派大师兄云雾公子对掌门人的位子虎视眈眈，但是……", 37, 9401302, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#哈……知道了。", 37, 9401278, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('对、对不起……', 37, 9401302, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#……没关系。你……没有错。我会全部解决，别太担心。", 37, 9401278, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 1500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face3#（哎呀……这样的错误怎么能得到原谅呢……）", 37, 9401278, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(900);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNewEffects(14, [0, 2000, 1000]);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNewEffects(19, [0]);
                                              } else if (status === V++) {
                                                cm.forceCompleteQuest(65939);
                                                cm.gainExp(5514);
                                                cm.dispose();
                                                cm.warp(875001000, 4, false);
                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
    }
  }
}