var status = -1;
var selectionLog = [];
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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 0, -650);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(2550004, "oid=1754986", 160, -750, 32, 110, 210, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=1754986", "summon", 0, 0);
          cm.inGameDirectionEvent_同时移动镜头和人(1, 5);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/monster2", 100);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("可能是外面太冷了吧，总往我怀里钻。", 37, 2550004, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("它是把你当成妈妈了。总之，这下就完成约定了。", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("完成是完成了，可是这小家伙太小了点……唔。", 37, 2550004, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("(再往上走一点就能看到狮子王之城了……)", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("队长？你去哪？喂！！", 37, 2550004, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("(不知怎么地，感觉有些不安啊。快确认一下吧。)", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_同时移动镜头和人(1, 5);
                                cm.onTeleport(0, 3, cm.getPlayer().getId(), 472, -1330);
                                cm.sendNormalTalk_Bottom("喂，我没法把它送上方舟啊。\r\n这么小的幼崽恐怕适应不了啊……\r\n喂，听见我的话了吗？", 37, 2550004, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1000, 5000, 2, -1150);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayBGM("Bgm23/CrimsonTower", 0, 0);
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_同时移动镜头和人(1, 200);
                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        cm.effect_NormalSpeechBalloon("#fn黑体##fs20#啊……", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                          cm.effect_NormalSpeechBalloon("#fn黑体##fs20#狮子王之城……着火了……", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 14, -1390);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 100, 0, 0, 0, 1300, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("我像被钉住一样，一动不动地站在那里。", 0);
                                                    cm.effect_Voice("Voice3.img/DLep4/e/e_1.mp3", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_Monologue('', 0);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_Monologue("狮子王，他是冰峰雪域所有男子汉的楷模和偶像。", 0);
                                                        cm.effect_Voice("Voice3.img/DLep4/e/e_2.mp3", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_Monologue("他那座建在刀劈斧砍般的悬崖边上的城堡，不只是一座铜墙铁壁般的要塞，", 0);
                                                          cm.effect_Voice("Voice3.img/DLep4/e/e_3.mp3", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_Monologue("也是即使身处凛冽寒冬，仍然不屈不挠的骑士的象征。", 0);
                                                            cm.effect_Voice("Voice3.img/DLep4/e/e_4.mp3", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_Monologue('', 0);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_Monologue("那样的狮子王之城，着火了。", 0);
                                                                cm.effect_Voice("Voice3.img/DLep4/e/e_5.mp3", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_Monologue('', 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_Monologue("#fn黑体##r「战争……又一次打响了。」", 0);
                                                                    cm.effect_Voice("Voice3.img/DLep4/e/e_6.mp3", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_Monologue('', 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else if (status === V++) {
                                                                          cm.eventSKill(0);
                                                                          cm.dispose();
                                                                          cm.warp(306010000, 0, true);
                                                                          cm.setInGameDirectionMode(false, true, false);
                                                                          cm.npc_LeaveField("oid=1754986");
                                                                          cm.npc_LeaveField("oid=1754986");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;