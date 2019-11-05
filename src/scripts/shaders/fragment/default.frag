precision highp float;

uniform vec2 resolution;
uniform float time;
uniform vec2 mouse;

void main() {
  gl_FragColor = vec4(gl_FragCoord.x / resolution.x, mouse.x / resolution.x, mouse.y / resolution.y, 1.0);
}
