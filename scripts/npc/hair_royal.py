# Big Headward | Henesys Hair Salon
from net.swordie.ms.loaders import StringData

start = 0
end = 0

# ===== MAIN MENU (Hair / Face) =====
main = sm.sendNext(
    "Hello!\r\nI'm Big Headward\r\nI do Hairs & Faces!\r\n\r\n"
    "#L0#Hair#l\r\n"
    "#L1#Face#l"
)

# ===== CATEGORY MENU (Male / Female / Unisex) =====
cat = sm.sendNext(
    ("Hair" if main == 0 else "Face") + " - Choose Category\r\n\r\n"
                                        "#L0#Male#l\r\n"
                                        "#L1#Female#l\r\n"
                                        "#L2#Unisex / Event#l"
)

# ===== DATA (startId, label) =====
HAIR_MENU = {
    0: ("Male Hairs", [
        (30000, "Henesys (30000 ~ 30999)"),
        (33000, "Kerning (33000 ~ 33999)"),
        (35000, "Orbis (35000 ~ 35999)"),
        (36000, "Ludi (36000 ~ 36999)"),
        (40000, "Edelstein (40000 ~ 40999)"),
        (43000, "MuLung (43000 ~ 43999)"),
        (45000, "Ariant (45000 ~ 45999)"),
        (46000, "Amoria (46000 ~ 46999)"),
    ]),
    1: ("Female Hairs", [
        (31000, "Henesys (31000 ~ 31999)"),
        (34000, "Kerning (34000 ~ 34999)"),
        (37000, "Orbis (37000 ~ 37999)"),
        (38000, "Ludi (38000 ~ 38999)"),
        (41000, "Edelstein (41000 ~ 41999)"),
        (44000, "MuLung (44000 ~ 44999)"),
        (47000, "Ariant (47000 ~ 47999)"),
        (48000, "Amoria (48000 ~ 48999)"),
    ]),
    2: ("Unisex / Event Hairs", [
        (32000, "Royal (32000 ~ 32999)"),
        (39000, "Royal (39000 ~ 39999)"),
        (42000, "Royal (42000 ~ 42999)"),
    ]),
}

FACE_MENU = {
    0: ("Male Faces", [
        (20000, "Male Face Set 1 (20000 ~ 20999)"),
        (25000, "Male Face Set 2 (25000 ~ 25999)"),
        (50000, "Male Face Set 3 (50000 ~ 50999)"),
    ]),
    1: ("Female Faces", [
        (21000, "Female Face Set 1 (21000 ~ 21999)"),
        (24000, "Female Face Set 2 (24000 ~ 24999)"),
        (51000, "Female Face Set 3 (51000 ~ 51999)"),
    ]),
    2: ("Unisex / Event Faces", [
        (23000, "Unisex / Event Face Set 1 (23000 ~ 23999)"),
        (26000, "Unisex / Event Face Set 2 (26000 ~ 26999)"),
        (27000, "Unisex / Event Face Set 3 (27000 ~ 27999)"),
        (28000, "Unisex / Event Face Set 4 (28000 ~ 28999)"),
    ]),
}

# Pick which menu set to use
menu_set = HAIR_MENU if main == 0 else FACE_MENU

if cat in menu_set:
    title, items = menu_set[cat]

    # Build submenu text: visible numbering starts at 1
    msg = title + "\r\n\r\n"
    for i, (sid, label) in enumerate(items):
        msg += "#L{0}#{1}. {2}#l\r\n".format(i, i + 1, label)

    sub = sm.sendNext(msg)

    if 0 <= sub < len(items):
        start = items[sub][0]
        end = start + 999
    else:
        start = 0
        end = 0
else:
    start = 0
    end = 0

if start > 0 and end > 0:
    al = chr.getAvatarData().getAvatarLook() if not chr.isZeroBeta() else chr.getAvatarData().getZeroAvatarLook()

    if main == 0: # Hair
        hairColour = al.getHair() % 10
        options = StringData.getHairs(start, end)

        temp = []
        for o in options:
            temp.append(o + hairColour)
        options = temp

        answer = sm.sendAskAvatar("I can change your hair to anything you'd like!", False, chr.isZeroBeta(), options)

        sm.changeCharacterLook(answer)
    elif main == 1: # Face
        eyeColour = al.getFace() % 1000
        options = list(StringData.getFaces(start, end))

        temp = []
        for o in options:
            temp.append(o + eyeColour)
        options = temp

        answer = sm.sendAskAvatar("I can change your face to anything you'd like!", False, chr.isZeroBeta(), options)

        sm.changeCharacterLook(answer)
