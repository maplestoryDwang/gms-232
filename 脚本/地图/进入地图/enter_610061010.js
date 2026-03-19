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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9201534, "oid=2806376", -850, 180, 10, -900, -800, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2806376", 'summon', 0, 0);
      cm.npc_ChangeController(9201535, "oid=2806377", -470, 180, 33, -520, -420, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2806377", "summon", 0, 0);
      cm.npc_ChangeController(9201579, "oid=2806378", -400, 200, 32, -450, -350, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2806378", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=2806377", 'hurt', -1, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 1000, -645, -450);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(616);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2200);
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
                cm.inGameDirectionEvent_PushMoveInfo(0, 100, -645, 170);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(6200);
                    cm.effect_Text(["#fn黑体##fs18#1000年前，克拉奇安森林的某处……"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                      cm.effect_Voice("SoundEff.img/thunder2", 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                        cm.effect_Voice("SoundEff.img/thunder3", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("怎么？\r\n被困在这奇怪的世界太久，连剑都不会用了？", 37, 9201534, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#说话啊！\r\n你就没有什么想说的？", 37, 9201534, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#我跟你没什么好说的。*咳嗽*\r\n如果一个小孩长大后成了个坏人，这难道不是他父亲的过错？", 37, 9201535, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#我并不想……", 37, 9201535, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#你是个傻瓜。\r\n你以为就我会这么说？", 37, 9201534, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#你真的认为，只有我会渴求#b幻日的力量#k？", 37, 9201534, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#就算你把它藏到天涯海角，也没法阻止那些想要它的人。", 37, 9201534, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#够了，纳瑞……动手吧，了结我们之间的孽缘。\r\n我只想让你就此停手，别再继续下去而已。", 37, 9201535, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#我是个失败的父亲……现在我终于知道这点了。", 37, 9201535, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#但你绝对不能去动幻日。绝对不能！", 37, 9201535, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#我不是站在幻日的保护者的立场上跟你说这话的。", 37, 9201535, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#不要去将你无法控制的力量据为己有。*咳嗽*", 37, 9201535, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face2#如此强大的力量……当初就不该存在……", 37, 9201535, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("你没资格对我指手画脚。", 37, 9201534, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#毕竟现在幻日的保护者是我了。", 37, 9201534, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetSpecialAction("oid=2806376", "攻击2", 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_BackgroundCanvas(4, 50, 50, 50, 3000, 0, 0);
                                                                  cm.fieldEffect_BackgroundCanvas(5, 50, 50, 50, 3000, 0, 0);
                                                                  cm.fieldEffect_BackgroundCanvas(2, 50, 50, 50, 3000, 0, 0);
                                                                  cm.fieldEffect_BackgroundCanvas(3, 50, 50, 50, 3000, 0, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_PushMoveInfo(0, 1000, -645, 170);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(0);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_PushMoveInfo(0, 100, -645, -450);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(5200);
                                                                          cm.updateInfoQuest(100296, "autoIncTotal=5000;point=97;sum=9736;date=20200129;today=0;total=36");
                                                                          cm.updateInfoQuest(100296, "autoIncTotal=5000;point=97;sum=9736;date=20200130;today=0;total=36");
                                                                          cm.updateInfoQuest(100322, "autoIncTotal=2033;date=20200129;today=0;total=2033");
                                                                          cm.updateInfoQuest(100322, "autoIncTotal=2033;date=20200130;today=0;total=2033");
                                                                          cm.updateInfoQuest(31195, "count=0");
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else if (status === V++) {
                                                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                                                            cm.eventSKill(0);
                                                                            cm.warp(610061020, 0, false);
                                                                            cm.npc_LeaveField("oid=2806376");
                                                                            cm.npc_LeaveField("oid=2806376");
                                                                            cm.npc_LeaveField("oid=2806377");
                                                                            cm.npc_LeaveField("oid=2806377");
                                                                            cm.npc_LeaveField("oid=2806378");
                                                                            cm.npc_LeaveField("oid=2806378");
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