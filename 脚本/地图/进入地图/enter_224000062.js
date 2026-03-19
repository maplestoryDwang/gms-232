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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -18, -66);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074136, "oid=1942130", -192, -83, 160, -242, -142, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=1942130", 'summon', 0, 0);
        cm.npc_ChangeController(2074152, "oid=1942131", -35, -136, 165, -85, 15, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=1942131", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Text(["#fn黑体##fs18#几年前#fs15##fn黑体#童话村附近山中"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("额啊！是，是#g妖怪九尾狐#k！！", 37, 2074136, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("等，等一下……我是想说……", 37, 2074152, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("额啊！救命啊！\r\n喂，#g妖怪九尾狐#k出现了！", 37, 2074136, true, true);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=1942130", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_LeaveField("oid=1942130");
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("哎哟……人类都怕我啊。", 37, 2074152, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                          cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 2074152, cm.getPlayer().getId());
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("好孤单啊……我如果也是个人……", 37, 2074152, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(2074155, "oid=1942188", 90, -140, 164, 40, 140, 1, true, 0, false);
                                cm.npc_SetSpecialAction("oid=1942188", "summon", 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1942188"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=1942131", 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1942131"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("搞什么，人类？\r\n给我闪开点，你要是不想受伤的话。", 37, 2074155, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("哎？鬼怪？", 37, 2074152, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                cm.effect_NormalSpeechBalloon('......', 1, 0, 0, 2500, 1, 0, 0, 0, 4, 2074155, cm.getPlayer().getId());
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=1942188", -1, 220, 100);
                                                  cm.sendNormalTalk_Bottom("你要是待在我身边，回头被人一起痛骂，我可不管啊。", 37, 2074155, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=1942131", -1);
                                                      cm.sendNormalTalk_Bottom('为什么会被痛骂啊？', 37, 2074152, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2074155, cm.getPlayer().getId());
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=1942188", 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("……因为我是#g鬼怪#k，是个怪物。\r\n你要是和我在一起会挨骂的，一边去。", 37, 2074155, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_LeaveField("oid=1942131");
                                                                    cm.npc_ChangeController(2074153, "oid=1942222", -35, -136, 165, -85, 15, 1, true, 0, false);
                                                                    cm.npc_SetSpecialAction("oid=1942222", 'summon', 0, 0);
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom('嗯！？', 37, 2074155, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#我……也是个怪物，\r\n可以和你在一起吧？", 37, 2074153, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("…………", 37, 2074155, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_setForceFlip("oid=1942188", -1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("哼，随你的便好了。", 37, 2074155, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else if (status === V++) {
                                                                                      cm.dispose();
                                                                                      cm.warp(224000063, 1);
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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