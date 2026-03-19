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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9401277, "oid=2154312", -620, 330, 24, -670, -570, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2154312", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.sendNewEffects(17, [0, 1000, 1500, -720, 380]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0##b也许你已经发现了，那天……掌门人帮我解开了封印的力量。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0##b...", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.inGameDirectionEvent_AskAnswerTime(600);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_同时移动镜头和人(1, 50);
                  cm.sendNewEffects(12, [1000, -860, 380]);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175101001/Use", 100);
                      cm.inGameDirectionEvent_OneTimeAction(2129, 0);
                      cm.inGameDirectionEvent_头顶图片(["Skill/17510.img/skill/175101001/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(600);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175101002/Use", 100);
                        cm.inGameDirectionEvent_OneTimeAction(2130, 0);
                        cm.inGameDirectionEvent_头顶图片(["Skill/17510.img/skill/175101002/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(900);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175111001/Use", 100);
                          cm.inGameDirectionEvent_OneTimeAction(2131, 0);
                          cm.inGameDirectionEvent_头顶图片(["Skill/17511.img/skill/175111001/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(900);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_OneTimeAction(2138, 900);
                            cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175111004/Use", 100);
                            cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175111004/Special", 100);
                            cm.inGameDirectionEvent_头顶图片(["Skill/17511.img/skill/175111002/prepare"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Skill/17511.img/skill/175111002/keydown"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(540);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Skill/17511.img/skill/175111002/keydownend"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(540);
                              } else {
                                if (status === V++) {
                                  cm.sendNewEffects(12, [1000, -720, 380]);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2154312"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                      cm.sendNormalTalk_Bottom("#face5#…! ", 37, 9401277, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0##b武神的……力量吗？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0##b之前我无法控制这种力量，也没有确信，所以一直没说。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face5#… ", 37, 9401277, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=2154312", -1, 30, 30);
                                                cm.sendNormalTalk_Bottom("#face0##b……对不起。\r\n因为我躲了起来……所以生气了吗？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face5#……太……太……", 37, 9401277, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face3##b好吧，我做得太过分了……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face2#不，太帅了！简直了！", 37, 9401277, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#这就是传说中的武神之力吗？\r\n再让我看看！这一刻我不知盼望了多久！", 37, 9401277, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_ChangeController(9401303, "oid=2154469", -450, 330, 24, -500, -400, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=2154469", "summon", 0, 0);
                                                            cm.npc_ChangeController(9401304, "oid=2154470", -400, 330, 24, -450, -350, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=2154470", 'summon', 0, 0);
                                                            cm.npc_ChangeController(9401287, "oid=2154471", -350, 330, 24, -400, -300, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=2154471", 'summon', 0, 0);
                                                            cm.npc_ChangeController(9401305, "oid=2154472", -300, 330, 24, -350, -250, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=2154472", "summon", 0, 0);
                                                            cm.npc_ChangeController(9401288, "oid=2154473", -250, 330, 24, -300, -200, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=2154473", "summon", 0, 0);
                                                            cm.npc_SetForceMove("oid=2154469", -1, 100, 100);
                                                            cm.npc_SetForceMove("oid=2154470", -1, 100, 100);
                                                            cm.npc_SetForceMove("oid=2154471", -1, 100, 100);
                                                            cm.npc_SetForceMove("oid=2154472", -1, 100, 100);
                                                            cm.npc_SetForceMove("oid=2154473", -1, 100, 100);
                                                            cm.sendNewEffects(12, [1500, -650, 380]);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_ForcedFlip(-1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175101001/Use", 100);
                                                                cm.inGameDirectionEvent_OneTimeAction(2129, 0);
                                                                cm.inGameDirectionEvent_头顶图片(["Skill/17510.img/skill/175101001/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(600);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_OneTimeAction(2136, 0);
                                                                  cm.inGameDirectionEvent_头顶图片(["Skill/17500.img/skill/175001003/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                  cm.inGameDirectionEvent_头顶图片(["Skill/17500.img/skill/175001003/effect0"], [0, 0, 0, 1, -20, 0, 0, 0, 0]);
                                                                  cm.inGameDirectionEvent_头顶图片(["Skill/17500.img/skill/175001003/special"], [0, 0, 0, 1, 10, 0, 0, 0, 0]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                  cm.effect_NormalSpeechBalloon("了，了不起！惊人的力量！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401305, null, cm.getPlayer().getId());
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    cm.effect_NormalSpeechBalloon("那就是墨玄师父的力量？", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401287, null, cm.getPlayer().getId());
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face2#哇，哇！再来一次！", 37, 9401277, false, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        cm.effect_NormalSpeechBalloon('我之前见到过！', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401303, null, cm.getPlayer().getId());
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175101001/Use", 100);
                                                                            cm.inGameDirectionEvent_OneTimeAction(2129, 0);
                                                                            cm.inGameDirectionEvent_头顶图片(["Skill/17510.img/skill/175101001/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_OneTimeAction(2136, 0);
                                                                              cm.inGameDirectionEvent_头顶图片(["Skill/17500.img/skill/175001003/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                              cm.inGameDirectionEvent_头顶图片(["Skill/17500.img/skill/175001003/effect0"], [0, 0, 0, 1, -20, 0, 0, 0, 0]);
                                                                              cm.inGameDirectionEvent_头顶图片(["Skill/17500.img/skill/175001003/special"], [0, 0, 0, 1, 10, 0, 0, 0, 0]);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                cm.sendNormalTalk_Bottom("#face2##b这、这样？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face3#哇……玄山招式以连招为主，在一击之中很难使出太大的力量，但武神之力实在是太强了。", 37, 9401277, false, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face2#只能用压倒性的力量来形容了。", 37, 9401277, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face1##b是的，你说得对。\r\n但是感觉我连这种力量的一半都释放不出来。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face1#这么强的威力，还不是极限吗……", 37, 9401277, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face1#总算是万幸，天生拥有这种力量的人是" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "。\r\n幸好不是坏人，而是" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + '。', 37, 9401277, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face4##b我要变得更强。强到可以保护所有人。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face3#当然！我也不会闲着不动。", 37, 9401277, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face4#所以，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，我们来对练一场，怎么样？", 37, 9401277, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face1##b… ", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face1#嘿嘿，开个玩笑。好久没回来了，好好休息一下再走吧。", 37, 9401277, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_setForceFlip("oid=2154312", 1);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face1#嗯……因为爆炸声，大家都聚集了起来。\r\n以后我再和你详细说明。", 37, 9401277, false, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_setForceFlip("oid=2154312", -1);
                                                                                                            cm.sendNormalTalk_Bottom("#face0#但是" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，你到底去金银岛干嘛了？", 37, 9401277, true, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face1##b嗯？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face2#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，你帮助过的人，还有被你迷住的人，全都跑来了。\r\n其中有几个人通过了考试，成为了弟子。是不是感觉挺面熟的？\r\n我让他们正式和你打个招呼。", 37, 9401277, true, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNewEffects(14, [0, 2000, 1000]);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNewEffects(19, [0]);
                                                                                                                    } else if (status === V++) {
                                                                                                                      cm.npc_LeaveField("oid=2154312");
                                                                                                                      cm.npc_LeaveField("oid=2154469");
                                                                                                                      cm.npc_LeaveField("oid=2154470");
                                                                                                                      cm.npc_LeaveField("oid=2154471");
                                                                                                                      cm.npc_LeaveField("oid=2154472");
                                                                                                                      cm.npc_LeaveField("oid=2154473");
                                                                                                                      cm.dispose();
                                                                                                                      cm.warp(875003039, 0, false);
                                                                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
              }
            }
          }
        }
      }
    }
  }
}