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
      cm.setNumberForQuestCustomData(33900, 6);
      cm.getPlayer().removeDragon();
      cm.mapleHeroBecomeNpc(9, 0);
      cm.onActionBarResult(6, -1);
      cm.onActionBarResult(5, 32);
      cm.npc_ChangeController(1540815, "oid=287859484", 1000, 500, 6, 950, 1050, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=287859484", "summon", 0, 0);
      cm.setAmbience("Ambience.img/gravity", 100, 60);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.emotion(5, -1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -89, 474);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(600);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Aran/down", 100);
          cm.inGameDirectionEvent_MoveAction(4);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
          cm.effect_LastingEff("Effect/CharacterEff.img/HofM/fall2", 1, 1000, 0);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face4#米乐……？", 37, 1540805, false, true);
            cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/1", 128);
          } else {
            if (status === V++) {
              cm.emotion(0, -1);
              cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 11, 474);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(2);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(0);
                  cm.sendNormalTalk_Bottom("#face3#米乐，你在哪儿？米乐！", 37, 1540805, false, true);
                  cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/2", 128);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 211, 474);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(2);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(0);
                        cm.emotion(4, 10000);
                        cm.sendNormalTalk_Bottom("#face5#呜呜，我完蛋了……居然独自一人被孤立在到处都有魔族的巢穴……", 37, 1540805, false, true);
                        cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/3", 128);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("不对，越是这种时候，我越不应该气馁，龙神，你可以活下去。", 37, 1540805, true, true);
                          cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/4", 128);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("是啊，加油，父母也一直这么对我说的嘛！", 37, 1540805, true, true);
                            cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/5", 128);
                          } else {
                            if (status === V++) {
                              cm.playSoundEffDirectly("Ambience.img/gravity");
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_ProcessOnOffLayer("Evan", "Map/Effect2.img/HofM/Etc", 0, 1500, 0, 0, 0, 4, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.setAmbience("Ambience.img/bird", 100, 60);
                                    cm.sendNormalTalk_Bottom('小不点啊，听好了。', 37, 1540401, false, true);
                                    cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/6", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("是，父亲。", 37, 1540835, true, true);
                                      cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/7", 128);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("这自古啊人就应该遵守本分，\r\n就像是猫捉老鼠狗打洞。", 37, 1540401, true, true);
                                        cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/8", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('难道不是狗看门吗？', 37, 1540835, true, true);
                                          cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/9", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom('……', 37, 1540401, true, true);
                                            cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/10", 128);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("总之若是逾越了自己的本分，就很有可能会倒大霉。\r\n特别是像我们这样的农夫。", 37, 1540401, true, true);
                                              cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/11", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("小不点，来吃煮土豆咯。", 37, 1540402, true, true);
                                                cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/12", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("可，可是我很想去冒险啊。", 37, 1540835, true, true);
                                                  cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/13", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("天啊，这孩子到底知不知道这个世界有多危险？\r\n要是万一有个闪失该怎么办？", 37, 1540402, true, true);
                                                    cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/14", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("哪怕被老虎叼走了，只要振作起来也能活下去哦！", 37, 1540835, true, true);
                                                      cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/15", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("什么鬼？被老虎叼走了就死定了，孩子。", 37, 1540401, true, true);
                                                        cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/16", 128);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom('……', 37, 1540835, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.playSoundEffDirectly("Ambience.img/bird");
                                                            cm.fieldEffect_ProcessOnOffLayer("Evan", '', 2, 2000, 0, 0, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.setAmbience("Ambience.img/gravity", 100, 60);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face1#……看来是帮不上什么忙啊。", 37, 1540805, false, true);
                                                                cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/18", 128);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("总之，我不能太依靠米乐。\r\n偶尔我也得懂得自己解决问题。", 37, 1540805, true, true);
                                                                  cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/19", 128);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("先自己走吧，米乐应该能找得到我的位置，\r\n毕竟我们之间有着很强烈的联系。", 37, 1540805, true, true);
                                                                    cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/20", 128);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 411, 474);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_MoveAction(2);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_MoveAction(0);
                                                                            cm.sendNormalTalk_Bottom("#face2#这地方不通啊！额……到底该怎么通过这里呢，米乐？", 37, 1540805, false, true);
                                                                            cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/22", 128);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face1#对了，米乐不在啊，我真是傻。", 37, 1540805, true, true);
                                                                              cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/23", 128);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("我难道没法用自己的魔法通过这里吗？还是说有其他路……", 37, 1540805, true, true);
                                                                                cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/24", 128);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#有个比这更好的方法。", 37, 1540842, true, true);
                                                                                  cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/25", 128);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("你们是！", 37, 1540805, false, true);
                                                                                      cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/27", 128);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1#好久不见，龙神。", 37, 1540842, true, true);
                                                                                        cm.effect_Voice("Voice3.img/HofM/ACT1/ALONE/26", 128);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3));
                                                                                              cm.forceCompleteQuest(33922);
                                                                                              cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                                                              cm.updateInfoQuest(33960, "33920=1;33921=1;33922=1");
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                              cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
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
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                    } else if (status === V++) {
                                                                                                      cm.npc_LeaveField("oid=287859484");
                                                                                                      cm.npc_LeaveField("oid=287859484");
                                                                                                      cm.dispose();
                                                                                                      cm.warp(350111400, 0, true);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;