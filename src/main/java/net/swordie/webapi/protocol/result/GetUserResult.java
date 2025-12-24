package net.swordie.webapi.protocol.result;

import net.swordie.webapi.dto.UserDto;

public class GetUserResult {

    private UserDto user;

    public GetUserResult(UserDto user) {
        this.user = user;
    }

    public UserDto getUser() {
        return user;
    }

    public void setUser(UserDto user) {
        this.user = user;
    }
}
