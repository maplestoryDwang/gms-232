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
      cm.npc_ChangeController(9400635, "oid=204538", -1176, 106, 5, -1226, -1126, 0, true, false);
      cm.npc_ChangeController(9400636, "oid=204539", -1244, 103, 5, -1294, -1194, 0, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400590, "oid=7536162", 90, 60, 28, 40, 140, 0, true, false);
      cm.npc_SetSpecialAction("oid=7536162", 'summon', 0, 0);
      cm.npc_ChangeController(9400597, "oid=7536163", 200, 60, 29, 150, 250, 1, true, false);
      cm.npc_SetSpecialAction("oid=7536163", "summon", 0, 0);
      cm.npc_ChangeController(9400591, "oid=7536164", -65, 70, 11, -115, -15, 0, true, false);
      cm.npc_SetSpecialAction("oid=7536164", "summon", 0, 0);
      cm.npc_ChangeController(9400618, "oid=7536165", -120, 70, 11, -170, -70, 0, true, false);
      cm.npc_SetSpecialAction("oid=7536165", "summon", 0, 0);
      cm.npc_ChangeController(9400586, "oid=7536166", 850, -5, 33, 800, 900, 1, true, false);
      cm.npc_SetSpecialAction("oid=7536166", "summon", 0, 0);
      cm.npc_ChangeController(9400601, "oid=7536167", 900, -5, 33, 850, 950, 1, true, false);
      cm.npc_SetSpecialAction("oid=7536167", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, 130, 120]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=7536166", -1, 500, 100);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=7536167", -1, 500, 100);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(1, 520);
              cm.sendNormalTalk_Bottom("#face0#哎哟喂！我看这个世界也快结束了！啊？叛徒竟然还有脸回来！", 37, 9400597, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#真是~~~ 让我无语~~~！", 37, 9400597, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=7536162"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.sendNormalTalk_Bottom("#face0#说什么呢？你这是猪啊还是人啊？", 37, 9400590, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=7536163"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.sendNormalTalk_Bottom("#face0#什？什么？！", 37, 9400597, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#哪里来的贼人，咔-呸！", 37, 9400590, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#啊？啊啊？什么？贼人？！", 37, 9400597, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#我说过！我们就不该接受这个没有血统也没有出身的家伙！咳咳！！！！！", 37, 9400597, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#可汗村长！人呢？怎么就管不好自己村里的人啊！", 37, 9400597, true, true);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(9400582, "oid=7536190", 850, -5, 33, 800, 900, 1, true, false);
                              cm.npc_SetSpecialAction("oid=7536190", "summon", 0, 0);
                              cm.npc_ChangeController(9400580, "oid=7536191", 900, -5, 33, 850, 950, 1, true, false);
                              cm.npc_SetSpecialAction("oid=7536191", "summon", 0, 0);
                              cm.npc_ChangeController(9400600, "oid=7536192", 950, -5, 33, 900, 1000, 1, true, false);
                              cm.npc_SetSpecialAction("oid=7536192", "summon", 0, 0);
                              cm.npc_SetForceMove("oid=7536190", -1, 350, 100);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=7536191", -1, 350, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=7536192", -1, 350, 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#找可汗村长干嘛，想挨枪子儿啊。", 37, 9400590, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#什么？", 37, 9400597, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#你们除了消耗粮食之外，还会做什么？怪物攻过来了你能做什么？去当肉盾？", 37, 9400590, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#至少我能对得起这口饭！", 37, 9400590, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#什，什什什么？！我的头~", 37, 9400597, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#啊？对了！你这家伙不是为了我们回来的吧？", 37, 9400597, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#路上碰到暴走的怪物，拼了命地逃回来的吧？", 37, 9400597, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#不看也知道~！", 37, 9400597, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#什么？你这只猪！", 37, 9400590, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#你看到了吗？你看到了吗！", 37, 9400590, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNewEffects(17, [3000, 2000, 2000, 450, 120]);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#哇噢，斯洛克的接风洗尘还真是带劲啊？", 37, 9400582, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#不过我们是不是得去劝架", 37, 9400582, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#b吓了我一跳。凯恩，你什么时候来的？", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                                                  cm.sendNormalTalk_Bottom("#face0#我在空地上正训练士兵呢，看到这里挺热闹的就凑了过来！", 37, 9400582, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom('#b训练？', 57, 0, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#嗯，对啊。听说你教会了佩图尔和那个酒鬼大叔用斧子", 37, 9400582, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#我们的士兵貌似受到了刺激似的，纷纷来找我训练他们。", 37, 9400582, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#现在我和吉莉连喘口气的时间都没有", 37, 9400582, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#… 不能一直就这么观看吧？人越来越多了。", 37, 9400580, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                              cm.npc_ChangeController(9400587, "oid=7536292", -350, 75, 10, -400, -300, 0, true, false);
                                                                              cm.npc_SetSpecialAction("oid=7536292", "summon", 0, 0);
                                                                              cm.npc_ChangeController(9400598, "oid=7536293", -300, 75, 10, -350, -250, 0, true, false);
                                                                              cm.npc_SetSpecialAction("oid=7536293", "summon", 0, 0);
                                                                              cm.npc_SetForceMove("oid=7536292", 1, 490, 150);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetForceMove("oid=7536293", 1, 450, 150);
                                                                                cm.sendNewEffects(17, [3000, 2000, 2000, 130, 50]);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3600);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_setForceFlip("oid=7536292", -1);
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=7536292"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                    cm.sendNormalTalk_Bottom("#face0#斯洛克！你这是什么话？！", 37, 9400587, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("村长~！很多人都在看着呢，您要保持体统！", 37, 9400598, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#一只小泥鳅坏了一滩水，这话一点都不假！… ", 37, 9400587, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("我们不是要团结一致吗~！这种分歧对我们没什么好处！", 37, 9400598, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_SetForceMove("oid=7536162", -1, 5, 10);
                                                                                            cm.npc_SetForceMove("oid=7536292", -1, 5, 10);
                                                                                            cm.npc_SetForceMove("oid=7536293", 1, 5, 10);
                                                                                            cm.npc_SetForceMove("oid=7536163", 1, 5, 10);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#放开我，是那家伙先挑起的？", 37, 9400590, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#哪来的不要脸的东西！", 37, 9400597, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#切- 这话正是我要说的。", 37, 9400590, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_SetForceMove("oid=7536162", -1, 5, 10);
                                                                                                    cm.npc_SetForceMove("oid=7536292", -1, 5, 10);
                                                                                                    cm.npc_SetForceMove("oid=7536293", 1, 5, 10);
                                                                                                    cm.npc_SetForceMove("oid=7536163", 1, 5, 10);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom('你们也太不像话了！', 37, 9400600, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNewEffects(17, [0, 2000, 2000, 450, 0]);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_SetForceMove("oid=7536192", -1, 300, 80);
                                                                                                          cm.sendNewEffects(17, [3000, 2000, 2000, 130, 50]);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("还不给我分开？！", 37, 9400600, false, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_setForceFlip("oid=7536163", 1);
                                                                                                                cm.npc_SetForceMove("oid=7536292", -1, 20, 30);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.npc_SetForceMove("oid=7536163", 1, 20, 20);
                                                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=7536163"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNewEffects(17, [0, 2000, 3000, 80, 40]);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=7536162"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("你们还不清楚现在的状况吗？", 37, 9400600, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNewEffects(17, [0, 3000, 2000, 200, 25]);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("现在哪还有时间吵架？你看看别人都在做什么！", 37, 9400600, false, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("该训练的训练，该做饭的做饭，还有维修城墙的，制作障碍物的！", 37, 9400600, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("大家都忙得不可开交！就你们俩给闲的。", 37, 9400600, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#咳，是这家伙先…！", 37, 9400597, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#我正在制作木墙，因为材料不够所以过来拿点材料，谁知这头猪… ", 37, 9400590, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#斯洛克！", 37, 9400587, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#对不起，维尔纳村长。我会好好管教我的村民。", 37, 9400587, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#管教？可汗村长，我没做错什么。", 37, 9400590, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("… 哈… 你们要记住，现在这已不是一个人或者一个村子的事情。我们已经在同舟共济，这是我们大家的事情。", 37, 9400600, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.npc_setForceFlip("oid=7536292", -1);
                                                                                                                                              cm.npc_setForceFlip("oid=7536162", -1);
                                                                                                                                              cm.npc_setForceFlip("oid=7536163", -1);
                                                                                                                                              cm.npc_setForceFlip("oid=7536293", -1);
                                                                                                                                              cm.npc_setForceFlip("oid=7536164", -1);
                                                                                                                                              cm.npc_setForceFlip("oid=7536165", -1);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.npc_SetForceMove("oid=7536292", -1, 600, 60);
                                                                                                                                                cm.npc_SetForceMove("oid=7536162", -1, 150, 40);
                                                                                                                                                cm.npc_SetForceMove("oid=7536163", -1, 600, 60);
                                                                                                                                                cm.npc_SetForceMove("oid=7536293", -1, 600, 60);
                                                                                                                                                cm.npc_SetForceMove("oid=7536164", -1, 600, 60);
                                                                                                                                                cm.npc_SetForceMove("oid=7536165", -1, 600, 60);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.npc_setForceFlip("oid=7536162", 1);
                                                                                                                                                  cm.npc_SetForceMove("oid=7536162", 1, 400, 80);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love"], [0, 0, 7536162, 1, 0, 1, 0, 0]);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                  } else if (status === V++) {
                                                                                                                                                    cm.warp(867202306, 0, true);
                                                                                                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                    cm.forceCompleteQuest(64118);
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
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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