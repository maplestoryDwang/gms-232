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
      cm.npc_ChangeController(3001273, "oid=685144", -400, -11, 60, -450, -350, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=685144", "summon", 0, 0);
      cm.npc_ChangeController(3001261, "oid=685145", -340, -11, 60, -390, -290, 1, false, 0, false);
      cm.npc_SetSpecialAction('oid=685145', "summon", 0, 0);
      cm.setNpcSpecialActionReset("oid=685145");
      cm.npc_SetSpecialAction('oid=685145', 'die', -1, 1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.curNodeEventEnd(true);
      cm.sendNormalTalk_Bottom("#face4#胜负已经很明显了吧？既然我赢了，你就赶快带着手下人离开这吧。", 37, 3001270, false, true, 1);
    } else {
      if (status === V++) {
        cm.effect_Voice("Voice3.img/cadena/Q5/Female/0", 128);
        cm.sendNormalTalk_Bottom('#face1#……', 37, 3001261, true, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face1#呃哈哈哈！你以为Mr.哈扎尔是这么容易打败的吗！？哼，尝尝这个！", 37, 3001261, true, true, 1);
        } else {
          if (status === V++) {
            cm.userSetFieldFloating(940200504, 3, 3, 10);
            cm.inGameDirectionEvent_AskAnswerTime(900);
          } else {
            if (status === V++) {
              cm.userSetFieldFloating(940200504, 0, 0, 0);
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/2"], [3000, 0, 0, 1, 0, 0, 0, 0, 0]);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/gas", 100);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_OneTimeAction(4, 2000);
                cm.inGameDirectionEvent_AskAnswerTime(600);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(4);
                  cm.emotion(1, 900000);
                  cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction19.img/effect/cadena_dir/8", 0, 900, 0, 0, 12, 4, 1, -1, 0, 0, 0);
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/pendant", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                    cm.sendNormalTalk_Bottom("#face1#哦吼，原来是诺巴王族的纹章。运气不错嘛？", 37, 3001261, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.effect_Voice("Voice3.img/cadena/Q5/Female/1", 128);
                      cm.sendNormalTalk_Bottom("#face4#……", 37, 3001270, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.effect_Voice("Voice3.img/cadena/Q5/Female/2", 128);
                        cm.sendNormalTalk_Bottom("#face2#呃哈，呃哈哈，哈哈哈！！", 37, 3001261, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.effect_Voice("Voice3.img/cadena/Q5/Female/3", 128);
                          cm.sendNormalTalk_Bottom("#face2#‘诺巴王族永垂不朽！’这口号正适合高等翼人援军！", 37, 3001261, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.effect_Voice("Voice3.img/cadena/Q5/Female/4", 128);
                            cm.sendNormalTalk_Bottom("#face1#哈哈，快把武器部件交出来。那我会考虑饶你一命。这是你最后的机会。", 37, 3001261, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.effect_Voice("Voice3.img/cadena/Q5/Female/5", 128);
                              cm.sendNormalTalk_Bottom('#face0#……', 37, 3001270, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.effect_Voice("Voice3.img/cadena/Q5/Female/6", 128);
                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                    cm.inGameDirectionEvent_MoveAction(0);
                                    cm.emotion(0, -1);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_MoveAction(4);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_MoveAction(0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3#……可恶，你以为抓到我的软肋了吗？我看该清醒的是你才对。", 37, 3001270, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.effect_Voice("Voice3.img/cadena/Q5/Female/7", 128);
                                            cm.sendNormalTalk_Bottom("#face3#既然被你识破了身份，那就别怪我心狠手辣了。并且你已经彻底把我惹恼了。", 37, 3001270, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.effect_Voice("Voice3.img/cadena/Q5/Female/8", 128);
                                              cm.sendNormalTalk_Bottom("#face4#你少对我呼来喝去，蠢货！！", 37, 3001270, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.effect_Voice("Voice3.img/cadena/Q5/Female/9", 128);
                                                cm.inGameDirectionEvent_QTE(0);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_OneTimeAction(7, 0);
                                                  cm.setNpcSpecialActionReset('oid=685144');
                                                  cm.npc_SetSpecialAction("oid=685144", "hit", 0, 1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", 'oid=685144'], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", 'oid=685144'], [0, -200, -150, 1, 0, 1, 0, 0, 0]);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", "oid=685144"], [0, -200, 150, 1, 0, 1, 0, 0, 0]);
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/energy_boom3", 100);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", "oid=685144"], [0, 100, 150, 1, 0, 1, 0, 0, 0]);
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", "oid=685144"], [0, 100, -150, 1, 0, 1, 0, 0, 0]);
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/energy_boom1", 100);
                                                        cm.sendNormalTalk_Bottom("#face3#呃啊啊啊啊啊啊啊啊啊啊！！！！！！！！！！", 37, 3001261, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.effect_Voice("Voice3.img/cadena/Q5/Female/10", 128);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", 'oid=685144'], [0, -700, -250, 1, 0, 1, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", "oid=685144"], [0, -700, 250, 1, 0, 1, 0, 0, 0]);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/energy_boom2", 100);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", "oid=685144"], [0, 300, 250, 1, 0, 1, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", "oid=685144"], [0, 300, -250, 1, 0, 1, 0, 0, 0]);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/energy_boom2", 100);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/energy_boom3", 100);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", 'oid=685144'], [0, 700, 400, 1, 0, 1, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", "oid=685144"], [0, -800, -400, 1, 0, 1, 0, 0, 0]);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/energy_boom1", 100);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", "oid=685144"], [0, -700, -600, 1, 0, 1, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", "oid=685144"], [0, -800, -700, 1, 0, 1, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", "oid=685144"], [0, 700, -600, 1, 0, 1, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", 'oid=685144'], [0, 800, -700, 1, 0, 1, 0, 0, 0]);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/energy_boom1", 100);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", "oid=685144"], [0, -100, -600, 1, 0, 1, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", "oid=685144"], [0, -200, -700, 1, 0, 1, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", 'oid=685144'], [0, 100, -600, 1, 0, 1, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", 'oid=685144'], [0, 300, -700, 1, 0, 1, 0, 0, 0]);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/energy_boom3", 100);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", "oid=685144"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", 'oid=685144'], [0, -200, -150, 1, 0, 1, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", 'oid=685144'], [0, -200, 150, 1, 0, 1, 0, 0, 0]);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/energy_boom3", 100);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", "oid=685144"], [0, 100, 150, 1, 0, 1, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", "oid=685144"], [0, 100, -150, 1, 0, 1, 0, 0, 0]);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/energy_boom1", 100);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", 'oid=685144'], [0, -700, -250, 1, 0, 1, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", "oid=685144"], [0, -700, 250, 1, 0, 1, 0, 0, 0]);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/energy_boom2", 100);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", "oid=685144"], [0, 300, 250, 1, 0, 1, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", "oid=685144"], [0, 300, -250, 1, 0, 1, 0, 0, 0]);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/energy_boom2", 100);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/energy_boom3", 100);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", "oid=685144"], [0, 700, 400, 1, 0, 1, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3", "oid=685144"], [0, -800, -400, 1, 0, 1, 0, 0, 0]);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/energy_boom1", 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                              } else if (status === V++) {
                                                                cm.npc_LeaveField('oid=685144');
                                                                cm.npc_LeaveField("oid=685145");
                                                                cm.dispose();
                                                                cm.warp(402000323, 1, false);
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