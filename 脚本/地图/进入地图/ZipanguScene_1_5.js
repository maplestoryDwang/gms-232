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
      cm.npc_ChangeController(9111010, "oid=3777063", 805, -30, 21, 755, 855, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3777063", "summon", 0, 0);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
      cm.inGameDirectionEvent_AskAnswerTime(1);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("请问……这里是狸猫山丘吧……？\r\n这里到底发生了什么事？", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3777063"], [0, 0, 0, 1, 0, 1, 0, 0]);
          cm.sendNormalTalk_Bottom("人类……？！", 37, 9111010, true, true);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=3777063", "jump", 0, 1);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("人类走开！人类好可怕！", 37, 9111010, false, true);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=3777063", -1);
                cm.npc_SetForceMove("oid=3777063", 1, 50, 100);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=3777063", 1);
                  cm.npc_SetForceMove("oid=3777063", 1, 50, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=3777063", "die1", 0, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("冷，冷静！到底怎么回事？我不是来攻打你们的！", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("……。", 37, 9111010, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.setNpcSpecialActionReset("oid=3777063");
                            cm.npc_setForceFlip("oid=3777063", -1);
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3777063"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.sendNormalTalk_Bottom("许多像你一样的人类涌进了我们山丘。", 37, 9111010, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(5000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("他们说我们是毁坏农田的坏妖怪，对我们又踢又打，还抓走了我的同类。", 37, 9111010, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("这里本来就是我们生活的地方……是你们在我们的土地上开垦，你们才是坏蛋！", 37, 9111010, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("……。", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=3777063", 'jump', 0, 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetSpecialAction("oid=3777063", "jump", 0, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(600);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("人类真不可理喻！自私的人类！", 37, 9111010, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetSpecialAction("oid=3777063", "jump", 0, 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(600);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=3777063", 'jump', 0, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(600);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("我们要离开这里。我们才不要跟人类生活在一起！", 37, 9111010, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetSpecialAction("oid=3777063", "jump", 0, 1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(600);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetSpecialAction("oid=3777063", "jump", 0, 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(600);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("……我对你们的遭遇感到很抱歉。我是受蘑菇神社的木野子所托，来寻找火之五行的。", 57, 0, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetSpecialAction("oid=3777063", "jump", 0, 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(600);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetSpecialAction("oid=3777063", "jump", 0, 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(600);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("什么，你还想从我们身上抢走什么东西？\r\n你跟那些人没什么不同！自私的人类！贪婪的人类！", 37, 9111010, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetSpecialAction("oid=3777063", 'jump', 0, 1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(600);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetSpecialAction("oid=3777063", "jump", 0, 1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(600);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("这里是#b#m800020004##k，人类滚出去！", 37, 9111010, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetSpecialAction("oid=3777063", "jump", 0, 1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetSpecialAction("oid=3777063", 'jump', 0, 1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetSpecialAction("oid=3777063", "die1", 0, 1);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.askMenu_Bottom("(你要怎么做？)\r\n#L0# #b打败#p9111010#，回收火之五行。#l#k\r\n#L1# #b为#p9111010#治疗，回收火之五行。#l#k", 37, 9111010);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.setNumberForQuestInfo(58724, "state1", e);
                                                                            selectionLog[66] = e;
                                                                            if (selectionLog[66] == 0) {
                                                                              cm.sendNormalTalk_Bottom("……对不起，为了木野子，我也没办法。\r\n我没有恶意，可如果你们不肯交出火之五行，我也只好动手了。", 57, 0, false, true);
                                                                            } else {
                                                                              cm.sendNormalTalk_Bottom("算了，它的伤太严重了。", 57, 0, false, true);
                                                                            }
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("可恶！动手吧，人类！我们也不会傻傻挨打的！", 37, 9111010, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                selectionLog[66] = e;
                                                                                if (selectionLog[66] == 0) {
                                                                                  cm.eventSKill(0);
                                                                                  cm.forceCompleteQuest(58724);
                                                                                  cm.warp(800020003, 0, true);
                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                  cm.npc_LeaveField("oid=3777063");
                                                                                  cm.npc_LeaveField("oid=3777063");
                                                                                  cm.dispose();
                                                                                } else {
                                                                                  cm.sendNormalTalk_Bottom("别动……！我帮你治疗一下。", 57, 0, false, true);
                                                                                }
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_MoveAction(2);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_MoveAction(0);
                                                                                    cm.sendNormalTalk_Bottom("住，住手！你乱摸什么！", 37, 9111010, true, true);
                                                                                  } else if (status === V++) {
                                                                                    cm.forceCompleteQuest(58724);
                                                                                    cm.warp(800020006, 0, false);
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