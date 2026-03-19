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
      cm.updateInfoQuest(32674, "enter=1");
      cm.forceCompleteQuest(32674);
      cm.gainExp(186336);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_同时移动镜头和人(1, 5);
        cm.npc_ChangeController(2550001, "oid=1755225", -360, -70, 2, -410, -310, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1755225", 'summon', 0, 0);
        cm.npc_ChangeController(2550002, "oid=1755226", -270, -70, 2, -320, -220, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1755226", "summon", 0, 0);
        cm.npc_ChangeController(2550004, "oid=1755227", -450, -70, 2, -500, -400, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1755227", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#fs20#喂～喂喂～～有人吗？！", 37, 2550001, false, true);
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
                cm.sendNormalTalk_Bottom("奇怪。\r\n要在平时，早该有士兵跑过来，大声呵斥我了啊。", 37, 2550002, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("城堡分明是遭到攻击了，\r\n但是攻击的人跑到哪儿去了？", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("感觉有点阴森森的呢。", 37, 2550001, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("你们，要是打算进去，还是趁早打消这个想法的好。", 37, 2550004, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("不然，绝对没法活着出来。", 37, 2550004, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("你说的也许有道理，不过……\r\n大凡吟游诗人，都需要不惜深入险境来寻找歌唱的素材。\r\n这样才能出道呢。", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('出道？', 37, 2550001, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("首先你得活着，然后才能想唱歌唱歌，想跳舞跳舞啊！\r\n哼！随便你吧，我不管了。", 37, 2550004, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("那么，这位姑娘……", 37, 2550001, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("行了，我自己走吧。人类都是一群傻瓜。\r\n我都怀疑你们是怎么到现在还没灭亡的。\r\n哼！愚蠢的傻瓜们。", 37, 2550004, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.Npc_Fadeout("oid=1755227", 0, 500);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("我跟小姑娘一起走。", 37, 2550001, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("万一出什么事，就用爆竹发信号啊。", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.Npc_Fadeout("oid=1755225", 0, 500);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('好，出发。', 57, 0, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("等等，队长。", 37, 2550002, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom('嗯？', 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("带上剑吧。我感觉不太好。\r\n这次可能真的有危险。", 37, 2550002, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("…………", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("哈哈，是吗？", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_Monologue("以寻找歌唱的素材……为借口，", 0);
                                                              cm.effect_Voice("Voice3.img/DLep4/f/f_1.mp3", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_Monologue("我想确定的到底是什么呢？", 0);
                                                                cm.effect_Voice("Voice3.img/DLep4/f/f_2.mp3", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_Monologue('', 0);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue("在漫长的佣兵生活中遗失的本能，向我发出了警告。", 0);
                                                                    cm.effect_Voice("Voice3.img/DLep4/f/f_3.mp3", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_Monologue('', 0);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_Monologue("现在狮子王之城中正在发生仅凭我们无法阻止的……", 0);
                                                                        cm.effect_Voice("Voice3.img/DLep4/f/f_4.mp3", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_Monologue('不得了的事情。', 0);
                                                                          cm.effect_Voice("Voice3.img/DLep4/f/f_5.mp3", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_Monologue('', 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                            } else if (status === V++) {
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;