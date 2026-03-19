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
      cm.forceCompleteQuest(58728);
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
      cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
      cm.updateInfoQuest(58711, "10=4;0=1;1=3;2=4;3=4;4=4;5=4;6=4;7=4;8=4;9=4");
      cm.updateInfoQuest(58712, "0=1");
      cm.updateInfoQuest(58712, "0=1;1=1");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(9111001, "oid=3540565", 805, -30, 21, 755, 855, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=3540565", "summon", 0, 0);
          cm.sendNormalTalk_Bottom("你……！", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3540565"], [0, 0, 0, 1, 0, 1, 0, 0]);
            cm.sendNormalTalk_Bottom("#face0#……吓到你了吗……？不好意思，我该事先说明一下的。", 37, 9111001, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("没，没有，太壮观了，超赞！", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3540565"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.sendNormalTalk_Bottom("#face0#壮，壮观……？", 37, 9111001, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("啊，看来是我没说清楚……", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 0, 0, 0]);
                    cm.sendNormalTalk_Bottom("嗯……怎么说呢，刚才的场景非常美丽……又令人十分感动……？", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#唔……你是在夸我吧……？\r\n嘿嘿，谢谢你", 37, 9111001, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("嗯！应该说是非常了不起的光景……太惊人了！", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#哎呀，没什么了不起的……！！\r\n我只是用妖力祭奠了一下那些怨灵而已……", 37, 9111001, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                            cm.sendNormalTalk_Bottom("妖力？#p9111001#你是妖怪？", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#是的。准确地说，我是半妖。我跟姐姐不一样，我体内有妖怪的血。", 37, 9111001, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#不过，因为我不是完全的妖怪，所以平时我只能待在家里……\r\n多亏了你，我才能像这样和其他妖怪交流，也能小试身手。", 37, 9111001, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("……巫女居然有个半人半妖的妹妹，真令人感到意外。", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#……话说回来，我没其他妖怪那么吓人吧？", 37, 9111001, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('嗯，一点不吓人……', 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#那就好。尽管人类和妖怪之间积怨越来越深，已经难以挽回……\r\n但我相信肯定有什么事情是人类和妖怪可以一起做的。", 37, 9111001, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#……就像#h0#你跟我一起举行荐度斋这样。", 37, 9111001, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.askMenu_Bottom("#face0#你不介意的话，下次也能帮帮我吗……？\r\n#L0# #b我很乐意帮忙！#l#k\r\n#L1# #b虽然我不是很情愿……但希望能帮到你。#l#k", 37, 9111001);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=3540565"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.sendNormalTalk_Bottom("#face1#你真是个好人。谢谢你。", 37, 9111001, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/relGet", "oid=3540565"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#这是我给你的礼物。", 37, 9111001, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                    cm.playerMessage(-1, "获得了缘分线团！");
                                                    cm.sendNormalTalk_Bottom("#face1#这是爸爸给我的东西……但我觉得#h0#你比我更需要它。请别推辞，收下吧。", 37, 9111001, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.askMenu_Bottom("\r\n#L0#听取竹野子对缘分线团的介绍。#l\r\n#L1#我已经知道了，不用听了。#l", 56, 0);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#这个线团可以让你看见樱之岛这片土地上的姻缘。", 37, 9111001, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#先看看我跟你的缘分吧。", 37, 9111001, true, true);
                                                          cm.effect_REPEAT("Map/Effect2.img/JPzipang/tuto0", 1, 1, 1, 0, -80);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#点击我的脸，你就能看见你跟我的亲密度。", 37, 9111001, true, true);
                                                            cm.effect_REPEAT("Map/Effect2.img/JPzipang/tuto0", 1, 0, 0, 0, 0);
                                                            cm.effect_REPEAT("Map/Effect2.img/JPzipang/tuto1", 1, 1, 1, 0, -80);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#你每隔一个小时可以跟我对话一次，礼物是每天只能赠送一次哦。", 37, 9111001, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#有事拜托我，或者想召唤我的话，必须先跟我变得更亲密些才行。", 37, 9111001, true, true);
                                                                cm.effect_REPEAT("Map/Effect2.img/JPzipang/tuto1", 1, 0, 0, 0, 0);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#通过画面右侧的樱之岛提示栏，可以随时查看缘分线团。", 37, 9111001, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0# 勇士，希望你能好好珍惜我们之间的缘分哦。", 37, 9111001, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.updateInfoQuest(58717, 'ok=1');
                                                                      cm.sendNormalTalk_Bottom("……谢谢你。", 57, 0, true, true);
                                                                      cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else if (status === V++) {
                                                                        cm.npc_LeaveField("oid=3540565");
                                                                        cm.npc_LeaveField("oid=3540565");
                                                                        cm.eventSKill(0);
                                                                        cm.dispose();
                                                                        cm.warp(800020014, 0, false);
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}