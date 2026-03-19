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
      cm.forceCompleteQuest(58768);
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
      cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
      cm.updateInfoQuest(58711, "10=4;11=3;0=2;1=3;2=3;3=3;4=1;5=2;6=3;7=1;8=1;9=4");
      cm.updateInfoQuest(58711, "10=4;11=3;0=2;1=3;2=3;3=3;4=1;5=2;6=3;7=2;8=1;9=4");
      cm.forceStartQuest(58706, "appear");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111007, "oid=3877845", 730, -40, 10, 680, 780, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3877845", "summon", 0, 0);
      cm.npc_ChangeController(9111002, "oid=3877846", 590, -40, 17, 540, 640, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3877846", 'summon', 0, 0);
      cm.npc_ChangeController(9111013, "oid=3877847", 1090, -40, 4, 1040, 1140, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3877847", 'summon', 0, 0);
      cm.npc_ChangeController(9111005, "oid=3877848", 510, -40, 18, 460, 560, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=3877848", "summon", 0, 0);
      cm.npc_ChangeController(9111006, "oid=3877849", 985, -40, 5, 935, 1035, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3877849", 'summon', 0, 0);
      cm.sendNormalTalk_Bottom("#face0#……咳，好久没解开封印，身子有点吃不消啊。", 37, 9111013, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("呃呃呃……", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#咳呃……", 37, 9111006, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#好像成功了！！", 37, 9111007, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0##h0#，鵺，你们俩真厉害！", 37, 9111006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#……呵！本大人可是宇宙第一！", 37, 9111013, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#……谢谢你们。", 37, 9111006, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#……你不要被心中的恐惧吓倒。", 37, 9111013, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#无论是一瞬间的诅咒，还是恐惧，都无法伤害到你。一切都是你自己造出来的假象罢了……", 37, 9111013, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#恐惧会使你成长，但如果你为之屈服，你就会被恐惧吞噬。", 37, 9111013, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade"], [0, 0, 0, 1, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=3877846"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=3877848"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.sendNormalTalk_Bottom("#face0#真的非常感谢……！", 37, 9111006, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/relGet", "oid=3877849"], [0, 0, 0, 1, 0, 1, 0, 0]);
                            cm.sendNormalTalk_Bottom("#face0#……鵺大人好像变得有点不太一样了。", 37, 9111005, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#虽然我还是很讨厌你，不过#h0#，这次也有你的功劳。", 37, 9111005, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#……切！人家内心本来就是很成熟的。", 37, 9111013, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("……暗，鵺的情况跟你也差不多。", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0##h0#是鵺的导师啊！！！！", 37, 9111006, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#我相信……#h0#你一定会将五行用在正道上的。", 37, 9111006, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#请收下这地之五行……！", 37, 9111006, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("……嗯……！我一定会用它来做好事的，谢谢你。", 57, 0, true, true);
                                          cm.effect_OnUserEff("Effect/OnUserEff.img/JP_zipang/getLand");
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#嗯！", 37, 9111006, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#暗，暗！", 37, 9111007, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#……泉奈", 37, 9111006, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#暗，你真的暗恋我吗？", 37, 9111007, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=3877849"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                    cm.sendNormalTalk_Bottom("#face0#……呃，嗯……以，以前是……", 37, 9111006, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#什么意思~那现在呢？嗯？", 37, 9111007, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=3877849"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                        cm.sendNormalTalk_Bottom("#face0#……呃……嗯……", 37, 9111006, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#喔喔？告诉我，告诉我嘛~", 37, 9111007, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face1#嘿嘿……泉奈又可爱又漂亮……", 37, 9111006, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=3877845"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                              cm.sendNormalTalk_Bottom("#face1#……（扑通扑通）", 37, 9111007, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face1#……但是有暴力倾向，也很娇气……", 37, 9111006, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=3877845"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face2#……（啪啦）", 37, 9111007, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face1#怎么说呢……有时候比较过激，我有点怕你……", 37, 9111006, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3877845"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=3877845"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face2#……总之，你就是个胆小鬼！（心碎）", 37, 9111007, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face2#呃咿-！你们看，泉奈老是这么凶巴巴的！", 37, 9111006, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/JP_zipang/relBreak", "oid=3877845"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                cm.sendNormalTalk_Bottom("(……先，先回去找木野子吧。)", 57, 0, true, true);
                                                                              } else if (status === V++) {
                                                                                cm.eventSKill(0);
                                                                                cm.warp(800023022, 0, false);
                                                                                cm.npc_LeaveField("oid=3877845");
                                                                                cm.npc_LeaveField("oid=3877845");
                                                                                cm.npc_LeaveField("oid=3877846");
                                                                                cm.npc_LeaveField("oid=3877846");
                                                                                cm.npc_LeaveField("oid=3877847");
                                                                                cm.npc_LeaveField("oid=3877847");
                                                                                cm.npc_LeaveField("oid=3877848");
                                                                                cm.npc_LeaveField("oid=3877848");
                                                                                cm.npc_LeaveField("oid=3877849");
                                                                                cm.npc_LeaveField("oid=3877849");
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
}