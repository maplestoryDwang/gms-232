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
      cm.npc_ChangeController(9400597, "oid=204555", -685, 97, 8, -735, -635, 1, true, false);
      cm.npc_ChangeController(9400598, "oid=204556", -549, -65, 18, -599, -499, 1, true, false);
      cm.npc_ChangeController(9400582, 'oid=204557', -1212, 104, 5, -1262, -1162, 0, true, false);
      cm.npc_ChangeController(9400583, "oid=204558", -461, 25, 15, -511, -411, 1, true, false);
      cm.npc_ChangeController(9400584, "oid=204559", -229, -177, 23, -279, -179, 1, true, false);
      cm.npc_ChangeController(9400580, "oid=204560", -406, 25, 15, -456, -356, 1, true, false);
      cm.npc_ChangeController(9400585, "oid=204561", -355, 97, 10, -405, -305, 1, true, false);
      cm.npc_ChangeController(9400586, "oid=204562", -586, 95, 9, -636, -536, 1, true, false);
      cm.npc_ChangeController(9400587, "oid=204563", -295, 99, 10, -345, -245, 1, true, false);
      cm.npc_ChangeController(9400588, "oid=204564", -532, 95, 9, -582, -482, 1, true, false);
      cm.npc_ChangeController(9400589, "oid=204565", -166, -175, 24, -216, -116, 1, true, false);
      cm.npc_ChangeController(9400601, "oid=204566", -499, -65, 18, -549, -449, 1, true, false);
      cm.npc_ChangeController(9400590, "oid=204567", -446, -65, 18, -496, -396, 1, true, false);
      cm.npc_ChangeController(9400600, "oid=204568", -752, 101, 8, -802, -702, 1, true, false);
      cm.npc_ChangeController(9400602, "oid=204569", -1150, 107, 6, -1200, -1100, 0, true, false);
      cm.npc_ChangeController(9400629, 'oid=204570', -985, 92, 6, -1035, -935, 0, true, false);
      cm.npc_ChangeController(9400635, "oid=204571", -921, 89, 7, -971, -871, 0, true, false);
      cm.npc_ChangeController(9400623, "oid=204572", -855, 97, 7, -905, -805, 1, true, false);
      cm.npc_ChangeController(9400593, "oid=204573", -244, 100, 10, -294, -194, 1, true, false);
      cm.npc_ChangeController(9400591, "oid=204574", -195, 102, 11, -245, -145, 1, true, false);
      cm.npc_ChangeController(9400599, "oid=204575", -345, -65, 18, -395, -295, 1, true, false);
      cm.npc_ChangeController(9400592, "oid=204576", -286, -65, 18, -336, -236, 1, true, false);
      cm.npc_ChangeController(9400605, 'oid=204577', -207, -65, 18, -257, -157, 1, true, false);
      cm.npc_ChangeController(9400630, "oid=204578", -124, -65, 18, -174, -74, 1, true, false);
      cm.npc_ChangeController(9400617, "oid=204579", -67, -65, 18, -117, -20, 1, true, false);
      cm.npc_ChangeController(9400618, "oid=204580", -74, 90, 11, -124, -24, 1, true, false);
      cm.npc_ChangeController(9400634, "oid=204581", -133, 96, 11, -183, -83, 1, true, false);
      cm.npc_ChangeController(9400636, 'oid=204582', -90, -175, 24, -140, -40, 1, true, false);
      cm.npc_ChangeController(9400620, "oid=204583", -24, -175, 24, -74, -20, 1, true, false);
      cm.npc_ChangeController(9400621, "oid=204584", 35, -175, 35, 20, 85, 1, true, false);
      cm.npc_ChangeController(9400622, "oid=204585", -17, 84, 11, -67, -17, 1, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.monadForceMove("snow", 0, 0);
      cm.sendNewEffects(12, [0, -620, -60, 0, 0]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face0#出…出什么事了？！", 37, 9400597, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("呵额…呵额… ", 37, 9400603, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("怪…怪物军团开始行动了！", 37, 9400603, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("在…在哪里？它们到哪儿了？", 37, 9400600, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("阳…阳光沁入的森林！", 37, 9400596, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("… 快到跟前了。", 37, 9400600, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                    cm.effect_NormalSpeechBalloon("你知道阳光沁入的森林是哪里吗？", 1, 0, 0, 2000, 9400598, cm.getPlayer().getId());
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                      cm.effect_NormalSpeechBalloon("进入森林一点点就到了，是离斯库亚斯最近的… 地方。", 1, 0, 0, 2000, 9400601, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(3500);
                        cm.effect_NormalSpeechBalloon("会问我吗？", 1, 0, 0, 2000, 9400590, cm.getPlayer().getId());
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                          cm.effect_NormalSpeechBalloon("婆婆… 我好怕…", 1, 0, 0, 2000, 9400588, cm.getPlayer().getId());
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                            cm.effect_NormalSpeechBalloon("不用怕，没关系… 你爸爸会守护你的。", 1, 0, 0, 2000, 9400586, cm.getPlayer().getId());
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(3500);
                              cm.effect_NormalSpeechBalloon("不管发生什么事…", 1, 0, 0, 2000, 9400587, cm.getPlayer().getId());
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                cm.effect_NormalSpeechBalloon("啊，这么快…", 1, 0, 0, 2000, 9400597, cm.getPlayer().getId());
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                  cm.effect_NormalSpeechBalloon("你不也是认真准备了吗？别… 太担心，肯定能做的很好。", 1, 0, 0, 2000, 9400600, cm.getPlayer().getId());
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(9400581, "oid=7545328", -1500, 85, 4, -1550, -1450, 0, true, false);
                                    cm.npc_SetSpecialAction("oid=7545328", 'summon', 0, 0);
                                    cm.npc_ChangeController(9400585, "oid=7545329", -1600, 85, 3, -1650, -1550, 0, true, false);
                                    cm.npc_SetSpecialAction("oid=7545329", "summon", 0, 0);
                                    cm.npc_ChangeController(9400585, "oid=7545330", -1700, 85, 2, -1750, -1650, 0, true, false);
                                    cm.npc_SetSpecialAction("oid=7545330", 'summon', 0, 0);
                                    cm.npc_SetForceMove("oid=7545328", 1, 200, 100);
                                    cm.npc_SetForceMove("oid=7545329", 1, 200, 100);
                                    cm.npc_SetForceMove("oid=7545330", 1, 200, 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNewEffects(12, [2000, -750, -60, 0, 0]);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#侦察兵受到了攻击？！", 37, 9400581, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#在哪！它们到哪里了？！", 37, 9400581, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.monadForceMove("snow", 1, 3000);
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                              cm.effect_NormalSpeechBalloon("红色的…雪…", 0, 0, 0, 3000, 9400597, cm.getPlayer().getId());
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                cm.effect_NormalSpeechBalloon("…终于还是来了…", 0, 0, 0, 3000, 9400590, cm.getPlayer().getId());
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                  cm.effect_NormalSpeechBalloon("...", 0, 0, 0, 3000, 9400602, cm.getPlayer().getId());
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#b… 看来它们已经真的到了我们的眼皮底下了。", 57, 0, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#这… 不祥的雪… ", 37, 9400581, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#b… 大家都非常辛苦了。", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#b手中握着平生从未见过的武器进行了刻苦的训练… ", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#b一天到晚搬运着比自己还要重的石头… ", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#b不分昼夜的守护城墙… ", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#b在这种情况下，没有人绝望，更没有人放弃，并且一直坚持到现在。大家真的是辛苦了。", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                  cm.effect_NormalSpeechBalloon("从卡夫塔佩到这里… #h0# 是最辛苦的。", 0, 0, 0, 2000, 9400587, cm.getPlayer().getId());
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                    cm.effect_NormalSpeechBalloon('是的，真的很辛苦。', 0, 0, 0, 2000, 9400600, cm.getPlayer().getId());
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                      cm.effect_NormalSpeechBalloon("… 多亏了勇士，大家才能团结一心。", 0, 0, 0, 2000, 9400586, cm.getPlayer().getId());
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                        cm.effect_NormalSpeechBalloon("说的对！", 0, 0, 0, 2000, 9400586, cm.getPlayer().getId());
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                          cm.effect_NormalSpeechBalloon('非常正确！', 0, 0, 0, 2000, 9400598, cm.getPlayer().getId());
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#b没有人会愿意现在这种情况。", 57, 0, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#b甚至连想都没想过。", 57, 0, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#b我们所经历的不幸，全都是因为外部的攻击所造成的… 这不是我们的错。", 57, 0, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#b外部的攻击太过强大，掠走了我们的家人，差点把我们也全部抓走，但是我们顽强的克服住了。", 57, 0, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#b虽然我们无法逆转过去，但是我们可以亲自创造未来。", 57, 0, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#b我们必须得迎面而战，才能找回我们失去的家人。", 57, 0, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#b所以我们一定要战斗。", 57, 0, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#b为了我们的未来！我们一定要战斗到底。", 57, 0, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#… 我们不会再躲避的！", 37, 9400587, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#我们也是！不会懦弱！", 37, 9400597, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("我们要战斗到底！", 37, 9400600, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT3/battlecry1", 128);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                  cm.effect_NormalSpeechBalloon("我们要战斗到底！", 0, 0, 0, 4000, 9400600, cm.getPlayer().getId());
                                                                                                  cm.effect_NormalSpeechBalloon("我们要战斗到底！", 0, 0, 0, 4000, 9400586, cm.getPlayer().getId());
                                                                                                  cm.effect_NormalSpeechBalloon("我们要战斗到底！", 0, 0, 0, 4000, 9400583, cm.getPlayer().getId());
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                    cm.effect_NormalSpeechBalloon('我们要战斗到底！', 0, 0, 0, 4000, 9400587, cm.getPlayer().getId());
                                                                                                    cm.effect_NormalSpeechBalloon("我们要战斗到底！", 0, 0, 0, 4000, 9400597, cm.getPlayer().getId());
                                                                                                    cm.effect_NormalSpeechBalloon('我们要战斗到底！', 0, 0, 0, 4000, 9400588, cm.getPlayer().getId());
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                      cm.effect_NormalSpeechBalloon('我们要战斗到底！', 0, 0, 0, 4000, 9400601, cm.getPlayer().getId());
                                                                                                      cm.effect_NormalSpeechBalloon("我们要战斗到底！", 0, 0, 0, 4000, 9400592, cm.getPlayer().getId());
                                                                                                      cm.effect_NormalSpeechBalloon('我们要战斗到底！', 0, 0, 0, 4000, 9400630, cm.getPlayer().getId());
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                        cm.effect_NormalSpeechBalloon("我们要战斗到底！", 0, 0, 0, 4000, 9400591, cm.getPlayer().getId());
                                                                                                        cm.effect_NormalSpeechBalloon("我们要战斗到底！", 0, 0, 0, 4000, 9400593, cm.getPlayer().getId());
                                                                                                        cm.effect_NormalSpeechBalloon('我们要战斗到底！', 0, 0, 0, 4000, 9400599, cm.getPlayer().getId());
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                          cm.effect_NormalSpeechBalloon("我们要战斗到底！", 0, 0, 0, 4000, 9400590, cm.getPlayer().getId());
                                                                                                          cm.effect_NormalSpeechBalloon("我们要战斗到底！", 0, 0, 0, 4000, 9400589, cm.getPlayer().getId());
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("是的，未来不是我们等来的… 而是用我们的双手创造出来的。", 37, 9400586, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.effect_NormalSpeechBalloon("我们要战斗到底！", 0, 0, 0, 4000, 9400598, cm.getPlayer().getId());
                                                                                                              cm.effect_NormalSpeechBalloon("我们要战斗到底！", 0, 0, 0, 4000, 9400622, cm.getPlayer().getId());
                                                                                                              cm.effect_NormalSpeechBalloon("我们要战斗到底！", 0, 0, 0, 4000, 9400621, cm.getPlayer().getId());
                                                                                                              cm.sendNormalTalk_Bottom("为了我们所期望的未来，大家要用尽全力去战斗！", 37, 9400586, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                cm.monadEndingScene(135 * Math.pow(cm.getLevel(), 3), 50 * Math.pow(cm.getLevel(), 2), [2439159, 0, 0, 0, 0, 0]);
                                                                                                                cm.sendNormalTalk_Bottom("#face0#非常感谢… 能给我一起战斗的机会…", 37, 9400602, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#不管发生什么事情！我都会挡住敌人的。", 37, 9400602, true, true);
                                                                                                                } else if (status === V++) {
                                                                                                                  cm.forceCompleteQuest(64136);
                                                                                                                  cm.gainExp(135 * Math.pow(cm.getLevel(), 3));
                                                                                                                  cm.gainMeso(50 * Math.pow(cm.getLevel(), 2));
                                                                                                                  cm.gainItem(2439159, 1);
                                                                                                                  cm.dispose();
                                                                                                                  cm.monadEndingScene(-1, -1, null);
                                                                                                                  cm.warp(867202230, 0);
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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