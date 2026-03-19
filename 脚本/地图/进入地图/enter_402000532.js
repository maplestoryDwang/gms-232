var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  if (!cm.isQuestActive(34807) && cm.getQuestStatus(34807) == 0) {
    action34807(f, E, e);
  } else {
    cm.dispose();
  }
}
function action34807(f, E, e) {
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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 250, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3001300, "oid=915002", 495, 25, 5, 445, 545, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=915002", "summon", 0, 0);
      cm.npc_ChangeController(3001324, "oid=915003", -119, 63, 2, -169, -69, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=915003", "summon", 0, 0);
      cm.npc_ChangeController(3001392, "oid=915004", -311, 63, 3, -361, -261, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=915004", "summon", 0, 0);
      cm.npc_SetSpecialAction('oid=915003', "attack", -1, 1);
      cm.npc_SetSpecialAction("oid=915004", "attack", -1, 1);
      cm.inGameDirectionEvent_同时移动镜头和人(1, 150);
      cm.npc_SetForceMove('oid=915002', -1, 150, 150);
      cm.sendNormalTalk_Bottom("#face2#呃啊~！！救命啊~~~~~！！！", 37, 3001307, false, true, 1);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face2#那个！说你呢！铁桶！还有旁边的铁桶主人！！", 37, 3001307, false, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face2#你能帮我个忙吗？", 37, 3001307, true, true, 1);
          } else {
            if (status === V++) {
              cm.askAcceptDecline_Bottom("#face8#(迪恩……那家伙虽然平时总来烦我……可还是帮帮他吧？)", 37, 3001351, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face9#可恶,没办法了,利奥！你赶快消灭那些故障的练习机器人！", 37, 3001351, false, true, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                  cm.npc_SetForceMove("oid=915002", -1, 600, 300);
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=915002", 'attack', -1, 1);
                    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/152001003/Attack3", 75);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 100, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(100);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 100, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(100);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(800);
                        } else {
                          if (status === V++) {
                            cm.setNpcSpecialActionReset("oid=915002");
                            cm.setNpcSpecialActionReset("oid=915003");
                            cm.setNpcSpecialActionReset("oid=915004");
                            cm.inGameDirectionEvent_AskAnswerTime(100);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                              cm.npc_SetSpecialAction("oid=915003", "die", 0, 1);
                              cm.npc_SetSpecialAction("oid=915004", 'die', 0, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.npc_LeaveField("oid=915003");
                                cm.npc_LeaveField("oid=915004");
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#哎呦喂……伊利温！利奥！谢谢！！！！！真心地谢谢你。", 37, 3001307, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#上次是我说话太过分了,请原谅我……", 37, 3001307, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#嗯……总之没事就好。", 37, 3001351, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#太可怕了……呼哧呼哧……", 37, 3001307, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#咦！怎么可能！我的背包怎么撕坏了？包里的东西都不见了！一定是被机器人攻击忙着逃跑时掉出去了。", 37, 3001307, false, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.effect_NormalSpeechBalloon('!', 0, 0, 0, 1000, 1, 0, 0, 0, 4, 3001337, null, cm.getPlayer().getId());
                                              cm.sendNormalTalk_Bottom("#face4#(我怎么感觉……)", 37, 3001351, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face2#说不定是附近的故障练习机器人把我的东西拿走了！", 37, 3001307, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face4#(感觉……你好像有事要拜托我……)", 37, 3001351, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#那个……你能帮我消灭那些故障机器人,找回遗失的物品吗？", 37, 3001307, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face8#(不仅救了人,还要帮忙找东西……)", 37, 3001351, true, true, 1);
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
                                                              cm.npc_LeaveField('oid=915002');
                                                              cm.updateInfoQuest(34807, "d2=1");
                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                            } else if (status === V++) {
                                                              cm.setStandAloneMode(false);
                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                              cm.setInGameDirectionMode(false, true, false);
                                                              cm.setPartner(true, 3001300, 80002330, 0);
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
}