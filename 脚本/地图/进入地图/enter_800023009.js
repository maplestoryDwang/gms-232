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
      cm.forceCompleteQuest(58761);
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
      cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111007, "oid=3854694", 760, -40, 10, 710, 810, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3854694", "summon", 0, 0);
      cm.npc_ChangeController(9111002, "oid=3854695", 510, -40, 18, 460, 560, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3854695", 'summon', 0, 0);
      cm.npc_ChangeController(9111004, "oid=3854696", 405, -40, 19, 355, 455, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3854696", "summon", 0, 0);
      cm.npc_ChangeController(9111005, "oid=3854697", 305, -40, 20, 255, 355, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3854697", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#哇啊啊啊，这里有白金画片耶~！这不是孩子们喜欢玩的画片吗？", 37, 9111007, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3854695"], [0, 0, 0, 1, 0, 1, 0, 0]);
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3854697"], [0, 0, 0, 1, 0, 1, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
              cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=3854697"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=3854695"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.sendNormalTalk_Bottom("(她这开场也太突然了！)", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#喔噢！这种地方居然有白金画片！今天真走运！我跑出来真是个英明的决定！", 37, 9111002, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("(棘鬼……)", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("(无头鬼！帮帮我！)", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=3854697"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.sendNormalTalk_Bottom("#face0#哦，哦，好。我，我也，很，很，很喜欢玩，白金画片！", 37, 9111005, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3854697"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3854695"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                            cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ScreenMsg("/Effect2.img/flowervioleta/bird");
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                              cm.effect_PlayMusic("Field.img/flowervioleta/bird");
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#噗嗤，唔哈哈哈哈哈哈哈哈！！！", 37, 9111002, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("(嗤嗤嗤嗤……不行，我得忍住不能笑，咳咳)", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#(天啊……无头鬼演技还真差？？？！！)", 37, 9111007, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=3854697"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.sendNormalTalk_Bottom("#face0#……我不买！", 37, 9111015, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('唉……这个也不行。', 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                          cm.sendNormalTalk_Bottom("唉……泉奈，照这样下去也是白费力气。\r\n这些方法老过时了，他不吃这一套。", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("暗变成蛰居者之前，到底发生了什么事？", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=3854694", -1);
                                              cm.sendNormalTalk_Bottom("#face0#我想想……#r5年前的那天#k，暗和其他狐妖一起去人类村庄玩。", 37, 9111007, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#我因为有点惧怕人类村庄，心里也不太想去，就没有同行。听说那天暗独自走迷路了……\r\n", 37, 9111007, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#后来他直到很晚才回来。\r\n我看他心情不好，就问他怎么回事，可不管我怎么问，他就是不肯说……\r\n之后，他就像这样把自己锁在了洞里……", 37, 9111007, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("原来如此……。", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#他会不会是受到其他狐妖的捉弄，所以自尊心受挫……？", 37, 9111002, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#……也可能是被人类欺负了。", 37, 9111005, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("唔……", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("……好，我们下面就把这些问题逐个击破。", 57, 0, true, true);
                                                            cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=3854697"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=3854694"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/whatl", "oid=3854695"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                              cm.sendNormalTalk_Bottom("泉奈！要想获得狐妖们的尊敬该怎么做？", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_setForceFlip("oid=3854694", -1);
                                                                cm.sendNormalTalk_Bottom("#face2#嗯……这个嘛……", 37, 9111007, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face1#做些能成为其他妖怪效仿对象的事，或者达成些成就怎么样……？", 37, 9111002, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    cm.effect_NormalSpeechBalloon("唔……", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 9111007, null, cm.getPlayer().getId());
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3854694"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                      cm.sendNormalTalk_Bottom("#face1#啊哈！我想到个计划！", 37, 9111007, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else if (status === V++) {
                                                                        cm.warp(800023010, 0, false);
                                                                        cm.npc_LeaveField("oid=3854694");
                                                                        cm.npc_LeaveField("oid=3854694");
                                                                        cm.npc_LeaveField("oid=3854695");
                                                                        cm.npc_LeaveField("oid=3854695");
                                                                        cm.npc_LeaveField("oid=3854696");
                                                                        cm.npc_LeaveField("oid=3854696");
                                                                        cm.npc_LeaveField("oid=3854697");
                                                                        cm.npc_LeaveField("oid=3854697");
                                                                        cm.eventSKill(0);
                                                                        cm.setInGameDirectionMode(false, true, false);
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