precision mediump float;

uniform vec2 u_textureSize;
uniform vec2 mouse;
uniform sampler2D u_texture;

uniform float amount;
uniform float mouseAmount;

varying vec2 v_texCoord;

void main()
{
    vec2 pos = v_texCoord;
    
    vec2 mouseMove = (mouse.xy / u_textureSize) - vec2(0.5, 0.5);
    
    vec2 center = vec2(0.5, 0.5) + mouseMove * mouseAmount;
    
    float xd = pow((pos.x-center.x), 3.0) * amount;
    float yd = pow((pos.y-center.y), 3.0) * amount;
    
    vec4 c = texture2D(u_texture, pos);
    
    float mv = fract(sin(dot(pos.xy, vec2(12.9198,78.233))) * 43738.5452);
    
    for(float i=1.0; i<17.0; i++) {
      vec2 bpos = vec2(pos);
      
      bpos.x += ((xd + xd*mv) / 16.0 * i);
      bpos.y += ((yd + yd*mv) / 16.0 * i);
      
      c += texture2D(u_texture, bpos); 
    }
    
    /*
    c.r = cos(pos.x * 999.9 * pos.y * 999.9) * 7.0;
    c.g = 0.0;
    c.b = 0.0;
    */
    
  	gl_FragColor = c / 17.0;
}