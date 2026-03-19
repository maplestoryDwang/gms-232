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
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.npc_ChangeController(1530603, "oid=40176606", 1007, -48, 1, 957, 1057, 1, false, false);
      cm.npc_SetSpecialAction("oid=40176606", 'summon', 0, 0);
      cm.npc_ChangeController(1530616, "oid=40176607", 768, 47, 6, 718, 818, 1, true, false);
      cm.npc_SetSpecialAction("oid=40176607", "summon", 0, 0);
      cm.npc_ChangeController(1530608, "oid=40176608", 660, -9, 5, 610, 710, 0, true, false);
      cm.npc_SetSpecialAction("oid=40176608", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 859, -25);
      cm.inGameDirectionEvent_PushScaleInfo(10, 2000, 10, 788, 30);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("所以，你是打算向小看布吉的戴米安报仇啊。", 37, 1530070, false, true);
            cm.effect_Voice("Voice2.img/Friends/CH6_05/21", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('报仇？那个嘛……', 37, 1530120, true, true);
              cm.effect_Voice("Voice2.img/Friends/CH6_05/22", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("你难道不是想赢了戴米安，让布吉高兴吗？", 37, 1530070, true, true);
                cm.effect_Voice("Voice2.img/Friends/CH6_05/23", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("不，布吉才不是会因为那种事情就开心的孩子。", 37, 1530120, true, true);
                  cm.effect_Voice("Voice2.img/Friends/CH6_05/24", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("是啊……勉强大家组成乐队，都是因为我个人的胜负欲……", 37, 1530120, true, true);
                    cm.effect_Voice("Voice2.img/Friends/CH6_05/25", 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("但是，我真正想要的是让大家都听到#b布吉的曲子#k。输赢都无所谓。", 37, 1530120, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("嗯，那就要换掉演出的曲子了。", 37, 1530070, true, true);
                          cm.effect_Voice("Voice2.img/Friends/CH6_05/26", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("但是，布吉把乐谱丢了，现在……", 37, 1530120, true, true);
                            cm.effect_Voice("Voice2.img/Friends/CH6_05/27", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("你是说这个乐谱吗？", 37, 1530070, true, true);
                              cm.effect_Voice("Voice2.img/Friends/CH6_05/28", 100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=40176608"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                  cm.sendNormalTalk_Bottom("#fs22##r你从哪儿找到的？！", 37, 1530120, false, true);
                                  cm.effect_Voice("Voice2.img/Friends/CH6_05/29", 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=40176607", -1, 20, 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("我在来的路上捡到的。\r\n如果你要更换曲子，明天之前要把文件交上来哦。那我先告辞了。", 37, 1530070, false, true);
                                        cm.effect_Voice("Voice2.img/Friends/CH6_05/30", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(150);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=40176607", -1, 600, 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom('#face0#嗯……', 37, 1530600, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=40176608"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                cm.sendNormalTalk_Bottom("布吉，你起来了啊。", 37, 1530120, true, true);
                                                cm.effect_Voice("Voice2.img/Friends/CH6_06/1", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(150);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                    cm.npc_SetForceMove("oid=40176608", 1, 100, 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#嗯……伊莉娜？？", 37, 1530600, false, true);
                                                      cm.effect_Voice("Voice2.img/Friends/CH6_06/2", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("布吉，我决定了。我要用你的曲子参加演出。我来弹吉他。", 37, 1530120, true, true);
                                                        cm.effect_Voice("Voice2.img/Friends/CH6_06/3", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#什么？不，不行。不能因为我，让你也一起被大家嘲笑。", 37, 1530600, true, true);
                                                          cm.effect_Voice("Voice2.img/Friends/CH6_06/4", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("你不是想让大家听到你的歌曲吗？我也希望让大家听到你的歌。你要是害怕一个人，我会帮你的。", 37, 1530120, true, true);
                                                            cm.effect_Voice("Voice2.img/Friends/CH6_06/5", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#伊莉娜……", 37, 1530600, true, true);
                                                              cm.effect_Voice("Voice2.img/Friends/CH6_06/6", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("就当是为了我，你能鼓起勇气吗？这已经是毕业前的最后一次庆典了。", 37, 1530120, true, true);
                                                                cm.effect_Voice("Voice2.img/Friends/CH6_06/7", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("那怎么能忘了我们呢！", 37, 1530100, false, true);
                                                                    cm.effect_Voice("Voice2.img/Friends/CH6_06/8", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_PlayBGM("Bgm38.img/SchoolLife", 0, 0);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=40176606"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=40176608"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_setForceFlip("oid=40176608", -1);
                                                                          cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                          cm.npc_ChangeController(1530609, "oid=40187514", 400, -48, 4, 350, 450, 1, true, false);
                                                                          cm.npc_SetSpecialAction("oid=40187514", "summon", 0, 0);
                                                                          cm.npc_ChangeController(1530610, "oid=40187515", 330, 47, 4, 280, 380, 1, true, false);
                                                                          cm.npc_SetSpecialAction("oid=40187515", "summon", 0, 0);
                                                                          cm.npc_ChangeController(1530607, "oid=40187516", 260, -9, 4, 210, 310, 0, true, false);
                                                                          cm.npc_SetSpecialAction("oid=40187516", "summon", 0, 0);
                                                                          cm.npc_SetForceMove("oid=40187514", 1, 250, 100);
                                                                          cm.npc_SetForceMove("oid=40187515", 1, 250, 100);
                                                                          cm.npc_SetForceMove("oid=40187516", 1, 250, 100);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("太好了！我只要一弹吉他，大家都会被我吸引的。是不是啊~？", 37, 1530100, false, true);
                                                                            cm.effect_Voice("Voice2.img/Friends/CH6_06/9", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("胡克错了的时候，我就乱打架子鼓帮你掩盖过去~", 37, 1530110, true, true);
                                                                              cm.effect_Voice("Voice2.img/Friends/CH6_06/10", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("喂，奥兹~", 37, 1530100, true, true);
                                                                                cm.effect_Voice("Voice2.img/Friends/CH6_06/11", 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("贝斯就交给我吧。", 37, 1530090, true, true);
                                                                                  cm.effect_Voice("Voice2.img/Friends/CH6_06/12", 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("对啊，伊卡尔特很可靠的！", 37, 1530110, true, true);
                                                                                    cm.effect_Voice("Voice2.img/Friends/CH6_06/13", 100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                      cm.npc_setForceFlip("oid=40176608", 1);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                        cm.sendNormalTalk_Bottom("我知道了，我只有一个建议。", 37, 1530600, false, true);
                                                                                        cm.effect_Voice("Voice2.img/Friends/CH6_06/15", 100);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("要用我的歌曲在庆典上表演……那必须让伊莉娜你来唱。", 37, 1530600, true, true);
                                                                                          cm.effect_Voice("Voice2.img/Friends/CH6_06/16", 100);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("什么？！", 37, 1530120, true, true);
                                                                                            cm.effect_Voice("Voice2.img/Friends/CH6_06/17", 100);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("这个歌曲一开始就是为了伊莉娜而写的。虽然我因为太羞涩，没敢让你来唱。", 37, 1530600, true, true);
                                                                                              cm.effect_Voice("Voice2.img/Friends/CH6_06/18", 100);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("可以吗？如果伊莉娜能来唱我的歌，我会在观众席上为你加油的。这是我的愿望。", 37, 1530600, true, true);
                                                                                                cm.effect_Voice("Voice2.img/Friends/CH6_06/22", 100);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("就当是为了我，你能鼓起勇气吗？这已经是毕业前的最后一次庆典了。", 37, 1530600, true, true);
                                                                                                  cm.effect_Voice("Voice2.img/Friends/CH6_06/23", 100);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("喂，你这么说也太卑鄙了……！", 37, 1530120, true, true);
                                                                                                    cm.effect_Voice("Voice2.img/Friends/CH6_06/24", 100);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("……好吧，我知道了！我会唱的！", 37, 1530120, false, true);
                                                                                                        cm.effect_Voice("Voice2.img/Friends/CH6_06/25", 100);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom('好，胡克乐队复活！', 37, 1530100, true, true);
                                                                                                          cm.effect_Voice("Voice2.img/Friends/CH6_06/26", 100);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("才不是呢~", 37, 1530110, true, true);
                                                                                                            cm.effect_Voice("Voice2.img/Friends/CH6_06/27", 100);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("不是胡克乐队。", 37, 1530090, true, true);
                                                                                                              cm.effect_Voice("Voice2.img/Friends/CH6_06/28", 100);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("是啊，我们可不是胡克乐队。", 37, 1530120, true, true);
                                                                                                                cm.effect_Voice("Voice2.img/Friends/CH6_06/29", 100);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("呃……我知道了，知道了。", 37, 1530100, true, true);
                                                                                                                  cm.effect_Voice("Voice2.img/Friends/CH6_06/30", 100);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("好，一个月后就是庆典了，现在就开始练习吧！", 37, 1530120, true, true);
                                                                                                                    cm.effect_Voice("Voice2.img/Friends/CH6_06/31", 100);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                    } else if (status === V++) {
                                                                                                                      cm.dispose();
                                                                                                                      cm.warp(330002618, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;