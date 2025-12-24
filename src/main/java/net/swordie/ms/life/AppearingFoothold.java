package net.swordie.ms.life;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.enums.EnterType;
import net.swordie.ms.util.Position;
import net.swordie.ms.world.field.Field;

/**
 * Created on 14-9-2019.
 *
 * @author Asura
 */
public class AppearingFoothold extends Life {
    private String footholdName;

    public AppearingFoothold(int templateId) {
        super(templateId);
    }

    public String getFootholdName() {
        return footholdName;
    }

    public void setFootholdName(String footholdName) {
        this.footholdName = footholdName;
    }

    public static AppearingFoothold getAppearingFootholdBy(String footholdName, Position position) {
        AppearingFoothold afh = new AppearingFoothold(-1);
        afh.setFootholdName(footholdName);
        afh.setPosition(position);
        afh.setHide(true);

        return afh;
    }

    public void show(Char onlyChar) {
        setHide(false);
        broadcastSpawnPacket(onlyChar, EnterType.NoAnimation);
    }

    @Override
    public void broadcastSpawnPacket(Char onlyChar, EnterType enterType) {
        Field field = getField();
        if (onlyChar == null) {
            field.broadcastPacket(FieldPacket.footholdAppear(this));
        } else {
            onlyChar.write(FieldPacket.footholdAppear(this));
        }
    }

    @Override
    public void broadcastLeavePacket() {
        setHide(true);
        Field field = getField();
        field.broadcastPacket(FieldPacket.footholdAppear(this));
    }
}
