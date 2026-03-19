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
      cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, -3, -50);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.npc_ChangeController(1540637, "oid=22516374", 0, -150, 3, -50, 50, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=22516374", "summon", 0, 0);
        cm.npc_ChangeController(1540452, "oid=22516375", -90, -103, 1, -140, -40, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=22516375", "summon", 0, 0);
        cm.npc_ChangeController(1540450, "oid=22516376", 160, -100, 1, 110, 210, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=22516376", "summon", 0, 0);
        cm.npc_ChangeController(1540453, "oid=22516377", -160, -100, 1, -210, -110, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=22516377", 'summon', 0, 0);
        cm.npc_ChangeController(1540451, "oid=22516378", 90, -100, 1, 40, 140, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=22516378", "summon", 0, 0);
        cm.npc_ChangeController(1540459, "oid=22516379", -170, 15, 29, -220, -120, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=22516379", "summon", 0, 0);
        cm.npc_ChangeController(1540459, "oid=22516380", -245, 15, 29, -295, -195, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=22516380", "summon", 0, 0);
        cm.npc_ChangeController(1540459, "oid=22516381", -320, 15, 27, -370, -270, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=22516381", "summon", 0, 0);
        cm.npc_ChangeController(1540459, "oid=22516382", -395, 15, 27, -445, -345, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=22516382", "summon", 0, 0);
        cm.npc_ChangeController(1540459, "oid=22516383", -470, 15, 27, -520, -420, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=22516383", "summon", 0, 0);
        cm.npc_ChangeController(1540458, "oid=22516384", 170, 15, 30, 120, 220, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=22516384", "summon", 0, 0);
        cm.npc_ChangeController(1540458, "oid=22516385", 245, 15, 31, 195, 295, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=22516385", "summon", 0, 0);
        cm.npc_ChangeController(1540458, "oid=22516386", 320, 15, 31, 270, 370, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=22516386", "summon", 0, 0);
        cm.npc_ChangeController(1540458, "oid=22516387", 395, 15, 31, 345, 445, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=22516387", "summon", 0, 0);
        cm.npc_ChangeController(1540458, "oid=22516388", 470, 15, 32, 420, 520, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=22516388", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.playerMessage(-1, '0');
            cm.inGameDirectionEvent_AskAnswerTime(3000);
            cm.effect_Text(["#fn黑体##fs20#一会儿后"], [100, 2000, 4, 0, 0, 1, 4, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("监督人员也到齐啦。", 37, 1540451, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#h0#，从现在开始，吉格蒙特要问你几个问题。", 37, 1540451, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#b担任陪审员的士兵#k们会对你的回答做出判断。", 37, 1540451, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("根据士兵们的判断，我们可能会对你做出#b惩戒#k，所以请你一定要慎重作答。", 37, 1540451, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("那就开始吧。", 45, 1540452, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.askMenu_Bottom("#h0#，今天白天在黑色天堂发动炮击时，\r\n你趁乱从监狱中放出了#b人偶师#k。我说的没错吧？\r\n#b#L0#是的。#l\r\n#L1#没有。#l\r\n#L2#我想不起来了。#l", 37, 1540452);
                            selectionLog[100] = -1;
                          } else {
                            if (selectionLog[100] < 0) {
                              selectionLog[100] = e;
                            }
                            var O = "actionA" + selectionLog[100];
                            eval(O)(f, E, e, V);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function actionA0(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("嗯。你诚实的态度值得肯定。", 37, 1540450, false, true);
  } else {
    if (status === V++) {
      cm.addNumberForQuestInfo(33188, "score", 1);
      cm.setAmbience("Ambience.img/flyingdeck", 70, 60);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=22516379", "false", 0, 1);
        cm.npc_SetSpecialAction("oid=22516380", "false", 0, 1);
        cm.npc_SetSpecialAction("oid=22516381", "false", 0, 1);
        cm.npc_SetSpecialAction("oid=22516382", "true", 0, 1);
        cm.npc_SetSpecialAction("oid=22516383", "true", 0, 1);
        cm.npc_SetSpecialAction("oid=22516384", "true", 0, 1);
        cm.npc_SetSpecialAction("oid=22516385", "true", 0, 1);
        cm.npc_SetSpecialAction("oid=22516386", "true", 0, 1);
        cm.npc_SetSpecialAction("oid=22516387", "false", 0, 1);
        cm.npc_SetSpecialAction("oid=22516388", "false", 0, 1);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("人偶师弗朗西斯是非常重要的#b俘虏#k，他可能掌握着关于黑色天堂和格里梅尔的#b重要情报#k。", 45, 1540452, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("然而你坚持把他放出来是为何故？", 45, 1540452, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("当时如果对其置之不理，他很可能会没命。还有……", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.askMenu_Bottom("还有？\r\n#b#L0#虽然他是敌人，但怎么说也是一条人命。#l\r\n#L1#如果那样的话，我们就无法获得重要情报了。#l", 37, 1540452);
                selectionLog[101] = -1;
              } else {
                if (selectionLog[101] < 0) {
                  selectionLog[101] = e;
                }
                var O = "actionB" + selectionLog[101];
                eval(O)(f, E, e, V);
              }
            }
          }
        }
      }
    }
  }
}
function actionA1(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#你怎么能这么厚脸皮？！", 45, 1540452, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#face0#说谎是不对的……", 37, 1540450, true, true);
    } else {
      if (status === V++) {
        cm.addNumberForQuestInfo(33188, "score", -1);
        cm.setAmbience("Ambience.img/flyingdeck", 70, 60);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=22516379", "false", 0, 1);
          cm.npc_SetSpecialAction("oid=22516380", "false", 0, 1);
          cm.npc_SetSpecialAction("oid=22516381", 'false', 0, 1);
          cm.npc_SetSpecialAction("oid=22516382", "false", 0, 1);
          cm.npc_SetSpecialAction("oid=22516383", "true", 0, 1);
          cm.npc_SetSpecialAction("oid=22516384", 'true', 0, 1);
          cm.npc_SetSpecialAction("oid=22516385", 'false', 0, 1);
          cm.npc_SetSpecialAction("oid=22516386", "false", 0, 1);
          cm.npc_SetSpecialAction("oid=22516387", "false", 0, 1);
          cm.npc_SetSpecialAction("oid=22516388", 'false', 0, 1);
          cm.inGameDirectionEvent_AskAnswerTime(4000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("人偶师弗朗西斯是非常重要的#b俘虏#k，他可能掌握着关于黑色天堂和格里梅尔的#b重要情报#k。", 45, 1540452, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("然而你坚持把他放出来是为何故？", 45, 1540452, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("当时如果对其置之不理，他很可能会没命。还有……", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.askMenu_Bottom("还有？\r\n#b#L0#虽然他是敌人，但怎么说也是一条人命。#l\r\n#L1#如果那样的话，我们就无法获得重要情报了。#l", 37, 1540452);
                  selectionLog[101] = -1;
                } else {
                  if (selectionLog[101] < 0) {
                    selectionLog[101] = e;
                  }
                  var O = 'actionB' + selectionLog[101];
                  eval(O)(f, E, e, V);
                }
              }
            }
          }
        }
      }
    }
  }
}
function actionA2(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#你怎么能这么厚脸皮？！", 45, 1540452, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#face0#说谎是不对的……", 37, 1540450, true, true);
    } else {
      if (status === V++) {
        cm.addNumberForQuestInfo(33188, "score", -1);
        cm.setAmbience("Ambience.img/flyingdeck", 70, 60);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=22516379", 'false', 0, 1);
          cm.npc_SetSpecialAction("oid=22516380", "false", 0, 1);
          cm.npc_SetSpecialAction("oid=22516381", "false", 0, 1);
          cm.npc_SetSpecialAction("oid=22516382", "false", 0, 1);
          cm.npc_SetSpecialAction("oid=22516383", "true", 0, 1);
          cm.npc_SetSpecialAction("oid=22516384", "true", 0, 1);
          cm.npc_SetSpecialAction("oid=22516385", 'false', 0, 1);
          cm.npc_SetSpecialAction("oid=22516386", "false", 0, 1);
          cm.npc_SetSpecialAction("oid=22516387", "false", 0, 1);
          cm.npc_SetSpecialAction("oid=22516388", "false", 0, 1);
          cm.inGameDirectionEvent_AskAnswerTime(4000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("人偶师弗朗西斯是非常重要的#b俘虏#k，他可能掌握着关于黑色天堂和格里梅尔的#b重要情报#k。", 45, 1540452, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("然而你坚持把他放出来是为何故？", 45, 1540452, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("当时如果对其置之不理，他很可能会没命。还有……", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.askMenu_Bottom("还有？\r\n#b#L0#虽然他是敌人，但怎么说也是一条人命。#l\r\n#L1#如果那样的话，我们就无法获得重要情报了。#l", 37, 1540452);
                  selectionLog[101] = -1;
                } else {
                  if (selectionLog[101] < 0) {
                    selectionLog[101] = e;
                  }
                  var O = 'actionB' + selectionLog[101];
                  eval(O)(f, E, e, V);
                }
              }
            }
          }
        }
      }
    }
  }
}
function actionB0(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("我居然和这样的人一起战斗，我真是难以置信。", 45, 1540452, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("难怪女皇会如此欣赏你。", 45, 1540452, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#如果失去人性，那我们和黑色之翼就没有区别了。", 37, 1540450, true, true);
      } else {
        if (status === V++) {
          cm.addNumberForQuestInfo(33188, "score", 1);
          cm.setAmbience("Ambience.img/flyingdeck", 70, 60);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=22516379", 'false', 0, 1);
            cm.npc_SetSpecialAction("oid=22516380", "false", 0, 1);
            cm.npc_SetSpecialAction("oid=22516381", 'true', 0, 1);
            cm.npc_SetSpecialAction("oid=22516382", "true", 0, 1);
            cm.npc_SetSpecialAction("oid=22516383", "true", 0, 1);
            cm.npc_SetSpecialAction("oid=22516384", "true", 0, 1);
            cm.npc_SetSpecialAction("oid=22516385", "true", 0, 1);
            cm.npc_SetSpecialAction("oid=22516386", "true", 0, 1);
            cm.npc_SetSpecialAction("oid=22516387", 'true', 0, 1);
            cm.npc_SetSpecialAction("oid=22516388", 'false', 0, 1);
            cm.inGameDirectionEvent_AskAnswerTime(4000);
          } else {
            if (status === V++) {
              cm.askMenu_Bottom("虽说如此，你也不能让弗朗西斯逃到水晶花园外面去啊，不是吗？\r\n#b#L0#当时情况紧急，我也没有办法。#l\r\n#L1#我没想到士兵会让弗朗西斯逃掉。#l\r\n#L2#弗朗西斯向我保证不会逃跑的。#l", 37, 1540452);
              selectionLog[102] = -1;
            } else {
              if (selectionLog[102] < 0) {
                selectionLog[102] = e;
              }
              var O = 'actionC' + selectionLog[102];
              eval(O)(f, E, e, V);
            }
          }
        }
      }
    }
  }
}
function actionB1(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face0#不会吧……这不是你的真心吧？", 37, 1540450, false, true);
  } else {
    if (status === V++) {
      cm.addNumberForQuestInfo(33188, "score", -1);
      cm.setAmbience("Ambience.img/flyingdeck", 70, 60);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=22516379", "false", 0, 1);
        cm.npc_SetSpecialAction("oid=22516380", "false", 0, 1);
        cm.npc_SetSpecialAction("oid=22516381", "true", 0, 1);
        cm.npc_SetSpecialAction("oid=22516382", "true", 0, 1);
        cm.npc_SetSpecialAction("oid=22516383", 'true', 0, 1);
        cm.npc_SetSpecialAction("oid=22516384", 'false', 0, 1);
        cm.npc_SetSpecialAction("oid=22516385", "false", 0, 1);
        cm.npc_SetSpecialAction("oid=22516386", 'false', 0, 1);
        cm.npc_SetSpecialAction("oid=22516387", "false", 0, 1);
        cm.npc_SetSpecialAction("oid=22516388", "false", 0, 1);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
      } else {
        if (status === V++) {
          cm.askMenu_Bottom("即便如此，你也不能让弗朗西斯逃到水晶花园外面去啊，不是吗？\r\n#b#L0#当时情况太紧急了，我也没有办法。#l\r\n#L1#我没想到负责监视的士兵会让弗朗西斯逃掉。#l\r\n#L2#弗朗西斯向我保证不会逃跑的。#l", 37, 1540452);
          selectionLog[102] = -1;
        } else {
          if (selectionLog[102] < 0) {
            selectionLog[102] = e;
          }
          var O = "actionC" + selectionLog[102];
          eval(O)(f, E, e, V);
        }
      }
    }
  }
}
function actionC0(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("当时操纵室被占领，船体开始倾斜。", 57, 0, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("没错。当时如果没有#h0#，那就糟糕了。", 37, 1540458, true, true);
    } else {
      if (status === V++) {
        cm.addNumberForQuestInfo(33188, "score", 1);
        cm.setAmbience("Ambience.img/flyingdeck", 70, 60);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=22516379", "false", 0, 1);
          cm.npc_SetSpecialAction("oid=22516380", "false", 0, 1);
          cm.npc_SetSpecialAction("oid=22516381", 'true', 0, 1);
          cm.npc_SetSpecialAction("oid=22516382", "true", 0, 1);
          cm.npc_SetSpecialAction("oid=22516383", "true", 0, 1);
          cm.npc_SetSpecialAction("oid=22516384", 'true', 0, 1);
          cm.npc_SetSpecialAction("oid=22516385", "true", 0, 1);
          cm.npc_SetSpecialAction("oid=22516386", "true", 0, 1);
          cm.npc_SetSpecialAction("oid=22516387", "true", 0, 1);
          cm.npc_SetSpecialAction("oid=22516388", "true", 0, 1);
          cm.inGameDirectionEvent_AskAnswerTime(4000);
        } else {
          if (status === V++) {
            cm.askMenu_Bottom("你没想到弗朗西斯会把联盟的作战计划泄露给格里梅尔吗？\r\n#b#L0#弗朗西斯不是那种人！#l\r\n#L1#当时情况紧急，我没能来得及思考。#l\r\n#L2#那是不可能的。#l", 37, 1540452);
            selectionLog[103] = -1;
          } else {
            if (selectionLog[103] < 0) {
              selectionLog[103] = e;
            }
            var O = "actionD" + selectionLog[103];
            eval(O)(f, E, e, V);
          }
        }
      }
    }
  }
}
function actionC1(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#h0#，你现在是在责怪我吗？", 45, 1540459, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom('责怪同伴是不好的。', 37, 1540451, true, true);
    } else {
      if (status === V++) {
        cm.addNumberForQuestInfo(33188, "score", -1);
        cm.setAmbience("Ambience.img/flyingdeck", 70, 60);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=22516379", "false", 0, 1);
          cm.npc_SetSpecialAction("oid=22516380", 'false', 0, 1);
          cm.npc_SetSpecialAction("oid=22516381", "false", 0, 1);
          cm.npc_SetSpecialAction("oid=22516382", "false", 0, 1);
          cm.npc_SetSpecialAction("oid=22516383", 'false', 0, 1);
          cm.npc_SetSpecialAction("oid=22516384", 'true', 0, 1);
          cm.npc_SetSpecialAction("oid=22516385", 'true', 0, 1);
          cm.npc_SetSpecialAction("oid=22516386", "false", 0, 1);
          cm.npc_SetSpecialAction("oid=22516387", "false", 0, 1);
          cm.npc_SetSpecialAction("oid=22516388", "false", 0, 1);
          cm.inGameDirectionEvent_AskAnswerTime(4000);
        } else {
          if (status === V++) {
            cm.askMenu_Bottom("你没想到弗朗西斯会把联盟的作战计划泄露给格里梅尔吗？\r\n#b#L0#弗朗西斯不是那种人！#l\r\n#L1#当时情况紧急，我没能来得及思考。#l\r\n#L2#那是不可能的。#l", 37, 1540452);
            selectionLog[103] = -1;
          } else {
            if (selectionLog[103] < 0) {
              selectionLog[103] = e;
            }
            var O = 'actionD' + selectionLog[103];
            eval(O)(f, E, e, V);
          }
        }
      }
    }
  }
}
function actionC2(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("你相信他说的话？", 45, 1540452, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("真是无语。", 45, 1540452, true, true);
    } else {
      if (status === V++) {
        cm.addNumberForQuestInfo(33188, 'score', -1);
        cm.setAmbience("Ambience.img/flyingdeck", 70, 60);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=22516379", "false", 0, 1);
          cm.npc_SetSpecialAction("oid=22516380", 'false', 0, 1);
          cm.npc_SetSpecialAction("oid=22516381", "false", 0, 1);
          cm.npc_SetSpecialAction("oid=22516382", "true", 0, 1);
          cm.npc_SetSpecialAction("oid=22516383", "true", 0, 1);
          cm.npc_SetSpecialAction("oid=22516384", 'true', 0, 1);
          cm.npc_SetSpecialAction("oid=22516385", "true", 0, 1);
          cm.npc_SetSpecialAction("oid=22516386", "true", 0, 1);
          cm.npc_SetSpecialAction("oid=22516387", "false", 0, 1);
          cm.npc_SetSpecialAction("oid=22516388", "false", 0, 1);
          cm.inGameDirectionEvent_AskAnswerTime(4000);
        } else {
          if (status === V++) {
            cm.askMenu_Bottom("你没想到弗朗西斯会把联盟的作战计划泄露给格里梅尔吗？\r\n#b#L0#弗朗西斯不是那种人！#l\r\n#L1#当时情况紧急，我没能来得及思考。#l\r\n#L2#那是不可能的。#l", 37, 1540452);
            selectionLog[103] = -1;
          } else {
            if (selectionLog[103] < 0) {
              selectionLog[103] = e;
            }
            var O = "actionD" + selectionLog[103];
            eval(O)(f, E, e, V);
          }
        }
      }
    }
  }
}
function actionD0(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("你这辩解真是让人无语。", 37, 1540452, false, true);
  } else {
    if (status === V++) {
      cm.addNumberForQuestInfo(33188, "score", -1);
      cm.setAmbience("Ambience.img/flyingdeck", 70, 60);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=22516379", 'false', 0, 1);
        cm.npc_SetSpecialAction("oid=22516380", "false", 0, 1);
        cm.npc_SetSpecialAction("oid=22516381", "true", 0, 1);
        cm.npc_SetSpecialAction("oid=22516382", "true", 0, 1);
        cm.npc_SetSpecialAction("oid=22516383", "true", 0, 1);
        cm.npc_SetSpecialAction("oid=22516384", "true", 0, 1);
        cm.npc_SetSpecialAction("oid=22516385", "true", 0, 1);
        cm.npc_SetSpecialAction("oid=22516386", "false", 0, 1);
        cm.npc_SetSpecialAction("oid=22516387", "false", 0, 1);
        cm.npc_SetSpecialAction("oid=22516388", "false", 0, 1);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
      } else {
        if (status === V++) {
          cm.askMenu_Bottom("我再给你最后一次机会。\r\n#b#L0#(承认错误。。)#l\r\n#L1#(拉拢人心。)#l\r\n#L2#(用逻辑解释。)#l", 37, 1540452);
          selectionLog[104] = -1;
        } else {
          if (selectionLog[104] < 0) {
            selectionLog[104] = e;
          }
          var O = 'actionE' + selectionLog[104];
          eval(O)(f, E, e, V);
        }
      }
    }
  }
}
function actionD1(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("你这辩解真是让人无语。", 37, 1540452, false, true);
  } else {
    if (status === V++) {
      cm.addNumberForQuestInfo(33188, "score", -1);
      cm.setAmbience("Ambience.img/flyingdeck", 70, 60);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.npc_SetSpecialAction("oid=22516379", "false", 0, 1);
        cm.npc_SetSpecialAction("oid=22516380", 'false', 0, 1);
        cm.npc_SetSpecialAction("oid=22516381", "true", 0, 1);
        cm.npc_SetSpecialAction("oid=22516382", "true", 0, 1);
        cm.npc_SetSpecialAction("oid=22516383", "true", 0, 1);
        cm.npc_SetSpecialAction("oid=22516384", "true", 0, 1);
        cm.npc_SetSpecialAction("oid=22516385", "true", 0, 1);
        cm.npc_SetSpecialAction("oid=22516386", "false", 0, 1);
        cm.npc_SetSpecialAction("oid=22516387", "false", 0, 1);
        cm.npc_SetSpecialAction("oid=22516388", 'false', 0, 1);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
      } else {
        if (status === V++) {
          cm.askMenu_Bottom("我再给你最后一次机会。\r\n#b#L0#(承认错误。。)#l\r\n#L1#(拉拢人心。)#l\r\n#L2#(用逻辑解释。)#l", 37, 1540452);
          selectionLog[104] = -1;
        } else {
          if (selectionLog[104] < 0) {
            selectionLog[104] = e;
          }
          var O = 'actionE' + selectionLog[104];
          eval(O)(f, E, e, V);
        }
      }
    }
  }
}
function actionD2(f, E, e, V) {
  if (status <= V++) {
    cm.addNumberForQuestInfo(33188, "score", 1);
    cm.sendNormalTalk_Bottom("召开作战会议时，弗朗西斯已经被监禁了。", 57, 0, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("弗朗西斯不可能知道联盟的作战计划。", 57, 0, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("当然也不可能泄露出去了。", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("你说的……有些道理，#h0#。你一语道破了一切。", 37, 1540451, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("这就没人知道了。\r\n你不会不知道黑色之翼干部们具有奇异的能力吧？", 45, 1540452, true, true);
          } else {
            if (status === V++) {
              cm.setAmbience("Ambience.img/flyingdeck", 70, 60);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=22516379", "false", 0, 1);
                cm.npc_SetSpecialAction("oid=22516380", 'false', 0, 1);
                cm.npc_SetSpecialAction("oid=22516381", 'true', 0, 1);
                cm.npc_SetSpecialAction("oid=22516382", "true", 0, 1);
                cm.npc_SetSpecialAction("oid=22516383", "true", 0, 1);
                cm.npc_SetSpecialAction("oid=22516384", "true", 0, 1);
                cm.npc_SetSpecialAction("oid=22516385", "true", 0, 1);
                cm.npc_SetSpecialAction("oid=22516386", 'true', 0, 1);
                cm.npc_SetSpecialAction("oid=22516387", 'true', 0, 1);
                cm.npc_SetSpecialAction("oid=22516388", 'true', 0, 1);
                cm.inGameDirectionEvent_AskAnswerTime(4000);
              } else {
                if (status === V++) {
                  cm.askMenu_Bottom("我再给你最后一次机会。\r\n#b#L0#(承认错误。。)#l\r\n#L1#(拉拢人心。)#l\r\n#L2#(用逻辑解释。)#l", 37, 1540452);
                  selectionLog[104] = -1;
                } else {
                  if (selectionLog[104] < 0) {
                    selectionLog[104] = e;
                  }
                  var O = "actionE" + selectionLog[104];
                  eval(O)(f, E, e, V);
                }
              }
            }
          }
        }
      }
    }
  }
}
function actionE0(f, E, e, V) {
  if (status <= V++) {
    cm.addNumberForQuestInfo(33188, "score", 1);
    cm.sendNormalTalk_Bottom("我知道释放俘虏是错误的。我已经准备好为这件事负责了。", 57, 0, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("不过，虽然他是敌人，但我觉得#b人命比什么都重要#k，这点始终没改变。", 57, 0, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("我愿意承担所有责任，我会接受任何结果。", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.setAmbience("Ambience.img/flyingdeck", 70, 60);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=22516379", 'false', 0, 1);
            cm.npc_SetSpecialAction("oid=22516380", "true", 0, 1);
            cm.npc_SetSpecialAction("oid=22516381", "true", 0, 1);
            cm.npc_SetSpecialAction("oid=22516382", "true", 0, 1);
            cm.npc_SetSpecialAction("oid=22516383", 'true', 0, 1);
            cm.npc_SetSpecialAction("oid=22516384", "true", 0, 1);
            cm.npc_SetSpecialAction("oid=22516385", "true", 0, 1);
            cm.npc_SetSpecialAction("oid=22516386", "true", 0, 1);
            cm.npc_SetSpecialAction("oid=22516387", "true", 0, 1);
            cm.npc_SetSpecialAction("oid=22516388", "false", 0, 1);
            cm.inGameDirectionEvent_AskAnswerTime(4000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("审问到此结束。", 37, 1540451, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("在结果出来之前，请大家在原地稍等一会儿。", 37, 1540451, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                              cm.effect_Text(["#fn黑体##fs20#一会儿后"], [100, 2000, 4, 0, 0, 1, 4, 0, 0, 0]);
                            } else {
                              var O = cm.getNumberFromQuestInfo(33188, "score");
                              if (O > 0) {
                                var b = "actionGE";
                              } else {
                                var b = "actionBE";
                              }
                              eval(b)(f, E, e, V);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function actionE1(f, E, e, V) {
  if (status <= V++) {
    cm.addNumberForQuestInfo(33188, 'score', 1);
    cm.sendNormalTalk_Bottom("这段时间我为联盟付出了不少努力，而且我也有拼命和黑色之翼进行战斗。", 57, 0, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("我击退了数以百计的机械士兵，而且还守住了操纵室，阻止了水晶花园的坠落。", 57, 0, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("和牺牲的队员们一起身处险境的人也是我。", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("希望大家能考虑到这些事情。", 57, 0, true, true);
        } else {
          if (status === V++) {
            cm.setAmbience("Ambience.img/flyingdeck", 70, 60);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=22516379", "false", 0, 1);
              cm.npc_SetSpecialAction("oid=22516380", 'false', 0, 1);
              cm.npc_SetSpecialAction("oid=22516381", "true", 0, 1);
              cm.npc_SetSpecialAction("oid=22516382", 'true', 0, 1);
              cm.npc_SetSpecialAction("oid=22516383", "true", 0, 1);
              cm.npc_SetSpecialAction("oid=22516384", 'true', 0, 1);
              cm.npc_SetSpecialAction("oid=22516385", "true", 0, 1);
              cm.npc_SetSpecialAction("oid=22516386", "false", 0, 1);
              cm.npc_SetSpecialAction("oid=22516387", "false", 0, 1);
              cm.npc_SetSpecialAction("oid=22516388", "false", 0, 1);
              cm.inGameDirectionEvent_AskAnswerTime(4000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("审问到此结束。", 37, 1540451, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("在结果出来之前，请大家在原地稍等一会儿。", 37, 1540451, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                cm.effect_Text(["#fn黑体##fs20#一会儿后"], [100, 2000, 4, 0, 0, 1, 4, 0, 0, 0]);
                              } else {
                                var O = cm.getNumberFromQuestInfo(33188, "score");
                                if (O > 0) {
                                  var b = "actionGE";
                                } else {
                                  var b = "actionBE";
                                }
                                eval(b)(f, E, e, V);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function actionE2(f, E, e, V) {
  if (status <= V++) {
    cm.addNumberForQuestInfo(33188, "score", -1);
    cm.sendNormalTalk_Bottom("说因为我释放弗朗西斯而泄露了作战计划，这未免太牵强了。", 57, 0, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("弗朗西斯一直被关在监狱，他逃跑时已经是作战开始之后了。", 57, 0, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("所以，把队员们牺牲的责任全部推在我身上，这让我觉得很有负担。", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.setAmbience("Ambience.img/flyingdeck", 70, 60);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=22516379", "false", 0, 1);
            cm.npc_SetSpecialAction("oid=22516380", "false", 0, 1);
            cm.npc_SetSpecialAction("oid=22516381", 'true', 0, 1);
            cm.npc_SetSpecialAction("oid=22516382", "true", 0, 1);
            cm.npc_SetSpecialAction("oid=22516383", 'true', 0, 1);
            cm.npc_SetSpecialAction("oid=22516384", "true", 0, 1);
            cm.npc_SetSpecialAction("oid=22516385", "true", 0, 1);
            cm.npc_SetSpecialAction("oid=22516386", 'false', 0, 1);
            cm.npc_SetSpecialAction("oid=22516387", 'false', 0, 1);
            cm.npc_SetSpecialAction("oid=22516388", 'false', 0, 1);
            cm.inGameDirectionEvent_AskAnswerTime(4000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("审问到此结束。", 37, 1540451, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("在结果出来之前，请大家在原地稍等一会儿。", 37, 1540451, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                              cm.effect_Text(["#fn黑体##fs20#一会儿后"], [100, 2000, 4, 0, 0, 1, 4, 0, 0, 0]);
                            } else {
                              var O = cm.getNumberFromQuestInfo(33188, 'score');
                              if (O > 0) {
                                var b = "actionGE";
                              } else {
                                var b = "actionBE";
                              }
                              eval(b)(f, E, e, V);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function actionGE(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("陪审员的意见是让其#b反省#k。\r\n考虑到#h0#的表现，陪审员决定暂时不向#h0#追究责任。", 37, 1540451, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("…………那贝尔，切奇和韩利泰的事情呢…………", 45, 1540452, true, true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayBGM("Bgm36.img/decision", 0, 0);
          cm.sendNormalTalk_Bottom("#face1#你现在应该承认这一切都是因为骑士团的荒唐战略造成的吧，南哈特！", 45, 1540452, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#！！", 37, 1540450, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("请冷静一点！\r\n不要随便找人发泄你的愤怒。", 37, 1540451, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("应该冷静的是你们！\r\n当你们在船上玩时，贝尔，韩利泰和切奇可是冒着生命危险在与黑色之翼战斗！！", 45, 1540459, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("这是诬陷，你们这群乌合之众！\r\n请对女皇和谋士保持礼貌！", 37, 1540458, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=22516379", "angry", -1, 0);
                      cm.npc_SetSpecialAction("oid=22516380", "angry", -1, 0);
                      cm.npc_SetSpecialAction("oid=22516381", 'angry', -1, 0);
                      cm.npc_SetSpecialAction("oid=22516382", "angry", -1, 0);
                      cm.npc_SetSpecialAction("oid=22516383", "angry", -1, 0);
                      cm.npc_SetSpecialAction("oid=22516384", 'angry', -1, 0);
                      cm.npc_SetSpecialAction("oid=22516385", "angry", -1, 0);
                      cm.npc_SetSpecialAction("oid=22516386", "angry", -1, 0);
                      cm.npc_SetSpecialAction("oid=22516387", "angry", -1, 0);
                      cm.npc_SetSpecialAction("oid=22516388", "angry", -1, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#大家都冷静点！\r\n如果发生内讧，那就正中敌人下怀了！", 45, 1540453, false, true);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("…………他们的死是我的责任。", 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22516375"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22516376"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22516377"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22516378"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22516379"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22516380"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22516381"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22516382"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22516383"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22516384"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22516385"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22516386"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22516387"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=22516388"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("他们就在我眼前坠落，但我却选择了逃跑。\r\n我没有资格站在这战场上。", 57, 0, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("我愿意承担所有责任。\r\n希望你们能齐心协力。", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else if (status === V++) {
                                      cm.dispose();
                                      cm.warp(350033202, 0, true);
                                      cm.npc_LeaveField("oid=22516375");
                                      cm.npc_LeaveField("oid=22516376");
                                      cm.npc_LeaveField("oid=22516377");
                                      cm.npc_LeaveField("oid=22516378");
                                      cm.npc_LeaveField("oid=22516379");
                                      cm.npc_LeaveField("oid=22516380");
                                      cm.npc_LeaveField("oid=22516381");
                                      cm.npc_LeaveField("oid=22516382");
                                      cm.npc_LeaveField("oid=22516383");
                                      cm.npc_LeaveField("oid=22516384");
                                      cm.npc_LeaveField("oid=22516385");
                                      cm.npc_LeaveField("oid=22516386");
                                      cm.npc_LeaveField("oid=22516387");
                                      cm.npc_LeaveField("oid=22516388");
                                      cm.npc_LeaveField("oid=22516374");
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
function actionBE(f, E, e, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("陪审员的意见是让其#r退出#k。", 37, 1540451, false, true);
  } else {
    if (status === V++) {
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.fieldEffect_SaveEff("hillah/fail");
            cm.inGameDirectionEvent_AskAnswerTime(3500);
          } else if (status === V++) {
            cm.dispose();
            cm.warp(350033100, 0, true);
            cm.inGameDirectionEvent_SetHideEffect(0);
            cm.setInGameDirectionMode(false, true, false);
            cm.npc_LeaveField("oid=22516375");
            cm.npc_LeaveField("oid=22516376");
            cm.npc_LeaveField("oid=22516377");
            cm.npc_LeaveField("oid=22516378");
            cm.npc_LeaveField("oid=22516379");
            cm.npc_LeaveField("oid=22516380");
            cm.npc_LeaveField("oid=22516381");
            cm.npc_LeaveField("oid=22516382");
            cm.npc_LeaveField("oid=22516383");
            cm.npc_LeaveField("oid=22516384");
            cm.npc_LeaveField("oid=22516385");
            cm.npc_LeaveField("oid=22516386");
            cm.npc_LeaveField("oid=22516387");
            cm.npc_LeaveField("oid=22516388");
            cm.npc_LeaveField("oid=22516374");
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