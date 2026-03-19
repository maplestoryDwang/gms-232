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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(600);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3001346, "oid=912530", -3420, 50, 34, -3470, -3370, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=912530", "summon", 0, 0);
        cm.npc_ChangeController(3001300, 'oid=912531', -3210, 50, 32, -3260, -3160, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=912531", "summon", 0, 0);
        cm.npc_ChangeController(3001301, "oid=912532", -2960, 50, 4, -3010, -2910, 1, true, 0, false);
        cm.npc_SetSpecialAction('oid=912532', 'summon', 0, 0);
        cm.npc_ChangeController(3001306, "oid=912533", -2810, 50, 23, -2860, -2760, 1, true, 0, false);
        cm.npc_SetSpecialAction('oid=912533', 'summon', 0, 0);
        cm.npc_ChangeController(3001306, "oid=912534", -2735, 50, 17, -2785, -2685, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=912534", "summon", 0, 0);
        cm.npc_ChangeController(3001306, "oid=912535", -2660, 50, 5, -2710, -2610, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=912535", "summon", 0, 0);
        cm.npc_ChangeController(3001306, 'oid=912536', -2585, 50, 30, -2635, -2535, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=912536", "summon", 0, 0);
        cm.npc_ChangeController(3001306, "oid=912537", -3555, 50, 11, -3605, -3505, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=912537", "summon", 0, 0);
        cm.npc_ChangeController(3001306, 'oid=912538', -3630, 50, 43, -3680, -3580, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=912538", "summon", 0, 0);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 800, 0, -3000, -250);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_ForcedFlip(1);
            cm.sendNormalTalk_Bottom("#face1#喂,小子！", 37, 3001306, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#嗯嗯……嗯……", 37, 3001351, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#清醒点了吗？", 37, 3001301, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face7#啊！", 37, 3001351, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1000, 4000, -3000, -10);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.effect_Text(["#fn黑体##fs18#阿叙隆,水晶门所在地", ''], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#快醒醒！阿加特大人在说话呢！", 37, 3001306, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#你是……叫伊利温吗？", 37, 3001301, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#嗯……", 37, 3001351, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#请问你多大了？", 37, 3001301, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#1……53……", 37, 3001351, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, -3000, 50);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#(153岁……即便是青少年,手背水晶也不会那么透明,\r\n翅膀也不会失去魔法气息。不过……)", 37, 3001301, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#(你刚刚使用的明明是#b强大魔法#k。)", 37, 3001301, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#擅自逃离阿叙隆可是重罪。\r\n准备好承担后果了吗？", 37, 3001301, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#对……不……起……", 37, 3001351, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#你知道我是谁吗？", 37, 3001301, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#求、求……道……者……", 37, 3001351, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#平民翼人求道者的代表阿加特,目前担任平民翼人最高学府水晶学院校长一职。", 37, 3001300, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", 'oid=912532'], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#平民翼人守护者的代表戴尔斯,以及平民翼人工程师的代表卡尔丽。", 37, 3001300, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face3#利奥……安静点……", 37, 3001351, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#(你亲手制作的机器人？听起来你好像很厉害。)", 37, 3001301, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, -3000, 80);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#身为水晶学院的校长,今天你的行为让我深感学校教育的失职。", 37, 3001301, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_ForcedFlip(1);
                                                                cm.sendNormalTalk_Bottom("#face0#所以我决定本学期让你参加水晶学院的特殊课程。", 37, 3001301, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=912533"], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=912534"], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=912535"], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=912536"], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=912537"], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=912538"], [0, 10, 0, 1, 0, 1, 0, 0, 0]);
                                                                    cm.sendNormalTalk_Bottom("#face0#！！！", 37, 3001351, false, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#明天上午准时到水晶学院来。\r\n#r绝对不能迟到哦。", 37, 3001301, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#另外,希望今后这种事不要再发生第二次。", 37, 3001301, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#那明天见。", 37, 3001301, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, -3180, 80);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetSpecialAction("oid=912532", "disappear", 0, 1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(750);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_LeaveField('oid=912532');
                                                                                  cm.sendNormalTalk_Bottom("#face0#水晶……水晶学院……", 37, 3001351, false, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                    cm.sendNormalTalk_Bottom("#face0#水晶学院作为平民翼人的最高学府,能学习到包括水晶魔法在内的多种领域的知识……", 37, 3001300, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face3#利奥……住嘴……", 37, 3001351, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#不过我……刚刚发生什么事了？", 37, 3001351, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#喷薄而出的魔法气息会跟强光一同从主人的身体中释放出来。", 37, 3001300, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face4#魔、魔法！？我的身体里？", 37, 3001351, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#不过这个时间的魔法释放量十分微弱,很有可能选不好。", 37, 3001300, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face8#你说……魔法……", 37, 3001351, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face8#今天简直糟透了……看来要回家好好研究一下了。", 37, 3001351, true, true, 1);
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
                                                                                                          cm.updateInfoQuest(34801, "019=1;hunt1=1;020=1;021=1;exp=1");
                                                                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                        } else if (status === V++) {
                                                                                                          cm.npc_LeaveField("oid=912530");
                                                                                                          cm.npc_LeaveField("oid=912531");
                                                                                                          cm.npc_LeaveField("oid=912533");
                                                                                                          cm.npc_LeaveField("oid=912534");
                                                                                                          cm.npc_LeaveField("oid=912535");
                                                                                                          cm.npc_LeaveField("oid=912536");
                                                                                                          cm.npc_LeaveField("oid=912537");
                                                                                                          cm.npc_LeaveField("oid=912538");
                                                                                                          cm.dispose();
                                                                                                          cm.warp(402000520, 0, true);
                                                                                                          cm.setStandAloneMode(false);
                                                                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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