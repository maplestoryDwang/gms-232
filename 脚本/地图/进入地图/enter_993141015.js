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
      cm.npc_ChangeController(3004432, "oid=773898", 110, -50, 41, 60, 160, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=773898', "summon", 0, 0);
      cm.npc_ChangeController(3004430, 'oid=773899', -50, -50, 41, -100, 0, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=773899", 'summon', 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -200, -50);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 30, 8);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face4#！！", 37, 3004430, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face4#罗兰德……", 37, 3004430, true, true);
          cm.effect_Voice("Voice5.img/CH2/Seren/49", 128);
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
                cm.fieldEffect_PlayBGM("Bgm53/GraveyardOfSword", 0, 0);
                cm.npc_setForceFlip("oid=773898", -1);
                cm.inGameDirectionEvent_AskAnswerTime(700);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face4#这坟盖得真不错。我很满意。", 37, 3004432, false, true);
                  cm.effect_Voice("Voice5.img/CH2/Loland/1", 128);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#我没想到你还活着。", 37, 3004430, true, true);
                    cm.effect_Voice("Voice5.img/CH2/Seren/50", 128);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face3#我逃跑了。我不想死。", 37, 3004432, true, true);
                      cm.effect_Voice("Voice5.img/CH2/Loland/2", 128);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#……", 37, 3004430, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#你之前一直呆在哪里？", 37, 3004430, true, true);
                          cm.effect_Voice("Voice5.img/CH2/Seren/51", 128);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#四处流浪呗……故乡、家人和朋友全都没了，我能去哪儿。", 37, 3004432, true, true);
                            cm.effect_Voice("Voice5.img/CH2/Loland/3", 128);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face3#我在旅途中听说了你的消息。\r\n守护圣剑之人——守护者塞伦。", 37, 3004432, true, true);
                              cm.effect_Voice("Voice5.img/CH2/Loland/4", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3#这让我忽然想起了圣剑上刻的那句话。", 37, 3004432, true, true);
                                cm.effect_Voice("Voice5.img/CH2/Loland/5", 128);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face3#“握紧圣剑吧。拯救之法就在帕尔玛。”", 37, 3004432, true, true);
                                  cm.effect_Voice("Voice5.img/CH2/Loland/6", 128);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face4#据说帕尔玛的意思是塞尔提乌……\r\n塞伦，你找到拯救之法了吗？", 37, 3004432, true, true);
                                    cm.effect_Voice("Voice5.img/CH2/Loland/7", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face4#……", 37, 3004430, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('#face5#我……', 37, 3004430, true, true);
                                        cm.effect_Voice("Voice5.img/CH2/Seren/52", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face4#你还是那么不会撒谎啊。", 37, 3004432, false, true);
                                            cm.effect_Voice("Voice5.img/CH2/Loland/8", 128);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("好像有些奇怪。", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("（塞伦，你看看周围。）", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face4#！！", 37, 3004430, true, true);
                                                  cm.effect_Voice("Voice5.img/CH2/Seren/53", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayBGM("SoundEff.img/ArcaneRiver/thrill", 0, 0);
                                                    cm.npc_ChangeController(3004460, "oid=774281", -350, -50, 41, -400, -300, 0, true, 1000, false);
                                                    cm.npc_SetSpecialAction("oid=774281", "summon", 0, 0);
                                                    cm.npc_ChangeController(3004460, "oid=774282", -410, -50, 41, -460, -360, 0, true, 1000, false);
                                                    cm.npc_SetSpecialAction("oid=774282", "summon", 0, 0);
                                                    cm.npc_ChangeController(3004461, "oid=774283", -470, -50, 41, -520, -420, 0, false, 1000, false);
                                                    cm.npc_SetSpecialAction("oid=774283", "summon", 0, 0);
                                                    cm.npc_ChangeController(3004461, 'oid=774284', -530, -50, 41, -580, -480, 0, false, 1000, false);
                                                    cm.npc_SetSpecialAction('oid=774284', "summon", 0, 0);
                                                    cm.npc_ChangeController(3004460, "oid=774285", 200, -50, 41, 150, 250, 1, true, 1000, false);
                                                    cm.npc_SetSpecialAction("oid=774285", 'summon', 0, 0);
                                                    cm.npc_ChangeController(3004460, "oid=774286", 260, -50, 41, 210, 310, 1, true, 1000, false);
                                                    cm.npc_SetSpecialAction('oid=774286', "summon", 0, 0);
                                                    cm.npc_ChangeController(3004461, 'oid=774287', 320, -50, 41, 270, 370, 1, false, 1000, false);
                                                    cm.npc_SetSpecialAction("oid=774287", 'summon', 0, 0);
                                                    cm.npc_ChangeController(3004461, 'oid=774288', 380, -50, 41, 330, 430, 1, false, 1000, false);
                                                    cm.npc_SetSpecialAction("oid=774288", "summon", 0, 0);
                                                    cm.sendNormalTalk_Bottom("#face2#罗兰德？", 37, 3004430, true, true);
                                                    cm.effect_Voice("Voice5.img/CH2/Seren/54", 128);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face3#管它什么圣剑，什么神……我全都受够了。", 37, 3004432, true, true);
                                                      cm.effect_Voice("Voice5.img/CH2/Loland/9", 128);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face2#这是怎么回事？你为什么？！", 37, 3004430, true, true);
                                                        cm.effect_Voice("Voice5.img/CH2/Seren/55", 128);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face3#我才想问你呢。\r\n你看着那些为一把毫无用处的废铁死去的同僚，就没有什么领悟吗？", 37, 3004432, true, true);
                                                          cm.effect_Voice("Voice5.img/CH2/Loland/10", 128);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face2#嗬！", 37, 3004430, true, true);
                                                            cm.effect_Voice("Voice5.img/CH2/Seren/56", 128);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face3#塞伦，从今往后，我会向所有人证明，他们的信仰是多么虚无的东西。", 37, 3004432, true, true);
                                                              cm.effect_Voice("Voice5.img/CH2/Loland/11", 128);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#如果不能摆脱神的束缚，当年的惨剧就会一再重演。", 37, 3004432, true, true);
                                                                cm.effect_Voice("Voice5.img/CH2/Loland/12", 128);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.eventSKill(0);
                                                                    cm.dispose();
                                                                    var O = cm.getEventManager("荣耀_塞尔提乌_剑之坟墓");
                                                                    O.startInstance(cm.getPlayer());
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.setStandAloneMode(false);
                                                                    cm.npc_LeaveField("oid=773898");
                                                                    cm.npc_LeaveField("oid=773898");
                                                                    cm.npc_LeaveField("oid=773899");
                                                                    cm.npc_LeaveField("oid=773899");
                                                                    cm.npc_LeaveField("oid=774281");
                                                                    cm.npc_LeaveField('oid=774281');
                                                                    cm.npc_LeaveField('oid=774282');
                                                                    cm.npc_LeaveField("oid=774282");
                                                                    cm.npc_LeaveField("oid=774283");
                                                                    cm.npc_LeaveField("oid=774283");
                                                                    cm.npc_LeaveField("oid=774284");
                                                                    cm.npc_LeaveField("oid=774284");
                                                                    cm.npc_LeaveField("oid=774285");
                                                                    cm.npc_LeaveField("oid=774285");
                                                                    cm.npc_LeaveField("oid=774286");
                                                                    cm.npc_LeaveField("oid=774286");
                                                                    cm.npc_LeaveField("oid=774287");
                                                                    cm.npc_LeaveField("oid=774287");
                                                                    cm.npc_LeaveField('oid=774288');
                                                                    cm.npc_LeaveField("oid=774288");
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}