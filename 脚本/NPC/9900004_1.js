var a = 0;
var List = Array(Array("#fEffect/CharacterEff/1112905/0/0# #e#d强化品级", 0, 1, 1022003), Array("#fEffect/CharacterEff/1112905/0/0# #d装备制作", 24, 1), Array("#fEffect/CharacterEff/1112905/0/0# #d时装强化", 0, 1, 9000069), Array("#fEffect/CharacterEff/1112905/0/0# #d武器破功", 1000, 1), Array("#fEffect/CharacterEff/1112905/0/0# #d蜡笔潜能", 1001, 1), Array("#fEffect/CharacterEff/1112905/0/0# #d翅膀进阶", 500, 1, 9900004), Array("#fEffect/CharacterEff/1112905/0/0# #d图腾合成", 0, 1, 9201131), Array("#fEffect/CharacterEff/1112905/0/0# #r[NEW]#d口袋装备极品合成", 2, 1, 9201131));
var text;
function start() {
  a = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1) {
    cm.dispose();
  } else {
    if (f == 1) {
      a++;
    } else {
      a--;
    }
    if (a == -1) {
      cm.dispose();
    } else {
      if (a == 0) {
        text = '';
        for (var V = 0; V < 2; V++) {
          ListFor(V);
        }
        text += "\r\n\r\n\r\n#e#b#fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0# 提升面板 #fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0##n#k\r\n";
        cm.askMenu(text);
      } else {
        if (a == 1) {
          var w = List[U][1];
          cm.dispose();
          var N = 9900003;
          if (List[U][3] != null) {
            N = List[U][3];
          }
          cm.openNpc(N, w);
        }
      }
    }
  }
}
function ListFor(f) {
  switch (f) {
    case 1:
      text += "#e#d#fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0##fEffect/ItemEff/1048000/0/0##n#k\r\n";
      break;
  }
  var W = 0;
  for (var U = 0; U < List.length; U++) {
    if (List[U][2] == f) {
      if (W == 2) {
        text += "  #L" + U + '#' + List[U][0] + "#l\r\n";
        W = 0;
      } else {
        text += "  #L" + U + '#' + List[U][0] + '#l';
        W++;
      }
    }
  }
  text += '#e';
}
var status = -1;