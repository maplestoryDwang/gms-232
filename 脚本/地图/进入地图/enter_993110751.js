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
      cm.npc_ChangeController(3004069, 'oid=284462', 854, 1, 233, 804, 904, 1, false, 0, false);
      cm.npc_ChangeController(3004068, "oid=284463", 565, 1, 231, 515, 615, 0, false, 0, false);
      cm.npc_ChangeController(3004072, "oid=284464", 1544, 1, 239, 1494, 1594, 1, false, 0, false);
      cm.npc_ChangeController(3004073, "oid=284465", 1515, -158, 84, 1465, 1565, 1, false, 0, false);
      cm.npc_ChangeController(3004071, 'oid=284466', 799, -94, 155, 749, 849, 1, false, 0, false);
      cm.npc_ChangeController(3004070, "oid=284467", 695, 1, 233, 645, 745, 1, false, 0, false);
      cm.npc_ChangeController(3004074, 'oid=284468', 57, -132, 27, 7, 107, 1, false, 0, false);
      cm.npc_ChangeController(3004075, "oid=284469", 133, -132, 27, 83, 183, 1, false, 0, false);
      cm.npc_ChangeController(3004076, "oid=284470", 255, -251, 36, 205, 290, 1, false, 0, false);
      cm.npc_ChangeController(3004078, 'oid=284471', -309, -131, 27, -359, -259, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -52, -432);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3004067, "oid=2254453", 51, -360, 19, 1, 101, 1, false, 1000, false);
        cm.npc_SetSpecialAction("oid=2254453", "summon", 0, 0);
        cm.Hidden_background("arrow", 1, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Text(["#fn黑体##fs18#片刻后，埃欧雷"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('久违了，埃欧雷。', 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(700);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('诶？', 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, 711, -134);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0##h0#！快来看啊！\r\n我的朋友们全都醒过来了！", 37, 3004070, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#缪奈……发生什么事情了？", 37, 3004068, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#我来告诉你！\r\n到底发生了什么吧……！", 37, 3004070, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -52, -432);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#沉睡的精灵全都苏醒了。", 37, 1540453, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("对不起各位，\r\n如果我这个国王能再可靠一点，埃欧雷也不会沉睡数百年。", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#你无需感到抱歉，反倒是我们，没能帮上什么忙。", 37, 3004072, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#没想到一觉醒来，黑魔法师居然就消亡了……我反倒觉得现在像是个梦，\r\n感谢你，国王……", 37, 3004073, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#我真是没脸见你了，#h0#。\r\n哎呀……活到这把年纪居然还睡懒觉……", 37, 3004071, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#黑魔法师的消亡，\r\n就表示现在正是归还这东西的时候。", 37, 1540453, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('赫丽娜…。', 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3#如今总算物归原主了呢，\r\n您借予我的王柄——银槲之剑。", 37, 1540453, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("我会将它留在埃欧雷的。", 57, 0, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_OneTimeAction(22, 500);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Skill/40003.img/skill/400031011/effect"], [0, -57, -26, 1, 0, 1, 0, 0]);
                                                            cm.fieldEffect_PlayFieldSound("Sound/Skill.img/400031011/Use", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_ChangeController(3004077, "oid=2254525", -107, -626, 18, -157, -57, 1, false, 2500, false);
                                                              cm.npc_SetSpecialAction("oid=2254525", "summon", 0, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("相信每当日后遇到困难时，一看到它，我就能回想起来。", 57, 0, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("我们居然曾经战胜过时间的力量。", 57, 0, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face3##h0#，来点音乐如何？", 37, 1540453, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("好啊，打开音乐盒吧。", 57, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/2019Update/orgel", 100);
                                                                        cm.fieldEffect_Hero9(0, 1500);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_Hero9(80, 50);
                                                                            cm.fieldEffect_PlayBGM("Bgm52.img/Journey_Music Box_Mastered", 0, 0);
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 711, -134);
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
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 1537, -210);
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
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -52, -432);
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
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("今后埃欧雷再也不会被死寂笼罩。", 57, 0, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face3#一定能遍布孩子们的欢声笑语。", 37, 1540453, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, -126, -940);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_Hero9(0, 3000);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk('喳喳！！', 4, 3004150, false, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk("嗯？摩柯？又有什么事？", 2, 0, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk("(摩柯递过来一封信。)", 4, 3004150, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk("啊！发件人是女皇陛下。", 2, 0, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                                              cm.sendNormalTalk("亲爱的#h0#，\r\n\r\n不知你近来过得可好，在历经数百年的战争消弭之后，我和我的骑士团正过着平静又繁忙的日子。\r\n\r\n（……中间省略）\r\n\r\n还请你谅解，事关重大，我没办法在信中详述，希望能尽快在#r前哨基地#k见一面。\r\n\r\n\t\t\t\t\t\t\t\t\t女皇#b希纳斯#k敬上。", 4, 3003916, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk("该不会是出了什么事吧？赶紧过去看看吧。", 2, 0, true, true);
                                                                                                                              } else if (status === V++) {
                                                                                                                                cm.warp(993120000, 5, false);
                                                                                                                                cm.forceStartQuest(39701, '');
                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                cm.npc_LeaveField("oid=2254453");
                                                                                                                                cm.npc_LeaveField("oid=2254453");
                                                                                                                                cm.npc_LeaveField("oid=2254525");
                                                                                                                                cm.npc_LeaveField("oid=2254525");
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
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}