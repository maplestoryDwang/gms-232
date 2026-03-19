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
      cm.npc_ChangeController(1540801, "oid=60090", -113, 245, 3, -163, -63, 4, true, 0, false);
      cm.npc_ChangeController(1540802, "oid=60091", -448, 245, 2, -498, -398, 4, true, 0, false);
      cm.npc_ChangeController(1540803, "oid=60092", -176, 245, 6, -226, -126, 4, true, 0, false);
      cm.npc_ChangeController(1540804, "oid=60093", -259, 245, 7, -309, -209, 4, true, 0, false);
      cm.npc_ChangeController(1540806, "oid=60094", -374, 245, 8, -424, -324, 4, true, 0, false);
      cm.npc_ChangeController(1540807, 'oid=60095', -609, 245, 17, -659, -559, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1540805, "oid=295031211", 13, 229, 1, -37, 63, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=295031211", "summon", 0, 0);
      cm.npc_ChangeController(1540932, "oid=295031212", 0, 0, 1, -50, 50, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=295031212", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=295031212", "special2", -1, 1);
      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 0, 0);
      cm.sendNewEffects(17, [0, 1500, 1500, 700, -420]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.sendNewEffects(17, [7000, 1500, 1000, 0, 130]);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/toair", 100);
            cm.inGameDirectionEvent_AskAnswerTime(9000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("！！世界重新找回了生命。", 37, 1540806, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#……阿弗利埃之后，就连世界树也牺牲了。", 37, 1540805, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("别自责了。\r\n正因为有你在，才能靠这些牺牲阻止了戴米安。", 37, 1540801, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("世界树的生命渗透在这个世界上的所有角落。\r\n她不过是为了世界均衡，做出了自己的工作……\r\n将她从黑暗中拯救出来的不是别人，正是龙神你。", 37, 1540801, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                          cm.npc_setForceFlip("oid=295031211", -1);
                          cm.sendNewEffects(17, [0, 1000, 2000, -160, 300]);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                            cm.sendNormalTalk_Bottom("#face3#弗里德曾经说过，未来要交到你们手中。", 37, 1540805, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#也许现在留给我们的再没有任何奇迹可言。", 37, 1540805, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3#不将黑魔法师消灭掉，所有的一切就不会终结。\r\n未来就在于从现在开始的这场战斗。", 37, 1540805, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#你说的没错，\r\n只要不将黑魔法师消灭掉，一切就不会结束。", 37, 1540804, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face4#好吧，既然已经开始了，就要走到头。", 37, 1540803, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#龙神，我随时都能准备好。", 37, 1540802, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#也许你们会再次将我遗忘，\r\n但我随时都会与你们并肩作战。", 37, 1540806, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('谢谢了，你们大家。', 37, 1540805, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNewEffects(17, [15000, 2000, 1200, -160, -220]);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 15000, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT4/NAR2/1", 128);
                                                cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect2.img/HofM/ACT4_text2/0", 0, 2500, 0, -70, 12, 7, 1);
                                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 500, 0, 0, 0, 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT4/NAR2/2", 128);
                                                    cm.fieldEffect_ProcessOnOffLayer('2', "Map/Effect2.img/HofM/ACT4_text2/1", 0, 2500, 0, -70, 12, 7, 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(8000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 500, 0, 0, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT4/NAR2/3", 128);
                                                        cm.fieldEffect_ProcessOnOffLayer('3', "Map/Effect2.img/HofM/ACT4_text2/2", 0, 2500, 0, -70, 12, 7, 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(5400);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_ProcessOnOffLayer('3', '', 2, 500, 0, 0, 0, 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNewEffects(17, [0, 1000, 1000, 0, 0]);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 2);
                                                              cm.forceCompleteQuest(34015);
                                                              cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                                                              cm.updateInfoQuest(33964, "34011=1;34012=1;34013=1;34014=1;34015=1");
                                                              cm.updateInfoQuest(500664, "HOM_check=clear");
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                            } else if (status === V++) {
                                                              cm.playerMessage(5, "获得7000点声望。");
                                                              cm.updateInfoQuest(33909, "1_5=1;1=1;2=1;3=1;4=1");
                                                              cm.updateInfoQuest(33932, "1_5=1;1=1;2=1;3=1;4=1");
                                                              cm.updateInfoQuest(15249, "ring=4");
                                                              cm.forceCompleteQuest(33914);
                                                              cm.finishAchievement(1201);
                                                              cm.forceStartQuest(34022, '');
                                                              cm.gainItem(3017015, 1);
                                                              cm.npc_LeaveField("oid=295031211");
                                                              cm.npc_LeaveField("oid=295031211");
                                                              cm.npc_LeaveField("oid=295031212");
                                                              cm.npc_LeaveField("oid=295031212");
                                                              cm.dispose();
                                                              cm.warp(350144200, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;