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
      cm.effect_Voice("Voice6.img/lara/3/Female/5", 100);
      cm.sendNormalTalk_Bottom("#face1#那边那个！", 36, 3005102, false, true, 1);
    } else {
      if (status === v++) {
        cm.effect_Voice("Voice6.img/lara/3/Female/6", 100);
        cm.askYesNo_Bottom("#face1#看起来情况似乎有点棘手，要我帮忙吗？", 36, 3005102, 1);
      } else {
        if (status === v++) {
          cm.effect_Voice("Voice6.img/lara/3/Female/11", 100);
          cm.sendNormalTalk_Bottom("#face2#哇，你的耳朵和我一样神奇呢，还有毛茸茸的尾巴也一样！", 36, 3005100, false, true, 1);
        } else if (status === v++) {
          cm.forceStartQuest(36201, '');
          cm.updateInfoQuest(36200, "50=h1;51=h1;set=1");
          cm.dispose();
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
      cm.effect_Voice("Voice6.img/lara/3/Female/12", 100);
      cm.sendNormalTalk_Bottom("#face6#小山灵们啊，你们原来在这里啊！", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.forceCompleteQuest(36201);
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(true, false, false);
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.setStandAloneMode(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 5425, 293);
      } else {
        if (status === v++) {
          cm.onTeleport(0, 3, cm.getPlayer().getId(), 5240, 282);
          cm.inGameDirectionEvent_ForcedFlip(1);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === v++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#这个家伙……！我们明明说好了不招惹对方的生意的！", 36, 3005110, false, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#上次我们做生意的时候，他就直接在旁边明目张胆地卖赝品啊！", 36, 3005111, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face1#你也信啊？我连我自己都信不过呢？", 36, 3005102, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face1#等等！危险啊！", 36, 3005100, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction26.img/Lara/effect/0", 'oid=0'], [0, 13, -5, 1, 0, 1, 0, 0, 0]);
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Lara/light", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === v++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction26.img/Lara/effect/1", "oid=0"], [0, 130, -50, 1, 0, 1, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(800);
                      } else {
                        if (status === v++) {
                          cm.npc_ChangeController(3005104, "oid=630085", 5368, 279, 7, 5318, 5418, 0, true, 800, false);
                          cm.npc_SetSpecialAction('oid=630085', 'summon', 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#唔……这是什么？", 36, 3005110, false, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#……！", 36, 3005102, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face1#那些小山灵……", 36, 3005100, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face1#这种温暖和铃铛发光时一样……", 36, 3005100, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.updateInfoQuest(25980, 'normal=#');
                                    cm.updateInfoQuest(25980, "normal=#;hard=#");
                                    cm.gainExp(15);
                                    cm.gainExp(34);
                                    cm.gainExp(57);
                                    cm.gainExp(92);
                                    cm.gainExp(135);
                                    cm.gainExp(372);
                                    cm.gainExp(560);
                                    cm.gainExp(840);
                                    cm.updateInfoQuest(39391, "level=1");
                                    cm.gainExp(1242);
                                    cm.teachSkill(160010001, 0, -1);
                                    cm.updateInfoQuest(36200, "50=h1;51=h0;set=1");
                                    cm.gainItem(1143247, 1);
                                    cm.forceStartQuest(36202, '');
                                    cm.forceCompleteQuest(36202);
                                    cm.sendNormalTalk_Bottom("#face0#我感觉和小山灵的关系更亲密了。\r\n\r\n#b（※点击默认快捷键（K）可分配技能点，可将常用技能放入快捷栏使用。）", 36, 3005100, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.forceStartQuest(36260, '');
                                      cm.forceCompleteQuest(36260);
                                      cm.sendNormalTalk_Bottom("#face0#总有一天能更亲密吧？\r\n\r\n#b（※可按下基础快捷键（S）/选择型（C）分配能力点。）", 36, 3005100, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face0#如果有需要，就用奶奶给的药水和特殊药水恢复体力吧。\r\n\r\n#b（※可通过村庄的武器杂货商人购买武器和药水。）", 36, 3005100, true, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.openUIWithOption(3, 63000000);
                                          cm.npc_LeaveField("oid=630085");
                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                        } else {
                                          if (status === v++) {
                                            cm.inGameDirectionEvent_Unknown9(1000);
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === v++) {
                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                              cm.setInGameDirectionMode(false, true, false);
                                              cm.setStandAloneMode(false);
                                              while (cm.getLevel() < 10) {
                                                cm.getPlayer().levelUp();
                                              }
                                              cm.changeJob(16200);
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
        }
      }
    }
  }
}