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
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -2294, -20);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074100, "oid=2607519", -2201, -74, 134, -2251, -2151, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=2607519", 'summon', 0, 0);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_AskAnswerTime(5000);
        cm.effect_Text(["#fn黑体##fs18#几天后#fs15##fn黑体#小荳的家门口"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#小荳啊？小荳啊，你没事吗？\r\n给我开开门。", 37, 2074100, false, true);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(2074144, "oid=2607554", -2383, -74, 132, -2433, -2333, 0, false, 500, false);
            cm.npc_SetSpecialAction("oid=2607554", "summon", 0, 0);
            cm.npc_ChangeController(2074145, "oid=2607555", -2434, -74, 131, -2484, -2384, 0, false, 500, false);
            cm.npc_SetSpecialAction("oid=2607555", "summon", 0, 0);
            cm.sendNormalTalk_Bottom("哞哞哞！小荳啊！起床啦！\r\n那么躺着可会变成哞哞叫的~牛的！", 37, 2074144, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("呱呱呱呱！我真是败给你的幽默了！\r\n小荳啊！赶紧起床啦！", 37, 2074145, true, true);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(2074143, "oid=2607558", -2318, -74, 132, -2368, -2268, 1, false, 500, false);
                cm.npc_SetSpecialAction("oid=2607558", "summon", 0, 0);
                cm.npc_SetSpecialAction("oid=2607558", "standn", -1, 1);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('哎，你们真是吵死了。', 37, 2074150, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=2607558", 1);
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2607558"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("哎哟，姐姐，#b#h0##k，你们什么时候来的？", 37, 2074150, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#就正好经过……你现在好点了吗？", 37, 2074100, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("哎，都已经过去几天了。\r\n我没事的，姐姐，我现在真的，没事了。", 37, 2074150, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#好的……好的。", 37, 2074100, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("真的谢谢你，姐姐。\r\n要不是姐姐，我现在还会像从前那样活得像个废人似的。\r\n真的要……谢谢你，姐姐。", 37, 2074150, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#哎哟喂……我们善良的小荳。\r\n什么时候才会有人出现把你给娶走呢~", 37, 2074100, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("哎，别戏弄我了，嘿嘿。\r\n那我就先去工作了。", 37, 2074150, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#好的……那，我们也差不多该走了。\r\n虽然不知道什么时候会再见面。\r\n你可要好好的啊，小荳。", 37, 2074100, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("走好，姐姐。\r\n有时间再来玩，嘿嘿。", 37, 2074150, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_LeaveField("oid=2607519");
                                          cm.inGameDirectionEvent_SetHideEffect(1);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            cm.effect_NormalSpeechBalloon(".....", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2074143, cm.getPlayer().getId());
                                            cm.effect_NormalSpeechBalloon('.....', 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2074144, cm.getPlayer().getId());
                                            cm.effect_NormalSpeechBalloon(".....", 1, 0, 0, 1500, 1, 0, 0, 0, 4, 2074145, cm.getPlayer().getId());
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=2607558", -1);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("哞哞~不过你没听说那个消息吗？\r\n#b新来的郡守#k要开个就任宴席呢？", 37, 2074144, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("这个嘛，就算去了宴席又有什么用，\r\n还不如去多赚点钱回来。", 37, 2074150, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("呱呱呱，别这样，我们一起去嘛！\r\n他邀请了村里所有人呢！", 37, 2074145, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("我要是不忙就去看看了，\r\n不过红豆和娘给我安排了许多事情……我去不了。\r\n还是你们自己去吧。", 37, 2074150, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("哞哞哞？我们可不会留你一个人，自己去的哞哞~", 37, 2074144, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("呱呱呱，是啊！我们会帮你的，赶紧结束了一起去！", 37, 2074145, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("这个嘛……既然你们都这么说了，\r\n好吧！不过，事情结束得早才能去哦？知道了吧？", 37, 2074150, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("来，那蟾蜍就先去挡住那边的酱缸。", 37, 2074150, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1000, 1, 0, 0, 0, 4, 2074144, cm.getPlayer().getId());
                                                                cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 1000, 1, 0, 0, 0, 4, 2074145, cm.getPlayer().getId());
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("哞哞……哎哟，总觉得比从前更累了呢哞哞~", 37, 2074144, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("呱呱呱呱……", 37, 2074145, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.forceStartQuest(30919, '2');
                                                                      cm.forceStartQuest(30925, '1');
                                                                      cm.forceCompleteQuest(30925);
                                                                      cm.forceForfeitQuest(30925);
                                                                      cm.updateInfoQuest(30925, '');
                                                                      cm.updateInfoQuest(30446, "gExpCheck=1");
                                                                      cm.forceStartQuest(30446, '');
                                                                      cm.gainExp(397767);
                                                                      cm.forceCompleteQuest(30446);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(400);
                                                                      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                    } else if (status === V++) {
                                                                      cm.dispose();
                                                                      cm.warp(224000000, 21, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;