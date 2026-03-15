var status = -1;
var selectionLog = [];
function start(v, a, D) {
  if (status == 0 && v == 0) {
    cm.dispose();
    return;
  }
  if (v == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = D;
  var m = -1;
  if (status <= m++) {
    cm.dispose();
  } else if (status == m++) {
    cm.forceStartQuest();
    cm.dispose();
  }
}
function stage0(v, a, D) {
  if (status == 0 && v == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = D;
  var m = -1;
  if (status <= m++) {
    cm.dispose();
  } else {
    if (status == m++) {
      cm.askYesNo("");
    } else if (status == m++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(v, a, D) {
  if (status == 0 && v == 0) {
    cm.dispose();
    return;
  }
  if (v == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = D;
  var m = -1;
  if (status <= m++) {
    cm.dispose();
  } else {
    if (status == m++) {
      cm.askAcceptDecline("让我瞧瞧，你把5张#b#t4033924##k全部找回来啦。那你做好听取相关说明的准备了吗？", 0, 2140000);
    } else {
      if (status === m++) {
        cm.sendNormalTalk("在#b#t1032205##k上使用#b#t2432013##k后，#b#t1032219##k就恢逐渐复原，但这需要一个过程。总共需要进行5次复原，如果成功的话，你就能获得蕴含神之力的#b#t1032219##k。", 1, 2140000, false, true, 0);
      } else {
        if (status === m++) {
          cm.sendNormalTalk("与遗忘之神话项链相关的道具如下。\r\n#b#t1032205##k : #i1032205:# \r\n#b#t1032206##k : #i1032206:# \r\n#b#t1032207##k : #i1032207:# \r\n#b#t1032208##k : #i1032208:# \r\n#b#t1032209##k : #i1032209:# \r\n#b#t1032219##k : #i1032219:#", 1, 2140000, true, true, 0);
        } else {
          if (status === m++) {
            cm.sendNormalTalk("我会给你#b#t1032205##k，请试着复原#b#t1032219##k吧。", 1, 2140000, true, true, 0);
          } else if (status === m++) {
            cm.forceCompleteQuest(52840);
            cm.gainItem(1032205, 1);
            cm.gainItem(4033924, -5);
            cm.dispose();
          }
        }
      }
    }
  }
}