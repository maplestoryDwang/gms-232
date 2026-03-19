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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064500");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201577, "oid=2759411", 1290, 95, 56, 1240, 1340, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2759411", "summon", 0, 0);
      cm.npc_ChangeController(9201540, "oid=2759412", 1210, 95, 53, 1160, 1260, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2759412", "summon", 0, 0);
      cm.npc_ChangeController(9201540, "oid=2759413", 1110, 95, 52, 1060, 1160, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2759413", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("*呼哧 呼哧*我说……别人跟你说话的时候……至少要看着他们啊……", 37, 9201577, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("啊！尹博士！\r\n你——你看那边……！", 37, 9201540, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1684, 50);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("不！我们的世纪大发现啊！\r\n是……是你干的？！", 37, 9201577, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("没错，不过！\r\n我的理由很充分……", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("你让我别无选择了，小捣蛋鬼。\r\n这都怪你。", 37, 9201577, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("告诉我你的名字！", 37, 9201577, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("好吧……我叫#h0#。", 57, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('哈？', 37, 9201577, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=2759411", -1);
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=2759411", 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom('？', 57, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('尹博士，他说是……', 37, 9201541, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("我没听错吧？\r\n你说你叫#b#h0##k？", 37, 9201577, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("呃……怎么了？", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetForceMove("oid=2759411", 1, 50, 50);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("我们早些时候找到一本古书……", 37, 9201577, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("古书？", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("是的。\r\n它记载了守护者的要塞和克拉齐亚克拉齐亚在沉入海底前的那几天都发生了什么。", 37, 9201577, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("我们的研究显示它是用#b反转界#k语写成的……但只有一个单词是例外。", 37, 9201577, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom('哪个……单词？', 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("你的名字。", 37, 9201577, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom('啥？', 57, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("你自己看！\r\n你的名字从这行起就经常出现了。", 37, 9201577, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                                                            cm.updateInfoQuest(61371, "10=1;11=1;1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1;9=1");
                                                                            cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                          } else if (status === V++) {
                                                                            cm.eventSKill(0);
                                                                            cm.setInGameDirectionMode(false, true, false);
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