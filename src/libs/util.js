/*
 * tool function
 */

/**
 * 是否是客户端
 * 
 * @returns {Boolean}
 */
export function isClient(){
  return typeof window !== 'undefined'
}

/**
 * 是否是node端
 * 
 * @returns {Boolean}
 */
export function isNode(){
  return typeof module !== "undefined" && typeof module.exports !== "undefined"
}