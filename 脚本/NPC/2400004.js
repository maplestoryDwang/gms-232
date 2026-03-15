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
      cm.dispose();
      cm.openNpc(9110002, "美容美发_神之子出生地");
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.askYesNo("使用皇家理发券，可以随机更换发型。你真的要使用#b#t05150040##k和#b#t4009450##k，更换发型吗？", 0, 2400004);
  } else if (status === V++) {
    cm.dispose();
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu("请选择需要护理的角色。\r\n#b#L0# 神之子阿尔法#l\r\n#b#L1# 神之子贝塔#l\r\n#b#L2# 神之子阿尔法 + 神之子贝塔#l", 0, 2400004);
  } else if (status === V++) {
    cm.dispose();
  }
}
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu("你好，我是整形手术领域的艺术家#b#p9201148##k。如果你有#b#t05152053##k和#b#t4009450##k，我可以为你做脸部整形手术。怎么样？你想让自己的脸变得完美无瑕吗？\r\n#b#L0# 换脸(使用皇家整容院优惠券)#l", 0, 2400004);
  } else if (status === V++) {
    cm.dispose();
  }
}
function action分支3(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu("请选择需要护理的角色。\r\n#b#L0# 神之子阿尔法#l\r\n#b#L1# 神之子贝塔#l\r\n#b#L2# 神之子阿尔法 + 神之子贝塔#l", 0, 2400004);
  } else if (status === V++) {
    cm.dispose();
  }
}