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
      cm.npc_ChangeController(3001680, 'oid=375404', 265, 135, 1, 215, 315, 1, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375405", 339, 135, 1, 289, 389, 1, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375406", 465, 135, 1, 415, 515, 1, false, 0, false);
      cm.npc_ChangeController(3001680, "oid=375407", 518, 61, 5, 468, 568, 1, false, 0, false);
      cm.npc_ChangeController(3001680, "oid=375408", 582, 61, 5, 532, 632, 1, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375409", 660, 61, 5, 610, 710, 1, false, 0, false);
      cm.npc_ChangeController(3001680, "oid=375410", -341, 135, 1, -391, -291, 0, false, 0, false);
      cm.npc_ChangeController(3001680, "oid=375411", -442, 135, 1, -492, -392, 0, false, 0, false);
      cm.npc_ChangeController(3001681, 'oid=375412', -265, 135, 1, -315, -215, 0, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375413", -639, 61, 2, -689, -589, 0, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375414", -572, 61, 2, -622, -522, 0, false, 0, false);
      cm.npc_ChangeController(3001680, 'oid=375415', -512, 61, 2, -562, -462, 0, false, 0, false);
      cm.npc_ChangeController(3001681, 'oid=375416', -348, 35, 3, -398, -298, 0, false, 0, false);
      cm.npc_ChangeController(3001680, "oid=375417", 289, 35, 3, 239, 339, 1, false, 0, false);
      cm.npc_ChangeController(3001680, "oid=375418", -276, 35, 3, -326, -226, 0, false, 0, false);
      cm.npc_ChangeController(3001681, "oid=375419", 363, 35, 3, 313, 413, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.npc_ChangeController(3001665, "oid=3023541", 95, 23, 3, 45, 145, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3023541", "summon", 0, 0);
      cm.emotion(1, 999999);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_OneTimeAction(25, 999999);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.fieldEffect_ProcessOnOffLayer('03', "Effect/Direction9.img/HoyoungStory/3", 0, 1000, 0, -80, 1, 4, 0, -1, 0, 0, 0);
          cm.sendNormalTalk_Bottom("#face2#哎……哈……好吧……我输了，\r\n我举双手双脚认输……所以这次就放过我，好不好？", 37, 3001674 + cm.getPlayer().getGender(), false, true);
          cm.effect_Voice("Voice5.img/hoyoung/K-2/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/1', 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face1#这是要乖乖认输啊，不过第二次我可不会心慈手软，\r\n既然你这张嘴这么厉害，就去阴曹地府说去吧。", 37, 3001665, true, true);
            cm.effect_Voice("Voice5.img/hoyoung/K-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/2', 100);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('#face2#哈！', 37, 3001665, false, true);
                cm.effect_Voice("Voice5.img/hoyoung/K-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face4#唔！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                  cm.effect_Voice("Voice5.img/hoyoung/K-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#……", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                      cm.effect_Voice("Voice5.img/hoyoung/K-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_Hero9(0, 1000);
                        cm.inGameDirectionEvent_AskAnswerTime(1300);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                          cm.fieldEffect_Hero9(100, 500);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/Dong", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(800);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayBGM("Bgm53/RidingOnTheClouds", 0, 0);
                              cm.sendNormalTalk_Bottom("#face12#嘻嘻……", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                              cm.effect_Voice("Voice5.img/hoyoung/K-2/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/6', 100);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_复合图片动画(["Effect/Direction9.img/HoyoungEffect/7/smoke", 'smoke_a', '', '00'], [0, 0, 0, 0, 0, 0, 0, 1]);
                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/H_boom", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_取消复合图片动画('00', 0, 0);
                                  cm.fieldEffect_复合图片动画(["Effect/Direction9.img/HoyoungEffect/7/smoke", "smoke_b", '', '01'], [0, 0, 0, 0, 0, 0, 0, 1]);
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/H_boom", 100);
                                  cm.fieldEffect_ProcessOnOffLayer('04', "Effect/Direction9.img/HoyoungStory/4", 0, 500, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face11#到底是往哪儿攻击……", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                    cm.effect_Voice("Voice5.img/hoyoung/K-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/7', 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face4#那是我的残像……你个蠢货！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                      cm.effect_Voice("Voice5.img/hoyoung/K-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/8', 100);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer('03', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/urus/softHit", 100);
                                          cm.fieldEffect_ProcessOnOffLayer('05', "Effect/Direction9.img/HoyoungStory/5", 0, 500, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom('#face4#咳……', 37, 3001665, false, true);
                                            cm.effect_Voice("Voice5.img/hoyoung/K-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/9', 100);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ProcessOnOffLayer('04', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face4#你，你竟然如此卑鄙……狡猾如狐！", 37, 3001665, false, true);
                                                cm.effect_Voice("Voice5.img/hoyoung/K-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/10', 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face5#还能用什么方法获胜！？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                  cm.effect_Voice("Voice5.img/hoyoung/K-2/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/11', 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_ProcessOnOffLayer('05', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      cm.effect_Voice("Voice5.img/hoyoung/K-4/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/14', 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#不可以，我俊秀的面庞！", 37, 3001666, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                } else if (status === V++) {
                                                                  cm.npc_LeaveField("oid=3023541");
                                                                  cm.npc_LeaveField("oid=3023541");
                                                                  cm.dispose();
                                                                  cm.warp(993160118, 0, false);
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}