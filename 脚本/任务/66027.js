var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk("你好，#e#ho##k#n！\r\n帮助新的墨玄勇士快速成长的<素笑的特别支援>活动正在进行中。", 0, 9401381, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("参加方法很简单！用活动期间创建的墨玄角色每次#b达到目标等级和完成任务#k时，就能获得丰厚的礼物。千万不要错过这次暴风成长的机会！\r\n", 0, 9401381, true, true);
      } else if (status === v++) {
        cm.sendNormalTalk("只有#b新角色#k才能参加活动！各个任务奖励#b每个世界只能领取一次#k！千万不要忘记！\r\n\r\n#e<礼物目录>#n\r\n#e\r\n#i2632936#:#t2632936##r (达到30级以及达成任务条件时)#k#e\r\n#i2632946#:#t2632946##r (达到100级以及达成任务条件时)#k#e\r\n#i2632947#:#t2632947##r (达到150级以及达成任务条件时)#k#e\r\n#i2632948#:#t2632948##r (达到170级以及达成任务条件时)#k#e\r\n#i2632949#:#t2632949##r (达到200级以及达成任务条件时)#k#e\r\n#i2632950#:#t2632950##r (达到205级以及达成任务条件时)#k#e\r\n#i2632951#:#t2632951##r (达到210级以及达成任务条件时)#k#e\r\n#i2632952#:#t2632952##r (达到215级时)#k#e\r\n#i2632953#:#t2632953##r (达到220级以及达成任务条件时)#k#e", 0, 9401381, true, false);
        cm.dispose();
      }
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}