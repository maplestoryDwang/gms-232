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
      cm.sendNormalTalk_Bottom("#face0##b素笑，时间太晚了。快点回去吧。别让其他人担心。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face8#嗯！……玄山派应该不会又什么事吧，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "？是我在瞎担心吧？", 36, 9401277, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0##b就算水受到了污染……\r\n玄山派位于水的源头，应该不会有什么事。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
        } else {
          if (status === v++) {
            cm.askAcceptDecline_Bottom("#face1#嘿嘿，是吧？不过快点回去吧！不然要错过晚饭了。\r\n\r\n#r（※接受时，自动移动到任务地图。）", 36, 9401277, 1);
          } else if (status === v++) {
            cm.forceStartQuest(65934, '');
            cm.dispose();
            cm.openNpc("墨玄_返回玄山派");
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}