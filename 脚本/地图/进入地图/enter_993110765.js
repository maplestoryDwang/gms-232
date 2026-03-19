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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 6000, -540, 169);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.updateInfoQuest(37204, "Tjob=1");
        cm.npc_ChangeController(3004112, "oid=2425556", -774, -328, 151, -824, -724, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2425556", 'summon', 0, 0);
        cm.npc_ChangeController(3004110, "oid=2425557", -544, -332, 139, -594, -494, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2425557", "summon", 0, 0);
        cm.npc_ChangeController(3004111, "oid=2425558", -384, -329, 146, -434, -334, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2425558", "summon", 0, 0);
        cm.npc_ChangeController(3004109, "oid=2425559", -470, -338, 143, -520, -420, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2425559", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Text(["#fn黑体##fs18#枫树山丘"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(4000);
          cm.effect_NormalSpeechBalloon("怎么一个人都没有……", 1, 0, 0, 3000, 0, 0, 0, 0, 4, 0, 0, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
            cm.effect_NormalSpeechBalloon("我想当然地以为大家都会聚在这里……", 1, 0, 0, 3000, 0, 0, 0, 0, 4, 0, 0, cm.getPlayer().getId());
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=2425556", 1, 50, 100);
              cm.npc_SetForceMove("oid=2425557", 1, 50, 100);
              cm.npc_SetForceMove("oid=2425558", -1, 50, 100);
              cm.npc_SetForceMove("oid=2425559", -1, 50, 100);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/koong", 100);
                cm.inGameDirectionEvent_MoveAction(4);
                cm.emotion(7, 24000);
                cm.userSetFieldFloating(993110765, 5, 5, 50);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.userSetFieldFloating(993110765, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                    cm.effect_NormalSpeechBalloon("提斯，我不是说了不许推我的嘛！", 1, 0, 0, 3000, 1, 0, -150, 0, 4, 3004110, 0, cm.getPlayer().getId());
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                      cm.effect_NormalSpeechBalloon("唔……我本来只是打算吓你一跳的，可一踩空，就失去了重心……", 1, 0, 0, 3000, 1, 50, 0, 0, 4, 304111, 0, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                        cm.effect_NormalSpeechBalloon("哎哟喂，我的腰啊，我也算修炼得挺认真的，等级还不够吗……", 1, 0, 0, 3000, 1, 0, -150, 0, 4, 3004109, 0, cm.getPlayer().getId());
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                          cm.effect_NormalSpeechBalloon("大家都还好吗？", 1, 0, 0, 3000, 1, 0, -150, 0, 4, 3004112, 0, cm.getPlayer().getId());
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                            cm.effect_NormalSpeechBalloon('我……很不好！！！', 1, 0, 0, 3000, 0, 0, 0, 0, 4, 0, 0, cm.getPlayer().getId());
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.npc_LeaveField("oid=2425556");
                                cm.npc_LeaveField("oid=2425556");
                                cm.npc_LeaveField("oid=2425557");
                                cm.npc_LeaveField("oid=2425557");
                                cm.npc_LeaveField("oid=2425558");
                                cm.npc_LeaveField("oid=2425558");
                                cm.npc_LeaveField("oid=2425559");
                                cm.npc_LeaveField("oid=2425559");
                                cm.inGameDirectionEvent_MoveAction(0);
                                cm.inGameDirectionEvent_ForcedFlip(-1);
                                cm.npc_ChangeController(3004112, "oid=2425576", -672, 146, 11, -722, -622, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=2425576", "summon", 0, 0);
                                cm.npc_ChangeController(3004110, "oid=2425577", -603, 148, 11, -653, -553, 1, true, 0, false);
                                cm.npc_SetSpecialAction("oid=2425577", "summon", 0, 0);
                                cm.npc_ChangeController(3004111, "oid=2425578", -425, 148, 10, -475, -375, 1, true, 0, false);
                                cm.npc_SetSpecialAction("oid=2425578", 'summon', 0, 0);
                                cm.npc_ChangeController(3004109, "oid=2425579", -323, 148, 9, -373, -273, 1, true, 0, false);
                                cm.npc_SetSpecialAction("oid=2425579", "summon", 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                      cm.sendNormalTalk("#h0#，感谢你守护了冒险岛世界的和平。", 4, 3004112, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("还有……对不起。我总觉得给了你太沉重的负担，心里很过意不去。", 4, 3004112, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("修嘉，击败了黑魔法师，意味着你也会消失吗？", 4, 3004110, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("不行，我好不容易得胜归来，你居然就要变成树了……！", 4, 3004109, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("嗯，我一开始也以为是这样的。", 4, 3004112, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("虽然我觉得再次回到枫树上静静地望着你们，也挺不错的。", 4, 3004112, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("不过可能我还有留存于世的理由吧。", 4, 3004112, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("这就意味着……", 4, 3004112, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_ChangeController(3004113, "oid=2425584", -738, 189, 13, -788, -688, 0, false, 2000, false);
                                                        cm.npc_SetSpecialAction("oid=2425584", "summon", 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("这就意味着冒险岛世界还没有处于完全的和平之中，各位冒险家……", 4, 3004113, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=2425576", -1);
                                                            cm.sendNormalTalk("那位虽为超越者但却拥有毁灭之力的人正让冒险岛世界和那个世界陷入混乱之中。", 4, 3004113, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("女神……！", 4, 3004111, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk("随风飘落的一片枫叶，宛如黑魔法师的黯然离场……", 4, 3004113, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("我坚信着，想要拯救世界这朴素而又强大的理想会再一次守护冒险岛世界。", 4, 3004113, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk("女神，您不像上次那样再给我增益之类的东西了吗？", 4, 3004109, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk("（喂，你这话能过过脑子吗？！）", 4, 3004110, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk("其实我的庇护一直与大家同在。", 4, 3004113, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk("从很久之前开始。", 4, 3004113, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayFieldSound("advStory/disappear", 100);
                                                                            cm.Npc_Fadeout("oid=2425584", 0, 1800);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk("这样啊……", 4, 3004110, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk("嗯，所以既有喜悦，也有悲伤。", 4, 3004112, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk("要是能和你们面对着面，像从前一般闲聊就好了，不过……", 4, 3004112, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk("毕竟换一种说法，就是新的危机已经到来。", 4, 3004112, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk("难道又到了各自踏上冒险之旅的时候吗？", 4, 3004111, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk("这下该找什么赚钱的活计呢，呵呵……", 4, 3004110, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk("奥利维亚，盗窃可是犯罪，你知道的吧？", 4, 3004109, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_setForceFlip("oid=2425577", 1);
                                                                                            cm.sendNormalTalk("伦多，你该不会光靠嘴皮子来提升等级吧？", 4, 3004110, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk("对魔法师而言，显而易见的等级并不是全部！这个职业还有很多隐藏的惊人潜能！", 4, 3004109, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk("真的好吵啊。", 4, 3004111, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk("我们这就走了，#h0#。", 4, 3004111, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk("哟呵，看来这隐藏的潜力大概要等到200年后才能显露出来。", 4, 3004110, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_LeaveField("oid=2425577");
                                                                                                      cm.npc_LeaveField("oid=2425577");
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk("200年？这话未免太过分了吧，你就说100年嘛！", 4, 3004109, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_LeaveField("oid=2425579");
                                                                                                          cm.npc_LeaveField("oid=2425579");
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk("……。", 4, 3004111, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk("我会将二位的问候帮忙带到。", 4, 3004111, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_LeaveField("oid=2425578");
                                                                                                                cm.npc_LeaveField("oid=2425578");
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk("嘿嘿，每次见面的时候，大家都有说有笑，超有趣的呢。", 4, 3004112, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk("#h0#，你知道吗？", 4, 3004112, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk("这一路走来，我们其实曾经相伴而行。", 4, 3004112, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk('相伴而行？', 2, 0, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk("嗯，我一直很想让你看一看。", 4, 3004112, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1500, 4000, -203, 169);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  var O = cm.getJob();
                                                                                                                                  if (Math.floor(O / 100) == 11 || Math.floor(O / 100) == 12 || Math.floor(O / 100) == 13 || Math.floor(O / 100) == 21 || Math.floor(O / 100) == 22 || Math.floor(O / 100) == 23 || Math.floor(O / 100) == 31 || Math.floor(O / 100) == 32 || Math.floor(O / 100) == 33 || Math.floor(O / 100) == 41 || Math.floor(O / 100) == 42 || Math.floor(O / 100) == 43 || Math.floor(O / 100) == 51 || Math.floor(O / 100) == 52 || Math.floor(O / 100) == 53) {
                                                                                                                                    cm.warp(993110783, 0, false);
                                                                                                                                  } else {
                                                                                                                                    cm.warp(993110784, 0, false);
                                                                                                                                  }
                                                                                                                                  cm.dispose();
                                                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                                                  cm.npc_LeaveField("oid=2425576");
                                                                                                                                  cm.npc_LeaveField("oid=2425576");
                                                                                                                                  cm.npc_LeaveField("oid=2425584");
                                                                                                                                  cm.npc_LeaveField("oid=2425584");
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}