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
      cm.npc_ChangeController(1540795, "oid=57950", -1427, 35, 2, -1477, -1377, 1, false, 0, false);
      cm.updateInfoQuest(33915, "act1=350112400;act2=350120000");
      cm.updateInfoQuest(33970, "check4=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.forceStartQuest(33900, '4');
      cm.mapleHeroBecomeNpc(7, 0);
      cm.getPlayer().makeDragon(2217);
      cm.onActionBarResult(6, -1);
      cm.onActionBarResult(5, 30);
      cm.mapleHeroSetList([4]);
      cm.npc_ChangeController(1540807, "oid=287677808", -890, 250, 25, -940, -840, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=287677808", 'summon', 0, 0);
      cm.Hidden_background("HofM2_trap", 1, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -784, -800);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(5000, 1000, 5000, -784, 150);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face6#他们没有来啊……", 37, 1540805, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('……', 37, 1540807, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.setAmbience("Ambience.img/wind", 100, 60);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.playSoundEffDirectly("Ambience.img/wind");
                        cm.sendNormalTalk_Bottom("#face6#肯定大家都在来的路上。", 37, 1540805, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#可是距离约定的时间已经过去好久了……", 37, 1540807, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face6#哎……我原来只是有点担心，没想到真的一个都不来，难道我做错什么了吗？", 37, 1540805, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_ProcessOnOffLayer("ACT2", "Map/Effect2.img/HofM/ACT2", 0, 1000, 0, 0, 30, 4, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("很抱歉，不过我得过会儿再来加入了。", 37, 1540802, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#什么？", 37, 1540805, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我总觉得摩诃的状态可能不太好，\r\n刚刚碰到戴米安武器的时候，好像是受伤了。", 37, 1540802, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face3#没事吗？", 37, 1540805, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("会没事的，不过那个武器居然能够伤到摩诃……\r\n这家伙的剑看来并不一般。", 37, 1540802, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("我很熟悉治愈武器的方法，\r\n我也随战神一起去吧。", 37, 1540806, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#我一个人能说服其他英雄吗？", 37, 1540805, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("别担心，龙神，你可是弗里德的继承人。\r\n弗里德可是具备着吸引人的魅力。", 37, 1540806, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#是啊，我很快就会加入你们的，你就集齐大家等着吧，知道了吧？", 37, 1540802, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_ProcessOnOffLayer("ACT2", '', 2, 1500, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face6#嘤嘤……也许我并没有不够格当弗里德的继承人？", 37, 1540805, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#越是这样，哪怕我们两个人也得去啊。\r\n你就当这是弗里德所留下的考验就好。", 37, 1540807, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("是啊，你说得没错，米乐！", 37, 1540805, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#别丢了自信！你要是再说这种气馁的话，我就吃了你哦，主人。", 37, 1540807, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2#等一下，米乐，你刚是真的在咂巴嘴吗？！", 37, 1540805, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#来，出发！", 37, 1540807, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue("#fs34#\r\n\r\n\r\n\r\n\r\n-ACT 2-\r\n#fs28#阿布拉克萨斯: #fs20#预言圣殿", 1);
                                                                    cm.effect_Voice("Field.img/flowervioleta/wink", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
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
                                                                            cm.npc_LeaveField("oid=287677808");
                                                                            cm.npc_LeaveField("oid=287677808");
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.setNumberForQuestCustomData(33900, 4);
                                                                            cm.showMapleHero();
                                                                            cm.mapleHeroSetList([4]);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;