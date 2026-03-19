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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 70, 50);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(2155104, "oid=42496920", 151, 50, 1, 101, 201, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=42496920", "summon", 0, 0);
          cm.npc_ChangeController(2155112, "oid=42496921", -213, 50, 1, -263, -163, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=42496921", "summon", 0, 0);
          cm.npc_setForceFlip("oid=42496921", 1);
          cm.npc_SetSpecialAction("oid=42496921", "downoff", -1, 1);
          cm.inGameDirectionEvent_ForcedFlip(-1);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=42496920"], [0, 0, 0, 1, 0, 1, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 1500, -70, 50);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=42496920", -1, 160, 150);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("怎么回事，这个…为什么在这里…", 37, 2155104, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 2200, 1500, -130, 50);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=42496920", -1, 80, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=42496920", "kneedown", -1, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=42496920", "knee", -1, 1);
                            cm.sendNormalTalk_Bottom("#face0#这个超级人造人是操作员…\r\n我记忆中的那个她…？\r\n呃！", 37, 2155121, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(300, 0, 2500, 300, -130, 70);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(100);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/heart", 100);
                                  cm.npc_SetSpecialAction("oid=42496920", 'pain', -1, 1);
                                  cm.sendNormalTalk_Bottom("#face2#呃呃呃！", 37, 2155121, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=42496920"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/heartFast", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#啊啊啊！这是？\r\n所有记忆…一下子…啊！", 37, 2155121, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(600, 0, 3500, 600, -130, 100);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else if (status === V++) {
                                            cm.warp(310070493, 0, false);
                                            cm.npc_LeaveField("oid=42496920");
                                            cm.npc_LeaveField("oid=42496920");
                                            cm.npc_LeaveField("oid=42496921");
                                            cm.npc_LeaveField("oid=42496921");
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