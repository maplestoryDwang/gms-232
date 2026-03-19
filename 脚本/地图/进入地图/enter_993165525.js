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
      cm.Hidden_background("box", 1, 0, 0, 0);
      cm.npc_ChangeController(3005103, "oid=623067", 100, 200, 2, 50, 150, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=623067", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 35, 260);
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
            cm.effect_Voice("Voice6.img/lara/11/Female/0", 100);
            cm.sendNormalTalk_Bottom("#face5#是真的……我没办法像从前那样操控元素灵……", 37, 3005100, false, true, 1);
          } else {
            if (status === V++) {
              cm.effect_Voice("Voice6.img/lara/11/Female/1", 100);
              cm.sendNormalTalk_Bottom("#face0#内心崩溃了啊。", 37, 3005103, true, true, 1);
            } else {
              if (status === V++) {
                cm.effect_Voice("Voice6.img/lara/11/Female/2", 100);
                cm.sendNormalTalk_Bottom("#face0#就在猜疑扒开破碎的心，进入其中的那一刻……", 37, 3005103, true, true, 1);
              } else {
                if (status === V++) {
                  cm.effect_Voice("Voice6.img/lara/11/Female/3", 100);
                  cm.sendNormalTalk_Bottom("#face0#毕竟你已经不再像从前那样可以操控元素灵了。", 37, 3005103, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.effect_Voice("Voice6.img/lara/11/Female/4", 100);
                    cm.sendNormalTalk_Bottom("#face5#你说元素灵会跟着我，是和我的心意有关？", 37, 3005100, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.effect_Voice("Voice6.img/lara/11/Female/5", 100);
                      cm.sendNormalTalk_Bottom("#face0#因为元素灵本就是大自然的一部分，它们会本能地追逐那些心灵透亮纯净的人。", 37, 3005103, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.effect_Voice("Voice6.img/lara/11/Female/6", 100);
                        cm.sendNormalTalk_Bottom("#face0#可一旦内心被污染，就会变得徒劳无益，这能力多虚无啊。", 37, 3005103, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.effect_Voice("Voice6.img/lara/11/Female/7", 100);
                          cm.sendNormalTalk_Bottom("#face5#赶走领主也是你有意为之的吗？", 37, 3005100, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.effect_Voice("Voice6.img/lara/11/Female/8", 100);
                            cm.sendNormalTalk_Bottom("#face0#我很感激你帮忙赶走了领主。", 37, 3005103, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.effect_Voice("Voice6.img/lara/11/Female/9", 100);
                              cm.sendNormalTalk_Bottom("#face0#我正因为要求越来越无理，开始觉得厌烦了呢。", 37, 3005103, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.effect_Voice("Voice6.img/lara/11/Female/10", 100);
                                cm.sendNormalTalk_Bottom("#face0#就是有点可惜了，\r\n想要再拉到那种财力的资助可不容易。", 37, 3005103, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.effect_Voice("Voice6.img/lara/11/Female/11", 100);
                                  cm.sendNormalTalk_Bottom("#face5#……这样啊。", 37, 3005100, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.effect_Voice("Voice6.img/lara/11/Female/12", 100);
                                    cm.sendNormalTalk_Bottom("#face5#让我烧掉器物，也是离间我和格里的计划。", 37, 3005100, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.effect_Voice("Voice6.img/lara/11/Female/13", 100);
                                      cm.sendNormalTalk_Bottom("#face2#呵呵，器物，绝对没办法用一般的方法摧毁。", 37, 3005103, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.effect_Voice("Voice6.img/lara/11/Female/14", 100);
                                        cm.sendNormalTalk_Bottom("#face3#你该不会以为器物是被火烧着就能随随便便消失的东西吧？", 37, 3005103, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_屏幕渐入插图A(['01', "Effect/Direction26.img/Lara/illust/9", 'cc'], [1, 0, 0, 0, 1000, -1, 0, 0, -1]);
                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act4/evilS", 100);
                                              cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/Lara/illust/8", 'cc'], [1, 0, 0, 0, 1000, -1, 0, 0, -1]);
                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                            } else {
                                              if (status === V++) {
                                                cm.effect_Voice("Voice6.img/lara/11/Female/15", 100);
                                                cm.sendNormalTalk_Bottom("#face0#……！毛笔……", 37, 3005100, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.effect_Voice("Voice6.img/lara/11/Female/16", 100);
                                                  cm.sendNormalTalk_Bottom("#face0#你说过的吧？从未见过像我的画这般栩栩如生的美丽画作。", 37, 3005103, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.effect_Voice("Voice6.img/lara/11/Female/17", 100);
                                                    cm.sendNormalTalk_Bottom("#face0#只能这样了。", 37, 3005103, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.effect_Voice("Voice6.img/lara/11/Female/18", 100);
                                                      cm.sendNormalTalk_Bottom("#face3#我要用这支毛笔剜去人们的幸福记忆，将它们放在画里。", 37, 3005103, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.effect_Voice("Voice6.img/lara/11/Female/19", 100);
                                                        cm.sendNormalTalk_Bottom("#face4#我的作品就是美丽本身。", 37, 3005103, true, true, 1);
                                                      } else if (status === V++) {
                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.setStandAloneMode(false);
                                                        cm.npc_LeaveField("oid=623067");
                                                        cm.dispose();
                                                        cm.warp(993165526, 0, true);
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}