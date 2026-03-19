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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_Hero9(0, 0);
      cm.npc_ChangeController(9401368, "oid=2153268", 800, 290, 9, 750, 850, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2153268", "summon", 0, 0);
      cm.npc_ChangeController(9401368, "oid=2153269", 900, 290, 11, 850, 950, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2153269", 'summon', 0, 0);
      cm.npc_ChangeController(9401368, "oid=2153270", 490, 290, 9, 440, 540, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2153270", "summon", 0, 0);
      cm.Npc_Fadeout("oid=2153268", 0, 0);
      cm.Npc_Fadeout("oid=2153269", 0, 0);
      cm.Npc_Fadeout("oid=2153270", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 482, 295);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.sendNewEffects(17, [0, 1000, 1500, 680, 350]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayBGM("BgmMH/GodOfWar", 0, 0);
              cm.fieldEffect_Hero9(-2, 1000);
              cm.Npc_Fadeout("oid=2153268", 255, 1000);
              cm.Npc_Fadeout("oid=2153269", 255, 1000);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.emotion(1, 300);
                cm.Npc_Fadeout("oid=2153270", 255, 1000);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_OneTimeAction(2129, 0);
                  cm.inGameDirectionEvent_头顶图片(["Skill/17510.img/skill/175101001/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                  cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175101001/Use", 100);
                  cm.inGameDirectionEvent_AskAnswerTime(900);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175101001/Hit", 100);
                    cm.npc_SetSpecialAction("oid=2153268", "die", 0, 0);
                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9601657/Die", 100);
                    cm.inGameDirectionEvent_OneTimeAction(2130, 0);
                    cm.inGameDirectionEvent_头顶图片(["Skill/17510.img/skill/175101001/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175101001/Use", 100);
                    cm.inGameDirectionEvent_AskAnswerTime(900);
                  } else {
                    if (status === V++) {
                      cm.npc_LeaveField("oid=2153268");
                      cm.npc_SetSpecialAction("oid=2153269", "die", 0, 0);
                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9601657/Die", 100);
                      cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175101001/Hit", 100);
                      cm.inGameDirectionEvent_ForcedFlip(-1);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_OneTimeAction(2154, 0);
                        cm.inGameDirectionEvent_头顶图片(["Skill/17510.img/skill/175101005/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Skill/17510.img/skill/175101005/effect0"], [0, 0, 0, 1, -20, 0, 0, 0, 0]);
                        cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175101005/Use", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(600);
                      } else {
                        if (status === V++) {
                          cm.npc_LeaveField("oid=2153269");
                          cm.npc_SetSpecialAction("oid=2153270", "die", 0, 0);
                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9601657/Die", 100);
                          cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175101005/Hit", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(600);
                        } else {
                          if (status === V++) {
                            cm.npc_LeaveField("oid=2153270");
                            cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/JobChangedMukhyunFront"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/JobChangedMukhyunBack"], [0, 0, 0, 1, -20, 0, 0, 0, 0]);
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/jobChange", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                                    cm.forceCompleteQuest(65944);
                                    cm.gainExp(20259);
                                    cm.dispose();
                                    cm.warp(875001102, 0, false);
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