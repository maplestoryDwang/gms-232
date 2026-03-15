var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  f == 1 ? status++ : status--;
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++)
    cm.dispose();
  else if (status === V++) {
    if (cm.getNumberFromQuestInfo(63049, 'speak') == 2) {
      cm.updateInfoQuest(63049, 'speak=3;exp=1');
      var w = '#fc0xff996699#我没想撒谎。我本来是打算在你需要我时嘭！地一声跳出来。\r\n以后你有需要时随时来找我吧！';
    } else if (cm.getNumberFromQuestInfo(63055, 'speak') == 1) {
      cm.updateInfoQuest(63055, 'speak=2;exp=1');
      var w = '#fc0xff996699#这里是最后一个地区。返回战斗之地，从头开始仔仔细细地搜索一下怎么样？';
    } else
      var w = '#fc0xff996699##h0#~什么事？';
    if (cm.isQuestFinished(63027)) {
      if (cm.getMapId() == 867113100) {
        w += '\r\n#L2##b我想回到之前所在的世界#l';
      } else {
        w += '\r\n#L0##b我想去巨门所在的#m867113100##l';
      }
    }
    if (cm.isQuestFinished(63049)) {
      w += '\r\n#L1##b我想去下个世界';
    }
    w += '\r\n#L3##b我想回到冒险岛世界#l\r\n#L99##b没事。#l';
    cm.askMenu(w, 4, cm.getNpc());
  } else if (status === V++) {
    if (selectionLog[1] == 0)
      cm.askYesNo('#fc0xff996699#要我现在送你去#m867113100#吗？\r\n#b(点击接受后将移动到#m867113100#)', 4, 9400206);
    else if (selectionLog[1] == 1) {
      var N = cm.getMapId() == 867113500 ? 867113200 : cm.getMapId() + 100;
      cm.askYesNo('#fc0xff996699#要我现在送你去#m' + N + '#吗？\r\n#b(点击接受后将移动到#m' + N + '#)', 4, 9400206);
    } else if (selectionLog[1] == 2) {
      var N = cm.getNumberFromQuestCustomData(63025);
      cm.askYesNo('#fc0xff996699#要我现在送你去#m' + N + '#吗？\r\n#b(点击接受后将移动到#m' + N + '#)', 4, 9400206);
    } else if (selectionLog[1] == 3)
      cm.askMenu('#fc0xff996699#你不也知道嘛，要返回冒险岛世界就得先开启位于#m867113100#的巨门……\r\n#b#e#L0#可是我好想回去！#n\r\n#L1#唉……真没办法！', 4, cm.getNpc());
    else if (selectionLog[1] == 99) {
      cm.sendNormalTalk('#fc0xff996699#你想留在这个世界了吗？', 4, 9400206, false, false);
      cm.dispose();
    }
  } else if (status === V++) {
    if (selectionLog[1] == 0) {
      cm.dispose();
      cm.setNumberForQuestCustomData(63025, cm.getMapId());
      cm.warp(867113100, 0, false);
    } else if (selectionLog[1] == 1) {
      cm.dispose();
      var N = cm.getMapId() == 867113500 ? 867113200 : cm.getMapId() + 100;
      if (cm.getNumberFromQuestInfo(63071, 'wall') >= 5) {
        if (N == 867113300)
          N += 2;
        else if (N == 867113402) {
          N -= 2;
        }
      }
      if (N == 867113200) {
        cm.addNumberForQuestInfo(63098, 'turn', 1);
      }
      cm.warp(N, 0, false);
    } else if (selectionLog[1] == 2) {
      cm.dispose();
      var N = cm.getNumberFromQuestCustomData(63025);
      cm.warp(N, 0, false);
    } else if (selectionLog[2] == 1) {
      cm.sendNormalTalk('#fc0xff996699#再加把劲寻找钥匙吧！', 4, cm.getNpc(), false, true);
      cm.dispose();
    } else {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    }
  } else if (status === V++) {
    cm.inGameDirectionEvent_AskAnswerTime(500);
    cm.effect_PlayMusic('SoundEff.img/blackHeaven/droping2');
    cm.effect_NormalSpeechBalloon('#fc0xff996699#啊！#h0#，当心头顶！', 0, 0, 0, 2000, 0, 0, 0, 0, 4, cm.getNpc(), cm.getPlayer().getId());
  } else if (status === V++) {
    cm.inGameDirectionEvent_AskAnswerTime(800);
    cm.effect_OnUserEff('Effect/OnUserEff.img/PL_AfterLand/dropApple');
  } else if (status === V++) {
    cm.inGameDirectionEvent_MoveAction(4);
    cm.emotion(18, 3000);
    cm.inGameDirectionEvent_AskAnswerTime(2000);
    cm.effect_PlayMusic('SoundEff.img/blackHeaven/koong');
    cm.effect_OnUserEff('Effect/OnUserEff.img/PL_AfterLand/hit');
  } else if (status === V++) {
    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
    cm.inGameDirectionEvent_AskAnswerTime(500);
  } else if (status === V++) {
    cm.fieldEffect_PlayFieldSound('Sound/Game.img/Tombstone', 100);
    cm.inGameDirectionEvent_AskAnswerTime(1600);
  } else if (status === V++) {
    cm.setNumberForQuestCustomData(63025, cm.getMapId());//需要记录离开的地点
    cm.setStandAloneMode(false);
    cm.dispose();
    var u = cm.getNumberFromQuestInfo(63099, 'enterQ');
    if (u == 1)
      cm.warp(867113603, 1, true);
    else if (u == 2)
      cm.warp(867113613, 2, true);
    else if (u == 3) {
      cm.warp(867113623, 1, true);
    } else {
      cm.warp(867113633, 1, true);
    }
    cm.setInGameDirectionMode(false, true, false);
  }
}