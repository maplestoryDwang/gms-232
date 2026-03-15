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
      cm.sendNormalTalk_Bottom("#face0#有什么事吗？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#临时收监的罪犯趁着监管的漏洞逃走了。", 36, 3004907, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face1#什么？还真是什么事都有啊。.", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#大部分都是些小喽啰，无需太担心，\r\n上级的指示是，只要凑齐人数就再抓回来。", 36, 3004907, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#是啊，真是不幸中的万幸。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
            } else {
              if (status === v++) {
                cm.askAcceptDecline_Bottom("#face0#外面会有#b管理员#k等着你，\r\n你可以从他那里拿到#r怨恨石#k。", 36, 3004907, 1);
              } else if (status === v++) {
                cm.forceStartQuest(39401, '');
                cm.OnStartNavigation(410000416, 0, "3004952", 39401);
                cm.dispose();
              }
            }
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
      cm.sendNormalTalk_Bottom("#face0#你来啦？", 36, 3004908, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#这边就只有我吗？", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#目前还是如此，你一个人应付得来吗？", 36, 3004908, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#当然。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
          } else if (status === v++) {
            cm.forceCompleteQuest(39401);
            cm.updateInfoQuest(39400, '51=h0');
            cm.dispose();
          }
        }
      }
    }
  }
}