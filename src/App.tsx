import React from 'react';
import { lang } from './env/urlParam';
import Style from "./App.scss";

class App extends React.Component<{}, {}> {

  public componentDidMount() {
    document.documentElement.lang = lang;
  }

  public render() {
    return (
      <div className={Style['App']}>

        <div className={Style['border']}>
          <div>
            원래 폰트
          </div>
          <div className={Style['en_light']}>
            Languge Font
          </div>
          <div className={Style['en_regular']}>
            Languge Font
          </div>
          <div className={Style['en_semi-bold']}>
            Languge Font
          </div>
          <div className={Style['en_bold']}>
            Languge Font
          </div>

          <div className={Style['cn_light']}>
            语言字体测试
          </div>
          <div className={Style['cn_regular']}>
            语言字体测试
          </div>
          <div className={Style['cn_semi-bold']}>
            语言字体测试
          </div>
          <div className={Style['cn_bold']}>
            语言字体测试
          </div>

          <div className={Style['kr_font']}>
          언어 폰트
          </div>
        </div>

        <div className={Style['border']}>
          <div>
            lang select 폰트
          </div>
          <div className={Style['lang_light']}>
            Languge Font
          </div>
          <div className={Style['lang_regular']}>
            Languge Font
          </div>
          <div className={Style['lang_semi-bold']}>
            Languge Font
          </div>
          <div className={Style['lang_bold']}>
            Languge Font
          </div>

          <div className={Style['lang_light']}>
            语言字体测试
          </div>
          <div className={Style['lang_regular']}>
            语言字体测试
          </div>
          <div className={Style['lang_semi-bold']}>
            语言字体测试
          </div>
          <div className={Style['lang_bold']}>
            语言字体测试
          </div>

          <div className={Style['lang_light']}>
            언어 폰트
          </div>
        </div>

        <div className={Style['border']}>
          <div>
            lang param 변경 폰트
          </div>
          <div className={Style['light']}>
            Languge Font
          </div>
          <div className={Style['regular']}>
            Languge Font
          </div>
          <div className={Style['semi-bold']}>
            Languge Font
          </div>
          <div className={Style['bold']}>
            Languge Font
          </div>

          <div className={Style['light']}>
            语言字体测试
          </div>
          <div className={Style['regular']}>
            语言字体测试
          </div>
          <div className={Style['semi-bold']}>
            语言字体测试
          </div>
          <div className={Style['bold']}>
            语言字体测试
          </div>

          <div className={Style['light']}>
            언어 폰트
          </div>
        </div>

        <div className={Style['border']}>
          <div>
            unicode-range 폰트
          </div>
          <div className={Style['languge_light']}>
            Languge 语言字体测试
          </div>
          <div className={Style['languge_regular']}>
            Languge 语言字体测试
          </div>
          <div className={Style['languge_semi-bold']}>
            Languge 语言字体测试
          </div>
          <div className={Style['languge_bold']}>
          Languge 语言字体测试
          </div>

          <div className={Style['languge_light']}>
            语言字体测试
          </div>
          <div className={Style['languge_regular']}>
            语言字体测试
          </div>
          <div className={Style['languge_semi-bold']}>
          语言字体测试
          </div>
          <div className={Style['languge_bold']}>
          语言字体测试
          </div>
        </div>

      </div>
    );
  }
}

export default App;