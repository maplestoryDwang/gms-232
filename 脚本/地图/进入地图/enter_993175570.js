var status = -1;
var selectionLog = [];
function start() {
  if (cm.getQuestStatus(100441) == 1) {
    action(1, 0, 0);
  } else {
    if (cm.getQuestStatus(100442) == 1) {
      cm.OnStartNavigation(993175570, 0, "pt_go993175400", 0);
      cm.dispose();
    } else {
      cm.dispose();
      return;
    }
  }
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
      cm.sendNormalTalk_Bottom("#face0#顺着烟囱上去的话，就能看到#b严禁出入的房间#k。\r\n中途可能会有#b烟气#k，上去时要小心。", 37, 9062255, false, true, 1);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("……不过，我可以请教一个问题吗？", 57, 0, true, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#当然，说吧。", 37, 9062255, true, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("为什么从刚刚开始你都不说敬语呢……我们不是第一次见面吗？", 57, 0, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#我年龄肯定比你大。\r\n你要是不开心，也可以不说敬语。这我还是能接受的。", 37, 9062255, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("……好吧。（那我也不说敬语好了）", 57, 0, true, true, 1);
              } else if (status === V++) {
                cm.OnStartNavigation(993175570, 0, "pt_go993175550", 0);
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}