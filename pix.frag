
#ifdef GL_ES
  precision highp float;
  
  #endif
  
   #define PI 3.14159265359
    const float PHI = 1.61803398874989484820459;
 const float SEED = 43758.0;

  uniform vec2 resolution;
  uniform sampler2D pg;
  uniform sampler2D pg2;
  uniform sampler2D img;
  uniform float ak;
  uniform float dirX;
  uniform float dirY;
  uniform float dirX1;
  uniform float dirY1;
  uniform float pgC;
  uniform float dur;
  uniform float time;
  uniform float aniC;
  uniform float timeM;
  uniform float onOff;
  uniform float celCol;
  uniform float satC;
  uniform float contC;
  uniform float colC;
  uniform float satOn;
  uniform float u_time;
  uniform float pix;
  uniform float pixDiv;
  uniform float u_speed;
  uniform float u_gli;
  uniform float u_sty;
  uniform float u_rare;

uniform vec3 palette[8];
uniform int paletteSize;

  float random(in vec2 st)
   {
     return fract(tan(distance(st*PHI*1.0, st * PI*1.0)*SEED)*st.x);
   }

vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}


  void main() {
    vec2 uv = gl_FragCoord.xy / resolution;
    uv.y = 1. - uv.y;

    vec2 offset;
    vec2 pgCol;
    float ani;

  
  if(u_gli == 0.0){
   offset = vec2(texture2D(pg2, uv).r * u_speed * pix/pixDiv) * vec2(1./resolution.x, 1./resolution.y);
  }else{
   offset = vec2(texture2D(pg2, uv).r * u_speed * pix/pixDiv) * vec2(1./resolution.x, 1./resolution.y) * random(uv);
  }
     

    //  

     pgCol = vec2(texture2D(pg2, uv) - texture2D(pg, uv));
 

  //  pgCol = vec2(texture2D(pg, uv));


 

//////////////////////////////////////////////////////Yeni işteki sinlileri dene

if(u_sty == 0.0){
    if(pgCol.x < .5) offset.x *= -1.;
    else if(pgCol.x < .9) offset.x *= 1.;
    
    if(pgCol.y < .5) offset.y *= -1.;
    else if(pgCol.y < .9) offset.y *= 1.;
}else{
        if(pgCol.x < .5) offset.x *=  -1. * cos(u_time);
        else if(pgCol.x < 1.) offset.x *= 1. * cos(u_time);
        if(pgCol.y < .5) offset.y *= -1. * sin(u_time);
        else if(pgCol.y < 1.) offset.y *= 1. * sin(u_time);
}


    
    // if(pgCol.x < .5) offset.x *= -1.;
    // else if(pgCol.x < 1.0) offset.x *= 1.;
    
    // if(pgCol.y < .5) offset.y *= 0.;
    // else if(pgCol.y < 1.0) offset.y *= 0.;



        // if(pgCol.x < .5) offset.x *=  -1. * sin(u_time);
        // else if(pgCol.x < 1.) offset.x *= 1. * cos(u_time);
        // if(pgCol.y < .5) offset.y *= -1. * sin(u_time);
        // else if(pgCol.y < 1.) offset.y *= 1. * cos(u_time);




    
    vec3 c = texture2D(img, uv + offset).rgb;


    if(u_rare == 1.0){
    c -= texture2D(img, uv + (random(uv/1.0)) - offset).rgb;
    c += texture2D(img, uv + (random(uv/1.0)) + offset).rgb;
    }

   


    





    gl_FragColor = vec4(c, 1.);
  }


