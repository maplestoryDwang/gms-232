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
      cm.playerMessage(-1, "你必须消灭所有怪兽才能前往下一区域。");
      switch (cm.getMapId()) {
        case 610061040:
        case 610061150:
        case 610062010:
        case 610062130:
        case 610062240:
        case 610062310:
        case 610063030:
        case 610063100:
        case 610063190:
        case 610063260:
        case 610064100:
          cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
          cm.fieldEffect_ScreenMsg("MapleHighSchool/stageEff/number_00/1");
          break;
        case 610064230:
          cm.userSetFieldFloating(610064230, 4, 4, 10);
          cm.onCameraTilt(-7, 4000);
          cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
          cm.fieldEffect_ScreenMsg("MapleHighSchool/stageEff/number_00/1");
          break;
        case 610061060:
        case 610061170:
        case 610062150:
        case 610062260:
        case 610062330:
        case 610063050:
        case 610063120:
        case 610063210:
        case 610063280:
        case 610064120:
          cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
          cm.fieldEffect_ScreenMsg("MapleHighSchool/stageEff/number_00/2");
          break;
        case 610064250:
          cm.userSetFieldFloating(610064250, 2, 2, 10);
          cm.onCameraTilt(-4, 4000);
          cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
          cm.fieldEffect_ScreenMsg("MapleHighSchool/stageEff/number_00/2");
          break;
        case 610063300:
          cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
          cm.fieldEffect_ScreenMsg("MapleHighSchool/stageEff/number_00/3");
          break;
        case 610064270:
          cm.userSetFieldFloating(610064270, 2, 2, 5);
          cm.onCameraTilt(4, 4000);
          cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
          cm.fieldEffect_ScreenMsg("MapleHighSchool/stageEff/number_00/3");
          break;
        case 610063320:
          cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
          cm.fieldEffect_ScreenMsg("MapleHighSchool/stageEff/number_00/4");
          break;
        case 610064290:
          cm.userSetFieldFloating(610064290, 4, 4, 10);
          cm.onCameraTilt(-7, 4000);
          cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
          cm.fieldEffect_ScreenMsg("MapleHighSchool/stageEff/number_00/4");
          break;
        case 610063340:
          cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
          cm.fieldEffect_ScreenMsg("MapleHighSchool/stageEff/number_00/5");
          break;
        case 610064310:
          cm.userSetFieldFloating(610064310, 3, 3, 10);
          cm.onCameraTilt(2, 4000);
          cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
          cm.fieldEffect_ScreenMsg("MapleHighSchool/stageEff/number_00/5");
          break;
        case 610063360:
          cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
          cm.fieldEffect_ScreenMsg("MapleHighSchool/stageEff/number_00/6");
          break;
        case 610063380:
          cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
          cm.fieldEffect_ScreenMsg("MapleHighSchool/stageEff/number_00/7");
          break;
        case 610061080:
        case 610061190:
        case 610062030:
        case 610062170:
        case 610062280:
        case 610062350:
        case 610063070:
        case 610063140:
        case 610063230:
        case 610063400:
        case 610064140:
          cm.fieldEffect_ScreenMsg("aswan/stageEff/final");
          break;
        case 610064330:
          cm.userSetFieldFloating(610064330, 5, 5, 5);
          cm.onCameraTilt(-2, 4000);
          cm.fieldEffect_ScreenMsg("aswan/stageEff/final");
          break;
        case 610064020:
          cm.spawnMobLimit(9480326, 1, 323, 284, 1);
          break;
      }
      cm.dispose();
    }
  }
}