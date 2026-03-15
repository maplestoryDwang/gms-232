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
      cm.askMenu("在埃欧雷制作的花朵形状的音乐盒。貌似能演奏出多种舒缓悦耳的音乐哦……#b\r\n#L0#risingStar#l #b\r\n#L1#MoonlightShadow#l #b\r\n#L2#When The Morning Comes#l #b\r\n#L3#Flying In A Blue Dream#l #b\r\n#L4#Fantasia#l#b\r\n#L5#FairyTalediffvers#l #b\r\n#L6#Minar'sDream#l  #b\r\n#L7#ElinForest#l #b\r\n#L8#TimeTemple#l #b\r\n#L9#QueensGarden#l", 0, 2411017);
    } else {
      if (U == 0) {
        cm.effect_PlayMusic("BgmEvent2.img/risingStar2");
      } else {
        if (U == 1) {
          cm.effect_PlayMusic("Bgm12.img/MoonlightShadow");
        } else {
          if (U == 2) {
            cm.effect_PlayMusic("Bgm02.img/WhenTheMorningComes");
          } else {
            if (U == 3) {
              cm.effect_PlayMusic("Bgm06.img/FlyingInABlueDream");
            } else {
              if (U == 4) {
                cm.effect_PlayMusic("Bgm07.img/Fantasia");
              } else {
                if (U == 5) {
                  cm.effect_PlayMusic("Bgm09.img/FairyTalediffvers");
                } else {
                  if (U == 6) {
                    cm.effect_PlayMusic("Bgm13.img/Minar'sDream");
                  } else {
                    if (U == 7) {
                      cm.effect_PlayMusic("Bgm15.img/ElinForest");
                    } else if (U == 8) {
                      cm.effect_PlayMusic("Bgm16.img/TimeTemple");
                    } else {
                      cm.effect_PlayMusic("Bgm18.img/QueensGarden");
                    }
                  }
                }
              }
            }
          }
        }
      }
      cm.dispose();
    }
  }
}