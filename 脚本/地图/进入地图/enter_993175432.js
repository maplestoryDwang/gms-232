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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9062271, "oid=27561341", 0, 130, 1, -50, 50, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=27561341", 'summon', 0, 0);
      cm.npc_ChangeController(9062272, "oid=27561342", -80, 130, 1, -130, -30, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=27561342", "summon", 0, 0);
      cm.npc_ChangeController(9062273, "oid=27561343", 80, 130, 1, 30, 130, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=27561343", "summon", 0, 0);
      cm.npc_ChangeController(9062274, "oid=27561344", 160, 130, 1, 110, 210, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=27561344", "summon", 0, 0);
      cm.npc_ChangeController(9062270, "oid=27561345", -260, 130, 1, -310, -210, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=27561345", 'summon', 0, 0);
      cm.npc_ChangeController(9062269, "oid=27561346", -200, 130, 1, -250, -150, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=27561346", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 15, 80);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.updateInfoQuest(238, "count=2456;T=20201102121015");
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(9062268, "oid=27561809", 230, 130, 1, 180, 280, 1, true, 1000, false);
            cm.npc_SetSpecialAction("oid=27561809", "summon", 0, 0);
            cm.npc_SetForceMove("oid=27561809", -1, 150, 100);
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=27561341", -1, 2, 100);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=0"], [0, -2, 150, 1, 0, 1, 1, 0, 0]);
                cm.sendNormalTalk_Bottom("#face0#哇~准备了这么多好吃的吗？", 37, 9062271, false, true, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=27561809", -1, 20, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=0"], [0, -80, 150, 1, 0, 1, 1, 0, 0]);
                      cm.sendNormalTalk_Bottom("#face0#对啊~我重要的#b朋友#k要来，当然要好好准备了！", 37, 9062272, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=0"], [0, 10, 150, 1, 0, 1, 1, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=27561809", -1, 20, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=27561809", 1, 100, 100);
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=27561809", -1, 20, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", 'oid=0'], [0, 160, 150, 1, 0, 1, 1, 0, 0]);
                                  cm.sendNormalTalk_Bottom("#face0#果然~再有像没你这么好的朋友了！", 37, 9062274, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=27561343", 1, 1, 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", 'oid=0'], [0, 90, 150, 1, 0, 1, 1, 0, 0]);
                                        cm.sendNormalTalk_Bottom("#face0#我们一起狂欢！派对、派对！", 37, 9062273, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=27561809", -1, 70, 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=27561809", -1, 80, 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#大家看上去都很开心。\r\n这是在干什么？", 37, 9062268, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#那是属于#r人类的活动#k。", 37, 9062270, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#机器人是做不了的哟。做不了哟。别东张西望哟。", 37, 9062269, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#可是……\r\n#b我也想和人类一起玩。#k", 37, 9062268, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3", "oid=0"], [0, -260, 130, 1, 0, 1, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.userSetFieldFloating(993175432, 3, 3, 20);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.userSetFieldFloating(993175432, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#小声点！\r\n万一让那些人类听到你说的，我们马上就会被当做#b废品处理掉#k！", 37, 9062270, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#对的，那可是废品处理哟。\r\n被送到#r机械墓地#k，毫无例外会#b报废#k哟。", 37, 9062269, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#身体会咯吱咯吱，变成一块一块的哟。", 37, 9062269, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#为什么……会变成那样？", 37, 9062268, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#因为人类不喜欢。\r\n他们不喜欢想要感受#b情感#k的机器人！", 37, 9062270, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#不喜欢哟。所以我们什么都不能说哟。\r\n只能做规定的事情哦。", 37, 9062269, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#我们走了！\r\n和你一起玩，保不准连我们也会受伤！", 37, 9062270, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.Npc_Fadeout("oid=27561345", 0, 2000);
                                                                            cm.Npc_Fadeout("oid=27561346", 0, 2000);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/phantom/tutorial", "oid=0"], [0, -150, 140, 1, 0, 1, 1, 0, 0]);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#可是……", 37, 9062268, false, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=0"], [0, 90, 150, 1, 0, 1, 1, 0, 0]);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetForceMove("oid=27561343", -1, 262, 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=0"], [0, -220, 150, 1, 0, 1, 1, 0, 0]);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetForceMove("oid=27561343", 1, 5, 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#这个……#b破铜烂铁#k为什么总是探头探脑的？\r\n是不是次品？", 37, 9062273, false, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_SetForceMove("oid=27561342", -1, 2, 100);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#为什么要花力气一块块地拼这种傻啦吧唧的#b次品#k呢。", 37, 9062272, false, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#你不属于这里。\r\n这里是我们#b朋友#k一起玩的地方。", 37, 9062273, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", 'oid=0'], [0, -140, 150, 1, 0, 1, 1, 0, 0]);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#但是我也能玩得很好！\r\n我本来就是#b为了陪小孩子们玩#k而制作出来的智能机器人！ ", 37, 9062268, false, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#我要怎么做你们才会和我玩呢？", 37, 9062268, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#嗯……这样吧，\r\n你到#b可回收垃圾场#k对，数到1000万……不对，数到#r10亿#k。\r\n到时候我们会考虑要不要带你一起玩。", 37, 9062272, true, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#数数，不是你们最擅长的吗？", 37, 9062273, true, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", 'oid=0'], [0, -140, 150, 1, 0, 1, 1, 0, 0]);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#你怎么知道的！！", 37, 9062268, false, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#我最会数数了！！", 37, 9062268, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                } else if (status === V++) {
                                                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                                  cm.setStandAloneMode(false);
                                                                                                                  cm.npc_LeaveField("oid=27561341");
                                                                                                                  cm.npc_LeaveField("oid=27561342");
                                                                                                                  cm.npc_LeaveField("oid=27561343");
                                                                                                                  cm.npc_LeaveField("oid=27561344");
                                                                                                                  cm.npc_LeaveField("oid=27561345");
                                                                                                                  cm.npc_LeaveField("oid=27561346");
                                                                                                                  cm.npc_LeaveField("oid=27561809");
                                                                                                                  cm.dispose();
                                                                                                                  cm.warp(993175433, 0, false);
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}