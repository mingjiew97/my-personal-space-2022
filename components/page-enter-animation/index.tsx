/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import { gsap } from "gsap";
import styles from "./page_enter_animation.module.scss";

export default function PageEnterAnimation() {
  // set GSAP Timeline
  const [tl] = React.useState<GSAPTimeline>(gsap.timeline());
  React.useEffect(() => {
    // set GSAP timeline
    tl.from(document.querySelector(`#cover-name`), {
        opacity: 0,
        xPercent: -100,
        delay: 0.5,
        duration: 1,
        ease: "power1.out",
        yoyo: true,
    }).from(document.querySelector("#cover-dot"),{
        opacity: 0,
        yPercent: 100,
        delay: 0.5,
        repeatDelay: 1,
        duration: 1,
        ease: "power1.out",
    }, 0.01).to(document.querySelector("#cover-dot"), {
        x: 30,
        duration: 1,
        ease: "power1.out",
    }).to(document.querySelector("#cover-dot"), {
        x: 0,
        duration: 0.5,
        ease: "power1.out",
    }).to(document.querySelector("#cover-name"), {
        opacity: 0,
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
        yoyo: true,
    }).to(document.querySelector("#cover-dot"), {
        opacity: 0,
        duration: 1,
        ease: "expo.out",
    }, 3).to(document.querySelector("#cover-1"), {
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
    }, 3).to(document.querySelector("#cover-2"), {
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
    }, 3.2).to(document.querySelector("#cover-3"), {
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
    }, 3.4).to(document.querySelector("#cover-4"), {
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
    }, 3.6) .from(document.querySelector("#welcome-sentence01"), {
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
        opacity: 0,
    }, 3.8).from(document.querySelector("#welcome-sentence02"), {
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
        opacity: 0,
    }, 4.0).from(document.querySelector("#welcome-sentence03"), {
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
        opacity: 0,
    }, 4.2).from(document.querySelector("#welcome-sentence04"), {
        xPercent: -100,
        duration: 1,
        ease: "power1.out",
        opacity: 0,
        onComplete: () => {
            console.log('completed timeline');
        // showScrollDown();
        // showContent();
        },
    }, 4.4);
    
    // clean up function
    return (): void => {
      tl.kill();
      return;
    };
  }, [tl]);

  return (
    <div className={styles['page-enter-animation-wrapper']}>
      <div id="cover-4" className={styles['cover-4']}></div>
      <div id="cover-3" className={styles['cover-3']}></div>
      <div id="cover-2" className={styles['cover-2']}></div>

      <div id="cover-1" className={styles['cover-1']}>
        <div id="cover-heading" className={styles['cover-heading']}>
          <div id="cover-name" className={styles['cover-name']}>Mingjie Wang</div>
          <div id="cover-dot" className={styles['cover-dot']}>.</div>
        </div>
      </div>

      <section id='welcome-sentence' className={styles['welcome-sentence']}>
        <p id="welcome-sentence01">
          {" "}
          <span>W</span>ELCO<span>M</span>E TO{" "}
        </p>
        <p id="welcome-sentence02">
          {" "}
          <span>M</span>IN<span>G</span>JIE <span>WA</span>NG<span>'</span>S{" "}
        </p>
        <p id="welcome-sentence03">
          {" "}
          PE<span>R</span>SON<span>A</span>L SP<span>A</span>CE{" "}
        </p>
        <p id="welcome-sentence04"> (σ'ω')σ </p>
      </section>
    </div>
  );
}
