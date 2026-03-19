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
      cm.gainSkillBuff(80002202);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.updateInfoQuest(34125, "370=2;390=2;310=2;320=2;330=2");
      cm.npc_ChangeController(3003141, "oid=2072763", -22, -398, 37, -72, 28, 0, true, false);
      cm.npc_SetSpecialAction("oid=2072763", "summon", 0, 0);
      cm.npc_ChangeController(3003142, "oid=2072764", -213, 76, 22, -263, -163, 0, true, false);
      cm.npc_SetSpecialAction("oid=2072764", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("卡奥说要回到原来的地方？那么，你只要绕过那边的那座山峰就可以了。", 37, 3003142, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("…………", 37, 3003141, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("……卡奥？", 37, 3003142, true, true);
            } else {
              if (status === V++) {
                cm.userSetFieldFloating(450001330, 20, 50, 20);
                cm.npc_SetForceMove("oid=2072763", -1, 500, 10);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/fall2", 200);
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer("kao", "Map/Effect2.img/ArcaneRiver1/fall", 0, 1500, 0, -80, 0, 4, 1);
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/fireBird2", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayBGM("SoundEff.img/ArcaneRiver/thrill", 0, 0);
                      cm.setAmbience("SoundEff.img/HofM/act4/fire", 200, 60);
                      cm.sendNormalTalk_Bottom("啊，不行，你不能做让火焰鸟突然调头那么危险的事……", 37, 3003142, false, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/fireBird3", 200);
                        cm.sendNormalTalk_Bottom("拜托了，停下来！这样下去，我们都会掉下去的！你到底为什么要这样啊！", 37, 3003142, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("…………", 37, 3003141, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("可以照映出记忆的泉水…… 我一定要去看看。", 37, 3003141, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("我想看看我的过去……还有…… 你的过去…… #ho#……", 37, 3003141, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("那是什么声音！？", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("…………", 37, 3003141, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#r……一样的灵魂，一定要两个吗？#k", 37, 3003141, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('咔啊啊！！！', 37, 3003142, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/fall2", 200);
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/fireBird2", 200);
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                          } else if (status === V++) {
                                            cm.dispelBuff(80002202);
                                            cm.dispose();
                                            cm.warp(450001200, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;