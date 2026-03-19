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
      cm.npc_ChangeController(1540795, "oid=59686", -628, 354, 3, -664, -578, 1, false, 0, false);
      cm.updateInfoQuest(33915, "act1=350112400;act2=350123600;act3=350132400;act4=350140100");
      cm.setNumberForQuestCustomData(33900, 7);
      cm.mapleHeroBecomeNpc(10, 0);
      cm.getPlayer().makeDragon(2217);
      cm.onActionBarResult(6, -1);
      cm.onActionBarResult(5, 33);
      cm.mapleHeroSetList([7]);
      cm.npc_ChangeController(1540896, "oid=293445540", -215, 300, 3, -265, -165, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293445540", "summon", 0, 0);
      cm.npc_ChangeController(1540897, "oid=293445541", -135, 300, 3, -185, -85, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293445541", 'summon', 0, 0);
      cm.npc_ChangeController(1540898, "oid=293445542", -340, 300, 4, -390, -290, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293445542", "summon", 0, 0);
      cm.npc_ChangeController(1540899, "oid=293445543", -230, 150, 1, -280, -180, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=293445543", "summon", 0, 0);
      cm.npc_ChangeController(1540900, "oid=293445544", -310, 150, 2, -360, -260, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293445544", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 400, 0);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.setAmbience("Ambience.img/city_night", 150, 60);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(2500, 2000, 2500, 400, 200);
          } else {
            if (status === V++) {
              cm.effect_Text(["#fn黑体##fs18#另一方面，#fs15##fn黑体#陌生世界的城市"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === V++) {
                cm.OverlapScreenDetail19(0, 500, 500, 1);
                cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -160, 270);
              } else {
                if (status === V++) {
                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(1540807, "oid=293450194", 100, 347, 3, 50, 150, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=293450194", 'summon', 0, 0);
                    cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, -140, 270);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.OverlapScreenDetail19(0, 500, 500, 1);
                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 195, 349);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 105, 349);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_Hero8(1);
                                cm.fieldEffect_Hero9(40, 5000);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("主人，你没事吗？", 37, 1540807, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#恩，米乐，倒是你有没有受伤？", 37, 1540805, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#不，我的意思是弗里德所留下的阿布拉克萨斯就那么坠入江水之中……", 37, 1540807, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face3#为了不让大家伙受伤，那是最好的办法，更重要的是……", 37, 1540805, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_同时移动镜头和人(1, 90);
                                          cm.npc_SetForceMove("oid=293450194", -1, 0, 300);
                                          cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -70, 349);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face9#额……", 37, 1540879, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("我真是惭愧啊。", 37, 1540880, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#抱歉，我该劝阻住的，我也一时生气就。", 37, 1540878, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("事情已经过去了，这也是没办法的，既然戴米安打定了主意，就一定会想办法夺走的。", 37, 1540805, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face3#虽然我很气愤这么容易就被抢走了，但正因如此，我们就更应该找回被夺走的超越石。", 37, 1540805, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face6#不过，戴米安现在拥有了太过强大的力量，估计很快就会吸收世界树的力量了。", 37, 1540806, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("那把会释放出奇怪气息的剑也会变得更强吧。", 37, 1540802, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1000, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face3#这是我们农场抓老鼠时的事情。", 37, 1540805, false, true);
                                                              cm.effect_Voice("Field.img/flowervioleta/wink", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom('#face6#？', 37, 1540878, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face3#每次都会有老鼠来偷吃粮食，\r\n但是有一天有一只老鼠吃了太多，自己的身体都负荷不了，结果就没法从钻进来的洞逃出去了。", 37, 1540805, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face6#！你的意思是戴米安会自取灭亡吗？", 37, 1540878, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#戴米安吸收了自己难以承受的力量，现在的状态肯定很不稳定。\r\n想要阻止戴米安，找回超越石，就只有现在了。", 37, 1540805, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face3#正如夜光法师所言，超越石是一种很危险的物质，但……", 37, 1540805, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#超越石拥有的力量就像是一把双刃剑。应该可以用来对付黑魔法师。\r\n绝对不能让戴米安用它来满足自己的欲望。", 37, 1540805, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#龙神说得没错。", 37, 1540879, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("既然那个危险的石头已经来到了冒险岛世界，就不能放任被坏人所用。", 37, 1540880, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("大家都想的一样吧？", 37, 1540805, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face1#龙神，我们都会追随你的。", 37, 1540878, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face3#得快点行动起来，\r\n等到了敌人面前，最好是一分为二，一部分负责后方，一部分负责冲锋。", 37, 1540805, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                          } else if (status === V++) {
                                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                            cm.npc_LeaveField("oid=293450194");
                                                                                            cm.npc_LeaveField("oid=293450194");
                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                            cm.getTopMsgFont("请选择两位参与最后之战的英雄。", 3, 20, 4, 0);
                                                                                            cm.updateInfoQuest(34020, "check1=1;check4=1");
                                                                                            cm.updateInfoQuest(34021, "hero1=-1;hero2=-1");
                                                                                            cm.fieldEffect_Hero8(0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;