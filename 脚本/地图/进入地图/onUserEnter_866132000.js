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
      cm.funckeySetByScript(1, 110001510, 42);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.teachSkill(110001503, -1, 0);
      cm.teachSkill(112111000, -1, 0);
      cm.sendNormalTalk("话说回来，凭你的力量，应该还无法应付我的力量。先将它封印吧。", 1, 9390384, false, true);
      cm.curNodeEventEnd(true);
      cm.effect_REPEAT("Effect/Direction14.img/effect/ShamanBT/ChapterA/22", 1, 1, 0, 1018, -362);
      cm.effect_REPEAT("Effect/Direction14.img/effect/ShamanBT/ChapterA/0", 1, 1, 0, 1444, 22);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("真，真的吗？#b(抽泣)#k", 3, 9390384, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("(直截了当)是真的！\r\n……\r\n……啊，那并不代表你很弱……算了！你快去找控制杆，把门关上吧！", 1, 9390384, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk('控制杆在哪里呢?', 3, 9390384, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(2);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.sendNormalTalk("来,现在就把这个控制杆!", 3, 9390384, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(900);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_OneTimeAction(26, 540);
                        cm.inGameDirectionEvent_AskAnswerTime(1100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk('现在好了!', 3, 9390384, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction14.img/effect/ShamanBT/ChapterA/23"], [0, 17, -3, 1, 0, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                            cm.effect_REPEAT("Effect/Direction14.img/effect/ShamanBT/ChapterA/22", 1, 0, 0, 0, 0);
                            cm.updateInfoQuest(65890, "count=579;todayCount=548;lastDate=20210530");
                            cm.updateInfoQuest(65890, "count=579;todayCount=579;lastDate=20210530");
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 1303, -50);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                  cm.effect_REPEAT("Effect/Direction14.img/effect/ShamanBT/ChapterA/0", 1, 0, 0, 0, 0);
                                  cm.effect_REPEAT("Effect/Direction14.img/effect/ShamanBT/ChapterA/1", 1, 1, 0, 1444, 22);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("advStory/disappear", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(950);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                      cm.effect_REPEAT("Effect/Direction14.img/effect/ShamanBT/ChapterA/1", 1, 0, 0, 0, 0);
                                      cm.effect_REPEAT("Effect/Direction14.img/effect/ShamanBT/ChapterA/2", 1, 1, 0, 1444, 22);
                                    } else if (status === V++) {
                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                      cm.setStandAloneMode(false);
                                      cm.effect_REPEAT("Effect/Direction14.img/effect/ShamanBT/ChapterA/2", 1, 0, 0, 0, 0);
                                      cm.dispose();
                                      cm.warp(866133000, 0, false);
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