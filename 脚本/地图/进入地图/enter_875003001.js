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
      cm.sendNewEffects(12, [0, -2300, 0]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(9401304, "oid=1010648", -2150, 0, 19, -2200, -2100, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1010648", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.fieldEffect_ScreenMsg("Map/EffectWz2.img/Mukhyun/TextEff");
            cm.inGameDirectionEvent_AskAnswerTime(1000);
            cm.effect_Text(["#fn黑体##fs40##e玄山派", ''], [100, 1410, 4, 0, -130, 1, 4, 3, 0, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1010648"], [3000, 0, 0, 1, 0, 1, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=1010648", 1, 500, 200);
                cm.sendNewEffects(13, [3000, 300, 0]);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom((cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "回来了！", 37, 9401304, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('墨玄' + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '！', 37, 9401304, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=1010648");
                        cm.sendNewEffects(17, [0, 1000, 2000, -1200, 50]);
                      } else {
                        if (status === V++) {
                          cm.onTeleport(0, 3, cm.getPlayer().getId(), -1300, 0);
                          cm.inGameDirectionEvent_ForcedFlip(1);
                          cm.npc_ChangeController(9401289, "oid=1012343", -1350, 0, 30, -1400, -1300, 0, true, 0, false);
                          cm.npc_SetSpecialAction("oid=1012343", "summon", 0, 0);
                          cm.npc_ChangeController(9401290, "oid=1012344", -1400, 0, 30, -1450, -1350, 0, true, 0, false);
                          cm.npc_SetSpecialAction("oid=1012344", "summon", 0, 0);
                          cm.npc_ChangeController(9401282, "oid=1012345", -1150, 0, 30, -1200, -1100, 1, true, 0, false);
                          cm.npc_SetSpecialAction("oid=1012345", "summon", 0, 0);
                          cm.npc_ChangeController(9401279, "oid=1012346", -1100, 0, 30, -1150, -1050, 1, true, 0, false);
                          cm.npc_SetSpecialAction("oid=1012346", "summon", 0, 0);
                          cm.npc_ChangeController(9401285, "oid=1012347", -1050, 0, 30, -1100, -1000, 1, true, 0, false);
                          cm.npc_SetSpecialAction("oid=1012347", "summon", 0, 0);
                          cm.npc_ChangeController(9401303, "oid=1012348", -1000, 0, 30, -1050, -950, 1, true, 0, false);
                          cm.npc_SetSpecialAction("oid=1012348", "summon", 0, 0);
                          cm.npc_ChangeController(9401304, "oid=1012349", -950, 0, 30, -1000, -900, 1, true, 0, false);
                          cm.npc_SetSpecialAction("oid=1012349", "summon", 0, 0);
                          cm.npc_ChangeController(9401305, "oid=1012350", -900, 0, 30, -950, -850, 1, true, 0, false);
                          cm.npc_SetSpecialAction("oid=1012350", "summon", 0, 0);
                          cm.npc_ChangeController(9401306, "oid=1012351", -1450, 0, 30, -1500, -1400, 0, true, 0, false);
                          cm.npc_SetSpecialAction("oid=1012351", "summon", 0, 0);
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face4##b掌门人，南部山寨讨伐任务顺利完成，所有人都平安归来了。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#辛苦了，玄儿。你们也辛苦了。\r\n没有人受伤吧？", 37, 9401282, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0##b是的，没有人受重伤。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#太好了。\r\n远道而来，一路辛苦了。详细内容以后再说，快去休息一下吧。", 37, 9401282, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1##b是，掌门人。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=1012345", 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=1012345", 1, 200, 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(600);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=1012346", 1);
                                            cm.npc_setForceFlip("oid=1012347", 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=1012346", 1, 600, 100);
                                              cm.npc_SetForceMove("oid=1012347", 1, 600, 100);
                                              cm.npc_SetForceMove("oid=1012348", -1, 200, 200);
                                              cm.npc_SetForceMove("oid=1012349", -1, 200, 200);
                                              cm.npc_SetForceMove("oid=1012350", -1, 200, 200);
                                              cm.sendNewEffects(13, [2000, -100, 0]);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.effect_NormalSpeechBalloon((cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '！墨玄' + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '！', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401303, null, cm.getPlayer().getId());
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.effect_NormalSpeechBalloon((cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "!~~~", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401305, null, cm.getPlayer().getId());
                                                      cm.sendNormalTalk_Bottom((cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '，' + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！听说南部山寨的山贼都身高7尺开外，是真的吗？", 37, 9401306, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("而且挥舞着和人一样大的斧头……", 37, 9401303, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("真的把这里的山贼全部消灭掉了吗？", 37, 9401304, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("听说你把山寨里的谷物重新分给了村民们！", 37, 9401305, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2##b哈哈，这些家伙。一个个问，否则我忙不过来。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("真希望能亲眼见到师兄们的武功……", 37, 9401303, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom((cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！下次一定要带我一起去！", 37, 9401306, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face1##b当然。那样的话……就必须努力修炼才行。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("刚、刚才我一直在修炼，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '！', 37, 9401304, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("没错！对了，我正在练习第1招，但是有个地方想不通。\r\n你能……帮我看一下吗？", 37, 9401303, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1##b当然。让我看看到底长进了多少。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("哇！墨玄" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "果然最厉害了！\r\n我先去演武场了！你慢慢过来吧！", 37, 9401306, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.forceCompleteQuest(65920);
                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.forceStartQuest(65992, '');
                                                                                cm.forceCompleteQuest(65992);
                                                                                cm.sendNewEffects(14, [0, 2000, 1000]);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNewEffects(19, [0]);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_LeaveField("oid=1012343");
                                                                                    cm.npc_LeaveField("oid=1012344");
                                                                                    cm.npc_LeaveField("oid=1012345");
                                                                                    cm.npc_LeaveField("oid=1012346");
                                                                                    cm.npc_LeaveField("oid=1012347");
                                                                                    cm.npc_LeaveField("oid=1012348");
                                                                                    cm.npc_LeaveField("oid=1012349");
                                                                                    cm.npc_LeaveField("oid=1012350");
                                                                                    cm.npc_LeaveField("oid=1012351");
                                                                                    cm.dispose();
                                                                                    cm.warp(875000000, 1, false);
                                                                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                    if (!cm.isQuestActive(65921)) {
                                                                                      while (cm.getLevel() < 10) {
                                                                                        cm.getPlayer().levelUp();
                                                                                      }
                                                                                      cm.changeJob(17500);
                                                                                      cm.equip(1352860, -10);
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