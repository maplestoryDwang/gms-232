# Big Headward | Henesys Hair Salon
from net.swordie.ms.loaders import StringData

def _get_avatar_look():
    return chr.getAvatarData().getAvatarLook() if not chr.isZeroBeta() else chr.getAvatarData().getZeroAvatarLook()

start = 0
end = 0

# ===== MAIN MENU (Hair / Face / Search) =====
al = _get_avatar_look()
main = sm.sendNext(
    "Current Hair: ({0}) #z{0}#\r\n".format(al.getHair()) +
    "Current Face: ({0}) #z{0}#\r\n\r\n".format(al.getFace()) +
    "Hello! I'm Big Headward\r\nI do Hairs & Faces!\r\n\r\n"
    "#L0#Hair#l\r\n"
    "#L1#Face#l\r\n"
    "#L2#Search Hair by Name#l\r\n"
    "#L3#Search Face by Name#l"
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
        # (60000, "??? (60000 ~ 60999)"), # more here according to Eqp.txt, maybe not available in this version?
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
        # (61000, "??? (61000 ~ 61999)"), # more here according to Eqp.txt, maybe not available in this version?
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


def _apply_hair(start_id, end_id):
    hairColour = al.getHair() % 10

    options = list(StringData.getHairs(start_id, end_id))
    temp = []
    for o in options:
        temp.append(o + hairColour)
    options = temp

    answer = sm.sendAskAvatar("I can change your hair to anything you'd like!", False, chr.isZeroBeta(), options)
    sm.changeCharacterLook(answer)


def _apply_face(start_id, end_id):
    eyeColour = al.getFace() % 1000

    options = list(StringData.getFaces(start_id, end_id))
    temp = []
    for o in options:
        temp.append(o + eyeColour)
    options = temp

    answer = sm.sendAskAvatar("I can change your face to anything you'd like!", False, chr.isZeroBeta(), options)
    sm.changeCharacterLook(answer)


def _search_and_ask_avatar(is_hair):
    query = sm.sendAskText("Type part of the name to search:", "", 1, 30)

    if query is None:
        return

    query = str(query).strip()
    if query == "":
        sm.sendNext("Empty search.")
        return

    res = StringData.getHairStringByName(query) if is_hair else StringData.getFaceStringByName(query)

    if res is None or len(res) == 0:
        sm.sendNext("No results for: " + query)
        return

    options = []
    seen = set()

    if is_hair:
        # Hair color: last digit
        current_color = al.getHair() % 10
        color_mod = 10

        for k in res.keySet():
            try:
                iid = int(k)
            except:
                continue

            base = iid - (iid % color_mod)
            chosen = base + current_color

            if chosen in seen:
                continue
            seen.add(chosen)
            options.append(chosen)

    else:
        # Face format (5 digits): AA C BB
        # - AA = family
        # - C  = color digit
        # - BB = tail
        current_color = (al.getFace() // 100) % 10

        for k in res.keySet():
            try:
                iid = int(k)
            except:
                continue

            family = iid // 1000
            tail = iid % 100
            chosen = (family * 1000) + (current_color * 100) + tail

            if chosen in seen:
                continue
            seen.add(chosen)
            options.append(chosen)

    if len(options) == 0:
        sm.sendNext("No results after applying your current color filter.")
        return

    prompt = "Pick the hair you want!" if is_hair else "Pick the face you want!"
    answer = sm.sendAskAvatar(prompt, False, chr.isZeroBeta(), options)
    sm.changeCharacterLook(answer)


# ===== NORMAL MENU FLOW (Hair / Face) =====
if main == 0 or main == 1:
    # ===== CATEGORY MENU (Male / Female / Unisex) =====
    cat = sm.sendNext(
        ("Hair" if main == 0 else "Face") + " - Choose Category\r\n\r\n"
                                            "#L0#Male#l\r\n"
                                            "#L1#Female#l\r\n"
                                            "#L2#Unisex / Event#l"
    )

    menu_set = HAIR_MENU if main == 0 else FACE_MENU

    if cat in menu_set:
        title, items = menu_set[cat]

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
        if main == 0:
            _apply_hair(start, end)
        else:
            _apply_face(start, end)

elif main == 2:
    _search_and_ask_avatar(True)   # search hair
elif main == 3:
    _search_and_ask_avatar(False)  # search face
