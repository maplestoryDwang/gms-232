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
      cm.sendNormalTalk("呃呵,呃呵。\r\n若想使用可爱的波波的力量,先使用'守护技能'后,再点击左方向键就可以了~", 5, 9390301, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("那就先变为可爱的波波的守护状态,便可随意的使用我的力量。波波", 5, 9390301, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#s110001510#\r\n请使用保存在#b[Shift]#k键当中的#b‘模式变更技能’#k,并点击#b‘右侧方向键’#k吧,老大!那么就会变成雪豹模式!摇摆吧!", 5, 9390302, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("接下来就点击[ctrl]键来使用雪豹突击技能吧", 5, 9390302, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("试着消灭这个地图中的地精吧。\r\n嗯……特别是#b#o9390930##k,要是不借助我的力量的话,根本无法消灭它。\r\n如果借助我的力量的话,就不会很难!", 5, 9390301, true, true);
              cm.updateInfoQuest(65890, "count=428;todayCount=397;lastDate=20210530");
              cm.updateInfoQuest(65890, "count=428;todayCount=428;lastDate=20210530");
            } else {
              if (status === V++) {
                cm.teachSkill(110001501, 0, -1);
                cm.teachSkill(110001501, 1, 1);
                cm.teachSkill(112000000, 1, 20);
                cm.funckeySetByScript(1, 110001510, 42);
                cm.curNodeEventEnd(true);
                cm.setInGameDirectionMode(true, true, false);
                cm.inGameDirectionEvent_MoveAction(0);
                cm.setStandAloneMode(true);
                cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 700, 0);
              } else {
                if (status === V++) {
                  cm.spawnMobLimit(9390927, 1, 838, 28, 2);
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.spawnMobLimit(9390927, 1, 816, 28, 2);
                    cm.inGameDirectionEvent_AskAnswerTime(249);
                  } else {
                    if (status === V++) {
                      cm.spawnMobLimit(9390928, 1, 826, 28, 2);
                      cm.inGameDirectionEvent_AskAnswerTime(272);
                    } else {
                      if (status === V++) {
                        cm.spawnMobLimit(9390928, 1, 959, 28, 2);
                        cm.inGameDirectionEvent_AskAnswerTime(240);
                      } else {
                        if (status === V++) {
                          cm.spawnMobLimit(9390929, 1, 920, 28, 2);
                          cm.inGameDirectionEvent_AskAnswerTime(203);
                        } else {
                          if (status === V++) {
                            cm.spawnMobLimit(9390929, 1, 1115, 28, 2);
                            cm.inGameDirectionEvent_AskAnswerTime(326);
                          } else {
                            if (status === V++) {
                              cm.spawnMobLimit(9390930, 1, 900, 28, 1);
                              cm.forceStartQuest(59015, '');
                              cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.setStandAloneMode(false);
                                cm.effect_OnUserEff("Effect/Direction14.img/effect/ShamanBT/ChapterA/26");
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