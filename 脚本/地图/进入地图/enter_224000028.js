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
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -2374, 360);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074123, "oid=2589809", -2443, 323, 478, -2493, -2393, 1, false, 500, false);
        cm.npc_SetSpecialAction("oid=2589809", "summon", 0, 0);
        cm.npc_ChangeController(2074100, "oid=2589810", -2225, 323, 484, -2275, -2175, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=2589810", 'summon', 0, 0);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.sendNormalTalk_Bottom("嗯……现在也差不多……是时候回来了吧？", 45, 2074123, false, true);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(2074124, "oid=2589811", -2369, 323, 480, -2419, -2319, 1, false, 500, false);
          cm.npc_SetSpecialAction("oid=2589811", "summon", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.npc_setForceFlip("oid=2589809", 1);
            cm.npc_SetSpecialAction("oid=2589809", 'standn', -1, 1);
            cm.sendNormalTalk_Bottom("来，来了……！", 45, 2074139, false, true);
          } else {
            if (status === V++) {
              cm.setNpcSpecialActionReset("oid=2589809");
              cm.sendNormalTalk_Bottom("啊……是七南啊……\r\n又有什么事情吗？", 45, 2074123, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我是来送稻草的，\r\n你怎么……好像表情不太好的样子嘛？", 37, 2074124, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("啊，没什么，我能有什么心情不好的？\r\n稻草就放在那里吧。\r\n……那，你走好。", 45, 2074123, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("哦……哦哦……水！\r\n我可以喝杯水再走吧？", 37, 2074124, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("水？啊……我腰有点痛，\r\n你就自己去拿来喝吧。\r\n就在那边~~那后面。", 45, 2074123, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=2589809", -1);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("啊……那……还是算了。\r\n水嘛……还是一会再喝吧。", 37, 2074124, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                              cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2074123, cm.getPlayer().getId());
                              cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2074124, cm.getPlayer().getId());
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#那两个人是兄弟吗？\r\n怎么这么说话呢？有什么事情吗？\r\n嗯，要用万花筒看看吗？", 37, 2074100, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#b(用万花筒看一看。)#k", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/Downtown2015/DarkEffectM", "oid=2589811"], [8000, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/Downtown2015/DarkEffectM", "oid=2589809"], [8000, 0, 0, 1, 0, 1, 0, 0]);
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(700);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#嗯？哎？搞什么，两个人全都是？\r\n两兄弟全都被宝玉附身了。", 37, 2074100, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#哇……看来也并不像是友爱的两兄弟嘛，是吧？\r\n不过这两个人的关系怎么这样？", 37, 2074100, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(600);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(700);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_ChangeController(2074125, "oid=2589960", -2550, 323, 481, -2600, -2500, 0, false, 500, false);
                                                    cm.npc_SetSpecialAction("oid=2589960", "summon", 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetSpecialAction("oid=2589809", "standn", -1, 1);
                                                      cm.npc_SetSpecialAction("oid=2589811", 'standn', -1, 1);
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2589811"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2589809"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("你好！早上好！", 37, 2074140, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("嗯，你好，天气可真好。", 45, 2074139, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom('啊，是，你好。', 37, 2074125, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("二位今天也在一起呢，\r\n看上去你们兄弟关系很和睦啊。", 37, 2074125, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("啊，哈，哈，哈，是，没错。\r\n我们真的是友爱的两兄弟呢。", 37, 2074140, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("呵，呵，呵，是，他可是这天底下我独一无二的弟弟啊。", 45, 2074139, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("哈哈，是，那我就先告辞了……\r\n有劳了。", 37, 2074125, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("走好！要加油哦！", 37, 2074140, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("那，那个，天这么热，一定要保重身体啊。", 45, 2074139, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_LeaveField("oid=2589960");
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.setNpcSpecialActionReset("oid=2589809");
                                                                            cm.setNpcSpecialActionReset("oid=2589811");
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                            cm.effect_NormalSpeechBalloon('......', 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2074123, cm.getPlayer().getId());
                                                                            cm.effect_NormalSpeechBalloon('......', 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2074124, cm.getPlayer().getId());
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_setForceFlip("oid=2589811", 1);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("大哥，那我就先走了。", 37, 2074124, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom('……哦，去吧。', 45, 2074123, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_LeaveField("oid=2589811");
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#哇……我快要窒息了，那对兄弟怎么那样？\r\n这明眼人一看就知道，好像是因为刚刚那个女的吧，是吧？", 37, 2074100, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#我这女人的直觉一下子就能感觉到了，哎哟，这些男人啊……\r\n想要回收#b宝玉#k……嗯，得先上去搭个话吧？", 37, 2074100, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.gainExp(142059);
                                                                                          cm.updateInfoQuest(30421, "gExpCheck=1");
                                                                                          cm.forceStartQuest(30421, '');
                                                                                          cm.forceCompleteQuest(30421);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(400);
                                                                                          cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                        } else if (status === V++) {
                                                                                          cm.dispose();
                                                                                          cm.warp(224000000, 25, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;