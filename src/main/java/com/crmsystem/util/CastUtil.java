package com.crmsystem.util;

/**
 * @描述: 转型操作工具类
 * @作者: fan
 * @创建时间:2015年11月19日 下午2:50:00
 * @项目名称 crmsystem
 */
public class CastUtil {

	/**
	 * @描述:转为string
	 * @创建时间:2015年11月19日下午2:51:24
	 * @作者:fan
	 * @param obj
	 * @return
	 */
	public static String castString(Object obj) {
		return castString(obj, "");
	}

	/**
	 * @描述:转为string(提供默认值)
	 * @创建时间:2015年11月19日下午2:51:57
	 * @作者:fan
	 * @param obj
	 * @param defaultValue
	 * @return
	 */
	public static String castString(Object obj, String defaultValue) {
		return obj != null ? String.valueOf(obj) : defaultValue;
	}

	/**
	 * @描述:转为double
	 * @创建时间:2015年11月19日下午2:55:11
	 * @作者:fan
	 * @param obj
	 * @return
	 */
	public static double castDouble(Object obj) {
		return castDouble(obj, 0.0);
	}

	/**
	 * @描述:转为double(提供默认值)
	 * @创建时间:2015年11月19日下午2:55:29
	 * @作者:fan
	 * @param obj
	 * @param defaultValue
	 * @return
	 */
	private static double castDouble(Object obj, double defaultValue) {
		double d = defaultValue;
		if (obj != null) {
			// 先将obj转成字符串
			String str = castString(obj);
			if (StringUtil.isNotEmpty(str)) {
				try {
					// 再将字符串转为double
					d = Double.parseDouble(str);
				} catch (Exception e) {
					// 如果发生异常，返回默认值
					d = defaultValue;
				}
			}
		}
		return d;
	}

	/**
	 * @描述:转为int型
	 * @创建时间:2015年11月19日下午3:03:08
	 * @作者:fan
	 * @param obj
	 * @return
	 */
	public static int castInt(Object obj) {
		return castInt(obj,0);
	}

	/**
	 * @描述:转为int(提供默认值)
	 * @创建时间:2015年11月19日下午3:04:07
	 * @作者:fan
	 * @param obj
	 * @param defaultValue
	 * @return
	 */
	public static int castInt(Object obj, int defaultValue) {
		int value = defaultValue;
		String str = castString(obj);
		if(StringUtil.isNotEmpty(str)){
			try{
				value = Integer.parseInt(str);
			}catch(Exception e){
				value = defaultValue;
			}
		}
		return value;
	}
	
	/**
	 * @描述:转为布尔值
	 * @创建时间:2015年11月19日下午3:14:23
	 * @作者:fan
	 * @param obj
	 * @return
	 */
	public static boolean castBoolean(Object obj){
		return castBoolean(obj,false);
	}

	/**
	 * @描述:转为布尔值(提供默认值)
	 * @创建时间:2015年11月19日下午3:15:23
	 * @作者:fan
	 * @param obj
	 * @param defaultValue
	 * @return
	 */
	public static boolean castBoolean(Object obj, boolean defaultValue) {
		boolean bool = defaultValue;
		if(obj!=null){
			bool = Boolean.parseBoolean(castString(obj));
		}
		return bool;
	}
}
