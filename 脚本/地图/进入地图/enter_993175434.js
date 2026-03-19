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
      cm.forceCompleteQuest(100451);
      cm.updateInfoQuest(100405, "complete=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9062255, "oid=27666638", -230, 260, 1, -280, -180, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=27666638", "summon", 0, 0);
      cm.npc_ChangeController(9062260, "oid=27666639", 200, 260, 1, 150, 250, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=27666639", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -8, 250);
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
            cm.sendNormalTalk_Bottom("#face0#你们去哪儿了？\r\n两个人说着悄悄话就不见了……", 37, 9062260, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#要是不听我的话，\r\n那我零点时就不摘假面了。\r\n我让你们找的东西都找来了吗？", 37, 9062260, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("哭泣的假面，你知道这是什么吗？", 57, 0, true, true, 1);
              } else {
                if (status === V++) {
                  cm.onSetBackEffect('cake', 1, 1, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=0"], [0, 200, 280, 1, 0, 1, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#我见过这个！\r\n这是#r蛋糕#k！", 37, 9062260, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("对。这个就是蛋糕。\r\n我们现在开始要举行#r派对#k哦！", 57, 0, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("这是苏菲莉亚特别为你准备的蛋糕。#b非常好吃哦#k！", 57, 0, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#啊哈，是用来庆祝人类的#b假面舞会#k的蛋糕吗？", 37, 9062260, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#不是，这是为你准备的庆祝派对。", 37, 9062255, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=0"], [0, 200, 280, 1, 0, 1, 1, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#可我现在还没有变成#b人类#k啊？", 37, 9062260, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#如果被发现非#b人类#k的我在做这种事，我会变成#b废品#k的。", 37, 9062260, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#不会的，这是我们作为你的#b朋友#k，特意为你准备的。", 37, 9062255, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#朋友？", 37, 9062260, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("对，朋友。", 57, 0, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/phantom/tutorial", "oid=0"], [0, 200, 280, 1, 0, 1, 1, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#我和你们是#r朋友#k了吗？", 37, 9062260, false, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("那还用说！快尝尝这个蛋糕吧！", 57, 0, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#一直以来很辛苦吧？\r\n一直都是在为人服务……今天就好好享受吧，没关系的。", 37, 9062255, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0##b朋友？#k", 37, 9062260, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0##b朋友！#k", 37, 9062260, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#天哪……！ \r\n想我这样的破铜烂铁居然也能和人类做#r朋友#k！\r\n真是没想到！！", 37, 9062260, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/phantom/tutorial", 'oid=0'], [0, 200, 280, 1, 0, 1, 1, 0, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#看来我的零件都老化了。\r\n心情太好了，可是汽油总往外流出来。", 37, 9062260, false, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#如果是开心的时候漏出来的，\r\n那应该叫#r眼泪#k才对。", 37, 9062255, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#可是眼泪……\r\n不是只有人类才会流的吗？", 37, 9062260, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#看起来并不是那样。", 37, 9062255, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("啊！吹灭蜡烛前要#r许愿#k才行。", 57, 0, false, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0##r许愿#k……？", 37, 9062260, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom('对，在心里许愿。', 57, 0, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_SetForceMove("oid=27666639", -1, 100, 60);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/phantom/tutorial", "oid=0"], [0, 75, 280, 1, 0, 1, 1, 0, 0]);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#我许好了！", 37, 9062260, false, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("你许了什么愿望？", 57, 0, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#现在我已经不需要变成人类的愿望了……", 37, 9062260, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#所以我许了其他的！\r\n我许愿，希望让你们#b变得更幸福#k。", 37, 9062260, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#我们？", 37, 9062255, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#我之前学过，说朋友之间就要互相希望彼此幸福。\r\n为了交到朋友的这一天，我读了很多关于友情的书，看来没有白读！", 37, 9062260, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_Monologue("#fs25#我们一起度过了一个简短的派对。", 0);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_Monologue("#fs25#虽然只有急匆匆准备的蛋糕和南瓜汁……", 0);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_Monologue("#fs25#哭泣的假面却比谁都要开心。", 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#我可以把剩下的蛋糕都拿走吗？", 37, 9062260, false, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("当然了。\r\n这本来就是为你准备的。", 57, 0, true, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#嘿嘿，谢谢你们！\r\n那么我们零点在舞会会场见面吧！", 37, 9062260, true, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.Npc_Fadeout("oid=27666639", 0, 2000);
                                                                                                            cm.onSetBackEffect("cake", 1, 0, 0, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("还真有些不好意思。\r\n我们做的就只有办一个#b小小的派对#k，就只有这些了。", 57, 0, false, true, 1);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#就这个……也足够了。", 37, 9062255, true, true, 1);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("你为什么这副表情？", 57, 0, true, true, 1);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/phantom/tutorial", "oid=0"], [0, -230, 280, 1, 0, 1, 1, 0, 0]);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#没什么，就是突然想起了以前。\r\n我小时候每年也会办生日派对.", 37, 9062255, false, true, 1);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#有一次，因为只收到了一只小熊玩偶而哭得特别厉害。\r\n爸爸那次为了安慰我，费了好大的力气……", 37, 9062255, true, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#为什么我那时，不懂得那就是幸福呢。", 37, 9062255, true, true, 1);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/phantom/tutorial"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_SetForceMove("oid=27666638", 1, 20, 50);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#……#b#h0##k，刚刚谢谢你了。\r\n因为心急本打算随便糊弄一下的，还真有些不好意思。", 37, 9062255, false, true, 1);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#因为我自己很着急，所以一时忘记了，\r\n这里的客人也像我一样迫切。", 37, 9062255, true, true, 1);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("现在只剩一位要见的客人了。\r\n#b最后这位客人#k是个怎样的人呢？", 57, 0, true, true, 1);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#我对#b最后这位客人#k也不是很了解。\r\n据我所知，这次舞会一共邀请了#r三位#k客人。", 37, 9062255, true, true, 1);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#你先去找#r最后这位客人#k，和他聊一聊。\r\n我一会儿就去。", 37, 9062255, true, true, 1);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                                                                            cm.fieldEffect_ProcessOnOffLayer('intro', "Effect/EventEffect.img/2019Halloween/finishEff", 0, 0, 0, -50, 0, 4, 0, 0, 0, 0, 1);
                                                                                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1_5/DemianAttack2", 100);
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2100);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/evilS_dem", 100);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                              } else if (status === V++) {
                                                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                cm.setStandAloneMode(false);
                                                                                                                                                cm.npc_LeaveField("oid=27666638");
                                                                                                                                                cm.npc_LeaveField("oid=27666639");
                                                                                                                                                cm.dispose();
                                                                                                                                                cm.warp(993175400, 0, false);
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}