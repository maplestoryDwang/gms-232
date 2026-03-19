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
      cm.showMapleHero();
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.sendNewEffects(17, [0, 1000, 1000, 1800, -870]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(1);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face4#涌过来的敌人太多了！", 37, 1540805, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face4#这样继续对付敌人会没完没了的。", 37, 1540801, true, true);
                } else {
                  if (status === V++) {
                    cm.onSetMapObjectMove("appear", "02_animation", [2, 0]);
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act2/Aran_eunwol", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion9", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(2300);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion10", 100);
                        cm.npc_ChangeController(1540802, "oid=288534721", 1690, -860, 1, 1640, 1740, 0, true, 0, false);
                        cm.npc_SetSpecialAction("oid=288534721", "summon", 0, 0);
                        cm.npc_ChangeController(1540806, "oid=288534722", 1740, -860, 1, 1690, 1790, 0, true, 0, false);
                        cm.npc_SetSpecialAction("oid=288534722", 'summon', 0, 0);
                        cm.npc_setForceFlip("oid=288534721", 1);
                        cm.npc_setForceFlip("oid=288534722", 1);
                        cm.sendNormalTalk_Bottom("#face0#很抱歉我们来迟了！", 37, 1540802, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#战神！隐月！", 37, 1540805, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=288534721", 1, 120, 150);
                              cm.npc_SetForceMove("oid=288534722", 1, 130, 150);
                              cm.inGameDirectionEvent_MoveAction(1);
                              cm.sendNewEffects(17, [3000, 1000, 1500, 2000, -850]);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_MoveAction(0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.setNpcSpecialActionReset("oid=288534721");
                                    cm.setNpcSpecialActionReset("oid=288534722");
                                    cm.npc_SetSpecialAction("oid=288534721", "stand2", -1, 1);
                                    cm.npc_SetSpecialAction("oid=288534722", "stand2", -1, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("好久不见，战神。", 37, 1540804, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("我还纳闷从哪儿听到一阵巨大的声响，果然是战神啊。", 37, 1540801, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#什么状况，大家都聚到一起了啊，\r\n有两把刷子嘛，龙神？", 37, 1540802, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face3#战神和隐月能来真是万幸，\r\n不过到底发生什么事情了？", 37, 1540805, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#我们为了在后面阻止魔族士兵来迟了，之前潜伏在尼哈沙漠的魔族士兵似乎得有数千人。", 37, 1540806, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face3#魔族士兵？！", 37, 1540805, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#没错，戴米安知道你会来这里，就让追击兵候着。", 37, 1540806, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#在我看来，在雪龟岛上，是戴米安故意放了我们，这个遗迹里肯定有戴米安盯上的东西。", 37, 1540806, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face3#这么说来……", 37, 1540805, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#虽然不知道弗里德到底留下了什么，但是我们现在刻不容缓。", 37, 1540806, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#是啊，还犹豫什么呢？就交给背后这位大姐，你赶紧走吧。", 37, 1540802, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face3#那后面就麻烦你了！", 37, 1540805, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 800);
                                                              cm.sendNewEffects(17, [3000, 1500, 1800, 2000, -800]);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#虽然我记不太清了，但从前似乎也发生过这样的状况。", 37, 1540802, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("当时你以一人之力阻挡住了涌来的大军。", 37, 1540806, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#这样吗？我记不太清了。", 37, 1540802, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face1#今天你身旁有我呢。", 37, 1540806, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#好吧，我的背后就交给你了！", 37, 1540802, true, true);
                                                                        } else if (status === V++) {
                                                                          cm.dispose();
                                                                          cm.warp(350123400, 0, true);
                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                          cm.npc_LeaveField("oid=288534721");
                                                                          cm.npc_LeaveField("oid=288534721");
                                                                          cm.npc_LeaveField("oid=288534722");
                                                                          cm.npc_LeaveField("oid=288534722");
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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