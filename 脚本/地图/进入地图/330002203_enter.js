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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(1530140, "oid=35982546", 400, 20, 1, 350, 450, 0, true, false);
      cm.npc_SetSpecialAction("oid=35982546", "summon", 0, 0);
      cm.npc_ChangeController(1530303, "oid=35982547", 260, 20, 1, 210, 310, 0, false, false);
      cm.npc_SetSpecialAction("oid=35982547", "summon", 0, 0);
      cm.npc_ChangeController(1530270, "oid=35982548", 750, 20, 3, 700, 800, 1, true, false);
      cm.npc_SetSpecialAction("oid=35982548", 'summon', 0, 0);
      cm.npc_ChangeController(1530280, "oid=35982549", 890, 20, 3, 840, 940, 1, true, false);
      cm.npc_SetSpecialAction("oid=35982549", 'summon', 0, 0);
      cm.inGameDirectionEvent_同时移动镜头和人(1, 10);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
          cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2500, 1530140, cm.getPlayer().getId());
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#所以……信上的墨迹晕染开了？", 37, 1530140, false, true);
            cm.effect_Voice("Voice2.img/Friends/CH2_03/1", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("嗯，完全是一封令人发指的信。用奥兹的话说就是#r精神病患者#k的行为。", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy", 0, 0);
                cm.npc_SetSpecialAction("oid=35982546", "shy", -1, 1);
                cm.inGameDirectionEvent_AskAnswerTime(2500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#哈哈……还真是呢……\r\n不过那也有可能不是威胁信，不是吗？我觉得那只不过是一封普通的情书而已……", 37, 1530140, false, true);
                  cm.effect_Voice("Voice2.img/Friends/CH2_03/2", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("那不可能。内容都那么明目张胆了。", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#啊，啊哈哈哈哈哈哈哈哈哈哈哈哈。的确不可能，还真是……", 37, 1530140, true, true);
                      cm.effect_Voice("Voice2.img/Friends/CH2_03/3", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("听奥兹说，只要采集到指纹很快就可以抓到犯人的。", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#指指指指指指纹？\r\n太不像话了，又不是科学搜查队怎么可能通过指纹查找到犯人？", 37, 1530140, true, true);
                          cm.effect_Voice("Voice2.img/Friends/CH2_03/4", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("听说在以前做科学实验的时候，留下了一些采集到的指纹资料。和那上面的指纹对照一下不就能找出犯人是谁了吗？", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#原原原来如此……是啊，上科学课的时候的确有过那样的实验。哈哈哈哈。", 37, 1530140, true, true);
                              cm.effect_Voice("Voice2.img/Friends/CH2_03/5", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("你没事吧？看上去脸色很不好，还出汗了。", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#嗯？什么？我好着呢！我这人本来就爱出汗。就是偶尔我身体里的黑龙蠢蠢欲动，所以让我有些难以承受了吧？哈哈哈……", 37, 1530140, true, true);
                                  cm.effect_Voice("Voice2.img/Friends/CH2_03/6", 100);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("好了，大家回到座位上坐好！我有事要宣布。", 37, 1530370, true, true);
                                    cm.effect_Voice("Voice2.img/Friends/CH2_03/7", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_ChangeController(1530370, "oid=35990267", 1350, 20, 3, 1300, 1400, 1, true, false);
                                      cm.npc_SetSpecialAction("oid=35990267", "summon", 0, 0);
                                      cm.npc_SetForceMove("oid=35990267", -1, 150, 100);
                                      cm.npc_setForceFlip("oid=35982548", 1);
                                      cm.npc_setForceFlip("oid=35982549", 1);
                                      cm.inGameDirectionEvent_ForcedFlip(1);
                                      cm.inGameDirectionEvent_PushMoveInfo(0, 120, 800, 19);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(3586);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("同学们，最近学校经常发生一些弄得大家人心惶惶的事件。那其中似乎还有人开了个极其过分的玩笑……", 37, 1530370, false, true);
                                          cm.effect_Voice("Voice2.img/Friends/CH2_03/8", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("我把话说在前头，犯罪就是犯罪！\r\n给人写威胁信是绝对不会被当成是一场简单的恶作剧处理了事的……", 37, 1530370, true, true);
                                            cm.effect_Voice("Voice2.img/Friends/CH2_03/9", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("不光是要叫家长来，而且还有可能被处以休学的处罚，所以请大家小心点。", 37, 1530370, true, true);
                                              cm.effect_Voice("Voice2.img/Friends/CH2_03/10", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_PushMoveInfo(0, 120, 612, 19);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2069);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    cm.effect_Voice("Voice2.img/Friends/CH2_03/11", 100);
                                                    cm.effect_NormalSpeechBalloon("休, 休学……? ！", 0, 1, 0, 2500, 1530140, cm.getPlayer().getId());
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("居然写威胁信，太过分了……", 37, 1530270, false, true);
                                                      cm.effect_Voice("Voice2.img/Friends/CH2_03/12", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("到底是哪个家伙干的啊？", 37, 1530280, true, true);
                                                        cm.effect_Voice("Voice2.img/Friends/CH2_03/13", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("被抓到之后会公开姓名然后发布到网上吗？", 37, 1530270, true, true);
                                                          cm.effect_Voice("Voice2.img/Friends/CH2_03/14", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("诶，那可不行。一定要把照片也公开出来，让他以后不能抬头做人才行。", 37, 1530280, true, true);
                                                            cm.effect_Voice("Voice2.img/Friends/CH2_03/15", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=35982546"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                              cm.effect_NormalSpeechBalloon("……呃呃呃！", 0, 0, 0, 1200, 1530140, cm.getPlayer().getId());
                                                              cm.effect_Voice("Voice2.img/Friends/CH2_03/16", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetSpecialAction("oid=35982546", "die", -1, 1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                cm.effect_NormalSpeechBalloon("#fs9#……咕噜！", 0, 0, 0, 2500, 1530140, cm.getPlayer().getId());
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=35982548", -1);
                                                                  cm.npc_setForceFlip("oid=35982549", -1);
                                                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=35982548"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=35982549"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/what");
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("老师，弗朗西斯昏倒了！", 37, 1530270, false, true);
                                                                    cm.effect_Voice("Voice2.img/Friends/CH2_03/17", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else if (status === V++) {
                                                                      cm.npc_setForceFlip("oid=35982548", 0);
                                                                      cm.npc_setForceFlip("oid=35982549", 0);
                                                                      cm.inGameDirectionEvent_ForcedFlip(0);
                                                                      cm.forceStartQuest(32767, '');
                                                                      cm.forceCompleteQuest(32767);
                                                                      cm.dispose();
                                                                      cm.warp(330000100, 0);
                                                                      cm.inGameDirectionEvent_SetHideEffect(0);
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