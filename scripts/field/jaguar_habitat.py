SPECIAL_JAGUARS = [
    [9304005, -160, 28],
    [9304006, -750, -32],
    [9304007, -704, -332],
    [9304008, 492, -572]
]

for jag_entry in SPECIAL_JAGUARS:
    jag = jag_entry[0]
    x = jag_entry[1]
    y = jag_entry[2]
    if field.getLifeByTemplateId(jag) is None:
        sm.spawnMob(jag, x, y)