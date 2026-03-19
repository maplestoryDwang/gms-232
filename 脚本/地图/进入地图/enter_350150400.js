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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1540838, "oid=286477221", -2135, -374, 1, -2185, -2085, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=286477221", "summon", 0, 0);
      cm.npc_ChangeController(1540807, "oid=286477222", -1911, -360, 3, -1961, -1861, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286477222", 'summon', 0, 0);
      cm.forceStartQuest(33900, '6');
      cm.mapleHeroBecomeNpc(9, 0);
      cm.onActionBarResult(6, -1);
      cm.onActionBarResult(5, 32);
      cm.mapleHeroSetList([6]);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -2100, -320);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("……原来是这样，你已经去见过所有英雄了吗？", 37, 1540838, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你离开的这段日子，发生了许多事情。\r\n没想到魔族军并没有入侵神木村南部，而是去了里恩岛，\r\n我分散了联盟军，派兵去了神秘岛的西部战线。", 37, 1540838, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("多亏了你给的情报，我们才能够迅速做出对策。\r\n还有最重要的是……", 37, 1540838, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("谢谢你救了我妹妹，\r\n若不是你，利琳会沦为魔族军的俘虏的。", 37, 1540838, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("联盟军今后打算怎么办呢？", 37, 1540805, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("敌人人数众多，还是先保持警戒吧。\r\n虽然阿弗利埃的事情很令人惋惜，\r\n但想要将牺牲减少到最小，我认为应该尽可能避免正面战。", 37, 1540838, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("恩，我明白你的意思了。", 37, 1540805, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("所以，你的下一个目的地是哪儿？", 37, 1540838, true, true);
                          cm.effect_Voice("Voice3.img/HofM/INTERLUDE/NH/8", 128);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("很抱歉，除了要和我一起去的人，我谁都不能说。", 37, 1540805, true, true);
                            cm.effect_Voice("Voice3.img/HofM/INTERLUDE/NH/9", 128);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("恩，没错，\r\n毕竟这是先祖直到最后豁出性命只为给我们留下的线索！", 37, 1540807, true, true);
                              cm.effect_Voice("Voice3.img/HofM/INTERLUDE/NH/10", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("这样啊，这也没什么……\r\n不过如果你是要去闷热的地方旅行，最好是多备些水。", 37, 1540838, true, true);
                                cm.effect_Voice("Voice3.img/HofM/INTERLUDE/NH/11", 128);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom('！！', 37, 1540807, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#你，你怎么会？", 37, 1540805, true, true);
                                    cm.effect_Voice("Voice3.img/HofM/INTERLUDE/NH/13", 128);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("世界上没有不透风的墙。\r\n想要知道你们翻过了什么文献，做了什么调查，这一点并不难。", 37, 1540838, true, true);
                                      cm.effect_Voice("Voice3.img/HofM/INTERLUDE/NH/14", 128);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("你记住，对手并不好对付，\r\n既然我能够搞明白，对方也稍微会有些头绪的。", 37, 1540838, true, true);
                                        cm.effect_Voice("Voice3.img/HofM/INTERLUDE/NH/15", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#……恩，我会记住的。", 37, 1540805, true, true);
                                          cm.effect_Voice("Voice3.img/HofM/INTERLUDE/NH/16", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("那么，祝你在全新的地方和你的新同伴能够好运。", 37, 1540838, true, true);
                                            cm.effect_Voice("Voice3.img/HofM/INTERLUDE/NH/17", 128);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3));
                                                cm.forceCompleteQuest(33950);
                                                cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                cm.updateInfoQuest(33961, "33950=1;33947=1;33948=1;33949=1");
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                              } else if (status === V++) {
                                                cm.dispose();
                                                cm.warp(350150500, 0, true);
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.npc_LeaveField("oid=286477221");
                                                cm.npc_LeaveField("oid=286477221");
                                                cm.npc_LeaveField("oid=286477222");
                                                cm.npc_LeaveField("oid=286477222");
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