var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#那么我就会发放#r怨恨石#k。", 36, 3004908, false, true, 1);
    } else {
      if (status === v++) {
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, false);
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === v++) {
          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 16, -400);
        } else {
          if (status === v++) {
            cm.setStandAloneMode(true);
            cm.onTeleport(0, 3, cm.getPlayer().getId(), 16, -368);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === v++) {
              cm.fieldEffect_屏幕渐入插图B(['00', "Effect/Direction26.img/kain/spine/stone/skeleton", '', '1'], [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === v++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(2500);
              } else {
                if (status === v++) {
                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/spine_stone", 100);
                  cm.fieldEffect_屏幕渐入插图B(['00', "Effect/Direction26.img/kain/spine/stone/skeleton", '2', '3'], [1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                } else {
                  if (status === v++) {
                    cm.fieldEffect_屏幕渐入插图消失B(['00'], [1, 1000]);
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                  } else {
                    if (status === v++) {
                      cm.updateInfoQuest(25980, "normal=#");
                      cm.updateInfoQuest(25980, "normal=#;hard=#");
                      cm.updateInfoQuest(39391, "level=1");
                      cm.sendNormalTalk_Bottom("#face0#（力量渗透进来。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                    } else {
                      if (status === v++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === v++) {
                          cm.teachSkill(60030241, 0, -1);
                          cm.forceCompleteQuest(39402);
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/kain/malice", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                        } else {
                          if (status === v++) {
                            cm.forceStartQuest(39455, '');
                            cm.forceCompleteQuest(39455);
                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                          } else {
                            if (status === v++) {
                              cm.inGameDirectionEvent_Unknown9(0);
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === v++) {
                                while (cm.getPlayer().getLevel() < 10) {
                                  cm.getPlayer().levelUp();
                                }
                                ;
                                cm.changeJob(6300);
                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.setStandAloneMode(false);
                                cm.sendNormalTalk_Bottom("#face0#体内深处感觉有什么东西在往外涌。\r\n\r\n#b（※按下默认快捷键（K）可分配技能点SP，将常用技能放入快捷栏使用）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0#虽然很熟悉，但有时又陌生得令人吃惊……有时候想要控制住这种晃动的气息很难，到底何时才能完美控制住这股所谓恶意的力量呢？\r\n\r\n#b（※按下默认快捷键（S）/选择型（C）可以分配能力点AP。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face0#如果需要，就用和怨恨石一并发放的药水恢复体力。\r\n\r\n#b（※ 可通过据点外部的武器杂货商人购买武器和药水。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                                  } else if (status === v++) {
                                    cm.openUIWithOption(3, 63000000);
                                    cm.dispose();
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
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}