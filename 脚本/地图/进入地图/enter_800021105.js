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
      cm.forceCompleteQuest(58732);
      cm.forceStartQuest(58733, '');
      cm.updateInfoQuest(58711, "10=4;0=2;1=3;2=1;3=1;4=4;5=4;6=4;7=4;8=4;9=4");
      cm.updateInfoQuest(58711, "10=4;11=3;0=2;1=3;2=1;3=1;4=4;5=4;6=4;7=4;8=4;9=4");
      cm.updateInfoQuest(58712, "0=1;1=1;2=3");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9111011, "oid=3570560", 846, 73, 115, 796, 896, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=3570560", "summon", 0, 0);
        cm.npc_ChangeController(9111012, "oid=3570561", 953, 73, 117, 903, 1003, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=3570561", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1800, 1000, 908, 95);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#呼，总算松了口气。只可惜他们已经完全不记得咱俩了。", 37, 9111012, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#……我也是来到这里才发现这情况，没办法只好动手了。", 37, 9111011, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#对了，这家伙是人类嘛。你来这里做什么？刚才真没礼貌，说我是黄鼠狼。", 37, 9111012, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=3570560"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                    cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("…………我是受蘑菇神社的巫女木野子委托，来到这里的。", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#哈哈，看来……你值得信任。言归正传，谁能解释下现在这里发生了什么事？", 37, 9111011, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#……牛鬼，他暴走了。", 37, 9111012, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3570560"], [0, 0, 0, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                              cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/oh");
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#就在上个满月之夜，人类攻入了这里。自从他们大肆扫荡了狸猫山丘，把狸猫妖怪们赶走后，气焰就十分高涨。", 37, 9111012, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("(狸猫山丘！)", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#妖鬼们拼了命地抵挡他们的进攻，却溃不成军。最后牛鬼决定吸收自己守护的金之五行，以变得更强来对抗人类。", 37, 9111012, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#五行……那是什么东西，为什么牛鬼哥会有那个？", 37, 9111011, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#我也不太清楚，我只知道五行是组成万物根源的力量，也是力量来源。", 37, 9111012, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#很久很久以前，为了防止人类垂涎五行之力，大太法师将五行分裂为五个，并封印了起来。", 37, 9111012, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#然后，他把封印好的五行交给维持樱之岛力量均衡的妖怪们，命他们世代守护五行。", 37, 9111012, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("大太法师……（是给木野子降下启示的那个神……？）", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#但是，五行之力并不属于妖怪。因此吸收五行之力是妖怪之间代代流传下来的禁忌。", 37, 9111012, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#据我推测，牛鬼应该是通过打破禁忌吸收了五行之力，以实现和万物相通，获得了强大的力量，所以才丧失了心智。", 37, 9111012, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#……呜……呜呜……要是我早点赶到……牛鬼哥也不至于那样拼命……", 37, 9111011, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetSpecialAction("oid=3570560", 'cry', 10000, 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#我们先集中精力寻找牛鬼吧。希望我们回收五行后，牛鬼能清醒过来。", 37, 9111012, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("我也帮忙一起找牛鬼。继续深入的话应该能找到他。", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else if (status === V++) {
                                                                cm.warp(800021106, 0, true);
                                                                cm.npc_LeaveField("oid=3570560");
                                                                cm.npc_LeaveField("oid=3570560");
                                                                cm.npc_LeaveField("oid=3570561");
                                                                cm.npc_LeaveField("oid=3570561");
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