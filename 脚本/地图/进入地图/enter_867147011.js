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
      cm.npc_ChangeController(9401053, 'oid=201018', 261, 74, 17, 181, 281, 4, true, 0, false);
      cm.npc_ChangeController(9401053, 'oid=201019', 462, 74, 17, 388, 488, 5, true, 0, false);
      cm.npc_ChangeController(9401053, "oid=201020", 105, -92, 8, 55, 155, 4, true, 0, false);
      cm.npc_ChangeController(9401053, "oid=201021", 686, 72, 18, 669, 769, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9401123, "oid=8659537", 380, -172, 22, 330, 430, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=8659537", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNewEffects(17, [0, 1000, 2000, 390, -130]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=8659537"], [3000, 0, 0, 1, 0, 1, 0, 0]);
            cm.sendNormalTalk_Bottom("队长~~！看看我！我升级了！", 37, 9401029, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.emotion(2, 1000);
                cm.sendNormalTalk_Bottom("#b祝贺你，莫妮卡！", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你的攻击力似乎提高了？升级果然没错！呀哈～～～我好开心呀！", 37, 9401029, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("队员会根据在深渊内停留的时间而成长。嘿嘿，继续在这里狩猎30分钟，我们就往更深处去看看吧！", 37, 9401029, true, true);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=8659537", -1);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=8659537", -1, 100, 300);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                          cm.effect_Text(["#fn黑体##fs20#30分钟后……"], [50, 2000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/AbyssExpedition/LevelUP", "oid=8659537"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.fieldEffect_PlayFieldSound("Sound2/PL_Sound.img/Wz2_Abyss/levelUP", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=8659537", 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("天……哪……", 37, 9401029, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                          cm.updateInfoQuest(64753, "point=5;level=3;rank=0");
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("我，又变强了！变得更强大了！", 37, 9401029, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=8659537"], [3000, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.sendNormalTalk_Bottom("呀啊啊啊啊～～拒绝过我的人现在一定都悔不当初呢。对吧？", 37, 9401029, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("队长队长，我现在已经如此强大了，我们就继续下去看看吧？", 37, 9401029, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else if (status === V++) {
                                                      cm.eventSKill(0);
                                                      cm.dispose();
                                                      cm.warp(867147012, 0, false);
                                                      cm.npc_LeaveField("oid=8659537");
                                                      cm.npc_LeaveField("oid=8659537");
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