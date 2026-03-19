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
      cm.npc_ChangeController(3004411, "oid=374262", -1, -147, 0, -51, 49, 1, false, 0, false);
      cm.fieldEffect_PlayBGM("Bgm53/SanctuaryOfMitra", 0, 0);
      cm.npc_ChangeController(3004431, 'oid=770669', -520, -50, 12, -570, -470, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=770669", 'summon', 0, 0);
      cm.npc_ChangeController(3004433, "oid=770670", -590, -50, 17, -640, -540, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=770670", "summon", 0, 0);
      cm.npc_ChangeController(3004430, "oid=770671", -50, -70, 24, -100, 0, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=770671", "special11", -1, 1);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -448, -50);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 0, -85);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1500);
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
              cm.sendNormalTalk_Bottom("#face0#面对任何境遇也绝不心生猜疑。", 37, 3004430, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#面临任何诱惑都能够安分守己。", 37, 3004430, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#身为光荣的圣骑士，我再次起誓，将永远效忠于您。", 37, 3004430, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, -428, -60);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#天族的羽毛？而且不是塞伦掉的？", 37, 3004431, false, true);
                          cm.effect_Voice("Voice5.img/CH2/Idea/92", 128);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#就在预言所述的时刻，真的有天族如期出现了吗……", 37, 3004433, true, true);
                            cm.effect_Voice("Voice5.img/CH2/Carlyle/66", 128);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#可如果是这样，为什么守备队没有发现他的存在？\r\n他通过城门的时候应该有受到盘查啊？", 37, 3004431, true, true);
                              cm.effect_Voice("Voice5.img/CH2/Idea/93", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#是啊……也许有什么隐情吧。", 37, 3004433, true, true);
                                cm.effect_Voice("Voice5.img/CH2/Carlyle/67", 128);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#嗯……这事很可疑。", 37, 3004431, true, true);
                                  cm.effect_Voice("Voice5.img/CH2/Idea/94", 128);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#与其让一个不知是敌是友的陌生人成为剑的主人，我更支持让那个脾气古怪、又挑剔的剑之守护者成为剑的主人。", 37, 3004431, true, true);
                                    cm.effect_Voice("Voice5.img/CH2/Idea/95", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#啊……哈，你还真是直言不讳。", 37, 3004433, true, true);
                                      cm.effect_Voice("Voice5.img/CH2/Carlyle/68", 128);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#难道不是吗。她被任命为剑之守护者，就说明已获得教团的认可。这也省得引起无谓的纠纷。", 37, 3004431, true, true);
                                        cm.effect_Voice("Voice5.img/CH2/Idea/96", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#两者不是一回事……", 37, 3004433, true, true);
                                          cm.effect_Voice("Voice5.img/CH2/Carlyle/69", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom('？', 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#成为圣剑的主人，意味着是太阳神密特拉亲自选中的人。", 37, 3004433, true, true);
                                              cm.effect_Voice("Voice5.img/CH2/Carlyle/70", 128);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#此人将拥有超越大神官之上的影响力。", 37, 3004433, true, true);
                                                cm.effect_Voice("Voice5.img/CH2/Carlyle/71", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#这样的人如果和教团关系不好，教团方面是很为难的。\r\n而塞伦正是这种情况。", 37, 3004433, true, true);
                                                  cm.effect_Voice("Voice5.img/CH2/Carlyle/72", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("既然如此，她被任命为剑之守护者……", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#是因为她不可能成为剑的主人……对吧？", 37, 3004431, true, true);
                                                      cm.effect_Voice("Voice5.img/CH2/Idea/97", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#没错。不愧是伊黛娜，一点就通。", 37, 3004433, true, true);
                                                        cm.effect_Voice("Voice5.img/CH2/Carlyle/74", 128);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#她也知道这个事实吗？", 37, 3004431, false, true);
                                                            cm.effect_Voice("Voice5.img/CH2/Idea/98", 128);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#大家都心知肚明。只是没有说出来罢了。", 37, 3004433, true, true);
                                                              cm.effect_Voice("Voice5.img/CH2/Carlyle/75", 128);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#明知知道，还顺从地……", 37, 3004431, true, true);
                                                                cm.effect_Voice("Voice5.img/CH2/Idea/99", 128);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#……", 37, 3004431, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#看来你对她很不满意啊。", 37, 3004433, true, true);
                                                                      cm.effect_Voice("Voice5.img/CH2/Carlyle/76", 128);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#是的，非常不满意。", 37, 3004431, true, true);
                                                                        cm.effect_Voice("Voice5.img/CH2/Idea/100", 128);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else if (status === V++) {
                                                                          cm.eventSKill(0);
                                                                          cm.warp(410000670, 1, false);
                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                          cm.setStandAloneMode(false);
                                                                          cm.updateInfoQuest(39800, "01=h0;10=h0;11=h1;02=h0;12=h1;04=h0;13=h1;05=h1;14=h1;06=h1;15=h1;07=h1;08=h1;09=h0");
                                                                          cm.updateInfoQuest(39814, "dir=1");
                                                                          cm.npc_LeaveField("oid=770669");
                                                                          cm.npc_LeaveField('oid=770669');
                                                                          cm.npc_LeaveField("oid=770670");
                                                                          cm.npc_LeaveField("oid=770670");
                                                                          cm.npc_LeaveField("oid=770671");
                                                                          cm.npc_LeaveField("oid=770671");
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