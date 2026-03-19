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
      cm.setInGameDirectionMode(true, true, false);
      cm.npc_ChangeController(3000131, "oid=1053339", -390, 170, 1, -440, -340, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1053339", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 300, -600, 170);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(999);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.effect_Direction("Effect/Direction9.img/kaiserTutorial/Scene2", 0, 0, 0);
            cm.sendNormalTalk("竟然是你这家伙把赫里希安双手奉给了达尔摩尔！！你干出这等恶事，还有脸说自己是诺巴族人吗？！", 17, 3000131, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("评议会和诺巴族人救了你，你竟然以怨报德……我决不能原谅你！", 17, 3000131, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("说的也是，你这种天才怎么会理解我的苦衷呢。我想变得更强大，而只有达尔摩尔才能实现我的愿望。", 9, 3000131, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("虽然不知道你从他那里获得了什么力量，可你觉得自己能赢得了我吗！这点小伤口对我来说算不得什么！", 17, 3000131, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("头脑冷静的狂龙战士看来有点搞不清状况啊，我这就给你分析分析。", 9, 3000131, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("首先呢，我的确从达尔摩尔那里获得了新的力量，但对付诺巴守护神的你，恐怕还不够。但我会傻到直接跟你对敌吗？你太天真了。", 9, 3000131, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("你以为刚刚受的伤只是条小伤痕吧，错，我早已在刚刚的一击内渗入了致命的毒。虽然不能置你于死地，但足够抑制你大部分的力量了。", 9, 3000131, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("……既然如此，我只要在毒素扩散之前灭了你就行了。", 17, 3000131, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("哈哈哈，你以为你会如意吗？赫里希安已经落入达尔摩尔手中。就在此处，数万个幽灵听我的指挥。哪怕你还像平时一样健康，也孤身难敌众手！", 9, 3000131, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("不较量一下怎么知道谁能笑到最后。", 17, 3000131, true, true);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(3000125, "oid=1053429", -750, 170, 2, -800, -700, 1, false, 0, false);
                                cm.npc_SetSpecialAction("oid=1053429", 'summon', 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(210);
                              } else {
                                if (status === V++) {
                                  cm.npc_ChangeController(3000122, "oid=1053430", -650, 170, 2, -700, -600, 1, false, 0, false);
                                  cm.npc_SetSpecialAction("oid=1053430", "summon", 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(210);
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(3000125, "oid=1053431", -550, 170, 2, -600, -500, 1, false, 0, false);
                                    cm.npc_SetSpecialAction("oid=1053431", "summon", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(210);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushMoveInfo(0, 450, -1300, 170);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_MoveAction(1);
                                        cm.inGameDirectionEvent_AskAnswerTime(30);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_MoveAction(0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1526);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_ChangeController(3000122, "oid=1053432", -1150, 170, 3, -1200, -1100, 0, false, 0, false);
                                            cm.npc_SetSpecialAction("oid=1053432", "summon", 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(210);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_ChangeController(3000125, "oid=1053433", -1250, 170, 3, -1300, -1200, 0, false, 0, false);
                                              cm.npc_SetSpecialAction("oid=1053433", "summon", 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(210);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_ChangeController(3000122, "oid=1053434", -1350, 170, 3, -1400, -1300, 0, false, 0, false);
                                                cm.npc_SetSpecialAction("oid=1053434", "summon", 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(210);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_ChangeController(3000125, "oid=1053435", -1450, 170, 4, -1500, -1400, 0, false, 0, false);
                                                  cm.npc_SetSpecialAction("oid=1053435", "summon", 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(210);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_ChangeController(3000122, "oid=1053436", -1550, 170, 4, -1600, -1500, 0, false, 0, false);
                                                    cm.npc_SetSpecialAction("oid=1053436", "summon", 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(210);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_ChangeController(3000125, "oid=1053437", -1650, 170, 4, -1700, -1600, 0, false, 0, false);
                                                      cm.npc_SetSpecialAction("oid=1053437", "summon", 0, 0);
                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_MoveAction(2);
                                                        cm.inGameDirectionEvent_AskAnswerTime(30);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_MoveAction(0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.effect_OnUserEff("Effect/OnUserEff.img/normalEffect/demonSlayer/chatBalloon0");
                                                              cm.effect_Direction("Effect/Direction9.img/kaiserTutorial/Scene2", 0, 0, 0);
                                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/tuto/BalloonMsg2/0"], [0, 0, -120, 0, 0, 0, 0, 0, 0]);
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushMoveInfo(0, 450, -600, 170);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(669);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetSpecialAction("oid=1053339", 'alert', 0, 1);
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/tuto/BalloonMsg1/2", "oid=1053339"], [0, 0, -130, 1, 0, 1, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                    } else if (status === V++) {
                                                                      cm.spawnMobLimit(9300548, 1, -750, 178, 100);
                                                                      cm.spawnMobLimit(9300547, 1, -650, 178, 100);
                                                                      cm.spawnMobLimit(9300548, 1, -550, 178, 100);
                                                                      cm.spawnMobLimit(9300547, 1, -1150, 178, 100);
                                                                      cm.spawnMobLimit(9300548, 1, -1250, 178, 100);
                                                                      cm.spawnMobLimit(9300547, 1, -1350, 178, 100);
                                                                      cm.spawnMobLimit(9300548, 1, -1450, 178, 100);
                                                                      cm.spawnMobLimit(9300547, 1, -1550, 178, 100);
                                                                      cm.spawnMobLimit(9300548, 1, -1650, 178, 100);
                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                      cm.fieldEffect_ScreenMsg("lightning/screenMsg/0");
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