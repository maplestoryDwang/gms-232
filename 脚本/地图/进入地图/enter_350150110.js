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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.showMapleHero();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -530, -600);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.npc_ChangeController(1540780, "oid=286278086", -558, -997, 55, -608, -508, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=286278086", "summon", 0, 0);
        cm.npc_ChangeController(1540807, "oid=286278087", -394, -997, 62, -444, -344, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=286278087", "summon", 0, 0);
        cm.npcMove(1540807, 0, -30, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, -530, -850);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("这里应该能够安静说会儿话了。", 37, 1540801, false, true);
              } else {
                if (status === V++) {
                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                  cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -530, -900);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("所以，你来找我是有什么事？", 37, 1540801, false, true);
                    } else {
                      if (status === V++) {
                        cm.askMenu_Bottom("(额……好紧张啊，到底该怎么提起呢？)\r\n#b#L0#开门见山地说。#l\r\n#L1#婉转地打开话题。#l", 37, 1540805);
                      } else {
                        if (status === V++) {
                          selectionLog[100] = e;
                          cm.setNumberForQuestInfo(33952, 'p1', selectionLog[100]);
                          if (selectionLog[100] == 0) {
                            cm.sendNormalTalk_Bottom("我就直接说了，我们需要你，双弩精灵。\r\n#b(将弗里德的话转告给双弩精灵)", 37, 1540805, false, true);
                          } else {
                            cm.sendNormalTalk_Bottom("真漂亮啊，埃欧雷的风景尽收眼底。", 37, 1540805, false, true);
                          }
                        } else {
                          if (status === V++) {
                            if (selectionLog[100] == 0) {
                              cm.inGameDirectionEvent_AskAnswerTime(1);
                            } else {
                              cm.sendNormalTalk_Bottom("#face1#这可是人类一辈子都欣赏不到的风景。\r\n作为从你那拿了土豆吃的报酬，这也算很丰厚了吧。", 37, 1540801, true, true);
                            }
                          } else {
                            if (status === V++) {
                              if (selectionLog[100] == 0) {
                                cm.inGameDirectionEvent_AskAnswerTime(1);
                              } else {
                                cm.sendNormalTalk_Bottom("#b(将弗里德的话转告给双弩精灵)", 37, 1540805, true, true);
                              }
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -530, -900);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_Hero8(1);
                                    cm.fieldEffect_Hero9(40, 2000);
                                    cm.sendNormalTalk_Bottom("#face0#是这样啊，弗里德他……", 37, 1540801, false, true);
                                    cm.effect_Voice("Voice3.img/HofM/INTERLUDE/MER/1", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_ProcessOnOffLayer('masking_up', "Map/Effect2.img/blackHeavenCinematic/masking", 0, 0, 0, 99, 20, 1, 1);
                                      cm.fieldEffect_ProcessOnOffLayer("masking_down", "Map/Effect2.img/blackHeavenCinematic/masking", 0, 0, 0, -100, 20, 7, 1);
                                      cm.fieldEffect_ProcessOnOffLayer("Mer", "Map/Effect2.img/HofM/ACT1_5/0", 0, 1500, 0, 0, 10, 4, 0);
                                      cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/ACT1_5/5/main_001", "animation", '', ''], [0, 0, 1, 0, 0, 0, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#这段时间以来，我在外面经历了太多的战斗。\r\n我原以为这样就可以找到一点线索。", 37, 1540801, false, true);
                                        cm.effect_Voice("Voice3.img/HofM/INTERLUDE/MER/2", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#但终究我却什么都给不了我的百姓。\r\n是我的自私让他们依然困顿于寒冰之中。", 37, 1540801, true, true);
                                          cm.effect_Voice("Voice3.img/HofM/INTERLUDE/MER/3", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#作为精灵之王，我也是时候该去照顾我的同族了。\r\n很抱歉，看样子我得拒绝你的提议了。", 37, 1540801, true, true);
                                            cm.effect_Voice("Voice3.img/HofM/INTERLUDE/MER/4", 128);
                                          } else {
                                            if (status === V++) {
                                              cm.askMenu_Bottom("(……双弩精灵似乎在犹豫，该怎么说服呢？)\r\n#b#L0#我们需要你的力量。#l\r\n#L1#日后我会帮助你的。#l\r\n#L2#这件事终究会对你的目的有所帮助的。#l", 37, 1540805);
                                            } else {
                                              if (status === V++) {
                                                selectionLog[101] = e;
                                                cm.setNumberForQuestInfo(33952, 'p2', selectionLog[101]);
                                                if (selectionLog[101] == 0) {
                                                  cm.sendNormalTalk_Bottom("#face3#弗里德一直坚信，只有集齐所有英雄，才能够突破难关。", 37, 1540805, false, true);
                                                } else if (selectionLog[101] == 1) {
                                                  cm.sendNormalTalk_Bottom("#face3#弗里德一直坚信，只有集齐所有英雄，才能够突破难关。", 37, 1540805, false, true);
                                                } else {
                                                  cm.sendNormalTalk_Bottom("#face3#弗里德一直坚信，只有集齐所有英雄，才能够突破难关。", 37, 1540805, false, true);
                                                }
                                              } else {
                                                if (status === V++) {
                                                  if (selectionLog[101] == 0) {
                                                    cm.sendNormalTalk_Bottom("#face3#虽然我们有战士也有魔法师，\r\n但任何东西都替代不了王之弓箭。", 37, 1540805, true, true);
                                                  } else if (selectionLog[101] == 1) {
                                                    cm.sendNormalTalk_Bottom("#face3#虽然我们有战士也有魔法师，\r\n但任何东西都替代不了王之弓箭。", 37, 1540805, true, true);
                                                  } else {
                                                    cm.sendNormalTalk_Bottom("#face3#虽然我们有战士也有魔法师，\r\n但任何东西都替代不了王之弓箭。", 37, 1540805, true, true);
                                                  }
                                                } else {
                                                  if (status === V++) {
                                                    if (selectionLog[101] == 0) {
                                                      cm.sendNormalTalk_Bottom("#face3#我们真的很需要你，双弩精灵。", 37, 1540805, true, true);
                                                    } else if (selectionLog[101] == 1) {
                                                      cm.sendNormalTalk_Bottom("#face3#我们真的很需要你，双弩精灵。", 37, 1540805, true, true);
                                                    } else {
                                                      cm.sendNormalTalk_Bottom("#face3#我们真的很需要你，双弩精灵。", 37, 1540805, true, true);
                                                    }
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_ProcessOnOffLayer("Mer", '', 2, 2000, 0, 0, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -480, -900);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_ProcessOnOffLayer("masking_up", '', 2, 100, 0, 0, 0, 0, 0);
                                                          cm.fieldEffect_ProcessOnOffLayer("masking_down", '', 2, 100, 0, 0, 0, 0, 0);
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("你只要来我告诉你的地方就好，\r\n我们说好在同一天同一个时间集合，\r\n我们就到时候见。", 37, 1540805, false, true);
                                                                cm.effect_Voice("Voice3.img/HofM/INTERLUDE/MER/13", 128);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_SetHideEffect(1);
                                                                    cm.npc_LeaveField("oid=286278087");
                                                                    cm.npc_LeaveField("oid=286278087");
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, -431, -974, 1, 0, 1, 1, 0]);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/Teleport"], [0, -393, -1000, 1, 0, 1, 1, 0]);
                                                                    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/1111002/Use", 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_PushScaleInfo(1500, 2000, 1500, -530, -900);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("好奇怪，分明语气和行动都大相径庭……\r\n可我却好像能看到你的样子，弗里德。", 37, 1540801, false, true);
                                                                          cm.effect_Voice("Voice3.img/HofM/INTERLUDE/MER/14", 128);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("好吧，果然坐着苦恼问题不符合我的性格。", 37, 1540801, false, true);
                                                                              cm.effect_Voice("Voice3.img/HofM/INTERLUDE/MER/15", 128);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3));
                                                                                    cm.forceCompleteQuest(33947);
                                                                                    cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                                                    cm.updateInfoQuest(33961, "33947=1");
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                  } else if (status === V++) {
                                                                                    cm.setNumberForQuestInfo(33907, "check1", 1);
                                                                                    cm.dispose();
                                                                                    cm.warp(350150000, 0, true);
                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                    cm.npc_LeaveField("oid=286278086");
                                                                                    cm.npc_LeaveField("oid=286278086");
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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