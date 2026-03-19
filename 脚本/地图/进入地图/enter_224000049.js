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
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -3442, -175);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074107, "oid=2598764", -3560, -221, 60, -3610, -3510, 0, true, 500, false);
        cm.npc_SetSpecialAction("oid=2598764", 'summon', 0, 0);
        cm.npc_SetSpecialAction("oid=2598764", "normal", -1, 1);
        cm.npc_ChangeController(2074100, "oid=2598765", -3489, -221, 71, -3539, -3439, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=2598765", 'summon', 0, 0);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.sendNormalTalk_Bottom("小荳？从凌晨开始就过来了吗？\r\n难道有什么事情吗？\r\n好久没见到那孩子这个样子了。", 37, 2074107, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("堆肥也卖得很顺利！这个嘛，当然不能因此就多给她钱，咳咳。", 37, 2074107, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#嗯……当然是理应先来这里才对……吧？\r\n一方面帮小荳在加油鼓劲，一方面却信不过小荳呢……", 37, 2074100, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 500, -3551, -175);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(2074143, "oid=2598776", -3608, -221, 69, -3658, -3558, 1, false, 500, false);
                cm.npc_SetSpecialAction("oid=2598776", "summon", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=2598776", 1);
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2598776"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("哎哟，姐姐？你来这里有什么事情吗？", 37, 2074143, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("嗯，我临时有事先去一趟，\r\n你要么先休息一会，或者差不多聊会天。", 37, 2074107, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=2598764");
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#嘤嘤，我看你一大早就不见了，还一直在找你……\r\n是姐姐对不起你！我误会你了！嘤。", 37, 2074100, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("昨天好久没这么干过活了，实在是耗费了太长的时间。\r\n今天我就一大早过来了。\r\n啊……不过我还是有点累。", 37, 2074143, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("小荳啊！", 37, 2074146, true, true);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(2074146, "oid=2598795", -3660, -221, 69, -3710, -3610, 0, true, 500, false);
                                cm.npc_SetSpecialAction("oid=2598795", "summon", 0, 0);
                                cm.npc_setForceFlip("oid=2598776", -1);
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2598776"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2598765"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#哎哟，哎哟，真好啊，你。\r\n要不要我们先回避一下~", 37, 2074100, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=2598776", 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("不，姐姐，没这个必要……", 37, 2074143, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_LeaveField("oid=2598765");
                                          cm.inGameDirectionEvent_SetHideEffect(1);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=2598776"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("我看你又重新开始工作，认真生活了，\r\n路过就顺便来看看。", 37, 2074146, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_setForceFlip("oid=2598776", -1);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("嗯……你怎么来这儿了，傻瓜，有味道啊。", 37, 2074143, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("这可是你工作的地方啊，\r\n有点味道又怎么了，\r\n果然，你还是在认真生活的时候最帅。", 37, 2074146, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      cm.effect_NormalSpeechBalloon(".....", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 2074143, cm.getPlayer().getId());
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("……(脸红)", 37, 2074143, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("怎么？你怎么了，哪里不舒服吗？脸都红了……", 37, 2074146, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("哼！我可没有！\r\n你赶紧走吧！我还得干活呢！", 37, 2074143, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("好，好吧。\r\n那你好好干活，\r\n我走之前还会再来的，加油，朋友！", 37, 2074146, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("嗯！走好。\r\n朋……友……", 37, 2074143, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_LeaveField("oid=2598795");
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 500, -3451, -175);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_ChangeController(2074100, "oid=2598872", -3407, -221, 53, -3457, -3357, 1, true, 500, false);
                                                                        cm.npc_SetSpecialAction("oid=2598872", 'summon', 0, 0);
                                                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#哎哟喂，瞧瞧你脸红的。\r\n郡守要是走了，你可一定得在他走之前表白啊。", 37, 2074100, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_setForceFlip("oid=2598776", 1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("什么表白啊，我只是……\r\n人家不知道啦。", 37, 2074143, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#别啊，你只管信姐姐的，不过可不能穿着这身衣服，这衣服可全都是味儿……\r\n为了纪念你脱胎换骨，姐姐给你买身漂亮的衣服。", 37, 2074100, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("什么？不，不用，姐姐，没这个必要的……", 37, 2074143, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#别啊，是我想给你买的。\r\n穿什么衣服漂亮呢。\r\n#b#h0##k，咱们赶紧去看衣服吧，赶紧的。", 37, 2074100, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("姐姐，我真的没关系的……", 37, 2074143, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#有什么关系的！你只管信姐姐，\r\n我一定会用超漂亮的衣服把你打扮得美美的。", 37, 2074100, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#来，赶紧走吧。#b#h0##k！去购物咯！\r\n听说#g雪李#k姑娘工作的店里就有不少漂亮衣服呢。", 37, 2074100, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.updateInfoQuest(30440, "gExpCheck=1;NpcSpeech=20740281/20740292/20740013");
                                                                                            cm.forceCompleteQuest(30440);
                                                                                            cm.gainExp(198883);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(400);
                                                                                            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                          } else if (status === V++) {
                                                                                            cm.dispose();
                                                                                            cm.warp(224000000, 27, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;