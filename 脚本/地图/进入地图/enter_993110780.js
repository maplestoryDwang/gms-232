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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.npc_ChangeController(3004151, "oid=1972355", -54, -57, 2, -104, -4, 0, false, 1000, false);
      cm.npc_SetSpecialAction("oid=1972355", "summon", 0, 0);
      cm.npc_ChangeController(3004081, "oid=1972356", 50, -51, 2, 0, 100, 1, true, 1000, false);
      cm.npc_SetSpecialAction("oid=1972356", "summon", 0, 0);
      cm.npc_ChangeController(3004114, "oid=1972357", 138, -53, 2, 88, 188, 1, true, 1000, false);
      cm.npc_SetSpecialAction("oid=1972357", "summon", 0, 0);
      cm.npc_ChangeController(3004104, "oid=1972358", 217, -51, 2, 167, 267, 1, false, 1000, false);
      cm.npc_SetSpecialAction("oid=1972358", "summon", 0, 0);
      cm.npc_ChangeController(3004105, "oid=1972359", 297, -57, 2, 247, 347, 1, false, 1000, false);
      cm.npc_SetSpecialAction("oid=1972359", "summon", 0, 0);
      cm.npc_ChangeController(3004106, "oid=1972360", 390, -46, 2, 340, 440, 1, false, 1000, false);
      cm.npc_SetSpecialAction("oid=1972360", "summon", 0, 0);
      cm.npc_ChangeController(3004107, "oid=1972361", 487, -56, 2, 437, 537, 1, false, 1000, false);
      cm.npc_SetSpecialAction("oid=1972361", 'summon', 0, 0);
      cm.npc_ChangeController(3004092, "oid=1972362", -156, -48, 1, -206, -106, 0, true, 1000, false);
      cm.npc_SetSpecialAction("oid=1972362", "summon", 0, 0);
      cm.npc_ChangeController(3004156, "oid=1972363", -244, -41, 1, -294, -194, 0, false, 1000, false);
      cm.npc_SetSpecialAction("oid=1972363", 'summon', 0, 0);
      cm.npc_ChangeController(3004096, "oid=1972364", -355, -31, 1, -405, -305, 0, false, 1000, false);
      cm.npc_SetSpecialAction("oid=1972364", "summon", 0, 0);
      cm.npc_ChangeController(3004094, "oid=1972365", -460, -20, 1, -510, -410, 0, true, 1000, false);
      cm.npc_SetSpecialAction("oid=1972365", "summon", 0, 0);
      cm.npc_ChangeController(3004095, "oid=1972366", -569, -39, 1, -619, -519, 0, false, 1000, false);
      cm.npc_SetSpecialAction("oid=1972366", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm49/FerociousBattlefield_RiserEdit", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face3#白色之矛全速前进！直击巨人心脏！", 37, 3003750, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("女皇希纳斯麾下旗舰白色之矛\r\n向黑魔法师发起冲锋的同时。", 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction22.img/effect/restart_death/0", 0, 1000, 0, 0, 1, 4, 0);
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n         对抗者终于成功激发了封印石中的力量。", 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction22.img/effect/restart_death/1", 0, 1000, 0, 0, 1, 4, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                              寄托了所有人心愿的光之剑\r\n                              刺穿了黑魔法师的心脏。", 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction22.img/effect/restart_death/2", 0, 1000, 0, 0, 1, 4, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_Hero9(0, 3000);
                              cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(700);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(700);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 1500, 0, 0, 0, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1700);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_Hero9(100, 50);
                                      cm.fieldEffect_PlayBGM("Bgm50/NewBeginningNotTheEnd", 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue("当醒悟自身正在既定的命运中前行，就连自由的意志都需要怀疑时……", 0);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_Monologue('你感受到了什么？', 0);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue("\r\n\r\n                                     绝望……无助。", 0);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("                                     以及……愤怒？", 0);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("\r\n\r\n这就足够了。", 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_Monologue("希望你能将这愤怒永刻心间。", 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_Monologue("留下了最终的嘱托，黑魔法师随即湮灭。", 0);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_Monologue("历时数百年的凄怆战争，竟以此作结。", 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_SetHideEffect(1);
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -387, -213);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_PushScaleInfo(20000, 0, 1000, 20000, -54, -213);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(20000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_Hero9(0, 3500);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                  cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n#fs40#            那一天之后", 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      var O = cm.getJob();
                                                                                      if (Math.floor(O / 100) == 23 || Math.floor(O / 100) == 24 || Math.floor(O / 100) == 22 || Math.floor(O / 100) == 25 || Math.floor(O / 100) == 21 || Math.floor(O / 100) == 27) {
                                                                                        var b = 993110750;
                                                                                      } else {
                                                                                        if (Math.floor(O / 100) == 11 || Math.floor(O / 100) == 12 || Math.floor(O / 100) == 13 || Math.floor(O / 100) == 14 || Math.floor(O / 100) == 15 || Math.floor(O / 100) == 51) {
                                                                                          var b = 993110763;
                                                                                        } else {
                                                                                          if (Math.floor(O / 10) == 11 || Math.floor(O / 10) == 12 || Math.floor(O / 10) == 13 || Math.floor(O / 10) == 21 || Math.floor(O / 10) == 22 || Math.floor(O / 10) == 23 || Math.floor(O / 10) == 31 || Math.floor(O / 10) == 32 || Math.floor(O / 10) == 33 || Math.floor(O / 10) == 41 || Math.floor(O / 10) == 42 || Math.floor(O / 10) == 43 || Math.floor(O / 10) == 51 || Math.floor(O / 10) == 52 || Math.floor(O / 10) == 53) {
                                                                                            var b = 993110765;
                                                                                          } else {
                                                                                            if (Math.floor(O / 100) == 64) {
                                                                                              var b = 993110770;
                                                                                            } else {
                                                                                              if (Math.floor(O / 100) == 65) {
                                                                                                var b = 993110771;
                                                                                              } else {
                                                                                                if (Math.floor(O / 100) == 152) {
                                                                                                  var b = 993110773;
                                                                                                } else {
                                                                                                  if (Math.floor(O / 100) == 142) {
                                                                                                    var b = 993110775;
                                                                                                  } else {
                                                                                                    if (Math.floor(O / 100) == 101) {
                                                                                                      var b = 993110776;
                                                                                                    } else {
                                                                                                      if (Math.floor(O / 100) == 61) {
                                                                                                        var b = 993110778;
                                                                                                      } else {
                                                                                                        if (Math.floor(O / 100) == 155) {
                                                                                                          var b = 993110779;
                                                                                                        } else {
                                                                                                          if (Math.floor(O / 1000) == 3) {
                                                                                                            var b = 993110760;
                                                                                                          } else {
                                                                                                            if (Math.floor(O / 100) == 164) {
                                                                                                              var b = 993110787;
                                                                                                            } else {
                                                                                                              if (Math.floor(O / 100) == 41 || Math.floor(O / 100) == 42) {
                                                                                                                var b = 867140000;
                                                                                                              } else {
                                                                                                                if (Math.floor(O / 100) == 112) {
                                                                                                                  var b = 867140300;
                                                                                                                } else {
                                                                                                                  if (Math.floor(O / 10) == 57) {
                                                                                                                    var b = 993110766;
                                                                                                                  } else {
                                                                                                                    var b = 0;
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                      if (b > 0) {
                                                                                        cm.dispose();
                                                                                        cm.warp(b, 0, false);
                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                        cm.npc_LeaveField("oid=1972355");
                                                                                        cm.npc_LeaveField("oid=1972355");
                                                                                        cm.npc_LeaveField("oid=1972356");
                                                                                        cm.npc_LeaveField("oid=1972356");
                                                                                        cm.npc_LeaveField("oid=1972357");
                                                                                        cm.npc_LeaveField("oid=1972357");
                                                                                        cm.npc_LeaveField("oid=1972358");
                                                                                        cm.npc_LeaveField("oid=1972358");
                                                                                        cm.npc_LeaveField("oid=1972359");
                                                                                        cm.npc_LeaveField("oid=1972359");
                                                                                        cm.npc_LeaveField("oid=1972360");
                                                                                        cm.npc_LeaveField("oid=1972360");
                                                                                        cm.npc_LeaveField("oid=1972361");
                                                                                        cm.npc_LeaveField("oid=1972361");
                                                                                        cm.npc_LeaveField("oid=1972362");
                                                                                        cm.npc_LeaveField("oid=1972362");
                                                                                        cm.npc_LeaveField("oid=1972363");
                                                                                        cm.npc_LeaveField("oid=1972363");
                                                                                        cm.npc_LeaveField("oid=1972364");
                                                                                        cm.npc_LeaveField("oid=1972364");
                                                                                        cm.npc_LeaveField("oid=1972365");
                                                                                        cm.npc_LeaveField("oid=1972365");
                                                                                        cm.npc_LeaveField("oid=1972366");
                                                                                        cm.npc_LeaveField("oid=1972366");
                                                                                      } else {
                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      }
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
                                                                                                    cm.forceStartQuest(39701, '');
                                                                                                    cm.eventSKill(0);
                                                                                                    cm.dispose();
                                                                                                    cm.warp(993120000, 5, false);
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