import React,{ useState, useCallback } from 'react';
 
/** 強制的に再レンダリングさせる */
export const useForceUpdate = () => {
console.log("呼ばれた");
  const [, forceUpdate] = useState(undefined);
  return useCallback(() => {
    forceUpdate((s) => !s);
  }, []);
};