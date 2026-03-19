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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(9401283, "oid=2154580", 240, -710, 33, 190, 290, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2154580", "summon", 0, 0);
      cm.npc_ChangeController(9401364, "oid=2154581", 50, -710, 30, 0, 100, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2154581", "summon", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 1500, 170, -620]);
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
            cm.sendNormalTalk_Bottom("谢谢！谢谢你，勇士！", 37, 9401364, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#一个人跑到这么危险的地方干什么！\r\n父母一定会担心的，快回去！", 37, 9401283, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("嗯……野狼本来不怎么到这里来，所以捡松果很方便……\r\n现在只能找找有没有别的地方了。", 37, 9401364, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#松果？怎么了？不，不对……！\r\n啊，你每天都来这里捡松果吗？", 37, 9401283, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("嗯！这个地方只有我知道！捡了松果卖掉，就能换面包吃！", 37, 9401364, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#啊哈……那不久前有没有可疑的人在这里寻找什么东西？", 37, 9401283, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2154581"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom('你怎么知道？', 37, 9401364, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#你看到了吗？！", 37, 9401283, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("说、说出来也没关系吗？\r\n不久前有一群穿黑衣的人在这里待了好一会儿，然后走掉了。我非常害怕，躲在那里连大气都不敢出。", 37, 9401364, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#见到他们在找什么东西了吗？", 37, 9401283, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("没有，但是我看见他们从后面那条路走出来。", 37, 9401364, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=2154581", -1);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=2154581", 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=2154580", -1, 100, 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#哪里？那边？", 37, 9401283, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("哎呀，不是那边，是这边！跟我来！", 37, 9401364, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=2154581", -1);
                                              cm.inGameDirectionEvent_AskAnswerTime(600);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=2154581", -1, 300, 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=2154580", -1, 300, 120);
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_同时移动镜头和人(1, 300);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2154580"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                      cm.sendNormalTalk_Bottom("#face1#岩石后面有条路！", 37, 9401283, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(900);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNewEffects(14, [0, 2000, 1000]);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNewEffects(19, [0]);
                                                          } else if (status === V++) {
                                                            cm.npc_LeaveField("oid=2154580");
                                                            cm.npc_LeaveField("oid=2154581");
                                                            cm.dispose();
                                                            cm.warp(875003045, 0, false);
                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
}