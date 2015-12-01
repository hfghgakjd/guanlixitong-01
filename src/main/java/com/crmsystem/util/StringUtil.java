package com.crmsystem.util;

import org.apache.commons.lang3.StringUtils;

/**
 * @描述:字符串操作工具类
 * @作者: fan
 * @创建时间:2015年11月19日 下午3:20:17
 * @项目名称 crmsystem
 */
public class StringUtil {
	/**
	 * @描述:判断字符串是否为空
	 * @创建时间:2015年11月19日下午3:21:02
	 * @作者:fan
	 * @param str
	 * @return
	 */
	public static boolean isEmpty(String str){
		if(str!=null){
			str = str.trim();
		}
		return StringUtils.isEmpty(str);
	}
	
	/**
	 * @描述:判断字符串是否非空
	 * @创建时间:2015年11月19日下午3:22:57
	 * @作者:fan
	 * @param str
	 * @return
	 */
	public static boolean isNotEmpty(String str){
		return !isEmpty(str);
	}
}
