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
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2500, 0, 490, 20);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 510, -20);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.npc_ChangeController(3005102, "oid=620119", 445, -5, 34, 395, 495, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=620119", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/Lara/illust/5", 'cc'], [1, 0, 0, 0, 3500, -1, 0, 0, -1]);
          cm.inGameDirectionEvent_AskAnswerTime(5000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#什……什么嘛！", 37, 3005102, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#……", 37, 3005119, true, true, 1);
            } else {
              if (status === V++) {
                cm.effect_Voice("Voice6.img/lara/15/Female/26", 100);
                cm.sendNormalTalk_Bottom("#face2#这些小家伙……原来是小炎灵啊！", 37, 3005100, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#看来是跟随照进缝隙里的阳光而来的。", 37, 3005100, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#这本书是要给我的吗？", 37, 3005100, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#……", 37, 3005119, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.effect_Voice("Voice6.img/lara/15/Female/27", 100);
                        cm.sendNormalTalk_Bottom("#face0#这个元素灵怎么会如此友好地靠过来？", 37, 3005102, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face6#阳光总是温暖的嘛。", 37, 3005100, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(3005119, "oid=620125", 594, -73, 37, 544, 644, 1, true, 0, false);
                            cm.npc_SetSpecialAction('oid=620125', "summon", 0, 0);
                            cm.fieldEffect_屏幕渐入插图消失A(['00'], [1500]);
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
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
                                  cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（不过既然不像小山灵一样能感受到温暖的气息，\r\n恐怕和其他小家伙相处还需要一点时间吧。）", 37, 3005100, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#让我瞧瞧，书名叫……《器物的历史》呢。", 37, 3005100, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#唔……所谓的器物是指什么呢？", 37, 3005100, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face7#那就不关我的事了！\r\n这可是个好不容易能免费获得贵重物品的机会，居然拿了这么一本旧书……", 37, 3005102, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_Monologue("……的影响之下，世界上留下了无数#r器物#k。", 0);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue("他们的长相各不相同，普通人是难以分辨的，\r\n他们的诞生也与我们的意志无关。", 0);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("从这个角度来说，铃铛有别于其他器物，\r\n因为它在制作之初承载了我们的意志和目的，这么做的原因是……", 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#虽说铃铛也是#r器物#k的一部分，可它又与#r器物#k不同。", 37, 3005100, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#从中间开始就被撕掉了，倒是有人留下了一些文字，让我瞧瞧……", 37, 3005100, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                                                        cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#哈哈，对不起，剩下的书页我就先借走了！\r\n我是后巷秘密商人这件事可是商业机密哦！", 37, 3005107, false, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas11(0, 0, 0, 0, 0, 0);
                                                            cm.fieldEffect_InsertCanvas(1, 1, 255, 255, 255, 200, 0);
                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face7#那个家伙……", 37, 3005102, false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face4##fc0xFFbfbfbf#（要是有机会去后巷一趟，要问问剩下那些书页的去向。）", 37, 3005100, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face1#嗯……所以到底为什么要制作铃铛呢？", 37, 3005100, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#你最该好奇的应该是其他问题吧？", 37, 3005102, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#就是制造这个铃铛的到底是什么人。", 37, 3005102, true, true, 1);
                                                                    } else if (status === V++) {
                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                      cm.setStandAloneMode(false);
                                                                      cm.forceCompleteQuest(36216);
                                                                      cm.gainExp(6119);
                                                                      cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h0;53=h1;55=h0;57=h0;76=h0;59=h0;77=h0;78=h0;set=1");
                                                                      cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h0;52=h1;53=h1;55=h0;57=h0;76=h0;59=h0;77=h0;78=h0;set=1");
                                                                      cm.npc_LeaveField("oid=620119");
                                                                      cm.npc_LeaveField("oid=620125");
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