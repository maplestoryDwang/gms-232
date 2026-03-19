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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062190");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9201536, "oid=2673567", 178, 374, 12, 128, 228, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2673567", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=2673567", "attack", 0, 1);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
      cm.inGameDirectionEvent_AskAnswerTime(3200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("卢坎！", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=2673567", -1);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#我的朋友！\r\n看到你安然无恙的样子真是太好了！", 37, 9201536, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(2, 120);
                cm.npc_SetForceMove("oid=2673567", -1, 400, 200);
                cm.inGameDirectionEvent_AskAnswerTime(2200);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=2673567", 0);
                  cm.sendNormalTalk_Bottom("我也是……等会儿，来这儿前你不是受伤了？", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#看样子我是回到我原本的状态了，就是我们见面一千年以前的状态。", 37, 9201536, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("真方便！\r\n话说，你能不能跟我说说我们碰到的这些怪物？", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("恐怕我也不是很了解他们。", 37, 9201536, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("我印象中的这里是一个安全的避风港，本应是没有怪物的，因此我也不认得这些生物。", 37, 9201536, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#有点不对劲。\r\n我们赶紧去找绯红之心和我的兄弟吧！", 37, 9201536, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("那就进入城堡！他们应该都在里面吧？", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 700, 0, -60, -50);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(4200);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1400);
                                            } else if (status === V++) {
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
          }
        }
      }
    }
  }
}