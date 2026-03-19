function enter() {
  cm.openScriptNpc();
}
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(l, B, x) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = x;
  var R = -1;
  if (status <= R++) {
    cm.dispose();
  } else {
    if (status === R++) {
      if (cm.getMonsterCount(cm.getMapId()) > 0) {
        cm.playerMessage(-1, "必须消灭掉所有怪物，继续向深处前进。");
        cm.dispose();
      } else {
        switch (cm.getMapId()) {
          case 875004300:
            cm.curNodeEventEnd(true);
            cm.setInGameDirectionMode(true, false, false);
            cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
            cm.inGameDirectionEvent_ForcedFlip(-1);
            cm.inGameDirectionEvent_AskAnswerTime(300);
            break;
          case 875004400:
            cm.dispose();
            cm.warp(875003023, 0, false);
            break;
        }
      }
    } else {
      if (status === R++) {
        cm.inGameDirectionEvent_同时移动镜头和人(1, 50);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === R++) {
          cm.sendNormalTalk_Bottom("#face0##b（小时候为了修炼，不知道在这条路上跑了多少次。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
        } else {
          if (status === R++) {
            cm.fieldEffect_ProcessOnOffLayer('00', "Effect/DirectionWz2.img/MukhyunStory/7", 0, 1000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
            cm.sendNormalTalk_Bottom("#face1##b（还经常请先到的人吃零食。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
          } else {
            if (status === R++) {
              cm.sendNormalTalk_Bottom("#face0##b（……那时我还是个愣头青，素笑也是个毛手毛脚的野丫头。\r\n……还有，把那样的我们……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
            } else {
              if (status === R++) {
                cm.sendNormalTalk_Bottom("#face0##b（那个时候，真的……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
              } else {
                if (status === R++) {
                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                } else {
                  if (status === R++) {
                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                    cm.sendNormalTalk_Bottom("#face0##b（……和素笑约定要向前看。不要……再想了。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                  } else {
                    if (status === R++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(900);
                    } else {
                      if (status === R++) {
                        cm.sendNewEffects(14, [0, 2000, 1000]);
                      } else {
                        if (status === R++) {
                          cm.sendNewEffects(19, [0]);
                        } else if (status === R++) {
                          cm.dispose();
                          cm.warp(875004400, 1, false);
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