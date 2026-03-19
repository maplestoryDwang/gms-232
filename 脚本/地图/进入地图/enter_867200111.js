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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9400592, "oid=2276918", 197, 5, 35, 147, 247, 1, true, false);
      cm.npc_SetSpecialAction("oid=2276918", "summon", 0, 0);
      cm.npc_setForceFlip("oid=2276918", 1);
      cm.forceStartQuest(64013, '');
      cm.forceStartQuest(64150, '');
      cm.forceStartQuest(64155, '');
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT1/aruhi1", 128);
        cm.sendNormalTalk_Bottom("#face0#……嗝~我早~~知道~~~会这样~~~", 37, 9400592, false, true);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT1/aruhi2", 128);
          cm.sendNormalTalk_Bottom("#face0#谁叫你们把我的话~~嗝！", 37, 9400592, true, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT1/aruhi3", 128);
            cm.sendNormalTalk_Bottom("#face0#……当耳旁风……嗝，这下……遭殃了吧……", 37, 9400592, true, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b……？", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#b你在那里做什么？很危险，快下来！", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_同时移动镜头和人(2, 385);
                      cm.npc_SetSpecialAction("oid=2276918", "say", 1000, 1);
                      cm.sendNormalTalk_Bottom("#face0#黑乎乎的~~烟雾~~~", 37, 9400592, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#摇晃的火~~焰~~！", 37, 9400592, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b喂！大叔！", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_同时移动镜头和人(3, 30);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=2276918", -1);
                                cm.sendNormalTalk_Bottom("#face0#干嘛？嗝……这里是我的位置，你不许抢~！", 37, 9400592, false, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=2276918", "say", 1000, 1);
                                  cm.sendNormalTalk_Bottom("#b这里很危险，你先进来吧。", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#危险~~？呵呵，这鬼地方哪儿……不危险……", 37, 9400592, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=2276918", "say", 1000, 1);
                                      cm.sendNormalTalk_Bottom("#face0#你看那边~~在放烟火！嗝！我早知道会这样！", 37, 9400592, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetSpecialAction("oid=2276918", 'say', 1000, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 5000, 850, 500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#b……火？！", 57, 0, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#来来，你坐下，呵呵呵呵呵呵，嗝！", 37, 9400592, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetSpecialAction("oid=2276918", "say", 1000, 1);
                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#b哎呀，现在可不是看热闹的时候！", 57, 0, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#b（快点下去看看！）", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.forceCompleteQuest(64013);
                                                          cm.forceStartQuest(64014, '');
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else if (status === V++) {
                                                          cm.updateInfoQuest(64014, "mapIdx=0");
                                                          cm.npc_LeaveField("oid=2276918");
                                                          cm.dispose();
                                                          cm.openNpc(0, "副本_莫奈德_Act1_下山救人");
                                                          cm.setStandAloneMode(false);
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