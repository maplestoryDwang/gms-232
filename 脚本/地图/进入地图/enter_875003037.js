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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 100, -30);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175101001/Use", 100);
      cm.inGameDirectionEvent_OneTimeAction(2129, 0);
      cm.inGameDirectionEvent_头顶图片(["Skill/17510.img/skill/175101001/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(600);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175101002/Use", 100);
        cm.inGameDirectionEvent_OneTimeAction(2130, 0);
        cm.inGameDirectionEvent_头顶图片(["Skill/17510.img/skill/175101002/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(900);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(-1);
          cm.inGameDirectionEvent_同时移动镜头和人(1, 30);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175111001/Use", 100);
            cm.inGameDirectionEvent_OneTimeAction(2131, 0);
            cm.inGameDirectionEvent_头顶图片(["Skill/17511.img/skill/175111001/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(900);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175101001/Use", 100);
              cm.inGameDirectionEvent_OneTimeAction(2129, 0);
              cm.inGameDirectionEvent_头顶图片(["Skill/17510.img/skill/175101001/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(600);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175101002/Use", 100);
                cm.inGameDirectionEvent_OneTimeAction(2130, 0);
                cm.inGameDirectionEvent_头顶图片(["Skill/17510.img/skill/175101002/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(900);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175111001/Use", 100);
                  cm.inGameDirectionEvent_OneTimeAction(2131, 0);
                  cm.inGameDirectionEvent_头顶图片(["Skill/17511.img/skill/175111001/effect"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(900);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_OneTimeAction(2138, 900);
                    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175111004/Use", 100);
                    cm.fieldEffect_PlayFieldSound("Sound/Skill.img/175111004/Special", 100);
                    cm.inGameDirectionEvent_头顶图片(["Skill/17511.img/skill/175111002/prepare"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Skill/17511.img/skill/175111002/keydown"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(540);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Skill/17511.img/skill/175111002/keydownend"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(540);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/wind2", 100);
                          cm.fieldEffect_ScreenMsg("Map/EffectWz2.img/Mukhyun/windEff");
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/jobChange", 100);
                            cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/JobChangedMukhyunFront"], [0, 0, 0, 1, 0, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_头顶图片(["Effect/BasicEff.img/JobChangedMukhyunBack"], [0, 0, 0, 1, -20, 0, 0, 0, 0]);
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
                                  cm.forceStartQuest(65958, '');
                                  cm.dispose();
                                  cm.warp(875000020, 0, false);
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