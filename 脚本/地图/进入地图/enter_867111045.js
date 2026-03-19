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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400031, "oid=294234811", -94, 316, 9, -144, -44, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=294234811", 'summon', 0, 0);
      cm.npc_ChangeController(9400032, "oid=294234812", -170, 316, 9, -220, -120, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=294234812", "summon", 0, 0);
      cm.npc_ChangeController(9400033, "oid=294234813", 0, 316, 15, -50, 50, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=294234813", "summon", 0, 0);
      cm.npc_ChangeController(9400034, "oid=294234814", 80, 316, 15, 30, 130, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=294234814", "summon", 0, 0);
      cm.npc_ChangeController(9400035, "oid=294234815", -240, 316, 2, -290, -190, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=294234815", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("好，那我们现在就重新进入宇宙飞船吧？", 37, 9400035, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(9400039, "oid=294237678", -649, 316, 7, -699, -599, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=294237678", "summon", 0, 0);
            cm.npc_SetForceMove("oid=294237678", 1, 100, 50);
            cm.inGameDirectionEvent_AskAnswerTime(4200);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("原来是你们这帮家伙啊。", 37, 9400039, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=294234812", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=294234815", -1);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                      cm.effect_NormalSpeechBalloon('?!', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9400031, null, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#谁？！快说出你的身份！", 37, 9400031, false, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=294237678", 1, 50, 50);
                          cm.inGameDirectionEvent_AskAnswerTime(2200);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("虽然我的手下被抓，计划多少受到了影响……不过，就凭你们是不可能阻止我们的。", 37, 9400039, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#那就让我们来看看是不是不可能吧！", 37, 9400035, false, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=294234815", 0);
                                  cm.npc_SetForceMove("oid=294234815", -1, 80, 250);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=294234815", 'attack', 0, 0);
                                    cm.npc_SetSpecialAction("oid=294237678", "hurt", 0, 0);
                                    cm.forceCompleteQuest(59745);
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      cm.effect_NormalSpeechBalloon('!!', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9400035, null, cm.getPlayer().getId());
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=294234815", 1, 100, 300);
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=294234815", -1);
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("干得好，陈！", 37, 9400034, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("呃！长得就像个大坏蛋！", 37, 9400031, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#就是那个人……！偷走了灵灵……！罪魁祸首！", 37, 9400035, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom('什么？', 37, 9400032, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("自从失去了灵灵，我就一直记得他的长相。", 37, 9400035, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#就因为他……灵灵！灵灵……！", 37, 9400035, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("哼，记性好的家伙真是让人烦躁啊。", 37, 9400039, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("但是，你们也就只能到此为止了。我不会让你们再妨碍我的计划了。", 37, 9400039, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetForceMove("oid=294234811", -1, 180, 250);
                                                            cm.inGameDirectionEvent_AskAnswerTime(3200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#哼！你已经失去了所有，还说什么大话！你要怎么阻止我们？！", 37, 9400031, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("我自有办法。为了“那位大人”的军队，我们要继续在这里进行实验。", 37, 9400039, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("你们这些烦人的家伙……现在就别来惹麻烦了。", 37, 9400039, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("失去和我们有关的所有记忆，回到原来的地方去吧。", 37, 9400039, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 3000, 0, -440, 316);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                            cm.npc_SetSpecialAction("oid=294237678", 'attack', 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetSpecialAction("oid=294234811", 'down', -1, 0);
                                                                                cm.npc_SetForceMove("oid=294234814", 1, 150, 250);
                                                                                cm.npc_setForceFlip("oid=294234814", 1);
                                                                                cm.npc_SetSpecialAction("oid=294234814", "down", -1, 0);
                                                                                cm.npc_SetForceMove("oid=294234812", 1, 150, 250);
                                                                                cm.npc_SetSpecialAction("oid=294234812", "down", -1, 0);
                                                                                cm.npc_SetForceMove("oid=294234813", 1, 400, 300);
                                                                                cm.npc_SetSpecialAction("oid=294234813", "down", -1, 0);
                                                                                cm.npc_SetForceMove("oid=294234815", 1, 50, 300);
                                                                                cm.npc_setForceFlip("oid=294234815", 0);
                                                                                cm.npc_SetSpecialAction("oid=294234815", 'down', -1, 0);
                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/boom", "oid=294234812"], [0, 5, 0, 1, 0, 1, 0, 0]);
                                                                                            cm.onViewOrHide("oid=294234812", 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/boom", "oid=294234814"], [0, 5, 0, 1, 0, 1, 0, 0]);
                                                                                              cm.onViewOrHide("oid=294234814", 0, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face1#呃……不……行……我的……笔记本……我得……留下点……什么……", 37, 9400031, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/boom", "oid=294234813"], [0, 5, 0, 1, 0, 1, 0, 0]);
                                                                                                    cm.onViewOrHide("oid=294234813", 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/boom", "oid=294234815"], [0, 5, 0, 1, 0, 1, 0, 0]);
                                                                                                      cm.onViewOrHide("oid=294234815", 0, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/boom", "oid=294234811"], [0, 5, 0, 1, 0, 1, 0, 0]);
                                                                                                        cm.onViewOrHide("oid=294234811", 0, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("看到你们这些为了信念而战斗的家伙……真是烦死了。", 37, 9400039, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/boom", "oid=294237678"], [0, 5, 0, 1, 0, 1, 0, 0]);
                                                                                                              cm.onViewOrHide("oid=294237678", 0, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("……！！原来是这样，所以我才会失去了所有关于APORD的记忆。", 57, 0, false, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("现在我知道了所有的事情！一定要阻止APORD就是这个意思啊。", 57, 0, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("现在就赶紧去APORD的秘密基地看看吧！我必须阻止还在生产的克隆动物！", 57, 0, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.forceCompleteQuest(59741);
                                                                                                                          cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                                                                                                          cm.updateInfoQuest(59764, "1=1;2=1;3=1;5=1;6=1;7=1;8=1;9=1");
                                                                                                                          cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                                                                                                          cm.updateInfoQuest(59790, "stComplete=1;shop=1");
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                                          cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                                        } else if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                          cm.eventSKill(0);
                                                                                                                          cm.npc_LeaveField("oid=294234811");
                                                                                                                          cm.npc_LeaveField("oid=294234811");
                                                                                                                          cm.npc_LeaveField("oid=294234812");
                                                                                                                          cm.npc_LeaveField("oid=294234812");
                                                                                                                          cm.npc_LeaveField("oid=294234813");
                                                                                                                          cm.npc_LeaveField("oid=294234813");
                                                                                                                          cm.npc_LeaveField("oid=294234814");
                                                                                                                          cm.npc_LeaveField("oid=294234814");
                                                                                                                          cm.npc_LeaveField("oid=294234815");
                                                                                                                          cm.npc_LeaveField("oid=294234815");
                                                                                                                          cm.npc_LeaveField("oid=294237678");
                                                                                                                          cm.npc_LeaveField("oid=294237678");
                                                                                                                          cm.dispose();
                                                                                                                          cm.warp(cm.getNumberFromQuestInfo(59744, "map"), 0);
                                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                                          cm.setStandAloneMode(false);
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