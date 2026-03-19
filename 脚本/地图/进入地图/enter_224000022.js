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
      cm.npc_ChangeController(2074112, 'oid=12768', 1897, 153, 26, 1847, 1947, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(2074100, "oid=2594971", 1330, 127, 14, 1280, 1380, 0, true, 500, false);
      cm.npc_SetSpecialAction("oid=2594971", "summon", 0, 0);
      cm.npc_ChangeController(2074110, "oid=2594972", 1280, 119, 14, 1230, 1330, 0, true, 500, false);
      cm.npc_SetSpecialAction("oid=2594972", "summon", 0, 0);
      cm.npc_ChangeController(2074114, "oid=2594973", 1533, 127, 6, 1483, 1583, 1, true, 500, false);
      cm.npc_SetSpecialAction("oid=2594973", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 1500, 142);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("别小瞧了野生的生命力！", 37, 2074112, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("吼吼吼吼，年糕能量！啊呜！", 37, 2074114, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#b(该死！)", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=2594973", "attack1", -1, 1);
              cm.inGameDirectionEvent_AskAnswerTime(200);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/5100103/Attack1", 100);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_ForcedFlip(1);
                  cm.inGameDirectionEvent_同时移动镜头和人(1, 150);
                  cm.inGameDirectionEvent_AskAnswerTime(700);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound('Aran/down', 100);
                    cm.setNpcSpecialActionReset("oid=2594973");
                    cm.inGameDirectionEvent_MoveAction(4);
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#啊啊！#b#h0##k！怎么办呢？", 37, 2074100, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("……尼姑大人，您能暂且退下吗？", 37, 2074110, true, true);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=2594972", 1, 80, 80);
                            cm.sendNormalTalk_Bottom("虽然我曾打算在青儿长大之后就不再出手……\r\n但……我已决定不能再让自己后悔了。", 37, 2074110, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("哈哈哈！那个疯子看来是疯了，酒喝多了吧？", 37, 2074112, true, true);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=2594972", 1, 30, 100);
                                cm.inGameDirectionEvent_PushScaleInfo(300, 1575, 0, 1500, 142);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("开始是闭上眼睛三秒，", 37, 2074110, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("老虎！去咬他！", 37, 2074112, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetSpecialAction("oid=2594973", "skill1", -1, 1);
                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/5100103/Skill1", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(700);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction("oid=2594973", 'skill2', -1, 1);
                                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/5100103/Skill1", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(700);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=2594972", 1, 30, 100);
                                            cm.inGameDirectionEvent_PushScaleInfo(300, 1650, 0, 1500, 142);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(700);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("中间是堵住耳朵三秒，", 37, 2074110, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetSpecialAction("oid=2594972", "attack1", -1, 1);
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kreasePQ_boost", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("啊呜呜！", 37, 2074114, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetForceMove("oid=2594972", 1, 30, 100);
                                                      cm.inGameDirectionEvent_PushScaleInfo(300, 1725, 0, 1500, 142);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(700);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("最后是闭上嘴巴三秒……", 37, 2074110, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetSpecialAction("oid=2594972", "attack1", -1, 1);
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kreasePQ_boost", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom('#face2#大叔！', 37, 2074100, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(500, 5000, 500, 1500, 182);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetSpecialAction("oid=2594972", "attack1", -1, 1);
                                                                  cm.npc_SetSpecialAction("oid=2594973", 'attack1', -1, 1);
                                                                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/5100103/Attack1", 100);
                                                                  cm.npc_SetSpecialAction("oid=2594972", "attack2", -1, 1);
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetForceMove("oid=2594972", 1, 50, 100);
                                                                    cm.npc_SetForceMove("oid=2594973", -1, 100, 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kreasePQ_boost", 100);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.setNpcSpecialActionReset("oid=2594973");
                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 1500, 142);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("盲人秘技，\r\n闭眼割鼻……", 37, 2074110, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.setNpcSpecialActionReset("oid=2594972");
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("啊……啊呜呜", 37, 2074114, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetSpecialAction("oid=2594973", "die1", -1, 1);
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/5100103/Die", 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("这是什么天方夜谭！ \r\n这难不成是什么漫画还是游戏吗？！", 37, 2074112, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_LeaveField("oid=2594973");
                                                                                        cm.sendNormalTalk_Bottom("发带在哪儿……\r\n在这里啊，这个我拿走了。", 37, 2074110, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("额……这些家伙到底是谁派来的~\r\n为什么要来扰乱祭祀~", 37, 2074112, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("你们错就错在碰了我女儿。", 37, 2074110, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("你……你女儿到底是谁？", 37, 2074112, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face2#沈师铭大叔！哇，你太给力了！", 37, 2074100, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("年轻的时候为了带大青儿，我也做了些危险的事。\r\n那个……给…给力？那是什么意思啊。", 37, 2074110, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face1#啊，没什么，嗯……\r\n那得去带走青儿了吧？", 37, 2074100, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.updateInfoQuest(30410, "gExpCheck=1");
                                                                                                      cm.forceStartQuest(30410, '');
                                                                                                      cm.gainExp(483003);
                                                                                                      cm.forceCompleteQuest(30410);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                    } else if (status === V++) {
                                                                                                      cm.dispose();
                                                                                                      cm.warp(224000122, 3, true);
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