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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -825, -25);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.npc_ChangeController(2074153, "oid=1942540", -971, -126, 11, -1021, -921, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1942540", 'summon', 0, 0);
        cm.npc_ChangeController(2074155, "oid=1942541", -741, -63, 10, -791, -691, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1942541", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=1942540", "hurt", -1, 1);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
        cm.effect_Text(["#fn黑体##fs18#两年前大火灾爆发当时#fs15##fn黑体#禁地悬崖上"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=1942540", 1);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1942540"], [0, 0, 0, 1, 0, 1, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("九尾狐！突然爆发了山火，\r\n你赶紧从那里出来！", 37, 2074155, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#别，别过来！", 37, 2074153, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1942541"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("你好奇怪啊，多危险，赶紧下来！", 37, 2074155, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#呜……呜呜，这都是……都是因为我。\r\n是因为我，大火才会……村庄才会……还有宝玉……", 37, 2074153, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("我实在是不知道你在说什么。", 37, 2074155, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("难道……这事儿和朴大爷有关吗？\r\n你难道碰了那个#r宝玉#k吗？", 37, 2074155, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#是我太过贪心……没有听他的话……\r\n我心想着也许能变成人类……", 37, 2074153, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#没想到却被宝玉附身，森林就这么……\r\n大火也难以熄灭……我停不下来了，我该怎么办？", 37, 2074153, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2074155, cm.getPlayer().getId());
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("我知道了，小白，那里很危险，你赶紧从那里出来。\r\n你出来后我们再说。", 37, 2074155, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我会去教训朴大爷的，你什么都不用担心。", 37, 2074155, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=1942541", -1, 50, 200);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#我叫你不要过来！", 37, 2074153, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                              cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 500, 1, 0, 0, 0, 4, 2074155, cm.getPlayer().getId());
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("没关系的，都可以解决的。\r\n来，赶紧到这里来。", 37, 2074155, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#我不能再继续活下去了……所有的森林都会被火烧着的。\r\n童话村，村民都会被烧着的……", 37, 2074153, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#做了坏事就该承担相应的罪责，我……呜……呜。", 37, 2074153, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("你不坏，小白从来都没有坏过。\r\n来，赶紧到这里来。", 37, 2074155, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face2#对不起。", 37, 2074153, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("求你……我求求你了。", 37, 2074155, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face2#我不过是想变成人类……", 37, 2074153, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom('等一下！等一下！', 37, 2074155, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face2#求你一定要将宝玉，放回原位……\r\n还有不要太埋怨村民……", 37, 2074153, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1942541"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(250);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("等，等一下！你让开！大树！", 37, 2074155, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_PlayFieldSound('Aran/down', 100);
                                                                      cm.sendNormalTalk_Bottom("#face2#啊！", 37, 2074153, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom('尾狐！', 37, 2074155, true, true);
                                                                      } else if (status === V++) {
                                                                        cm.dispose();
                                                                        cm.warp(224000096, 0);
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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