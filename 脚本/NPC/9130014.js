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
      cm.askMenu("#b织田军忍者的偷窥日记#k\r\n在这本书里，织田信长的忍者们用来记录了自己所刺探到的内情。\r\n#b#L0#查看织田3忍的介绍#l\r\n#b#L1#查看记录#k#l\r\n#r#L2#关闭#l#k");
    } else {
      if (status === V++) {
        if (U == 0) {} else {
          if (U == 1) {} else {
            if (U == 2) {}
          }
        }
      } else if (status === V++) {
        cm.sendNextSNoESC_Bottom("接下来要做的，就是破坏位于正殿地下的祭坛，彻底阻止仪式的进行……最好还是加快速度吧。");
      } else {
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;