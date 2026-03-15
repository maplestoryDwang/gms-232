var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNext("#fs10#喂……喂……", 1012110);
    } else {
      if (status === V++) {
        cm.sendNextS("嗯？好像有人在叫我……");
      } else {
        if (status === V++) {
          cm.sendNext("嗯……能听到我的声音吗……", 1012110);
        } else {
          if (status === V++) {
            cm.sendNext("我是在魔法密林进行研究的巴缇博士的女儿桉。", 1012110);
          } else {
            if (status === V++) {
              cm.sendNext("我有件事想请你帮忙…你能答应我吗？", 1012110);
            } else {
              if (status === V++) {
                cm.askYesNo("那么…请过来找我……拜托了……\r\n#r（接受时，移动到魔法密林的桉的前面。）", 1012110);
              } else {
                if (status === V++) {
                  cm.sendNext("我在魔法密林等你。", 1012110);
                } else if (status === V++) {
                  cm.warp(101000000, 4);
                  cm.forceStartQuest(37151);
                  cm.OnStartNavigation(101000000, 1, "1012110", 37151);
                  cm.dispose();
                }
              }
            }
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;