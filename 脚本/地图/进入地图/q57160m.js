var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (cm.getMapId() == 807050503) {
    action1(f, E, e);
  } else {
    if (cm.getMapId() == 807050504) {
      cm.warp(807050505, 0);
      cm.dispose();
      return;
    } else if (cm.getMapId() == 807050505) {
      action2(f, E, e);
    } else {
      cm.dispose();
    }
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.sendNormalTalk_Bottom("#face0#哼，你知不知道这里究竟是什么地方！", 37, 9130077, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("这场战斗的情势已经倾向我们这一边了。织田军可以说是胜算全无。快点缴械投降吧。只要肯投降，我们就可以留你一命。", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#我乃织田四天王之一的泷川一益。人送绰号“进退泷川”。又怎么可能投降于你们这些人！", 37, 9130077, true, true);
        } else if (status === V++) {
          cm.setInGameDirectionMode(false, true, false);
          cm.gainExp(752050);
          cm.dispose();
          cm.warp(807050504, 0, false);
        }
      }
    }
  }
}
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.fieldEffect_ScreenMsg("JPKenji/text3");
      cm.inGameDirectionEvent_AskAnswerTime(7000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.onActionBarResult(6, -1);
        cm.fieldEffect_ScreenMsg("JPKenji/text4");
        cm.inGameDirectionEvent_AskAnswerTime(7000);
      } else {
        if (status === V++) {
          cm.fieldEffect_ScreenMsg("JPKenji/text5");
          cm.inGameDirectionEvent_AskAnswerTime(7000);
        } else if (status === V++) {
          cm.forceCompleteQuest(57456);
          cm.forceCompleteQuest(57160);
          cm.gainExp(9575667);
          cm.setInGameDirectionMode(false, true, false);
          cm.dispose();
          cm.warp(807000000, 2, false);
        }
      }
    }
  }
}
function action3(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}