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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(9401283, "oid=2154749", 25, -750, 30, -25, 75, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2154749", 'summon', 0, 0);
      cm.npc_ChangeController(9401364, "oid=2154750", 200, -750, 32, 150, 250, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2154750", "summon", 0, 0);
      cm.setNPC_Fadein(9401283, 1);
      cm.setNPC_Fadein(9401364, 1);
      cm.sendNewEffects(17, [0, 1000, 1500, 150, -1500]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.sendNewEffects(12, [3000, 150, -600]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
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
                    cm.sendNewEffects(17, [0, 1000, 2000, -120, -650]);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=2154749", -1, 100, 100);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_同时移动镜头和人(1, 60);
                        cm.npc_SetForceMove("oid=2154750", -1, 100, 100);
                        cm.sendNormalTalk_Bottom("#face1#大侠！大侠！请看这里！", 37, 9401283, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("什么都没有吗？", 37, 9401364, false, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#b不就……是块石头吗？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#不！你要仔细看看。给！", 37, 9401283, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNewEffects(17, [1000, 2000, 3000, -145, -650]);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=2154749", 1);
                                      cm.sendNormalTalk_Bottom("#face0#空青石乳是乳白色的液体。只有经历漫长的岁月，才会有少量出产！", 37, 9401283, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#仔细看这块凹进去的地方，虽然痕迹很淡，但是有白色的东西粘在上面。\r\n这里原来一定生长着空青石乳！", 37, 9401283, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#全都是白色的雪地，不熟悉的人就算看到了也不会注意到。但因为是江湖上众所周知的灵药，详细的情报早已为人熟知，所以才能找到。", 37, 9401283, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face3##b空青石乳……他们为什么需要那种东西呢？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#那个我会开始着手调查！\r\n哈哈，不过至少不是一无所获，可以堂堂正正地向分舵主报告了！\r\n你先回村里去吧！", 37, 9401283, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#孩子，你也回去吧！我带你走！", 37, 9401283, true, true, 1);
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
                                                      cm.forceCompleteQuest(65968);
                                                      cm.npc_LeaveField("oid=2154749");
                                                      cm.npc_LeaveField("oid=2154750");
                                                      cm.dispose();
                                                      cm.warp(211000000, 13, false);
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
    }
  }
}