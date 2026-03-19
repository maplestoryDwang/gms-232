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
      cm.updateInfoQuest(33200, "failCount=7;underAttack=1;androidHelmet=1");
      cm.forceCompleteQuest(33210);
      cm.forceStartQuest(33202, '');
      cm.fieldEffect_PlayBGM("Bgm40.img/SecretMissionBase", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 90, 655, -2500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.addPopupSay(1540650, 2000, "那座塔其实是巨型智能机器人组合机械. 还有, 塔的顶端有#b传送装置#k. ", '', 0);
            cm.addPopupSay(1540650, 2000, "那传送装置会把智能机器人送到黑色天堂. ", '', 0);
            cm.addPopupSay(1540650, 2000, "那是通往黑色天堂甲板的#b唯一通道#k. 不过, 有一个问题. ", '', 0);
            cm.addPopupSay(1540650, 2000, "传送装置会对智能机器人头部的#b电脑芯片#k进行检测.  ", '', 0);
            cm.addPopupSay(1540650, 2000, "也就是说, 如果没有#b智能机器人头部#k, 那就无法通过塔顶的传送装置了. ", '', 0);
            cm.inGameDirectionEvent_AskAnswerTime(20000);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else if (status === V++) {
              cm.dispose();
              cm.warp(350040120, 0, true);
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