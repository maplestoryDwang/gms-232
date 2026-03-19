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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm50/WorldHorizon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(5000);
          cm.effect_Text(["#r#fn黑体##fs23#世界尽头迫近。"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(100);
          } else {
            if (status === V++) {
              cm.fieldEffect_复合图片动画(["Effect/Direction20.img/bossBlackMage/space/blasck_space", 'animation', '', "intro"], [0, 0, 1, 0, 0, 0, 0, 1]);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/boss_start3", 200);
              cm.inGameDirectionEvent_AskAnswerTime(5000);
            } else {
              if (status === V++) {
                cm.fieldEffect_ProcessOnOffLayer("BlackOut", "Map/Effect2.img/BlackOut", 0, 1000, 0, 0, 13, 4, 1, -1, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_取消复合图片动画("intro", 100, 0);
                  cm.fieldEffect_ProcessOnOffLayer("BlackOut", '', 2, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 20, -50);
                } else {
                  if (status === V++) {
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), -172, 9);
                    cm.inGameDirectionEvent_ForcedFlip(1);
                    cm.npc_ChangeController(3003933, "oid=2273275", 0, 9, 1, -50, 50, 1, false, 0, false);
                    cm.npc_SetSpecialAction("oid=2273275", "summon", 0, 0);
                    cm.Npc_Fadeout("oid=2273275", 0, 0);
                    cm.npcMove(3003933, 0, -80, 0);
                    cm.sendNormalTalk_Bottom('呃啊啊啊！！！', 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(3500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("呼哧呼哧……这里是哪儿？", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("我以为自己是被吸进来的……", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(3003902, "oid=2273276", 150, 9, 1, 100, 200, 1, true, 1000, false);
                            cm.npc_SetSpecialAction("oid=2273276", 'summon', 0, 0);
                            cm.sendNormalTalk_Bottom("#face1#我等你好久了，傻瓜。", 37, 3003902, true, true);
                          } else {
                            if (status === V++) {
                              cm.effect_Voice("Voice4.img/BM3/orca/71", 128);
                              cm.sendNormalTalk_Bottom("奥尔卡？！你难道……", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#没错，我一直在战斗。但我的攻击对那些家伙没用。", 37, 3003902, true, true);
                              } else {
                                if (status === V++) {
                                  cm.effect_Voice("Voice4.img/BM3/orca/72", 128);
                                  cm.sendNormalTalk_Bottom("#face1#只会让他们行动迟缓。而且很快就会恢复。", 37, 3003902, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.effect_Voice("Voice4.img/BM3/orca/73", 128);
                                    cm.sendNormalTalk_Bottom('什么？', 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#也就是说，关键是你要打败他们。知道吗？", 37, 3003902, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.effect_Voice("Voice4.img/BM3/orca/74", 128);
                                        cm.sendNormalTalk_Bottom('嗯嗯。', 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.Npc_Fadeout("oid=2273275", 255, 1500);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("黑魔法师？！你真成神了吗……", 57, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#走吧，我去报仇，你去守护世界。", 37, 3003902, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.effect_Voice("Voice4.img/BM3/orca/76", 128);
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(400);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.effect_Text(["#fn黑体##fs23#来吧，赌上你们的一切。"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                        } else if (status === V++) {
                                                          cm.effect_Voice("Voice4.img/BM3/black/4", 128);
                                                          cm.npc_LeaveField("oid=2273275");
                                                          cm.npc_LeaveField("oid=2273275");
                                                          cm.npc_LeaveField("oid=2273276");
                                                          cm.npc_LeaveField("oid=2273276");
                                                          cm.dispose();
                                                          cm.warp(450013850, 0, true);
                                                          cm.setInGameDirectionMode(false, true, false);
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