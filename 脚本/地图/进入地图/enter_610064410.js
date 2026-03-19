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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064410");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201535, "oid=2755762", 200, 153, 11, 150, 250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2755762", "summon", 0, 0);
      cm.npc_ChangeController(9201547, "oid=2755763", 530, 153, 6, 480, 580, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2755763", 'summon', 0, 0);
      cm.npc_ChangeController(9201536, "oid=2755764", 442, 153, 7, 392, 492, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2755764", "summon", 0, 0);
      cm.npc_ChangeController(9201579, "oid=2755765", 263, 153, 11, 213, 313, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2755765", "summon", 0, 0);
      cm.npc_ChangeController(9201559, "oid=2755766", 590, 153, 10, 540, 640, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2755766", "summon", 0, 0);
      cm.npc_ChangeController(9201560, "oid=2755767", 640, 153, 5, 590, 690, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2755767", "summon", 0, 0);
      cm.npc_ChangeController(9201562, "oid=2755768", 710, 153, 5, 660, 760, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2755768", "summon", 0, 0);
      cm.npc_ChangeController(9201561, "oid=2755769", 770, 153, 13, 720, 820, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2755769", "summon", 0, 0);
      cm.npc_ChangeController(9201563, "oid=2755770", 810, 153, 15, 760, 860, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2755770", "summon", 0, 0);
      cm.npc_ChangeController(9201565, "oid=2755771", 860, 153, 15, 810, 910, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2755771", "summon", 0, 0);
      cm.npc_ChangeController(9201564, "oid=2755772", 910, 153, 14, 860, 960, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2755772", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("至于你，戴尔格兰德……", 37, 9201535, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("你有什么吩咐，绯红之心……", 37, 9201547, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("我要把你和剩下的克拉奇安人送到一个位于冒险岛内的宁静祥和的地方。", 37, 9201535, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("请你守望着他们，帮助他们建立新的家园。", 37, 9201535, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("我保证他们的文明将会再次崛起。", 37, 9201547, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("但是，亲爱的绯红之心，这里是我们的家。", 37, 9201559, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("虽然损失惨重，但帝国没有毁灭。", 37, 9201560, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("是的，从头来过是很艰难的。\r\n我们并不介意留在克拉奇安。", 37, 9201561, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=2755763", 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("腐化已经深入了这片土地的命脉。\r\n张博士所造成的恶果已经无法让你们继续在此生活了。", 37, 9201547, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("而且纳瑞坎的黑暗军团依旧在此徘徊。\r\n你们和我们的昔日同胞如今已化身怪物。", 37, 9201535, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("而我也无法再保护你们不受他们所害。", 37, 9201535, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("你们别怕，绯红之心一定能找到个好地方的。\r\n没什么好担心的。", 37, 9201547, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("哇……谢谢……", 37, 9201561, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_setForceFlip("oid=2755763", -1);
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#原谅我，戴尔格兰德。\r\n你没法回家了。", 37, 9201535, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("冒险岛世界就是我的新家。\r\n我并不后悔来到这里。", 37, 9201547, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#谢谢你的理解。", 37, 9201535, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("与你并肩作战……是我的……我的荣幸……", 37, 9201547, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#好啦，戴尔格兰德。\r\n你可是要领导一个国家的人，把头抬起来。", 37, 9201535, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom('但是……绯红之心……', 37, 9201547, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#再见了，朋友。\r\n闭上眼睛。", 37, 9201535, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("大家再见了！", 37, 9201547, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face1#再见，戴尔格兰德。", 37, 9201536, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("再见！要保重啊。", 57, 0, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_SetSpecialAction("oid=2755762", '幻日', 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_LeaveField("oid=2755763");
                                                                              cm.npc_LeaveField("oid=2755763");
                                                                              cm.npc_LeaveField("oid=2755766");
                                                                              cm.npc_LeaveField("oid=2755766");
                                                                              cm.npc_LeaveField("oid=2755767");
                                                                              cm.npc_LeaveField("oid=2755767");
                                                                              cm.npc_LeaveField("oid=2755768");
                                                                              cm.npc_LeaveField("oid=2755768");
                                                                              cm.npc_LeaveField("oid=2755769");
                                                                              cm.npc_LeaveField("oid=2755769");
                                                                              cm.npc_LeaveField("oid=2755770");
                                                                              cm.npc_LeaveField("oid=2755770");
                                                                              cm.npc_LeaveField("oid=2755771");
                                                                              cm.npc_LeaveField("oid=2755771");
                                                                              cm.npc_LeaveField("oid=2755772");
                                                                              cm.npc_LeaveField("oid=2755772");
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.forceCompleteQuest(61363);
                                                                                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                                                                                cm.updateInfoQuest(61371, "1=1;2=1;3=1;4=1;5=1;6=1;7=1");
                                                                                cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1400);
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
      }
    }
  }
}