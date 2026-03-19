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
      cm.Hidden_background("close", 1);
      cm.Hidden_background('open', 0);
      cm.forceStartQuest(64074, '');
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9400580, "oid=7606626", 0, 250, 2, -50, 50, 0, true, false);
      cm.npc_SetSpecialAction("oid=7606626", "summon", 0, 0);
      cm.npc_ChangeController(9400595, "oid=7606627", -125, 250, 1, -175, -75, 0, true, false);
      cm.npc_SetSpecialAction("oid=7606627", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_同时移动镜头和人(2, 40);
        cm.sendNormalTalk_Bottom("#face0#啊啊！", 37, 9400580, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#b你没事吧，艾丽卡？这里是哪里啊。", 57, 0, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=7606626", 1, 200, 80);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=7606626", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_ForcedFlip(1);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=7606626", 1);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#藏宝库？", 37, 9400580, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=7606626", 1, 200, 80);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#这里还有宝箱呢！", 37, 9400580, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 120);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=7606626", -1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_QTE(1);
                                    } else {
                                      if (status === V++) {
                                        cm.Hidden_background("close", 0);
                                        cm.Hidden_background("open", 1);
                                        cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT2/eyeeyebox", 128);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/PL_MONAD1/3", "oid=7606626"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#哦？这不是凯恩之前说弄丢了的胸针吗？", 37, 9400580, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#b看来我们现在弄清了阿布鲁的小偷究竟是谁了。", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_ChangeController(9400610, "oid=7607037", 730, 250, 10, 680, 780, 1, true, false);
                                                cm.npc_SetSpecialAction("oid=7607037", "summon", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=7607037", -1, 30, 50);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_setForceFlip("oid=7606626", 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=7606626", -1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/PL_MONAD1/4", "oid=7606626"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                        cm.sendNormalTalk_Bottom("#face0#嗯，这是精细加工过的项链。", 37, 9400580, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#……这些应该都是别人的珍贵物品。我们要不要把它们拿走然后还给别人呢？", 37, 9400580, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom('#b好想法。', 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0##h0#战斗的时候这些会成为负担，我来拿着吧。", 37, 9400580, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetForceMove("oid=7606626", -1, 100, 50);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom('#b这样不重吗？', 57, 0, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#既然我都跟来了，这种程度的事当然没问题啊！", 37, 9400580, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#嘿！现在走吧！", 37, 9400580, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_SetForceMove("oid=7606626", -1, 300, 80);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                              cm.inGameDirectionEvent_同时移动镜头和人(1, 300);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                  cm.monadEndingScene(135 * Math.pow(cm.getLevel(), 3), 50 * Math.pow(cm.getLevel(), 2), [2439150, 0, 0, 0, 0, 0]);
                                                                                  cm.sendNormalTalk_Bottom("！@#)$)#)$@#！@##___#($！(@(！！", 37, 9400610, false, true);
                                                                                  cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                } else if (status === V++) {
                                                                                  cm.forceCompleteQuest(64074);
                                                                                  cm.addNumberForQuestInfo(64272, '2', 1);
                                                                                  cm.gainItem(2439150, 1);
                                                                                  cm.gainExp(135 * Math.pow(cm.getLevel(), 3));
                                                                                  cm.gainMeso(50 * Math.pow(cm.getLevel(), 2));
                                                                                  cm.dispose();
                                                                                  cm.warp(867201501, 0);
                                                                                  cm.monadEndingScene(-1, -1, null);
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