var status = -1;
var selectionLog = [];

function action(e, c, b) {
    if (status == 0 && e == 0) {
        cm.dispose();
        return
    }
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.dispose();
            var d = cm.getMapId();
            if (em.getNumberProperty("clear" + d) == 1) {
                return
            }
            cm.playerMessage(-1, "副本主人出场了。");
            cm.fieldEffect_ScreenMsg("mirrorDungeon/start");
            if (d == 321116000) {
                cm.spawnMobLimit(2600006, 1, 377, 2, 100);
                cm.spawnMobLimit(2600006, 1, -131, 392, 100);
                cm.spawnMobLimit(2600006, 1, -401, 392, 100);
                cm.spawnMobLimit(2600006, 1, -289, 392, 100);
                cm.spawnMobLimit(2600006, 1, 118, 392, 100);
                cm.spawnMobLimit(2600006, 1, -19, 392, 100);
                cm.spawnMobLimit(2600006, 1, -230, -118, 100);
                cm.spawnMobLimit(2600006, 1, -177, -118, 100);
                cm.spawnMobLimit(2600006, 1, -361, -118, 100);
                cm.spawnMobLimit(2600006, 1, -205, -118, 100);
                cm.spawnMobLimit(2600006, 1, -92, -118, 100);
                cm.spawnMobLimit(2600006, 1, 229, 2, 100);
                cm.spawnMobLimit(2600006, 1, 69, -58, 100);
                cm.spawnMobLimit(2600006, 1, 250, 392, 100);
                cm.spawnMobLimit(2600006, 1, -671, 332, 100);
                cm.spawnMobLimit(2600006, 1, 375, 392, 100);
                cm.spawnMobLimit(2600006, 1, -816, 332, 100);
                cm.spawnMobLimit(2600007, 1, -87, 392, 100);
                cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                cm.updateMirrorDungeonBoss(1, 2600007)
            } else {
                if (d == 321126000) {
                    cm.spawnMobLimit(2600010, 1, 1005, 422, 100);
                    cm.spawnMobLimit(2600010, 1, 746, 422, 100);
                    cm.spawnMobLimit(2600010, 1, 1196, 422, 100);
                    cm.spawnMobLimit(2600010, 1, 572, 422, 100);
                    cm.spawnMobLimit(2600010, 1, 359, 422, 100);
                    cm.spawnMobLimit(2600012, 1, 903, -58, 100);
                    cm.spawnMobLimit(2600012, 1, 1119, -58, 100);
                    cm.spawnMobLimit(2600012, 1, 681, -58, 100);
                    cm.spawnMobLimit(2600012, 1, 536, -58, 100);
                    cm.spawnMobLimit(2600012, 1, 382, -58, 100);
                    cm.spawnMobLimit(2600011, 1, 1170, -418, 100);
                    cm.spawnMobLimit(2600011, 1, 995, -418, 100);
                    cm.spawnMobLimit(2600011, 1, 831, -418, 100);
                    cm.spawnMobLimit(2600011, 1, 701, -418, 100);
                    cm.spawnMobLimit(2600011, 1, 544, -418, 100);
                    cm.spawnMobLimit(2600011, 1, 381, -418, 100);
                    cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                    cm.updateMirrorDungeonBoss(1, 2600015);
                    cm.spawnMobLimit(2600015, 1, 906, 422, 100);
                    cm.spawnMobLimit(2600012, 1, 1007, -58, 100);
                    cm.spawnMobLimit(2600010, 1, 1455, 422, 100);
                    cm.spawnMobLimit(2600010, 1, 1412, 422, 100)
                } else {
                    if (d == 321136000) {
                        cm.spawnMobLimit(2600017, 1, -87, -238, 100);
                        cm.spawnMobLimit(2600017, 1, 622, -238, 100);
                        cm.spawnMobLimit(2600017, 1, 197, -238, 100);
                        cm.spawnMobLimit(2600017, 1, -392, -238, 100);
                        cm.spawnMobLimit(2600017, 1, 88, -238, 100);
                        cm.spawnMobLimit(2600016, 1, -693, -238, 100);
                        cm.spawnMobLimit(2600016, 1, 392, -238, 100);
                        cm.spawnMobLimit(2600016, 1, -283, -238, 100);
                        cm.spawnMobLimit(2600026, 1, -961, -238, 100);
                        cm.spawnMobLimit(2600027, 1, 248, -703, 100);
                        cm.spawnMobLimit(2600027, 1, 339, -658, 100);
                        cm.spawnMobLimit(2600026, 1, 698, -658, 100);
                        cm.spawnMobLimit(2600026, 1, 67, -764, 100);
                        cm.spawnMobLimit(2600026, 1, 574, -658, 100);
                        cm.spawnMobLimit(2600026, 1, -546, -238, 100);
                        cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                        cm.updateMirrorDungeonBoss(1, 2600022);
                        cm.spawnMobLimit(2600022, 1, 37, -238, 100);
                        cm.spawnMobLimit(2600027, 1, 1005, -658, 100);
                        cm.spawnMobLimit(2600027, 1, 923, -238, 100)
                    } else {
                        if (d == 321146000) {
                            cm.spawnMobLimit(2600029, 1, 853, -374, 100);
                            cm.spawnMobLimit(2600029, 1, 754, -374, 100);
                            cm.spawnMobLimit(2600029, 1, 28, -373, 100);
                            cm.spawnMobLimit(2600029, 1, 250, -384, 100);
                            cm.spawnMobLimit(2600029, 1, 627, -383, 100);
                            cm.spawnMobLimit(2600029, 1, 128, 39, 100);
                            cm.spawnMobLimit(2600029, 1, 749, 45, 100);
                            cm.spawnMobLimit(2600029, 1, 385, 35, 100);
                            cm.spawnMobLimit(2600028, 1, 1095, -373, 100);
                            cm.spawnMobLimit(2600028, 1, -79, -373, 100);
                            cm.spawnMobLimit(2600028, 1, 127, -380, 100);
                            cm.spawnMobLimit(2600028, 1, 508, -384, 100);
                            cm.spawnMobLimit(2600028, 1, 859, 45, 100);
                            cm.spawnMobLimit(2600028, 1, 655, 39, 100);
                            cm.spawnMobLimit(2600028, 1, 466, 35, 100);
                            cm.spawnMobLimit(2600028, 1, 263, 35, 100);
                            cm.spawnMobLimit(2600028, 1, 3, 46, 100);
                            cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                            cm.updateMirrorDungeonBoss(1, 2600030);
                            cm.spawnMobLimit(2600030, 1, 395, -384, 100)
                        } else {
                            if (d == 322016000) {
                                cm.spawnMobLimit(2600104, 1, 56, 275, 100);
                                cm.spawnMobLimit(2600104, 1, -112, 275, 100);
                                cm.spawnMobLimit(2600104, 1, -736, 226, 100);
                                cm.spawnMobLimit(2600104, 1, -162, -145, 100);
                                cm.spawnMobLimit(2600104, 1, -742, -85, 100);
                                cm.spawnMobLimit(2600104, 1, -590, -85, 100);
                                cm.spawnMobLimit(2600104, 1, -499, -85, 100);
                                cm.spawnMobLimit(2600104, 1, -1055, 275, 100);
                                cm.spawnMobLimit(2600104, 1, -549, -385, 100);
                                cm.spawnMobLimit(2600104, 1, -706, -385, 100);
                                cm.spawnMobLimit(2600104, 1, -389, -385, 100);
                                cm.spawnMobLimit(2600104, 1, -877, 275, 100);
                                cm.spawnMobLimit(2600104, 1, -330, -145, 100);
                                cm.spawnMobLimit(2600104, 1, -164, -385, 100);
                                cm.spawnMobLimit(2600104, 1, 20, -85, 100);
                                cm.spawnMobLimit(2600104, 1, -580, 215, 100);
                                cm.spawnMobLimit(2600104, 1, -254, 275, 100);
                                cm.spawnMobLimit(2600104, 1, -399, 249, 100);
                                cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                cm.updateMirrorDungeonBoss(1, 2600105);
                                cm.spawnMobLimit(2600105, 1, -337, 275, 100)
                            } else {
                                if (d == 322026000) {
                                    cm.spawnMobLimit(2600110, 1, 12, 215, 100);
                                    cm.spawnMobLimit(2600110, 1, -136, 215, 100);
                                    cm.spawnMobLimit(2600110, 1, 770, 275, 100);
                                    cm.spawnMobLimit(2600110, 1, 504, 215, 100);
                                    cm.spawnMobLimit(2600110, 1, 480, 215, 100);
                                    cm.spawnMobLimit(2600110, 1, 464, 215, 100);
                                    cm.spawnMobLimit(2600110, 1, 822, 275, 100);
                                    cm.spawnMobLimit(2600110, 1, 910, 275, 100);
                                    cm.spawnMobLimit(2600110, 1, 656, 275, 100);
                                    cm.spawnMobLimit(2600110, 1, -627, 273, 100);
                                    cm.spawnMobLimit(2600110, 1, 120, 215, 100);
                                    cm.spawnMobLimit(2600110, 1, -85, 215, 100);
                                    cm.spawnMobLimit(2600110, 1, -225, 215, 100);
                                    cm.spawnMobLimit(2600110, 1, -295, 215, 100);
                                    cm.spawnMobLimit(2600110, 1, -509, 215, 100);
                                    cm.spawnMobLimit(2600110, 1, 424, 215, 100);
                                    cm.spawnMobLimit(2600110, 1, 872, 275, 100);
                                    cm.spawnMobLimit(2600110, 1, 228, 215, 100);
                                    cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                    cm.updateMirrorDungeonBoss(1, 2600111);
                                    cm.spawnMobLimit(2600111, 1, 823, 275, 100)
                                } else {
                                    if (d == 323026000) {
                                        cm.spawnMobLimit(2600212, 1, 987, 95, 100);
                                        cm.spawnMobLimit(2600212, 1, 378, 185, 100);
                                        cm.spawnMobLimit(2600212, 1, 829, 185, 100);
                                        cm.spawnMobLimit(2600213, 1, 1176, 185, 100);
                                        cm.spawnMobLimit(2600213, 1, 1075, -262, 100);
                                        cm.spawnMobLimit(2600213, 1, 939, -84, 100);
                                        cm.spawnMobLimit(2600212, 1, 819, 95, 100);
                                        cm.spawnMobLimit(2600212, 1, 1170, -84, 100);
                                        cm.spawnMobLimit(2600212, 1, 630, 185, 100);
                                        cm.spawnMobLimit(2600213, 1, 1710, 185, 100);
                                        cm.spawnMobLimit(2600213, 1, 1333, -262, 100);
                                        cm.spawnMobLimit(2600213, 1, 797, -84, 100);
                                        cm.spawnMobLimit(2600212, 1, 1212, 95, 100);
                                        cm.spawnMobLimit(2600212, 1, 148, 185, 100);
                                        cm.spawnMobLimit(2600212, 1, 1467, 185, 100);
                                        cm.spawnMobLimit(2600213, 1, 1394, 95, 100);
                                        cm.spawnMobLimit(2600213, 1, 911, -262, 100);
                                        cm.spawnMobLimit(2600213, 1, 1347, -84, 100);
                                        cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                        cm.updateMirrorDungeonBoss(1, 2600214);
                                        cm.spawnMobLimit(2600214, 1, 1706, 185, 100)
                                    } else {
                                        if (d == 323036000) {
                                            cm.spawnMobLimit(2600221, 1, -434, -85, 100);
                                            cm.spawnMobLimit(2600221, 1, -47, 95, 100);
                                            cm.spawnMobLimit(2600221, 1, -373, 95, 100);
                                            cm.spawnMobLimit(2600221, 1, -721, -145, 100);
                                            cm.spawnMobLimit(2600221, 1, -883, 95, 100);
                                            cm.spawnMobLimit(2600221, 1, -337, -85, 100);
                                            cm.spawnMobLimit(2600221, 1, 92, 95, 100);
                                            cm.spawnMobLimit(2600221, 1, -252, 95, 100);
                                            cm.spawnMobLimit(2600221, 1, -846, -145, 100);
                                            cm.spawnMobLimit(2600221, 1, -1076, 95, 100);
                                            cm.spawnMobLimit(2600221, 1, 609, 95, 100);
                                            cm.spawnMobLimit(2600221, 1, -574, -85, 100);
                                            cm.spawnMobLimit(2600221, 1, 221, 95, 100);
                                            cm.spawnMobLimit(2600221, 1, -559, 95, 100);
                                            cm.spawnMobLimit(2600221, 1, -970, -145, 100);
                                            cm.spawnMobLimit(2600221, 1, -756, 95, 100);
                                            cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                            cm.updateMirrorDungeonBoss(1, 2600222);
                                            cm.spawnMobLimit(2600222, 1, 288, 95, 100)
                                        } else {
                                            if (d == 324016000) {
                                                cm.spawnMobLimit(2600302, 1, 1285, 171, 100);
                                                cm.spawnMobLimit(2600302, 1, 1060, -164, 100);
                                                cm.spawnMobLimit(2600302, 1, 996, 171, 100);
                                                cm.spawnMobLimit(2600302, 1, 591, 171, 100);
                                                cm.spawnMobLimit(2600302, 1, 481, -164, 100);
                                                cm.spawnMobLimit(2600302, 1, 222, 171, 100);
                                                cm.spawnMobLimit(2600302, 1, 1285, 171, 100);
                                                cm.spawnMobLimit(2600302, 1, 1060, -164, 100);
                                                cm.spawnMobLimit(2600302, 1, 996, 171, 100);
                                                cm.spawnMobLimit(2600302, 1, 591, 171, 100);
                                                cm.spawnMobLimit(2600302, 1, 481, -164, 100);
                                                cm.spawnMobLimit(2600302, 1, 222, 171, 100);
                                                cm.spawnMobLimit(2600302, 1, 1285, 171, 100);
                                                cm.spawnMobLimit(2600302, 1, 1060, -164, 100);
                                                cm.spawnMobLimit(2600302, 1, 996, 171, 100);
                                                cm.spawnMobLimit(2600302, 1, 591, 171, 100);
                                                cm.spawnMobLimit(2600302, 1, 481, -164, 100);
                                                cm.spawnMobLimit(2600302, 1, 222, 171, 100);
                                                cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                cm.updateMirrorDungeonBoss(1, 2600305);
                                                cm.spawnMobLimit(2600305, 1, 1012, 171, 100)
                                            } else {
                                                if (d == 324026000) {
                                                    cm.spawnMobLimit(2600310, 1, 1473, -87, 100);
                                                    cm.spawnMobLimit(2600310, 1, 1981, -627, 100);
                                                    cm.spawnMobLimit(2600310, 1, 1084, -627, 100);
                                                    cm.spawnMobLimit(2600309, 1, 942, -27, 100);
                                                    cm.spawnMobLimit(2600309, 1, 1757, -627, 100);
                                                    cm.spawnMobLimit(2600309, 1, 1287, -627, 100);
                                                    cm.spawnMobLimit(2600310, 1, 1703, -87, 100);
                                                    cm.spawnMobLimit(2600310, 1, 1981, -627, 100);
                                                    cm.spawnMobLimit(2600310, 1, 1084, -627, 100);
                                                    cm.spawnMobLimit(2600309, 1, 1088, -27, 100);
                                                    cm.spawnMobLimit(2600309, 1, 1757, -627, 100);
                                                    cm.spawnMobLimit(2600309, 1, 1287, -627, 100);
                                                    cm.spawnMobLimit(2600310, 1, 2113, -27, 100);
                                                    cm.spawnMobLimit(2600310, 1, 1821, -87, 100);
                                                    cm.spawnMobLimit(2600310, 1, 1239, -73, 100);
                                                    cm.spawnMobLimit(2600309, 1, 848, -27, 100);
                                                    cm.spawnMobLimit(2600309, 1, 1882, -87, 100);
                                                    cm.spawnMobLimit(2600309, 1, 1287, -627, 100);
                                                    cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                    cm.updateMirrorDungeonBoss(1, 2600311);
                                                    cm.spawnMobLimit(2600311, 1, 2088, -27, 100)
                                                } else {
                                                    if (d == 324056000) {
                                                        cm.spawnMobLimit(2600323, 1, 533, -250, 100);
                                                        cm.spawnMobLimit(2600324, 1, 509, 70, 100);
                                                        cm.spawnMobLimit(2600324, 1, 320, -250, 100);
                                                        cm.spawnMobLimit(2600325, 1, 60, -87, 100);
                                                        cm.spawnMobLimit(2600325, 1, 39, 70, 100);
                                                        cm.spawnMobLimit(2600325, 1, -210, 70, 100);
                                                        cm.spawnMobLimit(2600323, 1, 533, -250, 100);
                                                        cm.spawnMobLimit(2600324, 1, 509, 70, 100);
                                                        cm.spawnMobLimit(2600324, 1, 320, -250, 100);
                                                        cm.spawnMobLimit(2600325, 1, 60, -87, 100);
                                                        cm.spawnMobLimit(2600325, 1, 39, 70, 100);
                                                        cm.spawnMobLimit(2600325, 1, -210, 70, 100);
                                                        cm.spawnMobLimit(2600323, 1, 533, -250, 100);
                                                        cm.spawnMobLimit(2600324, 1, 509, 70, 100);
                                                        cm.spawnMobLimit(2600324, 1, 320, -250, 100);
                                                        cm.spawnMobLimit(2600325, 1, 60, -87, 100);
                                                        cm.spawnMobLimit(2600325, 1, 39, 70, 100);
                                                        cm.spawnMobLimit(2600325, 1, -210, 70, 100);
                                                        cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                        cm.updateMirrorDungeonBoss(1, 2600326);
                                                        cm.spawnMobLimit(2600326, 1, 453, 70, 100)
                                                    } else {
                                                        if (d == 325016000) {
                                                            cm.spawnMobLimit(2600404, 1, -658, -14, 100);
                                                            cm.spawnMobLimit(2600404, 1, 196, -14, 100);
                                                            cm.spawnMobLimit(2600405, 1, -152, -14, 100);
                                                            cm.spawnMobLimit(2600405, 1, -1090, -90, 100);
                                                            cm.spawnMobLimit(2600405, 1, -341, -374, 100);
                                                            cm.spawnMobLimit(2600405, 1, -904, -374, 100);
                                                            cm.spawnMobLimit(2600404, 1, -658, -14, 100);
                                                            cm.spawnMobLimit(2600404, 1, 196, -14, 100);
                                                            cm.spawnMobLimit(2600405, 1, -152, -14, 100);
                                                            cm.spawnMobLimit(2600405, 1, -1090, -90, 100);
                                                            cm.spawnMobLimit(2600405, 1, -341, -374, 100);
                                                            cm.spawnMobLimit(2600405, 1, -904, -374, 100);
                                                            cm.spawnMobLimit(2600404, 1, -658, -14, 100);
                                                            cm.spawnMobLimit(2600404, 1, 196, -14, 100);
                                                            cm.spawnMobLimit(2600405, 1, -152, -14, 100);
                                                            cm.spawnMobLimit(2600405, 1, -1090, -90, 100);
                                                            cm.spawnMobLimit(2600405, 1, -341, -374, 100);
                                                            cm.spawnMobLimit(2600405, 1, -904, -374, 100);
                                                            cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                            cm.updateMirrorDungeonBoss(1, 2600406);
                                                            cm.spawnMobLimit(2600406, 1, 5, -14, 100)
                                                        } else {
                                                            if (d == 325026000) {
                                                                cm.spawnMobLimit(2600410, 1, 1308, 28, 100);
                                                                cm.spawnMobLimit(2600410, 1, 1561, -272, 100);
                                                                cm.spawnMobLimit(2600411, 1, 1085, 28, 100);
                                                                cm.spawnMobLimit(2600411, 1, 749, 28, 100);
                                                                cm.spawnMobLimit(2600411, 1, 1605, 28, 100);
                                                                cm.spawnMobLimit(2600411, 1, 1144, -272, 100);
                                                                cm.spawnMobLimit(2600410, 1, 1308, 28, 100);
                                                                cm.spawnMobLimit(2600410, 1, 1561, -272, 100);
                                                                cm.spawnMobLimit(2600411, 1, 1085, 28, 100);
                                                                cm.spawnMobLimit(2600411, 1, 749, 28, 100);
                                                                cm.spawnMobLimit(2600411, 1, 1605, 28, 100);
                                                                cm.spawnMobLimit(2600411, 1, 1144, -272, 100);
                                                                cm.spawnMobLimit(2600410, 1, 1308, 28, 100);
                                                                cm.spawnMobLimit(2600410, 1, 1561, -272, 100);
                                                                cm.spawnMobLimit(2600411, 1, 1085, 28, 100);
                                                                cm.spawnMobLimit(2600411, 1, 749, 28, 100);
                                                                cm.spawnMobLimit(2600411, 1, 1605, 28, 100);
                                                                cm.spawnMobLimit(2600411, 1, 1144, -272, 100);
                                                                cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                                cm.updateMirrorDungeonBoss(1, 2600412);
                                                                cm.spawnMobLimit(2600412, 1, 1565, 28, 100)
                                                            } else {
                                                                if (d == 325036000) {
                                                                    cm.spawnMobLimit(2600418, 1, 1647, 18, 100);
                                                                    cm.spawnMobLimit(2600418, 1, 2041, 18, 100);
                                                                    cm.spawnMobLimit(2600418, 1, 1527, -282, 100);
                                                                    cm.spawnMobLimit(2600418, 1, 1243, -282, 100);
                                                                    cm.spawnMobLimit(2600418, 1, 1122, 18, 100);
                                                                    cm.spawnMobLimit(2600418, 1, 771, 18, 100);
                                                                    cm.spawnMobLimit(2600418, 1, 1647, 18, 100);
                                                                    cm.spawnMobLimit(2600418, 1, 2041, 18, 100);
                                                                    cm.spawnMobLimit(2600418, 1, 1527, -282, 100);
                                                                    cm.spawnMobLimit(2600418, 1, 1243, -282, 100);
                                                                    cm.spawnMobLimit(2600418, 1, 1122, 18, 100);
                                                                    cm.spawnMobLimit(2600418, 1, 771, 18, 100);
                                                                    cm.spawnMobLimit(2600418, 1, 1647, 18, 100);
                                                                    cm.spawnMobLimit(2600418, 1, 2041, 18, 100);
                                                                    cm.spawnMobLimit(2600418, 1, 1527, -282, 100);
                                                                    cm.spawnMobLimit(2600418, 1, 1243, -282, 100);
                                                                    cm.spawnMobLimit(2600418, 1, 1122, 18, 100);
                                                                    cm.spawnMobLimit(2600418, 1, 771, 18, 100);
                                                                    cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                                    cm.updateMirrorDungeonBoss(1, 2600419);
                                                                    cm.spawnMobLimit(2600419, 1, 2191, 18, 100)
                                                                } else {
                                                                    if (d == 326036000) {
                                                                        cm.spawnMobLimit(2600513, 1, 211, -117, 100);
                                                                        cm.spawnMobLimit(2600513, 1, -139, 214, 100);
                                                                        cm.spawnMobLimit(2600513, 1, 778, 214, 100);
                                                                        cm.spawnMobLimit(2600513, 1, -482, -28, 100);
                                                                        cm.spawnMobLimit(2600513, 1, 326, 214, 100);
                                                                        cm.spawnMobLimit(2600513, 1, 434, 63, 100);
                                                                        cm.spawnMobLimit(2600513, 1, -41, 214, 100);
                                                                        cm.spawnMobLimit(2600513, 1, 688, 214, 100);
                                                                        cm.spawnMobLimit(2600513, 1, -371, -28, 100);
                                                                        cm.spawnMobLimit(2600513, 1, 1246, 214, 100);
                                                                        cm.spawnMobLimit(2600513, 1, 541, 214, 100);
                                                                        cm.spawnMobLimit(2600513, 1, 343, -117, 100);
                                                                        cm.spawnMobLimit(2600513, 1, -247, 214, 100);
                                                                        cm.spawnMobLimit(2600513, 1, 911, 214, 100);
                                                                        cm.spawnMobLimit(2600513, 1, -210, -28, 100);
                                                                        cm.spawnMobLimit(2600513, 1, 1330, 214, 100);
                                                                        cm.spawnMobLimit(2600513, 1, 324, 63, 100);
                                                                        cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                                        cm.updateMirrorDungeonBoss(1, 2600514);
                                                                        cm.spawnMobLimit(2600514, 1, 449, 214, 100)
                                                                    } else {
                                                                        if (d == 327026000) {
                                                                            cm.spawnMobLimit(2600612, 1, -124, 1032, 100);
                                                                            cm.spawnMobLimit(2600612, 1, 45, 1032, 100);
                                                                            cm.spawnMobLimit(2600612, 1, 17, 552, 100);
                                                                            cm.spawnMobLimit(2600612, 1, -669, 1032, 100);
                                                                            cm.spawnMobLimit(2600610, 1, 287, 732, 100);
                                                                            cm.spawnMobLimit(2600610, 1, -421, 732, 100);
                                                                            cm.spawnMobLimit(2600612, 1, -124, 1032, 100);
                                                                            cm.spawnMobLimit(2600612, 1, 45, 1032, 100);
                                                                            cm.spawnMobLimit(2600612, 1, 17, 552, 100);
                                                                            cm.spawnMobLimit(2600612, 1, -669, 1032, 100);
                                                                            cm.spawnMobLimit(2600610, 1, 287, 732, 100);
                                                                            cm.spawnMobLimit(2600610, 1, -421, 732, 100);
                                                                            cm.spawnMobLimit(2600612, 1, -124, 1032, 100);
                                                                            cm.spawnMobLimit(2600612, 1, 45, 1032, 100);
                                                                            cm.spawnMobLimit(2600612, 1, 17, 552, 100);
                                                                            cm.spawnMobLimit(2600612, 1, -669, 1032, 100);
                                                                            cm.spawnMobLimit(2600610, 1, 287, 732, 100);
                                                                            cm.spawnMobLimit(2600610, 1, -421, 732, 100);
                                                                            cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                                            cm.updateMirrorDungeonBoss(1, 2600613);
                                                                            cm.spawnMobLimit(2600613, 1, -136, 1032, 100)
                                                                        } else {
                                                                            if (d == 328036000) {
                                                                                cm.spawnMobLimit(2600714, 1, 119, 181, 100);
                                                                                cm.spawnMobLimit(2600714, 1, 459, 181, 100);
                                                                                cm.spawnMobLimit(2600714, 1, -231, 181, 100);
                                                                                cm.spawnMobLimit(2600714, 1, -95, -140, 100);
                                                                                cm.spawnMobLimit(2600714, 1, 119, 181, 100);
                                                                                cm.spawnMobLimit(2600714, 1, 459, 181, 100);
                                                                                cm.spawnMobLimit(2600714, 1, -231, 181, 100);
                                                                                cm.spawnMobLimit(2600714, 1, -95, -140, 100);
                                                                                cm.spawnMobLimit(2600714, 1, 119, 181, 100);
                                                                                cm.spawnMobLimit(2600714, 1, 459, 181, 100);
                                                                                cm.spawnMobLimit(2600714, 1, -231, 181, 100);
                                                                                cm.spawnMobLimit(2600714, 1, -95, -140, 100);
                                                                                cm.updateMirrorDungeonMap(1, 7, [0, 1, 2, 3, 4, 5, 6]);
                                                                                cm.updateMirrorDungeonBoss(1, 2600715);
                                                                                cm.spawnMobLimit(2600715, 1, 386, 181, 100);
                                                                                cm.spawnMobLimit(2600714, 1, 634, 181, 100);
                                                                                cm.spawnMobLimit(2600714, 1, 662, -177, 100);
                                                                                cm.spawnMobLimit(2600714, 1, 862, 181, 100);
                                                                                cm.spawnMobLimit(2600714, 1, 403, -177, 100);
                                                                                cm.spawnMobLimit(2600714, 1, 527, 181, 100);
                                                                                cm.spawnMobLimit(2600714, 1, 403, -177, 100)
                                                                            } else {
                                                                                if (d == 329014000) {
                                                                                    cm.spawnMobLimit(2600904, 1, -1066, -750, 100);
                                                                                    cm.spawnMobLimit(2600904, 1, -1586, -750, 100);
                                                                                    cm.spawnMobLimit(2600904, 1, -1329, -750, 100);
                                                                                    cm.spawnMobLimit(2600904, 1, -1997, -750, 100);
                                                                                    cm.spawnMobLimit(2600904, 1, -2209, -750, 100);
                                                                                    cm.spawnMobLimit(2600904, 1, -2439, -750, 100);
                                                                                    cm.spawnMobLimit(2600904, 1, -1958, -510, 100);
                                                                                    cm.spawnMobLimit(2600904, 1, -2209, -510, 100);
                                                                                    cm.spawnMobLimit(2600904, 1, -2482, -510, 100);
                                                                                    cm.spawnMobLimit(2600904, 1, -1591, -510, 100);
                                                                                    cm.spawnMobLimit(2600904, 1, -1401, -510, 100);
                                                                                    cm.spawnMobLimit(2600904, 1, -1154, -510, 100);
                                                                                    cm.spawnMobLimit(2600904, 1, -1455, -270, 100);
                                                                                    cm.spawnMobLimit(2600904, 1, -1180, -270, 100);
                                                                                    cm.spawnMobLimit(2600904, 1, -973, -270, 100);
                                                                                    cm.spawnMobLimit(2600904, 1, -2015, -270, 100);
                                                                                    cm.spawnMobLimit(2600904, 1, -2265, -270, 100);
                                                                                    cm.spawnMobLimit(2600904, 1, -2510, -270, 100);
                                                                                    cm.updateMirrorDungeonMap(1, 5, [0, 1, 2, 3, 4]);
                                                                                    cm.updateMirrorDungeonBoss(1, 2600911);
                                                                                    cm.spawnMobLimit(2600911, 1, -1645, -270, 100)
                                                                                } else {
                                                                                    if (d == 329024000) {
                                                                                        cm.spawnMobLimit(2600909, 1, -1066, -750, 100);
                                                                                        cm.spawnMobLimit(2600909, 1, -1586, -750, 100);
                                                                                        cm.spawnMobLimit(2600909, 1, -1329, -750, 100);
                                                                                        cm.spawnMobLimit(2600909, 1, -1997, -750, 100);
                                                                                        cm.spawnMobLimit(2600909, 1, -2209, -750, 100);
                                                                                        cm.spawnMobLimit(2600909, 1, -2439, -750, 100);
                                                                                        cm.spawnMobLimit(2600909, 1, -1958, -510, 100);
                                                                                        cm.spawnMobLimit(2600909, 1, -2209, -510, 100);
                                                                                        cm.spawnMobLimit(2600909, 1, -2482, -510, 100);
                                                                                        cm.spawnMobLimit(2600909, 1, -1591, -510, 100);
                                                                                        cm.spawnMobLimit(2600909, 1, -1401, -510, 100);
                                                                                        cm.spawnMobLimit(2600909, 1, -1154, -510, 100);
                                                                                        cm.spawnMobLimit(2600909, 1, -1455, -270, 100);
                                                                                        cm.spawnMobLimit(2600909, 1, -1180, -270, 100);
                                                                                        cm.spawnMobLimit(2600909, 1, -973, -270, 100);
                                                                                        cm.spawnMobLimit(2600909, 1, -2015, -270, 100);
                                                                                        cm.spawnMobLimit(2600909, 1, -2265, -270, 100);
                                                                                        cm.spawnMobLimit(2600909, 1, -2510, -270, 100);
                                                                                        cm.updateMirrorDungeonMap(1, 5, [0, 1, 2, 3, 4]);
                                                                                        cm.updateMirrorDungeonBoss(1, 2600910);
                                                                                        cm.spawnMobLimit(2600910, 1, -1645, -270, 100)
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
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
    action(1, 0, 0)
};