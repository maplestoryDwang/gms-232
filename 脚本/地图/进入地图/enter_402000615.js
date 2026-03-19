var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.getNumberFromQuestInfo(34915, 'e1') == 1) {
    action1(f, E, e);
  } else {
    if (cm.getNumberFromQuestInfo(34915, 'e1') == 2 && !cm.isQuestFinished(34915)) {
      cm.Hidden_background("core0", 1, 0, 0, 0);
      cm.Hidden_background("core1", 1, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm28.img/helisiumWarcry", 0, 0);
      cm.npc_ChangeController(3001509, "oid=143773890", 500, 90, 15, 450, 550, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=143773890", 'summon', 0, 0);
      cm.npc_ChangeController(3001510, "oid=143773891", 600, 90, 15, 550, 650, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=143773891", "summon", 0, 0);
      cm.npc_ChangeController(3001512, "oid=143773892", 200, 90, 14, 150, 250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=143773892", 'summon', 0, 0);
      cm.npc_ChangeController(3001513, "oid=143773893", 130, 90, 13, 80, 180, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=143773893", "summon", 0, 0);
      cm.npc_ChangeController(3001516, "oid=143773894", 750, 90, 15, 700, 800, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=143773894", "summon", 0, 0);
      cm.npc_ChangeController(3001515, "oid=143773895", 680, 90, 15, 630, 730, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=143773895", 'summon', 0, 0);
      cm.npc_ChangeController(3001521, "oid=143773896", -100, 90, 13, -150, -50, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=143773896", "summon", 0, 0);
      cm.npc_ChangeController(3001522, "oid=143773897", -190, 90, 1, -240, -140, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=143773897", "summon", 0, 0);
      cm.npc_ChangeController(3001514, "oid=143773898", -300, 90, 1, -350, -250, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=143773898", "summon", 0, 0);
      cm.npc_ChangeController(3001520, "oid=143773899", 165, -250, 8, 115, 215, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=143773899", "summon", 0, 0);
      cm.npc_ChangeController(3001519, "oid=143773900", 225, -250, 10, 175, 275, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=143773900", 'summon', 0, 0);
      cm.npc_ChangeController(3001517, "oid=143773901", 95, -250, 7, 45, 145, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=143773901", "summon", 0, 0);
      cm.npc_ChangeController(3001518, "oid=143773902", 300, -250, 11, 250, 350, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=143773902", "summon", 0, 0);
      cm.dispose();
    } else if (cm.isQuestActive(34928)) {
      action2(f, E, e);
    } else {
      cm.Hidden_background('core0', 1, cm.getNumberFromQuestInfo(34928, 'e1') == 1 ? 1 : 0, 0, 0);
      cm.Hidden_background("core1", 1, cm.getNumberFromQuestInfo(34928, 'e1') == 1 ? 1 : 0, 0, 0);
      cm.dispose();
    }
  }
}
function action1(f, E, e) {
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
      cm.Hidden_background("core0", 1, 0, 0, 0);
      cm.Hidden_background("core1", 1, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm28.img/helisiumWarcry", 0, 0);
      cm.npc_ChangeController(3001509, "oid=143773890", 500, 90, 15, 450, 550, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=143773890", "summon", 0, 0);
      cm.npc_ChangeController(3001510, "oid=143773891", 600, 90, 15, 550, 650, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=143773891", 'summon', 0, 0);
      cm.npc_ChangeController(3001512, "oid=143773892", 200, 90, 14, 150, 250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=143773892", "summon", 0, 0);
      cm.npc_ChangeController(3001513, "oid=143773893", 130, 90, 13, 80, 180, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=143773893", "summon", 0, 0);
      cm.npc_ChangeController(3001516, "oid=143773894", 750, 90, 15, 700, 800, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=143773894", "summon", 0, 0);
      cm.npc_ChangeController(3001515, "oid=143773895", 680, 90, 15, 630, 730, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=143773895", "summon", 0, 0);
      cm.npc_ChangeController(3001521, "oid=143773896", -100, 90, 13, -150, -50, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=143773896", "summon", 0, 0);
      cm.npc_ChangeController(3001522, "oid=143773897", -190, 90, 1, -240, -140, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=143773897", "summon", 0, 0);
      cm.npc_ChangeController(3001514, "oid=143773898", -300, 90, 1, -350, -250, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=143773898", "summon", 0, 0);
      cm.npc_ChangeController(3001520, "oid=143773899", 165, -250, 8, 115, 215, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=143773899", "summon", 0, 0);
      cm.npc_ChangeController(3001519, "oid=143773900", 225, -250, 10, 175, 275, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=143773900", "summon", 0, 0);
      cm.npc_ChangeController(3001517, "oid=143773901", 95, -250, 7, 45, 145, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=143773901", "summon", 0, 0);
      cm.npc_ChangeController(3001518, "oid=143773902", 300, -250, 11, 250, 350, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=143773902", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 3000, 0, 200, -130);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(500);
          cm.effect_NormalSpeechBalloon("避难处现在也不安全了。", 1, 0, 0, 1000, 0, 0, 0, 0, 4, 3001517, null, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1100);
            cm.effect_NormalSpeechBalloon("贝昂好害怕。", 1, 0, 0, 1000, 0, 0, 0, 0, 4, 3001518, null, cm.getPlayer().getId());
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 2000, 3000, 440, 150);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#没关系……大家别太伤心……虽然会有点困难，但只要再建一个避难处就行了……只要我们活着就行……", 37, 3001508, 0, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#哎呀，怪物们的电波出现了混乱，叽勒。必须趁这个空档逃出去，叽勒……叽勒楞。大家做好准备……", 37, 3001510, 1, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#啊，那个……你叫亚克……对吧？我很想知道……你现在打算怎么办……", 37, 3001508, 1, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 2000, 3000, 150, 150);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#别担心，我不会跟着你们的。因为我不想再被绑起来。谢谢你……把我放开。", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#啊，我不是那个意思，你误会了……我只是觉得人越多越安全……", 37, 3001508, 0, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#嗯，怎么选择是你的自由。只要你不是敌人，我们就没有理由排斥你，叽，叽叽勒……", 37, 3001510, 1, 1);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 3000, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3#哦，哦哦，我们必须避开怪物逃走！\r\n哦，哦哦，必须排好队出发！", 37, 3001509, 0, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#妮雅队长，巴克巴克，维依……还有当当和我蹦蹦。一，二，三，四……", 37, 3001512, 1, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#……贝昂和贝安……孩子们也……呃，怎么感觉少了一个孩子！？", 37, 3001513, 1, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#（虽然有点误会，但好像不是坏人。既然误会已经解开，和他们同行好像没什么坏处。）", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#（……当然，并不想待太久。等搜集到一些情报之后就离开好了……希望亚克这个名字能成为线索。）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 410, 150);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face3#……马尔！？", 37, 3001508, 0, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(500, 0, 3000, 500, 410, 150);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face1#马尔，那孩子不见了！……对了，这个时候……马尔应该正在避难处睡午觉！", 37, 3001508, 0, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 150, 150);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 2000, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face5#（因为有人被落下了，大家有点犹豫。但要是不马上出发，情况就会很危险。）", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face5#……", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face5#（我一个人去避难处救那个孩子。虽然敌人很多……但是应该不在话下。）", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 300, 0);
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 2000, 3000, 380, 150);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face3#不能丢下马尔……但是再犹犹豫豫，大家就会有危险……", 37, 3001508, 0, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_同时移动镜头和人(2, 270);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#我一个人去，你们先走。嗯……那个叫马尔的孩子，在哪里睡午觉呢？", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
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
                                                                                                        cm.setStandAloneMode(false);
                                                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                        cm.eventSKill(0);
                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                        cm.updateInfoQuest(34915, "e1=2");
                                                                                                        cm.playerMessage(5, "在进入战场之前，请先完成1转。");
                                                                                                        cm.playerMessage(-1, "在进入战场之前，请先完成1转。");
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
}
function action2(f, E, e) {
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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.Hidden_background("core0", 1, 0, 0, 0);
      cm.Hidden_background('core1', 1, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 267, 60);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 0, 95);
        cm.npc_ChangeController(3001510, "oid=144116481", 280, 95, 14, 230, 330, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=144116481", 'summon', 0, 0);
        cm.sendNormalTalk_Bottom("#face0#我在附近感觉到了电波，叽勒。", 37, 3001510, 0, 1);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 2000, 3000, 765, 150);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=144116481", 1, 600, 100);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(2, 520);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face4#啊，好像在这边，叽勒。这下面一定有什么东西。", 37, 3001510, 0, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, 765, -10);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#（是错觉吗……？远处的东西……有种奇怪的感觉……但是……想不起来……）", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 500, 765, 150);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=144116481", -1);
                            cm.sendNormalTalk_Bottom("#face0#亚克，就是这里。", 37, 3001510, 0, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction17.img/effect/ark/sand/wind", "oid=144116481"], [0, -100, 0, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction17.img/effect/ark/sand/wind", "oid=144116481"], [0, -100, 0, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction17.img/effect/ark/sand/wind", "oid=144116481"], [0, -100, 0, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
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
                                            cm.setStandAloneMode(false);
                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                            cm.eventSKill(0);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.updateInfoQuest(34928, 'e1=1');
                                            cm.updateInfoQuest(34995, "00=h1;10=h0;01=h1;11=h0;02=h1;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h1;17=h0;09=h0");
                                            cm.Hidden_background('core0', 1, 1, 0, 0);
                                            cm.Hidden_background('core1', 1, 1, 0, 0);
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