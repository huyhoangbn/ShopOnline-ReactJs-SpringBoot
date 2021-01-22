package com.shoponline.model.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Res {
    public static final int STATUS_OK = 0;
    public static final int STATUS_ERR = 1;

    private int responseCode;
    private String messageCode;
    private Object value;

    public static Res success(String messageCode, Object obj) {
        return new Res(STATUS_OK,messageCode,obj);
    }
    public static Res error(String messageCode, Object obj) {
        return new Res(STATUS_ERR,messageCode,obj);
    }
}
