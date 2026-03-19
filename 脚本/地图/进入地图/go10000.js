var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.getLevel() > 10) {
        cm.fieldEffect_ScreenMsg("maplemap/enter/10000");
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_Monologue("\r\n#fs60#请和修嘉完成对话领取新手礼包哦.", 1);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else if (status === V++) {
          cm.inGameDirectionEvent_SetHideEffect(0);
          cm.fieldEffect_InsertCanvas(1, 0, 0, 0, 0, 1500, 0);
          cm.curNodeEventEnd(true);
          cm.setInGameDirectionMode(false, true);
          cm.setStandAloneMode(false);
          cm.enableActions();
          cm.effect_NormalSpeechBalloon("\r\n#fn黑体##fs30#欢迎来到" + cm.getServerName() + "\r\n同步更新\r\n解卡命令@ea \r\n快速回程命令 @fm \r\n快速复活命令@fh \r\n打开万能NPC命令 @wn", 1, 1, 0, 4000, 0, 0);
          cm.dispose();
        } else {
          cm.dispose();
        }
      }
    }
  }
}