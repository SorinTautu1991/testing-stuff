// import * as Scroll from 'react-scroll';
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from 'react-scroll';
import First from './components/first/first';
import Second from './components/second/second';
import Third from './components/third/third';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const el = document.getElementById('third');
    const position = el.getBoundingClientRect();
    const y = position.top;
    scrollTo({ top: y, behavior: 'smooth' });
  }, []);

  return (
    <div id="container">
      <div id="first">
        <First />
      </div>
      <div id="second">
        <Second />
      </div>
      <div id="third">
        <Third />
      </div>
    </div>
  );
}
