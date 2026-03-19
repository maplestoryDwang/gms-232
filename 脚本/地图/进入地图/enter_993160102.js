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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -50, -621);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, -50, -50);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3500);
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
                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -9, -157);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1##fc0xFF25f1ca#你这个杀千刀的家伙！\r\n就因为你，我肚子里的怪物全都散落一地！", 37, 3001651, false, true);
                          cm.effect_Voice("Voice5.img/hoyoung/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(3001651, "oid=2941267", -112, -197, 8, -162, -62, 0, true, 0, false);
                              cm.npc_SetSpecialAction("oid=2941267", 'summon', 0, 0);
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/D_appear", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=2941267", 1, 5, 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#还不赶紧将怪物找出来！小心我诅咒你祖孙八代！", 37, 3001651, false, true);
                                    cm.effect_Voice("Voice5.img/hoyoung/C/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/2', 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#按照约定，你不是应该让我有能力施展道术嘛！？\r\n光顾着偷懒，什么时候才能回收怪物啊，你这个流氓道士！", 37, 3001651, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face5##fc0xFFbfbfbf#（我没想到怪物居然真的会遵守承诺，\r\n嘻嘻，谁能想到多亏了那个小不点，我终于能施展道术了。）", 36, 3001674 + cm.getPlayer().getGender(), true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_ForcedFlip(-1);
                                          cm.sendNormalTalk_Bottom("#face2#真是喋喋不休，有够吵的，你以为你这一威胁就叫人怕了？\r\n明明长得这么可爱！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                          cm.effect_Voice("Voice5.img/hoyoung/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/3', 100);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#你说什么？", 37, 3001651, true, true);
                                            cm.effect_Voice("Voice5.img/hoyoung/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=2941267", "special0", 2000, 1);
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/D_skill", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/hoyoung/do_hit"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                cm.inGameDirectionEvent_OneTimeAction(25, 999999);
                                                cm.emotion(1, 999999);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face4#哎呀呀……", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                  cm.effect_Voice("Voice5.img/hoyoung/C/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/5', 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#虽然我遭到封印，变得丑陋不堪，\r\n但你别忘了，教训你还是绰绰有余！", 37, 3001651, true, true);
                                                    cm.effect_Voice("Voice5.img/hoyoung/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetSpecialAction("oid=2941267", "special2", 1000, 1);
                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/D_appear", 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_LeaveField("oid=2941267");
                                                        cm.npc_LeaveField("oid=2941267");
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom('#face4#切……', 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                          cm.effect_Voice("Voice5.img/hoyoung/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.updateInfoQuest(39512, "dir=1;pop=1");
                                                              cm.forceCompleteQuest(39512);
                                                              cm.gainExp(63);
                                                              cm.gainExp(29);
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
                                                                    cm.setStandAloneMode(false);
                                                                    cm.eventSKill(0);
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.dispose();
                                                                    cm.warp(993160000, 0, false);
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}