var status = -1;
var selectionLog = [];
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  if (cm.getInfoQuest(34802) == 'out=2') {
    actionout2(f, E, e);
  } else {
    if (cm.getInfoQuest(34802) == '') {
      action1(f, E, e);
    } else {
      if (cm.isQuestFinished(34807) && !cm.isQuestActive(34808) && !cm.isQuestFinished(34808)) {
        action34807(f, E, e);
      } else {
        if (cm.isQuestActive(34808)) {
          cm.setPartner(true, 3001310, 80002331, 0);
          cm.Hidden_background('c1_loop', 1, 0, 0, 0);
          cm.Hidden_background("c1_appear", 1, 0, 0, 0);
          cm.Hidden_background("c2_loop", 1, 0, 0, 0);
          cm.Hidden_background('c2_appear', 1, 0, 0, 0);
          cm.Hidden_background("c3_loop", 1, 0, 0, 0);
          cm.Hidden_background('c3_appear', 1, 0, 0, 0);
        }
        cm.dispose();
        return;
      }
    }
  }
}
function action34807(f, E, e) {
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
      cm.Hidden_background("c1_loop", 1, 0, 0, 0);
      cm.Hidden_background('c1_appear', 1, 0, 0, 0);
      cm.Hidden_background('c2_loop', 1, 0, 0, 0);
      cm.Hidden_background("c2_appear", 1, 0, 0, 0);
      cm.Hidden_background("c3_loop", 1, 0, 0, 0);
      cm.Hidden_background('c3_appear', 1, 0, 0, 0);
      cm.updateInfoQuest(34802, "class1=1;class2=1;class3=1;class4=1;out=2;exp=1");
      cm.updateInfoQuest(34808, 'd2=1');
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 33, -70);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 525, -143);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(3001300, "oid=915086", 567, -106, 4, 517, 617, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=915086", "summon", 0, 0);
            cm.npc_ChangeController(3001310, "oid=915087", 478, -45, 11, 428, 528, 1, true, 0, false);
            cm.npc_SetSpecialAction('oid=915087', 'summon', 0, 0);
            cm.npc_ChangeController(3001311, 'oid=915088', -432, 22, 32, -482, -382, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=915088", 'summon', 0, 0);
            cm.sendNormalTalk_Bottom("#face0#上次我们学习了#b平民翼人最后一役#k,大家还记得吧？", 37, 3001305, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#哪位学生能简要概括一下？", 37, 3001305, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face4#‘平民翼人最后一战’是发生在数百年前高等翼人和平民翼人之间的战争,高等翼人王子吉伦·达尔莫尔滥杀平民翼人,并幽禁了古代平民翼人之神。", 37, 3001311, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face4#古代平民翼人之神一辈子都在为平民翼人奔走,不仅为折翼流放的平民翼人制作了机械翅膀,还让我们民族在流放后掌握了水晶力量。", 37, 3001311, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#概括得很完美！", 37, 3001305, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#啊,早知道我也好好学习了……", 37, 3001310, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#幽禁在这里的#b古代平民翼人之神#k可是我们民族的英雄。我们平民翼人每年都会举行#b天神祭#k,称颂他的高洁无私,祈求民族平安无事,大家都知道吧？", 37, 3001305, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#学期末会举行天神祭,今年我们水晶学院的学生也要踊跃参加,凭借华丽的身手和魔法盛宴再一次闪耀祭典。", 37, 3001305, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#伊利温！不如跟我一起走吧？", 37, 3001310, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('#face9#嗯,好', 37, 3001351, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.npc_LeaveField("oid=915086");
                                cm.npc_LeaveField("oid=915087");
                                cm.npc_LeaveField("oid=915088");
                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else if (status === V++) {
                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                    cm.setStandAloneMode(false);
                                    cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.setPartner(true, 3001310, 80002331, 0);
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
function actionout2(f, E, e) {
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
      cm.Hidden_background("c1_loop", 1, 0, 0, 0);
      cm.Hidden_background("c1_appear", 1, 0, 0, 0);
      cm.Hidden_background("c2_loop", 1, 0, 0, 0);
      cm.Hidden_background('c2_appear', 1, 0, 0, 0);
      cm.Hidden_background("c3_loop", 1, 0, 0, 0);
      cm.Hidden_background("c3_appear", 1, 0, 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.sendNormalTalk_Bottom("#face0#(好,感觉关注的目光比刚刚少多了。我的心情也平复多了。)", 37, 3001351, false, true, 1);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face0#啊,学生你是#b伊利温#k吗？我从阿加特那听说了。你就是即将跟我们一起在水晶学院学习的#b伊利温#k。希望今后相处愉快。", 37, 3001302, true, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#来,赶快到这边的空位坐下。", 37, 3001302, true, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face4#(呃！别在意大家的眼光,赶快找地方坐下来吧。)", 37, 3001351, true, true, 1);
          } else {
            if (status === V++) {
              cm.updateInfoQuest(34802, "class1=1;out=2");
              cm.setStandAloneMode(false);
              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
              cm.setInGameDirectionMode(false, true, false);
              while (cm.getLevel() < 10) {
                cm.getPlayer().levelUp();
              }
              cm.changeJob(15200);
              cm.dispose();
            }
          }
        }
      }
    }
  }
}
function action1(f, E, e) {
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
      cm.Hidden_background("c1_loop", 1, 0, 0, 0);
      cm.Hidden_background("c1_appear", 1, 0, 0, 0);
      cm.Hidden_background("c2_loop", 1, 0, 0, 0);
      cm.Hidden_background('c2_appear', 1, 0, 0, 0);
      cm.Hidden_background("c3_loop", 1, 0, 0, 0);
      cm.Hidden_background("c3_appear", 1, 0, 0, 0);
      cm.forceStartQuest(34859, '');
      cm.updateInfoQuest(34859, "carn=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.npc_ChangeController(3001300, "oid=912562", 1019, 23, 38, 969, 1069, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=912562", 'summon', 0, 0);
      cm.npc_setForceFlip("oid=912562", -1);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_PushMoveInfo(0, 170, -65, 0);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face4#呃……这里学生好多啊……", 37, 3001351, false, true, 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.effect_NormalSpeechBalloon("哦？你是谁？", 1, 0, 0, 4000, 1, 0, 0, 0, 4, 3001317, null, cm.getPlayer().getId());
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.effect_NormalSpeechBalloon("我没见过你呢？", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 3001314, null, cm.getPlayer().getId());
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.effect_NormalSpeechBalloon('是转学生吗？', 1, 0, 0, 1500, 1, 0, 0, 0, 4, 3001315, null, cm.getPlayer().getId());
                      cm.inGameDirectionEvent_PushMoveInfo(1, 170, 0, 0);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#呃呃……大家开始看我了……呃……", 37, 3001351, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#看来要跟同龄朋友见面了,主人非常开心。看起来红光满面的。", 37, 3001300, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#不是那个意思……呃呃……", 37, 3001351, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.askAcceptDecline_Bottom("#face3#看来是太紧张了！干脆直接逃出去吧？", 37, 3001351, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3#呃！不行！先出去再说吧！", 37, 3001351, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.updateInfoQuest(34802, "out=1");
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else if (status === V++) {
                                  cm.dispose();
                                  cm.warp(402000522, 2, false);
                                  cm.npc_LeaveField('oid=912562');
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