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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 922, 292);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(3005115, "oid=619650", 655, 282, 60, 605, 705, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=619650', "summon", 0, 0);
      cm.npc_ChangeController(3005102, 'oid=619651', 759, 282, 60, 709, 809, 0, true, 0, false);
      cm.npc_SetSpecialAction('oid=619651', "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 823, 272);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.effect_Voice("Voice6.img/lara/4/Female/0", 100);
            cm.sendNormalTalk_Bottom("#face0#行了！现在可以爬到屋顶上去了。", 37, 3005100, false, true, 1);
          } else {
            if (status === V++) {
              cm.effect_Voice("Voice6.img/lara/4/Female/1", 100);
              cm.sendNormalTalk_Bottom("#face0#我这就上去把风筝拿下来！", 37, 3005100, true, true, 1);
            } else {
              if (status === V++) {
                cm.effect_Voice("Voice6.img/lara/4/Female/2", 100);
                cm.sendNormalTalk_Bottom("#face0#话说你爬过这么高的梯子吗？", 37, 3005102, true, true, 1);
              } else {
                if (status === V++) {
                  cm.effect_Voice("Voice6.img/lara/4/Female/3", 100);
                  cm.sendNormalTalk_Bottom("#face0#没，从没爬过，我们村的楼房都比较矮，根本不需要用梯子。", 37, 3005100, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.effect_Voice("Voice6.img/lara/4/Female/4", 100);
                    cm.sendNormalTalk_Bottom("#face0#那你还真是胆大包天直接往上爬，不害怕么？", 37, 3005102, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.effect_Voice("Voice6.img/lara/4/Female/5", 100);
                      cm.sendNormalTalk_Bottom("#face0#很久以前便经常听人这么说我呢。可如果我掉下去了……", 37, 3005100, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.effect_Voice("Voice6.img/lara/4/Female/6", 100);
                          cm.sendNormalTalk_Bottom("#face6#在下面的你应该会接住我的吧？", 37, 3005100, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.effect_Voice("Voice6.img/lara/4/Female/7", 100);
                            cm.sendNormalTalk_Bottom("#face0#……", 37, 3005102, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.effect_Voice("Voice6.img/lara/4/Female/8", 100);
                                cm.sendNormalTalk_Bottom("#face0#只要手……能再碰到一点……", 37, 3005100, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.effect_Voice("Voice6.img/lara/4/Female/9", 100);
                                  cm.sendNormalTalk_Bottom('#face1#啊！', 37, 3005100, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.effect_Voice("Voice6.img/lara/4/Female/10", 100);
                                    cm.sendNormalTalk_Bottom("#face1##fc0xFFbfbfbf#（脚下……踩空了……！）", 37, 3005100, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_Voice("Voice6.img/lara/4/Female/11", 100);
                                      cm.sendNormalTalk_Bottom('#face0#……！', 37, 3005102, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.effect_Voice("Voice6.img/lara/4/Female/12", 100);
                                        cm.sendNormalTalk_Bottom("#face0#喂……！", 37, 3005102, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.effect_Voice("Voice6.img/lara/4/Female/13", 100);
                                          cm.sendNormalTalk_Bottom("#face1#……哎哟？", 37, 3005100, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.effect_Voice("Voice6.img/lara/4/Female/23", 100);
                                            cm.sendNormalTalk_Bottom("#face0#……", 37, 3005118, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/wind", 100);
                                                cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/Lara/illust/4", 'cc'], [1, 0, 0, 0, 1500, -1, 0, 0, -1]);
                                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                                              } else {
                                                if (status === V++) {
                                                  cm.effect_Voice("Voice6.img/lara/4/Female/14", 100);
                                                  cm.sendNormalTalk_Bottom("#face0#是一群小风灵啊。", 37, 3005100, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.effect_Voice("Voice6.img/lara/4/Female/15", 100);
                                                    cm.sendNormalTalk_Bottom("#face0#啊……", 37, 3005102, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.effect_Voice("Voice6.img/lara/4/Female/16", 100);
                                                      cm.sendNormalTalk_Bottom("#face6#我还是头一次在这么高的地方飞！", 37, 3005100, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.effect_Voice("Voice6.img/lara/4/Female/17", 100);
                                                        cm.sendNormalTalk_Bottom("#face0#……如此荒谬的景象我也是第一次见。", 37, 3005102, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.Hidden_background("kite", 1, 0, 0, 0);
                                                          cm.fieldEffect_屏幕渐入插图消失A(['00'], [1000]);
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.effect_Voice("Voice6.img/lara/4/Female/18", 100);
                                                              cm.sendNormalTalk_Bottom("#face0#谢谢！我绝不会再弄丢风筝了！", 37, 3005115, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.effect_Voice("Voice6.img/lara/4/Female/19", 100);
                                                                cm.sendNormalTalk_Bottom("#face0#喂，小毛孩。", 37, 3005102, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.effect_Voice("Voice6.img/lara/4/Female/20", 100);
                                                                  cm.sendNormalTalk_Bottom("#face0#要想放得好风筝，就要等每次风吹起的时候，像这样将风筝线放开。", 37, 3005102, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.effect_Voice("Voice6.img/lara/4/Female/21", 100);
                                                                    cm.sendNormalTalk_Bottom("#face0#这，这样吗？", 37, 3005115, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.effect_Voice("Voice6.img/lara/4/Female/22", 100);
                                                                      cm.sendNormalTalk_Bottom("#face1#还看得过去。", 37, 3005102, true, true, 1);
                                                                    } else if (status === V++) {
                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                      cm.setStandAloneMode(false);
                                                                      cm.forceStartQuest(36209, '');
                                                                      cm.forceCompleteQuest(36209);
                                                                      cm.gainExp(2051);
                                                                      cm.updateInfoQuest(36200, "50=h0;51=h0;52=h1;53=h1;55=h0;76=h0;77=h0;78=h0;set=1");
                                                                      cm.Hidden_background("ladder", 1, 1, 0, 0);
                                                                      cm.npc_LeaveField("oid=619650");
                                                                      cm.npc_LeaveField("oid=619651");
                                                                      cm.dispose();
                                                                      cm.warp(410004000, 0, true);
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}