var container=document.getElementById('container');
//监听鼠标移入事件
container.addEventListener('mousemove',function(e){
    //获取鼠标坐标
    var x=e.pageX;
    var y=e.pageY;
    // 创建樱花元素
    var petal=document.createElement('div');
    petal.className='petal random';
    // petal.style.left=x+'px';
    // petal.style.top=y+'px';
    container.appendChild(petal);
    //设置定时器，让樱花在一秒后消失
    setTimeout(function(){
        petal.style.opacity=0;
        setTimeout(function(){
            container.removeChild(petal);
        },1000);
    },1000);
   
  // 设置樱花随机旋转角度
  const startRotation = Math.random() * 360;
  petal.style.transform = `rotate(${startRotation}deg)`;
  // 设置樱花随机大小
  const startSize = Math.random() * 20 + 10;
  container.style.width = `${startSize}px`;
  container.style.height = `${startSize}px`;
  // 设置樱花随机飘落速度
  const speed = Math.random() * 5 + 5;
  moveSakura(petal, speed,x,y);
},false);

function moveSakura(petal, speed,x,y) {
    if(!petal.classList.contains('random'))
    return;//如果花瓣不是根据鼠标位置生成的直接返回

    let position=parseFloat(petal.style.top);
    const windSpeed=Math.random()*10-5;//秒速五厘米
    let rotation=parseFloat(petal.style.transform.slice(7,-4));//slice(7, -4)将返回一个不包括第7个字符和倒数第4个字符的子串，也就是"45deg"。这个字符串表示当前旋转角度的值
    rotation += Math.random() * 0.5 - 0.25;
    petal.style.transform = `rotate(${rotation}deg)`;
    // 设置初始位置
  petal.style.top = `${y}px`;
  petal.style.left = `${x}px`;
  const intervalId = setInterval(() => {
    position += speed;
    petal.style.top = `${position}px`;
    petal.style.left = `${parseFloat(petal.style.left) + windSpeed}px`;
    if (position > window.innerHeight) {
      clearInterval(intervalId);
      petal.remove();
    }
  }, 50);

  }