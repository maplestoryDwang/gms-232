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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063180");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setAmbience("Ambience.img/warfare_far", 80, 60);
      cm.npc_ChangeController(9201535, "oid=2715746", -1818, 251, 1, -1868, -1768, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2715746", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(2, 500);
        cm.npc_SetForceMove("oid=2715746", 1, 550, 300);
        cm.inGameDirectionEvent_AskAnswerTime(4200);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(9201567, "oid=2715858", -1805, -52, 1, -1855, -1755, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=2715858", 'summon', 0, 0);
          cm.npc_ChangeController(9201566, "oid=2715859", -1890, -52, 1, -1940, -1840, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2715859", 'summon', 0, 0);
          cm.npc_ChangeController(9201566, "oid=2715860", -1920, -52, 1, -1970, -1870, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2715860", "summon", 0, 0);
          cm.npc_SetForceMove("oid=2715858", 1, 80, 200);
          cm.npc_SetForceMove("oid=2715859", 1, 100, 200);
          cm.npc_SetForceMove("oid=2715860", 1, 100, 200);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=2715746", -1);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("纳瑞坎这家伙……他的军队怎么杀都杀不完啊！", 37, 9201535, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("我们必须堵住入口！\r\n不然它们会一个接一个地涌进来。", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("好主意。\r\n交给你了。", 37, 9201535, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("明白。你去阻止纳瑞坎吧。", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=2715746", 1);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=2715746", -1);
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("其实，我一直害怕人们会演变得越来越蠢。", 37, 9201535, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("但你……让我改变了对未来的看法。", 37, 9201535, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("啊，多谢夸奖。", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("要是我们的第一次见面能轻松些就好了。", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=2715746", 1);
                                            cm.npc_SetForceMove("oid=2715746", 1, 400, 300);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_ForcedFlip(1);
                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_LeaveField("oid=2715746");
                                                cm.npc_LeaveField("oid=2715746");
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                } else if (status === V++) {
                                                  cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                                  cm.updateInfoQuest(61370, "1=1;2=1;3=1");
                                                  cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                                                  cm.playSoundEffDirectly("Ambience.img/warfare_far");
                                                  cm.eventSKill(0);
                                                  cm.setInGameDirectionMode(false, true, false);
                                                  cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
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
  }
}