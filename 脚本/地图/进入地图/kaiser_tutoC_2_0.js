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
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(3000139, "oid=1053590", -150, 220, 3, -200, -100, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=1053590", 'summon', 0, 0);
        cm.npc_ChangeController(3000110, "oid=1053591", -20, 220, 5, -70, 30, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1053591", "summon", 0, 0);
        cm.npc_ChangeController(3000114, "oid=1053592", 70, 220, 6, 20, 120, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1053592", "summon", 0, 0);
        cm.npc_ChangeController(3000111, "oid=1053593", 130, 220, 6, 80, 180, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1053593", "summon", 0, 0);
        cm.npc_ChangeController(3000115, "oid=1053594", 250, 220, 8, 200, 300, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1053594", "summon", 0, 0);
        cm.setSessionValue("enemy0", "1053591");
        cm.setSessionValue('enemy1', "1053592");
        cm.setSessionValue("enemy2", '1053593');
        cm.setSessionValue("enemy3", "1053594");
        cm.sendNormalTalk("哪里跑来的小毛孩竟敢坏我们的事！", 1, 3000110, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("迪奥！！！醒醒！！", 17, 3000110, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("这帮小家伙真是找死，已经被他们俩看见我们的行动，不能放过，杀了他们！", 1, 3000110, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("你以为我会那么容易被你打败吗！！", 17, 3000110, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("你一个人难道还能上天入地了不成！！", 1, 3000114, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/0"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_MoveAction(2);
                  cm.inGameDirectionEvent_OneTimeAction(451, 0);
                  cm.fieldEffect_PlayFieldSound("Kaiser/61001101", 100);
                  cm.inGameDirectionEvent_头顶图片(["Skill/6100.img/skill/61001101/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(210);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/5", "oid=1053591"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(150);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=1053591", "die1", 0, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=1053591");
                        cm.sendNormalTalk("嚣……嚣张得很嘛，受死吧！", 1, 3000114, false, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=1053592", 'attack1', 0, 1);
                          cm.npc_SetSpecialAction("oid=1053594", "attack1", 0, 1);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Npc/3000114.img/hit"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/6"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(900);
                            } else {
                              if (status === V++) {
                                cm.effect_Direction("Effect/Direction9.img/KaiserTutorial/Scene2", 0, 0, 0);
                                cm.sendNormalTalk("呃……怎么还有这种愣小子。", 1, 3000111, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("竟然吃了他一招，不能留活口，杀了他们！", 1, 3000114, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/tuto/Effect/0"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
                                      cm.inGameDirectionEvent_AskAnswerTime(1950);
                                    } else if (status === V++) {
                                      cm.npc_LeaveField("oid=1053590");
                                      cm.npc_LeaveField("oid=1053592");
                                      cm.npc_LeaveField("oid=1053593");
                                      cm.npc_LeaveField("oid=1053594");
                                      cm.dispose();
                                      cm.warp(940002020, 0, false);
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