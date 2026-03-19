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
      cm.npc_ChangeController(9400934, "oid=262126", -20, 318, 26, -70, 30, 5, true, 0, false);
      cm.npc_ChangeController(9400935, "oid=262127", -95, 318, 26, -145, -45, 5, true, 0, false);
      cm.npc_ChangeController(9400936, 'oid=262128', -565, 279, 1, -570, -515, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.npc_ChangeController(9400929, "oid=91895833", -460, 300, 23, -510, -410, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=91895833", "summon", 0, 0);
      cm.npc_ChangeController(9400928, "oid=91895834", -370, 300, 23, -420, -320, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=91895834", "summon", 0, 0);
      cm.npc_ChangeController(9401173, "oid=91895835", -310, 300, 23, -360, -260, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=91895835", "summon", 0, 0);
      cm.npc_ChangeController(9400932, "oid=91895836", -210, 300, 23, -260, -160, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=91895836", "summon", 0, 0);
      cm.npc_ChangeController(9400933, "oid=91895837", -150, 300, 26, -200, -100, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=91895837", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, -300, 400]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face2#用清晨之露代替泉水制作果汁的话……嘿嘿嘿……", 37, 9400920, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#为什么我的眼里不是制作清凉果汁的少女的模样，而是制作被禁炼金术的疯子炼金术师的模样呢？", 37, 9400923, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#我也是……", 37, 9400924, true, true);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=91895835", "action", 3000, 0);
                  cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/blender_loop", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/amy/drink", 128);
                    cm.npc_SetSpecialAction("oid=91895834", 'drink', 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/amy/drink", 128);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=91895834"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.sendNormalTalk_Bottom("#face5#呃嗯……不是这个味道。", 37, 9400920, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=91895835", "action", 3000, 0);
                            cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/blender_loop", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/amy/drink", 128);
                              cm.npc_SetSpecialAction("oid=91895834", "drink", 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/amy/drink", 128);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=91895834"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.sendNormalTalk_Bottom("#face5#不是的……有什么不足……", 37, 9400920, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetSpecialAction("oid=91895835", 'action', 3000, 0);
                                      cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/blender_loop", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/amy/drink", 128);
                                        cm.npc_SetSpecialAction("oid=91895834", 'drink', 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("Sound/PL_Sound.img/myHome/amy/drink", 128);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=91895834"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.sendNormalTalk_Bottom("#face5#不是的！不是！不是这个味道！", 37, 9400920, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#那个艾米……你没事吧？", 37, 9400921, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face5#哥哥，是哪里出问题了呢？为什么仿制不出当时喝的那个味道呢？", 37, 9400920, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#所以到底是什么味道？", 37, 9400923, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetForceMove("oid=91895836", -1, 50, 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetSpecialAction("oid=91895836", "drink", 2000, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#呃呃呃！！！！！！", 37, 9400923, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=91895836"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.sendNormalTalk_Bottom("#face1#这是什么？怎么这么好喝？", 37, 9400923, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=91895836", 1);
                                                            cm.sendNormalTalk_Bottom("#face1#米兰达，你快尝尝！", 37, 9400923, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetForceMove("oid=91895837", -1, 50, 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=91895837"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                cm.sendNormalTalk_Bottom("#face1#很……好喝呢？", 37, 9400924, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=91895837", 1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#好好喝！", 37, 9400926, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face2#真的！很好喝呢？！", 37, 9400925, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_setForceFlip("oid=91895837", -1);
                                                                          cm.npc_setForceFlip("oid=91895836", -1);
                                                                          cm.sendNormalTalk_Bottom("#face0#很好喝……？", 37, 9400920, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_setForceFlip("oid=91895834", -1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#是吗……？哥哥，你尝尝！#h0#也尝尝！", 37, 9400920, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetForceMove("oid=91895833", 1, 10, 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face1#比我做的更好喝呢。", 37, 9400921, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 10);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                      cm.sendNormalTalk_Bottom("#b真的……很好喝呢？", 57, 0, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face2#什么啊……真的吗？这个……可以卖钱吧？！", 37, 9400920, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#嗯？", 37, 9400921, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face2#不是，大家不都说好喝吗！天气也渐渐暖和了，人们肯定很想来一口清凉香甜的果汁吧？", 37, 9400920, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face2#那时候，如果我去卖这个美！味！的果汁……？大家会怎么样呢？", 37, 9400920, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#买来……喝？", 37, 9400921, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face2#就是这样！嘿嘿嘿嘿，太好了！", 37, 9400920, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                      cm.eventSKill(0);
                                                                                                      cm.forceCompleteQuest(65434);
                                                                                                      cm.sendNewEffects(14, [0, 2000, 1000, 0, 0]);
                                                                                                      cm.gainItem(4036671, -10);
                                                                                                      cm.gainItem(2020014, -10);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNewEffects(19, [0]);
                                                                                                      } else if (status === V++) {
                                                                                                        cm.warp(871000083, 0, false);
                                                                                                        cm.npc_LeaveField("oid=91895833");
                                                                                                        cm.npc_LeaveField("oid=91895834");
                                                                                                        cm.npc_LeaveField("oid=91895835");
                                                                                                        cm.npc_LeaveField("oid=91895836");
                                                                                                        cm.npc_LeaveField("oid=91895837");
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
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}