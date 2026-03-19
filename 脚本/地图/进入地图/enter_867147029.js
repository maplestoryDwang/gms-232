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
      cm.npc_ChangeController(9401123, "oid=39309533", -1050, -400, 16, -1100, -1000, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39309533", "summon", 0, 0);
      cm.npc_ChangeController(9401124, "oid=39309534", -980, -400, 5, -1030, -930, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39309534", 'summon', 0, 0);
      cm.npc_ChangeController(9401126, "oid=39309535", -920, -400, 9, -970, -870, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39309535", 'summon', 0, 0);
      cm.npc_ChangeController(9401125, "oid=39309536", -850, -400, 9, -900, -800, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39309536", "summon", 0, 0);
      cm.npc_ChangeController(9401127, "oid=39309537", -790, -400, 35, -840, -740, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39309537", 'summon', 0, 0);
      cm.npc_ChangeController(9401034, "oid=39309538", -1230, -700, 14, -1280, -1180, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39309538", "summon", 0, 0);
      cm.npc_ChangeController(9401035, "oid=39309539", -1300, -700, 13, -1350, -1250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39309539", "summon", 0, 0);
      cm.npc_ChangeController(9401036, "oid=39309540", -1370, -700, 7, -1420, -1320, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39309540", "summon", 0, 0);
      cm.npc_ChangeController(9401037, "oid=39309541", -1430, -700, 6, -1480, -1380, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39309541", "summon", 0, 0);
      cm.npc_ChangeController(9401038, "oid=39309542", -1490, -700, 20, -1540, -1440, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39309542", "summon", 0, 0);
      cm.npc_ChangeController(9401039, "oid=39309543", -1545, -700, 10, -1595, -1495, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39309543", "summon", 0, 0);
      cm.npc_ChangeController(9401040, "oid=39309544", -1600, -750, 19, -1650, -1550, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39309544", "summon", 0, 0);
      cm.npc_ChangeController(9401041, "oid=39309545", -1650, -750, 48, -1700, -1600, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39309545", "summon", 0, 0);
      cm.npc_ChangeController(9401042, "oid=39309546", -1700, -750, 45, -1750, -1650, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39309546", 'summon', 0, 0);
      cm.npc_ChangeController(9401043, "oid=39309547", -1750, -750, 45, -1800, -1700, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39309547", "summon", 0, 0);
      cm.npc_ChangeController(9401044, "oid=39309548", -1800, -800, 43, -1850, -1750, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39309548", "summon", 0, 0);
      cm.npc_ChangeController(9401045, "oid=39309549", -1850, -800, 42, -1900, -1800, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39309549", 'summon', 0, 0);
      cm.npc_ChangeController(9401043, "oid=39309550", -1900, -800, 41, -1950, -1850, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39309550", "summon", 0, 0);
      cm.npc_ChangeController(9401044, "oid=39309551", -1950, -800, 51, -2000, -1900, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39309551", "summon", 0, 0);
      cm.npc_ChangeController(9401045, "oid=39309552", -2000, -800, 51, -2050, -1950, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=39309552", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
      cm.onActionBarResult(6, -1);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
        cm.effect_Text(["#fn黑体##fs20##e深渊地下深处……"], [50, 2000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 20000, 0);
          cm.sendNewEffects(12, [0, -2000, -500, 0, 0]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.sendNewEffects(12, [6000, 100, -250, 0, 0]);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('#b好……黑啊。', 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("而且特别冷。", 37, 9401032, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("地面坚硬如铁，没法破坏。", 37, 9401033, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#b再往里一点看看吧？", 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNewEffects(12, [1000, -800, -350, 0, 0]);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("会迷路的。至少要留下点痕迹。", 37, 9401037, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("这……这里真的什么也看不见啊……？", 37, 9401038, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Skill/322.img/skill/3221052/effect", "oid=39309536"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("再怎么说也……", 37, 9401029, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("看来这里就到头了。", 37, 9401030, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("嗯……真的什么也没有吗？", 37, 9401031, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_setForceFlip("oid=39309536", -1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_setForceFlip("oid=39309533", -1);
                                                    cm.npc_setForceFlip("oid=39309534", -1);
                                                    cm.npc_setForceFlip("oid=39309535", -1);
                                                    cm.npc_setForceFlip("oid=39309537", -1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("是啊。就算找不到珍贵的宝物，不能开启崭新的命运，至少也应该有危险的敌人吧？", 37, 9401035, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("嘿嘿，就是没有敌人，才能让你在这里装腔作势。等敌人真的出现了，你就要头也不回地逃跑了吧。", 37, 9401048, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("你说谁会逃跑？我吗？哈哈哈，这真是我近期听过最好笑的笑话了。", 37, 9401035, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#b确实有点空旷。", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("这不就是冒险的乐趣吗？", 37, 9401037, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("埃尔维斯说的没错。冒险的乐趣就在于未知。要是提前知道会遇见什么，那就太无聊了吧？", 37, 9401041, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#b没错，是的。", 57, 0, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("真正的冒险不是为了遇见新事物，而是带着全新的目光去看待世界。", 37, 9401030, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("哇～～这话真帅。这群冒险家偶尔也会说出一些金句嘛。", 37, 9401044, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#b噗哈哈，这句话真的很酷。", 57, 0, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("不说这些，既然已经看见深渊尽头，我终于能睡个好觉了。", 37, 9401035, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("我要好好考虑一下，接下来该去哪里。", 37, 9401046, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("我也是，我也是！因为遇见了厉害的队长，冒险比预计结束得要早，现在就回家总觉得有些可惜。", 37, 9401040, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("我在想，要不要去爬一座险峻的山呢。这次已经看过地下的景色，也该看看地上了。", 37, 9401045, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("这次的经历……我永生难忘。", 37, 9401032, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#b大家的计划都很酷。", 57, 0, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#b那现在就上去吧？把我们所看见的转告给本部里的人们。", 57, 0, true, true);
                                                                                    } else if (status === V++) {
                                                                                      cm.warp(867147008, 0, true);
                                                                                      cm.updateInfoQuest(64787, "chk=1");
                                                                                      cm.npc_LeaveField("oid=39309533");
                                                                                      cm.npc_LeaveField("oid=39309533");
                                                                                      cm.npc_LeaveField("oid=39309534");
                                                                                      cm.npc_LeaveField("oid=39309534");
                                                                                      cm.npc_LeaveField("oid=39309535");
                                                                                      cm.npc_LeaveField("oid=39309535");
                                                                                      cm.npc_LeaveField("oid=39309536");
                                                                                      cm.npc_LeaveField("oid=39309536");
                                                                                      cm.npc_LeaveField("oid=39309537");
                                                                                      cm.npc_LeaveField("oid=39309537");
                                                                                      cm.npc_LeaveField("oid=39309538");
                                                                                      cm.npc_LeaveField("oid=39309538");
                                                                                      cm.npc_LeaveField("oid=39309539");
                                                                                      cm.npc_LeaveField("oid=39309539");
                                                                                      cm.npc_LeaveField("oid=39309540");
                                                                                      cm.npc_LeaveField("oid=39309540");
                                                                                      cm.npc_LeaveField("oid=39309541");
                                                                                      cm.npc_LeaveField("oid=39309541");
                                                                                      cm.npc_LeaveField("oid=39309542");
                                                                                      cm.npc_LeaveField("oid=39309542");
                                                                                      cm.npc_LeaveField("oid=39309543");
                                                                                      cm.npc_LeaveField("oid=39309543");
                                                                                      cm.npc_LeaveField("oid=39309544");
                                                                                      cm.npc_LeaveField("oid=39309544");
                                                                                      cm.npc_LeaveField("oid=39309545");
                                                                                      cm.npc_LeaveField("oid=39309545");
                                                                                      cm.npc_LeaveField("oid=39309546");
                                                                                      cm.npc_LeaveField("oid=39309546");
                                                                                      cm.npc_LeaveField("oid=39309547");
                                                                                      cm.npc_LeaveField("oid=39309547");
                                                                                      cm.npc_LeaveField("oid=39309548");
                                                                                      cm.npc_LeaveField("oid=39309548");
                                                                                      cm.npc_LeaveField("oid=39309549");
                                                                                      cm.npc_LeaveField("oid=39309549");
                                                                                      cm.npc_LeaveField("oid=39309550");
                                                                                      cm.npc_LeaveField("oid=39309550");
                                                                                      cm.npc_LeaveField("oid=39309551");
                                                                                      cm.npc_LeaveField("oid=39309551");
                                                                                      cm.npc_LeaveField("oid=39309552");
                                                                                      cm.npc_LeaveField("oid=39309552");
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