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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 40, 1644);
      cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 0, -2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1784);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(0, 250, 0, 1700);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(6000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(7000);
                  cm.effect_Text(["#fn黑体##fs26#" + new Date().getFullYear() + "年, 大都市\r\n#fs14#~ 神兽国际学校门前 ~"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("这里就是新的世界……？果然和冒险岛世界风景迥异呢。", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.setAmbience("Ambience.img/vib", 100, 60);
                      cm.sendNormalTalk_Bottom("好像有人在给我打电话。所以这个东西的名字叫做……智能手机？看来我有必要好好熟悉下使用方法了。\r\n\r\n#b（点击界面左侧的图标，接听电话。）#k", 57, 0, true, true);
                    } else if (status === V++) {
                      cm.dispose();
                      cm.warp(330000000, 1);
                      cm.forceStartQuest(32709, '');
                      cm.forceCompleteQuest(32709);
                      cm.gainExp(1613310);
                      cm.forceStartQuest(32700, '');
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;