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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530050, "oid=38045974", 982, 20, 5, 932, 1032, 0, true, false);
      cm.npc_SetSpecialAction("oid=38045974", 'summon', 0, 0);
      cm.npc_ChangeController(1530184, "oid=38045975", 1202, 20, 6, 1152, 1252, 0, true, false);
      cm.npc_SetSpecialAction("oid=38045975", "summon", 0, 0);
      cm.npc_ChangeController(1530240, "oid=38045976", 1342, 20, 6, 1292, 1392, 1, true, false);
      cm.npc_SetSpecialAction("oid=38045976", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("这么说，那些全部是你做的？", 37, 1530180, false, true);
          cm.effect_Voice("Voice2.img/Friends/CH4_05/18", 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("卡珊德拉，你不是说让他们受到惩罚吗？", 37, 1530240, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("所以，我才替你惩罚他们的。你应该感谢我才对。", 37, 1530240, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("你……你为什么那么做？究竟为什么？", 37, 1530180, true, true);
                cm.effect_Voice("Voice2.img/Friends/CH4_05/21", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.npc_SetSpecialAction("oid=38045976", 'blackening', -1, 1);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("因为……我是卡珊德拉你的粉丝啊……", 37, 1530240, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#呜啊啊~~ 不要！！好可怕！！我再也不说谎了，请原谅我吧~~！！！", 37, 1530180, true, true);
                        cm.effect_Voice("Voice2.img/Friends/CH4_05/23", 100);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=38045975", -1, 1000, 200);
                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                        } else {
                          if (status === V++) {
                            cm.npc_LeaveField("oid=38045975");
                            cm.npc_LeaveField("oid=38045975");
                            cm.inGameDirectionEvent_PushMoveInfo(0, 120, 1202, 20);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1531);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayBGM("Bgm02.img/EvilEyes", 0, 0);
                                  cm.sendNormalTalk_Bottom("……？这里是哪里？我又是谁？", 37, 1530240, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#h0#！那个孩子好像很危险。", 37, 1530050, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("嗯，就算你不说，我也看出她很危险了。", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("我推倒了书架……还放了火……？ \r\n不不……那不是我做的……不是的！！啊啊！", 37, 1530240, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                        } else {
                                          if (status === V++) {
                                            cm.forceStartQuest(32869, '');
                                            cm.forceStartQuest(33036, '');
                                            cm.npc_ChangeController(1530534, "oid=38054361", 1282, 20, 6, 1232, 1332, 1, true, false);
                                            cm.npc_SetSpecialAction("oid=38054361", "summon", 0, 0);
                                            cm.fieldEffect_PlayBGM("Bgm09.img/TimeAttack", 0, 0);
                                            cm.npc_SetSpecialAction("oid=38045976", "down", -1, 1);
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              cm.effect_Text(["#r#fn黑体##fs26#是双重人格闹事者！#k"], [100, 4000, 5, 80, 0, 1, 4, 0, 0, 0]);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                cm.effect_Voice("Voice2.img/Friends/Narration_01/5", 100);
                                                cm.effect_Text(["#fn黑体##fs16#这是另一个自我创造出的闹事者. "], [100, 1500, 5, 80, 50, 1, 4, 0, 0, 0]);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#h0#！是闹事者！", 37, 1530050, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("你不说我也知道，我来除掉它！", 57, 0, true, true);
                                                  } else if (status === V++) {
                                                    cm.dispose();
                                                    cm.warp(330004200, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;