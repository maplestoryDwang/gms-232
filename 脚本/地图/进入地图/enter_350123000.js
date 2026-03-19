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
      cm.showMapleHero();
      cm.inGameDirectionEvent_同时移动镜头和人(2, 700);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face4#咳咳……终于出来了呢。", 37, 1540805, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#尼哈沙漠上有过这么巨大的洞穴吗？", 37, 1540803, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("不可能的，这是刚刚遗迹移动后所形成的。", 37, 1540804, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("大家伙，看看那前面！", 37, 1540801, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNewEffects(18, [3000, 1000, 900, 1165, -1000]);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                    } else if (status === V++) {
                      cm.dispose();
                      cm.warp(350123050, 0, true);
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