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
      cm.npc_ChangeController(9400570, "oid=202919", 1699, 194, 7, 1649, 1749, 1, false, false);
      cm.updateInfoQuest(64076, "chk1=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 753, 412);
      cm.inGameDirectionEvent_OneTimeAction(4, 10000);
      cm.npc_ChangeController(9400580, "oid=7609720", 950, 440, 2, 900, 1000, 0, true, false);
      cm.npc_SetSpecialAction("oid=7609720", 'summon', 0, 0);
      cm.forceStartQuest(64162, "fight");
      cm.npc_ChangeController(9400689, "oid=7609721", 877, 440, 2, 827, 927, 1, false, false);
      cm.npc_SetSpecialAction("oid=7609721", "summon", 0, 0);
      cm.npc_ChangeController(9400641, "oid=7609722", 600, 440, 1, 550, 650, 0, true, false);
      cm.npc_SetSpecialAction("oid=7609722", "summon", 0, 0);
      cm.npc_ChangeController(9400672, "oid=7609723", 550, 100, 1, 500, 600, 0, true, false);
      cm.npc_SetSpecialAction("oid=7609723", "summon", 0, 0);
      cm.npc_ChangeController(9400642, "oid=7609724", 500, 440, 1, 450, 550, 0, true, false);
      cm.npc_SetSpecialAction("oid=7609724", "summon", 0, 0);
      cm.npc_ChangeController(9400674, "oid=7609725", 0, 450, 1, -50, 50, 0, true, false);
      cm.npc_SetSpecialAction("oid=7609725", "summon", 0, 0);
      cm.npc_ChangeController(9400641, "oid=7609726", 1150, 440, 2, 1100, 1200, 1, true, false);
      cm.npc_SetSpecialAction("oid=7609726", "summon", 0, 0);
      cm.npc_ChangeController(9400672, "oid=7609727", 1200, 440, 2, 1150, 1250, 1, true, false);
      cm.npc_SetSpecialAction("oid=7609727", 'summon', 0, 0);
      cm.npc_ChangeController(9400642, "oid=7609728", 1250, 440, 2, 1200, 1300, 1, true, false);
      cm.npc_SetSpecialAction("oid=7609728", "summon", 0, 0);
      cm.npc_ChangeController(9400674, "oid=7609729", 1300, 440, 2, 1250, 1350, 1, true, false);
      cm.npc_SetSpecialAction("oid=7609729", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=7609722", 'attack1', -1, 0);
      cm.npc_SetSpecialAction("oid=7609723", "attack1", -1, 0);
      cm.npc_SetSpecialAction("oid=7609724", 'attack1', -1, 0);
      cm.npc_SetSpecialAction("oid=7609725", "attack1", -1, 0);
      cm.npc_SetSpecialAction("oid=7609726", 'attack1', -1, 0);
      cm.npc_SetSpecialAction("oid=7609727", "attack1", -1, 0);
      cm.npc_SetSpecialAction("oid=7609728", "attack1", -1, 0);
      cm.npc_SetSpecialAction("oid=7609729", 'attack1', -1, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.sendNewEffects(17, [3000, 1000, 2000, 860, 450]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_OneTimeAction(5, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=7609720", -1);
            cm.inGameDirectionEvent_OneTimeAction(5, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=7609720", 1);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=7609720", "attack1", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_OneTimeAction(5, 0);
                  cm.npc_setForceFlip("oid=7609720", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=7609720", 1);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face4#呃！我忍不了了！", 37, 9400580, false, true);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=7609720", -1);
                        cm.inGameDirectionEvent_OneTimeAction(5, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=7609720", "special2", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(750);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=7609721", "special1", -1, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.setNpcSpecialActionReset("oid=7609722");
                              cm.setNpcSpecialActionReset("oid=7609723");
                              cm.setNpcSpecialActionReset("oid=7609724");
                              cm.setNpcSpecialActionReset("oid=7609725");
                              cm.setNpcSpecialActionReset("oid=7609726");
                              cm.setNpcSpecialActionReset("oid=7609727");
                              cm.setNpcSpecialActionReset("oid=7609728");
                              cm.setNpcSpecialActionReset("oid=7609729");
                              cm.sendNewEffects(17, [3000, 2000, 1000, 860, 350]);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7609720"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#b这究竟是什么……？", 57, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#难道……？", 37, 9400580, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.forceStartQuest(64077, '');
                                        cm.forceStartQuest(64162, '');
                                        cm.npc_SetForceMove("oid=7609720", -1, 10, 20);
                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#是这个在操纵那些怪物吗？", 37, 9400580, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.setNpcSpecialActionReset("oid=7609721");
                                            cm.npc_SetSpecialAction("oid=7609721", "special2", -1, 0);
                                            cm.sendNormalTalk_Bottom("#face4#看来这个生物是把我想要触碰的行为当做威胁了……", 37, 9400580, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#b真是太危险了。艾丽卡，这个森林和我们想象的不一样，以后要更小心点。", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#好的，我知道了。我记住了，#h0#，抱歉。", 37, 9400580, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face4#话说回来，这个还真是头一次见呢……究竟是怎么回事？居然有生物可以操纵怪物。", 37, 9400580, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face4#难道这个就是怪物暴走的原因吗？这个是阿布鲁原产的生物吗？不，没时间想这个了。", 37, 9400580, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#我得把这个带回亚皮纳斯总部调查下才行。#h0#，你能帮我一下吗？", 37, 9400580, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetForceMove("oid=7609720", -1, 10, 20);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetSpecialAction("oid=7609720", 'special1', -1, 0);
                                                          cm.setNpcSpecialActionReset("oid=7609721");
                                                          cm.npc_SetSpecialAction("oid=7609721", "special3", -1, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                          } else if (status === V++) {
                                                            cm.warp(867201503, 1, true);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.npc_LeaveField("oid=7609720");
                                                            cm.npc_LeaveField("oid=7609720");
                                                            cm.npc_LeaveField("oid=7609721");
                                                            cm.npc_LeaveField("oid=7609721");
                                                            cm.npc_LeaveField("oid=7609722");
                                                            cm.npc_LeaveField("oid=7609722");
                                                            cm.npc_LeaveField("oid=7609723");
                                                            cm.npc_LeaveField("oid=7609723");
                                                            cm.npc_LeaveField("oid=7609724");
                                                            cm.npc_LeaveField("oid=7609724");
                                                            cm.npc_LeaveField("oid=7609725");
                                                            cm.npc_LeaveField("oid=7609725");
                                                            cm.npc_LeaveField("oid=7609726");
                                                            cm.npc_LeaveField("oid=7609726");
                                                            cm.npc_LeaveField("oid=7609727");
                                                            cm.npc_LeaveField("oid=7609727");
                                                            cm.npc_LeaveField("oid=7609728");
                                                            cm.npc_LeaveField("oid=7609728");
                                                            cm.npc_LeaveField("oid=7609729");
                                                            cm.npc_LeaveField("oid=7609729");
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