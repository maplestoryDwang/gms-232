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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -1136, 311);
      cm.sendNewEffects(17, [1000, 1000, 2000, -1300, 370]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9400589, "oid=3664088", -1233, 357, 16, -1283, -1183, 1, true, false);
        cm.npc_SetSpecialAction("oid=3664088", 'summon', 0, 0);
        cm.npc_SetSpecialAction("oid=3664088", "attack1", 0, 0);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#b佩图尔。", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=3664088", 1);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#噢，你回来了？村民们准备得怎么样？", 37, 9400589, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#b他们各自都在忙自己认为有必要的事。", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#b述拉说得准备些食物带着路上吃。我也同意她的想法。", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#……有道理。", 37, 9400589, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#b我本想帮着她收集些剩下的粮食，结果大部分都被火烧得不能吃了。", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#啊……这可怎么办。", 37, 9400589, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNewEffects(18, [3000, 2000, 1000, 0, -600]);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard/skeleton", "normal2", '', ''], [1, 1, 0, 7000, 0, 0, 0, 0]);
                                cm.npc_ChangeController(9400587, "oid=3664252", -750, 300, 19, -800, -700, 1, true, false);
                                cm.npc_SetSpecialAction("oid=3664252", "summon", 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#没办法了，饿一天也不会死人。", 37, 9400587, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                    cm.npc_SetForceMove("oid=3664252", -1, 300, 80);
                                    cm.sendNewEffects(19, [1000]);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                        cm.sendNormalTalk_Bottom("#face0#唔……我们是不要紧，可负伤者或孩子们熬不住饿的。", 37, 9400589, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#我们不能为了找食物而耽误时间。", 37, 9400587, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#可汗，大家饿着肚子赶路的话，行进的速度自然也会慢下来。", 37, 9400589, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#虽然像你说的，越快动身越好，但咱们也得防备万一的情况。", 37, 9400589, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3664252"], [1000, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#……好吧，那我带几个脚程快的猎人去去就来。", 37, 9400587, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#b我也一起去。", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#一路小心。愿沉睡森林的气息保佑你们。", 37, 9400589, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_LeaveField("oid=3664252");
                                                              cm.npc_LeaveField("oid=3664252");
                                                              cm.onTeleport(0, 3, cm.getPlayer().getId(), 2300, 400);
                                                              cm.inGameDirectionEvent_ForcedFlip(1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                              cm.npc_LeaveField("oid=3664088");
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_ChangeController(9400587, "oid=3664572", 2450, 400, 47, 2400, 2500, 0, true, false);
                                                                cm.npc_SetSpecialAction("oid=3664572", "summon", 0, 0);
                                                                cm.npc_ChangeController(9400596, "oid=3664573", 2380, 400, 47, 2330, 2430, 0, true, false);
                                                                cm.npc_SetSpecialAction("oid=3664573", "summon", 0, 0);
                                                                cm.npc_ChangeController(9400596, "oid=3664574", 2240, 400, 46, 2190, 2290, 0, true, false);
                                                                cm.npc_SetSpecialAction("oid=3664574", 'summon', 0, 0);
                                                                cm.npc_ChangeController(9400596, "oid=3664575", 2200, 400, 46, 2150, 2250, 0, true, false);
                                                                cm.npc_SetSpecialAction("oid=3664575", "summon", 0, 0);
                                                                cm.npc_ChangeController(9400590, "oid=3664576", 3212, -362, 5, 3162, 3262, 1, true, false);
                                                                cm.npc_SetSpecialAction("oid=3664576", "summon", 0, 0);
                                                                cm.npc_SetForceMove("oid=3664572", 1, 500, 200);
                                                                cm.npc_SetForceMove("oid=3664573", 1, 500, 200);
                                                                cm.npc_SetForceMove("oid=3664574", 1, 400, 200);
                                                                cm.npc_SetForceMove("oid=3664575", 1, 400, 200);
                                                                cm.inGameDirectionEvent_同时移动镜头和人(2, 500);
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                      cm.effect_NormalSpeechBalloon("斯洛克！你下来一下。", 1, 0, 0, 2000, 9400587, cm.getPlayer().getId());
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        cm.effect_NormalSpeechBalloon("我们得去打点猎物。", 0, 0, 0, 2000, 9400587, cm.getPlayer().getId());
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNewEffects(13, [2000, 0, -500, 0, 0]);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#啥？现在去打猎？", 37, 9400590, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#你们疯了吗？！眼下立刻出发都怕赶不及，我不去！这等于自寻死路！", 37, 9400590, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#所以才找你帮忙啊，你脚程比较快。", 37, 9400587, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#我不去！", 37, 9400590, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#斯洛克！现在没工夫跟你抬杠。", 37, 9400587, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#哼，凭什么都是你说了算？想死你们自己去死，别拉我垫背！", 37, 9400590, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_ChangeController(9400580, "oid=3664857", 2300, 390, 46, 2250, 2350, 0, true, false);
                                                                                            cm.npc_SetSpecialAction("oid=3664857", "summon", 0, 0);
                                                                                            cm.npc_ChangeController(9400582, "oid=3664858", 2350, 390, 47, 2300, 2400, 0, true, false);
                                                                                            cm.npc_SetSpecialAction("oid=3664858", "summon", 0, 0);
                                                                                            cm.npc_ChangeController(9400618, "oid=3664859", 2460, 390, 47, 2410, 2510, 0, true, false);
                                                                                            cm.npc_SetSpecialAction("oid=3664859", "summon", 0, 0);
                                                                                            cm.npc_SetForceMove("oid=3664857", 1, 480, 100);
                                                                                            cm.npc_SetForceMove("oid=3664858", 1, 480, 100);
                                                                                            cm.npc_SetForceMove("oid=3664859", 1, 240, 100);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNewEffects(13, [2000, 0, 500, 0, 0]);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0##h0#，出什么事了？", 37, 9400580, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#b（说明情况。）", 57, 0, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#啊……我能理解二位的立场。村长该把情况说清楚嘛。", 37, 9400580, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#嗯，多点人去打猎的话，会更有帮助吧？", 37, 9400580, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#b是的。", 57, 0, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face2#有出色的骑士凯恩去帮忙的话，就可以更快回来了哦？", 37, 9400580, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#不行，艾丽卡。", 37, 9400582, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#b当然。", 57, 0, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#拜托你啦，凯恩，路上小心。", 37, 9400580, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#咦……你在为我担心吗？", 37, 9400582, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#哼，说不过你们。", 37, 9400590, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNewEffects(13, [500, 0, -500, 0, 0]);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.npc_SetForceMove("oid=3664576", -1, 50, 30);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNewEffects(19, [0]);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#你给我们带路就行！我会带一大堆肉回来。", 37, 9400582, false, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#该死，我就给你们10分钟，知道了吗？", 37, 9400590, true, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.npc_setForceFlip("oid=3664576", 1);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.npc_SetForceMove("oid=3664576", 1, 100, 100);
                                                                                                                                      cm.npc_SetForceMove("oid=3664572", 1, 100, 100);
                                                                                                                                      cm.npc_SetForceMove("oid=3664573", 1, 100, 100);
                                                                                                                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                                                                                                                                      cm.npc_SetForceMove("oid=3664858", 1, 100, 100);
                                                                                                                                      cm.npc_SetForceMove("oid=3664574", 1, 100, 100);
                                                                                                                                      cm.npc_SetForceMove("oid=3664575", 1, 100, 100);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#咱们这么多人，分头行动吧。", 37, 9400587, false, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.npc_SetForceMove("oid=3664572", 1, 300, 250);
                                                                                                                                          cm.npc_SetForceMove("oid=3664573", 1, 300, 250);
                                                                                                                                          cm.npc_SetForceMove("oid=3664574", 1, 300, 250);
                                                                                                                                          cm.npc_SetForceMove("oid=3664575", 1, 300, 250);
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                        } else if (status === V++) {
                                                                                                                                          cm.forceStartQuest(64030, '');
                                                                                                                                          cm.warp(867200460, 0);
                                                                                                                                          cm.setStandAloneMode(false);
                                                                                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                                                                                          cm.npc_LeaveField("oid=3664088");
                                                                                                                                          cm.npc_LeaveField("oid=3664572");
                                                                                                                                          cm.npc_LeaveField("oid=3664572");
                                                                                                                                          cm.npc_LeaveField("oid=3664573");
                                                                                                                                          cm.npc_LeaveField("oid=3664573");
                                                                                                                                          cm.npc_LeaveField("oid=3664574");
                                                                                                                                          cm.npc_LeaveField("oid=3664574");
                                                                                                                                          cm.npc_LeaveField("oid=3664575");
                                                                                                                                          cm.npc_LeaveField("oid=3664575");
                                                                                                                                          cm.npc_LeaveField("oid=3664576");
                                                                                                                                          cm.npc_LeaveField("oid=3664576");
                                                                                                                                          cm.npc_LeaveField("oid=3664857");
                                                                                                                                          cm.npc_LeaveField("oid=3664857");
                                                                                                                                          cm.npc_LeaveField("oid=3664858");
                                                                                                                                          cm.npc_LeaveField("oid=3664858");
                                                                                                                                          cm.npc_LeaveField("oid=3664859");
                                                                                                                                          cm.npc_LeaveField("oid=3664859");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;