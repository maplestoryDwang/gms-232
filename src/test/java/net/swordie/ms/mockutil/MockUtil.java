package net.swordie.ms.mockutil;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.CharacterStat;
import net.swordie.ms.client.character.avatar.AvatarData;

public class MockUtil {

    public static Char createChar() {
        var chr = new Char();

        chr.setAvatarData(new AvatarData());
        chr.getAvatarData().setCharacterStat(new CharacterStat(true));

        return chr;
    }

}
