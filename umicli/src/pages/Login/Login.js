import React, { PureComponent } from "react";
import styles from './login.less';
import getAMap from '../Common';
import { Button } from 'antd';


export default class Login extends PureComponent {

  componentDidMount() {
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    let t = document.createTextNode(`var current = null;
      document.querySelector('#email').addEventListener('focus', function (e) {
          if (current) current.pause();
          current = anime({
              targets: 'path',
              strokeDashoffset: {
                  value: 0,
                  duration: 700,
                  easing: 'easeOutQuart'
              },
              strokeDasharray: {
                  value: '240 1386',
                  duration: 700,
                  easing: 'easeOutQuart'
              }
          });
      });
      document.querySelector('#password').addEventListener('focus', function (e) {
          if (current) current.pause();
          current = anime({
              targets: 'path',
              strokeDashoffset: {
                  value: -336,
                  duration: 700,
                  easing: 'easeOutQuart'
              },
              strokeDasharray: {
                  value: '240 1386',
                  duration: 700,
                  easing: 'easeOutQuart'
              }
          });
      });
      document.querySelector('#submit').addEventListener('focus', function (e) {
          if (current) current.pause();
          current = anime({
              targets: 'path',
              strokeDashoffset: {
                  value: -730,
                  duration: 700,
                  easing: 'easeOutQuart'
              },
              strokeDasharray: {
                  value: '530 1386',
                  duration: 700,
                  easing: 'easeOutQuart'
              }
          });
      });`)
    script.appendChild(t)
    document.head.appendChild(script)
    getAMap()
  }
  render() {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.login}>Login</div>
                      <div className={styles.eula}>anime 大神写的一个动画效果，搬到react里面用一下</div>
          </div>
          <div className={styles.right}>
            <svg viewBox="0 0 320 300">
              <defs>
                <linearGradient

                  id="linearGradient"
                  x1="13"
                  y1="193.49992"
                  x2="307"
                  y2="193.49992"
                  gradientUnits="userSpaceOnUse">
                  <stop
                    style={{ stopColor: '#ff0000' }}
                    offset="0"
                    id="stop876" />
                  <stop
                    style={{ stopColor: '#ff0000' }}
                    offset="1"
                    id="stop878" />
                </linearGradient>
              </defs>
              <path d="m 40,120.00016 239.99984,-3.2e-4 c 0,0 24.99263,0.79932 25.00016,35.00016 0.008,34.20084 -25.00016,35 -25.00016,35 h -239.99984 c 0,-0.0205 -25,4.01348 -25,38.5 0,34.48652 25,38.5 25,38.5 h 215 c 0,0 20,-0.99604 20,-25 0,-24.00396 -20,-25 -20,-25 h -190 c 0,0 -20,1.71033 -20,25 0,24.00396 20,25 20,25 h 168.57143" />
            </svg>
            <div className={styles.form}>
              <label htmlFor="email">邮箱</label>
              <input type="email" id="email"/>
              <label htmlFor="password">密码</label>
              <input type="password" id="password" />
              <input type="submit" value="提   交"  id="submit"  style={{marginTop: 40}}/> 
            </div>
          </div>
        </div>

      </div>

    )
  }
}