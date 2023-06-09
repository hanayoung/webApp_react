import React, { useRef, useEffect, useState } from 'react';

const ImageCropper = ({ src, x, y, width, height }) => {
  
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [ctx,setCtx] = useState();
  
  useEffect(() => {
    if(width==0) return; // 오류 방지
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    contextRef.current = ctx;
    setCtx(contextRef.current);
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스의 영역 지우는 코드
    ctx.drawImage(src, x, y, width, height, 0, 0, width, height); 
    /* x :이미지 내 눈 위치 x좌표의 최솟값, y: 이미지 내 눈 위치의 y좌표 최솟값, 
      0(6번째 param) : 캔버스의 x 좌표, 0(7번째 param) : 캔버스의 y좌표
    */
    return () => {
      ctx.clearRect(0,0,canvas.width,canvas.height);
    }
  }, [src, x, y, width, height]);

  return (
    <>
      <canvas ref={canvasRef} width={width} height={height} />
    </>
  )
  ;
};

export default ImageCropper;
