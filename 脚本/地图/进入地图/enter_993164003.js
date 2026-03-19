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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -1782, -38);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(3004905, "oid=561065", 181, 53, 3, 131, 231, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=561065', 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=561065", 'chart', -1, 1);
      cm.fieldEffect_Hero9(0, 1500);
      cm.inGameDirectionEvent_AskAnswerTime(2500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
        cm.effect_Text(["#fn黑体##fs18#一年后……", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(5500);
      } else {
        if (status === V++) {
          cm.onTeleport(0, 3, cm.getPlayer().getId(), -35, 17);
          cm.inGameDirectionEvent_OneTimeAction(29, 999999);
          cm.sendNormalTalk_Bottom("#face0#身体状况怎么样了？", 36, 3004905, false, true, 1);
          cm.effect_Voice("Voice6.img/kain/4/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#没问题。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
              cm.effect_Voice("Voice6.img/kain/4/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/2', 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#如果要从0到10里挑一个数字来表示身体状况，大概是几？", 36, 3004905, true, true, 1);
                cm.effect_Voice("Voice6.img/kain/4/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#7，不对，差不多有……8吗？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                  cm.effect_Voice("Voice6.img/kain/4/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#有哪里觉得痛吗？", 36, 3004905, true, true, 1);
                    cm.effect_Voice("Voice6.img/kain/4/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#不。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                      cm.effect_Voice("Voice6.img/kain/4/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/6', 100);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/pen", 100);
                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 100, -8);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#工作怎么样？", 36, 3004905, false, true, 1);
                                  cm.effect_Voice("Voice6.img/kain/4/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#这个嘛……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                    cm.effect_Voice("Voice6.img/kain/4/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/10', 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#肯定说不上快乐，\r\n毕竟当初的我也不是出于喜欢才开始这件事的。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                      cm.effect_Voice("Voice6.img/kain/4/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/11", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#但倒也不至于干不下去，有时候反而……还挺享受的。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                        cm.effect_Voice("Voice6.img/kain/4/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/12", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#等到尘埃落定，回家之时……\r\n就当现在的一切是为了那一刻的忍耐吧。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                          cm.effect_Voice("Voice6.img/kain/4/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/13", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#这样啊。", 36, 3004905, true, true, 1);
                                            cm.effect_Voice("Voice6.img/kain/4/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/14", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#你的记忆怎么样了？你现在还会时不时想起那些记忆吗？", 36, 3004905, true, true, 1);
                                              cm.effect_Voice("Voice6.img/kain/4/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/15", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1700);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(3300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face4#……嗯，偶尔。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                                                      cm.effect_Voice("Voice6.img/kain/4/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/16", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ReverseCity/warn2", 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#有人呼叫，\r\n该隐，好像是在找你，今天就到这里吧。", 36, 3004905, false, true, 1);
                                                            cm.effect_Voice("Voice6.img/kain/4/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + "/17", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#该隐。", 36, 3004905, false, true, 1);
                                                                    cm.effect_Voice("Voice6.img/kain/4/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/18", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#会留下短暂的#b记忆残骸#k是其他队员身上也常见的一种现象。", 36, 3004905, true, true, 1);
                                                                      cm.effect_Voice("Voice6.img/kain/4/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/19', 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#这部分毕竟可以让工作更有动力，公司方面也不会揪着这个问题不放的，\r\n不必担心。", 36, 3004905, true, true, 1);
                                                                        cm.effect_Voice("Voice6.img/kain/4/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/20", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#太好了。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                                                          cm.effect_Voice("Voice6.img/kain/4/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/21", 100);
                                                                        } else if (status === V++) {
                                                                          cm.npc_LeaveField("oid=561065");
                                                                          cm.dispose();
                                                                          cm.warp(410000401, 0, true);
                                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                          cm.setStandAloneMode(false);
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}