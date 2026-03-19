var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  var V = cm.getNumberFromQuestInfo(34021, "hero1");
  var O = cm.getNumberFromQuestInfo(34021, "hero2");
  status++;
  selectionLog[status] = e;
  var b = -1;
  if (status <= b++) {
    cm.dispose();
  } else {
    if (status === b++) {
      cm.npc_ChangeController(1540795, "oid=59907", -1580, -720, 20, -1581, -1530, 1, false, 0, false);
      cm.updateInfoQuest(33915, "act1=350112400;act2=350123600;act3=350132400;act4=350140900");
      cm.updateInfoQuest(34020, "check1=1;check2=1;check3=1;check4=1;check9=1");
      cm.npc_ChangeController(1540913, "oid=290944243", -890, -800, 17, -940, -840, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=290944243", "summon", 0, 0);
      cm.npc_ChangeController(1540807, "oid=290944244", -1280, -800, 23, -1330, -1230, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=290944244", "summon", 0, 0);
      cm.npc_ChangeController(1540801 + V, "oid=290944245", -1250, -800, 23, -1300, -1200, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=290944245", "summon", 0, 0);
      cm.npc_ChangeController(1540801 + O, "oid=290944246", -1300, -800, 23, -1350, -1250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=290944246", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -1190, -700);
      cm.curNodeEventEnd(true);
    } else {
      if (status === b++) {
        cm.forceStartQuest(33900, '7');
        cm.mapleHeroBecomeNpc(10, 0);
        cm.getPlayer().makeDragon(2217);
        cm.onActionBarResult(6, -1);
        cm.onActionBarResult(5, 33);
        cm.mapleHeroSetList([7]);
        cm.npc_SetSpecialAction("oid=290944243", "stand2", -1, 1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === b++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === b++) {
            cm.sendNormalTalk_Bottom("#face3#这棵树到底连到哪里啊？", 37, 1540805, false, true);
          } else {
            if (status === b++) {
              cm.sendNormalTalk_Bottom("#face4#好像越长越大了，趁着现在还不迟，得赶紧阻止戴米安。", 37, 1540801, true, true);
            } else {
              if (status === b++) {
                cm.sendNormalTalk_Bottom("#face0#大家都小心点前面！", 37, 1540801 + V, true, true);
              } else {
                if (status === b++) {
                  cm.inGameDirectionEvent_PushScaleInfo(100, 2000, 100, -1100, -700);
                } else {
                  if (status === b++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === b++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, -1050, -720, 1, 0, 1, 1, 0]);
                      cm.fieldEffect_PlayFieldSound("summon/0", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(50);
                    } else {
                      if (status === b++) {
                        cm.npc_ChangeController(1540911, "oid=290947857", -1050, -800, 25, -1100, -1000, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=290947857", "summon", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(150);
                      } else {
                        if (status === b++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, -810, -720, 1, 0, 1, 1, 0]);
                          cm.fieldEffect_PlayFieldSound("summon/0", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(50);
                        } else {
                          if (status === b++) {
                            cm.npc_ChangeController(1540911, "oid=290947913", -810, -800, 18, -860, -760, 1, true, 0, false);
                            cm.npc_SetSpecialAction("oid=290947913", "summon", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(100);
                          } else {
                            if (status === b++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, -890, -720, 1, 0, 1, 1, 0]);
                              cm.fieldEffect_PlayFieldSound("summon/0", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(50);
                            } else {
                              if (status === b++) {
                                cm.npc_ChangeController(1540911, "oid=290949154", -890, -800, 17, -940, -840, 1, true, 0, false);
                                cm.npc_SetSpecialAction("oid=290949154", "summon", 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(200);
                              } else {
                                if (status === b++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, -970, -720, 1, 0, 1, 1, 0]);
                                  cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(50);
                                } else {
                                  if (status === b++) {
                                    cm.npc_ChangeController(1540911, "oid=290949157", -970, -800, 17, -1020, -920, 1, true, 0, false);
                                    cm.npc_SetSpecialAction("oid=290949157", "summon", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(150);
                                  } else {
                                    if (status === b++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, -730, -720, 1, 0, 1, 1, 0]);
                                      cm.fieldEffect_PlayFieldSound("summon/0", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(50);
                                    } else {
                                      if (status === b++) {
                                        cm.npc_ChangeController(1540911, "oid=290949159", -730, -800, 19, -780, -680, 1, true, 0, false);
                                        cm.npc_SetSpecialAction("oid=290949159", 'summon', 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === b++) {
                                          cm.sendNormalTalk_Bottom("#face3#是敌人！", 37, 1540805, false, true);
                                        } else {
                                          if (status === b++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === b++) {
                                              cm.npc_SetSpecialAction("oid=290944243", "special2", 1, 1);
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/demon", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                            } else {
                                              if (status === b++) {
                                                cm.npc_SetSpecialAction("oid=290947857", "die1", 1, 1);
                                                cm.npc_SetSpecialAction("oid=290949157", "die1", 1, 1);
                                                cm.npc_SetSpecialAction("oid=290949154", "die1", 1, 1);
                                                cm.npc_SetSpecialAction("oid=290947913", "die1", 1, 1);
                                                cm.npc_SetSpecialAction("oid=290949159", "die1", 1, 1);
                                                cm.userSetFieldFloating(350140900, 20, 20, 20);
                                                cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                cm.effect_Voice("Mob.img/8240179/Die", 100);
                                              } else {
                                                if (status === b++) {
                                                  cm.userSetFieldFloating(350140900, 0, 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === b++) {
                                                    cm.npc_LeaveField("oid=290947857");
                                                    cm.npc_LeaveField("oid=290947857");
                                                    cm.npc_LeaveField("oid=290949157");
                                                    cm.npc_LeaveField("oid=290949157");
                                                    cm.npc_LeaveField("oid=290949154");
                                                    cm.npc_LeaveField("oid=290949154");
                                                    cm.npc_LeaveField("oid=290947913");
                                                    cm.npc_LeaveField("oid=290947913");
                                                    cm.npc_LeaveField("oid=290949159");
                                                    cm.npc_LeaveField("oid=290949159");
                                                    cm.sendNormalTalk_Bottom("你们……？", 37, 1540808, false, true);
                                                  } else {
                                                    if (status === b++) {
                                                      cm.sendNormalTalk_Bottom("#face0#军团长！", 37, 1540801 + O, true, true);
                                                    } else {
                                                      if (status === b++) {
                                                        cm.sendNormalTalk_Bottom("既然你们还这么叫我，就表示你们也都是从过去苏醒的人啊。", 37, 1540808, true, true);
                                                      } else {
                                                        if (status === b++) {
                                                          cm.sendNormalTalk_Bottom("#face4#你打算在这里拦住我们吗？", 37, 1540801 + V, true, true);
                                                        } else {
                                                          if (status === b++) {
                                                            cm.sendNormalTalk_Bottom("不，时间所剩无多了，我可不想在这种地方浪费时间。", 37, 1540808, true, true);
                                                          } else {
                                                            if (status === b++) {
                                                              cm.sendNormalTalk_Bottom("#face0#等着，你也知道吧，\r\n这次魔族在冒险岛世界所犯下的罪行是绝对不能被原谅的。", 37, 1540801 + O, true, true);
                                                            } else {
                                                              if (status === b++) {
                                                                cm.sendNormalTalk_Bottom("#face3#我知道，但是……", 37, 1540808, true, true);
                                                              } else {
                                                                if (status === b++) {
                                                                  cm.sendNormalTalk_Bottom("这也是魔族的事情，\r\n想要了结此事，不该是你们，而是由作为魔族的我来才对。", 37, 1540808, true, true);
                                                                } else {
                                                                  if (status === b++) {
                                                                    cm.sendNormalTalk_Bottom("#face3#你等等，我们的目的也是阻止戴米安，\r\n和我们一起合作吧！", 37, 1540805, true, true);
                                                                  } else {
                                                                    if (status === b++) {
                                                                      cm.sendNormalTalk_Bottom("很抱歉，我做不到。", 37, 1540808, true, true);
                                                                    } else {
                                                                      if (status === b++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#为什么，难道因为你们都是魔族吗？", 37, 1540805, true, true);
                                                                      } else {
                                                                        if (status === b++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === b++) {
                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                            cm.sendNormalTalk_Bottom("因为他是我的弟弟。", 37, 1540808, false, true);
                                                                          } else {
                                                                            if (status === b++) {
                                                                              cm.sendNormalTalk_Bottom("#face3#！！", 37, 1540805, true, true);
                                                                            } else {
                                                                              if (status === b++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === b++) {
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, -890, -735, 1, 0, 1, 1, 0]);
                                                                                  cm.npc_LeaveField("oid=290944243");
                                                                                  cm.npc_LeaveField("oid=290944243");
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === b++) {
                                                                                    cm.sendNormalTalk_Bottom("#face3#……消失不见了！", 37, 1540805, false, true);
                                                                                  } else {
                                                                                    if (status === b++) {
                                                                                      cm.sendNormalTalk_Bottom("主人，你看看那边，冒险岛世界！", 37, 1540807, true, true);
                                                                                    } else {
                                                                                      if (status === b++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                      } else {
                                                                                        if (status === b++) {
                                                                                          cm.inGameDirectionEvent_PushScaleInfo(7000, 1000, 7000, 90, -800);
                                                                                        } else {
                                                                                          if (status === b++) {
                                                                                            cm.fieldEffect_PlayBGM("Bgm45.img/Army Of Fears Theme", 0, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(8000);
                                                                                          } else {
                                                                                            if (status === b++) {
                                                                                              cm.sendNormalTalk_Bottom("#face4#再这么下去，冒险岛世界的生命力会全数枯竭的，\r\n最好是抓紧了！", 37, 1540801 + V, false, true);
                                                                                            } else {
                                                                                              if (status === b++) {
                                                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                              } else {
                                                                                                if (status === b++) {
                                                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                } else {
                                                                                                  if (status === b++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                  } else {
                                                                                                    if (status === b++) {
                                                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    } else if (status === b++) {
                                                                                                      cm.npc_LeaveField("oid=290944245");
                                                                                                      cm.npc_LeaveField("oid=290944245");
                                                                                                      cm.npc_LeaveField("oid=290944246");
                                                                                                      cm.npc_LeaveField("oid=290944246");
                                                                                                      cm.npc_LeaveField("oid=290944244");
                                                                                                      cm.npc_LeaveField("oid=290944244");
                                                                                                      cm.updateInfoQuest(33901, "rp=7/" + V + '/' + O);
                                                                                                      cm.setNumberForQuestCustomData(33900, 7);
                                                                                                      cm.showMapleHero();
                                                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                                                      cm.npc_LeaveField("oid=59907");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;