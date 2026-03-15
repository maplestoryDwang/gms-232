var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  var V = "action" + (cm.getMapId() - 800024200);
  eval(V)(f, W, U);
}
function action0(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.updateInfoQuest(58773, 'stage=1');
      cm.sendNormalTalk("干得漂亮！\r\n很简单吧？", 5, 9111018, false, true);
    } else if (status === V++) {
      cm.warp(800024220, 0, false);
      cm.dispose();
    }
  }
}
function action20(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.updateInfoQuest(58773, 'stage=2');
      cm.sendNormalTalk("呵呵，你找到感觉了呢。\r\n就是这样。", 5, 9111018, false, true);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(800024240, 0, false);
    }
  }
}
function action40(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.updateInfoQuest(58773, "stage=3");
      cm.sendNormalTalk("噢！眼力很不错嘛。", 5, 9111018, false, true);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(800024260, 0, false);
    }
  }
}
function action60(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.updateInfoQuest(58773, "stage=4");
      cm.sendNormalTalk("噢噢噢！现在就剩最后一道题目了。", 5, 9111018, false, true);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(800024280, 0, false);
    }
  }
}
function action80(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.updateInfoQuest(58773, "stage=5");
      cm.sendNormalTalk('你真棒。祝贺你。', 5, 9111018, false, true);
    } else if (status === V++) {
      cm.dispose();
      cm.warp(800024003, 0, false);
    }
  }
}