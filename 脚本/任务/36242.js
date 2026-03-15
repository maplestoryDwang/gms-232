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
      cm.sendNormalTalk_Bottom("#face0#（要想查清铃铛的事，恐怕要先去一个比这里更宽广的地方。）", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#（有许多冒险家都在冒险岛世界旅行，搞不好会有人知道铃铛的事，应该也有很多机会能摇响铃铛。）", 36, 3005100, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face1#（要想去冒险岛世界，就要经过万神殿吧？）", 36, 3005100, true, true, 1);
        } else {
          if (status === v++) {
            cm.askAcceptDecline_Bottom("#face0#那就去万神殿吧？\r\n\r\n#r（※自动前往任务地图。）#k", 37, 3005100, 1);
          } else if (status === v++) {
            cm.forceStartQuest(36242, '');
            cm.dispose();
            cm.warp(993165539, 0, false);
          }
        }
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
      cm.sendNormalTalk_Bottom("#face0#是阿尼玛种族的人来了啊。", 36, 3000001, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#欢迎，我是诺巴的大神官狼牙。", 36, 3000001, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("你好，我是啦啦。", 56, 0, true, true, 1);
        } else if (status === v++) {
          cm.forceCompleteQuest(36242);
          cm.dispose();
        }
      }
    }
  }
}