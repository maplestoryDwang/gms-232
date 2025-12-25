package net.swordie.ms.scripts;

import lombok.Data;
import lombok.NoArgsConstructor;
import net.swordie.ms.client.character.Char;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.instance.Instance;

/**
 * @author Sjonnie
 * Created on 1/22/2019.
 */
@Data
@NoArgsConstructor
public class FieldTransferInfo {
    private int fieldId, portal, channel;
    private boolean changeChannel, init = true;
    private boolean isInstanceField, field;

    public void setFieldId(int fieldId) {
        init = false;
        this.fieldId = fieldId;
    }

    public void warp(Char chr) {
        setInit(true);
        if (isInstanceField()) {
            chr.setInstance(new Instance(chr));
        }
        if (isChangeChannel()) {
            chr.changeChannelAndWarp((byte) getChannel(), getFieldId());
        } else {
            chr.warp(getFieldId(), getPortal());
        }
        chr.getField().setChangeToChannelOnLeave(isInstanceField());
    }

    public void warp(Field field) {
        setInit(true);
        for (Char chr : field.getCharsReadOnly()) {
            chr.warp(getFieldId(), getPortal());
        }
    }

    public void setIsInstanceField(boolean isInstanceField) {
        this.isInstanceField = isInstanceField;
    }
}
