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
      cm.npc_ChangeController(3003606, 'oid=275687', 258, 58, 12, 208, 308, 1, false, 0, false);
      cm.npc_ChangeController(3003659, 'oid=275688', 766, 29, 2, 716, 816, 1, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=275689', 1039, 29, 2, 989, 1089, 1, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275690", 860, 29, 2, 810, 910, 1, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275691", 950, 29, 2, 900, 1000, 1, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275692", 1138, 29, 2, 1088, 1188, 1, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275693", 1234, 29, 2, 1184, 1284, 1, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=275694', 1329, 29, 2, 1279, 1379, 1, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=275695', -228, 58, 11, -278, -178, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275696", -320, 58, 10, -370, -270, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275697", -409, 58, 10, -459, -359, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275698", -506, 58, 10, -556, -456, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275699", -919, 58, 9, -969, -869, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275700", -1023, 58, 9, -1073, -973, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275701", -139, 58, 11, -189, -89, 0, true, 0, false);
      cm.npc_ChangeController(3003608, "oid=275702", -1441, 58, 16, -1491, -1391, 1, false, 0, false);
      cm.updateInfoQuest(35157, "save=993060021;return=450006130");
      cm.forceStartQuest(35608, '');
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.updateInfoQuest(35150, "01=h1;02=h1;03=h1;04=h0;05=h1;06=h0;07=h1");
      cm.npc_ChangeController(3003651, "oid=2201089", -763, 46, 9, -813, -713, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2201089", "summon", 0, 0);
      cm.npc_ChangeController(3003656, "oid=2201090", 638, 16, 2, 588, 688, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2201090", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -706, 82);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=2201089", 1, 680, 140);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(2, 680);
            cm.inGameDirectionEvent_PushScaleInfo(4600, 0, 1500, 4600, -30, 82);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(8000);
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
                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -30, 82);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction20.img/effect/BMPre_Cygnus/0", 0, 1000, 0, 0, 1, 4, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#女皇陛下，我完成了埃斯佩拉的调查回来了。", 37, 3003651, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("拜见女皇陛下。", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction20.img/effect/BMPre_Cygnus/1", 0, 1000, 0, 0, 1, 4, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#你来啦，南哈特……还有#b#ho##k。", 37, 3003656, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0);
                                      cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0);
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
                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 638, 100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=2201090", -1, 320, 120);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1500, 3000, 180, 82);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_LeaveField("oid=2201089");
                                                        cm.npc_LeaveField("oid=2201089");
                                                        cm.npc_LeaveField("oid=2201090");
                                                        cm.npc_LeaveField("oid=2201090");
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
                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.updateInfoQuest(35608, 'enter=1');
                                                                cm.updateInfoQuest(35150, "01=h1;02=h1;03=h1;04=h0;05=h1;06=h1;07=h1");
                                                                cm.npc_ChangeController(3003651, "oid=2201294", -48, 46, 11, -98, 2, 0, true, 0, false);
                                                                cm.npc_SetSpecialAction("oid=2201294", 'summon', 0, 0);
                                                                cm.curNodeEventEnd(true);
                                                                cm.setInGameDirectionMode(true, false, true);
                                                                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
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
                                                                      cm.onTeleport(0, 3, cm.getPlayer().getId(), 79, 50);
                                                                      cm.inGameDirectionEvent_ForcedFlip(1);
                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 180, -41);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0##b#ho##k，不知为何，再次见到你……\r\n我的心好像就放了下来……", 37, 3003656, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 180, 82);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#（希纳斯询问了这段时间发生的情况，\r\n并就神秘河的事情向我表示感谢。）", 37, 3003656, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0##b#ho##k，多亏你为我们开辟了道路，\r\n时间神官们才能对神秘河进行调查。", 37, 3003656, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#那些东西为我们联盟能够对预言做出应对奠定了基础。\r\n这艘白色之矛也是其中之一……", 37, 3003656, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face4#但是，你的存在本身，\r\n对我们联盟而言就意味着希望。", 37, 3003656, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0##b#ho##k，现在与黑魔法师的最终决战即将开始。", 37, 3003656, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face0#这次我们联盟也需要借助你的力量。\r\n但是这次的战争有着绝望的预言，一切似乎早已注定。", 37, 3003656, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#你……也许会陷入危险。\r\n是否愿意跟我一起站在战场之上，要看你自己的选择。", 37, 3003656, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, 180, 120);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.askAcceptDecline_Bottom("#face0#我想问你。你愿意用自己的勇气，为命运的旅程添砖加瓦吗？", 37, 3003656);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face1##b#ho##k，你的决心……我会牢牢刻在心底。", 37, 3003656, false, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#希望能像往常一样，在这次的战争中成为联盟的定海神针。", 37, 3003656, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#我就说这么多。\r\n南哈特，请你向#b#ho##k说明详细内容。", 37, 3003656, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#是，女皇。那我就先告退了。\r\n#b#ho##k请跟我来。", 37, 3003651, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_ForcedFlip(0);
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
                                                                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                  } else if (status === V++) {
                                                                                                                                    cm.forceCompleteQuest(35600);
                                                                                                                                    cm.forceCompleteQuest(35608);
                                                                                                                                    cm.gainExp(85793345);
                                                                                                                                    cm.npc_LeaveField("oid=2201294");
                                                                                                                                    cm.npc_LeaveField("oid=2201294");
                                                                                                                                    cm.dispose();
                                                                                                                                    cm.warp(993060030, 0, false);
                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}